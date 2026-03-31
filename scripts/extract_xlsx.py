import os
import zipfile
import xml.etree.ElementTree as ET
import json

def get_shared_strings(zf):
    try:
        with zf.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            # Namespace handling
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            return [node.text if (node := si.find('ns:t', ns)) is not None else "" for si in root.findall('ns:si', ns)]
    except KeyError:
        return []

def parse_sheet(zf, shared_strings):
    with zf.open('xl/worksheets/sheet1.xml') as f:
        tree = ET.parse(f)
        root = tree.getroot()
        ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        
        rows = []
        for row_node in root.findall('.//ns:row', ns):
            row_data = {}
            for cell in row_node.findall('ns:c', ns):
                cell_ref = cell.get('r')
                col = "".join(filter(str.isalpha, cell_ref))
                val_node = cell.find('ns:v', ns)
                if val_node is not None:
                    val = val_node.text
                    if cell.get('t') == 's':
                        val = shared_strings[int(val)]
                    row_data[col] = val
            if row_data:
                rows.append(row_data)
        return rows

def process_files(base_path):
    all_data = {
        "RC": {"title": "Reading Comprehension", "sections": []},
        "LC": {"title": "Listening Comprehension", "sections": []},
        "LFM": {"title": "Language Form & Meaning", "sections": []}
    }

    for filename in sorted(os.listdir(base_path)):
        if not filename.endswith('.xlsx') or filename.startswith('.'):
            continue
            
        file_path = os.path.join(base_path, filename)
        module_key = "RC"
        if "LC" in filename: module_key = "LC"
        elif "LFM" in filename: module_key = "LFM"
        
        print(f"Processing: {filename} -> {module_key}")
        
        try:
            with zipfile.ZipFile(file_path, 'r') as zf:
                shared_strings = get_shared_strings(zf)
                rows = parse_sheet(zf, shared_strings)
                
                # Filter headers and process data
                # Usually: A=Word, B=POS/Meaning, C=En Sentence, D=Zh Sentence
                # We'll skip the first row if it looks like a header
                words = []
                for row in rows:
                    word = row.get('A', '').strip()
                    if not word or word.lower() in ['word', 'no.', 'no']: continue
                    
                    words.append({
                        "word": word,
                        "pos_meaning": row.get('B', ''),
                        "en": row.get('C', ''),
                        "zh": row.get('D', '')
                    })
                
                if words:
                    # Group into units of 16
                    units = []
                    for i in range(0, len(words), 16):
                        units.append({
                            "id": (i // 16) + 1,
                            "words": words[i : i + 16]
                        })
                    
                    all_data[module_key]["sections"].append({
                        "name": filename.replace('.xlsx', '').strip(),
                        "units": units
                    })
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    return all_data

if __name__ == "__main__":
    data_dir = "materials/To Meet & Exceed"
    extracted = process_files(data_dir)
    
    # Save as data.js
    content = f"const VOCAB_DATA = {json.dumps(list(extracted.values()), indent=2, ensure_ascii=False)};\n\nexport default VOCAB_DATA;"
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Done! data.js updated.")
