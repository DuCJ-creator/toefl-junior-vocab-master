import os
import zipfile
import xml.etree.ElementTree as ET
import json
import re

def get_shared_strings(zf):
    try:
        with zf.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
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
            if row_data: rows.append(row_data)
        return rows

def rc_sort_key(filename):
    name = filename.lower()
    # 1. Preface
    if "preface" in name: return (0, 0)
    # 2. Diagnostic
    if "diagnostic" in name: return (1, 0)
    # 3. Strategies (1-9)
    if "strategy" in name:
        num_match = re.search(r'strategy (\d+)', name)
        num = int(num_match.group(1)) if num_match else 99
        return (2, num)
    # 4. To Meet
    if "to meet" in name or "to meet" in name.replace("meet", "meet "):
        num_match = re.search(r'(\d+)', name)
        num = int(num_match.group(1)) if num_match else 99
        return (3, num)
    # 5. To Exceed
    if "to exceed" in name or "to exceed" in name.replace("exceed", "exceed "):
        num_match = re.search(r'(\d+)', name)
        num = int(num_match.group(1)) if num_match else 99
        return (4, num)
    return (5, name)

def process_all_materials(base_path):
    modules = {
        "RC": {"title": "Reading Comprehension", "units": []},
        "LC": {"title": "Listening Comprehension", "units": []},
        "LFM": {"title": "Language Form & Meaning", "units": []}
    }

    files_by_module = {"RC": [], "LC": [], "LFM": []}
    for filename in os.listdir(base_path):
        if not filename.endswith('.xlsx') or filename.startswith('.'): continue
        if "LC" in filename: files_by_module["LC"].append(filename)
        elif "LFM" in filename: files_by_module["LFM"].append(filename)
        else: files_by_module["RC"].append(filename)

    # Sort RC specifically
    files_by_module["RC"].sort(key=rc_sort_key)
    files_by_module["LC"].sort()
    files_by_module["LFM"].sort()

    for m_key in ["RC", "LC", "LFM"]:
        for idx, filename in enumerate(files_by_module[m_key]):
            file_path = os.path.join(base_path, filename)
            print(f"Parsing {m_key} Unit {idx+1}: {filename}")
            try:
                with zipfile.ZipFile(file_path, 'r') as zf:
                    ss = get_shared_strings(zf)
                    rows = parse_sheet(zf, ss)
                    words = []
                    for row in rows:
                        word = str(row.get('A', '')).strip()
                        if not word or word.lower() in ['word', 'no.', 'no']: continue
                        # COLUMN MAPPING (A:Word, B:POS, C:Meaning, D:EnSent, E:ZhSent)
                        words.append({
                            "word": word,
                            "pos": str(row.get('B', '')).strip(),
                            "meaning": str(row.get('C', '')).strip(),
                            "en": str(row.get('D', '')).strip(),
                            "zh": str(row.get('E', '')).strip()
                        })
                    if words:
                        modules[m_key]["units"].append({
                            "id": idx + 1,
                            "name": filename.replace('.xlsx', '').strip(),
                            "words": words
                        })
            except Exception as e:
                print(f"Error {filename}: {e}")

    return list(modules.values())

if __name__ == "__main__":
    data_dir = "materials/To Meet & Exceed"
    final_data = process_all_materials(data_dir)
    content = f"const VOCAB_DATA = {json.dumps(final_data, indent=2, ensure_ascii=False)};\n\nexport default VOCAB_DATA;"
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Success! data.js regenerated with correct column mapping and custom RC order.")
