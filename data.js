const VOCAB_DATA = [
  {
    "title": "Reading Comprehension",
    "units": [
      {
        "id": 1,
        "name": "Preface and RC Intro",
        "words": [
          {
            "word": "abstract",
            "pos": "adj./n.",
            "meaning": "抽象的；摘要",
            "en": "His ideas are too abstract to understand.",
            "zh": "他的想法太抽象，難以理解。"
          },
          {
            "word": "academic",
            "pos": "adj./n.",
            "meaning": "學術的；學者",
            "en": "She has an excellent academic record.",
            "zh": "她的學術成績非常優異。"
          },
          {
            "word": "accompany",
            "pos": "v.",
            "meaning": "陪伴；伴隨",
            "en": "He will accompany me to the meeting.",
            "zh": "他將陪我一起去開會。"
          },
          {
            "word": "accordingly",
            "pos": "adv.",
            "meaning": "因此；相應地",
            "en": "We have different opinions, so we should act accordingly.",
            "zh": "我們有不同的意見，所以應該相應地行動。"
          },
          {
            "word": "achievement",
            "pos": "n.",
            "meaning": "成就；完成",
            "en": "Winning the award was a great achievement.",
            "zh": "獲得這個獎項是一項偉大的成就。"
          },
          {
            "word": "acknowledge",
            "pos": "v.",
            "meaning": "承認；感謝",
            "en": "She acknowledged her mistake.",
            "zh": "她承認了自己的錯誤。"
          },
          {
            "word": "adapt",
            "pos": "v.",
            "meaning": "適應；改編",
            "en": "Animals adapt to their environments.",
            "zh": "動物會適應它們的環境。"
          },
          {
            "word": "administer",
            "pos": "v.",
            "meaning": "管理；執行",
            "en": "The teacher administered the test.",
            "zh": "老師監督了這次考試。"
          },
          {
            "word": "advantage",
            "pos": "n.",
            "meaning": "優勢；好處",
            "en": "Being bilingual is an advantage in the job market.",
            "zh": "會說雙語在職場上是一種優勢。"
          },
          {
            "word": "advertisement",
            "pos": "n.",
            "meaning": "廣告",
            "en": "I saw an advertisement for a new phone.",
            "zh": "我看到了一則新手機的廣告。"
          },
          {
            "word": "agency",
            "pos": "n.",
            "meaning": "機構；代理商",
            "en": "She works for a travel agency.",
            "zh": "她在一家旅行社工作。"
          },
          {
            "word": "ambition",
            "pos": "n.",
            "meaning": "野心；抱負",
            "en": "His ambition is to become a doctor.",
            "zh": "他的抱負是成為一名醫生。"
          },
          {
            "word": "announcement",
            "pos": "n.",
            "meaning": "公告；通知",
            "en": "The school made an important announcement.",
            "zh": "學校發布了一個重要公告。"
          },
          {
            "word": "applicants",
            "pos": "n.",
            "meaning": "申請人",
            "en": "There were many applicants for the job.",
            "zh": "這個職位有許多申請人。"
          },
          {
            "word": "appropriate",
            "pos": "adj.",
            "meaning": "合適的；適當的",
            "en": "Wear appropriate clothes for the interview.",
            "zh": "穿著適當的衣服去面試。"
          },
          {
            "word": "approve",
            "pos": "v.",
            "meaning": "批准；贊同",
            "en": "The manager approved my request.",
            "zh": "經理批准了我的請求。"
          },
          {
            "word": "arise",
            "pos": "v.",
            "meaning": "出現；產生",
            "en": "Problems may arise during the project.",
            "zh": "這個專案可能會出現問題。"
          },
          {
            "word": "aspect",
            "pos": "n.",
            "meaning": "方面",
            "en": "The cultural aspect of the country is fascinating.",
            "zh": "這個國家的文化方面很迷人。"
          },
          {
            "word": "assess",
            "pos": "v.",
            "meaning": "評估",
            "en": "The teacher assessed the students' progress.",
            "zh": "老師評估了學生的進步情況。"
          },
          {
            "word": "assessment",
            "pos": "n.",
            "meaning": "評估",
            "en": "The company conducted a risk assessment.",
            "zh": "這家公司進行了風險評估。"
          },
          {
            "word": "assign",
            "pos": "v.",
            "meaning": "分配；指派",
            "en": "The teacher assigned us homework.",
            "zh": "老師給我們布置了作業。"
          },
          {
            "word": "assist",
            "pos": "v.",
            "meaning": "幫助",
            "en": "He assisted me with my homework.",
            "zh": "他幫助我完成作業。"
          },
          {
            "word": "background",
            "pos": "n.",
            "meaning": "背景",
            "en": "She has a strong academic background.",
            "zh": "她有良好的學術背景。"
          },
          {
            "word": "bronze",
            "pos": "n./adj.",
            "meaning": "青銅；青銅色的",
            "en": "The statue was made of bronze.",
            "zh": "這座雕像是青銅製成的。"
          },
          {
            "word": "certificate",
            "pos": "n.",
            "meaning": "證書；證明",
            "en": "He received a graduation certificate.",
            "zh": "他獲得了畢業證書。"
          },
          {
            "word": "cite",
            "pos": "v.",
            "meaning": "引用；舉例",
            "en": "The professor cited several studies.",
            "zh": "教授引用了幾項研究。"
          },
          {
            "word": "clause",
            "pos": "n.",
            "meaning": "子句",
            "en": "\"Because she was late\" is a subordinate clause.",
            "zh": "“因為她遲到了” 是一個從屬子句。"
          },
          {
            "word": "coherent",
            "pos": "adj.",
            "meaning": "連貫的；一致的",
            "en": "His argument was clear and coherent.",
            "zh": "他的論點清晰且連貫。"
          },
          {
            "word": "communicate",
            "pos": "v.",
            "meaning": "溝通",
            "en": "We need to communicate more effectively.",
            "zh": "我們需要更有效地溝通。"
          },
          {
            "word": "comparison",
            "pos": "n.",
            "meaning": "比較",
            "en": "The comparison between the two products was helpful.",
            "zh": "這兩種產品的比較很有幫助。"
          },
          {
            "word": "compile",
            "pos": "v.",
            "meaning": "編輯；匯整",
            "en": "He compiled a list of useful websites.",
            "zh": "他整理了一份有用的網站清單。"
          },
          {
            "word": "complexity",
            "pos": "n.",
            "meaning": "複雜性",
            "en": "The complexity of the problem made it hard to solve.",
            "zh": "這個問題的複雜性讓它難以解決。"
          },
          {
            "word": "complicated",
            "pos": "adj.",
            "meaning": "複雜的",
            "en": "The math problem was very complicated.",
            "zh": "這道數學題非常複雜。"
          },
          {
            "word": "compose",
            "pos": "v.",
            "meaning": "組成；作曲",
            "en": "Water is composed of hydrogen and oxygen.",
            "zh": "水是由氫和氧組成的。"
          },
          {
            "word": "comprehend",
            "pos": "v.",
            "meaning": "理解",
            "en": "He couldn’t comprehend the instructions.",
            "zh": "他無法理解這些指示。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解力",
            "en": "Reading comprehension is important for learning.",
            "zh": "閱讀理解對學習很重要。"
          },
          {
            "word": "concept",
            "pos": "n.",
            "meaning": "概念",
            "en": "The concept of gravity was explained.",
            "zh": "物理老師解釋了重力的概念。"
          },
          {
            "word": "concrete",
            "pos": "adj.",
            "meaning": "具體的；混凝土的",
            "en": "We need a concrete plan to solve the problem.",
            "zh": "我們需要一個具體的計畫來解決問題。"
          },
          {
            "word": "connect",
            "pos": "v.",
            "meaning": "連接；聯繫",
            "en": "The bridge connects the two cities.",
            "zh": "這座橋連接了兩個城市。"
          },
          {
            "word": "consistently",
            "pos": "adv.",
            "meaning": "一貫地；持續地",
            "en": "She consistently arrives on time.",
            "zh": "她總是準時到達。"
          },
          {
            "word": "consist",
            "pos": "v.",
            "meaning": "由…組成",
            "en": "The team consists of five members.",
            "zh": "這個團隊由五名成員組成。"
          },
          {
            "word": "correspondence",
            "pos": "n.",
            "meaning": "通信；對應",
            "en": "We have regular correspondence with our clients.",
            "zh": "我們與客戶保持定期通信。"
          },
          {
            "word": "correspond",
            "pos": "v.",
            "meaning": "符合；通信",
            "en": "Your story corresponds with his account.",
            "zh": "你的說法與他的描述相符。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new law.",
            "zh": "市議會批准了新法律。"
          },
          {
            "word": "criteria",
            "pos": "n. (pl.)",
            "meaning": "標準",
            "en": "The main criteria for the job are experience and skills.",
            "zh": "這份工作的主要標準是經驗和技能。"
          },
          {
            "word": "demanding",
            "pos": "adj.",
            "meaning": "要求高的；費力的",
            "en": "This is a very demanding job.",
            "zh": "這是一份要求很高的工作。"
          },
          {
            "word": "demonstrate",
            "pos": "v.",
            "meaning": "示範；展示",
            "en": "The teacher demonstrated how to use the tool.",
            "zh": "老師示範了如何使用這個工具。"
          },
          {
            "word": "determine",
            "pos": "v.",
            "meaning": "決定；確定",
            "en": "The results will determine the winner.",
            "zh": "這些結果將決定勝者。"
          },
          {
            "word": "device",
            "pos": "n.",
            "meaning": "設備；裝置",
            "en": "He bought a new electronic device.",
            "zh": "他買了一個新的電子裝置。"
          },
          {
            "word": "diagnosis",
            "pos": "n.",
            "meaning": "診斷",
            "en": "The doctor gave her a diagnosis of flu.",
            "zh": "醫生診斷她得了流感。"
          },
          {
            "word": "diagram",
            "pos": "n.",
            "meaning": "圖表",
            "en": "The book includes a diagram of the human brain.",
            "zh": "這本書包含了人腦的圖解。"
          },
          {
            "word": "differ",
            "pos": "v.",
            "meaning": "不同；相異",
            "en": "Their opinions differ on this issue.",
            "zh": "他們對這個問題的意見不同。"
          },
          {
            "word": "differentiate",
            "pos": "v.",
            "meaning": "區分；區別",
            "en": "It’s important to differentiate between fact and opinion.",
            "zh": "區分事實和意見是很重要的。"
          },
          {
            "word": "disadvantage",
            "pos": "n.",
            "meaning": "缺點",
            "en": "A major disadvantage of the plan is its high cost.",
            "zh": "這個計畫的主要缺點是成本高。"
          },
          {
            "word": "editor",
            "pos": "n.",
            "meaning": "編輯",
            "en": "She works as an editor for a fashion magazine.",
            "zh": "她在一家時尚雜誌擔任編輯。"
          },
          {
            "word": "educational",
            "pos": "adj.",
            "meaning": "教育的",
            "en": "The trip was very educational for the students.",
            "zh": "這次旅行對學生來說非常具有教育意義。"
          },
          {
            "word": "encounter",
            "pos": "v./n.",
            "meaning": "遇見；遭遇",
            "en": "We encountered some problems during the project.",
            "zh": "我們在專案中遇到了一些問題。"
          },
          {
            "word": "endorse",
            "pos": "v.",
            "meaning": "支持；認可",
            "en": "The celebrity endorsed the new product.",
            "zh": "這位名人代言了這款新產品。"
          },
          {
            "word": "equivalent",
            "pos": "adj./n.",
            "meaning": "相等的；等值物",
            "en": "A mile is roughly equivalent to 1.6 kilometers.",
            "zh": "一英里大約等於 1.6 公里。"
          },
          {
            "word": "essential",
            "pos": "adj.",
            "meaning": "必要的；基本的",
            "en": "Water is essential for life.",
            "zh": "水對生命至關重要。"
          },
          {
            "word": "exceed",
            "pos": "v.",
            "meaning": "超過",
            "en": "The sales exceeded our expectations.",
            "zh": "銷售額超出了我們的預期。"
          },
          {
            "word": "exchange",
            "pos": "v./n.",
            "meaning": "交換",
            "en": "They exchanged phone numbers after the meeting.",
            "zh": "他們在會議後交換了電話號碼。"
          },
          {
            "word": "expand",
            "pos": "v.",
            "meaning": "擴展",
            "en": "The company is expanding its business overseas.",
            "zh": "這家公司正在海外擴展業務。"
          },
          {
            "word": "explanation",
            "pos": "n.",
            "meaning": "解釋",
            "en": "The teacher gave a clear explanation of the topic.",
            "zh": "老師對這個主題做了清楚的解釋。"
          },
          {
            "word": "facilitate",
            "pos": "v.",
            "meaning": "促進；使便利",
            "en": "The new software facilitates online learning.",
            "zh": "這款新軟體促進了線上學習。"
          },
          {
            "word": "familiar",
            "pos": "adj.",
            "meaning": "熟悉的",
            "en": "She is familiar with the new system.",
            "zh": "她對這個新系統很熟悉。"
          },
          {
            "word": "finite",
            "pos": "adj.",
            "meaning": "有限的",
            "en": "The earth’s resources are finite.",
            "zh": "地球的資源是有限的。"
          },
          {
            "word": "flexibly",
            "pos": "adv.",
            "meaning": "靈活地",
            "en": "He handled the problem flexibly.",
            "zh": "他靈活地處理了這個問題。"
          },
          {
            "word": "fluency",
            "pos": "n.",
            "meaning": "流利度",
            "en": "She speaks English with great fluency.",
            "zh": "她的英語非常流利。"
          },
          {
            "word": "fluently",
            "pos": "adv.",
            "meaning": "流利地",
            "en": "He speaks Spanish fluently.",
            "zh": "他能流利地說西班牙語。"
          },
          {
            "word": "foundation",
            "pos": "n.",
            "meaning": "基礎；基金會",
            "en": "A strong foundation in math is important for engineering.",
            "zh": "良好的數學基礎對工程學很重要。"
          },
          {
            "word": "framework",
            "pos": "n.",
            "meaning": "框架；架構",
            "en": "The new law provides a framework for environmental protection.",
            "zh": "新法律為環境保護提供了框架。"
          },
          {
            "word": "frequently",
            "pos": "adv.",
            "meaning": "頻繁地",
            "en": "She frequently visits her grandparents.",
            "zh": "她經常去看望祖父母。"
          },
          {
            "word": "gap",
            "pos": "n.",
            "meaning": "差距；缺口",
            "en": "There is a gap between rich and poor.",
            "zh": "貧富之間存在差距。"
          },
          {
            "word": "geography",
            "pos": "n.",
            "meaning": "地理",
            "en": "He is studying world geography.",
            "zh": "他正在學習世界地理。"
          },
          {
            "word": "grammatical",
            "pos": "adj.",
            "meaning": "文法的",
            "en": "His sentence is not grammatically correct.",
            "zh": "他的句子在語法上不正確。"
          },
          {
            "word": "guidance",
            "pos": "n.",
            "meaning": "指導",
            "en": "The teacher provided guidance on the project.",
            "zh": "老師為這個專案提供了指導。"
          },
          {
            "word": "horizon",
            "pos": "n.",
            "meaning": "地平線；眼界",
            "en": "Traveling can broaden your horizons.",
            "zh": "旅行可以拓展你的視野。"
          },
          {
            "word": "immediate",
            "pos": "adj.",
            "meaning": "立即的；直接的",
            "en": "He needs immediate medical attention.",
            "zh": "他需要立即的醫療照顧。"
          },
          {
            "word": "implicit",
            "pos": "adj.",
            "meaning": "含蓄的；隱含的",
            "en": "His message contained an implicit warning.",
            "zh": "他的話中隱含著警告。"
          },
          {
            "word": "inform",
            "pos": "v.",
            "meaning": "通知",
            "en": "Please inform me of any changes.",
            "zh": "請通知我任何變更。"
          },
          {
            "word": "input",
            "pos": "n.",
            "meaning": "輸入；意見",
            "en": "Your input on the project is valuable.",
            "zh": "你對這個專案的意見很有價值。"
          },
          {
            "word": "institution",
            "pos": "n.",
            "meaning": "機構；制度",
            "en": "Harvard is a well-known educational institution.",
            "zh": "哈佛是一所有名的教育機構。"
          },
          {
            "word": "integrate",
            "pos": "v.",
            "meaning": "整合；融入",
            "en": "The new system integrates various technologies.",
            "zh": "這個新系統整合了多種技術。"
          },
          {
            "word": "interact",
            "pos": "v.",
            "meaning": "互動",
            "en": "Students should interact more with their teachers.",
            "zh": "學生應該與老師有更多互動。"
          },
          {
            "word": "interaction",
            "pos": "n.",
            "meaning": "互動",
            "en": "The interaction between students and teachers is important.",
            "zh": "學生與老師之間的互動很重要。"
          },
          {
            "word": "intermediate",
            "pos": "adj.",
            "meaning": "中級的",
            "en": "He is taking an intermediate-level English class.",
            "zh": "他正在上中級英語課程。"
          },
          {
            "word": "issue",
            "pos": "n.",
            "meaning": "問題；議題",
            "en": "Climate change is a major global issue.",
            "zh": "氣候變遷是一個全球性的議題。"
          },
          {
            "word": "journey",
            "pos": "n.",
            "meaning": "旅程",
            "en": "Their journey lasted for two weeks.",
            "zh": "他們的旅程持續了兩週。"
          },
          {
            "word": "junior",
            "pos": "adj./n.",
            "meaning": "年幼的；低年級生",
            "en": "He is a junior in high school.",
            "zh": "他是高中三年級的學生。"
          },
          {
            "word": "leisure",
            "pos": "n.",
            "meaning": "休閒",
            "en": "I enjoy reading in my leisure time.",
            "zh": "我喜歡在空閒時間閱讀。"
          },
          {
            "word": "location",
            "pos": "n.",
            "meaning": "位置",
            "en": "The hotel is in a great location.",
            "zh": "這家飯店的位置很好。"
          },
          {
            "word": "march",
            "pos": "v./n.",
            "meaning": "行進；三月",
            "en": "The soldiers marched down the street.",
            "zh": "士兵沿著街道行進。"
          },
          {
            "word": "meaningful",
            "pos": "adj.",
            "meaning": "有意義的",
            "en": "She wants to do meaningful work.",
            "zh": "她想做有意義的工作。"
          },
          {
            "word": "measure",
            "pos": "v./n.",
            "meaning": "測量；措施",
            "en": "The carpenter measured the table.",
            "zh": "木匠測量了桌子的尺寸。"
          },
          {
            "word": "mental",
            "pos": "adj.",
            "meaning": "心理的；精神的",
            "en": "Stress can affect your mental health.",
            "zh": "壓力會影響你的心理健康。"
          },
          {
            "word": "milestone",
            "pos": "n.",
            "meaning": "里程碑",
            "en": "Graduation is an important milestone in life.",
            "zh": "畢業是人生中的一個重要里程碑。"
          },
          {
            "word": "mock",
            "pos": "v./adj.",
            "meaning": "嘲笑；模擬的",
            "en": "The students mocked his accent.",
            "zh": "學生們嘲笑他的口音。"
          },
          {
            "word": "monitor",
            "pos": "v./n.",
            "meaning": "監視；顯示器",
            "en": "The doctor monitored his heart rate.",
            "zh": "醫生監測他的心率。"
          },
          {
            "word": "motivated",
            "pos": "adj.",
            "meaning": "有動力的",
            "en": "She is highly motivated to succeed.",
            "zh": "她非常有動力取得成功。"
          },
          {
            "word": "multiple",
            "pos": "adj.",
            "meaning": "多個的",
            "en": "He has multiple responsibilities at work.",
            "zh": "他在工作中有多項職責。"
          },
          {
            "word": "narrative",
            "pos": "n.",
            "meaning": "敘述；故事",
            "en": "The novel has a compelling narrative.",
            "zh": "這本小說有引人入勝的敘述。"
          },
          {
            "word": "native",
            "pos": "adj./n.",
            "meaning": "本地的；本地人",
            "en": "She is a native speaker of French.",
            "zh": "她是法語的母語者。"
          },
          {
            "word": "option",
            "pos": "n.",
            "meaning": "選項",
            "en": "You have the option to choose any course.",
            "zh": "你可以選擇任何課程。"
          },
          {
            "word": "organize",
            "pos": "v.",
            "meaning": "組織；安排",
            "en": "He organized the files neatly.",
            "zh": "他把文件整理得很整齊。"
          },
          {
            "word": "overall",
            "pos": "adj./adv.",
            "meaning": "整體的；總體上",
            "en": "His overall performance was impressive.",
            "zh": "他的整體表現令人印象深刻。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "段落；通道",
            "en": "Read the passage carefully before answering.",
            "zh": "在回答問題前請仔細閱讀這段文章。"
          },
          {
            "word": "persuasive",
            "pos": "adj.",
            "meaning": "有說服力的",
            "en": "Her speech was very persuasive.",
            "zh": "她的演講非常有說服力。"
          },
          {
            "word": "precisely",
            "pos": "adv.",
            "meaning": "精確地；正是",
            "en": "The clock shows the time precisely.",
            "zh": "這個時鐘顯示的時間非常準確。"
          },
          {
            "word": "preparation",
            "pos": "n.",
            "meaning": "準備",
            "en": "Preparation is key to success.",
            "zh": "準備是成功的關鍵。"
          },
          {
            "word": "presentation",
            "pos": "n.",
            "meaning": "報告；展示",
            "en": "She gave a great presentation at the meeting.",
            "zh": "她在會議上做了一個很棒的報告。"
          },
          {
            "word": "previous",
            "pos": "adj.",
            "meaning": "先前的",
            "en": "He has previous experience in sales.",
            "zh": "他有銷售方面的經驗。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "The company is processing the order.",
            "zh": "這家公司正在處理訂單。"
          },
          {
            "word": "professional",
            "pos": "adj./n.",
            "meaning": "專業的；專業人士",
            "en": "She is a professional musician.",
            "zh": "她是一位專業音樂家。"
          },
          {
            "word": "proficiency",
            "pos": "n.",
            "meaning": "熟練；精通",
            "en": "He has a high level of proficiency in English.",
            "zh": "他的英語熟練程度很高。"
          },
          {
            "word": "prospective",
            "pos": "adj.",
            "meaning": "潛在的；未來的",
            "en": "They interviewed prospective employees.",
            "zh": "他們面試了潛在的員工。"
          },
          {
            "word": "publication",
            "pos": "n.",
            "meaning": "出版物；發表",
            "en": "His article was accepted for publication.",
            "zh": "他的文章被接受發表了。"
          },
          {
            "word": "publisher",
            "pos": "n.",
            "meaning": "出版商",
            "en": "The book was released by a well-known publisher.",
            "zh": "這本書由知名出版社發行。"
          },
          {
            "word": "refer",
            "pos": "v.",
            "meaning": "提及；參考",
            "en": "He referred to the article in his report.",
            "zh": "他在報告中提到了這篇文章。"
          },
          {
            "word": "reference",
            "pos": "n.",
            "meaning": "參考；推薦信",
            "en": "She provided a reference for the job application.",
            "zh": "她為求職申請提供了一封推薦信。"
          },
          {
            "word": "register",
            "pos": "v./n.",
            "meaning": "註冊；登記",
            "en": "You need to register for the event online.",
            "zh": "你需要在網上註冊參加這個活動。"
          },
          {
            "word": "regulate",
            "pos": "v.",
            "meaning": "管理；調節",
            "en": "The government regulates food safety.",
            "zh": "政府監管食品安全。"
          },
          {
            "word": "relevant",
            "pos": "adj.",
            "meaning": "相關的",
            "en": "The information is relevant to the topic.",
            "zh": "這些資訊與主題相關。"
          },
          {
            "word": "rely",
            "pos": "v.",
            "meaning": "依賴",
            "en": "We rely on technology every day.",
            "zh": "我們每天都依賴科技。"
          },
          {
            "word": "research",
            "pos": "n./v.",
            "meaning": "研究",
            "en": "He is conducting research on climate change.",
            "zh": "他正在進行氣候變遷研究。"
          },
          {
            "word": "resource",
            "pos": "n.",
            "meaning": "資源",
            "en": "Water is an important natural resource.",
            "zh": "水是一種重要的自然資源。"
          },
          {
            "word": "routine",
            "pos": "n./adj.",
            "meaning": "例行公事；日常的",
            "en": "Exercise is part of his daily routine.",
            "zh": "運動是他日常生活的一部分。"
          },
          {
            "word": "satisfaction",
            "pos": "n.",
            "meaning": "滿意",
            "en": "He expressed great satisfaction with the results.",
            "zh": "他對結果表示非常滿意。"
          },
          {
            "word": "scale",
            "pos": "n.",
            "meaning": "規模；比例",
            "en": "The project was done on a large scale.",
            "zh": "這個項目是大規模進行的。"
          },
          {
            "word": "series",
            "pos": "n.",
            "meaning": "系列；連續",
            "en": "She wrote a popular book series.",
            "zh": "她寫了一本受歡迎的系列書籍。"
          },
          {
            "word": "shade",
            "pos": "n.",
            "meaning": "陰影；色調",
            "en": "We sat in the shade of a big tree.",
            "zh": "我們坐在大樹的陰影下。"
          },
          {
            "word": "situation",
            "pos": "n.",
            "meaning": "情況",
            "en": "The situation is under control.",
            "zh": "情況已經得到控制。"
          },
          {
            "word": "skim",
            "pos": "v.",
            "meaning": "略讀",
            "en": "He skimmed through the article.",
            "zh": "他快速瀏覽了這篇文章。"
          },
          {
            "word": "skip",
            "pos": "v.",
            "meaning": "略過；跳過",
            "en": "He skipped breakfast today.",
            "zh": "他今天跳過了早餐。"
          },
          {
            "word": "specialized",
            "pos": "adj.",
            "meaning": "專業的；專門的",
            "en": "He has specialized knowledge in engineering.",
            "zh": "他在工程領域有專業知識。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "She gave specific instructions.",
            "zh": "她給出了具體的指示。"
          },
          {
            "word": "spontaneously",
            "pos": "adv.",
            "meaning": "自發地",
            "en": "She spoke spontaneously at the meeting.",
            "zh": "她在會議上即興發言。"
          },
          {
            "word": "stake",
            "pos": "n.",
            "meaning": "賭注；風險",
            "en": "There is a lot at stake in this decision.",
            "zh": "這個決策關係重大。"
          },
          {
            "word": "strain",
            "pos": "n./v.",
            "meaning": "壓力；拉緊",
            "en": "The heavy workload put a strain on him.",
            "zh": "繁重的工作讓他感到壓力。"
          },
          {
            "word": "strategy",
            "pos": "n.",
            "meaning": "策略",
            "en": "Their marketing strategy was very effective.",
            "zh": "他們的行銷策略非常有效。"
          },
          {
            "word": "structure",
            "pos": "n.",
            "meaning": "結構",
            "en": "The essay has a clear structure.",
            "zh": "這篇文章的結構清晰。"
          },
          {
            "word": "sufficient",
            "pos": "adj.",
            "meaning": "充足的",
            "en": "We have sufficient evidence to support our argument.",
            "zh": "我們有足夠的證據支持我們的論點。"
          },
          {
            "word": "summarize",
            "pos": "v.",
            "meaning": "總結",
            "en": "She summarized the key points.",
            "zh": "她總結了要點。"
          },
          {
            "word": "technical",
            "pos": "adj.",
            "meaning": "技術的；專業的",
            "en": "The book is full of technical terms.",
            "zh": "這本書充滿了專業術語。"
          },
          {
            "word": "theme",
            "pos": "n.",
            "meaning": "主題",
            "en": "The theme of the story is friendship.",
            "zh": "這個故事的主題是友誼。"
          },
          {
            "word": "trademark",
            "pos": "n.",
            "meaning": "商標",
            "en": "The company registered its trademark.",
            "zh": "這家公司註冊了商標。"
          },
          {
            "word": "valid",
            "pos": "adj.",
            "meaning": "有效的",
            "en": "His passport is still valid.",
            "zh": "他的護照仍然有效。"
          },
          {
            "word": "various",
            "pos": "adj.",
            "meaning": "各種的",
            "en": "The shop sells various types of clothing.",
            "zh": "這家店賣各種不同類型的服裝。"
          },
          {
            "word": "vary",
            "pos": "v.",
            "meaning": "變化；不同",
            "en": "Prices vary depending on the season.",
            "zh": "價格根據季節變動。"
          },
          {
            "word": "viewpoint",
            "pos": "n.",
            "meaning": "觀點",
            "en": "We have different viewpoints on the matter.",
            "zh": "我們對這個問題有不同的觀點。"
          },
          {
            "word": "virtually",
            "pos": "adv.",
            "meaning": "幾乎；實際上",
            "en": "The project is virtually complete.",
            "zh": "這個專案幾乎完成了。"
          }
        ]
      },
      {
        "id": 2,
        "name": "RC Diagnostic Test",
        "words": [
          {
            "word": "absurd",
            "pos": "adj.",
            "meaning": "L5荒謬的;愚蠢的",
            "en": "",
            "zh": ""
          },
          {
            "word": "acceptable",
            "pos": "adj.",
            "meaning": "L3可以接受的;令人滿意的",
            "en": "",
            "zh": ""
          },
          {
            "word": "accommodation",
            "pos": "n.",
            "meaning": "L5適應;方便設施;住處",
            "en": "",
            "zh": ""
          },
          {
            "word": "acknowledge",
            "pos": "v.",
            "meaning": "L5承認;就……表示謝忱",
            "en": "",
            "zh": ""
          },
          {
            "word": "adaptation",
            "pos": "n.",
            "meaning": "L6適應;改寫",
            "en": "",
            "zh": ""
          },
          {
            "word": "admire",
            "pos": "v.",
            "meaning": "L3欽佩;欣賞",
            "en": "",
            "zh": ""
          },
          {
            "word": "admission",
            "pos": "n.",
            "meaning": "L4進入許可;入場費;承認",
            "en": "",
            "zh": ""
          },
          {
            "word": "adopt",
            "pos": "v.",
            "meaning": "L4採納;收養;接受",
            "en": "",
            "zh": ""
          },
          {
            "word": "advantage",
            "pos": "n.",
            "meaning": "L3優點,優勢;利益",
            "en": "",
            "zh": ""
          },
          {
            "word": "afford",
            "pos": "v.",
            "meaning": "L3買得起,付得起",
            "en": "",
            "zh": ""
          },
          {
            "word": "affordable",
            "pos": "adj.",
            "meaning": "L3買得起的,付得起的",
            "en": "",
            "zh": ""
          },
          {
            "word": "afterwards",
            "pos": "adv.",
            "meaning": "L3之後,後來,過後 (US: afterward)",
            "en": "",
            "zh": ""
          },
          {
            "word": "alley",
            "pos": "n.",
            "meaning": "L3小巷,後街",
            "en": "",
            "zh": ""
          },
          {
            "word": "antique",
            "pos": "n.",
            "meaning": "L5古物;古董;古風",
            "en": "",
            "zh": ""
          },
          {
            "word": "arena",
            "pos": "n.",
            "meaning": "L5體育場;競技場",
            "en": "",
            "zh": ""
          },
          {
            "word": "aside",
            "pos": "adv.",
            "meaning": "L3在旁邊;到(或向)旁邊",
            "en": "",
            "zh": ""
          },
          {
            "word": "associate",
            "pos": "v.",
            "meaning": "L4聯想,把...聯想在一起",
            "en": "",
            "zh": ""
          },
          {
            "word": "audience",
            "pos": "n.",
            "meaning": "L3聽眾",
            "en": "",
            "zh": ""
          },
          {
            "word": "auditorium",
            "pos": "n.",
            "meaning": "L6會堂;禮堂",
            "en": "",
            "zh": ""
          },
          {
            "word": "basin",
            "pos": "n.",
            "meaning": "L4臉盆;流域;水坑;內港",
            "en": "",
            "zh": ""
          },
          {
            "word": "batter",
            "pos": "v.",
            "meaning": "L6連續猛擊;搗毀;把...用舊",
            "en": "",
            "zh": ""
          },
          {
            "word": "bin",
            "pos": "n.",
            "meaning": "L4貯藏箱",
            "en": "",
            "zh": ""
          },
          {
            "word": "boom",
            "pos": "v.",
            "meaning": "L5發出隆隆聲;激增;暴漲;興旺",
            "en": "",
            "zh": ""
          },
          {
            "word": "bowling",
            "pos": "n.",
            "meaning": "L3保齡球戲",
            "en": "",
            "zh": ""
          },
          {
            "word": "brass",
            "pos": "adj./n.",
            "meaning": "L3黃銅製的,黃銅色的",
            "en": "",
            "zh": ""
          },
          {
            "word": "bull",
            "pos": "n.",
            "meaning": "L3公牛",
            "en": "",
            "zh": ""
          },
          {
            "word": "butcher",
            "pos": "v.",
            "meaning": "L5屠宰(牲口);",
            "en": "",
            "zh": ""
          },
          {
            "word": "career",
            "pos": "n.",
            "meaning": "L3職業;生涯;歷程",
            "en": "",
            "zh": ""
          },
          {
            "word": "cater",
            "pos": "v.",
            "meaning": "L6承辦宴席;迎合",
            "en": "",
            "zh": ""
          },
          {
            "word": "cheerful",
            "pos": "adj.",
            "meaning": "L3使人感到愉快的",
            "en": "",
            "zh": ""
          },
          {
            "word": "chemist",
            "pos": "n.",
            "meaning": "L6化學家",
            "en": "",
            "zh": ""
          },
          {
            "word": "chin",
            "pos": "n.",
            "meaning": "L3下巴",
            "en": "",
            "zh": ""
          },
          {
            "word": "cinema",
            "pos": "n.",
            "meaning": "L3電影院;電影;電影業",
            "en": "",
            "zh": ""
          },
          {
            "word": "coach",
            "pos": "v.",
            "meaning": "L3訓練,指導,輔導;乘馬車旅行;",
            "en": "",
            "zh": ""
          },
          {
            "word": "commitment",
            "pos": "n.",
            "meaning": "L5託付,交託; 承諾, 保證",
            "en": "",
            "zh": ""
          },
          {
            "word": "companion",
            "pos": "n.",
            "meaning": "L4同伴,伴侶",
            "en": "",
            "zh": ""
          },
          {
            "word": "competent",
            "pos": "adj.",
            "meaning": "L5有能力的;能幹的;能勝任的",
            "en": "",
            "zh": ""
          },
          {
            "word": "complain",
            "pos": "v.",
            "meaning": "L3抱怨",
            "en": "",
            "zh": ""
          },
          {
            "word": "composition",
            "pos": "n.",
            "meaning": "L4寫作;作曲;作品;作文",
            "en": "",
            "zh": ""
          },
          {
            "word": "concert",
            "pos": "n.",
            "meaning": "L3音樂會,演奏會",
            "en": "",
            "zh": ""
          },
          {
            "word": "consequently",
            "pos": "adv.",
            "meaning": "L4因此，從而",
            "en": "",
            "zh": ""
          },
          {
            "word": "conservative",
            "pos": "adj.",
            "meaning": "L4保守的,守舊的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "consist",
            "pos": "v.",
            "meaning": "L4組成,構成",
            "en": "",
            "zh": ""
          },
          {
            "word": "constant",
            "pos": "adj.",
            "meaning": "L3固定的,不變的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "corporate",
            "pos": "adj.",
            "meaning": "L5法人(組織)的;團體的;共同的",
            "en": "",
            "zh": ""
          },
          {
            "word": "cottage",
            "pos": "n.",
            "meaning": "L4小屋",
            "en": "",
            "zh": ""
          },
          {
            "word": "cotton",
            "pos": "n.",
            "meaning": "L3棉花",
            "en": "",
            "zh": ""
          },
          {
            "word": "crystal",
            "pos": "adj.",
            "meaning": "L5水晶的",
            "en": "",
            "zh": ""
          },
          {
            "word": "cuisine",
            "pos": "n.",
            "meaning": "L5烹飪(法);菜餚",
            "en": "",
            "zh": ""
          },
          {
            "word": "decorate",
            "pos": "v.",
            "meaning": "L3佈置",
            "en": "",
            "zh": ""
          },
          {
            "word": "definitely",
            "pos": "adv.",
            "meaning": "L4明確地,確切地",
            "en": "",
            "zh": ""
          },
          {
            "word": "delegate",
            "pos": "v.",
            "meaning": "L5委派...為代表",
            "en": "",
            "zh": ""
          },
          {
            "word": "delicate",
            "pos": "adj.",
            "meaning": "L4易碎的;嬌貴的；輕柔的",
            "en": "",
            "zh": ""
          },
          {
            "word": "delighted",
            "pos": "adj.",
            "meaning": "L4高興的",
            "en": "",
            "zh": ""
          },
          {
            "word": "depressing",
            "pos": "adj.",
            "meaning": "L5令人壓抑/沮喪的",
            "en": "",
            "zh": ""
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "L4不管,儘管,任憑",
            "en": "",
            "zh": ""
          },
          {
            "word": "determine",
            "pos": "v.",
            "meaning": "L3決定",
            "en": "",
            "zh": ""
          },
          {
            "word": "dine",
            "pos": "v.",
            "meaning": "L3進餐,用餐",
            "en": "",
            "zh": ""
          },
          {
            "word": "disadvantage",
            "pos": "n.",
            "meaning": "L4不利條件/地位",
            "en": "",
            "zh": ""
          },
          {
            "word": "disappointed",
            "pos": "adj.",
            "meaning": "L4失望的",
            "en": "",
            "zh": ""
          },
          {
            "word": "disappointing",
            "pos": "adj.",
            "meaning": "L4令人失望的",
            "en": "",
            "zh": ""
          },
          {
            "word": "discouraging",
            "pos": "adj.",
            "meaning": "L4令人沮喪的",
            "en": "",
            "zh": ""
          },
          {
            "word": "document",
            "pos": "v.",
            "meaning": "L5用文件證明;",
            "en": "",
            "zh": ""
          },
          {
            "word": "dormitory",
            "pos": "n.",
            "meaning": "L6學生宿舍",
            "en": "",
            "zh": ""
          },
          {
            "word": "economic",
            "pos": "adj.",
            "meaning": "L4經濟上的;經濟學的",
            "en": "",
            "zh": ""
          },
          {
            "word": "efficient",
            "pos": "adj.",
            "meaning": "L3效率高的;有能力的",
            "en": "",
            "zh": ""
          },
          {
            "word": "engineering",
            "pos": "n.",
            "meaning": "L4工程;工程學",
            "en": "",
            "zh": ""
          },
          {
            "word": "ensure",
            "pos": "v.",
            "meaning": "L4保證;擔保",
            "en": "",
            "zh": ""
          },
          {
            "word": "entertainment",
            "pos": "n.",
            "meaning": "L4招待,款待; 演藝界",
            "en": "",
            "zh": ""
          },
          {
            "word": "equipment",
            "pos": "n.",
            "meaning": "L4配備,裝備",
            "en": "",
            "zh": ""
          },
          {
            "word": "essential",
            "pos": "adj.",
            "meaning": "L4必要的;實質的",
            "en": "",
            "zh": ""
          },
          {
            "word": "exceed",
            "pos": "v.",
            "meaning": "L5超過;勝過",
            "en": "",
            "zh": ""
          },
          {
            "word": "facility",
            "pos": "n.",
            "meaning": "L4能力;技能;設備, 設施; 工具",
            "en": "",
            "zh": ""
          },
          {
            "word": "fade",
            "pos": "v.",
            "meaning": "L3凋謝,枯萎;(顏色)褪去)",
            "en": "",
            "zh": ""
          },
          {
            "word": "favorable",
            "pos": "adj.",
            "meaning": "L4適合的",
            "en": "",
            "zh": ""
          },
          {
            "word": "fighter",
            "pos": "n.",
            "meaning": "L3戰士,鬥士",
            "en": "",
            "zh": ""
          },
          {
            "word": "flute",
            "pos": "n.",
            "meaning": "L3橫笛",
            "en": "",
            "zh": ""
          },
          {
            "word": "fond",
            "pos": "adj.",
            "meaning": "L3喜歡的;愛好的",
            "en": "",
            "zh": ""
          },
          {
            "word": "frame",
            "pos": "v.",
            "meaning": "L4給...裝框子; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "frantic",
            "pos": "adj.",
            "meaning": "L6(因喜悅或憤怒等)發狂似的",
            "en": "",
            "zh": ""
          },
          {
            "word": "garage",
            "pos": "n.",
            "meaning": "L3車庫",
            "en": "",
            "zh": ""
          },
          {
            "word": "geography",
            "pos": "n.",
            "meaning": "L3地理",
            "en": "",
            "zh": ""
          },
          {
            "word": "grateful",
            "pos": "adj.",
            "meaning": "L4感謝的,感激的",
            "en": "",
            "zh": ""
          },
          {
            "word": "guarantee",
            "pos": "v.",
            "meaning": "L4保證;擔保; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "handicraft",
            "pos": "n.",
            "meaning": "L6手工藝;手工藝品",
            "en": "",
            "zh": ""
          },
          {
            "word": "hardware",
            "pos": "n.",
            "meaning": "L4金屬器件;硬體",
            "en": "",
            "zh": ""
          },
          {
            "word": "harmonica",
            "pos": "n.",
            "meaning": "L6口琴",
            "en": "",
            "zh": ""
          },
          {
            "word": "hire",
            "pos": "v.",
            "meaning": "L3雇用; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "horizontal",
            "pos": "adj.",
            "meaning": "L5水平的;橫的",
            "en": "",
            "zh": ""
          },
          {
            "word": "hose",
            "pos": "v.",
            "meaning": "L4用軟管淋澆; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "hostel",
            "pos": "n.",
            "meaning": "L6旅舍",
            "en": "",
            "zh": ""
          },
          {
            "word": "housework",
            "pos": "n.",
            "meaning": "L4家務",
            "en": "",
            "zh": ""
          },
          {
            "word": "hug",
            "pos": "v.",
            "meaning": "L3摟抱",
            "en": "",
            "zh": ""
          },
          {
            "word": "impress",
            "pos": "v.",
            "meaning": "L3給...極深的印象",
            "en": "",
            "zh": ""
          },
          {
            "word": "including",
            "pos": "prep.",
            "meaning": "L4包括",
            "en": "",
            "zh": ""
          },
          {
            "word": "inclusive",
            "pos": "adj.",
            "meaning": "L6包含的;包括在內的",
            "en": "",
            "zh": ""
          },
          {
            "word": "industrialize",
            "pos": "v.",
            "meaning": "L6使工業化",
            "en": "",
            "zh": ""
          },
          {
            "word": "intrigue",
            "pos": "v.",
            "meaning": "L6耍陰謀;激起好奇心",
            "en": "",
            "zh": ""
          },
          {
            "word": "invent",
            "pos": "v.",
            "meaning": "L3發明",
            "en": "",
            "zh": ""
          },
          {
            "word": "inventor",
            "pos": "n.",
            "meaning": "L3發明家",
            "en": "",
            "zh": ""
          },
          {
            "word": "isolation",
            "pos": "n.",
            "meaning": "L4隔離",
            "en": "",
            "zh": ""
          },
          {
            "word": "junior",
            "pos": "adj.",
            "meaning": "L3年紀較輕的;資淺的三年級(生)的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "kettle",
            "pos": "n.",
            "meaning": "L4水壺",
            "en": "",
            "zh": ""
          },
          {
            "word": "ladder",
            "pos": "n.",
            "meaning": "L3梯子",
            "en": "",
            "zh": ""
          },
          {
            "word": "lawn",
            "pos": "n.",
            "meaning": "L3草坪,草地",
            "en": "",
            "zh": ""
          },
          {
            "word": "learned",
            "pos": "adj.",
            "meaning": "L4有學問的,博學的;精通的",
            "en": "",
            "zh": ""
          },
          {
            "word": "locate",
            "pos": "v.",
            "meaning": "L3把...設置在;使...座落於",
            "en": "",
            "zh": ""
          },
          {
            "word": "location",
            "pos": "n.",
            "meaning": "L3位置;場所",
            "en": "",
            "zh": ""
          },
          {
            "word": "lock",
            "pos": "v.",
            "meaning": "L3鎖住; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "lump",
            "pos": "v.",
            "meaning": "L5弄成一團;歸併到一起;",
            "en": "",
            "zh": ""
          },
          {
            "word": "mall",
            "pos": "n.",
            "meaning": "L3大規模購物中心",
            "en": "",
            "zh": ""
          },
          {
            "word": "microwave",
            "pos": "v.",
            "meaning": "L3用微波爐烹調;",
            "en": "",
            "zh": ""
          },
          {
            "word": "minimum",
            "pos": "adj.",
            "meaning": "L4最小的,最少的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "monster",
            "pos": "n.",
            "meaning": "L3怪物",
            "en": "",
            "zh": ""
          },
          {
            "word": "mow",
            "pos": "v.",
            "meaning": "L6刈(草坪等)上的草",
            "en": "",
            "zh": ""
          },
          {
            "word": "obedient",
            "pos": "adj.",
            "meaning": "L4服從的,順從的",
            "en": "",
            "zh": ""
          },
          {
            "word": "offering",
            "pos": "n.",
            "meaning": "L5提供;供奉;捐獻物;供物;課程",
            "en": "",
            "zh": ""
          },
          {
            "word": "optimistic",
            "pos": "adj.",
            "meaning": "L3樂觀的",
            "en": "",
            "zh": ""
          },
          {
            "word": "option",
            "pos": "n.",
            "meaning": "L4選擇;選擇權",
            "en": "",
            "zh": ""
          },
          {
            "word": "orchestra",
            "pos": "n.",
            "meaning": "L4管弦樂隊",
            "en": "",
            "zh": ""
          },
          {
            "word": "overlook",
            "pos": "v.",
            "meaning": "L4眺望;俯瞰",
            "en": "",
            "zh": ""
          },
          {
            "word": "overseas",
            "pos": "adj.",
            "meaning": "L3國外的; adv.",
            "en": "",
            "zh": ""
          },
          {
            "word": "paragraph",
            "pos": "n.",
            "meaning": "L4(文章的)段,節",
            "en": "",
            "zh": ""
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "L3通行;走廊,過道",
            "en": "",
            "zh": ""
          },
          {
            "word": "pedal",
            "pos": "v.；n.",
            "meaning": "L5踩/踏板",
            "en": "",
            "zh": ""
          },
          {
            "word": "perfection",
            "pos": "n.",
            "meaning": "L4完美;盡善盡美",
            "en": "",
            "zh": ""
          },
          {
            "word": "perform",
            "pos": "v.",
            "meaning": "L3履行;執行;表演, 演奏",
            "en": "",
            "zh": ""
          },
          {
            "word": "pessimistic",
            "pos": "adj.",
            "meaning": "L4悲觀的",
            "en": "",
            "zh": ""
          },
          {
            "word": "plenty",
            "pos": "adv.",
            "meaning": "L3足夠,充分地;",
            "en": "",
            "zh": ""
          },
          {
            "word": "practical",
            "pos": "adj.",
            "meaning": "L3實用的；切合實際的",
            "en": "",
            "zh": ""
          },
          {
            "word": "previous",
            "pos": "adj.",
            "meaning": "L3先的,以前的",
            "en": "",
            "zh": ""
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "L3也許",
            "en": "",
            "zh": ""
          },
          {
            "word": "propel",
            "pos": "v.",
            "meaning": "L6推進;推動;驅策",
            "en": "",
            "zh": ""
          },
          {
            "word": "prosperity",
            "pos": "n.",
            "meaning": "L4興旺,繁榮,昌盛,成功",
            "en": "",
            "zh": ""
          },
          {
            "word": "province",
            "pos": "n.",
            "meaning": "L5省,州",
            "en": "",
            "zh": ""
          },
          {
            "word": "pump",
            "pos": "v.",
            "meaning": "L3跳動;使用唧筒",
            "en": "",
            "zh": ""
          },
          {
            "word": "purchase",
            "pos": "v.",
            "meaning": "L5買,購買;",
            "en": "",
            "zh": ""
          },
          {
            "word": "rate",
            "pos": "v.",
            "meaning": "L3對...評價",
            "en": "",
            "zh": ""
          },
          {
            "word": "rear",
            "pos": "adj.",
            "meaning": "L5後面的,背後的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "reception",
            "pos": "n.",
            "meaning": "L4接待,接見;接待處",
            "en": "",
            "zh": ""
          },
          {
            "word": "replace",
            "pos": "v.",
            "meaning": "L3取代;以...代替",
            "en": "",
            "zh": ""
          },
          {
            "word": "request",
            "pos": "v.",
            "meaning": "L3請求給予",
            "en": "",
            "zh": ""
          },
          {
            "word": "respectful",
            "pos": "adj.",
            "meaning": "L4恭敬的;尊敬人的",
            "en": "",
            "zh": ""
          },
          {
            "word": "rim",
            "pos": "v.",
            "meaning": "L5形成邊緣;顯出邊緣",
            "en": "",
            "zh": ""
          },
          {
            "word": "rotate",
            "pos": "v.",
            "meaning": "L6旋轉;輪流",
            "en": "",
            "zh": ""
          },
          {
            "word": "rubbish",
            "pos": "n.",
            "meaning": "L6垃圾;廢物",
            "en": "",
            "zh": ""
          },
          {
            "word": "rush",
            "pos": "v.",
            "meaning": "L3催促;急送",
            "en": "",
            "zh": ""
          },
          {
            "word": "rusty",
            "pos": "adj.",
            "meaning": "L4生鏽的",
            "en": "",
            "zh": ""
          },
          {
            "word": "sausage",
            "pos": "n.",
            "meaning": "L3香腸,臘腸",
            "en": "",
            "zh": ""
          },
          {
            "word": "scientist",
            "pos": "n.",
            "meaning": "L3科學家",
            "en": "",
            "zh": ""
          },
          {
            "word": "series",
            "pos": "n.",
            "meaning": "L5連續;系列",
            "en": "",
            "zh": ""
          },
          {
            "word": "sew",
            "pos": "v.",
            "meaning": "L4縫製;縫補",
            "en": "",
            "zh": ""
          },
          {
            "word": "shelter",
            "pos": "v.",
            "meaning": "L4遮蔽;庇護; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "shift",
            "pos": "v.",
            "meaning": "L4轉移;移動; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "sink",
            "pos": "v.",
            "meaning": "L3沉下;陷於; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "site",
            "pos": "v.",
            "meaning": "L4為...選址;設置; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "situation",
            "pos": "n.",
            "meaning": "L3處境,境遇",
            "en": "",
            "zh": ""
          },
          {
            "word": "skate",
            "pos": "v.",
            "meaning": "L3溜冰",
            "en": "",
            "zh": ""
          },
          {
            "word": "socket",
            "pos": "n.",
            "meaning": "L4插座;插口",
            "en": "",
            "zh": ""
          },
          {
            "word": "specialist",
            "pos": "n.",
            "meaning": "L5專家;專科醫生",
            "en": "",
            "zh": ""
          },
          {
            "word": "staff",
            "pos": "v.",
            "meaning": "L3給...配備職員; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "stain",
            "pos": "v.",
            "meaning": "L5沾污;染污;染色",
            "en": "",
            "zh": ""
          },
          {
            "word": "stall",
            "pos": "n.",
            "meaning": "L5攤販",
            "en": "",
            "zh": ""
          },
          {
            "word": "statesman",
            "pos": "n.",
            "meaning": "L6政治家",
            "en": "",
            "zh": ""
          },
          {
            "word": "status",
            "pos": "n.",
            "meaning": "L4狀況,狀態",
            "en": "",
            "zh": ""
          },
          {
            "word": "subordinate",
            "pos": "v.",
            "meaning": "L6使居次要地位;使隸屬;使服從",
            "en": "",
            "zh": ""
          },
          {
            "word": "superior",
            "pos": "adj.",
            "meaning": "L3優秀的,上等的; n.",
            "en": "",
            "zh": ""
          },
          {
            "word": "symphony",
            "pos": "n.",
            "meaning": "L6交響樂,交響曲",
            "en": "",
            "zh": ""
          },
          {
            "word": "talent",
            "pos": "n.",
            "meaning": "L3天才",
            "en": "",
            "zh": ""
          },
          {
            "word": "tap",
            "pos": "v.",
            "meaning": "L3輕拍,輕叩",
            "en": "",
            "zh": ""
          },
          {
            "word": "technical",
            "pos": "adj.",
            "meaning": "L3專門的,技術性的",
            "en": "",
            "zh": ""
          },
          {
            "word": "tend",
            "pos": "v.",
            "meaning": "L3走向;趨向;照料",
            "en": "",
            "zh": ""
          },
          {
            "word": "tent",
            "pos": "n.",
            "meaning": "L3帳篷",
            "en": "",
            "zh": ""
          },
          {
            "word": "thoughtful",
            "pos": "adj.",
            "meaning": "L4考慮周到的",
            "en": "",
            "zh": ""
          },
          {
            "word": "transport",
            "pos": "v.",
            "meaning": "L3運送,運輸;",
            "en": "",
            "zh": ""
          },
          {
            "word": "triple",
            "pos": "adj.",
            "meaning": "L5三倍的;三重的;",
            "en": "",
            "zh": ""
          },
          {
            "word": "tune",
            "pos": "v.",
            "meaning": "L3為...調音",
            "en": "",
            "zh": ""
          },
          {
            "word": "twin",
            "pos": "n.",
            "meaning": "L3孿生兒",
            "en": "",
            "zh": ""
          },
          {
            "word": "underline",
            "pos": "v.",
            "meaning": "L5劃線於...之下;強調",
            "en": "",
            "zh": ""
          },
          {
            "word": "unite",
            "pos": "v.",
            "meaning": "L3統一;使團結",
            "en": "",
            "zh": ""
          },
          {
            "word": "variation",
            "pos": "n.",
            "meaning": "L5變化;變異",
            "en": "",
            "zh": ""
          },
          {
            "word": "vary",
            "pos": "v.",
            "meaning": "L3使不同;變更;呈多樣化",
            "en": "",
            "zh": ""
          },
          {
            "word": "vast",
            "pos": "adj.",
            "meaning": "L4廣闊的,浩瀚的;非常的",
            "en": "",
            "zh": ""
          },
          {
            "word": "vital",
            "pos": "adj.",
            "meaning": "L4充滿活力的;致命的",
            "en": "",
            "zh": ""
          },
          {
            "word": "voucher",
            "pos": "n.",
            "meaning": "L5代金券;票券",
            "en": "",
            "zh": ""
          },
          {
            "word": "wag",
            "pos": "v.",
            "meaning": "L6搖;搖擺;搖尾巴",
            "en": "",
            "zh": ""
          },
          {
            "word": "whisky",
            "pos": "n.",
            "meaning": "L6威士忌酒",
            "en": "",
            "zh": ""
          },
          {
            "word": "withdraw",
            "pos": "v.",
            "meaning": "L4提取;撤離",
            "en": "",
            "zh": ""
          }
        ]
      },
      {
        "id": 3,
        "name": "RC Strategy 1 main idea",
        "words": [
          {
            "word": "accurately",
            "pos": "adv.",
            "meaning": "準確地",
            "en": "He can accurately predict the weather.",
            "zh": "他能準確預測天氣。"
          },
          {
            "word": "acre",
            "pos": "n.",
            "meaning": "英畝",
            "en": "The farm covers 50 acres of land.",
            "zh": "這座農場佔地 50 英畝。"
          },
          {
            "word": "ad",
            "pos": "n.",
            "meaning": "廣告",
            "en": "I saw an ad for a new phone on TV.",
            "zh": "我在電視上看到一則新手機的廣告。"
          },
          {
            "word": "addicted",
            "pos": "adj.",
            "meaning": "上癮的",
            "en": "He is addicted to video games.",
            "zh": "他對電子遊戲上癮了。"
          },
          {
            "word": "addiction",
            "pos": "n.",
            "meaning": "成癮",
            "en": "Drug addiction is a serious problem.",
            "zh": "毒品成癮是一個嚴重的問題。"
          },
          {
            "word": "adjust",
            "pos": "v.",
            "meaning": "調整",
            "en": "She adjusted the seat to make it more comfortable.",
            "zh": "她調整了座椅，使其更舒適。"
          },
          {
            "word": "adjustment",
            "pos": "n.",
            "meaning": "調整",
            "en": "A small adjustment can make a big difference.",
            "zh": "一個小調整可能帶來很大的不同。"
          },
          {
            "word": "advertising",
            "pos": "n.",
            "meaning": "廣告業；廣告宣傳",
            "en": "The company spent millions on advertising.",
            "zh": "這家公司在廣告上花費了數百萬。"
          },
          {
            "word": "amazingly",
            "pos": "adv.",
            "meaning": "令人驚訝地",
            "en": "The baby learned to walk amazingly fast.",
            "zh": "這個嬰兒學走路的速度令人驚訝。"
          },
          {
            "word": "analyze",
            "pos": "v.",
            "meaning": "分析",
            "en": "Scientists analyze data to find solutions.",
            "zh": "科學家分析數據以尋找解決方案。"
          },
          {
            "word": "applicant",
            "pos": "n.",
            "meaning": "申請人",
            "en": "There were many applicants for the job.",
            "zh": "這份工作有很多申請人。"
          },
          {
            "word": "approval",
            "pos": "n.",
            "meaning": "批准；認可",
            "en": "The project is waiting for government approval.",
            "zh": "這個專案正在等待政府批准。"
          },
          {
            "word": "approve",
            "pos": "v.",
            "meaning": "批准；同意",
            "en": "The manager approved my vacation request.",
            "zh": "經理批准了我的休假申請。"
          },
          {
            "word": "aspect",
            "pos": "n.",
            "meaning": "方面",
            "en": "Exercise is an important aspect of a healthy lifestyle.",
            "zh": "運動是健康生活方式的一個重要方面。"
          },
          {
            "word": "astronaut",
            "pos": "n.",
            "meaning": "太空人",
            "en": "The astronaut spent six months in space.",
            "zh": "這名太空人在太空待了六個月。"
          },
          {
            "word": "attitude",
            "pos": "n.",
            "meaning": "態度",
            "en": "He has a positive attitude towards work.",
            "zh": "他對工作持積極的態度。"
          },
          {
            "word": "audience",
            "pos": "n.",
            "meaning": "觀眾",
            "en": "The audience applauded the performance.",
            "zh": "觀眾為表演鼓掌。"
          },
          {
            "word": "bachelor",
            "pos": "n.",
            "meaning": "單身漢；學士學位",
            "en": "He received his bachelor’s degree in engineering.",
            "zh": "他獲得了工程學學士學位。"
          },
          {
            "word": "beneficial",
            "pos": "adj.",
            "meaning": "有益的",
            "en": "A balanced diet is beneficial to your health.",
            "zh": "均衡飲食對健康有益。"
          },
          {
            "word": "benefit",
            "pos": "n./v.",
            "meaning": "好處；受益",
            "en": "Everyone benefits from regular exercise.",
            "zh": "定期運動讓每個人受益。"
          },
          {
            "word": "block",
            "pos": "v./n.",
            "meaning": "阻擋；街區",
            "en": "The road was blocked by fallen trees.",
            "zh": "這條路被倒下的樹木阻擋了。"
          },
          {
            "word": "bolt",
            "pos": "n./v.",
            "meaning": "螺栓；快速移動",
            "en": "He tightened the bolts on the machine.",
            "zh": "他擰緊了機器上的螺栓。"
          },
          {
            "word": "bored",
            "pos": "adj.",
            "meaning": "無聊的",
            "en": "She felt bored during the long meeting.",
            "zh": "她在冗長的會議中感到無聊。"
          },
          {
            "word": "calculation",
            "pos": "n.",
            "meaning": "計算",
            "en": "His calculation of the costs was incorrect.",
            "zh": "他對成本的計算是錯誤的。"
          },
          {
            "word": "calorie",
            "pos": "n.",
            "meaning": "卡路里",
            "en": "This snack contains 200 calories.",
            "zh": "這款零食含有 200 卡路里。"
          },
          {
            "word": "career",
            "pos": "n.",
            "meaning": "職業",
            "en": "She has a successful career in law.",
            "zh": "她在法律界擁有成功的職業生涯。"
          },
          {
            "word": "central",
            "pos": "adj.",
            "meaning": "中央的；主要的",
            "en": "The park is located in the central part of the city.",
            "zh": "這座公園位於城市的中心部分。"
          },
          {
            "word": "challenger",
            "pos": "n.",
            "meaning": "挑戰者",
            "en": "He is the main challenger in the boxing match.",
            "zh": "他是這場拳擊比賽的主要挑戰者。"
          },
          {
            "word": "clue",
            "pos": "n.",
            "meaning": "線索",
            "en": "The police found a clue at the crime scene.",
            "zh": "警察在犯罪現場發現了一條線索。"
          },
          {
            "word": "communicate",
            "pos": "v.",
            "meaning": "溝通",
            "en": "It is important to communicate clearly.",
            "zh": "清楚溝通很重要。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區",
            "en": "He is an active member of the local community.",
            "zh": "他是當地社區的活躍成員。"
          },
          {
            "word": "complicated",
            "pos": "adj.",
            "meaning": "複雜的",
            "en": "The instructions were too complicated to follow.",
            "zh": "這些說明過於複雜，難以遵循。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解",
            "en": "Reading comprehension is essential for learning.",
            "zh": "閱讀理解對學習很重要。"
          },
          {
            "word": "concept",
            "pos": "n.",
            "meaning": "概念",
            "en": "The concept of time travel fascinates many scientists.",
            "zh": "時間旅行的概念讓許多科學家著迷。"
          },
          {
            "word": "condemn",
            "pos": "v.",
            "meaning": "譴責",
            "en": "The government condemned the violent attack.",
            "zh": "政府譴責了這次暴力襲擊。"
          },
          {
            "word": "content",
            "pos": "n./adj.",
            "meaning": "內容；滿足的",
            "en": "The website contains useful content.",
            "zh": "這個網站包含有用的內容。"
          },
          {
            "word": "contradict",
            "pos": "v.",
            "meaning": "反駁；與…矛盾",
            "en": "His statement contradicts the facts.",
            "zh": "他的陳述與事實相矛盾。"
          },
          {
            "word": "contrast",
            "pos": "n./v.",
            "meaning": "對比；對照",
            "en": "There is a sharp contrast between rich and poor.",
            "zh": "貧富之間存在明顯的對比。"
          },
          {
            "word": "crop",
            "pos": "n./v.",
            "meaning": "農作物；收割",
            "en": "The farmers harvested their crops.",
            "zh": "農民收割了他們的農作物。"
          },
          {
            "word": "currency",
            "pos": "n.",
            "meaning": "貨幣",
            "en": "The US dollar is a strong currency.",
            "zh": "美元是一種強勢貨幣。"
          },
          {
            "word": "decade",
            "pos": "n.",
            "meaning": "十年",
            "en": "He worked as a teacher for over a decade.",
            "zh": "他擔任教師超過十年。"
          },
          {
            "word": "definition",
            "pos": "n.",
            "meaning": "定義",
            "en": "Can you give me the definition of this word?",
            "zh": "你能給我這個單詞的定義嗎？"
          },
          {
            "word": "destroy",
            "pos": "v.",
            "meaning": "毀壞",
            "en": "The storm destroyed many homes.",
            "zh": "這場風暴摧毀了許多房屋。"
          },
          {
            "word": "destructive",
            "pos": "adj.",
            "meaning": "破壞性的",
            "en": "The earthquake was highly destructive.",
            "zh": "這場地震破壞性極強。"
          },
          {
            "word": "detail",
            "pos": "n.",
            "meaning": "細節",
            "en": "He explained the plan in detail.",
            "zh": "他詳細解釋了這個計劃。"
          },
          {
            "word": "difficult",
            "pos": "adj.",
            "meaning": "困難的",
            "en": "The exam was very difficult.",
            "zh": "這場考試非常困難。"
          },
          {
            "word": "direction",
            "pos": "n.",
            "meaning": "方向",
            "en": "He gave me directions to his house.",
            "zh": "他給了我去他家的方向指引。"
          },
          {
            "word": "dye",
            "pos": "n./v.",
            "meaning": "染料；染色",
            "en": "She dyed her hair red.",
            "zh": "她把頭髮染成紅色。"
          },
          {
            "word": "electronic",
            "pos": "adj.",
            "meaning": "電子的",
            "en": "She bought an electronic dictionary.",
            "zh": "她買了一本電子字典。"
          },
          {
            "word": "enforce",
            "pos": "v.",
            "meaning": "執行",
            "en": "The police enforce the law strictly.",
            "zh": "警察嚴格執行法律。"
          },
          {
            "word": "entertainment",
            "pos": "n.",
            "meaning": "娛樂",
            "en": "The festival offers great entertainment.",
            "zh": "這個節日提供了很棒的娛樂活動。"
          },
          {
            "word": "estate",
            "pos": "n.",
            "meaning": "房地產；財產",
            "en": "He inherited a large estate from his grandfather.",
            "zh": "他從祖父那裡繼承了一大片房地產。"
          },
          {
            "word": "evaluate",
            "pos": "v.",
            "meaning": "評估",
            "en": "The teacher will evaluate the students' performance.",
            "zh": "老師將評估學生的表現。"
          },
          {
            "word": "evidence",
            "pos": "n.",
            "meaning": "證據",
            "en": "The police found new evidence at the crime scene.",
            "zh": "警方在犯罪現場發現了新的證據。"
          },
          {
            "word": "experiment",
            "pos": "n./v.",
            "meaning": "實驗",
            "en": "The scientist conducted an experiment on plant growth.",
            "zh": "這位科學家進行了一項植物生長實驗。"
          },
          {
            "word": "extremely",
            "pos": "adv.",
            "meaning": "極端地；非常",
            "en": "The weather was extremely cold yesterday.",
            "zh": "昨天天氣非常寒冷。"
          },
          {
            "word": "familiar",
            "pos": "adj.",
            "meaning": "熟悉的",
            "en": "This place looks familiar to me.",
            "zh": "這個地方對我來說很熟悉。"
          },
          {
            "word": "federal",
            "pos": "adj.",
            "meaning": "聯邦的",
            "en": "The new law was passed by the federal government.",
            "zh": "這項新法律由聯邦政府通過。"
          },
          {
            "word": "fighter",
            "pos": "n.",
            "meaning": "戰士；鬥士",
            "en": "He is a strong fighter in the boxing ring.",
            "zh": "他是拳擊場上的強大選手。"
          },
          {
            "word": "fondness",
            "pos": "n.",
            "meaning": "喜愛",
            "en": "She has a fondness for classical music.",
            "zh": "她喜愛古典音樂。"
          },
          {
            "word": "foreign",
            "pos": "adj.",
            "meaning": "外國的",
            "en": "He is studying at a foreign university.",
            "zh": "他正在一所外國大學就讀。"
          },
          {
            "word": "gambling",
            "pos": "n.",
            "meaning": "賭博",
            "en": "Gambling is illegal in some countries.",
            "zh": "賭博在一些國家是違法的。"
          },
          {
            "word": "headline",
            "pos": "n.",
            "meaning": "頭條新聞",
            "en": "The headline of the newspaper caught my attention.",
            "zh": "這份報紙的頭條吸引了我的注意。"
          },
          {
            "word": "historic",
            "pos": "adj.",
            "meaning": "歷史性的",
            "en": "This is a historic moment for our country.",
            "zh": "這是我們國家的歷史性時刻。"
          },
          {
            "word": "history",
            "pos": "n.",
            "meaning": "歷史",
            "en": "She is very interested in world history.",
            "zh": "她對世界歷史很感興趣。"
          },
          {
            "word": "household",
            "pos": "n./adj.",
            "meaning": "家庭；家用的",
            "en": "The washing machine is a common household appliance.",
            "zh": "洗衣機是一種常見的家用電器。"
          },
          {
            "word": "identify",
            "pos": "v.",
            "meaning": "辨認；識別",
            "en": "The witness identified the suspect.",
            "zh": "目擊者識別出了嫌疑犯。"
          },
          {
            "word": "imply",
            "pos": "v.",
            "meaning": "暗示",
            "en": "His words implied that he was unhappy.",
            "zh": "他的話暗示他不開心。"
          },
          {
            "word": "including",
            "pos": "prep.",
            "meaning": "包括",
            "en": "The price is $20, including tax.",
            "zh": "價格是 20 美元，包括稅金。"
          },
          {
            "word": "inconsistent",
            "pos": "adj.",
            "meaning": "不一致的",
            "en": "His story is inconsistent with the facts.",
            "zh": "他的說法與事實不符。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊",
            "en": "I found useful information on the website.",
            "zh": "我在這個網站上找到了一些有用的資訊。"
          },
          {
            "word": "input",
            "pos": "n./v.",
            "meaning": "輸入；意見",
            "en": "The teacher asked for students’ input on the project.",
            "zh": "老師詢問學生對這個專案的意見。"
          },
          {
            "word": "involve",
            "pos": "v.",
            "meaning": "涉及；包含",
            "en": "The job involves a lot of travel.",
            "zh": "這份工作涉及大量的旅行。"
          },
          {
            "word": "junior",
            "pos": "adj./n.",
            "meaning": "年幼的；低年級生",
            "en": "He is a junior student at the university.",
            "zh": "他是大學三年級的學生。"
          },
          {
            "word": "junk",
            "pos": "n.",
            "meaning": "廢物；垃圾",
            "en": "He threw away all the old junk in the garage.",
            "zh": "他把車庫裡的舊垃圾都丟掉了。"
          },
          {
            "word": "license",
            "pos": "n./v.",
            "meaning": "許可證；許可",
            "en": "He finally got his driver’s license.",
            "zh": "他終於拿到駕駛執照。"
          },
          {
            "word": "lightning",
            "pos": "n.",
            "meaning": "閃電",
            "en": "The storm came with thunder and lightning.",
            "zh": "暴風雨伴隨著雷聲和閃電。"
          },
          {
            "word": "litter",
            "pos": "n./v.",
            "meaning": "垃圾；亂丟垃圾",
            "en": "Please do not litter in the park.",
            "zh": "請不要在公園亂丟垃圾。"
          },
          {
            "word": "locate",
            "pos": "v.",
            "meaning": "找到；設置",
            "en": "The police were able to locate the missing child.",
            "zh": "警方找到了失蹤的孩子。"
          },
          {
            "word": "mankind",
            "pos": "n.",
            "meaning": "人類",
            "en": "Climate change is a major challenge for mankind.",
            "zh": "氣候變遷是人類面臨的重大挑戰。"
          },
          {
            "word": "microphone",
            "pos": "n.",
            "meaning": "麥克風",
            "en": "He spoke into the microphone.",
            "zh": "他對著麥克風說話。"
          },
          {
            "word": "mineral",
            "pos": "n.",
            "meaning": "礦物",
            "en": "This water contains essential minerals.",
            "zh": "這種水含有必需的礦物質。"
          },
          {
            "word": "modify",
            "pos": "v.",
            "meaning": "修改",
            "en": "The teacher asked me to modify my essay.",
            "zh": "老師讓我修改我的文章。"
          },
          {
            "word": "molest",
            "pos": "v.",
            "meaning": "騷擾；猥褻",
            "en": "The suspect was arrested for attempting to molest a child.",
            "zh": "嫌疑人因試圖猥褻兒童而被逮捕。"
          },
          {
            "word": "mysterious",
            "pos": "adj.",
            "meaning": "神秘的",
            "en": "He disappeared under mysterious circumstances.",
            "zh": "他在神秘的情況下消失了。"
          },
          {
            "word": "neighborhood",
            "pos": "n.",
            "meaning": "鄰里；社區",
            "en": "She lives in a quiet neighborhood.",
            "zh": "她住在一個安靜的社區。"
          },
          {
            "word": "operation",
            "pos": "n.",
            "meaning": "操作；手術",
            "en": "The hospital performed a complicated operation.",
            "zh": "這家醫院進行了一次複雜的手術。"
          },
          {
            "word": "oppose",
            "pos": "v.",
            "meaning": "反對",
            "en": "Many people oppose the new policy.",
            "zh": "許多人反對這項新政策。"
          },
          {
            "word": "opposite",
            "pos": "adj./n.",
            "meaning": "相反的；對立面",
            "en": "They sat on opposite sides of the table.",
            "zh": "他們坐在桌子的對面。"
          },
          {
            "word": "pact",
            "pos": "n.",
            "meaning": "協議；條約",
            "en": "The two countries signed a peace pact.",
            "zh": "這兩個國家簽署了一項和平條約。"
          },
          {
            "word": "paragraph",
            "pos": "n.",
            "meaning": "段落",
            "en": "Please write a five-paragraph essay.",
            "zh": "請寫一篇五段式的文章。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "段落；通道",
            "en": "There is a secret passage in the castle.",
            "zh": "城堡裡有一條秘密通道。"
          },
          {
            "word": "peninsula",
            "pos": "n.",
            "meaning": "半島",
            "en": "Italy is a famous European peninsula.",
            "zh": "義大利是歐洲著名的半島。"
          },
          {
            "word": "perform",
            "pos": "v.",
            "meaning": "表演；執行",
            "en": "The band will perform at the concert.",
            "zh": "樂隊將在音樂會上表演。"
          },
          {
            "word": "physics",
            "pos": "n.",
            "meaning": "物理學",
            "en": "Physics is my favorite subject.",
            "zh": "物理學是我最喜歡的科目。"
          },
          {
            "word": "porch",
            "pos": "n.",
            "meaning": "門廊；陽台",
            "en": "They sat on the porch and watched the sunset.",
            "zh": "他們坐在門廊上看日落。"
          },
          {
            "word": "poultry",
            "pos": "n.",
            "meaning": "家禽",
            "en": "The farm raises different types of poultry.",
            "zh": "這個農場養殖各種類型的家禽。"
          },
          {
            "word": "predict",
            "pos": "v.",
            "meaning": "預測",
            "en": "Scientists predict more rain this week.",
            "zh": "科學家預測本週會有更多降雨。"
          },
          {
            "word": "prevent",
            "pos": "v.",
            "meaning": "預防；阻止",
            "en": "A healthy diet helps prevent illness.",
            "zh": "健康飲食有助於預防疾病。"
          },
          {
            "word": "previous",
            "pos": "adj.",
            "meaning": "先前的",
            "en": "I met him on a previous occasion.",
            "zh": "我在之前的一次場合見過他。"
          },
          {
            "word": "primary",
            "pos": "adj.",
            "meaning": "主要的；首要的",
            "en": "Education is a primary concern for parents.",
            "zh": "教育是父母最關心的事情。"
          },
          {
            "word": "prior",
            "pos": "adj.",
            "meaning": "先前的；優先的",
            "en": "He had a prior engagement and couldn’t attend the meeting.",
            "zh": "他有先前的約定，無法參加會議。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "The application process takes a few days.",
            "zh": "申請過程需要幾天時間。"
          },
          {
            "word": "processing",
            "pos": "n.",
            "meaning": "處理",
            "en": "Data processing requires advanced software.",
            "zh": "資料處理需要高級軟體。"
          },
          {
            "word": "program",
            "pos": "n./v.",
            "meaning": "程式；計畫；編寫程式",
            "en": "He joined a leadership training program.",
            "zh": "他參加了一個領導力培訓計畫。"
          },
          {
            "word": "promote",
            "pos": "v.",
            "meaning": "促進；推廣",
            "en": "The company promotes its new products through social media.",
            "zh": "這家公司透過社群媒體推廣新產品。"
          },
          {
            "word": "property",
            "pos": "n.",
            "meaning": "財產；房地產",
            "en": "He invested in real estate property.",
            "zh": "他投資了房地產。"
          },
          {
            "word": "prosecute",
            "pos": "v.",
            "meaning": "起訴",
            "en": "The company will prosecute anyone who violates its copyright.",
            "zh": "這家公司將起訴任何侵犯其版權的人。"
          },
          {
            "word": "purchase",
            "pos": "v./n.",
            "meaning": "購買",
            "en": "She purchased a new phone last week.",
            "zh": "她上週購買了一支新手機。"
          },
          {
            "word": "purpose",
            "pos": "n.",
            "meaning": "目的",
            "en": "The purpose of the meeting is to discuss the new policy.",
            "zh": "這次會議的目的是討論新政策。"
          },
          {
            "word": "refer",
            "pos": "v.",
            "meaning": "參考；提及",
            "en": "Please refer to the instructions before using the device.",
            "zh": "請在使用設備前參考說明書。"
          },
          {
            "word": "repeat",
            "pos": "v.",
            "meaning": "重複",
            "en": "Could you repeat that again, please?",
            "zh": "你可以再說一次嗎？"
          },
          {
            "word": "reputation",
            "pos": "n.",
            "meaning": "名聲",
            "en": "The company has a good reputation for quality.",
            "zh": "這家公司以高品質而聞名。"
          },
          {
            "word": "resource",
            "pos": "n.",
            "meaning": "資源",
            "en": "Water is an important natural resource.",
            "zh": "水是一種重要的自然資源。"
          },
          {
            "word": "restate",
            "pos": "v.",
            "meaning": "重申",
            "en": "He restated his point to make it clear.",
            "zh": "他重申了自己的觀點，以確保清楚。"
          },
          {
            "word": "reverse",
            "pos": "v./adj./n.",
            "meaning": "逆轉；相反的；顛倒",
            "en": "The decision was later reversed by the court.",
            "zh": "這項決定後來被法院推翻了。"
          },
          {
            "word": "revise",
            "pos": "v.",
            "meaning": "修改；修訂",
            "en": "The writer revised his book before publishing.",
            "zh": "作家在出版前修改了他的書。"
          },
          {
            "word": "rid",
            "pos": "v.",
            "meaning": "擺脫",
            "en": "I need to get rid of these old clothes.",
            "zh": "我需要處理掉這些舊衣服。"
          },
          {
            "word": "ruin",
            "pos": "v./n.",
            "meaning": "毀滅；廢墟",
            "en": "The storm ruined the crops.",
            "zh": "暴風雨摧毀了農作物。"
          },
          {
            "word": "scratch",
            "pos": "v./n.",
            "meaning": "刮傷；抓痕",
            "en": "The cat scratched the furniture.",
            "zh": "貓抓壞了家具。"
          },
          {
            "word": "select",
            "pos": "v.",
            "meaning": "選擇",
            "en": "She was selected as the team captain.",
            "zh": "她被選為隊長。"
          },
          {
            "word": "shrewd",
            "pos": "adj.",
            "meaning": "精明的；敏銳的",
            "en": "He is a shrewd businessman.",
            "zh": "他是一位精明的商人。"
          },
          {
            "word": "shuttle",
            "pos": "n./v.",
            "meaning": "接駁車；來回運送",
            "en": "The hotel provides a shuttle service to the airport.",
            "zh": "這家飯店提供機場接駁服務。"
          },
          {
            "word": "signal",
            "pos": "n./v.",
            "meaning": "信號；發出信號",
            "en": "The traffic light signaled it was safe to cross.",
            "zh": "紅綠燈信號顯示可以安全過馬路。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "Please provide specific details about the issue.",
            "zh": "請提供關於這個問題的具體細節。"
          },
          {
            "word": "split",
            "pos": "v./n.",
            "meaning": "分裂；分開",
            "en": "They decided to split the bill evenly.",
            "zh": "他們決定平均分攤帳單。"
          },
          {
            "word": "sponsor",
            "pos": "v./n.",
            "meaning": "贊助；贊助者",
            "en": "The company sponsored the charity event.",
            "zh": "這家公司贊助了這場慈善活動。"
          },
          {
            "word": "strategy",
            "pos": "n.",
            "meaning": "策略",
            "en": "The company developed a new marketing strategy.",
            "zh": "這家公司制定了一項新的行銷策略。"
          },
          {
            "word": "sum",
            "pos": "n./v.",
            "meaning": "總數；總結",
            "en": "The total sum of the expenses is $500.",
            "zh": "總費用為 500 美元。"
          },
          {
            "word": "summarize",
            "pos": "v.",
            "meaning": "總結",
            "en": "Can you summarize the main points of the speech?",
            "zh": "你可以總結一下演講的要點嗎？"
          },
          {
            "word": "summary",
            "pos": "n.",
            "meaning": "摘要",
            "en": "The report includes a short summary of the findings.",
            "zh": "這份報告包括研究結果的簡要摘要。"
          },
          {
            "word": "superior",
            "pos": "adj.",
            "meaning": "優越的；上級的",
            "en": "His performance was superior to others.",
            "zh": "他的表現優於其他人。"
          },
          {
            "word": "support",
            "pos": "v./n.",
            "meaning": "支持",
            "en": "She always supports her friends in difficult times.",
            "zh": "她總是在朋友困難時支持他們。"
          },
          {
            "word": "sway",
            "pos": "v.",
            "meaning": "搖擺；影響",
            "en": "The speech swayed public opinion.",
            "zh": "這場演講影響了公眾輿論。"
          },
          {
            "word": "territory",
            "pos": "n.",
            "meaning": "領土",
            "en": "The country expanded its territory through war.",
            "zh": "這個國家透過戰爭擴展了領土。"
          },
          {
            "word": "timber",
            "pos": "n.",
            "meaning": "木材",
            "en": "The house was built with high-quality timber.",
            "zh": "這座房子是用高品質的木材建造的。"
          },
          {
            "word": "trace",
            "pos": "v./n.",
            "meaning": "追蹤；痕跡",
            "en": "The police traced the suspect's location.",
            "zh": "警方追蹤到了嫌疑犯的位置。"
          },
          {
            "word": "trade",
            "pos": "n./v.",
            "meaning": "貿易；交換",
            "en": "The two countries have a strong trade relationship.",
            "zh": "這兩個國家有著緊密的貿易關係。"
          },
          {
            "word": "transaction",
            "pos": "n.",
            "meaning": "交易",
            "en": "The bank recorded the financial transaction.",
            "zh": "銀行記錄了這筆金融交易。"
          },
          {
            "word": "transition",
            "pos": "n.",
            "meaning": "過渡；轉變",
            "en": "The transition from high school to college can be difficult.",
            "zh": "從高中過渡到大學可能會很困難。"
          },
          {
            "word": "unbelievable",
            "pos": "adj.",
            "meaning": "難以置信的",
            "en": "The view from the top of the mountain was unbelievable.",
            "zh": "山頂的景色令人難以置信。"
          },
          {
            "word": "uniform",
            "pos": "n./adj.",
            "meaning": "制服；統一的",
            "en": "The students are required to wear uniforms.",
            "zh": "學生被要求穿校服。"
          },
          {
            "word": "united",
            "pos": "adj.",
            "meaning": "團結的；統一的",
            "en": "The team remained united throughout the competition.",
            "zh": "整個比賽期間，這支隊伍都保持團結。"
          },
          {
            "word": "value",
            "pos": "n./v.",
            "meaning": "價值；重視",
            "en": "The painting is of great value.",
            "zh": "這幅畫價值連城。"
          },
          {
            "word": "variation",
            "pos": "n.",
            "meaning": "變化；變異",
            "en": "There is a lot of variation in climate patterns.",
            "zh": "氣候模式有很大的變化。"
          },
          {
            "word": "varied",
            "pos": "adj.",
            "meaning": "多樣的",
            "en": "She has a varied taste in music.",
            "zh": "她的音樂品味多種多樣。"
          },
          {
            "word": "various",
            "pos": "adj.",
            "meaning": "各種各樣的",
            "en": "He has worked in various industries.",
            "zh": "他曾在不同的行業工作過。"
          }
        ]
      },
      {
        "id": 4,
        "name": "RC Strategy 2",
        "words": [
          {
            "word": "academic",
            "pos": "adj.",
            "meaning": "學術的",
            "en": "She has a strong academic background.",
            "zh": "她在學術上有很強的背景。"
          },
          {
            "word": "accomplish",
            "pos": "v.",
            "meaning": "實現",
            "en": "He worked hard to accomplish his goals.",
            "zh": "他努力實現自己的目標。"
          },
          {
            "word": "admiring",
            "pos": "adj.",
            "meaning": "欽佩的",
            "en": "She looked at him with admiring eyes.",
            "zh": "她以欽佩的眼光看著他。"
          },
          {
            "word": "anxious",
            "pos": "adj.",
            "meaning": "焦慮的",
            "en": "She felt anxious before the exam.",
            "zh": "她在考試前感到焦慮。"
          },
          {
            "word": "appreciation",
            "pos": "n.",
            "meaning": "欣賞",
            "en": "Show your appreciation for their hard work.",
            "zh": "對他們的辛勤工作表示欣賞。"
          },
          {
            "word": "assist",
            "pos": "v.",
            "meaning": "協助",
            "en": "I will assist you in completing the project.",
            "zh": "我將協助你完成這個項目。"
          },
          {
            "word": "atmosphere",
            "pos": "n.",
            "meaning": "氛圍",
            "en": "The atmosphere in the room was tense.",
            "zh": "房間的氛圍很緊張。"
          },
          {
            "word": "attitude",
            "pos": "n.",
            "meaning": "態度",
            "en": "Your attitude towards work is important.",
            "zh": "你對工作的態度很重要。"
          },
          {
            "word": "awake",
            "pos": "adj. / v.",
            "meaning": "醒著的 / 喚醒",
            "en": "She was awake all night studying.",
            "zh": "她整夜都醒著讀書。"
          },
          {
            "word": "aware",
            "pos": "adj.",
            "meaning": "察覺到的",
            "en": "Are you aware of the consequences?",
            "zh": "你察覺到後果了嗎？"
          },
          {
            "word": "bacon",
            "pos": "n.",
            "meaning": "培根",
            "en": "I love the smell of sizzling bacon.",
            "zh": "我喜歡培根嘶嘶作響的香味。"
          },
          {
            "word": "balance",
            "pos": "n. / v.",
            "meaning": "平衡 / 平衡",
            "en": "Finding a balance in life is essential.",
            "zh": "在生活中找到平衡是必要的。"
          },
          {
            "word": "basis",
            "pos": "n.",
            "meaning": "基礎",
            "en": "The decision was made on the basis of facts.",
            "zh": "決策是基於事實的基礎上做出的。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區",
            "en": "The community came together to support each other.",
            "zh": "社區齊心協力相互支持。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解",
            "en": "His comprehension of the topic was impressive.",
            "zh": "他對這個主題的理解令人印象深刻。"
          },
          {
            "word": "concepts",
            "pos": "n.",
            "meaning": "概念",
            "en": "The teacher explained complex concepts clearly.",
            "zh": "老師清晰地解釋了復雜的概念。"
          },
          {
            "word": "convince",
            "pos": "v.",
            "meaning": "說服",
            "en": "She tried to convince him to change his mind.",
            "zh": "她試圖說服他改變主意。"
          },
          {
            "word": "create",
            "pos": "v.",
            "meaning": "創造",
            "en": "Artists often create beautiful masterpieces.",
            "zh": "藝術家經常創作出美麗的傑作。"
          },
          {
            "word": "customer",
            "pos": "n.",
            "meaning": "顧客",
            "en": "The store values its loyal customers.",
            "zh": "這家商店重視它的忠實顧客。"
          },
          {
            "word": "dairy",
            "pos": "n. / adj.",
            "meaning": "乳製品 / 乳製的",
            "en": "She bought fresh dairy products at the market.",
            "zh": "她在市場上買了新鮮的乳製品。"
          },
          {
            "word": "dawn",
            "pos": "n.",
            "meaning": "黎明",
            "en": "The birds started singing at dawn.",
            "zh": "鳥兒在黎明時開始歌唱。"
          },
          {
            "word": "demonstrate",
            "pos": "v.",
            "meaning": "示範",
            "en": "The teacher will demonstrate the experiment.",
            "zh": "老師將示範這個實驗。"
          },
          {
            "word": "depressed",
            "pos": "adj.",
            "meaning": "沮喪",
            "en": "She felt depressed after the loss.",
            "zh": "她在失落後感到沮喪。"
          },
          {
            "word": "describe",
            "pos": "v.",
            "meaning": "描述",
            "en": "Can you describe the scene in detail?",
            "zh": "你能詳細描述一下現場嗎？"
          },
          {
            "word": "deserve",
            "pos": "v.",
            "meaning": "應得",
            "en": "He worked hard and deserved the promotion.",
            "zh": "他努力工作，應得提升。"
          },
          {
            "word": "disappointed",
            "pos": "adj.",
            "meaning": "失望的",
            "en": "I was disappointed with the outcome.",
            "zh": "我對結果感到失望。"
          },
          {
            "word": "doubt",
            "pos": "n. / v.",
            "meaning": "懷疑 / 懷疑",
            "en": "She expressed doubt about the plan.",
            "zh": "她對計劃表達了懷疑。"
          },
          {
            "word": "entertain",
            "pos": "v.",
            "meaning": "娛樂",
            "en": "The magician will entertain the audience with his tricks.",
            "zh": "魔術師將以他的戲法娛樂觀眾。"
          },
          {
            "word": "event",
            "pos": "n.",
            "meaning": "事件;活動",
            "en": "The wedding was a beautiful and memorable event.",
            "zh": "婚禮是一個美麗而難忘的事件。"
          },
          {
            "word": "gaze",
            "pos": "v./n.",
            "meaning": "凝視;注視",
            "en": "She gazed at the stars in wonder and amazement.",
            "zh": "她驚奇地凝視著星星。"
          },
          {
            "word": "ground",
            "pos": "n.",
            "meaning": "地面;土地",
            "en": "The children played on the soft ground in the park.",
            "zh": "孩子們在公園的軟地上玩耍。"
          },
          {
            "word": "hallway",
            "pos": "n.",
            "meaning": "走廊",
            "en": "The hallway was dimly lit, creating a mysterious atmosphere.",
            "zh": "走廊燈光昏暗，營造出神秘的氛圍。"
          },
          {
            "word": "handle",
            "pos": "v./n.",
            "meaning": "處理;把手",
            "en": "Please handle the fragile items with care.",
            "zh": "請小心處理易碎物品。"
          },
          {
            "word": "harmony",
            "pos": "n.",
            "meaning": "和諧;融洽",
            "en": "The music created a sense of harmony and peace.",
            "zh": "音樂營造出一種和諧與平靜的感覺。"
          },
          {
            "word": "humor",
            "pos": "n.",
            "meaning": "幽默;風趣",
            "en": "His sense of humor always brings joy to others.",
            "zh": "他的幽默感總是給別人帶來歡樂。"
          },
          {
            "word": "humorous",
            "pos": "adj.",
            "meaning": "幽默的",
            "en": "The comedian delivered a humorous monologue.",
            "zh": "這位喜劇演員演繹了一段幽默的獨白。"
          },
          {
            "word": "identify",
            "pos": "v.",
            "meaning": "辨認;識別",
            "en": "Can you identify the person in the photograph?",
            "zh": "你能辨認出照片中的人嗎？"
          },
          {
            "word": "inform",
            "pos": "v.",
            "meaning": "通知;告知",
            "en": "I will inform you of any updates regarding the schedule.",
            "zh": "我會告訴你有關時間表的任何更新。"
          },
          {
            "word": "informal",
            "pos": "adj.",
            "meaning": "非正式的",
            "en": "The meeting was kept informal to encourage open discussion.",
            "zh": "會議保持非正式以促進開放的討論。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊;消息",
            "en": "The website provides valuable information on various topics.",
            "zh": "這個網站提供了各種主題的有價值的資訊。"
          },
          {
            "word": "instead",
            "pos": "adv.",
            "meaning": "代替;而不是",
            "en": "I'll have tea instead of coffee this morning.",
            "zh": "今天早上我要茶，而不是咖啡。"
          },
          {
            "word": "instruct",
            "pos": "v.",
            "meaning": "指示;教導",
            "en": "The teacher will instruct the students on the new lesson.",
            "zh": "老師將指導學生新的課程。"
          },
          {
            "word": "insulting",
            "pos": "adj.",
            "meaning": "侮辱的;無禮的",
            "en": "Making insulting remarks is not acceptable behavior.",
            "zh": "發表侮辱性的言論是不可接受的行為。"
          },
          {
            "word": "intelligent",
            "pos": "adj.",
            "meaning": "聰明的",
            "en": "She is an intelligent student who excels in her studies.",
            "zh": "她是一個聰明的學生，在學業上表現出色。"
          },
          {
            "word": "joyful",
            "pos": "adj.",
            "meaning": "快樂的",
            "en": "The celebration was filled with joyful laughter and music.",
            "zh": "慶祝活動充滿了歡快的笑聲和音樂。"
          },
          {
            "word": "layer",
            "pos": "n.",
            "meaning": "層;一層",
            "en": "The cake had multiple layers of frosting and sponge.",
            "zh": "蛋糕上有多層的糖霜和海綿。"
          },
          {
            "word": "limit",
            "pos": "n./v.",
            "meaning": "限制;限定",
            "en": "There is a speed limit on this highway.",
            "zh": "這條高速公路有速限。"
          },
          {
            "word": "negative",
            "pos": "adj.",
            "meaning": "負面的;否定的",
            "en": "Negative thoughts can impact your overall well-being.",
            "zh": "負面的想法可能影響你的整體健康。"
          },
          {
            "word": "neutral",
            "pos": "adj.",
            "meaning": "中立的;中性的",
            "en": "The country remained neutral during the conflict.",
            "zh": "這個國家在衝突中保持中立。"
          },
          {
            "word": "nurturing",
            "pos": "adj.",
            "meaning": "培育的;滋養的",
            "en": "A nurturing environment is essential for a child's development.",
            "zh": "培養環境對兒童的成長至關重要。"
          },
          {
            "word": "occur",
            "pos": "v.",
            "meaning": "發生;出現",
            "en": "Did the accident occur at the intersection?",
            "zh": "事故是不是發生在十字路口？"
          },
          {
            "word": "optimistic",
            "pos": "adj.",
            "meaning": "樂觀的",
            "en": "Despite challenges, she remains optimistic about the future.",
            "zh": "儘管面臨困難，她對未來保持樂觀。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "段落;通道",
            "en": "The passage describes the historical events of that era.",
            "zh": "這段文字描述了那個時代的歷史事件。"
          },
          {
            "word": "path",
            "pos": "n.",
            "meaning": "路徑;小道",
            "en": "We walked along a beautiful path in the forest.",
            "zh": "我們沿著森林中美麗的小道走著。"
          },
          {
            "word": "patient",
            "pos": "adj./n.",
            "meaning": "有耐心的;病人",
            "en": "Being patient is important when learning new skills.",
            "zh": "學習新技能時要有耐心是重要的。"
          },
          {
            "word": "permission",
            "pos": "n.",
            "meaning": "允許;許可",
            "en": "You need permission to access certain areas of the building.",
            "zh": "進入建築物的某些區域需要允許。"
          },
          {
            "word": "permit",
            "pos": "v./n.",
            "meaning": "允許;許可",
            "en": "The city council may permit the construction of a new park.",
            "zh": "市議會可能允許建造一個新公園。"
          },
          {
            "word": "persuade",
            "pos": "v.",
            "meaning": "說服;勸說",
            "en": "He tried to persuade his friends to join the project.",
            "zh": "他試圖說服朋友加入這個項目。"
          },
          {
            "word": "pessimistic",
            "pos": "adj.",
            "meaning": "悲觀的",
            "en": "Some people are naturally pessimistic about the future.",
            "zh": "有些人天生對未來持悲觀態度。"
          },
          {
            "word": "positive",
            "pos": "adj.",
            "meaning": "正面的;積極的",
            "en": "Maintaining a positive attitude can lead to success.",
            "zh": "保持積極的態度可以導致成功。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程;處理",
            "en": "The manufacturing process involves several steps.",
            "zh": "製造過程包含多個步驟。"
          },
          {
            "word": "product",
            "pos": "n.",
            "meaning": "產品;成果",
            "en": "The company released a new product in the market.",
            "zh": "公司在市場推出了一款新產品。"
          },
          {
            "word": "protein",
            "pos": "n.",
            "meaning": "蛋白質",
            "en": "Eggs are a good source of protein.",
            "zh": "蛋是蛋白質的良好來源。"
          },
          {
            "word": "purpose",
            "pos": "n.",
            "meaning": "目的;意圖",
            "en": "The purpose of the meeting is to discuss upcoming projects.",
            "zh": "會議的目的是討論即將到來的項目。"
          },
          {
            "word": "range",
            "pos": "n./v.",
            "meaning": "範圍;範圍內",
            "en": "The store offers a wide range of products.",
            "zh": "這家商店提供各種各樣的產品。"
          },
          {
            "word": "remind",
            "pos": "v.",
            "meaning": "提醒;使想起",
            "en": "Let me remind you about the upcoming deadline.",
            "zh": "讓我提醒你即將到來的截止日期。"
          },
          {
            "word": "series",
            "pos": "n.",
            "meaning": "系列;一系列",
            "en": "The TV series has gained popularity worldwide.",
            "zh": "這個電視系列在全球獲得了廣泛的評價。"
          },
          {
            "word": "shock",
            "pos": "n./v.",
            "meaning": "震驚;使震驚",
            "en": "The news of the accident was a shock to everyone.",
            "zh": "事故的消息對每個人都是一個震驚。"
          },
          {
            "word": "shoot",
            "pos": "v.",
            "meaning": "射擊;拍攝",
            "en": "The photographer will shoot a new advertising campaign.",
            "zh": "攝影師將拍攝一個新的廣告活動。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的;特定的",
            "en": "Can you provide more specific details about the plan?",
            "zh": "你能提供有關計劃的更具體的細節嗎？"
          },
          {
            "word": "technically",
            "pos": "adv.",
            "meaning": "技術上;從技術上來說",
            "en": "Technically, the process is complex but achievable.",
            "zh": "從技術上來說，這個過程復雜但是可以實現的。"
          },
          {
            "word": "threatening",
            "pos": "adj.",
            "meaning": "威脅的;恐嚇的",
            "en": "The dark clouds looked threatening, but it didn't rain.",
            "zh": "陰暗的雲層看起來威脅嚴重，但沒有下雨。"
          },
          {
            "word": "toast",
            "pos": "n./v.",
            "meaning": "烤麵包;祝酒",
            "en": "Let's have a toast to celebrate this special occasion.",
            "zh": "讓我們舉杯慶祝這個特殊的時刻。"
          },
          {
            "word": "tone",
            "pos": "n.",
            "meaning": "語調;音調",
            "en": "Her tone of voice indicated excitement.",
            "zh": "她的語調顯示出興奮。"
          },
          {
            "word": "tropical",
            "pos": "adj.",
            "meaning": "熱帶的",
            "en": "The tropical climate attracts many tourists.",
            "zh": "熱帶氣候吸引了許多遊客。"
          },
          {
            "word": "value",
            "pos": "n./v.",
            "meaning": "價值;重視",
            "en": "The painting has sentimental value to the family.",
            "zh": "這幅畫對這個家庭具有感情價值。"
          },
          {
            "word": "visible",
            "pos": "adj.",
            "meaning": "可見的;明顯的",
            "en": "The changes in the sky were clearly visible.",
            "zh": "天空的變化清晰可見。"
          },
          {
            "word": "weariness",
            "pos": "n.",
            "meaning": "疲勞;倦意",
            "en": "The long journey left her with a sense of weariness.",
            "zh": "長途旅行讓她感到疲勞。"
          },
          {
            "word": "willing",
            "pos": "adj.",
            "meaning": "願意的;樂意的",
            "en": "She is willing to help with the project.",
            "zh": "她願意協助這個項目。"
          },
          {
            "word": "wink",
            "pos": "v./n.",
            "meaning": "眨眼;眨眼示意",
            "en": "He gave her a wink to signal that everything was okay.",
            "zh": "他眨眼示意一切都好。"
          }
        ]
      },
      {
        "id": 5,
        "name": "RC Strategy 3",
        "words": [
          {
            "word": "academic",
            "pos": "adj./n.",
            "meaning": "學術的；學者",
            "en": "He has a strong academic background.",
            "zh": "他有很強的學術背景。"
          },
          {
            "word": "accomplish",
            "pos": "v.",
            "meaning": "完成；達成",
            "en": "She accomplished all her goals this year.",
            "zh": "她今年完成了所有目標。"
          },
          {
            "word": "admire",
            "pos": "v.",
            "meaning": "欣賞；敬佩",
            "en": "I really admire her hard work.",
            "zh": "我非常欽佩她的努力。"
          },
          {
            "word": "anxious",
            "pos": "adj.",
            "meaning": "焦慮的；擔心的",
            "en": "She felt anxious about her exam.",
            "zh": "她對考試感到焦慮。"
          },
          {
            "word": "appreciation",
            "pos": "n.",
            "meaning": "感激；欣賞",
            "en": "He showed his appreciation for their help.",
            "zh": "他對他們的幫助表示感激。"
          },
          {
            "word": "assist",
            "pos": "v.",
            "meaning": "協助；幫助",
            "en": "The nurse assisted the doctor during the surgery.",
            "zh": "護士在手術過程中協助醫生。"
          },
          {
            "word": "atmosphere",
            "pos": "n.",
            "meaning": "氣氛；大氣",
            "en": "The restaurant has a cozy atmosphere.",
            "zh": "這家餐廳有溫馨的氛圍。"
          },
          {
            "word": "attitude",
            "pos": "n.",
            "meaning": "態度",
            "en": "His positive attitude helped him succeed.",
            "zh": "他的積極態度幫助他成功。"
          },
          {
            "word": "awake",
            "pos": "adj./v.",
            "meaning": "醒著的；喚醒",
            "en": "He stayed awake all night.",
            "zh": "他整夜未眠。"
          },
          {
            "word": "aware",
            "pos": "adj.",
            "meaning": "意識到的；知道的",
            "en": "She is aware of the risks involved.",
            "zh": "她意識到涉及的風險。"
          },
          {
            "word": "bacon",
            "pos": "n.",
            "meaning": "培根",
            "en": "He had eggs and bacon for breakfast.",
            "zh": "他早餐吃了雞蛋和培根。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區；群體",
            "en": "The local community organized a charity event.",
            "zh": "當地社區組織了一場慈善活動。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解；理解力",
            "en": "Reading comprehension is important for learning.",
            "zh": "閱讀理解對學習很重要。"
          },
          {
            "word": "concept",
            "pos": "n.",
            "meaning": "概念",
            "en": "The concept of gravity was explained by Newton.",
            "zh": "牛頓解釋了重力的概念。"
          },
          {
            "word": "convince",
            "pos": "v.",
            "meaning": "說服",
            "en": "He convinced me to join the club.",
            "zh": "他說服我加入這個俱樂部。"
          },
          {
            "word": "dairy",
            "pos": "n./adj.",
            "meaning": "乳製品；乳品的",
            "en": "She avoids dairy because she is lactose intolerant.",
            "zh": "她因為乳糖不耐症而避免食用乳製品。"
          },
          {
            "word": "dawn",
            "pos": "n./v.",
            "meaning": "黎明；破曉",
            "en": "They woke up at dawn to watch the sunrise.",
            "zh": "他們在黎明時醒來觀看日出。"
          },
          {
            "word": "demonstrate",
            "pos": "v.",
            "meaning": "示範；展示",
            "en": "He demonstrated how to use the new software.",
            "zh": "他示範了如何使用新軟體。"
          },
          {
            "word": "depress",
            "pos": "v.",
            "meaning": "使沮喪；使降低",
            "en": "The gloomy weather depressed everyone.",
            "zh": "陰沉的天氣讓每個人都感到沮喪。"
          },
          {
            "word": "deserve",
            "pos": "v.",
            "meaning": "值得；應得",
            "en": "She deserves a reward for her hard work.",
            "zh": "她應該因為她的努力而獲得獎勵。"
          },
          {
            "word": "disappointed",
            "pos": "adj.",
            "meaning": "失望的",
            "en": "He was disappointed with the test results.",
            "zh": "他對考試成績感到失望。"
          },
          {
            "word": "diurnal",
            "pos": "adj.",
            "meaning": "日間活動的",
            "en": "Most birds are diurnal animals.",
            "zh": "大多數鳥類是日行動物。"
          },
          {
            "word": "doubt",
            "pos": "v./n.",
            "meaning": "懷疑；疑問",
            "en": "I doubt that he will arrive on time.",
            "zh": "我懷疑他是否會準時到達。"
          },
          {
            "word": "enjoyable",
            "pos": "adj.",
            "meaning": "令人愉快的",
            "en": "The trip was very enjoyable.",
            "zh": "這次旅行非常愉快。"
          },
          {
            "word": "entertain",
            "pos": "v.",
            "meaning": "娛樂；使開心",
            "en": "The clown entertained the children with magic tricks.",
            "zh": "小丑用魔術逗樂了孩子們。"
          },
          {
            "word": "environment",
            "pos": "n.",
            "meaning": "環境",
            "en": "We should protect the natural environment.",
            "zh": "我們應該保護自然環境。"
          },
          {
            "word": "forage",
            "pos": "v.",
            "meaning": "搜尋（食物）",
            "en": "The deer foraged for food in the forest.",
            "zh": "鹿在森林中覓食。"
          },
          {
            "word": "gaze",
            "pos": "v./n.",
            "meaning": "凝視；注視",
            "en": "She gazed at the stars in the sky.",
            "zh": "她凝視著天空中的星星。"
          },
          {
            "word": "ground",
            "pos": "n.",
            "meaning": "地面",
            "en": "The children sat on the ground and played.",
            "zh": "孩子們坐在地上玩耍。"
          },
          {
            "word": "hallway",
            "pos": "n.",
            "meaning": "走廊",
            "en": "She waited for him in the hallway.",
            "zh": "她在走廊裡等他。"
          },
          {
            "word": "harmony",
            "pos": "n.",
            "meaning": "和諧；協調",
            "en": "They live together in harmony.",
            "zh": "他們和諧地生活在一起。"
          },
          {
            "word": "humor",
            "pos": "n.",
            "meaning": "幽默",
            "en": "His humor made everyone laugh.",
            "zh": "他的幽默讓每個人都笑了。"
          },
          {
            "word": "humorous",
            "pos": "adj.",
            "meaning": "幽默的",
            "en": "He told a humorous story.",
            "zh": "他講了一個幽默的故事。"
          },
          {
            "word": "identify",
            "pos": "v.",
            "meaning": "辨認；識別",
            "en": "The witness identified the suspect.",
            "zh": "目擊者識別出了嫌疑犯。"
          },
          {
            "word": "inform",
            "pos": "v.",
            "meaning": "通知；告知",
            "en": "Please inform me of any changes.",
            "zh": "請通知我任何變更。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊",
            "en": "The internet provides a lot of useful information.",
            "zh": "網際網路提供了大量有用的資訊。"
          },
          {
            "word": "instruct",
            "pos": "v.",
            "meaning": "指導；命令",
            "en": "The teacher instructed the students to read the text.",
            "zh": "老師指導學生閱讀文本。"
          },
          {
            "word": "insult",
            "pos": "v./n.",
            "meaning": "侮辱",
            "en": "He insulted his coworker in front of everyone.",
            "zh": "他當眾侮辱了他的同事。"
          },
          {
            "word": "intelligent",
            "pos": "adj.",
            "meaning": "聰明的",
            "en": "Dolphins are very intelligent animals.",
            "zh": "海豚是非常聰明的動物。"
          },
          {
            "word": "joyful",
            "pos": "adj.",
            "meaning": "快樂的；令人愉悅的",
            "en": "The children had a joyful time at the park.",
            "zh": "孩子們在公園裡玩得很開心。"
          },
          {
            "word": "layer",
            "pos": "n./v.",
            "meaning": "層；分層",
            "en": "The cake has several layers of chocolate.",
            "zh": "這個蛋糕有好幾層巧克力夾層。"
          },
          {
            "word": "limitation",
            "pos": "n.",
            "meaning": "限制",
            "en": "The new law has some limitations.",
            "zh": "新法律有一些限制。"
          },
          {
            "word": "marker",
            "pos": "n.",
            "meaning": "標記；記號",
            "en": "Use a red marker to highlight important points.",
            "zh": "用紅色記號筆標記重要點。"
          },
          {
            "word": "meteoroid",
            "pos": "n.",
            "meaning": "流星體",
            "en": "A meteoroid entered Earth’s atmosphere.",
            "zh": "一顆流星體進入了地球的大氣層。"
          },
          {
            "word": "meteor",
            "pos": "n.",
            "meaning": "流星",
            "en": "We saw a meteor streak across the sky.",
            "zh": "我們看到一顆流星劃過天空。"
          },
          {
            "word": "mostly",
            "pos": "adv.",
            "meaning": "主要地；大部分",
            "en": "She eats mostly vegetables.",
            "zh": "她主要吃蔬菜。"
          },
          {
            "word": "neutral",
            "pos": "adj.",
            "meaning": "中立的；中性的",
            "en": "He remained neutral in the argument.",
            "zh": "他在爭論中保持中立。"
          },
          {
            "word": "nurture",
            "pos": "v.",
            "meaning": "培養；養育",
            "en": "Parents nurture their children with love and care.",
            "zh": "父母用愛和關心來培育孩子。"
          },
          {
            "word": "optimistic",
            "pos": "adj.",
            "meaning": "樂觀的",
            "en": "She is optimistic about her future.",
            "zh": "她對未來持樂觀態度。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "文章段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "permission",
            "pos": "n.",
            "meaning": "許可",
            "en": "You need permission to enter the building.",
            "zh": "進入這棟建築需要許可。"
          },
          {
            "word": "permit",
            "pos": "v./n.",
            "meaning": "允許；許可證",
            "en": "The teacher does not permit talking in class.",
            "zh": "老師不允許在課堂上講話。"
          },
          {
            "word": "persuade",
            "pos": "v.",
            "meaning": "說服",
            "en": "She persuaded her friend to join the club.",
            "zh": "她說服朋友加入俱樂部。"
          },
          {
            "word": "pessimistic",
            "pos": "adj.",
            "meaning": "悲觀的",
            "en": "He is pessimistic about the economy.",
            "zh": "他對經濟持悲觀看法。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "Learning a new language is a slow process.",
            "zh": "學習新語言是一個緩慢的過程。"
          },
          {
            "word": "product",
            "pos": "n.",
            "meaning": "產品",
            "en": "This company sells high-quality products.",
            "zh": "這家公司銷售高品質產品。"
          },
          {
            "word": "protein",
            "pos": "n.",
            "meaning": "蛋白質",
            "en": "Eggs are a good source of protein.",
            "zh": "雞蛋是良好的蛋白質來源。"
          },
          {
            "word": "purpose",
            "pos": "n.",
            "meaning": "目的",
            "en": "The purpose of the meeting is to discuss new policies.",
            "zh": "這次會議的目的是討論新政策。"
          },
          {
            "word": "regretful",
            "pos": "adj.",
            "meaning": "後悔的；遺憾的",
            "en": "He was regretful about his decision.",
            "zh": "他對自己的決定感到後悔。"
          },
          {
            "word": "remind",
            "pos": "v.",
            "meaning": "提醒",
            "en": "Please remind me to call my mother.",
            "zh": "請提醒我打電話給我媽媽。"
          },
          {
            "word": "resource",
            "pos": "n.",
            "meaning": "資源",
            "en": "Water is an important natural resource.",
            "zh": "水是重要的自然資源。"
          },
          {
            "word": "sausage",
            "pos": "n.",
            "meaning": "香腸",
            "en": "She made scrambled eggs and sausage for breakfast.",
            "zh": "她做了炒蛋和香腸作為早餐。"
          },
          {
            "word": "series",
            "pos": "n.",
            "meaning": "系列；一連串",
            "en": "This is the latest book in the series.",
            "zh": "這是該系列最新的一本書。"
          },
          {
            "word": "serious",
            "pos": "adj.",
            "meaning": "嚴重的；認真的",
            "en": "This is a serious problem that needs attention.",
            "zh": "這是一個需要關注的嚴重問題。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "Please provide specific details about the issue.",
            "zh": "請提供關於這個問題的具體細節。"
          },
          {
            "word": "technically",
            "pos": "adv.",
            "meaning": "技術上來說",
            "en": "Technically, he is correct, but his argument is weak.",
            "zh": "技術上來說，他是正確的，但他的論點很薄弱。"
          },
          {
            "word": "threaten",
            "pos": "v.",
            "meaning": "威脅",
            "en": "The storm threatens to flood the city.",
            "zh": "風暴威脅著該城市可能發生洪水。"
          },
          {
            "word": "tone",
            "pos": "n.",
            "meaning": "語氣；音調",
            "en": "His tone of voice was very serious.",
            "zh": "他的語氣非常嚴肅。"
          },
          {
            "word": "tropical",
            "pos": "adj.",
            "meaning": "熱帶的",
            "en": "They went on vacation to a tropical island.",
            "zh": "他們去熱帶島嶼度假。"
          },
          {
            "word": "visible",
            "pos": "adj.",
            "meaning": "可見的",
            "en": "The stars are visible at night.",
            "zh": "夜晚可以看到星星。"
          },
          {
            "word": "weariness",
            "pos": "n.",
            "meaning": "疲勞；厭倦",
            "en": "After a long day of work, she felt deep weariness.",
            "zh": "工作了一整天後，她感到深深的疲憊。"
          },
          {
            "word": "wink",
            "pos": "v./n.",
            "meaning": "眨眼",
            "en": "He winked at me as a joke.",
            "zh": "他對我眨了眨眼，開個玩笑。"
          }
        ]
      },
      {
        "id": 6,
        "name": "RC Strategy 4",
        "words": [
          {
            "word": "accelerate",
            "pos": "v.",
            "meaning": "加速",
            "en": "The car accelerated quickly on the highway.",
            "zh": "這輛車在高速公路上快速加速。"
          },
          {
            "word": "admire",
            "pos": "v.",
            "meaning": "欣賞；羨慕",
            "en": "I admire her dedication to her work.",
            "zh": "我欽佩她對工作的奉獻精神。"
          },
          {
            "word": "assessment",
            "pos": "n.",
            "meaning": "評估",
            "en": "The teacher gave an assessment of the students’ progress.",
            "zh": "老師對學生的進步進行了評估。"
          },
          {
            "word": "brag",
            "pos": "v.",
            "meaning": "吹噓；自誇",
            "en": "He likes to brag about his expensive car.",
            "zh": "他喜歡炫耀他的昂貴汽車。"
          },
          {
            "word": "brick",
            "pos": "n.",
            "meaning": "磚塊",
            "en": "The house was built with red bricks.",
            "zh": "這座房子是用紅磚建造的。"
          },
          {
            "word": "bury",
            "pos": "v.",
            "meaning": "埋葬；掩埋",
            "en": "They buried the treasure under a tree.",
            "zh": "他們把寶藏埋在了一棵樹下。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解",
            "en": "Reading comprehension is essential for academic success.",
            "zh": "閱讀理解對學業成功至關重要。"
          },
          {
            "word": "conclude",
            "pos": "v.",
            "meaning": "總結；得出結論",
            "en": "The report concluded that climate change is real.",
            "zh": "報告得出結論，氣候變遷是真實的。"
          },
          {
            "word": "conclusion",
            "pos": "n.",
            "meaning": "結論",
            "en": "The conclusion of the study was surprising.",
            "zh": "這項研究的結論令人驚訝。"
          },
          {
            "word": "configure",
            "pos": "v.",
            "meaning": "配置",
            "en": "You need to configure the system settings.",
            "zh": "你需要配置系統設置。"
          },
          {
            "word": "curiosity",
            "pos": "n.",
            "meaning": "好奇心",
            "en": "His curiosity led him to explore new places.",
            "zh": "他的好奇心促使他探索新地方。"
          },
          {
            "word": "destroy",
            "pos": "v.",
            "meaning": "摧毀",
            "en": "The hurricane destroyed many homes.",
            "zh": "颶風摧毀了許多房屋。"
          },
          {
            "word": "emission",
            "pos": "n.",
            "meaning": "排放；釋放",
            "en": "Factories must reduce their carbon emissions.",
            "zh": "工廠必須減少碳排放。"
          },
          {
            "word": "famous",
            "pos": "adj.",
            "meaning": "著名的",
            "en": "Paris is famous for its Eiffel Tower.",
            "zh": "巴黎因艾菲爾鐵塔而聞名。"
          },
          {
            "word": "farther",
            "pos": "adv.",
            "meaning": "更遠地",
            "en": "We walked farther than we expected.",
            "zh": "我們走得比預期更遠。"
          },
          {
            "word": "fuel",
            "pos": "n./v.",
            "meaning": "燃料；加燃料",
            "en": "The car runs on diesel fuel.",
            "zh": "這輛車使用柴油作為燃料。"
          },
          {
            "word": "gasoline",
            "pos": "n.",
            "meaning": "汽油",
            "en": "Gasoline prices have increased recently.",
            "zh": "最近汽油價格上漲了。"
          },
          {
            "word": "gather",
            "pos": "v.",
            "meaning": "聚集；收集",
            "en": "The students gathered in the auditorium.",
            "zh": "學生們聚集在禮堂裡。"
          },
          {
            "word": "greedy",
            "pos": "adj.",
            "meaning": "貪婪的",
            "en": "The greedy businessman wanted more money.",
            "zh": "這位貪婪的商人想要更多的錢。"
          },
          {
            "word": "hut",
            "pos": "n.",
            "meaning": "小屋",
            "en": "They lived in a small hut near the forest.",
            "zh": "他們住在森林附近的一間小屋裡。"
          },
          {
            "word": "hybrid",
            "pos": "adj./n.",
            "meaning": "混合的；混合動力車",
            "en": "Hybrid cars use both electricity and gasoline.",
            "zh": "混合動力車使用電和汽油。"
          },
          {
            "word": "infer",
            "pos": "v.",
            "meaning": "推斷；推理",
            "en": "From the evidence, we can infer that he was present.",
            "zh": "根據證據，我們可以推斷他當時在場。"
          },
          {
            "word": "inference",
            "pos": "n.",
            "meaning": "推論",
            "en": "The scientist made an inference based on the data.",
            "zh": "科學家根據數據做出了推論。"
          },
          {
            "word": "jealous",
            "pos": "adj.",
            "meaning": "嫉妒的",
            "en": "She was jealous of her friend’s success.",
            "zh": "她嫉妒她朋友的成功。"
          },
          {
            "word": "joke",
            "pos": "n./v.",
            "meaning": "笑話；開玩笑",
            "en": "He told a funny joke at the party.",
            "zh": "他在派對上講了一個有趣的笑話。"
          },
          {
            "word": "kangaroo",
            "pos": "n.",
            "meaning": "袋鼠",
            "en": "Kangaroos are native to Australia.",
            "zh": "袋鼠是澳大利亞的特有動物。"
          },
          {
            "word": "logically",
            "pos": "adv.",
            "meaning": "合乎邏輯地",
            "en": "His argument was logically sound.",
            "zh": "他的論點在邏輯上是合理的。"
          },
          {
            "word": "option",
            "pos": "n.",
            "meaning": "選擇",
            "en": "You have the option to take the test later.",
            "zh": "你可以選擇稍後參加考試。"
          },
          {
            "word": "palace",
            "pos": "n.",
            "meaning": "宮殿",
            "en": "The king lived in a magnificent palace.",
            "zh": "國王住在一座宏偉的宮殿裡。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "通道；段落",
            "en": "The passage led to a hidden room.",
            "zh": "這條通道通向一間隱藏的房間。"
          },
          {
            "word": "passenger",
            "pos": "n.",
            "meaning": "乘客",
            "en": "The bus was full of passengers.",
            "zh": "公車上擠滿了乘客。"
          },
          {
            "word": "perform",
            "pos": "v.",
            "meaning": "表演；執行",
            "en": "The band will perform at the concert.",
            "zh": "這支樂隊將在音樂會上演出。"
          },
          {
            "word": "pretend",
            "pos": "v.",
            "meaning": "假裝",
            "en": "He pretended not to hear the question.",
            "zh": "他假裝沒聽到這個問題。"
          },
          {
            "word": "proficiency",
            "pos": "n.",
            "meaning": "熟練；精通",
            "en": "She has a high level of proficiency in English.",
            "zh": "她的英語水平很高。"
          },
          {
            "word": "shabby",
            "pos": "adj.",
            "meaning": "破舊的；寒酸的",
            "en": "He wore a shabby coat.",
            "zh": "他穿著一件破舊的外套。"
          },
          {
            "word": "shrug",
            "pos": "v./n.",
            "meaning": "聳肩",
            "en": "She shrugged her shoulders and walked away.",
            "zh": "她聳了聳肩，然後走開了。"
          },
          {
            "word": "sorrow",
            "pos": "n.",
            "meaning": "悲傷",
            "en": "He felt deep sorrow after his father’s death.",
            "zh": "父親去世後，他感到深深的悲傷。"
          },
          {
            "word": "steal",
            "pos": "v.",
            "meaning": "偷竊",
            "en": "Someone tried to steal my phone.",
            "zh": "有人試圖偷我的手機。"
          },
          {
            "word": "stolen",
            "pos": "adj.",
            "meaning": "被偷的",
            "en": "The police recovered the stolen car.",
            "zh": "警察找回了被偷的汽車。"
          },
          {
            "word": "strategy",
            "pos": "n.",
            "meaning": "策略",
            "en": "A good strategy is important in business.",
            "zh": "良好的策略在商業中很重要。"
          },
          {
            "word": "traveler",
            "pos": "n.",
            "meaning": "旅行者",
            "en": "The traveler visited many countries.",
            "zh": "這位旅行者遊歷了許多國家。"
          },
          {
            "word": "upfront",
            "pos": "adv./adj.",
            "meaning": "預先；直率的",
            "en": "He paid the rent upfront.",
            "zh": "他預先支付了房租。"
          },
          {
            "word": "van",
            "pos": "n.",
            "meaning": "廂型車",
            "en": "They rented a van for their road trip.",
            "zh": "他們租了一輛廂型車去旅行。"
          },
          {
            "word": "village",
            "pos": "n.",
            "meaning": "村莊",
            "en": "He grew up in a small village.",
            "zh": "他在一個小村莊長大。"
          },
          {
            "word": "wept",
            "pos": "v. (past of weep)",
            "meaning": "哭泣",
            "en": "She wept when she heard the bad news.",
            "zh": "當她聽到這個壞消息時，她哭了。"
          },
          {
            "word": "witness",
            "pos": "n./v.",
            "meaning": "目擊者；見證",
            "en": "He was the only witness to the accident.",
            "zh": "他是這起事故的唯一目擊者。"
          }
        ]
      },
      {
        "id": 7,
        "name": "RC Strategy 5",
        "words": [
          {
            "word": "anticipate",
            "pos": "v.",
            "meaning": "預期；期望",
            "en": "We anticipate a rise in sales next month.",
            "zh": "我們預計下個月銷售額會上升。"
          },
          {
            "word": "boom",
            "pos": "n./v.",
            "meaning": "繁榮；激增",
            "en": "The tech industry is experiencing a boom.",
            "zh": "科技產業正經歷繁榮期。"
          },
          {
            "word": "candle",
            "pos": "n.",
            "meaning": "蠟燭",
            "en": "She lit a candle during the power outage.",
            "zh": "停電時她點了一根蠟燭。"
          },
          {
            "word": "comprehend",
            "pos": "v.",
            "meaning": "理解",
            "en": "He struggled to comprehend the complex theory.",
            "zh": "他很難理解這個複雜的理論。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解力",
            "en": "Good reading comprehension is important for learning.",
            "zh": "良好的閱讀理解能力對學習很重要。"
          },
          {
            "word": "critical",
            "pos": "adj.",
            "meaning": "重要的；批判的",
            "en": "Thinking critically helps solve problems.",
            "zh": "批判性思維有助於解決問題。"
          },
          {
            "word": "deeper",
            "pos": "adj.",
            "meaning": "更深的",
            "en": "The ocean gets deeper as you go farther.",
            "zh": "你越往前，海洋就越深。"
          },
          {
            "word": "element",
            "pos": "n.",
            "meaning": "元素",
            "en": "Water is an essential element for life.",
            "zh": "水是生命的重要元素。"
          },
          {
            "word": "engage",
            "pos": "v.",
            "meaning": "參與；吸引",
            "en": "The teacher engaged students in a lively discussion.",
            "zh": "老師讓學生們參與了一場生動的討論。"
          },
          {
            "word": "evaluate",
            "pos": "v.",
            "meaning": "評估",
            "en": "We need to evaluate the effectiveness of the plan.",
            "zh": "我們需要評估這個計畫的有效性。"
          },
          {
            "word": "extract",
            "pos": "v.",
            "meaning": "提取；摘錄",
            "en": "The dentist extracted his tooth.",
            "zh": "牙醫拔除了他的牙齒。"
          },
          {
            "word": "fell",
            "pos": "v. (past of fall)",
            "meaning": "落下；倒下",
            "en": "The tree fell during the storm.",
            "zh": "暴風雨中那棵樹倒下了。"
          },
          {
            "word": "flash",
            "pos": "n./v.",
            "meaning": "閃光；閃爍",
            "en": "A bright flash of lightning lit up the sky.",
            "zh": "一道閃電照亮了天空。"
          },
          {
            "word": "grocery",
            "pos": "n.",
            "meaning": "食品雜貨店",
            "en": "She went to the grocery store to buy vegetables.",
            "zh": "她去食品雜貨店買蔬菜。"
          },
          {
            "word": "hung",
            "pos": "v. (past of hang)",
            "meaning": "掛；懸掛",
            "en": "He hung his coat on the hook.",
            "zh": "他把外套掛在掛鉤上。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊",
            "en": "The internet provides a lot of useful information.",
            "zh": "網際網路提供了大量有用的資訊。"
          },
          {
            "word": "involve",
            "pos": "v.",
            "meaning": "涉及；包含",
            "en": "The project involves multiple departments.",
            "zh": "這個項目涉及多個部門。"
          },
          {
            "word": "lightning",
            "pos": "n.",
            "meaning": "閃電",
            "en": "The sky was filled with flashes of lightning.",
            "zh": "天空中充滿了閃電的光芒。"
          },
          {
            "word": "predict",
            "pos": "v.",
            "meaning": "預測",
            "en": "Scientists predict more storms this year.",
            "zh": "科學家預測今年會有更多風暴。"
          },
          {
            "word": "prediction",
            "pos": "n.",
            "meaning": "預測；預言",
            "en": "His prediction about the weather was accurate.",
            "zh": "他的天氣預測很準確。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "Learning a new language is a slow process.",
            "zh": "學習新語言是一個緩慢的過程。"
          },
          {
            "word": "reflect",
            "pos": "v.",
            "meaning": "反映；思考",
            "en": "The mirror reflects light.",
            "zh": "鏡子反射光線。"
          },
          {
            "word": "strategy",
            "pos": "n.",
            "meaning": "策略",
            "en": "A good strategy is key to winning the game.",
            "zh": "良好的策略是贏得比賽的關鍵。"
          },
          {
            "word": "suddenly",
            "pos": "adv.",
            "meaning": "突然",
            "en": "The car suddenly stopped in the middle of the road.",
            "zh": "汽車突然在路中間停了下來。"
          },
          {
            "word": "thunder",
            "pos": "n.",
            "meaning": "雷聲",
            "en": "We heard loud thunder before the rain started.",
            "zh": "下雨前我們聽到了響亮的雷聲。"
          },
          {
            "word": "whoosh",
            "pos": "n./v.",
            "meaning": "呼嘯聲；快速移動",
            "en": "The wind made a loud whoosh as it passed through the trees.",
            "zh": "風穿過樹林時發出了響亮的呼嘯聲。"
          }
        ]
      },
      {
        "id": 8,
        "name": "RC Strategy 6",
        "words": [
          {
            "word": "antibiotic",
            "pos": "n./adj.",
            "meaning": "抗生素；抗菌的",
            "en": "The doctor prescribed an antibiotic for the infection.",
            "zh": "醫生開了一種抗生素來治療感染。"
          },
          {
            "word": "attempt",
            "pos": "v./n.",
            "meaning": "嘗試；企圖",
            "en": "He attempted to climb the mountain but failed.",
            "zh": "他試圖攀登這座山，但失敗了。"
          },
          {
            "word": "bacterial",
            "pos": "adj.",
            "meaning": "細菌的",
            "en": "The illness was caused by a bacterial infection.",
            "zh": "這種疾病是由細菌感染引起的。"
          },
          {
            "word": "breathe",
            "pos": "v.",
            "meaning": "呼吸",
            "en": "It’s important to breathe deeply when meditating.",
            "zh": "冥想時深呼吸很重要。"
          },
          {
            "word": "butcher",
            "pos": "n./v.",
            "meaning": "屠夫；屠宰",
            "en": "The butcher prepared fresh meat for sale.",
            "zh": "屠夫準備了新鮮的肉品出售。"
          },
          {
            "word": "cattle",
            "pos": "n.",
            "meaning": "牛群",
            "en": "The farmer raises cattle for beef production.",
            "zh": "農民養牛來生產牛肉。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區",
            "en": "The local community organized a charity event.",
            "zh": "當地社區組織了一場慈善活動。"
          },
          {
            "word": "deem",
            "pos": "v.",
            "meaning": "認為；視為",
            "en": "The project was deemed successful by the committee.",
            "zh": "這個專案被委員會認為是成功的。"
          },
          {
            "word": "demand",
            "pos": "n./v.",
            "meaning": "需求；要求",
            "en": "There is a high demand for electric cars.",
            "zh": "電動車的需求很高。"
          },
          {
            "word": "deprive",
            "pos": "v.",
            "meaning": "剝奪",
            "en": "The new law will not deprive citizens of their rights.",
            "zh": "新法律不會剝奪公民的權利。"
          },
          {
            "word": "detailed",
            "pos": "adj.",
            "meaning": "詳細的",
            "en": "The report provided a detailed analysis of the situation.",
            "zh": "這份報告提供了對情況的詳細分析。"
          },
          {
            "word": "disapproval",
            "pos": "n.",
            "meaning": "不贊成；反對",
            "en": "His parents showed disapproval of his decision.",
            "zh": "他的父母對他的決定表示不贊成。"
          },
          {
            "word": "domestic",
            "pos": "adj.",
            "meaning": "家庭的；國內的",
            "en": "She prefers domestic travel over international trips.",
            "zh": "她更喜歡國內旅行而不是國際旅行。"
          },
          {
            "word": "domesticate",
            "pos": "v.",
            "meaning": "馴養；使馴服",
            "en": "Dogs were among the first animals to be domesticated.",
            "zh": "狗是最早被馴養的動物之一。"
          },
          {
            "word": "enhance",
            "pos": "v.",
            "meaning": "提高；增強",
            "en": "The new software enhances user experience.",
            "zh": "新軟體提升了使用者體驗。"
          },
          {
            "word": "fatten",
            "pos": "v.",
            "meaning": "使變胖；育肥",
            "en": "The farmer fattened the pigs before selling them.",
            "zh": "農民在出售前給豬育肥。"
          },
          {
            "word": "fowl",
            "pos": "n.",
            "meaning": "家禽",
            "en": "Chicken and duck are types of fowl.",
            "zh": "雞和鴨都是家禽的一種。"
          },
          {
            "word": "grinder",
            "pos": "n.",
            "meaning": "研磨機；磨刀器",
            "en": "He used a grinder to sharpen the knife.",
            "zh": "他用磨刀器磨利刀具。"
          },
          {
            "word": "hormone",
            "pos": "n.",
            "meaning": "荷爾蒙",
            "en": "Growth hormones are sometimes used in livestock farming.",
            "zh": "成長激素有時用於畜牧業。"
          },
          {
            "word": "hygiene",
            "pos": "n.",
            "meaning": "衛生",
            "en": "Good hygiene helps prevent diseases.",
            "zh": "良好的衛生習慣有助於預防疾病。"
          },
          {
            "word": "implication",
            "pos": "n.",
            "meaning": "影響；暗示",
            "en": "The policy has serious implications for the economy.",
            "zh": "這項政策對經濟有嚴重影響。"
          },
          {
            "word": "indoors",
            "pos": "adv.",
            "meaning": "室內地",
            "en": "It started raining, so we stayed indoors.",
            "zh": "開始下雨了，所以我們待在室內。"
          },
          {
            "word": "infection",
            "pos": "n.",
            "meaning": "感染",
            "en": "The wound became red due to an infection.",
            "zh": "傷口因感染而變紅。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊",
            "en": "The website provides useful information.",
            "zh": "這個網站提供有用的資訊。"
          },
          {
            "word": "involve",
            "pos": "v.",
            "meaning": "涉及；包含",
            "en": "The project involves multiple departments.",
            "zh": "這個專案涉及多個部門。"
          },
          {
            "word": "issue",
            "pos": "n./v.",
            "meaning": "問題；議題；發布",
            "en": "Climate change is a major global issue.",
            "zh": "氣候變遷是一個重要的全球議題。"
          },
          {
            "word": "livestock",
            "pos": "n.",
            "meaning": "家畜",
            "en": "Farmers keep livestock such as cows and pigs.",
            "zh": "農民飼養牛和豬等家畜。"
          },
          {
            "word": "locate",
            "pos": "v.",
            "meaning": "找到；設置",
            "en": "The police were able to locate the missing child.",
            "zh": "警方找到了失蹤的孩子。"
          },
          {
            "word": "measure",
            "pos": "v./n.",
            "meaning": "測量；措施",
            "en": "Scientists measure the temperature changes.",
            "zh": "科學家測量溫度變化。"
          },
          {
            "word": "medication",
            "pos": "n.",
            "meaning": "藥物；藥品",
            "en": "She is taking medication for her headache.",
            "zh": "她正在服用治療頭痛的藥物。"
          },
          {
            "word": "outlet",
            "pos": "n.",
            "meaning": "插座；銷售點",
            "en": "He plugged his laptop into the power outlet.",
            "zh": "他把筆電插入電源插座。"
          },
          {
            "word": "popular",
            "pos": "adj.",
            "meaning": "受歡迎的；流行的",
            "en": "This brand is very popular among teenagers.",
            "zh": "這個品牌在青少年中很受歡迎。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "Learning a new language is a slow process.",
            "zh": "學習新語言是一個緩慢的過程。"
          },
          {
            "word": "relevant",
            "pos": "adj.",
            "meaning": "相關的",
            "en": "The professor provided relevant examples in class.",
            "zh": "教授在課堂上提供了相關的例子。"
          },
          {
            "word": "slaughter",
            "pos": "v./n.",
            "meaning": "屠殺；宰殺",
            "en": "The factory slaughters thousands of chickens every day.",
            "zh": "這家工廠每天宰殺成千上萬隻雞。"
          },
          {
            "word": "slaughterhouse",
            "pos": "n.",
            "meaning": "屠宰場",
            "en": "The cows were taken to the slaughterhouse.",
            "zh": "這些牛被帶到屠宰場。"
          },
          {
            "word": "spacious",
            "pos": "adj.",
            "meaning": "寬敞的",
            "en": "Their new house is very spacious.",
            "zh": "他們的新房子非常寬敞。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "Please provide specific details about the issue.",
            "zh": "請提供關於這個問題的具體細節。"
          },
          {
            "word": "structure",
            "pos": "n.",
            "meaning": "結構；建築物",
            "en": "The Eiffel Tower is a famous structure.",
            "zh": "艾菲爾鐵塔是一座著名的建築結構。"
          },
          {
            "word": "sufficiently",
            "pos": "adv.",
            "meaning": "充分地",
            "en": "The water supply was sufficiently clean for drinking.",
            "zh": "供水充分且適合飲用。"
          },
          {
            "word": "understanding",
            "pos": "n.",
            "meaning": "理解；領會",
            "en": "He has a deep understanding of the subject.",
            "zh": "他對這個主題有深入的理解。"
          }
        ]
      },
      {
        "id": 9,
        "name": "RC Strategy 7",
        "words": [
          {
            "word": "advantage",
            "pos": "n.",
            "meaning": "優勢；好處",
            "en": "One advantage of online shopping is convenience.",
            "zh": "線上購物的一個優勢是方便性。"
          },
          {
            "word": "ancestor",
            "pos": "n.",
            "meaning": "祖先",
            "en": "My ancestors came from Europe.",
            "zh": "我的祖先來自歐洲。"
          },
          {
            "word": "antibody",
            "pos": "n.",
            "meaning": "抗體",
            "en": "Antibodies help the body fight infections.",
            "zh": "抗體幫助身體對抗感染。"
          },
          {
            "word": "arrival",
            "pos": "n.",
            "meaning": "抵達",
            "en": "His arrival was delayed due to bad weather.",
            "zh": "由於天氣惡劣，他的到達被延遲了。"
          },
          {
            "word": "assessment",
            "pos": "n.",
            "meaning": "評估",
            "en": "The teacher gave an assessment of the students' progress.",
            "zh": "老師對學生的進步進行了評估。"
          },
          {
            "word": "associate",
            "pos": "v.",
            "meaning": "聯繫；聯想",
            "en": "People often associate chocolate with happiness.",
            "zh": "人們常常把巧克力與快樂聯想在一起。"
          },
          {
            "word": "association",
            "pos": "n.",
            "meaning": "協會；聯繫",
            "en": "He is a member of the medical association.",
            "zh": "他是醫學協會的成員。"
          },
          {
            "word": "bacteria",
            "pos": "n.",
            "meaning": "細菌",
            "en": "Some bacteria are beneficial to human health.",
            "zh": "一些細菌對人類健康有益。"
          },
          {
            "word": "barrier",
            "pos": "n.",
            "meaning": "障礙",
            "en": "Language can be a barrier to communication.",
            "zh": "語言可能成為溝通的障礙。"
          },
          {
            "word": "century",
            "pos": "n.",
            "meaning": "世紀",
            "en": "The 21st century is known for technological advancements.",
            "zh": "21 世紀以科技進步聞名。"
          },
          {
            "word": "colonist",
            "pos": "n.",
            "meaning": "殖民者",
            "en": "The colonists settled in America in the 17th century.",
            "zh": "殖民者在 17 世紀定居於美洲。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區",
            "en": "The local community organized a charity event.",
            "zh": "當地社區組織了一場慈善活動。"
          },
          {
            "word": "confer",
            "pos": "v.",
            "meaning": "授予；商議",
            "en": "The university conferred an honorary degree on him.",
            "zh": "大學授予他榮譽學位。"
          },
          {
            "word": "confused",
            "pos": "adj.",
            "meaning": "困惑的",
            "en": "She looked confused after hearing the instructions.",
            "zh": "聽完指示後，她看起來很困惑。"
          },
          {
            "word": "confusing",
            "pos": "adj.",
            "meaning": "令人困惑的",
            "en": "The directions were so confusing that I got lost.",
            "zh": "這些指示太令人困惑，我迷路了。"
          },
          {
            "word": "contribute",
            "pos": "v.",
            "meaning": "貢獻；捐助",
            "en": "He contributed $100 to the charity.",
            "zh": "他為慈善事業捐助了 100 美元。"
          },
          {
            "word": "decline",
            "pos": "v./n.",
            "meaning": "下降；拒絕",
            "en": "The economy has declined over the past year.",
            "zh": "過去一年來，經濟下滑了。"
          },
          {
            "word": "decrease",
            "pos": "v./n.",
            "meaning": "減少",
            "en": "Pollution levels have decreased in recent years.",
            "zh": "近年來污染程度已減少。"
          },
          {
            "word": "demonstrative",
            "pos": "adj.",
            "meaning": "指示的；感情外露的",
            "en": "She is very demonstrative with her emotions.",
            "zh": "她對自己的情感表現得非常外露。"
          },
          {
            "word": "devastating",
            "pos": "adj.",
            "meaning": "毀滅性的；驚人的",
            "en": "The earthquake had a devastating impact on the city.",
            "zh": "這場地震對城市造成了毀滅性影響。"
          },
          {
            "word": "disease",
            "pos": "n.",
            "meaning": "疾病",
            "en": "Heart disease is a common health problem.",
            "zh": "心臟病是一種常見的健康問題。"
          },
          {
            "word": "encounter",
            "pos": "v./n.",
            "meaning": "遭遇；邂逅",
            "en": "They encountered a bear while hiking.",
            "zh": "他們在健行時遇到了一隻熊。"
          },
          {
            "word": "environment",
            "pos": "n.",
            "meaning": "環境",
            "en": "We should protect the environment for future generations.",
            "zh": "我們應該保護環境，為後代留住美好世界。"
          },
          {
            "word": "epidemic",
            "pos": "n./adj.",
            "meaning": "流行病；流行性的",
            "en": "The flu epidemic spread rapidly across the country.",
            "zh": "流感疫情迅速在全國範圍內傳播。"
          },
          {
            "word": "estimate",
            "pos": "v./n.",
            "meaning": "估計",
            "en": "Scientists estimate that the Earth is 4.5 billion years old.",
            "zh": "科學家估計地球已有 45 億年的歷史。"
          },
          {
            "word": "explorer",
            "pos": "n.",
            "meaning": "探險家",
            "en": "Christopher Columbus was a famous explorer.",
            "zh": "克里斯多福·哥倫布是一位著名的探險家。"
          },
          {
            "word": "express",
            "pos": "v.",
            "meaning": "表達",
            "en": "He expressed his gratitude in a speech.",
            "zh": "他在演講中表達了感激之情。"
          },
          {
            "word": "goal",
            "pos": "n.",
            "meaning": "目標",
            "en": "My goal is to become a doctor.",
            "zh": "我的目標是成為一名醫生。"
          },
          {
            "word": "herd",
            "pos": "n./v.",
            "meaning": "畜群；放牧",
            "en": "A herd of cows grazed in the field.",
            "zh": "一群牛在田野裡吃草。"
          },
          {
            "word": "hive",
            "pos": "n.",
            "meaning": "蜂巢",
            "en": "The beekeeper collected honey from the hive.",
            "zh": "養蜂人從蜂巢裡收集蜂蜜。"
          },
          {
            "word": "impersonal",
            "pos": "adj.",
            "meaning": "冷漠的；客觀的",
            "en": "The email sounded very impersonal.",
            "zh": "這封電子郵件聽起來很冷漠。"
          },
          {
            "word": "inhabitant",
            "pos": "n.",
            "meaning": "居民",
            "en": "The city's inhabitants enjoy a high quality of life.",
            "zh": "這座城市的居民享有高品質的生活。"
          },
          {
            "word": "introduction",
            "pos": "n.",
            "meaning": "介紹；引言",
            "en": "The introduction of the book was very engaging.",
            "zh": "這本書的引言非常吸引人。"
          },
          {
            "word": "isolated",
            "pos": "adj.",
            "meaning": "孤立的；偏遠的",
            "en": "The village is isolated from the rest of the world.",
            "zh": "這個村莊與外界隔離。"
          },
          {
            "word": "membership",
            "pos": "n.",
            "meaning": "會員資格",
            "en": "He applied for gym membership.",
            "zh": "他申請了健身房會員資格。"
          },
          {
            "word": "merely",
            "pos": "adv.",
            "meaning": "僅僅；只是",
            "en": "He is merely a student, not a professor.",
            "zh": "他只是個學生，不是教授。"
          },
          {
            "word": "mound",
            "pos": "n.",
            "meaning": "小丘；土堆",
            "en": "The children built a mound of sand at the beach.",
            "zh": "孩子們在沙灘上堆了一個沙丘。"
          },
          {
            "word": "native",
            "pos": "adj./n.",
            "meaning": "本地的；土著",
            "en": "He is a native speaker of Spanish.",
            "zh": "他是西班牙語的母語者。"
          },
          {
            "word": "numerous",
            "pos": "adj.",
            "meaning": "許多的",
            "en": "She has written numerous books on history.",
            "zh": "她寫了許多關於歷史的書籍。"
          },
          {
            "word": "occasionally",
            "pos": "adv.",
            "meaning": "偶爾",
            "en": "We occasionally go out for dinner.",
            "zh": "我們偶爾出去吃晚餐。"
          },
          {
            "word": "otherwise",
            "pos": "adv.",
            "meaning": "否則；不然",
            "en": "We must leave now; otherwise, we'll be late.",
            "zh": "我們現在得離開，不然會遲到。"
          },
          {
            "word": "outbreak",
            "pos": "n.",
            "meaning": "爆發",
            "en": "There was an outbreak of flu in the school.",
            "zh": "學校爆發了流感疫情。"
          },
          {
            "word": "paragraph",
            "pos": "n.",
            "meaning": "段落",
            "en": "Please write a five-paragraph essay.",
            "zh": "請寫一篇五段式文章。"
          },
          {
            "word": "percent",
            "pos": "n.",
            "meaning": "百分比",
            "en": "Only 10 percent of the students passed the test.",
            "zh": "只有 10% 的學生通過了測試。"
          },
          {
            "word": "pneumonia",
            "pos": "n.",
            "meaning": "肺炎",
            "en": "He was hospitalized due to pneumonia.",
            "zh": "他因肺炎住院了。"
          },
          {
            "word": "population",
            "pos": "n.",
            "meaning": "人口；群體",
            "en": "The population of the city is over one million.",
            "zh": "這座城市的人口超過一百萬。"
          },
          {
            "word": "predator",
            "pos": "n.",
            "meaning": "捕食者；掠食動物",
            "en": "The lion is a natural predator of the zebra.",
            "zh": "獅子是斑馬的天敵。"
          },
          {
            "word": "prevent",
            "pos": "v.",
            "meaning": "預防；阻止",
            "en": "Vaccines help prevent the spread of diseases.",
            "zh": "疫苗有助於防止疾病傳播。"
          },
          {
            "word": "prey",
            "pos": "n./v.",
            "meaning": "獵物；捕食",
            "en": "Eagles prey on small animals.",
            "zh": "老鷹捕食小動物。"
          },
          {
            "word": "primary",
            "pos": "adj.",
            "meaning": "主要的；基本的",
            "en": "Education is a primary concern for parents.",
            "zh": "教育是父母最關心的問題。"
          },
          {
            "word": "pronouns",
            "pos": "n.",
            "meaning": "代名詞",
            "en": "\"He,\" \"she,\" and \"they\" are examples of pronouns.",
            "zh": "「他」、「她」和「他們」是代名詞的例子。"
          },
          {
            "word": "refer",
            "pos": "v.",
            "meaning": "參考；提及",
            "en": "Please refer to the manual for instructions.",
            "zh": "請參考手冊以獲取指示。"
          },
          {
            "word": "reference",
            "pos": "n.",
            "meaning": "參考；提及",
            "en": "He made a reference to the book in his speech.",
            "zh": "他在演講中提到了這本書。"
          },
          {
            "word": "separate",
            "pos": "v./adj.",
            "meaning": "分開；分離；獨立的",
            "en": "They decided to live in separate houses.",
            "zh": "他們決定住在不同的房子裡。"
          },
          {
            "word": "substitute",
            "pos": "n./v.",
            "meaning": "替代品；代替",
            "en": "You can substitute sugar with honey.",
            "zh": "你可以用蜂蜜代替糖。"
          },
          {
            "word": "unbelievable",
            "pos": "adj.",
            "meaning": "難以置信的",
            "en": "The view from the mountaintop was unbelievable.",
            "zh": "山頂的景色令人難以置信。"
          },
          {
            "word": "unprotected",
            "pos": "adj.",
            "meaning": "無保護的",
            "en": "The baby turtles were left unprotected from predators.",
            "zh": "小海龜沒有受到保護，容易被掠食者攻擊。"
          },
          {
            "word": "virgin",
            "pos": "adj./n.",
            "meaning": "原始的；未開發的；處女",
            "en": "The forest remains a virgin land untouched by humans.",
            "zh": "這片森林仍然是未被人類開發的原始土地。"
          },
          {
            "word": "virulent",
            "pos": "adj.",
            "meaning": "劇毒的；惡意的",
            "en": "The scientist studied the virulent strain of the virus.",
            "zh": "科學家研究了這種劇毒病毒株。"
          },
          {
            "word": "virus",
            "pos": "n.",
            "meaning": "病毒",
            "en": "The flu virus spreads easily among people.",
            "zh": "流感病毒在人群中傳播迅速。"
          }
        ]
      },
      {
        "id": 10,
        "name": "RC Strategy 8",
        "words": [
          {
            "word": "advantage",
            "pos": "n.",
            "meaning": "優勢；好處",
            "en": "One advantage of online learning is flexibility.",
            "zh": "線上學習的一個優勢是靈活性。"
          },
          {
            "word": "analogy",
            "pos": "n.",
            "meaning": "類比；比喻",
            "en": "He used an analogy to explain the concept.",
            "zh": "他用類比來解釋這個概念。"
          },
          {
            "word": "antonym",
            "pos": "n.",
            "meaning": "反義詞",
            "en": "\"Hot\" and \"cold\" are antonyms.",
            "zh": "「熱」和「冷」是反義詞。"
          },
          {
            "word": "bias",
            "pos": "n./v.",
            "meaning": "偏見；偏向",
            "en": "The article shows a strong political bias.",
            "zh": "這篇文章顯示出強烈的政治偏見。"
          },
          {
            "word": "clue",
            "pos": "n.",
            "meaning": "線索",
            "en": "The detective found a clue at the crime scene.",
            "zh": "偵探在犯罪現場發現了一個線索。"
          },
          {
            "word": "comparison",
            "pos": "n.",
            "meaning": "比較",
            "en": "The comparison between the two products showed differences.",
            "zh": "這兩款產品的比較顯示出不同之處。"
          },
          {
            "word": "consist",
            "pos": "v.",
            "meaning": "由…組成",
            "en": "The team consists of five members.",
            "zh": "這支隊伍由五名成員組成。"
          },
          {
            "word": "context",
            "pos": "n.",
            "meaning": "上下文；背景",
            "en": "You need to understand the context to get the meaning.",
            "zh": "你需要理解上下文才能明白意思。"
          },
          {
            "word": "contrast",
            "pos": "n./v.",
            "meaning": "對比；對照",
            "en": "The contrast between day and night is striking.",
            "zh": "白天與黑夜的對比非常明顯。"
          },
          {
            "word": "crop",
            "pos": "n./v.",
            "meaning": "農作物；收割",
            "en": "Wheat is an important crop in many countries.",
            "zh": "小麥是許多國家的重要農作物。"
          },
          {
            "word": "defenseless",
            "pos": "adj.",
            "meaning": "無防禦能力的",
            "en": "The small animals were defenseless against the predator.",
            "zh": "這些小動物對掠食者毫無防禦能力。"
          },
          {
            "word": "definition",
            "pos": "n.",
            "meaning": "定義",
            "en": "Can you give me the definition of this word?",
            "zh": "你能告訴我這個單詞的定義嗎？"
          },
          {
            "word": "determine",
            "pos": "v.",
            "meaning": "決定；確定",
            "en": "Scientists are trying to determine the cause of the disease.",
            "zh": "科學家正試圖確定這種疾病的原因。"
          },
          {
            "word": "discrimination",
            "pos": "n.",
            "meaning": "歧視",
            "en": "Racial discrimination is a serious issue.",
            "zh": "種族歧視是一個嚴重的問題。"
          },
          {
            "word": "distress",
            "pos": "n./v.",
            "meaning": "苦惱；痛苦",
            "en": "She was in deep distress after losing her job.",
            "zh": "她失業後陷入了極大的痛苦。"
          },
          {
            "word": "elderly",
            "pos": "adj./n.",
            "meaning": "年長的；老年人",
            "en": "The elderly should be treated with respect.",
            "zh": "老年人應該受到尊重。"
          },
          {
            "word": "encounter",
            "pos": "v./n.",
            "meaning": "遭遇；邂逅",
            "en": "We encountered a problem during the project.",
            "zh": "我們在這個專案中遇到了一個問題。"
          },
          {
            "word": "explanation",
            "pos": "n.",
            "meaning": "解釋",
            "en": "The teacher gave a clear explanation of the concept.",
            "zh": "老師對這個概念做了清楚的解釋。"
          },
          {
            "word": "fragile",
            "pos": "adj.",
            "meaning": "易碎的；脆弱的",
            "en": "Be careful! This glass is very fragile.",
            "zh": "小心！這個玻璃杯非常易碎。"
          },
          {
            "word": "frustrating",
            "pos": "adj.",
            "meaning": "令人沮喪的",
            "en": "Learning a new language can be frustrating at first.",
            "zh": "學習一門新語言一開始可能會讓人沮喪。"
          },
          {
            "word": "grammatical",
            "pos": "adj.",
            "meaning": "語法的",
            "en": "He made a grammatical mistake in his sentence.",
            "zh": "他在句子中犯了一個語法錯誤。"
          },
          {
            "word": "grip",
            "pos": "n./v.",
            "meaning": "緊握；掌控",
            "en": "He lost his grip on the rope and fell.",
            "zh": "他沒抓住繩子，摔了下去。"
          },
          {
            "word": "handicapped",
            "pos": "adj.",
            "meaning": "殘疾的",
            "en": "The handicapped person used a wheelchair.",
            "zh": "這名殘疾人士使用輪椅。"
          },
          {
            "word": "harm",
            "pos": "n./v.",
            "meaning": "傷害",
            "en": "Smoking can harm your health.",
            "zh": "吸菸會損害你的健康。"
          },
          {
            "word": "hateful",
            "pos": "adj.",
            "meaning": "充滿憎恨的",
            "en": "He received a hateful message online.",
            "zh": "他在網上收到了一條充滿憎恨的信息。"
          },
          {
            "word": "oppose",
            "pos": "v.",
            "meaning": "反對",
            "en": "Many people oppose the new law.",
            "zh": "許多人反對這項新法律。"
          },
          {
            "word": "opposite",
            "pos": "adj./n.",
            "meaning": "相反的；對立面",
            "en": "They sat on opposite sides of the table.",
            "zh": "他們坐在桌子的對面。"
          },
          {
            "word": "perceive",
            "pos": "v.",
            "meaning": "察覺；認為",
            "en": "People perceive colors differently.",
            "zh": "人們對顏色的感知方式不同。"
          },
          {
            "word": "protection",
            "pos": "n.",
            "meaning": "保護",
            "en": "Wearing a helmet provides protection while biking.",
            "zh": "戴頭盔可以在騎行時提供保護。"
          },
          {
            "word": "stem",
            "pos": "n./v.",
            "meaning": "莖；起源於",
            "en": "The issue stems from a lack of communication.",
            "zh": "這個問題起源於缺乏溝通。"
          },
          {
            "word": "structure",
            "pos": "n.",
            "meaning": "結構",
            "en": "The Eiffel Tower is a famous structure.",
            "zh": "艾菲爾鐵塔是一座著名的建築結構。"
          },
          {
            "word": "superior",
            "pos": "adj.",
            "meaning": "優越的",
            "en": "His skills are superior to others in his field.",
            "zh": "他的技能比同領域的其他人更優秀。"
          },
          {
            "word": "synonym",
            "pos": "n.",
            "meaning": "同義詞",
            "en": "\"Happy\" and \"joyful\" are synonyms.",
            "zh": "「快樂」和「喜悅」是同義詞。"
          },
          {
            "word": "tend",
            "pos": "v.",
            "meaning": "傾向於",
            "en": "People tend to eat more in winter.",
            "zh": "人們在冬天往往吃得更多。"
          },
          {
            "word": "unethical",
            "pos": "adj.",
            "meaning": "不道德的",
            "en": "Stealing is considered unethical.",
            "zh": "偷竊被認為是不道德的行為。"
          },
          {
            "word": "vulnerable",
            "pos": "adj.",
            "meaning": "易受傷害的",
            "en": "Young children are vulnerable to diseases.",
            "zh": "幼童容易感染疾病。"
          },
          {
            "word": "wheat",
            "pos": "n.",
            "meaning": "小麥",
            "en": "Wheat is used to make bread.",
            "zh": "小麥用來製作麵包。"
          },
          {
            "word": "wicked",
            "pos": "adj.",
            "meaning": "邪惡的",
            "en": "The villain in the story was truly wicked.",
            "zh": "故事中的反派角色非常邪惡。"
          },
          {
            "word": "deduce",
            "pos": "v.",
            "meaning": "推論",
            "en": "Scientists deduce facts from experiments.",
            "zh": "科學家透過實驗推論事實。"
          },
          {
            "word": "prefix",
            "pos": "n.",
            "meaning": "字首",
            "en": "\"Un-\" is a common prefix in English.",
            "zh": "\"Un-\" 是英語中常見的字首。"
          },
          {
            "word": "suffix",
            "pos": "n.",
            "meaning": "字尾",
            "en": "\"-ness\" is a suffix that turns adjectives into nouns.",
            "zh": "\"-ness\" 是一個將形容詞變成名詞的字尾。"
          },
          {
            "word": "unfairly",
            "pos": "adv.",
            "meaning": "不公平地",
            "en": "He was unfairly treated by his boss.",
            "zh": "他被老闆不公平對待。"
          },
          {
            "word": "unlike",
            "pos": "prep.",
            "meaning": "不像；不同於",
            "en": "Unlike his brother, he enjoys reading.",
            "zh": "與他的兄弟不同，他喜歡閱讀。"
          },
          {
            "word": "damage",
            "pos": "n./v.",
            "meaning": "損害",
            "en": "The flood caused severe damage to the village.",
            "zh": "洪水對村莊造成了嚴重損害。"
          },
          {
            "word": "appositive",
            "pos": "n.",
            "meaning": "同位語",
            "en": "In \"My friend, John, is kind,\" \"John\" is an appositive.",
            "zh": "在「我的朋友約翰很友善」這句話中，「約翰」是同位語。"
          },
          {
            "word": "tendril",
            "pos": "n.",
            "meaning": "卷鬚",
            "en": "The vine's tendrils wrapped around the fence.",
            "zh": "葡萄藤的卷鬚纏繞在圍欄上。"
          }
        ]
      },
      {
        "id": 11,
        "name": "RC Strategy 9",
        "words": [
          {
            "word": "accordingly",
            "pos": "adv.",
            "meaning": "因此；相應地",
            "en": "The weather was bad, so we adjusted our plans accordingly.",
            "zh": "天氣不好，所以我們相應地調整了計畫。"
          },
          {
            "word": "additional",
            "pos": "adj.",
            "meaning": "額外的",
            "en": "We need additional funds for the project.",
            "zh": "我們需要額外的資金來進行這個專案。"
          },
          {
            "word": "besides",
            "pos": "adv./prep.",
            "meaning": "此外；除…之外",
            "en": "Besides studying, he enjoys playing soccer.",
            "zh": "除了學習之外，他還喜歡踢足球。"
          },
          {
            "word": "clue",
            "pos": "n.",
            "meaning": "線索",
            "en": "The detective found a clue at the crime scene.",
            "zh": "偵探在犯罪現場發現了一個線索。"
          },
          {
            "word": "conclusion",
            "pos": "n.",
            "meaning": "結論",
            "en": "The conclusion of the research was surprising.",
            "zh": "這項研究的結論令人驚訝。"
          },
          {
            "word": "condition",
            "pos": "n.",
            "meaning": "條件；狀況",
            "en": "The car is in good condition.",
            "zh": "這輛車狀況良好。"
          },
          {
            "word": "connect",
            "pos": "v.",
            "meaning": "連接；聯繫",
            "en": "The bridge connects the two cities.",
            "zh": "這座橋連接了兩座城市。"
          },
          {
            "word": "connective",
            "pos": "adj./n.",
            "meaning": "連接的；連接詞",
            "en": "\"However\" is a common connective word.",
            "zh": "\"However\" 是一個常見的連接詞。"
          },
          {
            "word": "consequence",
            "pos": "n.",
            "meaning": "結果；後果",
            "en": "His actions had serious consequences.",
            "zh": "他的行為帶來了嚴重的後果。"
          },
          {
            "word": "consequently",
            "pos": "adv.",
            "meaning": "因此；結果是",
            "en": "He didn’t study; consequently, he failed the exam.",
            "zh": "他沒有學習，因此考試不及格。"
          },
          {
            "word": "continuation",
            "pos": "n.",
            "meaning": "延續；繼續",
            "en": "The continuation of the project depends on funding.",
            "zh": "這個專案的延續取決於資金。"
          },
          {
            "word": "contrary",
            "pos": "adj./n.",
            "meaning": "相反的；相反",
            "en": "His opinion is contrary to mine.",
            "zh": "他的意見與我的相反。"
          },
          {
            "word": "contrast",
            "pos": "n./v.",
            "meaning": "對比；對照",
            "en": "There is a strong contrast between their personalities.",
            "zh": "他們的個性之間有很大的對比。"
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "儘管；雖然",
            "en": "Despite the rain, we went for a walk.",
            "zh": "儘管下雨，我們還是去散步了。"
          },
          {
            "word": "directional",
            "pos": "adj.",
            "meaning": "方向的；指導的",
            "en": "The car has a strong directional stability.",
            "zh": "這輛車有很強的方向穩定性。"
          },
          {
            "word": "frequently",
            "pos": "adv.",
            "meaning": "頻繁地",
            "en": "He frequently travels for work.",
            "zh": "他經常因公出差。"
          },
          {
            "word": "furthermore",
            "pos": "adv.",
            "meaning": "此外；而且",
            "en": "The book is interesting; furthermore, it is educational.",
            "zh": "這本書很有趣，而且還有教育意義。"
          },
          {
            "word": "hence",
            "pos": "adv.",
            "meaning": "因此；由此",
            "en": "The roads were covered in ice, hence the accident.",
            "zh": "道路結冰，因此發生了事故。"
          },
          {
            "word": "illustration",
            "pos": "n.",
            "meaning": "插圖；舉例說明",
            "en": "The textbook includes many illustrations.",
            "zh": "這本教科書包含了許多插圖。"
          },
          {
            "word": "importance",
            "pos": "n.",
            "meaning": "重要性",
            "en": "She emphasized the importance of exercise.",
            "zh": "她強調了運動的重要性。"
          },
          {
            "word": "indicate",
            "pos": "v.",
            "meaning": "指示；顯示",
            "en": "The report indicates a rise in sales.",
            "zh": "報告顯示銷售額上升。"
          },
          {
            "word": "likewise",
            "pos": "adv.",
            "meaning": "同樣地",
            "en": "She is studying law; likewise, her brother is too.",
            "zh": "她在學習法律，她的兄弟也是。"
          },
          {
            "word": "moreover",
            "pos": "adv.",
            "meaning": "此外；而且",
            "en": "The house is large; moreover, it has a great view.",
            "zh": "這棟房子很大，而且風景很好。"
          },
          {
            "word": "owing",
            "pos": "prep.",
            "meaning": "由於",
            "en": "Owing to the heavy traffic, we were late.",
            "zh": "由於交通擁擠，我們遲到了。"
          },
          {
            "word": "paragraph",
            "pos": "n.",
            "meaning": "段落",
            "en": "Please write a five-paragraph essay.",
            "zh": "請寫一篇五段式文章。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "文章段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "primarily",
            "pos": "adv.",
            "meaning": "主要地",
            "en": "The course is primarily designed for beginners.",
            "zh": "這門課主要是為初學者設計的。"
          },
          {
            "word": "purpose",
            "pos": "n.",
            "meaning": "目的",
            "en": "The purpose of the meeting is to discuss new policies.",
            "zh": "這次會議的目的是討論新政策。"
          },
          {
            "word": "reiterate",
            "pos": "v.",
            "meaning": "重申",
            "en": "The teacher reiterated the importance of punctuality.",
            "zh": "老師重申了準時的重要性。"
          },
          {
            "word": "repetition",
            "pos": "n.",
            "meaning": "重複",
            "en": "Repetition helps in language learning.",
            "zh": "重複有助於語言學習。"
          },
          {
            "word": "secondarily",
            "pos": "adv.",
            "meaning": "次要地",
            "en": "The issue is secondarily related to economic factors.",
            "zh": "這個問題次要地與經濟因素相關。"
          },
          {
            "word": "sequence",
            "pos": "n.",
            "meaning": "順序",
            "en": "The sequence of events is important in storytelling.",
            "zh": "事件的順序在敘述故事中很重要。"
          },
          {
            "word": "signal",
            "pos": "n./v.",
            "meaning": "信號；發出信號",
            "en": "The traffic light signaled it was safe to cross.",
            "zh": "紅綠燈信號顯示可以安全過馬路。"
          },
          {
            "word": "similarity",
            "pos": "n.",
            "meaning": "相似",
            "en": "There is a similarity between these two designs.",
            "zh": "這兩種設計之間有相似之處。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "Please provide specific details about the issue.",
            "zh": "請提供關於這個問題的具體細節。"
          },
          {
            "word": "spite",
            "pos": "n./v.",
            "meaning": "惡意；儘管",
            "en": "He left early in spite of the rain.",
            "zh": "儘管下雨，他還是早早離開了。"
          },
          {
            "word": "subsequently",
            "pos": "adv.",
            "meaning": "隨後；接著",
            "en": "He graduated and subsequently started his own business.",
            "zh": "他畢業後隨即創辦了自己的公司。"
          },
          {
            "word": "sum",
            "pos": "n./v.",
            "meaning": "總數；總結",
            "en": "The total sum of the expenses is $500.",
            "zh": "總費用為 500 美元。"
          },
          {
            "word": "summary",
            "pos": "n.",
            "meaning": "摘要",
            "en": "The report includes a short summary of the findings.",
            "zh": "這份報告包括研究結果的簡要摘要。"
          },
          {
            "word": "token",
            "pos": "n.",
            "meaning": "象徵；紀念品",
            "en": "He gave her a small gift as a token of appreciation.",
            "zh": "他送給她一份小禮物以示感謝。"
          },
          {
            "word": "ultimately",
            "pos": "adv.",
            "meaning": "最終；終究",
            "en": "Ultimately, he decided to accept the job offer.",
            "zh": "最終，他決定接受這份工作。"
          }
        ]
      },
      {
        "id": 12,
        "name": "RC to meet 1 &2",
        "words": [
          {
            "word": "absence",
            "pos": "n.",
            "meaning": "缺席；缺乏",
            "en": "His absence from work was noticed by his colleagues.",
            "zh": "他的缺席被同事注意到了。"
          },
          {
            "word": "administration",
            "pos": "n.",
            "meaning": "管理；行政",
            "en": "The school administration announced new policies.",
            "zh": "學校管理部門宣布了新政策。"
          },
          {
            "word": "announce",
            "pos": "v.",
            "meaning": "宣布",
            "en": "The company announced a new product launch.",
            "zh": "這家公司宣布了一款新產品的發佈。"
          },
          {
            "word": "announcement",
            "pos": "n.",
            "meaning": "公告；宣佈",
            "en": "The announcement was made during the meeting.",
            "zh": "這項公告是在會議期間發布的。"
          },
          {
            "word": "appointment",
            "pos": "n.",
            "meaning": "約會；任命",
            "en": "I have a doctor's appointment at 3 PM.",
            "zh": "我下午三點有個醫生的預約。"
          },
          {
            "word": "arrangement",
            "pos": "n.",
            "meaning": "安排；佈置",
            "en": "They made arrangements for the wedding.",
            "zh": "他們為婚禮做了安排。"
          },
          {
            "word": "atmosphere",
            "pos": "n.",
            "meaning": "氣氛；大氣",
            "en": "The restaurant has a cozy atmosphere.",
            "zh": "這家餐廳有溫馨的氛圍。"
          },
          {
            "word": "atmospheric",
            "pos": "adj.",
            "meaning": "大氣的；氣氛的",
            "en": "The atmospheric pressure changes with altitude.",
            "zh": "大氣壓隨著海拔變化。"
          },
          {
            "word": "Celsius",
            "pos": "n.",
            "meaning": "攝氏",
            "en": "Water freezes at 0 degrees Celsius.",
            "zh": "水在攝氏 0 度結冰。"
          },
          {
            "word": "climate",
            "pos": "n.",
            "meaning": "氣候",
            "en": "The climate in this region is very humid.",
            "zh": "這個地區的氣候非常潮濕。"
          },
          {
            "word": "concerned",
            "pos": "adj.",
            "meaning": "擔心的；關心的",
            "en": "She was concerned about her exam results.",
            "zh": "她擔心她的考試成績。"
          },
          {
            "word": "context",
            "pos": "n.",
            "meaning": "上下文；背景",
            "en": "You need to understand the context to grasp the meaning.",
            "zh": "你需要理解上下文才能明白意思。"
          },
          {
            "word": "correspondence",
            "pos": "n.",
            "meaning": "通信；一致",
            "en": "The manager handles all business correspondence.",
            "zh": "經理負責處理所有商業信函。"
          },
          {
            "word": "dismissal",
            "pos": "n.",
            "meaning": "解僱；開除",
            "en": "His dismissal from the company was unexpected.",
            "zh": "他被公司解僱是意想不到的。"
          },
          {
            "word": "extreme",
            "pos": "adj./n.",
            "meaning": "極端的；極端",
            "en": "The desert experiences extreme temperatures.",
            "zh": "沙漠的氣溫變化極端。"
          },
          {
            "word": "flood",
            "pos": "n./v.",
            "meaning": "洪水；淹沒",
            "en": "The heavy rain caused a flood in the city.",
            "zh": "大雨導致城市發生洪水。"
          },
          {
            "word": "hemisphere",
            "pos": "n.",
            "meaning": "半球",
            "en": "The Northern Hemisphere experiences winter in December.",
            "zh": "北半球在 12 月迎來冬季。"
          },
          {
            "word": "influence",
            "pos": "n./v.",
            "meaning": "影響",
            "en": "Social media has a strong influence on teenagers.",
            "zh": "社交媒體對青少年有很大的影響。"
          },
          {
            "word": "instruction",
            "pos": "n.",
            "meaning": "指導；指示",
            "en": "Please follow the teacher's instructions.",
            "zh": "請按照老師的指示進行。"
          },
          {
            "word": "intergovernmental",
            "pos": "adj.",
            "meaning": "政府間的",
            "en": "The intergovernmental meeting focused on climate change.",
            "zh": "政府間會議聚焦於氣候變遷。"
          },
          {
            "word": "journalism",
            "pos": "n.",
            "meaning": "新聞業",
            "en": "She studied journalism in college.",
            "zh": "她在大學學習新聞學。"
          },
          {
            "word": "multiple",
            "pos": "adj.",
            "meaning": "多重的；多個的",
            "en": "The test had multiple-choice questions.",
            "zh": "這次考試包含多項選擇題。"
          },
          {
            "word": "outdid",
            "pos": "v. (past of outdo)",
            "meaning": "勝過；超越",
            "en": "She outdid herself in the competition.",
            "zh": "她在比賽中超越了自己。"
          },
          {
            "word": "ozone",
            "pos": "n.",
            "meaning": "臭氧",
            "en": "The ozone layer protects Earth from harmful UV rays.",
            "zh": "臭氧層保護地球免受有害紫外線的影響。"
          },
          {
            "word": "panel",
            "pos": "n.",
            "meaning": "專家小組；面板",
            "en": "A panel of experts discussed the issue.",
            "zh": "一個專家小組討論了這個問題。"
          },
          {
            "word": "period",
            "pos": "n.",
            "meaning": "時期；句點",
            "en": "The project will last for a short period.",
            "zh": "這個專案將持續一段短時間。"
          },
          {
            "word": "plastic",
            "pos": "n./adj.",
            "meaning": "塑膠；塑膠的",
            "en": "This bottle is made of plastic.",
            "zh": "這個瓶子是塑膠製成的。"
          },
          {
            "word": "pole",
            "pos": "n.",
            "meaning": "極地；桿子",
            "en": "The North Pole is covered in ice.",
            "zh": "北極被冰雪覆蓋。"
          },
          {
            "word": "prepare",
            "pos": "v.",
            "meaning": "準備",
            "en": "She is preparing for her final exams.",
            "zh": "她正在準備期末考試。"
          },
          {
            "word": "recess",
            "pos": "n.",
            "meaning": "休息；課間休息",
            "en": "The students played outside during recess.",
            "zh": "學生們在課間休息時到外面玩耍。"
          },
          {
            "word": "reference",
            "pos": "n.",
            "meaning": "參考；提及",
            "en": "He made a reference to the book in his speech.",
            "zh": "他在演講中提到了這本書。"
          },
          {
            "word": "regional",
            "pos": "adj.",
            "meaning": "地區的；區域的",
            "en": "This policy applies to regional governments.",
            "zh": "這項政策適用於地方政府。"
          },
          {
            "word": "respectfully",
            "pos": "adv.",
            "meaning": "尊敬地",
            "en": "She spoke respectfully to her elders.",
            "zh": "她對長輩說話很尊敬。"
          },
          {
            "word": "schedule",
            "pos": "n./v.",
            "meaning": "時間表；安排",
            "en": "The meeting is scheduled for Monday.",
            "zh": "會議安排在星期一。"
          },
          {
            "word": "slot",
            "pos": "n.",
            "meaning": "時段；插槽",
            "en": "He reserved a time slot for the interview.",
            "zh": "他預約了一個訪談時段。"
          },
          {
            "word": "spokesperson",
            "pos": "n.",
            "meaning": "發言人",
            "en": "The company’s spokesperson made an announcement.",
            "zh": "公司的發言人發表了一項公告。"
          },
          {
            "word": "subject",
            "pos": "n./adj.",
            "meaning": "主題；科目；受支配的",
            "en": "Math is his favorite subject.",
            "zh": "數學是他最喜歡的科目。"
          },
          {
            "word": "sweltering",
            "pos": "adj.",
            "meaning": "酷熱的",
            "en": "The weather was sweltering during summer.",
            "zh": "夏天的天氣酷熱難耐。"
          },
          {
            "word": "typically",
            "pos": "adv.",
            "meaning": "通常；典型地",
            "en": "Summer in this region is typically hot and humid.",
            "zh": "這個地區的夏天通常炎熱潮濕。"
          },
          {
            "word": "unite",
            "pos": "v.",
            "meaning": "團結；統一",
            "en": "The team united to achieve their goal.",
            "zh": "團隊團結起來實現他們的目標。"
          },
          {
            "word": "warn",
            "pos": "v.",
            "meaning": "警告",
            "en": "The weather report warned of an approaching storm.",
            "zh": "天氣報告警告有風暴即將來臨。"
          }
        ]
      },
      {
        "id": 13,
        "name": "RC to meet 3 &4",
        "words": [
          {
            "word": "academic",
            "pos": "adj./n.",
            "meaning": "學術的；學者",
            "en": "He has a strong academic background.",
            "zh": "他有很強的學術背景。"
          },
          {
            "word": "access",
            "pos": "n./v.",
            "meaning": "進入；使用權",
            "en": "You need a password to access the system.",
            "zh": "你需要密碼才能進入這個系統。"
          },
          {
            "word": "additional",
            "pos": "adj.",
            "meaning": "額外的",
            "en": "We need additional information for the report.",
            "zh": "我們需要額外的資訊來撰寫報告。"
          },
          {
            "word": "advertisement",
            "pos": "n.",
            "meaning": "廣告",
            "en": "I saw an advertisement for the new phone on TV.",
            "zh": "我在電視上看到了新手機的廣告。"
          },
          {
            "word": "agency",
            "pos": "n.",
            "meaning": "代理機構；機構",
            "en": "She works at a travel agency.",
            "zh": "她在一家旅行社工作。"
          },
          {
            "word": "announcement",
            "pos": "n.",
            "meaning": "公告；宣佈",
            "en": "The principal made an announcement about the school trip.",
            "zh": "校長發布了關於學校旅行的公告。"
          },
          {
            "word": "availability",
            "pos": "n.",
            "meaning": "可用性；供應狀況",
            "en": "The availability of hotel rooms is limited.",
            "zh": "酒店房間的供應有限。"
          },
          {
            "word": "benefit",
            "pos": "n./v.",
            "meaning": "好處；受益",
            "en": "Exercise has many health benefits.",
            "zh": "運動有許多健康益處。"
          },
          {
            "word": "career",
            "pos": "n.",
            "meaning": "職業；事業",
            "en": "She has a successful career in law.",
            "zh": "她在法律界有一份成功的事業。"
          },
          {
            "word": "client",
            "pos": "n.",
            "meaning": "客戶",
            "en": "The lawyer met with her client to discuss the case.",
            "zh": "律師與她的客戶會面討論案件。"
          },
          {
            "word": "communication",
            "pos": "n.",
            "meaning": "溝通",
            "en": "Good communication is key to teamwork.",
            "zh": "良好的溝通是團隊合作的關鍵。"
          },
          {
            "word": "contact",
            "pos": "n./v.",
            "meaning": "聯繫；接觸",
            "en": "Please contact me if you have any questions.",
            "zh": "如果你有任何問題，請聯繫我。"
          },
          {
            "word": "context",
            "pos": "n.",
            "meaning": "上下文；背景",
            "en": "Understanding the context helps in learning new words.",
            "zh": "理解上下文有助於學習新單詞。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new policy.",
            "zh": "市議會批准了新政策。"
          },
          {
            "word": "desire",
            "pos": "n./v.",
            "meaning": "渴望；願望",
            "en": "He has a strong desire to succeed.",
            "zh": "他有強烈的成功慾望。"
          },
          {
            "word": "distribute",
            "pos": "v.",
            "meaning": "分發；分配",
            "en": "The teacher distributed the test papers to the students.",
            "zh": "老師將考卷分發給學生。"
          },
          {
            "word": "distribution",
            "pos": "n.",
            "meaning": "分佈；分配",
            "en": "The distribution of resources must be fair.",
            "zh": "資源的分配必須公平。"
          },
          {
            "word": "entity",
            "pos": "n.",
            "meaning": "實體；存在",
            "en": "The company is a separate legal entity.",
            "zh": "這家公司是一個獨立的法律實體。"
          },
          {
            "word": "freebie",
            "pos": "n.",
            "meaning": "免費贈品",
            "en": "The store gave out freebies at the grand opening.",
            "zh": "商店在開幕時贈送免費禮品。"
          },
          {
            "word": "guardian",
            "pos": "n.",
            "meaning": "監護人；守護者",
            "en": "He was appointed as the legal guardian of the child.",
            "zh": "他被任命為這個孩子的法定監護人。"
          },
          {
            "word": "hairdresser",
            "pos": "n.",
            "meaning": "理髮師",
            "en": "She went to the hairdresser to get a haircut.",
            "zh": "她去理髮師那裡剪了頭髮。"
          },
          {
            "word": "inform",
            "pos": "v.",
            "meaning": "通知；告知",
            "en": "Please inform me of any schedule changes.",
            "zh": "請通知我任何時間表變更。"
          },
          {
            "word": "insurance",
            "pos": "n.",
            "meaning": "保險",
            "en": "Health insurance is important for everyone.",
            "zh": "健康保險對每個人都很重要。"
          },
          {
            "word": "issue",
            "pos": "n./v.",
            "meaning": "問題；議題；發布",
            "en": "Climate change is a major global issue.",
            "zh": "氣候變遷是一個重要的全球議題。"
          },
          {
            "word": "location",
            "pos": "n.",
            "meaning": "位置",
            "en": "The new office is in a convenient location.",
            "zh": "新辦公室位於便利的地點。"
          },
          {
            "word": "march",
            "pos": "n./v.",
            "meaning": "遊行；行進",
            "en": "They joined the march for climate action.",
            "zh": "他們參加了氣候行動遊行。"
          },
          {
            "word": "minimum",
            "pos": "n./adj.",
            "meaning": "最低限度",
            "en": "The minimum wage has increased this year.",
            "zh": "今年的最低工資已上調。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "文章段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "passionate",
            "pos": "adj.",
            "meaning": "充滿熱情的",
            "en": "She is passionate about teaching.",
            "zh": "她對教學充滿熱情。"
          },
          {
            "word": "perk",
            "pos": "n.",
            "meaning": "額外津貼",
            "en": "One of the job perks is free meals.",
            "zh": "這份工作的額外福利之一是免費餐點。"
          },
          {
            "word": "permanent",
            "pos": "adj.",
            "meaning": "永久的",
            "en": "He found a permanent job in the company.",
            "zh": "他在公司找到了一份永久工作。"
          },
          {
            "word": "physical",
            "pos": "adj.",
            "meaning": "身體的；物理的",
            "en": "Regular exercise improves physical health.",
            "zh": "規律運動有助於身體健康。"
          },
          {
            "word": "possibility",
            "pos": "n.",
            "meaning": "可能性",
            "en": "There is a strong possibility of rain today.",
            "zh": "今天下雨的可能性很高。"
          },
          {
            "word": "prior",
            "pos": "adj.",
            "meaning": "先前的；優先的",
            "en": "You need prior approval to access this file.",
            "zh": "你需要先前批准才能存取此文件。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "product",
            "pos": "n.",
            "meaning": "產品",
            "en": "This company sells high-quality products.",
            "zh": "這家公司銷售高品質產品。"
          },
          {
            "word": "rate",
            "pos": "n./v.",
            "meaning": "速度；比率；評估",
            "en": "The crime rate has decreased this year.",
            "zh": "今年犯罪率下降了。"
          },
          {
            "word": "readership",
            "pos": "n.",
            "meaning": "讀者群",
            "en": "The magazine has a large readership.",
            "zh": "這本雜誌擁有大量讀者群。"
          },
          {
            "word": "receipt",
            "pos": "n.",
            "meaning": "收據",
            "en": "Please keep the receipt for a refund.",
            "zh": "請保留收據以便退款。"
          },
          {
            "word": "remain",
            "pos": "v.",
            "meaning": "保持；留下",
            "en": "The problem remains unsolved.",
            "zh": "這個問題仍然未解決。"
          },
          {
            "word": "requirement",
            "pos": "n.",
            "meaning": "要求；必要條件",
            "en": "This course has no requirements for enrollment.",
            "zh": "這門課程沒有入學要求。"
          },
          {
            "word": "responsibility",
            "pos": "n.",
            "meaning": "責任",
            "en": "It is your responsibility to finish the project on time.",
            "zh": "按時完成專案是你的責任。"
          },
          {
            "word": "salon",
            "pos": "n.",
            "meaning": "美容院；沙龍",
            "en": "She owns a beauty salon in the city.",
            "zh": "她在市區擁有一家美容院。"
          },
          {
            "word": "serving",
            "pos": "n.",
            "meaning": "一份（食物）",
            "en": "A serving of fruit is good for your health.",
            "zh": "一份水果對健康有益。"
          },
          {
            "word": "skilled",
            "pos": "adj.",
            "meaning": "熟練的；有技能的",
            "en": "He is skilled in graphic design.",
            "zh": "他擅長圖形設計。"
          },
          {
            "word": "successful",
            "pos": "adj.",
            "meaning": "成功的",
            "en": "The event was very successful.",
            "zh": "這場活動非常成功。"
          },
          {
            "word": "timetable",
            "pos": "n.",
            "meaning": "時間表；課表",
            "en": "The train timetable shows the next departure time.",
            "zh": "火車時刻表顯示下一班發車時間。"
          },
          {
            "word": "training",
            "pos": "n.",
            "meaning": "訓練；培訓",
            "en": "The employees received professional training.",
            "zh": "員工接受了專業培訓。"
          },
          {
            "word": "trait",
            "pos": "n.",
            "meaning": "特徵；特性",
            "en": "Honesty is an important personality trait.",
            "zh": "誠實是一種重要的個性特徵。"
          },
          {
            "word": "underlined",
            "pos": "adj.",
            "meaning": "劃線的",
            "en": "The key points are underlined in the text.",
            "zh": "文章中的關鍵點已被劃線標記。"
          },
          {
            "word": "uniform",
            "pos": "n./adj.",
            "meaning": "制服；統一的",
            "en": "All students must wear a school uniform.",
            "zh": "所有學生都必須穿校服。"
          },
          {
            "word": "vary",
            "pos": "v.",
            "meaning": "變化；不同",
            "en": "Prices vary depending on the season.",
            "zh": "價格根據季節而變化。"
          }
        ]
      },
      {
        "id": 14,
        "name": "RC to meet 5 &6",
        "words": [
          {
            "word": "anthology",
            "pos": "n.",
            "meaning": "文選；詩集",
            "en": "The library has an anthology of modern poetry.",
            "zh": "圖書館裡有一本現代詩集。"
          },
          {
            "word": "arms",
            "pos": "n.",
            "meaning": "武器；手臂",
            "en": "The country supplied arms to its allies.",
            "zh": "該國向盟友提供了武器。"
          },
          {
            "word": "assortment",
            "pos": "n.",
            "meaning": "各種各樣",
            "en": "The box contained an assortment of chocolates.",
            "zh": "這個盒子裡有各式各樣的巧克力。"
          },
          {
            "word": "astonishment",
            "pos": "n.",
            "meaning": "驚訝；驚奇",
            "en": "To my astonishment, he completed the task in one hour.",
            "zh": "令我驚訝的是，他在一小時內完成了任務。"
          },
          {
            "word": "bewilderment",
            "pos": "n.",
            "meaning": "困惑；迷惘",
            "en": "She looked at me in bewilderment.",
            "zh": "她困惑地看著我。"
          },
          {
            "word": "biography",
            "pos": "n.",
            "meaning": "傳記",
            "en": "He wrote a biography of Albert Einstein.",
            "zh": "他寫了一本關於愛因斯坦的傳記。"
          },
          {
            "word": "calligraphy",
            "pos": "n.",
            "meaning": "書法",
            "en": "He practices calligraphy every day.",
            "zh": "他每天練習書法。"
          },
          {
            "word": "catalog",
            "pos": "n.",
            "meaning": "目錄",
            "en": "I found the book in the library catalog.",
            "zh": "我在圖書館目錄裡找到了這本書。"
          },
          {
            "word": "civil",
            "pos": "adj.",
            "meaning": "公民的；文明的",
            "en": "They had a civil discussion about the issue.",
            "zh": "他們就這個問題進行了理性的討論。"
          },
          {
            "word": "collection",
            "pos": "n.",
            "meaning": "收藏；收集",
            "en": "She has a large collection of rare stamps.",
            "zh": "她擁有大量的珍貴郵票收藏。"
          },
          {
            "word": "column",
            "pos": "n.",
            "meaning": "欄目；圓柱",
            "en": "He writes a weekly column for the newspaper.",
            "zh": "他為報紙撰寫每週專欄。"
          },
          {
            "word": "compilation",
            "pos": "n.",
            "meaning": "編輯；匯編",
            "en": "This book is a compilation of his best essays.",
            "zh": "這本書是他最佳文章的匯編。"
          },
          {
            "word": "concert",
            "pos": "n.",
            "meaning": "音樂會",
            "en": "We attended a live concert last night.",
            "zh": "我們昨晚參加了一場現場音樂會。"
          },
          {
            "word": "cub",
            "pos": "n.",
            "meaning": "幼獸",
            "en": "A lion cub was playing with its mother.",
            "zh": "一隻小獅子正在和母獅玩耍。"
          },
          {
            "word": "device",
            "pos": "n.",
            "meaning": "設備；裝置",
            "en": "The new device helps improve air quality.",
            "zh": "這款新裝置有助於改善空氣質量。"
          },
          {
            "word": "discovery",
            "pos": "n.",
            "meaning": "發現",
            "en": "His discovery changed the world of medicine.",
            "zh": "他的發現改變了醫學界。"
          },
          {
            "word": "eager",
            "pos": "adj.",
            "meaning": "渴望的；熱切的",
            "en": "She is eager to learn new skills.",
            "zh": "她渴望學習新技能。"
          },
          {
            "word": "encounter",
            "pos": "v./n.",
            "meaning": "遇見；遭遇",
            "en": "They encountered a bear in the forest.",
            "zh": "他們在森林裡遇到了一隻熊。"
          },
          {
            "word": "farewell",
            "pos": "n.",
            "meaning": "告別",
            "en": "They held a farewell party for their colleague.",
            "zh": "他們為同事舉辦了一場告別派對。"
          },
          {
            "word": "feast",
            "pos": "n./v.",
            "meaning": "宴會；享受",
            "en": "They prepared a grand feast for the guests.",
            "zh": "他們為客人準備了一場盛宴。"
          },
          {
            "word": "fiction",
            "pos": "n.",
            "meaning": "小說；虛構",
            "en": "He enjoys reading science fiction novels.",
            "zh": "他喜歡閱讀科幻小說。"
          },
          {
            "word": "gas",
            "pos": "n.",
            "meaning": "氣體；汽油",
            "en": "The car ran out of gas.",
            "zh": "這輛車沒油了。"
          },
          {
            "word": "hammer",
            "pos": "n./v.",
            "meaning": "錘子；敲打",
            "en": "He used a hammer to fix the broken chair.",
            "zh": "他用錘子修理壞掉的椅子。"
          },
          {
            "word": "incident",
            "pos": "n.",
            "meaning": "事件；事故",
            "en": "The police investigated the incident.",
            "zh": "警察調查了這起事件。"
          },
          {
            "word": "literary",
            "pos": "adj.",
            "meaning": "文學的",
            "en": "She has great literary talent.",
            "zh": "她擁有極高的文學才華。"
          },
          {
            "word": "literature",
            "pos": "n.",
            "meaning": "文學；文獻",
            "en": "He is studying English literature.",
            "zh": "他正在學習英國文學。"
          },
          {
            "word": "maternal",
            "pos": "adj.",
            "meaning": "母親的；母性的",
            "en": "She has a strong maternal instinct.",
            "zh": "她有很強的母性本能。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "文章段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "photography",
            "pos": "n.",
            "meaning": "攝影",
            "en": "He has a passion for photography.",
            "zh": "他對攝影充滿熱情。"
          },
          {
            "word": "posthumous",
            "pos": "adj.",
            "meaning": "死後的；遺作的",
            "en": "The book was published posthumously.",
            "zh": "這本書在他去世後才出版。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "prolific",
            "pos": "adj.",
            "meaning": "多產的",
            "en": "She is a prolific writer with many published books.",
            "zh": "她是一位多產作家，出版了許多書籍。"
          },
          {
            "word": "publish",
            "pos": "v.",
            "meaning": "出版；發表",
            "en": "The company will publish a new magazine next month.",
            "zh": "這家公司將於下個月出版新雜誌。"
          },
          {
            "word": "rear",
            "pos": "n./v.",
            "meaning": "背部；撫養",
            "en": "She reared three children on her own.",
            "zh": "她獨自撫養了三個孩子。"
          },
          {
            "word": "revelation",
            "pos": "n.",
            "meaning": "揭露；啟示",
            "en": "His book was full of shocking revelations.",
            "zh": "他的書充滿了驚人的揭露。"
          },
          {
            "word": "screwdriver",
            "pos": "n.",
            "meaning": "螺絲刀",
            "en": "He used a screwdriver to fix the chair.",
            "zh": "他用螺絲刀修理了椅子。"
          },
          {
            "word": "shovel",
            "pos": "n./v.",
            "meaning": "鏟子；鏟起",
            "en": "He used a shovel to remove the snow.",
            "zh": "他用鏟子鏟雪。"
          },
          {
            "word": "solicitude",
            "pos": "n.",
            "meaning": "關懷；擔憂",
            "en": "She showed great solicitude for her friend’s health.",
            "zh": "她對朋友的健康表示極大的關心。"
          },
          {
            "word": "spare",
            "pos": "adj./v.",
            "meaning": "備用的；節省",
            "en": "Do you have a spare key?",
            "zh": "你有備用鑰匙嗎？"
          },
          {
            "word": "talent",
            "pos": "n.",
            "meaning": "天賦",
            "en": "She has a great talent for music.",
            "zh": "她有極高的音樂天賦。"
          },
          {
            "word": "toll",
            "pos": "n.",
            "meaning": "通行費；損失",
            "en": "The road toll has increased this year.",
            "zh": "今年的道路通行費上漲了。"
          },
          {
            "word": "torrent",
            "pos": "n.",
            "meaning": "洪流；急流",
            "en": "The storm caused a torrent of water to flow down the street.",
            "zh": "暴風雨導致街道上湧出洪流。"
          },
          {
            "word": "trunk",
            "pos": "n.",
            "meaning": "樹幹；後車廂",
            "en": "He put his suitcase in the trunk of the car.",
            "zh": "他把行李箱放在車的後車廂裡。"
          },
          {
            "word": "underline",
            "pos": "v./n.",
            "meaning": "劃線強調",
            "en": "Please underline the key points in the text.",
            "zh": "請在文本中劃線標記重點。"
          },
          {
            "word": "weird",
            "pos": "adj.",
            "meaning": "奇怪的",
            "en": "He had a weird dream last night.",
            "zh": "他昨晚做了一個奇怪的夢。"
          }
        ]
      },
      {
        "id": 15,
        "name": "RC to meet 7 8&9",
        "words": [
          {
            "word": "adaptability",
            "pos": "n.",
            "meaning": "適應性",
            "en": "His adaptability helped him succeed in a new environment.",
            "zh": "他的適應能力幫助他在新環境中成功。"
          },
          {
            "word": "adjust",
            "pos": "v.",
            "meaning": "調整；適應",
            "en": "She adjusted her seat before driving.",
            "zh": "她在開車前調整了座椅。"
          },
          {
            "word": "arid",
            "pos": "adj.",
            "meaning": "乾燥的；不毛的",
            "en": "The desert has an arid climate.",
            "zh": "這片沙漠的氣候非常乾燥。"
          },
          {
            "word": "bare",
            "pos": "adj.",
            "meaning": "裸露的；光禿的",
            "en": "The trees were bare in winter.",
            "zh": "冬天時樹木變得光禿禿的。"
          },
          {
            "word": "beneath",
            "pos": "prep.",
            "meaning": "在…之下",
            "en": "The treasure was buried beneath the ground.",
            "zh": "寶藏埋藏在地下。"
          },
          {
            "word": "chop",
            "pos": "v.",
            "meaning": "砍；切",
            "en": "He chopped the vegetables for the salad.",
            "zh": "他把蔬菜切成沙拉。"
          },
          {
            "word": "costume",
            "pos": "n.",
            "meaning": "服裝；戲服",
            "en": "She wore a vampire costume for Halloween.",
            "zh": "她萬聖節穿了吸血鬼服裝。"
          },
          {
            "word": "creation",
            "pos": "n.",
            "meaning": "創造；作品",
            "en": "The artist’s latest creation is a beautiful sculpture.",
            "zh": "這位藝術家的最新作品是一座美麗的雕塑。"
          },
          {
            "word": "creature",
            "pos": "n.",
            "meaning": "生物",
            "en": "The deep sea is home to many mysterious creatures.",
            "zh": "深海是許多神秘生物的家園。"
          },
          {
            "word": "cultural adaptation",
            "pos": "n.",
            "meaning": "文化適應",
            "en": "Cultural adaptation is essential for immigrants.",
            "zh": "文化適應對於移民來說是至關重要的。"
          },
          {
            "word": "desertification",
            "pos": "n.",
            "meaning": "沙漠化",
            "en": "Climate change has led to increasing desertification.",
            "zh": "氣候變遷導致沙漠化加劇。"
          },
          {
            "word": "diurnal",
            "pos": "adj.",
            "meaning": "日行性的",
            "en": "Most birds are diurnal animals.",
            "zh": "大多數鳥類是日行動物。"
          },
          {
            "word": "drought",
            "pos": "n.",
            "meaning": "乾旱",
            "en": "The farmers suffered from a severe drought.",
            "zh": "農民遭受了嚴重的乾旱。"
          },
          {
            "word": "evolve",
            "pos": "v.",
            "meaning": "演化；進化",
            "en": "Birds evolved from dinosaurs.",
            "zh": "鳥類是從恐龍演化而來的。"
          },
          {
            "word": "extremely",
            "pos": "adv.",
            "meaning": "極端地",
            "en": "The weather was extremely cold last night.",
            "zh": "昨晚的天氣極度寒冷。"
          },
          {
            "word": "freezing",
            "pos": "adj.",
            "meaning": "冰冷的",
            "en": "It is freezing outside today.",
            "zh": "今天外面冷得刺骨。"
          },
          {
            "word": "geography",
            "pos": "n.",
            "meaning": "地理",
            "en": "He is studying world geography.",
            "zh": "他正在學習世界地理。"
          },
          {
            "word": "geological",
            "pos": "adj.",
            "meaning": "地質的",
            "en": "The area is known for its unique geological formations.",
            "zh": "這個地區以其獨特的地質構造而聞名。"
          },
          {
            "word": "grassy",
            "pos": "adj.",
            "meaning": "草地的",
            "en": "The horses grazed on the grassy field.",
            "zh": "馬兒在草地上吃草。"
          },
          {
            "word": "graze",
            "pos": "v.",
            "meaning": "吃草；放牧",
            "en": "The cows grazed in the meadow.",
            "zh": "牛群在草地上吃草。"
          },
          {
            "word": "ground",
            "pos": "n.",
            "meaning": "地面；土地",
            "en": "The ground was covered in snow.",
            "zh": "地面被積雪覆蓋。"
          },
          {
            "word": "harm",
            "pos": "n./v.",
            "meaning": "傷害",
            "en": "Smoking can harm your health.",
            "zh": "吸菸會危害健康。"
          },
          {
            "word": "holy",
            "pos": "adj.",
            "meaning": "神聖的",
            "en": "The temple is considered a holy place.",
            "zh": "這座廟宇被認為是神聖的地方。"
          },
          {
            "word": "honor",
            "pos": "n./v.",
            "meaning": "榮譽；尊敬",
            "en": "The soldier was honored for his bravery.",
            "zh": "這位士兵因其英勇行為而受到表彰。"
          },
          {
            "word": "immigrate",
            "pos": "v.",
            "meaning": "移民",
            "en": "They immigrated to Canada last year.",
            "zh": "他們去年移民到加拿大。"
          },
          {
            "word": "kangaroo",
            "pos": "n.",
            "meaning": "袋鼠",
            "en": "Kangaroos are native to Australia.",
            "zh": "袋鼠是澳洲特有的動物。"
          },
          {
            "word": "magic",
            "pos": "n./adj.",
            "meaning": "魔法；神奇的",
            "en": "The magician performed an amazing magic trick.",
            "zh": "魔術師表演了一個驚人的魔術。"
          },
          {
            "word": "mammal",
            "pos": "n.",
            "meaning": "哺乳動物",
            "en": "Whales are the largest mammals in the ocean.",
            "zh": "鯨魚是海洋中最大的哺乳動物。"
          },
          {
            "word": "march",
            "pos": "n./v.",
            "meaning": "遊行；行進",
            "en": "The protesters marched through the city.",
            "zh": "抗議者在城市中遊行。"
          },
          {
            "word": "moisture",
            "pos": "n.",
            "meaning": "濕氣",
            "en": "Plants need moisture to grow.",
            "zh": "植物需要濕氣才能生長。"
          },
          {
            "word": "oases",
            "pos": "n. (plural)",
            "meaning": "綠洲（複數）",
            "en": "There are several oases in the desert.",
            "zh": "這片沙漠中有幾個綠洲。"
          },
          {
            "word": "oasis",
            "pos": "n.",
            "meaning": "綠洲",
            "en": "The village is like an oasis in the desert.",
            "zh": "這個村莊像是沙漠中的綠洲。"
          },
          {
            "word": "observe",
            "pos": "v.",
            "meaning": "觀察",
            "en": "Scientists observe animal behavior in the wild.",
            "zh": "科學家在野外觀察動物行為。"
          },
          {
            "word": "occasional",
            "pos": "adj.",
            "meaning": "偶爾的",
            "en": "We take occasional trips to the countryside.",
            "zh": "我們偶爾會去鄉村旅行。"
          },
          {
            "word": "olive",
            "pos": "n.",
            "meaning": "橄欖",
            "en": "Olives are used to make olive oil.",
            "zh": "橄欖被用來製作橄欖油。"
          },
          {
            "word": "optimal",
            "pos": "adj.",
            "meaning": "最佳的",
            "en": "The car runs at optimal performance at 60 mph.",
            "zh": "這輛車在每小時 60 英里的速度下達到最佳性能。"
          },
          {
            "word": "optional",
            "pos": "adj.",
            "meaning": "可選擇的",
            "en": "The extra features are optional.",
            "zh": "額外功能是可選的。"
          },
          {
            "word": "originate",
            "pos": "v.",
            "meaning": "起源於",
            "en": "The idea originated from an old legend.",
            "zh": "這個想法源自一個古老的傳說。"
          },
          {
            "word": "particle",
            "pos": "n.",
            "meaning": "微粒",
            "en": "Dust particles filled the air.",
            "zh": "空氣中充滿了灰塵微粒。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "possession",
            "pos": "n.",
            "meaning": "財產；擁有",
            "en": "He lost all his possessions in the fire.",
            "zh": "他在火災中失去了所有財產。"
          },
          {
            "word": "precipitation",
            "pos": "n.",
            "meaning": "降水量",
            "en": "The city receives high annual precipitation.",
            "zh": "這座城市的年降水量很高。"
          },
          {
            "word": "preserve",
            "pos": "v.",
            "meaning": "保護；保存",
            "en": "The museum preserves ancient artifacts.",
            "zh": "這家博物館保存著古代文物。"
          },
          {
            "word": "rainfall",
            "pos": "n.",
            "meaning": "降雨量",
            "en": "The area has heavy rainfall during summer.",
            "zh": "這個地區夏季降雨量很大。"
          },
          {
            "word": "religious",
            "pos": "adj.",
            "meaning": "宗教的",
            "en": "He comes from a very religious family.",
            "zh": "他來自一個非常虔誠的家庭。"
          },
          {
            "word": "reptile",
            "pos": "n.",
            "meaning": "爬行動物",
            "en": "Snakes and lizards are reptiles.",
            "zh": "蛇和蜥蜴是爬行動物。"
          },
          {
            "word": "resident",
            "pos": "n.",
            "meaning": "居民",
            "en": "He is a resident of New York City.",
            "zh": "他是紐約市的居民。"
          },
          {
            "word": "resourcefulness",
            "pos": "n.",
            "meaning": "足智多謀",
            "en": "Her resourcefulness helped her solve the problem.",
            "zh": "她的足智多謀幫助她解決了問題。"
          },
          {
            "word": "saint",
            "pos": "n.",
            "meaning": "聖人",
            "en": "Saint Patrick is the patron saint of Ireland.",
            "zh": "聖派翠克是愛爾蘭的守護聖人。"
          },
          {
            "word": "shade",
            "pos": "n.",
            "meaning": "陰影；遮蔽",
            "en": "We sat in the shade of a large tree.",
            "zh": "我們坐在一棵大樹的陰影下。"
          },
          {
            "word": "stem",
            "pos": "n.",
            "meaning": "莖",
            "en": "The rose has a long, thorny stem.",
            "zh": "玫瑰有一條長長的帶刺莖。"
          },
          {
            "word": "strip",
            "pos": "n./v.",
            "meaning": "條狀物；剝去",
            "en": "He tore a strip of paper from the notebook.",
            "zh": "他從筆記本上撕下一條紙。"
          },
          {
            "word": "subtropical",
            "pos": "adj.",
            "meaning": "亞熱帶的",
            "en": "Taiwan has a subtropical climate.",
            "zh": "台灣屬於亞熱帶氣候。"
          },
          {
            "word": "sustainability",
            "pos": "n.",
            "meaning": "永續性；持續性",
            "en": "Environmental sustainability is important for future generations.",
            "zh": "環境永續對於未來世代非常重要。"
          },
          {
            "word": "sympathetic",
            "pos": "adj.",
            "meaning": "同情的；有同情心的",
            "en": "She was very sympathetic to his situation.",
            "zh": "她對他的處境感到非常同情。"
          },
          {
            "word": "underline",
            "pos": "v./n.",
            "meaning": "劃線強調；底線",
            "en": "Please underline the key points in the text.",
            "zh": "請在文本中劃線標記重點。"
          },
          {
            "word": "various",
            "pos": "adj.",
            "meaning": "各種各樣的",
            "en": "He has worked in various countries.",
            "zh": "他曾在不同的國家工作。"
          },
          {
            "word": "wander",
            "pos": "v.",
            "meaning": "漫遊；徘徊",
            "en": "He wandered around the park for hours.",
            "zh": "他在公園裡徘徊了幾個小時。"
          },
          {
            "word": "waterproof",
            "pos": "adj.",
            "meaning": "防水的",
            "en": "My new jacket is completely waterproof.",
            "zh": "我的新夾克完全防水。"
          },
          {
            "word": "zone",
            "pos": "n.",
            "meaning": "區域；地帶",
            "en": "This area is a no-parking zone.",
            "zh": "這個區域是禁止停車區。"
          }
        ]
      },
      {
        "id": 16,
        "name": "RC to Exceed 1&2",
        "words": [
          {
            "word": "accelerate",
            "pos": "v.",
            "meaning": "加速",
            "en": "The car accelerated quickly on the highway.",
            "zh": "汽車在高速公路上迅速加速。"
          },
          {
            "word": "ache",
            "pos": "n./v.",
            "meaning": "疼痛",
            "en": "His back aches after a long day of work.",
            "zh": "經過一天的工作後，他的背痛了。"
          },
          {
            "word": "alert",
            "pos": "n./adj./v.",
            "meaning": "警報；警覺的；提醒",
            "en": "The doctor alerted the patient to the risks.",
            "zh": "醫生提醒病人注意風險。"
          },
          {
            "word": "attraction",
            "pos": "n.",
            "meaning": "吸引力；景點",
            "en": "The Eiffel Tower is a famous tourist attraction.",
            "zh": "艾菲爾鐵塔是著名的旅遊景點。"
          },
          {
            "word": "chill",
            "pos": "n./v.",
            "meaning": "寒冷；放鬆",
            "en": "He felt a chill when he stepped outside.",
            "zh": "他走到外面時感到一陣寒意。"
          },
          {
            "word": "correspondence",
            "pos": "n.",
            "meaning": "通信；一致",
            "en": "He maintains regular correspondence with his old friends.",
            "zh": "他與老朋友保持定期通信。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new policy.",
            "zh": "市議會批准了新政策。"
          },
          {
            "word": "decade",
            "pos": "n.",
            "meaning": "十年",
            "en": "He worked in the company for over a decade.",
            "zh": "他在這家公司工作了十多年。"
          },
          {
            "word": "definitely",
            "pos": "adv.",
            "meaning": "明確地；肯定地",
            "en": "She is definitely coming to the party.",
            "zh": "她肯定會來參加派對。"
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "儘管",
            "en": "Despite the rain, we went for a walk.",
            "zh": "儘管下雨，我們還是去散步了。"
          },
          {
            "word": "detect",
            "pos": "v.",
            "meaning": "偵測；發現",
            "en": "The alarm system detects smoke.",
            "zh": "警報系統能夠偵測煙霧。"
          },
          {
            "word": "engage",
            "pos": "v.",
            "meaning": "參與；吸引",
            "en": "He was engaged in an interesting discussion.",
            "zh": "他參與了一場有趣的討論。"
          },
          {
            "word": "fairly",
            "pos": "adv.",
            "meaning": "相當；公平地",
            "en": "The task was fairly easy.",
            "zh": "這個任務相當容易。"
          },
          {
            "word": "familiar",
            "pos": "adj.",
            "meaning": "熟悉的",
            "en": "She is familiar with the new software.",
            "zh": "她對新軟體很熟悉。"
          },
          {
            "word": "fatal",
            "pos": "adj.",
            "meaning": "致命的",
            "en": "The accident was fatal.",
            "zh": "這場事故是致命的。"
          },
          {
            "word": "gathering",
            "pos": "n.",
            "meaning": "聚會",
            "en": "They had a family gathering last weekend.",
            "zh": "他們上週末舉行了家庭聚會。"
          },
          {
            "word": "globe",
            "pos": "n.",
            "meaning": "地球；球體",
            "en": "She wants to travel around the globe.",
            "zh": "她想環遊世界。"
          },
          {
            "word": "idiom",
            "pos": "n.",
            "meaning": "慣用語；成語",
            "en": "“Break a leg” is a common English idiom.",
            "zh": "「祝你好運」是英語中常見的成語。"
          },
          {
            "word": "imply",
            "pos": "v.",
            "meaning": "暗示",
            "en": "His words implied that he was unhappy.",
            "zh": "他的話暗示他不開心。"
          },
          {
            "word": "invitation",
            "pos": "n.",
            "meaning": "邀請",
            "en": "I received an invitation to the wedding.",
            "zh": "我收到了一份婚禮邀請。"
          },
          {
            "word": "journalism",
            "pos": "n.",
            "meaning": "新聞業",
            "en": "She is studying journalism at university.",
            "zh": "她在大學學習新聞學。"
          },
          {
            "word": "laboratory",
            "pos": "n.",
            "meaning": "實驗室",
            "en": "The scientist works in a laboratory.",
            "zh": "這位科學家在實驗室工作。"
          },
          {
            "word": "mild",
            "pos": "adj.",
            "meaning": "溫和的",
            "en": "The winter was mild this year.",
            "zh": "今年的冬天很溫和。"
          },
          {
            "word": "mission",
            "pos": "n.",
            "meaning": "任務",
            "en": "The astronauts completed their mission successfully.",
            "zh": "太空人成功完成了他們的任務。"
          },
          {
            "word": "muscle",
            "pos": "n.",
            "meaning": "肌肉",
            "en": "Regular exercise strengthens muscles.",
            "zh": "規律運動可以增強肌肉。"
          },
          {
            "word": "nasty",
            "pos": "adj.",
            "meaning": "惡劣的；令人不快的",
            "en": "He made a nasty remark about his colleague.",
            "zh": "他對同事說了句難聽的話。"
          },
          {
            "word": "outdoor",
            "pos": "adj.",
            "meaning": "戶外的",
            "en": "They enjoy outdoor activities like hiking.",
            "zh": "他們喜歡遠足等戶外活動。"
          },
          {
            "word": "outdoors",
            "pos": "adv.",
            "meaning": "在戶外",
            "en": "We had lunch outdoors.",
            "zh": "我們在戶外吃午餐。"
          },
          {
            "word": "oversee",
            "pos": "v.",
            "meaning": "監督",
            "en": "She oversees the project development.",
            "zh": "她監督專案開發。"
          },
          {
            "word": "percent",
            "pos": "n.",
            "meaning": "百分比",
            "en": "About 50 percent of the students passed the test.",
            "zh": "約 50% 的學生通過了考試。"
          },
          {
            "word": "potential",
            "pos": "n./adj.",
            "meaning": "潛力；潛在的",
            "en": "She has the potential to be a great leader.",
            "zh": "她有成為優秀領導者的潛力。"
          },
          {
            "word": "pour",
            "pos": "v.",
            "meaning": "倒；傾瀉",
            "en": "It started to pour heavily in the afternoon.",
            "zh": "下午開始下起大雨。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "rash",
            "pos": "n.",
            "meaning": "皮疹",
            "en": "He developed a rash after eating seafood.",
            "zh": "他吃了海鮮後起了皮疹。"
          },
          {
            "word": "reassure",
            "pos": "v.",
            "meaning": "使安心",
            "en": "The doctor reassured the patient about the treatment.",
            "zh": "醫生讓病人對治療放心。"
          },
          {
            "word": "regional",
            "pos": "adj.",
            "meaning": "地區的",
            "en": "This policy applies to regional governments.",
            "zh": "這項政策適用於地方政府。"
          },
          {
            "word": "salary",
            "pos": "n.",
            "meaning": "薪水",
            "en": "She receives a monthly salary of $5,000.",
            "zh": "她的月薪是 5000 美元。"
          },
          {
            "word": "setting",
            "pos": "n.",
            "meaning": "環境；場景",
            "en": "The novel is set in a rural setting.",
            "zh": "這部小說的背景設定在鄉村。"
          },
          {
            "word": "situation",
            "pos": "n.",
            "meaning": "情況",
            "en": "He handled the difficult situation well.",
            "zh": "他很好地處理了這個困難的情況。"
          },
          {
            "word": "ski",
            "pos": "v./n.",
            "meaning": "滑雪",
            "en": "They went skiing in the Alps.",
            "zh": "他們去阿爾卑斯山滑雪。"
          },
          {
            "word": "spokesperson",
            "pos": "n.",
            "meaning": "發言人",
            "en": "The company’s spokesperson made an announcement.",
            "zh": "公司的發言人發表了一項公告。"
          },
          {
            "word": "succession",
            "pos": "n.",
            "meaning": "連續；繼承",
            "en": "He won the competition three times in succession.",
            "zh": "他連續三次贏得比賽。"
          },
          {
            "word": "symptom",
            "pos": "n.",
            "meaning": "症狀",
            "en": "Fever is a common symptom of flu.",
            "zh": "發燒是流感的常見症狀。"
          },
          {
            "word": "tend",
            "pos": "v.",
            "meaning": "傾向於",
            "en": "People tend to eat more in winter.",
            "zh": "人們在冬天往往吃得更多。"
          },
          {
            "word": "threat",
            "pos": "n.",
            "meaning": "威脅",
            "en": "Climate change is a serious threat to our planet.",
            "zh": "氣候變遷是對我們星球的嚴重威脅。"
          },
          {
            "word": "tough",
            "pos": "adj.",
            "meaning": "堅韌的；困難的",
            "en": "The competition was tough.",
            "zh": "比賽非常激烈。"
          },
          {
            "word": "tourist",
            "pos": "n.",
            "meaning": "遊客",
            "en": "The city attracts thousands of tourists every year.",
            "zh": "這座城市每年吸引成千上萬的遊客。"
          },
          {
            "word": "transmission",
            "pos": "n.",
            "meaning": "傳播；傳遞",
            "en": "The transmission of the virus is a major concern.",
            "zh": "病毒的傳播是主要的關注點。"
          },
          {
            "word": "transmit",
            "pos": "v.",
            "meaning": "傳送；傳播",
            "en": "The disease is transmitted through the air.",
            "zh": "這種疾病通過空氣傳播。"
          },
          {
            "word": "underline",
            "pos": "v./n.",
            "meaning": "劃線強調；底線",
            "en": "Please underline the important points in the text.",
            "zh": "請在文本中劃線標記重要點。"
          },
          {
            "word": "update",
            "pos": "v./n.",
            "meaning": "更新；最新消息",
            "en": "The company will update the software next week.",
            "zh": "公司將在下週更新軟體。"
          },
          {
            "word": "vaccine",
            "pos": "n.",
            "meaning": "疫苗",
            "en": "The doctor recommended getting the flu vaccine.",
            "zh": "醫生建議接種流感疫苗。"
          },
          {
            "word": "virus",
            "pos": "n.",
            "meaning": "病毒",
            "en": "The flu is caused by a virus.",
            "zh": "流感是由病毒引起的。"
          },
          {
            "word": "whirlwind",
            "pos": "n.",
            "meaning": "旋風；疾風",
            "en": "Their romance was a whirlwind of emotions.",
            "zh": "他們的戀情是一場情感的旋風。"
          },
          {
            "word": "rear",
            "pos": "n./v./adj.",
            "meaning": "後部；撫養；後方的",
            "en": "The car's rear window was broken.",
            "zh": "汽車的後窗被打破了。"
          },
          {
            "word": "rapid",
            "pos": "adj.",
            "meaning": "快速的",
            "en": "The patient showed rapid improvement.",
            "zh": "病人病情迅速好轉。"
          },
          {
            "word": "virologist",
            "pos": "n.",
            "meaning": "病毒學家",
            "en": "The virologist studied the new strain of influenza.",
            "zh": "病毒學家研究了新的流感病毒株。"
          },
          {
            "word": "contract",
            "pos": "v./n.",
            "meaning": "感染（疾病）；合約",
            "en": "He contracted the flu after traveling abroad.",
            "zh": "他在國外旅行後感染了流感。"
          },
          {
            "word": "exhaustion",
            "pos": "n.",
            "meaning": "精疲力竭",
            "en": "She collapsed from exhaustion after working all day.",
            "zh": "她因為整天工作而精疲力竭地倒下了。"
          },
          {
            "word": "mutate",
            "pos": "v.",
            "meaning": "突變",
            "en": "The virus mutated into a more dangerous strain.",
            "zh": "這種病毒變異成更危險的毒株。"
          },
          {
            "word": "airborne",
            "pos": "adj.",
            "meaning": "空氣傳播的；空運的",
            "en": "The virus is airborne and spreads quickly.",
            "zh": "這種病毒是透過空氣傳播的，擴散速度很快。"
          },
          {
            "word": "pandemic",
            "pos": "n./adj.",
            "meaning": "大流行；流行性的",
            "en": "The COVID-19 pandemic affected the entire world.",
            "zh": "新冠疫情影響了全世界。"
          },
          {
            "word": "discoloration",
            "pos": "n.",
            "meaning": "變色",
            "en": "The fruit showed signs of discoloration.",
            "zh": "這個水果出現了變色情況。"
          }
        ]
      },
      {
        "id": 17,
        "name": "RC to Exceed 3 & 4",
        "words": [
          {
            "word": "accelerate",
            "pos": "v.",
            "meaning": "加速",
            "en": "The car accelerated quickly on the highway.",
            "zh": "汽車在高速公路上迅速加速。"
          },
          {
            "word": "ache",
            "pos": "n./v.",
            "meaning": "疼痛",
            "en": "His back aches after a long day of work.",
            "zh": "經過一天的工作後，他的背痛了。"
          },
          {
            "word": "alert",
            "pos": "n./adj./v.",
            "meaning": "警報；警覺的；提醒",
            "en": "The doctor alerted the patient to the risks.",
            "zh": "醫生提醒病人注意風險。"
          },
          {
            "word": "attraction",
            "pos": "n.",
            "meaning": "吸引力；景點",
            "en": "The Eiffel Tower is a famous tourist attraction.",
            "zh": "艾菲爾鐵塔是著名的旅遊景點。"
          },
          {
            "word": "chill",
            "pos": "n./v.",
            "meaning": "寒冷；放鬆",
            "en": "He felt a chill when he stepped outside.",
            "zh": "他走到外面時感到一陣寒意。"
          },
          {
            "word": "correspondence",
            "pos": "n.",
            "meaning": "通信；一致",
            "en": "He maintains regular correspondence with his old friends.",
            "zh": "他與老朋友保持定期通信。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new policy.",
            "zh": "市議會批准了新政策。"
          },
          {
            "word": "decade",
            "pos": "n.",
            "meaning": "十年",
            "en": "He worked in the company for over a decade.",
            "zh": "他在這家公司工作了十多年。"
          },
          {
            "word": "definitely",
            "pos": "adv.",
            "meaning": "明確地；肯定地",
            "en": "She is definitely coming to the party.",
            "zh": "她肯定會來參加派對。"
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "儘管",
            "en": "Despite the rain, we went for a walk.",
            "zh": "儘管下雨，我們還是去散步了。"
          },
          {
            "word": "detect",
            "pos": "v.",
            "meaning": "偵測；發現",
            "en": "The alarm system detects smoke.",
            "zh": "警報系統能夠偵測煙霧。"
          },
          {
            "word": "engage",
            "pos": "v.",
            "meaning": "參與；吸引",
            "en": "He was engaged in an interesting discussion.",
            "zh": "他參與了一場有趣的討論。"
          },
          {
            "word": "fairly",
            "pos": "adv.",
            "meaning": "相當；公平地",
            "en": "The task was fairly easy.",
            "zh": "這個任務相當容易。"
          },
          {
            "word": "familiar",
            "pos": "adj.",
            "meaning": "熟悉的",
            "en": "She is familiar with the new software.",
            "zh": "她對新軟體很熟悉。"
          },
          {
            "word": "fatal",
            "pos": "adj.",
            "meaning": "致命的",
            "en": "The accident was fatal.",
            "zh": "這場事故是致命的。"
          },
          {
            "word": "gathering",
            "pos": "n.",
            "meaning": "聚會",
            "en": "They had a family gathering last weekend.",
            "zh": "他們上週末舉行了家庭聚會。"
          },
          {
            "word": "globe",
            "pos": "n.",
            "meaning": "地球；球體",
            "en": "She wants to travel around the globe.",
            "zh": "她想環遊世界。"
          },
          {
            "word": "idiom",
            "pos": "n.",
            "meaning": "慣用語；成語",
            "en": "“Break a leg” is a common English idiom.",
            "zh": "「祝你好運」是英語中常見的成語。"
          },
          {
            "word": "imply",
            "pos": "v.",
            "meaning": "暗示",
            "en": "His words implied that he was unhappy.",
            "zh": "他的話暗示他不開心。"
          },
          {
            "word": "invitation",
            "pos": "n.",
            "meaning": "邀請",
            "en": "I received an invitation to the wedding.",
            "zh": "我收到了一份婚禮邀請。"
          },
          {
            "word": "journalism",
            "pos": "n.",
            "meaning": "新聞業",
            "en": "She is studying journalism at university.",
            "zh": "她在大學學習新聞學。"
          },
          {
            "word": "laboratory",
            "pos": "n.",
            "meaning": "實驗室",
            "en": "The scientist works in a laboratory.",
            "zh": "這位科學家在實驗室工作。"
          },
          {
            "word": "mild",
            "pos": "adj.",
            "meaning": "溫和的",
            "en": "The winter was mild this year.",
            "zh": "今年的冬天很溫和。"
          },
          {
            "word": "mission",
            "pos": "n.",
            "meaning": "任務",
            "en": "The astronauts completed their mission successfully.",
            "zh": "太空人成功完成了他們的任務。"
          },
          {
            "word": "muscle",
            "pos": "n.",
            "meaning": "肌肉",
            "en": "Regular exercise strengthens muscles.",
            "zh": "規律運動可以增強肌肉。"
          },
          {
            "word": "nasty",
            "pos": "adj.",
            "meaning": "惡劣的；令人不快的",
            "en": "He made a nasty remark about his colleague.",
            "zh": "他對同事說了句難聽的話。"
          },
          {
            "word": "outdoor",
            "pos": "adj.",
            "meaning": "戶外的",
            "en": "They enjoy outdoor activities like hiking.",
            "zh": "他們喜歡遠足等戶外活動。"
          },
          {
            "word": "outdoors",
            "pos": "adv.",
            "meaning": "在戶外",
            "en": "We had lunch outdoors.",
            "zh": "我們在戶外吃午餐。"
          },
          {
            "word": "oversee",
            "pos": "v.",
            "meaning": "監督",
            "en": "She oversees the project development.",
            "zh": "她監督專案開發。"
          },
          {
            "word": "percent",
            "pos": "n.",
            "meaning": "百分比",
            "en": "About 50 percent of the students passed the test.",
            "zh": "約 50% 的學生通過了考試。"
          },
          {
            "word": "potential",
            "pos": "n./adj.",
            "meaning": "潛力；潛在的",
            "en": "She has the potential to be a great leader.",
            "zh": "她有成為優秀領導者的潛力。"
          },
          {
            "word": "pour",
            "pos": "v.",
            "meaning": "倒；傾瀉",
            "en": "It started to pour heavily in the afternoon.",
            "zh": "下午開始下起大雨。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "rash",
            "pos": "n.",
            "meaning": "皮疹",
            "en": "He developed a rash after eating seafood.",
            "zh": "他吃了海鮮後起了皮疹。"
          },
          {
            "word": "reassure",
            "pos": "v.",
            "meaning": "使安心",
            "en": "The doctor reassured the patient about the treatment.",
            "zh": "醫生讓病人對治療放心。"
          },
          {
            "word": "regional",
            "pos": "adj.",
            "meaning": "地區的",
            "en": "This policy applies to regional governments.",
            "zh": "這項政策適用於地方政府。"
          },
          {
            "word": "salary",
            "pos": "n.",
            "meaning": "薪水",
            "en": "She receives a monthly salary of $5,000.",
            "zh": "她的月薪是 5000 美元。"
          },
          {
            "word": "setting",
            "pos": "n.",
            "meaning": "環境；場景",
            "en": "The novel is set in a rural setting.",
            "zh": "這部小說的背景設定在鄉村。"
          },
          {
            "word": "situation",
            "pos": "n.",
            "meaning": "情況",
            "en": "He handled the difficult situation well.",
            "zh": "他很好地處理了這個困難的情況。"
          },
          {
            "word": "ski",
            "pos": "v./n.",
            "meaning": "滑雪",
            "en": "They went skiing in the Alps.",
            "zh": "他們去阿爾卑斯山滑雪。"
          },
          {
            "word": "spokesperson",
            "pos": "n.",
            "meaning": "發言人",
            "en": "The company’s spokesperson made an announcement.",
            "zh": "公司的發言人發表了一項公告。"
          },
          {
            "word": "succession",
            "pos": "n.",
            "meaning": "連續；繼承",
            "en": "He won the competition three times in succession.",
            "zh": "他連續三次贏得比賽。"
          },
          {
            "word": "symptom",
            "pos": "n.",
            "meaning": "症狀",
            "en": "Fever is a common symptom of flu.",
            "zh": "發燒是流感的常見症狀。"
          },
          {
            "word": "tend",
            "pos": "v.",
            "meaning": "傾向於",
            "en": "People tend to eat more in winter.",
            "zh": "人們在冬天往往吃得更多。"
          },
          {
            "word": "threat",
            "pos": "n.",
            "meaning": "威脅",
            "en": "Climate change is a serious threat to our planet.",
            "zh": "氣候變遷是對我們星球的嚴重威脅。"
          },
          {
            "word": "tough",
            "pos": "adj.",
            "meaning": "堅韌的；困難的",
            "en": "The competition was tough.",
            "zh": "比賽非常激烈。"
          },
          {
            "word": "tourist",
            "pos": "n.",
            "meaning": "遊客",
            "en": "The city attracts thousands of tourists every year.",
            "zh": "這座城市每年吸引成千上萬的遊客。"
          },
          {
            "word": "transmission",
            "pos": "n.",
            "meaning": "傳播；傳遞",
            "en": "The transmission of the virus is a major concern.",
            "zh": "病毒的傳播是主要的關注點。"
          },
          {
            "word": "transmit",
            "pos": "v.",
            "meaning": "傳送；傳播",
            "en": "The disease is transmitted through the air.",
            "zh": "這種疾病通過空氣傳播。"
          },
          {
            "word": "underline",
            "pos": "v./n.",
            "meaning": "劃線強調；底線",
            "en": "Please underline the important points in the text.",
            "zh": "請在文本中劃線標記重要點。"
          },
          {
            "word": "update",
            "pos": "v./n.",
            "meaning": "更新；最新消息",
            "en": "The company will update the software next week.",
            "zh": "公司將在下週更新軟體。"
          },
          {
            "word": "vaccine",
            "pos": "n.",
            "meaning": "疫苗",
            "en": "The doctor recommended getting the flu vaccine.",
            "zh": "醫生建議接種流感疫苗。"
          },
          {
            "word": "virus",
            "pos": "n.",
            "meaning": "病毒",
            "en": "The flu is caused by a virus.",
            "zh": "流感是由病毒引起的。"
          },
          {
            "word": "whirlwind",
            "pos": "n.",
            "meaning": "旋風；疾風",
            "en": "Their romance was a whirlwind of emotions.",
            "zh": "他們的戀情是一場情感的旋風。"
          },
          {
            "word": "rear",
            "pos": "n./v./adj.",
            "meaning": "後部；撫養；後方的",
            "en": "The car's rear window was broken.",
            "zh": "汽車的後窗被打破了。"
          },
          {
            "word": "rapid",
            "pos": "adj.",
            "meaning": "快速的",
            "en": "The patient showed rapid improvement.",
            "zh": "病人病情迅速好轉。"
          },
          {
            "word": "virologist",
            "pos": "n.",
            "meaning": "病毒學家",
            "en": "The virologist studied the new strain of influenza.",
            "zh": "病毒學家研究了新的流感病毒株。"
          },
          {
            "word": "contract",
            "pos": "v./n.",
            "meaning": "感染（疾病）；合約",
            "en": "He contracted the flu after traveling abroad.",
            "zh": "他在國外旅行後感染了流感。"
          },
          {
            "word": "exhaustion",
            "pos": "n.",
            "meaning": "精疲力竭",
            "en": "She collapsed from exhaustion after working all day.",
            "zh": "她因為整天工作而精疲力竭地倒下了。"
          },
          {
            "word": "mutate",
            "pos": "v.",
            "meaning": "突變",
            "en": "The virus mutated into a more dangerous strain.",
            "zh": "這種病毒變異成更危險的毒株。"
          },
          {
            "word": "airborne",
            "pos": "adj.",
            "meaning": "空氣傳播的；空運的",
            "en": "The virus is airborne and spreads quickly.",
            "zh": "這種病毒是透過空氣傳播的，擴散速度很快。"
          },
          {
            "word": "pandemic",
            "pos": "n./adj.",
            "meaning": "大流行；流行性的",
            "en": "The COVID-19 pandemic affected the entire world.",
            "zh": "新冠疫情影響了全世界。"
          },
          {
            "word": "discoloration",
            "pos": "n.",
            "meaning": "變色",
            "en": "The fruit showed signs of discoloration.",
            "zh": "這個水果出現了變色情況。"
          }
        ]
      },
      {
        "id": 18,
        "name": "RC to Exceed 5",
        "words": [
          {
            "word": "accelerate",
            "pos": "v.",
            "meaning": "加速",
            "en": "The car accelerated as it entered the highway.",
            "zh": "汽車在進入高速公路時加速。"
          },
          {
            "word": "according",
            "pos": "adv.",
            "meaning": "根據；按照",
            "en": "According to the news, the storm will hit tomorrow.",
            "zh": "根據新聞報導，暴風雨將於明天來襲。"
          },
          {
            "word": "afford",
            "pos": "v.",
            "meaning": "負擔得起",
            "en": "I can't afford to buy a new car.",
            "zh": "我負擔不起買新車。"
          },
          {
            "word": "apart",
            "pos": "adv./adj.",
            "meaning": "分開的；相距的",
            "en": "The two houses are 100 meters apart.",
            "zh": "這兩棟房子相距 100 米。"
          },
          {
            "word": "bloody",
            "pos": "adj./adv.",
            "meaning": "血腥的；該死的（英式俚語）",
            "en": "He got a bloody nose in the fight.",
            "zh": "他在打架中流了鼻血。"
          },
          {
            "word": "context",
            "pos": "n.",
            "meaning": "上下文；背景",
            "en": "You need to understand the context to grasp the meaning.",
            "zh": "你需要理解上下文才能明白意思。"
          },
          {
            "word": "curve",
            "pos": "n./v.",
            "meaning": "曲線；彎曲",
            "en": "The road curves sharply to the right.",
            "zh": "這條路急轉向右。"
          },
          {
            "word": "flash",
            "pos": "n./v.",
            "meaning": "閃光；閃現",
            "en": "The lightning flashed across the sky.",
            "zh": "閃電劃過天空。"
          },
          {
            "word": "foggy",
            "pos": "adj.",
            "meaning": "有霧的",
            "en": "The weather is very foggy today.",
            "zh": "今天天氣霧濛濛的。"
          },
          {
            "word": "goods",
            "pos": "n.",
            "meaning": "商品；貨物",
            "en": "The store sells a variety of goods.",
            "zh": "這家商店銷售各種商品。"
          },
          {
            "word": "harbor",
            "pos": "n./v.",
            "meaning": "港口；庇護",
            "en": "The ship arrived at the harbor safely.",
            "zh": "船隻安全抵達港口。"
          },
          {
            "word": "idiot",
            "pos": "n.",
            "meaning": "傻瓜",
            "en": "Don’t be an idiot—think before you act!",
            "zh": "別當笨蛋——行動前先想清楚！"
          },
          {
            "word": "immediately",
            "pos": "adv.",
            "meaning": "立刻；馬上",
            "en": "Call me immediately if you need help.",
            "zh": "如果需要幫助，立刻打電話給我。"
          },
          {
            "word": "imperial",
            "pos": "adj.",
            "meaning": "帝國的",
            "en": "The palace was built during the imperial era.",
            "zh": "這座宮殿建於帝國時代。"
          },
          {
            "word": "imply",
            "pos": "v.",
            "meaning": "暗示",
            "en": "His tone implied that he was unhappy.",
            "zh": "他的語氣暗示他不開心。"
          },
          {
            "word": "incident",
            "pos": "n.",
            "meaning": "事件；事故",
            "en": "The police are investigating the incident.",
            "zh": "警方正在調查這起事件。"
          },
          {
            "word": "involve",
            "pos": "v.",
            "meaning": "牽涉；涉及",
            "en": "The project involves multiple teams.",
            "zh": "這個專案涉及多個團隊。"
          },
          {
            "word": "lad",
            "pos": "n.",
            "meaning": "小夥子；男孩（英式）",
            "en": "He’s a good lad with a kind heart.",
            "zh": "他是個心地善良的小夥子。"
          },
          {
            "word": "missing",
            "pos": "adj.",
            "meaning": "失蹤的；缺少的",
            "en": "The police are searching for the missing child.",
            "zh": "警方正在尋找失蹤的孩子。"
          },
          {
            "word": "mist",
            "pos": "n.",
            "meaning": "薄霧",
            "en": "A light mist covered the valley in the morning.",
            "zh": "早晨，一層薄霧覆蓋了山谷。"
          },
          {
            "word": "patrol",
            "pos": "n./v.",
            "meaning": "巡邏",
            "en": "The guards patrol the area every night.",
            "zh": "警衛每晚巡邏這個區域。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "registration",
            "pos": "n.",
            "meaning": "註冊；登記",
            "en": "The registration for the event closes tomorrow.",
            "zh": "這次活動的註冊將於明天截止。"
          },
          {
            "word": "sensible",
            "pos": "adj.",
            "meaning": "明智的；合理的",
            "en": "That’s a very sensible decision.",
            "zh": "那是一個非常明智的決定。"
          },
          {
            "word": "sergeant",
            "pos": "n.",
            "meaning": "警官；軍士",
            "en": "The sergeant gave orders to the soldiers.",
            "zh": "中士向士兵下達命令。"
          },
          {
            "word": "stationary",
            "pos": "adj.",
            "meaning": "靜止的",
            "en": "The car remained stationary at the red light.",
            "zh": "汽車在紅燈時靜止不動。"
          },
          {
            "word": "stuff",
            "pos": "n.",
            "meaning": "物品；東西",
            "en": "She packed her stuff and left.",
            "zh": "她收拾好東西離開了。"
          },
          {
            "word": "surged",
            "pos": "v.",
            "meaning": "激增；湧現",
            "en": "Prices surged after the announcement.",
            "zh": "公告發佈後，價格大幅上漲。"
          },
          {
            "word": "suspicious",
            "pos": "adj.",
            "meaning": "可疑的",
            "en": "His behavior seemed suspicious to the police.",
            "zh": "他的行為對警方來說顯得可疑。"
          },
          {
            "word": "vehicle",
            "pos": "n.",
            "meaning": "車輛",
            "en": "The road was blocked by a large vehicle.",
            "zh": "這條道路被一輛大型車輛堵住了。"
          },
          {
            "word": "youngster",
            "pos": "n.",
            "meaning": "年輕人",
            "en": "The youngsters played football in the park.",
            "zh": "年輕人在公園裡踢足球。"
          },
          {
            "word": "lassie",
            "pos": "n.",
            "meaning": "小姑娘（蘇格蘭方言）",
            "en": "She’s a lovely lassie from Scotland.",
            "zh": "她是來自蘇格蘭的可愛女孩。"
          },
          {
            "word": "visibility",
            "pos": "n.",
            "meaning": "能見度",
            "en": "The visibility was poor due to heavy fog.",
            "zh": "由於大霧，能見度很低。"
          },
          {
            "word": "pavilion",
            "pos": "n.",
            "meaning": "涼亭；館",
            "en": "They had tea in the garden pavilion.",
            "zh": "他們在花園的涼亭裡喝茶。"
          },
          {
            "word": "esplanade",
            "pos": "n.",
            "meaning": "濱海大道；步道",
            "en": "People enjoyed walking along the esplanade.",
            "zh": "人們喜歡沿著濱海大道散步。"
          },
          {
            "word": "harbourside",
            "pos": "n.",
            "meaning": "港口區",
            "en": "We had dinner at a harbourside restaurant.",
            "zh": "我們在港口邊的餐廳吃晚餐。"
          },
          {
            "word": "wad",
            "pos": "n.",
            "meaning": "一疊；一團",
            "en": "He pulled out a wad of cash from his pocket.",
            "zh": "他從口袋裡掏出一疊現金。"
          },
          {
            "word": "bunk off",
            "pos": "v. (British slang)",
            "meaning": "翹課；曠工",
            "en": "They decided to bunk off school and go to the beach.",
            "zh": "他們決定翹課去海灘玩。"
          }
        ]
      },
      {
        "id": 19,
        "name": "RC To Exceed 6",
        "words": [
          {
            "word": "abandon",
            "pos": "v.",
            "meaning": "放棄；遺棄",
            "en": "He had to abandon his car in the flood.",
            "zh": "他不得不在洪水中拋棄他的汽車。"
          },
          {
            "word": "apprentice",
            "pos": "n.",
            "meaning": "學徒",
            "en": "The apprentice learned carpentry from his master.",
            "zh": "這名學徒向師傅學習木工技藝。"
          },
          {
            "word": "attach",
            "pos": "v.",
            "meaning": "附上；繫上",
            "en": "Please attach the document to your email.",
            "zh": "請在電子郵件中附上該文件。"
          },
          {
            "word": "attract",
            "pos": "v.",
            "meaning": "吸引",
            "en": "The museum attracts thousands of visitors every year.",
            "zh": "這家博物館每年吸引成千上萬的遊客。"
          },
          {
            "word": "award",
            "pos": "n./v.",
            "meaning": "獎項；授予",
            "en": "She won an award for her outstanding performance.",
            "zh": "她因傑出的表現獲得了獎項。"
          },
          {
            "word": "backbone",
            "pos": "n.",
            "meaning": "脊椎；支柱",
            "en": "A strong education system is the backbone of society.",
            "zh": "強大的教育體系是社會的支柱。"
          },
          {
            "word": "bait",
            "pos": "n./v.",
            "meaning": "誘餌；引誘",
            "en": "The fisherman used worms as bait.",
            "zh": "漁夫用蠕蟲作為魚餌。"
          },
          {
            "word": "bravery",
            "pos": "n.",
            "meaning": "勇敢",
            "en": "The firefighter was awarded for his bravery.",
            "zh": "這位消防員因其英勇行為而獲獎。"
          },
          {
            "word": "carcass",
            "pos": "n.",
            "meaning": "屍體（動物）",
            "en": "Vultures fed on the carcass of a dead buffalo.",
            "zh": "禿鷹啄食一頭死去水牛的屍體。"
          },
          {
            "word": "cite",
            "pos": "v.",
            "meaning": "引用",
            "en": "The professor cited several studies in his research.",
            "zh": "這位教授在研究中引用了幾項研究。"
          },
          {
            "word": "committee",
            "pos": "n.",
            "meaning": "委員會",
            "en": "The committee is responsible for making decisions.",
            "zh": "委員會負責做出決策。"
          },
          {
            "word": "consist",
            "pos": "v.",
            "meaning": "由…組成",
            "en": "The team consists of five members.",
            "zh": "這支隊伍由五名成員組成。"
          },
          {
            "word": "contribute",
            "pos": "v.",
            "meaning": "貢獻；捐贈",
            "en": "He contributed money to the charity.",
            "zh": "他向慈善機構捐款。"
          },
          {
            "word": "cough",
            "pos": "n./v.",
            "meaning": "咳嗽",
            "en": "He has been coughing all day.",
            "zh": "他咳嗽了一整天。"
          },
          {
            "word": "creature",
            "pos": "n.",
            "meaning": "生物",
            "en": "The deep sea is home to many mysterious creatures.",
            "zh": "深海棲息著許多神秘生物。"
          },
          {
            "word": "dedicate",
            "pos": "v.",
            "meaning": "奉獻",
            "en": "He dedicated his life to science.",
            "zh": "他一生致力於科學研究。"
          },
          {
            "word": "defeat",
            "pos": "v./n.",
            "meaning": "擊敗；失敗",
            "en": "The team suffered a crushing defeat.",
            "zh": "這支隊伍遭受了慘敗。"
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "儘管",
            "en": "Despite the rain, we continued our journey.",
            "zh": "儘管下雨，我們仍然繼續旅行。"
          },
          {
            "word": "destroy",
            "pos": "v.",
            "meaning": "破壞；摧毀",
            "en": "The fire destroyed the entire building.",
            "zh": "火災摧毀了整棟建築。"
          },
          {
            "word": "devour",
            "pos": "v.",
            "meaning": "狼吞虎嚥；吞噬",
            "en": "The lion devoured its prey.",
            "zh": "獅子吞噬了它的獵物。"
          },
          {
            "word": "endeavor",
            "pos": "n./v.",
            "meaning": "努力；嘗試",
            "en": "She endeavored to complete the task on time.",
            "zh": "她努力按時完成這項任務。"
          },
          {
            "word": "eternal",
            "pos": "adj.",
            "meaning": "永恆的",
            "en": "Their love is eternal.",
            "zh": "他們的愛是永恆的。"
          },
          {
            "word": "experienced",
            "pos": "adj.",
            "meaning": "有經驗的",
            "en": "He is an experienced teacher.",
            "zh": "他是一位有經驗的老師。"
          },
          {
            "word": "explanation",
            "pos": "n.",
            "meaning": "解釋",
            "en": "The teacher gave a clear explanation of the topic.",
            "zh": "老師對這個主題做了清楚的解釋。"
          },
          {
            "word": "fiction",
            "pos": "n.",
            "meaning": "小說；虛構",
            "en": "He enjoys reading science fiction.",
            "zh": "他喜歡閱讀科幻小說。"
          },
          {
            "word": "forbidden",
            "pos": "adj.",
            "meaning": "被禁止的",
            "en": "Smoking is forbidden in this building.",
            "zh": "這棟建築內禁止吸菸。"
          },
          {
            "word": "gulf",
            "pos": "n.",
            "meaning": "海灣；鴻溝",
            "en": "There is a huge gulf between the rich and the poor.",
            "zh": "貧富之間存在巨大的差距。"
          },
          {
            "word": "honor",
            "pos": "n./v.",
            "meaning": "榮譽；尊敬",
            "en": "He was honored for his contributions to science.",
            "zh": "他因對科學的貢獻而獲得表彰。"
          },
          {
            "word": "lifetime",
            "pos": "n.",
            "meaning": "一生",
            "en": "This opportunity comes once in a lifetime.",
            "zh": "這個機會一生只有一次。"
          },
          {
            "word": "literature",
            "pos": "n.",
            "meaning": "文學",
            "en": "He is studying English literature.",
            "zh": "他正在學習英國文學。"
          },
          {
            "word": "manage",
            "pos": "v.",
            "meaning": "管理；設法做到",
            "en": "She managed to finish the project on time.",
            "zh": "她設法按時完成了這個專案。"
          },
          {
            "word": "publish",
            "pos": "v.",
            "meaning": "出版；發表",
            "en": "The author published a new book last month.",
            "zh": "這位作家上個月出版了一本新書。"
          },
          {
            "word": "sank",
            "pos": "v. (past of sink)",
            "meaning": "沉沒",
            "en": "The ship sank after hitting an iceberg.",
            "zh": "這艘船撞上冰山後沉沒了。"
          },
          {
            "word": "skeleton",
            "pos": "n.",
            "meaning": "骨架；骨骼",
            "en": "The archaeologists found a human skeleton.",
            "zh": "考古學家發現了一具人類骨骼。"
          },
          {
            "word": "skiff",
            "pos": "n.",
            "meaning": "小船",
            "en": "The fisherman rowed his skiff out to sea.",
            "zh": "漁夫划著他的小船出海。"
          },
          {
            "word": "slump",
            "pos": "v./n.",
            "meaning": "暴跌；衰退",
            "en": "The economy slumped after the crisis.",
            "zh": "危機後經濟迅速下滑。"
          },
          {
            "word": "strap",
            "pos": "n./v.",
            "meaning": "帶子；綁住",
            "en": "He strapped the luggage to the roof of the car.",
            "zh": "他把行李綁在車頂上。"
          },
          {
            "word": "struggle",
            "pos": "v./n.",
            "meaning": "奮鬥；掙扎",
            "en": "She struggled to lift the heavy box.",
            "zh": "她努力抬起沉重的箱子。"
          },
          {
            "word": "subject to",
            "pos": "adj.",
            "meaning": "易受影響的；受…約束的",
            "en": "Prices are subject to change without notice.",
            "zh": "價格可能會變動，恕不另行通知。"
          },
          {
            "word": "theme",
            "pos": "n.",
            "meaning": "主題",
            "en": "The theme of the movie is friendship.",
            "zh": "這部電影的主題是友誼。"
          },
          {
            "word": "trail",
            "pos": "n./v.",
            "meaning": "小徑；追蹤",
            "en": "The hikers followed the mountain trail.",
            "zh": "登山者沿著山路前行。"
          },
          {
            "word": "ward",
            "pos": "n.",
            "meaning": "病房；區域",
            "en": "She was admitted to the hospital’s emergency ward.",
            "zh": "她被送進醫院的急診病房。"
          },
          {
            "word": "ward off",
            "pos": "v.",
            "meaning": "避開；抵擋",
            "en": "Garlic is believed to ward off vampires.",
            "zh": "大蒜被認為可以驅趕吸血鬼。"
          }
        ]
      },
      {
        "id": 20,
        "name": "RC To Exceed 7",
        "words": [
          {
            "word": "achieve",
            "pos": "v.",
            "meaning": "達成；實現",
            "en": "He worked hard to achieve his goals.",
            "zh": "他努力工作以實現目標。"
          },
          {
            "word": "attractive",
            "pos": "adj.",
            "meaning": "有吸引力的",
            "en": "The city is an attractive destination for tourists.",
            "zh": "這座城市對遊客來說很有吸引力。"
          },
          {
            "word": "canvas",
            "pos": "n.",
            "meaning": "畫布；帆布",
            "en": "The artist painted a beautiful scene on the canvas.",
            "zh": "這位藝術家在畫布上畫了一幅美麗的風景。"
          },
          {
            "word": "cave",
            "pos": "n.",
            "meaning": "洞穴",
            "en": "They explored a dark cave in the mountains.",
            "zh": "他們探險了一個山中的黑暗洞穴。"
          },
          {
            "word": "code",
            "pos": "n./v.",
            "meaning": "代碼；法規；編碼",
            "en": "Programmers write code to create software.",
            "zh": "程式設計師撰寫程式碼來開發軟體。"
          },
          {
            "word": "convey",
            "pos": "v.",
            "meaning": "傳達；表達",
            "en": "Art is a way to convey emotions.",
            "zh": "藝術是一種傳達情感的方式。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new law.",
            "zh": "市議會批准了新法案。"
          },
          {
            "word": "crew",
            "pos": "n.",
            "meaning": "全體船員；團隊",
            "en": "The film crew worked all day on the set.",
            "zh": "電影劇組整天在片場工作。"
          },
          {
            "word": "decade",
            "pos": "n.",
            "meaning": "十年",
            "en": "She has worked as a teacher for over a decade.",
            "zh": "她從事教職已超過十年。"
          },
          {
            "word": "declare",
            "pos": "v.",
            "meaning": "宣布；聲明",
            "en": "The government declared a state of emergency.",
            "zh": "政府宣布進入緊急狀態。"
          },
          {
            "word": "definitely",
            "pos": "adv.",
            "meaning": "絕對地；明確地",
            "en": "This is definitely the best choice.",
            "zh": "這絕對是最好的選擇。"
          },
          {
            "word": "establish",
            "pos": "v.",
            "meaning": "建立；確立",
            "en": "The company was established in 1990.",
            "zh": "這家公司成立於 1990 年。"
          },
          {
            "word": "fame",
            "pos": "n.",
            "meaning": "名聲；聲望",
            "en": "He rose to fame after his first novel was published.",
            "zh": "他在出版第一本小說後成名。"
          },
          {
            "word": "gallery",
            "pos": "n.",
            "meaning": "畫廊；展覽館",
            "en": "The art gallery displays works from famous painters.",
            "zh": "這家畫廊展出了著名畫家的作品。"
          },
          {
            "word": "gang",
            "pos": "n.",
            "meaning": "幫派；一群",
            "en": "The police arrested members of a criminal gang.",
            "zh": "警方逮捕了一個犯罪幫派的成員。"
          },
          {
            "word": "humorous",
            "pos": "adj.",
            "meaning": "幽默的",
            "en": "He told a humorous story that made everyone laugh.",
            "zh": "他講了一個幽默的故事，讓大家笑了起來。"
          },
          {
            "word": "involved",
            "pos": "adj.",
            "meaning": "參與的；涉及的",
            "en": "She was deeply involved in the project.",
            "zh": "她深度參與了這個專案。"
          },
          {
            "word": "involving",
            "pos": "v. (present participle)",
            "meaning": "涉及；包含",
            "en": "The new law is involving many political changes.",
            "zh": "新法案涉及許多政治變革。"
          },
          {
            "word": "mayor",
            "pos": "n.",
            "meaning": "市長",
            "en": "The mayor gave a speech at the event.",
            "zh": "市長在活動中發表了演講。"
          },
          {
            "word": "motivation",
            "pos": "n.",
            "meaning": "動機；激勵",
            "en": "His motivation for studying is to improve his future.",
            "zh": "他學習的動機是改善自己的未來。"
          },
          {
            "word": "novelist",
            "pos": "n.",
            "meaning": "小說家",
            "en": "She is a famous novelist who writes historical fiction.",
            "zh": "她是一位著名的歷史小說作家。"
          },
          {
            "word": "permission",
            "pos": "n.",
            "meaning": "許可；准許",
            "en": "You need permission to enter the restricted area.",
            "zh": "進入限制區域需要許可。"
          },
          {
            "word": "political",
            "pos": "adj.",
            "meaning": "政治的",
            "en": "The country is facing political instability.",
            "zh": "這個國家正面臨政治不穩定。"
          },
          {
            "word": "property",
            "pos": "n.",
            "meaning": "財產；不動產",
            "en": "The house is private property.",
            "zh": "這棟房子是私人財產。"
          },
          {
            "word": "protest",
            "pos": "n./v.",
            "meaning": "抗議；反對",
            "en": "People protested against the new tax policy.",
            "zh": "人們抗議新的稅收政策。"
          },
          {
            "word": "recognition",
            "pos": "n.",
            "meaning": "認可；承認",
            "en": "She received recognition for her hard work.",
            "zh": "她因辛勤工作而獲得認可。"
          },
          {
            "word": "represent",
            "pos": "v.",
            "meaning": "代表；象徵",
            "en": "The flag represents freedom.",
            "zh": "這面旗幟代表自由。"
          },
          {
            "word": "spray",
            "pos": "v./n.",
            "meaning": "噴灑；噴霧",
            "en": "He sprayed paint on the wall.",
            "zh": "他在牆上噴了油漆。"
          },
          {
            "word": "tag",
            "pos": "n./v.",
            "meaning": "標籤；貼標籤",
            "en": "The price tag is missing.",
            "zh": "價格標籤不見了。"
          },
          {
            "word": "talent",
            "pos": "n.",
            "meaning": "天賦；才能",
            "en": "She has a great talent for painting.",
            "zh": "她有很棒的繪畫天賦。"
          },
          {
            "word": "territory",
            "pos": "n.",
            "meaning": "領土；區域",
            "en": "The country expanded its territory.",
            "zh": "這個國家擴展了其領土。"
          },
          {
            "word": "trace",
            "pos": "v./n.",
            "meaning": "追蹤；痕跡",
            "en": "The police traced the suspect’s location.",
            "zh": "警方追蹤到了嫌疑人的位置。"
          },
          {
            "word": "visual",
            "pos": "adj.",
            "meaning": "視覺的",
            "en": "The movie has stunning visual effects.",
            "zh": "這部電影的視覺效果令人驚嘆。"
          },
          {
            "word": "illicitly",
            "pos": "adv.",
            "meaning": "非法地",
            "en": "The goods were illicitly smuggled across the border.",
            "zh": "這些貨物被非法走私過境。"
          },
          {
            "word": "masterpiece",
            "pos": "n.",
            "meaning": "傑作",
            "en": "This painting is a masterpiece of the Renaissance.",
            "zh": "這幅畫是文藝復興時期的傑作。"
          },
          {
            "word": "vandalism",
            "pos": "n.",
            "meaning": "破壞公物",
            "en": "Vandalism is a serious crime in many cities.",
            "zh": "破壞公物在許多城市都是嚴重犯罪行為。"
          },
          {
            "word": "canvas",
            "pos": "n.",
            "meaning": "畫布；帆布",
            "en": "The artist used a large canvas for his painting.",
            "zh": "這位藝術家使用了大畫布來作畫。"
          },
          {
            "word": "debate",
            "pos": "n./v.",
            "meaning": "辯論；討論",
            "en": "The two candidates had a heated debate.",
            "zh": "兩位候選人進行了一場激烈的辯論。"
          },
          {
            "word": "reclaim",
            "pos": "v.",
            "meaning": "取回；恢復",
            "en": "The city reclaimed the land for public use.",
            "zh": "這座城市收回了土地供公眾使用。"
          },
          {
            "word": "vibrant",
            "pos": "adj.",
            "meaning": "充滿活力的",
            "en": "The city has a vibrant nightlife.",
            "zh": "這座城市的夜生活非常活躍。"
          },
          {
            "word": "springboard",
            "pos": "n.",
            "meaning": "跳板；起點",
            "en": "The job served as a springboard for his career.",
            "zh": "這份工作成為他職業生涯的跳板。"
          },
          {
            "word": "stencil",
            "pos": "n./v.",
            "meaning": "模板；用模板印刷",
            "en": "He used a stencil to paint the design.",
            "zh": "他使用模板來繪製設計。"
          }
        ]
      },
      {
        "id": 21,
        "name": "RC To Exceed 8 & 9",
        "words": [
          {
            "word": "bacteria",
            "pos": "n.",
            "meaning": "細菌",
            "en": "Some bacteria are beneficial to human health.",
            "zh": "有些細菌對人體健康有益。"
          },
          {
            "word": "carrier",
            "pos": "n.",
            "meaning": "搬運者；帶原者",
            "en": "Mosquitoes are carriers of malaria.",
            "zh": "蚊子是瘧疾的攜帶者。"
          },
          {
            "word": "clone",
            "pos": "n./v.",
            "meaning": "複製；克隆",
            "en": "Scientists successfully cloned a sheep.",
            "zh": "科學家成功克隆了一隻羊。"
          },
          {
            "word": "code",
            "pos": "n./v.",
            "meaning": "代碼；法規；編碼",
            "en": "He writes code for a living.",
            "zh": "他以撰寫程式碼為生。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council passed a new law.",
            "zh": "市議會通過了一項新法案。"
          },
          {
            "word": "educate",
            "pos": "v.",
            "meaning": "教育",
            "en": "Schools should educate students about the environment.",
            "zh": "學校應該教育學生關於環境的知識。"
          },
          {
            "word": "flush",
            "pos": "v./n.",
            "meaning": "沖洗；臉紅",
            "en": "She flushed the toilet after use.",
            "zh": "她使用後沖洗了馬桶。"
          },
          {
            "word": "genetic",
            "pos": "adj.",
            "meaning": "遺傳的",
            "en": "Genetic disorders can be inherited from parents.",
            "zh": "遺傳疾病可以從父母遺傳。"
          },
          {
            "word": "geography",
            "pos": "n.",
            "meaning": "地理",
            "en": "He is studying world geography.",
            "zh": "他正在學習世界地理。"
          },
          {
            "word": "ground",
            "pos": "n.",
            "meaning": "地面；理由",
            "en": "The ground was covered with snow.",
            "zh": "地面被雪覆蓋。"
          },
          {
            "word": "hatch",
            "pos": "v./n.",
            "meaning": "孵化；艙口",
            "en": "The chicks hatched from their eggs.",
            "zh": "小雞從蛋裡孵化出來。"
          },
          {
            "word": "identical",
            "pos": "adj.",
            "meaning": "完全相同的",
            "en": "The twin brothers look identical.",
            "zh": "這對雙胞胎兄弟長得一模一樣。"
          },
          {
            "word": "information",
            "pos": "n.",
            "meaning": "資訊",
            "en": "I found useful information online.",
            "zh": "我在網路上找到有用的資訊。"
          },
          {
            "word": "kilometer",
            "pos": "n.",
            "meaning": "公里",
            "en": "The town is 10 kilometers away from here.",
            "zh": "這個城鎮距離這裡 10 公里。"
          },
          {
            "word": "liter",
            "pos": "n.",
            "meaning": "公升",
            "en": "She drinks two liters of water daily.",
            "zh": "她每天喝兩公升的水。"
          },
          {
            "word": "march",
            "pos": "n./v.",
            "meaning": "遊行；行進",
            "en": "The soldiers marched in perfect formation.",
            "zh": "士兵們整齊地行進。"
          },
          {
            "word": "molecule",
            "pos": "n.",
            "meaning": "分子",
            "en": "Water consists of two hydrogen molecules and one oxygen molecule.",
            "zh": "水由兩個氫分子和一個氧分子組成。"
          },
          {
            "word": "normally",
            "pos": "adv.",
            "meaning": "通常",
            "en": "He normally wakes up at 7 AM.",
            "zh": "他通常早上七點起床。"
          },
          {
            "word": "offspring",
            "pos": "n.",
            "meaning": "子孫；後代",
            "en": "The bird was feeding its offspring.",
            "zh": "這隻鳥正在餵養它的後代。"
          },
          {
            "word": "organism",
            "pos": "n.",
            "meaning": "有機體；生物",
            "en": "The ocean is full of tiny organisms.",
            "zh": "海洋中充滿了微小生物。"
          },
          {
            "word": "organize",
            "pos": "v.",
            "meaning": "組織；安排",
            "en": "She organized a charity event.",
            "zh": "她組織了一場慈善活動。"
          },
          {
            "word": "passage",
            "pos": "n.",
            "meaning": "文章段落；通道",
            "en": "He read a passage from the novel.",
            "zh": "他朗讀了一段小說內容。"
          },
          {
            "word": "pasta",
            "pos": "n.",
            "meaning": "義大利麵",
            "en": "I love eating pasta with tomato sauce.",
            "zh": "我喜歡吃番茄醬義大利麵。"
          },
          {
            "word": "process",
            "pos": "n./v.",
            "meaning": "過程；處理",
            "en": "The brain processes information quickly.",
            "zh": "大腦能快速處理資訊。"
          },
          {
            "word": "refer",
            "pos": "v.",
            "meaning": "提及；參考",
            "en": "He referred to the manual for instructions.",
            "zh": "他參考了手冊上的指示。"
          },
          {
            "word": "reproduce",
            "pos": "v.",
            "meaning": "繁殖；複製",
            "en": "Some animals reproduce by laying eggs.",
            "zh": "一些動物通過產卵來繁殖。"
          },
          {
            "word": "split",
            "pos": "v./n.",
            "meaning": "分裂；分開",
            "en": "They split the bill evenly.",
            "zh": "他們平均分攤帳單。"
          },
          {
            "word": "suitcase",
            "pos": "n.",
            "meaning": "行李箱",
            "en": "He packed his suitcase for the trip.",
            "zh": "他為旅行打包了行李箱。"
          },
          {
            "word": "transfer",
            "pos": "v./n.",
            "meaning": "轉移；轉乘",
            "en": "She transferred to another school.",
            "zh": "她轉學到另一所學校。"
          },
          {
            "word": "twin",
            "pos": "n.",
            "meaning": "雙胞胎",
            "en": "She has a twin sister.",
            "zh": "她有一個雙胞胎姐妹。"
          },
          {
            "word": "united",
            "pos": "adj.",
            "meaning": "團結的；聯合的",
            "en": "They worked as a united team.",
            "zh": "他們作為一個團結的團隊工作。"
          },
          {
            "word": "various",
            "pos": "adj.",
            "meaning": "各種各樣的",
            "en": "He has worked in various countries.",
            "zh": "他曾在不同的國家工作。"
          },
          {
            "word": "consequently",
            "pos": "adv.",
            "meaning": "因此；結果",
            "en": "He didn't study, consequently he failed the exam.",
            "zh": "他沒有學習，因此考試不及格。"
          },
          {
            "word": "accordingly",
            "pos": "adv.",
            "meaning": "相應地；因此",
            "en": "Follow the instructions accordingly.",
            "zh": "請根據指示來執行。"
          },
          {
            "word": "reiterate",
            "pos": "v.",
            "meaning": "重申；反覆說明",
            "en": "He reiterated the importance of teamwork.",
            "zh": "他重申了團隊合作的重要性。"
          },
          {
            "word": "subsequently",
            "pos": "adv.",
            "meaning": "隨後；接著",
            "en": "He graduated and subsequently found a job.",
            "zh": "他畢業後隨即找到了一份工作。"
          },
          {
            "word": "primarily",
            "pos": "adv.",
            "meaning": "主要地",
            "en": "This program is designed primarily for beginners.",
            "zh": "這個課程主要針對初學者設計。"
          },
          {
            "word": "secondarily",
            "pos": "adv.",
            "meaning": "次要地",
            "en": "The research focuses on health and secondarily on diet.",
            "zh": "這項研究主要關注健康，次要關注飲食。"
          },
          {
            "word": "nevertheless",
            "pos": "adv.",
            "meaning": "然而；儘管如此",
            "en": "It was raining; nevertheless, they went out.",
            "zh": "雖然在下雨，但他們還是出門了。"
          },
          {
            "word": "contrary",
            "pos": "adj.",
            "meaning": "相反的",
            "en": "His opinion is contrary to mine.",
            "zh": "他的意見與我的相反。"
          },
          {
            "word": "despite",
            "pos": "prep.",
            "meaning": "儘管",
            "en": "Despite his injury, he played in the game.",
            "zh": "儘管受傷，他仍然參加比賽。"
          },
          {
            "word": "moreover",
            "pos": "adv.",
            "meaning": "而且；此外",
            "en": "The hotel is affordable; moreover, it has great service.",
            "zh": "這家酒店價格實惠，而且服務很棒。"
          },
          {
            "word": "furthermore",
            "pos": "adv.",
            "meaning": "此外；而且",
            "en": "The plan is good; furthermore, it is cost-effective.",
            "zh": "這個計畫很好，而且具成本效益。"
          },
          {
            "word": "ultimately",
            "pos": "adv.",
            "meaning": "最終",
            "en": "He ultimately decided to move abroad.",
            "zh": "他最終決定搬到國外。"
          },
          {
            "word": "notwithstanding",
            "pos": "adv./prep.",
            "meaning": "儘管；雖然",
            "en": "Notwithstanding the bad weather, they continued hiking.",
            "zh": "儘管天氣不好，他們還是繼續遠足。"
          },
          {
            "word": "illustrate",
            "pos": "v.",
            "meaning": "說明；舉例",
            "en": "The teacher illustrated the concept with a diagram.",
            "zh": "老師用圖表來說明這個概念。"
          },
          {
            "word": "provide",
            "pos": "v.",
            "meaning": "提供",
            "en": "The school provides free meals for students.",
            "zh": "學校為學生提供免費餐點。"
          }
        ]
      }
    ]
  },
  {
    "title": "Listening Comprehension",
    "units": [
      {
        "id": 1,
        "name": "LC To meet",
        "words": [
          {
            "word": "accent",
            "pos": "口音",
            "meaning": "n.",
            "en": "She speaks English with a British accent.",
            "zh": "她說英語帶有英國口音。"
          },
          {
            "word": "achieve",
            "pos": "達成；實現",
            "meaning": "v.",
            "en": "He worked hard to achieve his goals.",
            "zh": "他努力工作以實現目標。"
          },
          {
            "word": "apart",
            "pos": "分開的；相距的",
            "meaning": "adv./adj.",
            "en": "The two buildings are 100 meters apart.",
            "zh": "這兩棟建築物相距 100 米。"
          },
          {
            "word": "appointment",
            "pos": "約會；預約",
            "meaning": "n.",
            "en": "I have a doctor's appointment tomorrow.",
            "zh": "我明天有一個醫生預約。"
          },
          {
            "word": "asparagus",
            "pos": "蘆筍",
            "meaning": "n.",
            "en": "She made a salad with asparagus and tomatoes.",
            "zh": "她用蘆筍和番茄做了一道沙拉。"
          },
          {
            "word": "basic",
            "pos": "基本的",
            "meaning": "adj.",
            "en": "Learning basic math is important.",
            "zh": "學習基本的數學很重要。"
          },
          {
            "word": "blade",
            "pos": "刀片；葉片",
            "meaning": "n.",
            "en": "The knife’s blade is very sharp.",
            "zh": "這把刀的刀片非常鋒利。"
          },
          {
            "word": "brilliant",
            "pos": "燦爛的；傑出的",
            "meaning": "adj.",
            "en": "She came up with a brilliant idea.",
            "zh": "她想出了一個絕妙的主意。"
          },
          {
            "word": "broccoli",
            "pos": "花椰菜",
            "meaning": "n.",
            "en": "Broccoli is rich in vitamins.",
            "zh": "花椰菜富含維生素。"
          },
          {
            "word": "bump",
            "pos": "撞擊；腫塊",
            "meaning": "v./n.",
            "en": "He bumped his head on the door.",
            "zh": "他撞到了門，頭上起了一個包。"
          },
          {
            "word": "certificate",
            "pos": "證書；證明",
            "meaning": "n.",
            "en": "She received a certificate for completing the course.",
            "zh": "她獲得了結業證書。"
          },
          {
            "word": "chew",
            "pos": "咀嚼",
            "meaning": "v.",
            "en": "Please chew your food properly.",
            "zh": "請好好咀嚼你的食物。"
          },
          {
            "word": "chunky",
            "pos": "厚重的；含有大塊的",
            "meaning": "adj.",
            "en": "He wore a chunky sweater.",
            "zh": "他穿著一件厚重的毛衣。"
          },
          {
            "word": "compact",
            "pos": "小巧的；緊湊的",
            "meaning": "adj.",
            "en": "This camera is small and compact.",
            "zh": "這台相機體積小巧且設計緊湊。"
          },
          {
            "word": "comprehension",
            "pos": "理解力",
            "meaning": "n.",
            "en": "Reading comprehension is important for learning.",
            "zh": "閱讀理解能力對學習很重要。"
          },
          {
            "word": "confidence",
            "pos": "自信",
            "meaning": "n.",
            "en": "She spoke with confidence.",
            "zh": "她充滿自信地說話。"
          },
          {
            "word": "coral reef",
            "pos": "珊瑚礁",
            "meaning": "n.",
            "en": "Coral reefs are home to many marine animals.",
            "zh": "珊瑚礁是許多海洋生物的家園。"
          },
          {
            "word": "council",
            "pos": "委員會；理事會",
            "meaning": "n.",
            "en": "The city council approved the new policy.",
            "zh": "市議會批准了新政策。"
          },
          {
            "word": "crown",
            "pos": "皇冠；王冠",
            "meaning": "n.",
            "en": "The king wore a golden crown.",
            "zh": "國王戴著金色的皇冠。"
          },
          {
            "word": "crunchy",
            "pos": "酥脆的",
            "meaning": "adj.",
            "en": "This apple is fresh and crunchy.",
            "zh": "這顆蘋果又新鮮又脆。"
          },
          {
            "word": "cucumber",
            "pos": "小黃瓜",
            "meaning": "n.",
            "en": "She added sliced cucumbers to her salad.",
            "zh": "她在沙拉裡加了黃瓜片。"
          },
          {
            "word": "deadline",
            "pos": "截止日期",
            "meaning": "n.",
            "en": "The deadline for the project is next Monday.",
            "zh": "這個專案的截止日期是下週一。"
          },
          {
            "word": "describe",
            "pos": "描述",
            "meaning": "v.",
            "en": "Can you describe what happened?",
            "zh": "你能描述一下發生了什麼事嗎？"
          },
          {
            "word": "disc",
            "pos": "圓盤；磁碟",
            "meaning": "n.",
            "en": "He saved the file to a disc.",
            "zh": "他將文件存到磁碟上。"
          },
          {
            "word": "dislike",
            "pos": "不喜歡",
            "meaning": "v./n.",
            "en": "She dislikes spicy food.",
            "zh": "她不喜歡辛辣的食物。"
          },
          {
            "word": "dull",
            "pos": "無聊的；遲鈍的",
            "meaning": "adj.",
            "en": "The movie was long and dull.",
            "zh": "這部電影又長又無聊。"
          },
          {
            "word": "eggplant",
            "pos": "茄子",
            "meaning": "n.",
            "en": "She cooked eggplant with garlic sauce.",
            "zh": "她用蒜醬煮茄子。"
          },
          {
            "word": "embarrassing",
            "pos": "令人尷尬的",
            "meaning": "adj.",
            "en": "It was an embarrassing mistake.",
            "zh": "這是一個令人尷尬的錯誤。"
          },
          {
            "word": "engineering",
            "pos": "工程學",
            "meaning": "n.",
            "en": "He studied mechanical engineering at university.",
            "zh": "他在大學學習機械工程。"
          },
          {
            "word": "equal",
            "pos": "平等的；相等的",
            "meaning": "adj./n.",
            "en": "Everyone should have equal rights.",
            "zh": "每個人都應該擁有平等的權利。"
          },
          {
            "word": "era",
            "pos": "時代",
            "meaning": "n.",
            "en": "We live in the digital era.",
            "zh": "我們生活在數位時代。"
          },
          {
            "word": "especially",
            "pos": "尤其",
            "meaning": "adv.",
            "en": "I love all fruits, especially mangoes.",
            "zh": "我喜歡所有水果，尤其是芒果。"
          },
          {
            "word": "extra",
            "pos": "額外的",
            "meaning": "adj./adv./n.",
            "en": "Can I get an extra piece of cake?",
            "zh": "我可以再來一塊蛋糕嗎？"
          },
          {
            "word": "ferret",
            "pos": "雪貂",
            "meaning": "n.",
            "en": "She has a pet ferret.",
            "zh": "她養了一隻雪貂。"
          },
          {
            "word": "flat",
            "pos": "平的；單調的",
            "meaning": "adj.",
            "en": "The road is completely flat.",
            "zh": "這條路完全是平的。"
          },
          {
            "word": "flavor",
            "pos": "風味",
            "meaning": "n.",
            "en": "This ice cream has a rich chocolate flavor.",
            "zh": "這款冰淇淋有濃郁的巧克力風味。"
          },
          {
            "word": "fluency",
            "pos": "流利",
            "meaning": "n.",
            "en": "She speaks French with great fluency.",
            "zh": "她說法語非常流利。"
          },
          {
            "word": "globalization",
            "pos": "全球化",
            "meaning": "n.",
            "en": "Globalization has connected economies worldwide.",
            "zh": "全球化讓經濟聯繫更加緊密。"
          },
          {
            "word": "gorgeous",
            "pos": "美麗的；華麗的",
            "meaning": "adj.",
            "en": "She wore a gorgeous dress.",
            "zh": "她穿了一件華麗的裙子。"
          },
          {
            "word": "ground",
            "pos": "地面；理由",
            "meaning": "n.",
            "en": "The ground was covered with snow.",
            "zh": "地面被雪覆蓋了。"
          },
          {
            "word": "hospitality",
            "pos": "好客；款待",
            "meaning": "n.",
            "en": "The hotel is known for its hospitality.",
            "zh": "這家酒店以其熱情好客而聞名。"
          },
          {
            "word": "imply",
            "pos": "暗示",
            "meaning": "v.",
            "en": "His words implied that he was unhappy.",
            "zh": "他的話暗示他不開心。"
          },
          {
            "word": "infer",
            "pos": "推斷",
            "meaning": "v.",
            "en": "From his tone, I inferred he was upset.",
            "zh": "從他的語氣中，我推斷他很不高興。"
          },
          {
            "word": "instrument",
            "pos": "樂器；工具",
            "meaning": "n.",
            "en": "She plays a musical instrument.",
            "zh": "她會演奏樂器。"
          },
          {
            "word": "kangaroo",
            "pos": "袋鼠",
            "meaning": "n.",
            "en": "Kangaroos are native to Australia.",
            "zh": "袋鼠是澳洲特有的動物。"
          },
          {
            "word": "laundry",
            "pos": "洗衣",
            "meaning": "n.",
            "en": "I need to do my laundry today.",
            "zh": "我今天需要洗衣服。"
          },
          {
            "word": "lecture",
            "pos": "演講；授課",
            "meaning": "n./v.",
            "en": "The professor gave a lecture on history.",
            "zh": "教授做了一場歷史講座。"
          },
          {
            "word": "lettuce",
            "pos": "萵苣",
            "meaning": "n.",
            "en": "She added lettuce to her sandwich.",
            "zh": "她在三明治裡加了萵苣。"
          },
          {
            "word": "lounge",
            "pos": "休息室；閒逛",
            "meaning": "n./v.",
            "en": "They relaxed in the hotel lounge.",
            "zh": "他們在酒店休息室放鬆。"
          },
          {
            "word": "lump",
            "pos": "塊狀物",
            "meaning": "n.",
            "en": "He found a lump in his soup.",
            "zh": "他在湯裡發現了一塊異物。"
          },
          {
            "word": "mammal",
            "pos": "哺乳動物",
            "meaning": "n.",
            "en": "Whales are the largest mammals in the ocean.",
            "zh": "鯨魚是海洋中最大的哺乳動物。"
          },
          {
            "word": "memory",
            "pos": "記憶；回憶",
            "meaning": "n.",
            "en": "She has a good memory for names.",
            "zh": "她對名字的記憶力很好。"
          },
          {
            "word": "microwave",
            "pos": "微波爐；用微波爐加熱",
            "meaning": "n./v.",
            "en": "He microwaved his lunch for two minutes.",
            "zh": "他用微波爐加熱午餐兩分鐘。"
          },
          {
            "word": "midterm",
            "pos": "期中考",
            "meaning": "n.",
            "en": "The students are preparing for their midterm exams.",
            "zh": "學生們正在準備期中考試。"
          },
          {
            "word": "missing",
            "pos": "失蹤的；缺少的",
            "meaning": "adj.",
            "en": "The police are searching for a missing child.",
            "zh": "警方正在尋找一名失蹤的兒童。"
          },
          {
            "word": "multilingual",
            "pos": "多語的",
            "meaning": "adj.",
            "en": "She is multilingual and speaks five languages.",
            "zh": "她會多種語言，能說五種語言。"
          },
          {
            "word": "optimization",
            "pos": "最佳化；優化",
            "meaning": "n.",
            "en": "Website optimization improves user experience.",
            "zh": "網站最佳化能提升使用者體驗。"
          },
          {
            "word": "orchestra",
            "pos": "管弦樂隊",
            "meaning": "n.",
            "en": "She plays the violin in the school orchestra.",
            "zh": "她在學校管弦樂隊中演奏小提琴。"
          },
          {
            "word": "oval",
            "pos": "橢圓形的；橢圓形",
            "meaning": "adj./n.",
            "en": "The table has an oval shape.",
            "zh": "這張桌子是橢圓形的。"
          },
          {
            "word": "pineapple",
            "pos": "鳳梨",
            "meaning": "n.",
            "en": "Pineapple is a tropical fruit.",
            "zh": "鳳梨是一種熱帶水果。"
          },
          {
            "word": "pointed",
            "pos": "尖的；明顯的",
            "meaning": "adj.",
            "en": "He made a pointed comment during the discussion.",
            "zh": "他在討論中發表了一個明顯的評論。"
          },
          {
            "word": "practice",
            "pos": "練習；實踐",
            "meaning": "n./v.",
            "en": "You need more practice to improve your skills.",
            "zh": "你需要更多練習來提升技能。"
          },
          {
            "word": "probably",
            "pos": "可能；大概",
            "meaning": "adv.",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "pronunciation",
            "pos": "發音",
            "meaning": "n.",
            "en": "His pronunciation of English words is clear.",
            "zh": "他的英語發音很清晰。"
          },
          {
            "word": "rectangle",
            "pos": "長方形",
            "meaning": "n.",
            "en": "The classroom has a rectangular layout.",
            "zh": "這間教室的佈局是長方形的。"
          },
          {
            "word": "reluctant",
            "pos": "不情願的",
            "meaning": "adj.",
            "en": "She was reluctant to share her secret.",
            "zh": "她不情願分享她的秘密。"
          },
          {
            "word": "represent",
            "pos": "代表；象徵",
            "meaning": "v.",
            "en": "The flag represents the country.",
            "zh": "這面旗幟代表這個國家。"
          },
          {
            "word": "revolution",
            "pos": "革命",
            "meaning": "n.",
            "en": "The Industrial Revolution changed the world.",
            "zh": "工業革命改變了世界。"
          },
          {
            "word": "rough",
            "pos": "粗糙的；艱難的",
            "meaning": "adj.",
            "en": "His hands were rough from hard work.",
            "zh": "他的手因為辛勤勞動變得粗糙。"
          },
          {
            "word": "sculpture",
            "pos": "雕塑",
            "meaning": "n.",
            "en": "The museum has an ancient Greek sculpture.",
            "zh": "這家博物館有一座古希臘雕塑。"
          },
          {
            "word": "seal",
            "pos": "海豹；密封",
            "meaning": "n./v.",
            "en": "He sealed the envelope before mailing it.",
            "zh": "他在寄信前封好了信封。"
          },
          {
            "word": "sharpen",
            "pos": "磨利；加強",
            "meaning": "v.",
            "en": "He sharpened his pencil before the test.",
            "zh": "他在考試前削鉛筆。"
          },
          {
            "word": "shore",
            "pos": "海岸；岸邊",
            "meaning": "n.",
            "en": "They walked along the shore at sunset.",
            "zh": "他們在日落時沿著海岸散步。"
          },
          {
            "word": "silk",
            "pos": "絲綢",
            "meaning": "n.",
            "en": "This dress is made of pure silk.",
            "zh": "這件衣服是純絲綢製成的。"
          },
          {
            "word": "similar",
            "pos": "相似的",
            "meaning": "adj.",
            "en": "Their ideas are quite similar.",
            "zh": "他們的想法很相似。"
          },
          {
            "word": "similarity",
            "pos": "相似點",
            "meaning": "n.",
            "en": "There is a similarity between these two paintings.",
            "zh": "這兩幅畫有相似之處。"
          },
          {
            "word": "smooth",
            "pos": "平滑的；順利的",
            "meaning": "adj.",
            "en": "The surface of the table is very smooth.",
            "zh": "這張桌子的表面非常平滑。"
          },
          {
            "word": "snorkeling",
            "pos": "浮潛",
            "meaning": "n.",
            "en": "We went snorkeling in the crystal-clear water.",
            "zh": "我們在清澈的水中浮潛。"
          },
          {
            "word": "software",
            "pos": "軟體",
            "meaning": "n.",
            "en": "He is developing a new type of software.",
            "zh": "他正在開發一種新型軟體。"
          },
          {
            "word": "species",
            "pos": "物種",
            "meaning": "n.",
            "en": "There are many endangered species in the rainforest.",
            "zh": "雨林中有許多瀕危物種。"
          },
          {
            "word": "stuff",
            "pos": "東西",
            "meaning": "n.",
            "en": "She packed her stuff into a suitcase.",
            "zh": "她把她的東西裝進行李箱裡。"
          },
          {
            "word": "tasty",
            "pos": "美味的",
            "meaning": "adj.",
            "en": "This cake is very tasty.",
            "zh": "這個蛋糕很好吃。"
          },
          {
            "word": "timetable",
            "pos": "時間表；課表",
            "meaning": "n.",
            "en": "The train timetable was changed.",
            "zh": "火車時間表被更改了。"
          },
          {
            "word": "tolerance",
            "pos": "忍耐力；包容",
            "meaning": "n.",
            "en": "He has a high tolerance for pain.",
            "zh": "他對疼痛的忍耐力很高。"
          },
          {
            "word": "transcript",
            "pos": "成績單；副本",
            "meaning": "n.",
            "en": "She requested a transcript of her academic records.",
            "zh": "她申請了一份成績單。"
          },
          {
            "word": "via",
            "pos": "經由；透過",
            "meaning": "prep.",
            "en": "We traveled to Italy via France.",
            "zh": "我們經由法國前往義大利。"
          }
        ]
      },
      {
        "id": 2,
        "name": "LC to Exeed 1 to 5",
        "words": [
          {
            "word": "abundance",
            "pos": "n.",
            "meaning": "豐富；大量",
            "en": "The forest has an abundance of wildlife.",
            "zh": "這片森林有豐富的野生動物。"
          },
          {
            "word": "amphibian",
            "pos": "n.",
            "meaning": "兩棲動物",
            "en": "Frogs and salamanders are amphibians.",
            "zh": "青蛙和蠑螈是兩棲動物。"
          },
          {
            "word": "Antarctica",
            "pos": "n.",
            "meaning": "南極洲",
            "en": "Antarctica is the coldest continent on Earth.",
            "zh": "南極洲是地球上最寒冷的大陸。"
          },
          {
            "word": "appointment",
            "pos": "n.",
            "meaning": "預約；約會",
            "en": "I have a doctor's appointment at 3 PM.",
            "zh": "我下午三點有個看診預約。"
          },
          {
            "word": "arrange",
            "pos": "v.",
            "meaning": "安排；整理",
            "en": "She arranged the books on the shelf.",
            "zh": "她整理了書架上的書。"
          },
          {
            "word": "astronomical",
            "pos": "adj.",
            "meaning": "天文的；極大的",
            "en": "The cost of the project is astronomical.",
            "zh": "這個專案的成本非常高。"
          },
          {
            "word": "basin",
            "pos": "n.",
            "meaning": "盆地；水盆",
            "en": "The Amazon Basin is home to diverse species.",
            "zh": "亞馬遜盆地是多種物種的棲息地。"
          },
          {
            "word": "biodiversity",
            "pos": "n.",
            "meaning": "生物多樣性",
            "en": "Biodiversity is essential for a healthy ecosystem.",
            "zh": "生物多樣性對健康的生態系統至關重要。"
          },
          {
            "word": "biologist",
            "pos": "n.",
            "meaning": "生物學家",
            "en": "The biologist studies marine life.",
            "zh": "這位生物學家研究海洋生物。"
          },
          {
            "word": "carbon",
            "pos": "n.",
            "meaning": "碳",
            "en": "Carbon is an essential element in all living organisms.",
            "zh": "碳是所有生物體內不可或缺的元素。"
          },
          {
            "word": "carbon dioxide",
            "pos": "n.",
            "meaning": "二氧化碳",
            "en": "Plants absorb carbon dioxide during photosynthesis.",
            "zh": "植物在光合作用時吸收二氧化碳。"
          },
          {
            "word": "characteristic",
            "pos": "n./adj.",
            "meaning": "特徵；典型的",
            "en": "One characteristic of cats is their agility.",
            "zh": "貓的一個特徵是它們的敏捷性。"
          },
          {
            "word": "collection",
            "pos": "n.",
            "meaning": "收藏；收集物",
            "en": "She has a collection of rare stamps.",
            "zh": "她有一個稀有郵票的收藏。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解力",
            "en": "Reading comprehension is an important skill.",
            "zh": "閱讀理解力是一項重要技能。"
          },
          {
            "word": "confess",
            "pos": "v.",
            "meaning": "承認；坦白",
            "en": "He confessed to stealing the money.",
            "zh": "他承認偷了錢。"
          },
          {
            "word": "consequence",
            "pos": "n.",
            "meaning": "後果；結果",
            "en": "His actions had serious consequences.",
            "zh": "他的行為產生了嚴重的後果。"
          },
          {
            "word": "continue",
            "pos": "v.",
            "meaning": "繼續",
            "en": "They decided to continue the journey.",
            "zh": "他們決定繼續旅程。"
          },
          {
            "word": "council",
            "pos": "n.",
            "meaning": "委員會；理事會",
            "en": "The city council approved the new law.",
            "zh": "市議會批准了新法案。"
          },
          {
            "word": "craft",
            "pos": "n./v.",
            "meaning": "工藝；製作",
            "en": "She crafted a beautiful sculpture.",
            "zh": "她製作了一個美麗的雕塑。"
          },
          {
            "word": "dialogue",
            "pos": "n.",
            "meaning": "對話",
            "en": "The book contains a lot of interesting dialogues.",
            "zh": "這本書包含許多有趣的對話。"
          },
          {
            "word": "difficulty",
            "pos": "n.",
            "meaning": "困難",
            "en": "He had difficulty understanding the lesson.",
            "zh": "他在理解這堂課時遇到了困難。"
          },
          {
            "word": "diversity",
            "pos": "n.",
            "meaning": "多樣性",
            "en": "The city is known for its cultural diversity.",
            "zh": "這座城市以其文化多樣性而聞名。"
          },
          {
            "word": "dyslexia",
            "pos": "n.",
            "meaning": "閱讀障礙",
            "en": "He was diagnosed with dyslexia as a child.",
            "zh": "他在兒童時期被診斷出有閱讀障礙。"
          },
          {
            "word": "enormous",
            "pos": "adj.",
            "meaning": "巨大的",
            "en": "The elephant is an enormous animal.",
            "zh": "大象是一種巨大的動物。"
          },
          {
            "word": "enormously",
            "pos": "adv.",
            "meaning": "極大地；非常",
            "en": "His business has grown enormously in the past year.",
            "zh": "他過去一年來的生意增長極大。"
          },
          {
            "word": "essential",
            "pos": "adj.",
            "meaning": "必要的；本質的",
            "en": "Water is essential for human survival.",
            "zh": "水對人類生存至關重要。"
          },
          {
            "word": "estimate",
            "pos": "v./n.",
            "meaning": "估計",
            "en": "They estimated the cost of the project.",
            "zh": "他們估算了這個專案的成本。"
          },
          {
            "word": "exclude",
            "pos": "v.",
            "meaning": "排除",
            "en": "The price excludes taxes.",
            "zh": "這個價格不包含稅金。"
          },
          {
            "word": "extent",
            "pos": "n.",
            "meaning": "程度；範圍",
            "en": "The extent of the damage was severe.",
            "zh": "損害的程度很嚴重。"
          },
          {
            "word": "familiar",
            "pos": "adj.",
            "meaning": "熟悉的",
            "en": "I am familiar with this topic.",
            "zh": "我對這個主題很熟悉。"
          },
          {
            "word": "frozen",
            "pos": "adj.",
            "meaning": "冰凍的",
            "en": "The lake was completely frozen in winter.",
            "zh": "這座湖在冬天完全結冰了。"
          },
          {
            "word": "geometry",
            "pos": "n.",
            "meaning": "幾何學",
            "en": "He is studying geometry in school.",
            "zh": "他正在學習幾何學。"
          },
          {
            "word": "gravity",
            "pos": "n.",
            "meaning": "重力",
            "en": "Gravity keeps us on the ground.",
            "zh": "重力讓我們保持在地面上。"
          },
          {
            "word": "improvement",
            "pos": "n.",
            "meaning": "改進；進步",
            "en": "There has been a great improvement in technology.",
            "zh": "科技有了很大的進步。"
          },
          {
            "word": "inland",
            "pos": "adj./adv.",
            "meaning": "內陸的；向內地",
            "en": "They traveled inland to visit the countryside.",
            "zh": "他們向內陸旅行，參觀鄉村。"
          },
          {
            "word": "kilometer",
            "pos": "n.",
            "meaning": "公里",
            "en": "The town is 10 kilometers away from here.",
            "zh": "這座城鎮距離這裡 10 公里。"
          },
          {
            "word": "lecture",
            "pos": "n./v.",
            "meaning": "演講；授課",
            "en": "The professor gave a lecture on climate change.",
            "zh": "教授進行了一場關於氣候變遷的演講。"
          },
          {
            "word": "lounge",
            "pos": "n./v.",
            "meaning": "休息室；閒逛",
            "en": "They relaxed in the airport lounge before the flight.",
            "zh": "他們在機場休息室裡放鬆等待航班。"
          },
          {
            "word": "mammal",
            "pos": "n.",
            "meaning": "哺乳動物",
            "en": "Whales are the largest mammals in the ocean.",
            "zh": "鯨魚是海洋中最大的哺乳動物。"
          },
          {
            "word": "march",
            "pos": "n./v.",
            "meaning": "遊行；行進",
            "en": "The soldiers marched through the city.",
            "zh": "士兵們在城市中行進。"
          },
          {
            "word": "Mars",
            "pos": "n.",
            "meaning": "火星",
            "en": "Scientists are studying the possibility of life on Mars.",
            "zh": "科學家正在研究火星上可能存在的生命。"
          },
          {
            "word": "mature",
            "pos": "adj./v.",
            "meaning": "成熟的；成熟",
            "en": "He has matured a lot over the years.",
            "zh": "他這些年來變得更加成熟。"
          },
          {
            "word": "mild",
            "pos": "adj.",
            "meaning": "溫和的；輕微的",
            "en": "The weather is mild in spring.",
            "zh": "春天的天氣溫和宜人。"
          },
          {
            "word": "modest",
            "pos": "adj.",
            "meaning": "謙虛的；適度的",
            "en": "She is very modest about her achievements.",
            "zh": "她對自己的成就非常謙虛。"
          },
          {
            "word": "nitrogen",
            "pos": "n.",
            "meaning": "氮氣",
            "en": "Nitrogen makes up a large part of the Earth's atmosphere.",
            "zh": "氮氣佔地球大氣層的大部分。"
          },
          {
            "word": "obviously",
            "pos": "adv.",
            "meaning": "明顯地",
            "en": "He was obviously tired after the long trip.",
            "zh": "長途旅行後，他顯然很累。"
          },
          {
            "word": "opportunity",
            "pos": "n.",
            "meaning": "機會",
            "en": "This job offers a great opportunity for growth.",
            "zh": "這份工作提供了很好的成長機會。"
          },
          {
            "word": "oxygen",
            "pos": "n.",
            "meaning": "氧氣",
            "en": "We need oxygen to breathe.",
            "zh": "我們需要氧氣來呼吸。"
          },
          {
            "word": "percent",
            "pos": "n.",
            "meaning": "百分比",
            "en": "Only 10 percent of the students passed the test.",
            "zh": "只有 10% 的學生通過了考試。"
          },
          {
            "word": "pretend",
            "pos": "v.",
            "meaning": "假裝",
            "en": "He pretended not to hear the question.",
            "zh": "他假裝沒有聽到這個問題。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "professor",
            "pos": "n.",
            "meaning": "教授",
            "en": "She is a professor of physics at the university.",
            "zh": "她是大學物理系的教授。"
          },
          {
            "word": "publish",
            "pos": "v.",
            "meaning": "出版；發表",
            "en": "The author published a new book last year.",
            "zh": "這位作家去年出版了一本新書。"
          },
          {
            "word": "rainforest",
            "pos": "n.",
            "meaning": "雨林",
            "en": "The Amazon rainforest is home to many unique species.",
            "zh": "亞馬遜雨林是許多獨特物種的家園。"
          },
          {
            "word": "recognize",
            "pos": "v.",
            "meaning": "認出；承認",
            "en": "I didn’t recognize him at first.",
            "zh": "我一開始沒有認出他。"
          },
          {
            "word": "reptile",
            "pos": "n.",
            "meaning": "爬行動物",
            "en": "Snakes and lizards are reptiles.",
            "zh": "蛇和蜥蜴是爬行動物。"
          },
          {
            "word": "reside",
            "pos": "v.",
            "meaning": "居住",
            "en": "He resides in a small town by the sea.",
            "zh": "他住在海邊的一個小鎮裡。"
          },
          {
            "word": "scientist",
            "pos": "n.",
            "meaning": "科學家",
            "en": "The scientist discovered a new species of fish.",
            "zh": "這位科學家發現了一種新魚類。"
          },
          {
            "word": "sequence",
            "pos": "n.",
            "meaning": "順序；序列",
            "en": "The story is told in chronological sequence.",
            "zh": "這個故事按照時間順序敘述。"
          },
          {
            "word": "severity",
            "pos": "n.",
            "meaning": "嚴重性",
            "en": "The severity of the storm caused major damage.",
            "zh": "這場暴風雨的嚴重性導致了重大損害。"
          },
          {
            "word": "similarity",
            "pos": "n.",
            "meaning": "相似點",
            "en": "There is a strong similarity between the two designs.",
            "zh": "這兩個設計之間有很大的相似之處。"
          },
          {
            "word": "situation",
            "pos": "n.",
            "meaning": "情況；局勢",
            "en": "The situation is getting worse.",
            "zh": "情況正在惡化。"
          },
          {
            "word": "specialist",
            "pos": "n.",
            "meaning": "專家",
            "en": "She is a heart specialist.",
            "zh": "她是一位心臟病專家。"
          },
          {
            "word": "species",
            "pos": "n.",
            "meaning": "物種",
            "en": "There are thousands of species in the ocean.",
            "zh": "海洋中有數千種生物。"
          },
          {
            "word": "stake",
            "pos": "n.",
            "meaning": "風險；股份",
            "en": "He has a financial stake in the company.",
            "zh": "他在這家公司持有股份。"
          },
          {
            "word": "strategy",
            "pos": "n.",
            "meaning": "策略",
            "en": "Their strategy helped them win the game.",
            "zh": "他們的策略幫助他們贏得比賽。"
          },
          {
            "word": "summarize",
            "pos": "v.",
            "meaning": "概述；總結",
            "en": "Can you summarize the main points of the article?",
            "zh": "你能總結這篇文章的要點嗎？"
          },
          {
            "word": "summary",
            "pos": "n.",
            "meaning": "摘要",
            "en": "The teacher gave a summary of the lesson.",
            "zh": "老師對課程內容做了總結。"
          },
          {
            "word": "sweat",
            "pos": "n./v.",
            "meaning": "汗水；流汗",
            "en": "He was sweating after the intense workout.",
            "zh": "劇烈運動後，他滿身大汗。"
          },
          {
            "word": "ton",
            "pos": "n.",
            "meaning": "噸；大量",
            "en": "They transported several tons of rice.",
            "zh": "他們運輸了幾噸大米。"
          },
          {
            "word": "whereas",
            "pos": "conj.",
            "meaning": "然而；而",
            "en": "She prefers tea, whereas he likes coffee.",
            "zh": "她喜歡喝茶，而他喜歡喝咖啡。"
          }
        ]
      },
      {
        "id": 3,
        "name": "LC to Exeed 6 to 10",
        "words": [
          {
            "word": "achieve",
            "pos": "v.",
            "meaning": "達成；實現",
            "en": "He worked hard to achieve his goals.",
            "zh": "他努力工作以實現目標。"
          },
          {
            "word": "advantage",
            "pos": "n.",
            "meaning": "優勢；好處",
            "en": "Being bilingual is a great advantage in business.",
            "zh": "會說雙語在商業上是一個很大的優勢。"
          },
          {
            "word": "aggressive",
            "pos": "adj.",
            "meaning": "侵略性的；積極進取的",
            "en": "He has an aggressive approach to sales.",
            "zh": "他對銷售採取積極進取的態度。"
          },
          {
            "word": "annoying",
            "pos": "adj.",
            "meaning": "討厭的；惱人的",
            "en": "The noise from the construction site is very annoying.",
            "zh": "建築工地的噪音非常惱人。"
          },
          {
            "word": "attitude",
            "pos": "n.",
            "meaning": "態度",
            "en": "His attitude towards work is very positive.",
            "zh": "他對工作的態度非常積極。"
          },
          {
            "word": "ballet",
            "pos": "n.",
            "meaning": "芭蕾舞",
            "en": "She has been practicing ballet for five years.",
            "zh": "她已經練習芭蕾舞五年了。"
          },
          {
            "word": "certify",
            "pos": "v.",
            "meaning": "認證；證明",
            "en": "The course certifies students as professional trainers.",
            "zh": "這門課程為學生提供專業教練認證。"
          },
          {
            "word": "chat",
            "pos": "v./n.",
            "meaning": "聊天",
            "en": "They had a quick chat before the meeting.",
            "zh": "他們在會議前快速聊了一下。"
          },
          {
            "word": "cheering",
            "pos": "n.",
            "meaning": "歡呼；加油",
            "en": "The cheering crowd welcomed the champion.",
            "zh": "歡呼的人群迎接冠軍。"
          },
          {
            "word": "combination",
            "pos": "n.",
            "meaning": "組合",
            "en": "The combination of colors in this painting is beautiful.",
            "zh": "這幅畫的色彩組合很美。"
          },
          {
            "word": "community",
            "pos": "n.",
            "meaning": "社區；群體",
            "en": "The local community helped rebuild the school.",
            "zh": "當地社區幫助重建學校。"
          },
          {
            "word": "complaint",
            "pos": "n.",
            "meaning": "抱怨；投訴",
            "en": "The hotel received many complaints about the service.",
            "zh": "這家酒店收到了許多關於服務的投訴。"
          },
          {
            "word": "comprehension",
            "pos": "n.",
            "meaning": "理解力",
            "en": "Reading comprehension is an essential skill.",
            "zh": "閱讀理解能力是一項必要技能。"
          },
          {
            "word": "comprise",
            "pos": "v.",
            "meaning": "包含；由…組成",
            "en": "The book comprises ten chapters.",
            "zh": "這本書由十個章節組成。"
          },
          {
            "word": "confirm",
            "pos": "v.",
            "meaning": "確認；證實",
            "en": "The doctor confirmed that she was pregnant.",
            "zh": "醫生確認她懷孕了。"
          },
          {
            "word": "cooperate",
            "pos": "v.",
            "meaning": "合作",
            "en": "The two companies decided to cooperate on the project.",
            "zh": "這兩家公司決定在這個專案上合作。"
          },
          {
            "word": "credit",
            "pos": "n./v.",
            "meaning": "信用；學分；歸功於",
            "en": "He received full credit for his work.",
            "zh": "他因為他的工作獲得了全部榮譽。"
          },
          {
            "word": "culture",
            "pos": "n.",
            "meaning": "文化",
            "en": "Chinese culture has a long history.",
            "zh": "中華文化有悠久的歷史。"
          },
          {
            "word": "definitely",
            "pos": "adv.",
            "meaning": "絕對地；明確地",
            "en": "This is definitely the best choice.",
            "zh": "這絕對是最好的選擇。"
          },
          {
            "word": "demand",
            "pos": "n./v.",
            "meaning": "需求；要求",
            "en": "The demand for electric cars is increasing.",
            "zh": "電動車的需求正在增加。"
          },
          {
            "word": "descend",
            "pos": "v.",
            "meaning": "下降；遺傳自",
            "en": "The climbers began to descend the mountain.",
            "zh": "登山者開始下山。"
          },
          {
            "word": "dictation",
            "pos": "n.",
            "meaning": "聽寫；口述",
            "en": "The teacher gave the students a dictation exercise.",
            "zh": "老師給學生們做了一個聽寫練習。"
          },
          {
            "word": "dime",
            "pos": "n.",
            "meaning": "一角硬幣（美國）",
            "en": "A candy bar used to cost a dime.",
            "zh": "以前一條糖果棒只要一角硬幣。"
          },
          {
            "word": "discount",
            "pos": "n./v.",
            "meaning": "折扣；打折",
            "en": "They are offering a 20% discount on all items.",
            "zh": "他們對所有商品提供 20% 的折扣。"
          },
          {
            "word": "diverse",
            "pos": "adj.",
            "meaning": "多樣的",
            "en": "The country has a diverse culture.",
            "zh": "這個國家有多元的文化。"
          },
          {
            "word": "dominate",
            "pos": "v.",
            "meaning": "主導；支配",
            "en": "The company dominates the tech industry.",
            "zh": "這家公司主導了科技產業。"
          },
          {
            "word": "downtown",
            "pos": "n./adj.",
            "meaning": "市中心；市中心的",
            "en": "They opened a new store in the downtown area.",
            "zh": "他們在市中心開了一家新店。"
          },
          {
            "word": "equipment",
            "pos": "n.",
            "meaning": "設備",
            "en": "The gym has modern fitness equipment.",
            "zh": "這家健身房有現代化的健身設備。"
          },
          {
            "word": "estate",
            "pos": "n.",
            "meaning": "地產；財產",
            "en": "His family owns a large estate.",
            "zh": "他的家族擁有一大片地產。"
          },
          {
            "word": "ethnic",
            "pos": "adj.",
            "meaning": "民族的；種族的",
            "en": "The city has many ethnic restaurants.",
            "zh": "這座城市有許多民族餐廳。"
          },
          {
            "word": "expand",
            "pos": "v.",
            "meaning": "擴展；擴大",
            "en": "The company plans to expand into new markets.",
            "zh": "這家公司計劃擴展到新市場。"
          },
          {
            "word": "extremely",
            "pos": "adv.",
            "meaning": "極度地",
            "en": "It was extremely hot today.",
            "zh": "今天非常熱。"
          },
          {
            "word": "foundation",
            "pos": "n.",
            "meaning": "基礎；基金會",
            "en": "The foundation of the building is strong.",
            "zh": "這棟建築的基礎很牢固。"
          },
          {
            "word": "grant",
            "pos": "v./n.",
            "meaning": "授予；補助金",
            "en": "She was granted a scholarship.",
            "zh": "她獲得了一筆獎學金。"
          },
          {
            "word": "greeting",
            "pos": "n.",
            "meaning": "問候；招呼",
            "en": "He waved a friendly greeting to his neighbor.",
            "zh": "他向鄰居友好地打招呼。"
          },
          {
            "word": "guidance",
            "pos": "n.",
            "meaning": "指導",
            "en": "He asked for guidance on his career path.",
            "zh": "他請求關於職業道路的指導。"
          },
          {
            "word": "inconvenient",
            "pos": "adj.",
            "meaning": "不方便的",
            "en": "The meeting time is inconvenient for me.",
            "zh": "這個會議時間對我來說不太方便。"
          },
          {
            "word": "isle",
            "pos": "n.",
            "meaning": "小島",
            "en": "They visited a small isle near the coast.",
            "zh": "他們參觀了一個靠近海岸的小島。"
          },
          {
            "word": "levy",
            "pos": "v./n.",
            "meaning": "徵稅；稅款",
            "en": "The government levied a new tax on luxury goods.",
            "zh": "政府對奢侈品徵收了一項新稅。"
          },
          {
            "word": "liar",
            "pos": "n.",
            "meaning": "騙子",
            "en": "He is a liar; you can't trust him.",
            "zh": "他是個騙子，你不能相信他。"
          },
          {
            "word": "locate",
            "pos": "v.",
            "meaning": "找到；設置",
            "en": "They are trying to locate the missing person.",
            "zh": "他們正在試圖找到失蹤的人。"
          },
          {
            "word": "manufacturer",
            "pos": "n.",
            "meaning": "製造商",
            "en": "The company is a leading car manufacturer.",
            "zh": "這家公司是領先的汽車製造商。"
          },
          {
            "word": "memo",
            "pos": "n.",
            "meaning": "備忘錄",
            "en": "She left a memo on my desk.",
            "zh": "她在我的桌上留了一張備忘錄。"
          },
          {
            "word": "microphone",
            "pos": "n.",
            "meaning": "麥克風",
            "en": "He spoke into the microphone.",
            "zh": "他對著麥克風說話。"
          },
          {
            "word": "mike",
            "pos": "n. (informal)",
            "meaning": "麥克風",
            "en": "Please turn on the mike before speaking.",
            "zh": "在發言前請打開麥克風。"
          },
          {
            "word": "mild",
            "pos": "adj.",
            "meaning": "溫和的；輕微的",
            "en": "The winter was mild this year.",
            "zh": "今年的冬天很溫和。"
          },
          {
            "word": "mostly",
            "pos": "adv.",
            "meaning": "大部分；主要地",
            "en": "The audience was mostly students.",
            "zh": "觀眾主要是學生。"
          },
          {
            "word": "normal",
            "pos": "adj.",
            "meaning": "正常的",
            "en": "It’s normal to feel nervous before a test.",
            "zh": "考試前感到緊張是正常的。"
          },
          {
            "word": "numerous",
            "pos": "adj.",
            "meaning": "眾多的",
            "en": "He has written numerous books.",
            "zh": "他寫了許多書。"
          },
          {
            "word": "occasion",
            "pos": "n.",
            "meaning": "場合",
            "en": "They met on a special occasion.",
            "zh": "他們在一個特殊的場合見面。"
          },
          {
            "word": "officially",
            "pos": "adv.",
            "meaning": "官方地；正式地",
            "en": "The company officially launched its new product.",
            "zh": "這家公司正式推出了新產品。"
          },
          {
            "word": "option",
            "pos": "n.",
            "meaning": "選擇",
            "en": "You have several options for dinner.",
            "zh": "你有幾個晚餐選擇。"
          },
          {
            "word": "outdoor",
            "pos": "adj.",
            "meaning": "戶外的",
            "en": "We enjoy outdoor activities like hiking.",
            "zh": "我們喜歡戶外活動，如健行。"
          },
          {
            "word": "ownership",
            "pos": "n.",
            "meaning": "所有權",
            "en": "He took full ownership of the company.",
            "zh": "他完全擁有這家公司。"
          },
          {
            "word": "philosophy",
            "pos": "n.",
            "meaning": "哲學；人生觀",
            "en": "His philosophy of life is to stay positive.",
            "zh": "他的人生哲學是保持樂觀。"
          },
          {
            "word": "Polynesian",
            "pos": "adj./n.",
            "meaning": "波利尼西亞的；波利尼西亞人",
            "en": "Polynesian culture is rich and diverse.",
            "zh": "波利尼西亞文化豐富多樣。"
          },
          {
            "word": "preach",
            "pos": "v.",
            "meaning": "佈道；宣揚",
            "en": "The priest preached about love and kindness.",
            "zh": "牧師講道關於愛與善良。"
          },
          {
            "word": "previous",
            "pos": "adj.",
            "meaning": "先前的",
            "en": "She had met him on a previous occasion.",
            "zh": "她曾在之前的一次場合見過他。"
          },
          {
            "word": "probably",
            "pos": "adv.",
            "meaning": "可能；大概",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "product",
            "pos": "n.",
            "meaning": "產品",
            "en": "This company sells high-quality products.",
            "zh": "這家公司銷售高品質產品。"
          },
          {
            "word": "professional",
            "pos": "adj./n.",
            "meaning": "專業的；專業人士",
            "en": "She is a professional photographer.",
            "zh": "她是一位專業攝影師。"
          },
          {
            "word": "profit",
            "pos": "n.",
            "meaning": "利潤",
            "en": "The company made a huge profit last year.",
            "zh": "這家公司去年獲得了巨大利潤。"
          },
          {
            "word": "promotional",
            "pos": "adj.",
            "meaning": "促銷的；宣傳的",
            "en": "They launched a promotional campaign for their new car.",
            "zh": "他們為新車推出了一項促銷活動。"
          },
          {
            "word": "reasonable",
            "pos": "adj.",
            "meaning": "合理的",
            "en": "The price of the laptop is reasonable.",
            "zh": "這台筆電的價格很合理。"
          },
          {
            "word": "recognition",
            "pos": "n.",
            "meaning": "認可；表彰",
            "en": "He received recognition for his achievements.",
            "zh": "他因為自己的成就而獲得認可。"
          },
          {
            "word": "recommend",
            "pos": "v.",
            "meaning": "推薦",
            "en": "I recommend this book to anyone who loves history.",
            "zh": "我向所有喜歡歷史的人推薦這本書。"
          },
          {
            "word": "recreation",
            "pos": "n.",
            "meaning": "娛樂；消遣",
            "en": "Swimming is his favorite form of recreation.",
            "zh": "游泳是他最喜歡的娛樂方式。"
          },
          {
            "word": "reserve",
            "pos": "v./n.",
            "meaning": "預約；保留；保護區",
            "en": "We reserved a table at the restaurant.",
            "zh": "我們預訂了一張餐廳的桌子。"
          },
          {
            "word": "retail",
            "pos": "n./adj.",
            "meaning": "零售",
            "en": "This product is available at retail stores.",
            "zh": "這款產品可在零售店購買。"
          },
          {
            "word": "scholarship",
            "pos": "n.",
            "meaning": "獎學金",
            "en": "She received a full scholarship to study abroad.",
            "zh": "她獲得了全額獎學金去國外留學。"
          },
          {
            "word": "server",
            "pos": "n.",
            "meaning": "伺服器；服務員",
            "en": "The server brought our food quickly.",
            "zh": "服務員很快端上了我們的食物。"
          },
          {
            "word": "settler",
            "pos": "n.",
            "meaning": "殖民者；移民者",
            "en": "The early settlers faced many hardships.",
            "zh": "早期的殖民者面臨許多困難。"
          },
          {
            "word": "site",
            "pos": "n.",
            "meaning": "地點；網站",
            "en": "This is a historical site.",
            "zh": "這是一個歷史遺址。"
          },
          {
            "word": "software",
            "pos": "n.",
            "meaning": "軟體",
            "en": "He develops software for mobile devices.",
            "zh": "他為行動裝置開發軟體。"
          },
          {
            "word": "specific",
            "pos": "adj.",
            "meaning": "具體的；特定的",
            "en": "Can you give me a specific example?",
            "zh": "你能給我一個具體的例子嗎？"
          },
          {
            "word": "spin",
            "pos": "v./n.",
            "meaning": "旋轉",
            "en": "The dancer spun gracefully on stage.",
            "zh": "舞者在舞台上優雅地旋轉。"
          },
          {
            "word": "sponsor",
            "pos": "v./n.",
            "meaning": "贊助；贊助商",
            "en": "The company sponsored the charity event.",
            "zh": "這家公司贊助了慈善活動。"
          },
          {
            "word": "staff",
            "pos": "n.",
            "meaning": "員工；職員",
            "en": "The hospital has a large medical staff.",
            "zh": "這家醫院有一個龐大的醫療團隊。"
          },
          {
            "word": "stock",
            "pos": "n./v.",
            "meaning": "庫存；股票",
            "en": "The store is out of stock.",
            "zh": "這家店的庫存已售完。"
          },
          {
            "word": "stuff",
            "pos": "n.",
            "meaning": "東西",
            "en": "She packed all her stuff into the suitcase.",
            "zh": "她把所有東西都裝進行李箱裡。"
          },
          {
            "word": "substantially",
            "pos": "adv.",
            "meaning": "大幅度地；本質上",
            "en": "The company’s revenue has increased substantially.",
            "zh": "這家公司的收入大幅增加。"
          },
          {
            "word": "supplier",
            "pos": "n.",
            "meaning": "供應商",
            "en": "They found a new supplier for raw materials.",
            "zh": "他們找到了一個新的原材料供應商。"
          },
          {
            "word": "survey",
            "pos": "n./v.",
            "meaning": "調查",
            "en": "The company conducted a customer satisfaction survey.",
            "zh": "這家公司進行了一項顧客滿意度調查。"
          },
          {
            "word": "tease",
            "pos": "v.",
            "meaning": "取笑；戲弄",
            "en": "They teased him about his new haircut.",
            "zh": "他們取笑他的新髮型。"
          },
          {
            "word": "technical",
            "pos": "adj.",
            "meaning": "技術的",
            "en": "He has strong technical skills in programming.",
            "zh": "他在程式設計方面擁有強大的技術能力。"
          },
          {
            "word": "temperate",
            "pos": "adj.",
            "meaning": "溫和的",
            "en": "This region has a temperate climate.",
            "zh": "這個地區有溫和的氣候。"
          },
          {
            "word": "tourist",
            "pos": "n.",
            "meaning": "遊客",
            "en": "Many tourists visit Paris every year.",
            "zh": "每年都有許多遊客造訪巴黎。"
          },
          {
            "word": "tournament",
            "pos": "n.",
            "meaning": "錦標賽",
            "en": "He won first place in the tennis tournament.",
            "zh": "他在網球錦標賽中獲得第一名。"
          },
          {
            "word": "treaty",
            "pos": "n.",
            "meaning": "條約",
            "en": "The two countries signed a peace treaty.",
            "zh": "這兩個國家簽署了一項和平條約。"
          },
          {
            "word": "tricky",
            "pos": "adj.",
            "meaning": "棘手的；難對付的",
            "en": "The math problem was quite tricky.",
            "zh": "這道數學題相當棘手。"
          },
          {
            "word": "united",
            "pos": "adj.",
            "meaning": "團結的；聯合的",
            "en": "They worked as a united team.",
            "zh": "他們作為一個團結的團隊工作。"
          },
          {
            "word": "version",
            "pos": "n.",
            "meaning": "版本",
            "en": "I have the latest version of the software.",
            "zh": "我擁有這款軟體的最新版本。"
          },
          {
            "word": "volleyball",
            "pos": "n.",
            "meaning": "排球",
            "en": "She plays volleyball every weekend.",
            "zh": "她每個週末都打排球。"
          },
          {
            "word": "website",
            "pos": "n.",
            "meaning": "網站",
            "en": "You can find more details on their website.",
            "zh": "你可以在他們的網站上找到更多細節。"
          },
          {
            "word": "workout",
            "pos": "n.",
            "meaning": "鍛煉；運動",
            "en": "He does a one-hour workout every day.",
            "zh": "他每天進行一個小時的鍛煉。"
          },
          {
            "word": "yoga",
            "pos": "n.",
            "meaning": "瑜伽",
            "en": "She practices yoga to relax.",
            "zh": "她練習瑜伽來放鬆身心。"
          }
        ]
      }
    ]
  },
  {
    "title": "Language Form & Meaning",
    "units": [
      {
        "id": 1,
        "name": "LFM Grammar",
        "words": [
          {
            "word": "academic",
            "pos": "學術的；學者",
            "meaning": "adj./n.",
            "en": "She has an excellent academic record.",
            "zh": "她有優秀的學術成績。"
          },
          {
            "word": "achieve",
            "pos": "達成；實現",
            "meaning": "v.",
            "en": "He worked hard to achieve success.",
            "zh": "他努力工作以獲得成功。"
          },
          {
            "word": "additional",
            "pos": "額外的；附加的",
            "meaning": "adj.",
            "en": "We need additional information.",
            "zh": "我們需要額外的資訊。"
          },
          {
            "word": "adjectival clause",
            "pos": "形容詞子句",
            "meaning": "n.",
            "en": "\"The book that I bought is interesting\" contains an adjectival clause.",
            "zh": "“我買的那本書很有趣” 包含一個形容詞子句。"
          },
          {
            "word": "adverbial clause",
            "pos": "副詞子句",
            "meaning": "n.",
            "en": "\"I stayed home because it was raining\" contains an adverbial clause.",
            "zh": "“因為下雨，所以我待在家” 包含一個副詞子句。"
          },
          {
            "word": "advise",
            "pos": "建議",
            "meaning": "v.",
            "en": "The teacher advised him to study harder.",
            "zh": "老師建議他更努力學習。"
          },
          {
            "word": "afford",
            "pos": "負擔得起",
            "meaning": "v.",
            "en": "I can’t afford a new car.",
            "zh": "我買不起新車。"
          },
          {
            "word": "ambulance",
            "pos": "救護車",
            "meaning": "n.",
            "en": "The ambulance arrived quickly.",
            "zh": "救護車很快就到了。"
          },
          {
            "word": "applicable",
            "pos": "適用的",
            "meaning": "adj.",
            "en": "This rule is not applicable to everyone.",
            "zh": "這條規則不適用於所有人。"
          },
          {
            "word": "application",
            "pos": "申請；應用",
            "meaning": "n.",
            "en": "His job application was approved.",
            "zh": "他的工作申請被批准了。"
          },
          {
            "word": "appoint",
            "pos": "任命；指定",
            "meaning": "v.",
            "en": "She was appointed as the new manager.",
            "zh": "她被任命為新經理。"
          },
          {
            "word": "assignment",
            "pos": "作業；任務",
            "meaning": "n.",
            "en": "We have a math assignment due tomorrow.",
            "zh": "我們有一份數學作業明天要交。"
          },
          {
            "word": "auxiliary",
            "pos": "輔助的；助動詞",
            "meaning": "adj./n.",
            "en": "\"Be\" is an auxiliary verb in passive sentences.",
            "zh": "“Be” 是被動句中的助動詞。"
          },
          {
            "word": "await",
            "pos": "等候",
            "meaning": "v.",
            "en": "The guests awaited the bride’s arrival.",
            "zh": "賓客們等待新娘的到來。"
          },
          {
            "word": "biology",
            "pos": "生物學",
            "meaning": "n.",
            "en": "She is studying biology at university.",
            "zh": "她在大學學習生物學。"
          },
          {
            "word": "bride",
            "pos": "新娘",
            "meaning": "n.",
            "en": "The bride looked beautiful at the wedding.",
            "zh": "新娘在婚禮上看起來很美麗。"
          },
          {
            "word": "broke",
            "pos": "破產的；沒錢的",
            "meaning": "adj.",
            "en": "I can’t go shopping, I’m broke.",
            "zh": "我沒錢了，不能去購物。"
          },
          {
            "word": "campus",
            "pos": "校園",
            "meaning": "n.",
            "en": "The university has a beautiful campus.",
            "zh": "這所大學有一座美麗的校園。"
          },
          {
            "word": "category",
            "pos": "類別",
            "meaning": "n.",
            "en": "This book falls into the fiction category.",
            "zh": "這本書屬於小說類別。"
          },
          {
            "word": "chairman",
            "pos": "主席",
            "meaning": "n.",
            "en": "He is the chairman of the committee.",
            "zh": "他是委員會的主席。"
          },
          {
            "word": "cinema",
            "pos": "電影院",
            "meaning": "n.",
            "en": "We went to the cinema to watch a movie.",
            "zh": "我們去電影院看電影。"
          },
          {
            "word": "clause",
            "pos": "子句",
            "meaning": "n.",
            "en": "The sentence contains a relative clause.",
            "zh": "這句話包含一個關係子句。"
          },
          {
            "word": "collapse",
            "pos": "倒塌；崩潰",
            "meaning": "v./n.",
            "en": "The building collapsed after the earthquake.",
            "zh": "這座建築在地震後倒塌了。"
          },
          {
            "word": "commodity",
            "pos": "商品",
            "meaning": "n.",
            "en": "Rice is an important commodity in many countries.",
            "zh": "米是許多國家的重要商品。"
          },
          {
            "word": "comparative",
            "pos": "比較的",
            "meaning": "adj.",
            "en": "This is a comparative study of different cultures.",
            "zh": "這是一項不同文化的比較研究。"
          },
          {
            "word": "comparison",
            "pos": "比較",
            "meaning": "n.",
            "en": "He made a comparison between two brands.",
            "zh": "他對兩個品牌進行了比較。"
          },
          {
            "word": "compel",
            "pos": "強迫",
            "meaning": "v.",
            "en": "The law compels drivers to wear seat belts.",
            "zh": "法律強制司機繫安全帶。"
          },
          {
            "word": "complement",
            "pos": "補足；補語",
            "meaning": "v./n.",
            "en": "The red wine complements the meal perfectly.",
            "zh": "紅酒與這頓飯完美搭配。"
          },
          {
            "word": "composition",
            "pos": "作文；組成",
            "meaning": "n.",
            "en": "He wrote a composition about his summer vacation.",
            "zh": "他寫了一篇關於暑假的作文。"
          },
          {
            "word": "compound",
            "pos": "複合物；複合的",
            "meaning": "n./adj.",
            "en": "\"Greenhouse\" is a compound noun.",
            "zh": "“Greenhouse” 是一個複合名詞。"
          },
          {
            "word": "concept",
            "pos": "概念",
            "meaning": "n.",
            "en": "The concept of democracy is important in politics.",
            "zh": "民主的概念在政治中很重要。"
          },
          {
            "word": "conditional",
            "pos": "條件的",
            "meaning": "adj.",
            "en": "\"If it rains, we will stay home\" is a conditional sentence.",
            "zh": "“如果下雨，我們會待在家” 是一個條件句。"
          },
          {
            "word": "confused",
            "pos": "困惑的",
            "meaning": "adj.",
            "en": "I was confused by his explanation.",
            "zh": "他的解釋讓我感到困惑。"
          },
          {
            "word": "confusing",
            "pos": "令人困惑的",
            "meaning": "adj.",
            "en": "The instructions were very confusing.",
            "zh": "這些指示讓人很困惑。"
          },
          {
            "word": "conjunction",
            "pos": "連接詞",
            "meaning": "n.",
            "en": "\"And\" is a coordinating conjunction.",
            "zh": "“And” 是一個並列連接詞。"
          },
          {
            "word": "conjunctive",
            "pos": "連接的",
            "meaning": "adj.",
            "en": "The conjunctive adverb \"however\" is used to contrast ideas.",
            "zh": "連接副詞 “however” 用來對比想法。"
          },
          {
            "word": "connect",
            "pos": "連接",
            "meaning": "v.",
            "en": "The bridge connects the two cities.",
            "zh": "這座橋連接了兩座城市。"
          },
          {
            "word": "consent",
            "pos": "同意",
            "meaning": "n./v.",
            "en": "She gave her consent to the treatment.",
            "zh": "她同意接受治療。"
          },
          {
            "word": "contest",
            "pos": "比賽；競爭",
            "meaning": "n./v.",
            "en": "She won the singing contest.",
            "zh": "她贏得了歌唱比賽。"
          },
          {
            "word": "context",
            "pos": "上下文；背景",
            "meaning": "n.",
            "en": "You should read the word in context.",
            "zh": "你應該根據上下文理解這個單詞。"
          },
          {
            "word": "continent",
            "pos": "大陸",
            "meaning": "n.",
            "en": "Africa is the second-largest continent.",
            "zh": "非洲是第二大洲。"
          },
          {
            "word": "continuous",
            "pos": "連續的",
            "meaning": "adj.",
            "en": "The city has seen continuous growth in population.",
            "zh": "這座城市的人口持續增長。"
          },
          {
            "word": "convey",
            "pos": "傳達；表達",
            "meaning": "v.",
            "en": "He tried to convey his feelings through his words.",
            "zh": "他試圖透過言語表達他的感受。"
          },
          {
            "word": "countable",
            "pos": "可數的",
            "meaning": "adj.",
            "en": "\"Apple\" is a countable noun.",
            "zh": "“Apple” 是可數名詞。"
          },
          {
            "word": "crash",
            "pos": "撞擊；崩潰",
            "meaning": "v./n.",
            "en": "The computer crashed suddenly.",
            "zh": "電腦突然當機了。"
          },
          {
            "word": "cross",
            "pos": "穿越；交叉",
            "meaning": "v./n.",
            "en": "She crossed the street carefully.",
            "zh": "她小心地過馬路。"
          },
          {
            "word": "custody",
            "pos": "監護權；拘留",
            "meaning": "n.",
            "en": "She has custody of her two children.",
            "zh": "她擁有兩個孩子的監護權。"
          },
          {
            "word": "dare",
            "pos": "敢於",
            "meaning": "v.",
            "en": "He didn’t dare to ask her out.",
            "zh": "他不敢約她出去。"
          },
          {
            "word": "democracy",
            "pos": "民主",
            "meaning": "n.",
            "en": "Democracy allows people to vote for their leaders.",
            "zh": "民主允許人民投票選舉領袖。"
          },
          {
            "word": "dependent",
            "pos": "依賴的",
            "meaning": "adj.",
            "en": "He is financially dependent on his parents.",
            "zh": "他在經濟上依賴父母。"
          },
          {
            "word": "dependent clause",
            "pos": "從屬子句",
            "meaning": "n.",
            "en": "\"Because she was late\" is a dependent clause.",
            "zh": "“因為她遲到了” 是一個從屬子句。"
          },
          {
            "word": "dislike",
            "pos": "不喜歡",
            "meaning": "v./n.",
            "en": "She dislikes spicy food.",
            "zh": "她不喜歡辛辣的食物。"
          },
          {
            "word": "document",
            "pos": "文件；記錄",
            "meaning": "n./v.",
            "en": "Please upload the required document.",
            "zh": "請上傳所需的文件。"
          },
          {
            "word": "eagerly",
            "pos": "渴望地；急切地",
            "meaning": "adv.",
            "en": "She eagerly waited for the results.",
            "zh": "她急切地等待結果。"
          },
          {
            "word": "element",
            "pos": "元素；成分",
            "meaning": "n.",
            "en": "Water is an essential element for life.",
            "zh": "水是生命中不可或缺的元素。"
          },
          {
            "word": "embarrass",
            "pos": "使尷尬",
            "meaning": "v.",
            "en": "His mistake embarrassed him in front of everyone.",
            "zh": "他的錯誤讓他在大家面前感到尷尬。"
          },
          {
            "word": "emergency",
            "pos": "緊急情況",
            "meaning": "n.",
            "en": "Call 911 in case of an emergency.",
            "zh": "遇到緊急情況時請撥打 911。"
          },
          {
            "word": "essential",
            "pos": "必要的；本質的",
            "meaning": "adj.",
            "en": "Fresh air is essential for good health.",
            "zh": "新鮮空氣對健康至關重要。"
          },
          {
            "word": "exhausted",
            "pos": "筋疲力盡的",
            "meaning": "adj.",
            "en": "After running, he felt completely exhausted.",
            "zh": "跑步後，他感到完全筋疲力盡。"
          },
          {
            "word": "exhausting",
            "pos": "令人筋疲力盡的",
            "meaning": "adj.",
            "en": "The long trip was exhausting.",
            "zh": "這次長途旅行讓人筋疲力盡。"
          },
          {
            "word": "explanation",
            "pos": "解釋；說明",
            "meaning": "n.",
            "en": "Can you give me an explanation for this error?",
            "zh": "你能解釋一下這個錯誤嗎？"
          },
          {
            "word": "fancy",
            "pos": "精緻的；喜愛",
            "meaning": "adj./v.",
            "en": "She wore a fancy dress to the party.",
            "zh": "她穿了一件華麗的裙子去參加派對。"
          },
          {
            "word": "forbid",
            "pos": "禁止",
            "meaning": "v.",
            "en": "Smoking is forbidden in the building.",
            "zh": "這棟建築內禁止吸菸。"
          },
          {
            "word": "forever",
            "pos": "永遠",
            "meaning": "adv.",
            "en": "I will love you forever.",
            "zh": "我會永遠愛你。"
          },
          {
            "word": "frank",
            "pos": "坦白的",
            "meaning": "adj.",
            "en": "She was frank about her feelings.",
            "zh": "她坦率地表達了自己的感受。"
          },
          {
            "word": "freezer",
            "pos": "冷凍庫",
            "meaning": "n.",
            "en": "The ice cream is in the freezer.",
            "zh": "冰淇淋在冷凍庫裡。"
          },
          {
            "word": "gas",
            "pos": "氣體；汽油",
            "meaning": "n.",
            "en": "The balloon is filled with gas.",
            "zh": "氣球裡充滿了氣體。"
          },
          {
            "word": "gerund",
            "pos": "動名詞",
            "meaning": "n.",
            "en": "In the sentence \"I enjoy swimming,\" \"swimming\" is a gerund.",
            "zh": "在句子 \"I enjoy swimming\" 中，\"swimming\" 是動名詞。"
          },
          {
            "word": "guilty",
            "pos": "有罪的；內疚的",
            "meaning": "adj.",
            "en": "He felt guilty about lying to his friend.",
            "zh": "他對於對朋友撒謊感到內疚。"
          },
          {
            "word": "identify",
            "pos": "辨識；確認",
            "meaning": "v.",
            "en": "The police identified the suspect.",
            "zh": "警方確認了嫌疑人。"
          },
          {
            "word": "infinitive",
            "pos": "不定詞",
            "meaning": "n.",
            "en": "\"To study\" is an infinitive phrase.",
            "zh": "\"To study\" 是一個不定詞片語。"
          },
          {
            "word": "injure",
            "pos": "受傷",
            "meaning": "v.",
            "en": "He injured his leg while playing soccer.",
            "zh": "他在踢足球時弄傷了腿。"
          },
          {
            "word": "instruct",
            "pos": "指導；命令",
            "meaning": "v.",
            "en": "The teacher instructed the students to read the chapter.",
            "zh": "老師指導學生閱讀這一章。"
          },
          {
            "word": "intelligent",
            "pos": "聰明的",
            "meaning": "adj.",
            "en": "She is an intelligent student.",
            "zh": "她是一位聰明的學生。"
          },
          {
            "word": "intend",
            "pos": "打算；意圖",
            "meaning": "v.",
            "en": "He intends to travel next summer.",
            "zh": "他打算明年夏天去旅行。"
          },
          {
            "word": "interrupt",
            "pos": "打斷；中斷",
            "meaning": "v.",
            "en": "Please don’t interrupt me while I’m speaking.",
            "zh": "當我說話時請不要打斷我。"
          },
          {
            "word": "intervention",
            "pos": "干預；介入",
            "meaning": "n.",
            "en": "The doctor’s intervention saved the patient’s life.",
            "zh": "醫生的介入挽救了病人的生命。"
          },
          {
            "word": "intimate",
            "pos": "親密的",
            "meaning": "adj.",
            "en": "They have an intimate friendship.",
            "zh": "他們有著親密的友誼。"
          },
          {
            "word": "intransitive",
            "pos": "不及物的",
            "meaning": "adj.",
            "en": "\"Sleep\" is an intransitive verb.",
            "zh": "\"Sleep\" 是一個不及物動詞。"
          },
          {
            "word": "inverted sentence",
            "pos": "倒裝句",
            "meaning": "n.",
            "en": "\"Never have I seen such a thing\" is an inverted sentence.",
            "zh": "\"Never have I seen such a thing\" 是一個倒裝句。"
          },
          {
            "word": "investigate",
            "pos": "調查",
            "meaning": "v.",
            "en": "The police are investigating the crime.",
            "zh": "警方正在調查這起犯罪案件。"
          },
          {
            "word": "involve",
            "pos": "涉及；包含",
            "meaning": "v.",
            "en": "The project involves teamwork.",
            "zh": "這個專案涉及團隊合作。"
          },
          {
            "word": "jade",
            "pos": "玉石",
            "meaning": "n.",
            "en": "She wore a jade necklace.",
            "zh": "她戴了一條玉石項鍊。"
          },
          {
            "word": "jungle",
            "pos": "叢林",
            "meaning": "n.",
            "en": "They explored the jungle.",
            "zh": "他們探索了叢林。"
          },
          {
            "word": "junior",
            "pos": "年幼的；資歷較淺者",
            "meaning": "adj./n.",
            "en": "He is a junior employee at the company.",
            "zh": "他是這家公司的資淺員工。"
          },
          {
            "word": "kidnap",
            "pos": "綁架",
            "meaning": "v.",
            "en": "The criminals kidnapped the businessman.",
            "zh": "罪犯綁架了一名商人。"
          },
          {
            "word": "lately",
            "pos": "最近",
            "meaning": "adv.",
            "en": "Have you seen him lately?",
            "zh": "你最近有見過他嗎？"
          },
          {
            "word": "layer",
            "pos": "層",
            "meaning": "n.",
            "en": "There is a thin layer of dust on the table.",
            "zh": "桌子上有一層薄薄的灰塵。"
          },
          {
            "word": "lock",
            "pos": "鎖住；鎖",
            "meaning": "v./n.",
            "en": "Please lock the door before leaving.",
            "zh": "離開前請鎖上門。"
          },
          {
            "word": "lung",
            "pos": "肺",
            "meaning": "n.",
            "en": "Smoking damages the lungs.",
            "zh": "吸菸會損害肺部。"
          },
          {
            "word": "marker",
            "pos": "記號筆；標記",
            "meaning": "n.",
            "en": "She used a red marker to highlight the words.",
            "zh": "她用紅色記號筆標出這些單詞。"
          },
          {
            "word": "mental",
            "pos": "心理的；精神的",
            "meaning": "adj.",
            "en": "Mental health is important.",
            "zh": "心理健康很重要。"
          },
          {
            "word": "minus",
            "pos": "減去；負的",
            "meaning": "prep./adj./n.",
            "en": "Five minus three is two.",
            "zh": "五減三等於二。"
          },
          {
            "word": "miser",
            "pos": "吝嗇鬼",
            "meaning": "n.",
            "en": "The old man was a miser who never spent money.",
            "zh": "這位老人是個吝嗇鬼，從不花錢。"
          },
          {
            "word": "missing",
            "pos": "失蹤的；缺少的",
            "meaning": "adj.",
            "en": "The police are searching for the missing child.",
            "zh": "警方正在尋找失蹤的孩子。"
          },
          {
            "word": "modal",
            "pos": "情態的",
            "meaning": "adj.",
            "en": "\"Can\" is a modal verb.",
            "zh": "“Can” 是一個情態動詞。"
          },
          {
            "word": "modifier",
            "pos": "修飾語",
            "meaning": "n.",
            "en": "In \"very tall,\" \"very\" is a modifier.",
            "zh": "在 \"very tall\" 中，\"very\" 是修飾語。"
          },
          {
            "word": "modify",
            "pos": "修改；修飾",
            "meaning": "v.",
            "en": "She modified her essay before submitting it.",
            "zh": "她在提交之前修改了她的文章。"
          },
          {
            "word": "multiple",
            "pos": "多重的",
            "meaning": "adj.",
            "en": "He has multiple responsibilities.",
            "zh": "他有多重責任。"
          },
          {
            "word": "mystery",
            "pos": "神秘；謎",
            "meaning": "n.",
            "en": "The case remains a mystery.",
            "zh": "這起案件仍然是一個謎。"
          },
          {
            "word": "nap",
            "pos": "小睡",
            "meaning": "n./v.",
            "en": "He took a short nap after lunch.",
            "zh": "他在午飯後小睡了一會兒。"
          },
          {
            "word": "neglect",
            "pos": "忽視；疏忽",
            "meaning": "v.",
            "en": "He neglected his health for years.",
            "zh": "他多年來忽視了自己的健康。"
          },
          {
            "word": "nominal clause",
            "pos": "名詞子句",
            "meaning": "n.",
            "en": "\"What he said is true\" contains a nominal clause.",
            "zh": "“他說的是真的” 包含一個名詞子句。"
          },
          {
            "word": "normal",
            "pos": "正常的",
            "meaning": "adj.",
            "en": "It is normal to feel nervous before a test.",
            "zh": "考試前感到緊張是正常的。"
          },
          {
            "word": "oblige",
            "pos": "迫使；使有義務",
            "meaning": "v.",
            "en": "The law obliges citizens to pay taxes.",
            "zh": "法律規定公民必須繳稅。"
          },
          {
            "word": "occasional",
            "pos": "偶爾的",
            "meaning": "adj.",
            "en": "She enjoys an occasional cup of coffee.",
            "zh": "她偶爾喝一杯咖啡。"
          },
          {
            "word": "operation",
            "pos": "操作；手術",
            "meaning": "n.",
            "en": "The patient underwent a heart operation.",
            "zh": "這名病人接受了一次心臟手術。"
          },
          {
            "word": "otherwise",
            "pos": "否則；不同地",
            "meaning": "adv.",
            "en": "You must study hard; otherwise, you will fail.",
            "zh": "你必須努力學習，否則你會失敗。"
          },
          {
            "word": "participle",
            "pos": "分詞",
            "meaning": "n.",
            "en": "\"Running\" in \"a running man\" is a present participle.",
            "zh": "“running man” 中的 \"running\" 是現在分詞。"
          },
          {
            "word": "passive",
            "pos": "被動的",
            "meaning": "adj.",
            "en": "The sentence \"The book was written by her\" is in the passive voice.",
            "zh": "“這本書是她寫的” 是被動語態。"
          },
          {
            "word": "permit",
            "pos": "允許；許可證",
            "meaning": "v./n.",
            "en": "Smoking is not permitted in the building.",
            "zh": "這棟建築內不允許吸煙。"
          },
          {
            "word": "physical",
            "pos": "身體的；物理的",
            "meaning": "adj.",
            "en": "Regular exercise improves physical health.",
            "zh": "規律運動有助於身體健康。"
          },
          {
            "word": "pleasantly",
            "pos": "愉快地",
            "meaning": "adv.",
            "en": "She was pleasantly surprised by the gift.",
            "zh": "她對這份禮物感到驚喜。"
          },
          {
            "word": "plural",
            "pos": "複數的；複數",
            "meaning": "adj./n.",
            "en": "\"Cats\" is the plural form of \"cat.\"",
            "zh": "“cats” 是 “cat” 的複數形式。"
          },
          {
            "word": "postpone",
            "pos": "延期",
            "meaning": "v.",
            "en": "The meeting was postponed due to bad weather.",
            "zh": "會議因為天氣惡劣而延期。"
          },
          {
            "word": "predicate",
            "pos": "謂語",
            "meaning": "n.",
            "en": "\"She sings beautifully\" has \"sings beautifully\" as its predicate.",
            "zh": "“她唱得很好” 中 \"sings beautifully\" 是謂語。"
          },
          {
            "word": "preposition",
            "pos": "介詞",
            "meaning": "n.",
            "en": "\"On\" in \"on the table\" is a preposition.",
            "zh": "“on the table” 中的 \"on\" 是介詞。"
          },
          {
            "word": "pretend",
            "pos": "假裝",
            "meaning": "v.",
            "en": "He pretended to be asleep.",
            "zh": "他假裝睡著了。"
          },
          {
            "word": "previous",
            "pos": "先前的",
            "meaning": "adj.",
            "en": "I met him on a previous occasion.",
            "zh": "我曾經在之前的一次場合見過他。"
          },
          {
            "word": "process",
            "pos": "過程；處理",
            "meaning": "n./v.",
            "en": "The application is still being processed.",
            "zh": "申請仍在處理中。"
          },
          {
            "word": "quake",
            "pos": "震動；地震",
            "meaning": "v./n.",
            "en": "The ground quaked during the earthquake.",
            "zh": "地震時地面震動了。"
          },
          {
            "word": "qualify",
            "pos": "使具資格",
            "meaning": "v.",
            "en": "He qualified for the final round.",
            "zh": "他成功晉級決賽。"
          },
          {
            "word": "ravishingly",
            "pos": "令人陶醉地",
            "meaning": "adv.",
            "en": "She looked ravishingly beautiful in her wedding dress.",
            "zh": "她穿上婚紗後美得令人陶醉。"
          },
          {
            "word": "recommend",
            "pos": "推薦",
            "meaning": "v.",
            "en": "I recommend this restaurant.",
            "zh": "我推薦這家餐廳。"
          },
          {
            "word": "refer",
            "pos": "提及；參考",
            "meaning": "v.",
            "en": "Please refer to the manual for instructions.",
            "zh": "請參閱手冊以獲取使用說明。"
          },
          {
            "word": "regarding",
            "pos": "關於",
            "meaning": "prep.",
            "en": "I have a question regarding your proposal.",
            "zh": "我對你的提案有一個問題。"
          },
          {
            "word": "register",
            "pos": "登記；註冊",
            "meaning": "v./n.",
            "en": "You must register before the event.",
            "zh": "你必須在活動前註冊。"
          },
          {
            "word": "regret",
            "pos": "後悔；遺憾",
            "meaning": "v./n.",
            "en": "He regrets not studying harder.",
            "zh": "他後悔沒有更努力學習。"
          },
          {
            "word": "reinforce",
            "pos": "強化",
            "meaning": "v.",
            "en": "The teacher reinforced the lesson with examples.",
            "zh": "老師用例子強化這堂課的內容。"
          },
          {
            "word": "remain",
            "pos": "保持；留下",
            "meaning": "v.",
            "en": "He remained silent during the meeting.",
            "zh": "他在會議期間保持沉默。"
          },
          {
            "word": "remind",
            "pos": "提醒",
            "meaning": "v.",
            "en": "Please remind me to call her later.",
            "zh": "請提醒我等一下打電話給她。"
          },
          {
            "word": "request",
            "pos": "請求",
            "meaning": "v./n.",
            "en": "He requested more information.",
            "zh": "他請求獲得更多資訊。"
          },
          {
            "word": "resist",
            "pos": "抵抗",
            "meaning": "v.",
            "en": "She couldn’t resist buying the dress.",
            "zh": "她無法抗拒買下這件裙子。"
          },
          {
            "word": "response",
            "pos": "回應",
            "meaning": "n.",
            "en": "He gave a quick response to the question.",
            "zh": "他迅速回答了這個問題。"
          },
          {
            "word": "risk",
            "pos": "風險；冒險",
            "meaning": "n./v.",
            "en": "He took a big risk by investing in that company.",
            "zh": "他投資那家公司冒了很大的風險。"
          },
          {
            "word": "shortcoming",
            "pos": "缺點",
            "meaning": "n.",
            "en": "Everyone has shortcomings.",
            "zh": "每個人都有缺點。"
          },
          {
            "word": "shortly",
            "pos": "很快地",
            "meaning": "adv.",
            "en": "He will arrive shortly.",
            "zh": "他很快就會到達。"
          },
          {
            "word": "singular",
            "pos": "單數的；單數",
            "meaning": "adj./n.",
            "en": "\"Dog\" is the singular form of \"dogs.\"",
            "zh": "“dog” 是 “dogs” 的單數形式。"
          },
          {
            "word": "situation",
            "pos": "情況",
            "meaning": "n.",
            "en": "The situation is under control.",
            "zh": "情況在掌控之中。"
          },
          {
            "word": "specific",
            "pos": "具體的",
            "meaning": "adj.",
            "en": "Can you give me a specific example?",
            "zh": "你能給我一個具體的例子嗎？"
          },
          {
            "word": "stare",
            "pos": "凝視",
            "meaning": "v.",
            "en": "He stared at the painting for a long time.",
            "zh": "他凝視著這幅畫很久。"
          },
          {
            "word": "steal",
            "pos": "偷竊",
            "meaning": "v.",
            "en": "Someone stole my wallet.",
            "zh": "有人偷了我的錢包。"
          },
          {
            "word": "stimuli",
            "pos": "刺激；刺激物",
            "meaning": "n. (pl.)",
            "en": "The brain responds to different stimuli.",
            "zh": "大腦對不同的刺激做出反應。"
          },
          {
            "word": "structure",
            "pos": "結構",
            "meaning": "n.",
            "en": "The structure of the building is strong.",
            "zh": "這棟建築的結構很堅固。"
          },
          {
            "word": "subordinate clause",
            "pos": "從屬子句",
            "meaning": "n.",
            "en": "\"Because she was late\" is a subordinate clause.",
            "zh": "“因為她遲到了” 是一個從屬子句。"
          },
          {
            "word": "subordinator",
            "pos": "從屬連接詞",
            "meaning": "n.",
            "en": "\"Although\" is a subordinator in the sentence.",
            "zh": "在句子中，“although” 是從屬連接詞。"
          },
          {
            "word": "sue",
            "pos": "起訴",
            "meaning": "v.",
            "en": "She sued the company for unfair treatment.",
            "zh": "她因不公平待遇起訴公司。"
          },
          {
            "word": "suffering",
            "pos": "痛苦",
            "meaning": "n.",
            "en": "War causes a lot of suffering.",
            "zh": "戰爭帶來了很多痛苦。"
          },
          {
            "word": "suitcase",
            "pos": "行李箱",
            "meaning": "n.",
            "en": "She packed her suitcase for the trip.",
            "zh": "她為這次旅行打包了行李箱。"
          },
          {
            "word": "temperate",
            "pos": "溫和的（氣候）",
            "meaning": "adj.",
            "en": "This region has a temperate climate.",
            "zh": "這個地區的氣候溫和。"
          },
          {
            "word": "temporal",
            "pos": "時間的；暫時的",
            "meaning": "adj.",
            "en": "The issue is of temporal importance.",
            "zh": "這個問題具有暫時的重要性。"
          },
          {
            "word": "temporarily",
            "pos": "暫時地",
            "meaning": "adv.",
            "en": "The store is temporarily closed for renovation.",
            "zh": "這家店因裝修而暫時關閉。"
          },
          {
            "word": "temporary",
            "pos": "臨時的",
            "meaning": "adj.",
            "en": "He found a temporary job for the summer.",
            "zh": "他在暑假找到了一份臨時工作。"
          },
          {
            "word": "tempt",
            "pos": "引誘；誘惑",
            "meaning": "v.",
            "en": "The delicious smell tempted him to eat more.",
            "zh": "美味的香氣誘惑他吃得更多。"
          },
          {
            "word": "tend",
            "pos": "傾向於；照顧",
            "meaning": "v.",
            "en": "She tends to be late for meetings.",
            "zh": "她開會時往往會遲到。"
          },
          {
            "word": "tense",
            "pos": "時態；緊張的",
            "meaning": "n./adj.",
            "en": "The atmosphere in the room was very tense.",
            "zh": "房間裡的氣氛非常緊張。"
          },
          {
            "word": "terminal",
            "pos": "航站；終點的；末期的",
            "meaning": "n./adj.",
            "en": "The bus will stop at the terminal.",
            "zh": "公車將停在終點站。"
          },
          {
            "word": "timely",
            "pos": "及時的；適時地",
            "meaning": "adj./adv.",
            "en": "His timely arrival prevented a disaster.",
            "zh": "他的及時到達避免了一場災難。"
          },
          {
            "word": "tower",
            "pos": "塔；高聳",
            "meaning": "n./v.",
            "en": "The Eiffel Tower is a famous landmark.",
            "zh": "艾菲爾鐵塔是一個著名的地標。"
          },
          {
            "word": "transitive",
            "pos": "及物的（動詞）",
            "meaning": "adj.",
            "en": "\"Eat\" is a transitive verb because it takes an object.",
            "zh": "\"Eat\" 是及物動詞，因為它需要一個受詞。"
          },
          {
            "word": "vary",
            "pos": "變化；不同",
            "meaning": "v.",
            "en": "Prices vary depending on the season.",
            "zh": "價格根據季節而變動。"
          },
          {
            "word": "warn",
            "pos": "警告",
            "meaning": "v.",
            "en": "The teacher warned him not to be late again.",
            "zh": "老師警告他不要再遲到。"
          }
        ]
      },
      {
        "id": 2,
        "name": "LFM to Exceed",
        "words": [
          {
            "word": "absorb",
            "pos": "吸收",
            "meaning": "v.",
            "en": "Plants absorb sunlight for photosynthesis.",
            "zh": "植物吸收陽光進行光合作用。"
          },
          {
            "word": "adjustment",
            "pos": "調整",
            "meaning": "n.",
            "en": "He made a slight adjustment to the plan.",
            "zh": "他對計畫做了一點調整。"
          },
          {
            "word": "amphibian",
            "pos": "兩棲動物",
            "meaning": "n.",
            "en": "Frogs and salamanders are amphibians.",
            "zh": "青蛙和蠑螈是兩棲動物。"
          },
          {
            "word": "announcement",
            "pos": "公告；聲明",
            "meaning": "n.",
            "en": "The principal made an important announcement.",
            "zh": "校長發表了一項重要公告。"
          },
          {
            "word": "approach",
            "pos": "靠近；方法",
            "meaning": "v./n.",
            "en": "We need a new approach to solve this problem.",
            "zh": "我們需要一種新的方法來解決這個問題。"
          },
          {
            "word": "assignment",
            "pos": "作業；任務",
            "meaning": "n.",
            "en": "The teacher gave us a writing assignment.",
            "zh": "老師給了我們一個寫作作業。"
          },
          {
            "word": "awareness",
            "pos": "意識；認識",
            "meaning": "n.",
            "en": "The campaign raises awareness about climate change.",
            "zh": "這個活動提高了人們對氣候變遷的認識。"
          },
          {
            "word": "benefit",
            "pos": "好處；受益",
            "meaning": "n./v.",
            "en": "Exercising regularly benefits your health.",
            "zh": "規律運動對健康有益。"
          },
          {
            "word": "boost",
            "pos": "提升；增強",
            "meaning": "v./n.",
            "en": "Drinking coffee can boost energy levels.",
            "zh": "喝咖啡可以提高能量水平。"
          },
          {
            "word": "breath",
            "pos": "呼吸",
            "meaning": "n.",
            "en": "Take a deep breath before speaking.",
            "zh": "在說話前深呼吸。"
          },
          {
            "word": "breathe",
            "pos": "呼吸",
            "meaning": "v.",
            "en": "He could barely breathe after running.",
            "zh": "跑完後他幾乎喘不過氣來。"
          },
          {
            "word": "campus",
            "pos": "校園",
            "meaning": "n.",
            "en": "Our campus is full of trees.",
            "zh": "我們的校園裡到處都是樹。"
          },
          {
            "word": "capable",
            "pos": "有能力的",
            "meaning": "adj.",
            "en": "She is capable of solving difficult problems.",
            "zh": "她有能力解決困難的問題。"
          },
          {
            "word": "career",
            "pos": "職業；生涯",
            "meaning": "n.",
            "en": "He is planning a career in medicine.",
            "zh": "他計劃從事醫學相關的職業。"
          },
          {
            "word": "catch up",
            "pos": "追上；趕上",
            "meaning": "ph.",
            "en": "He studied hard to catch up with his classmates.",
            "zh": "他努力學習以趕上同學。"
          },
          {
            "word": "challenge",
            "pos": "挑戰",
            "meaning": "n./v.",
            "en": "Learning a new language is a challenge.",
            "zh": "學習一門新語言是一種挑戰。"
          },
          {
            "word": "coach",
            "pos": "教練",
            "meaning": "n.",
            "en": "The coach trained the team every day.",
            "zh": "教練每天都訓練球隊。"
          },
          {
            "word": "commitment",
            "pos": "承諾；投入",
            "meaning": "n.",
            "en": "Her commitment to her work is impressive.",
            "zh": "她對工作的投入令人印象深刻。"
          },
          {
            "word": "communication",
            "pos": "溝通",
            "meaning": "n.",
            "en": "Good communication is key to a healthy relationship.",
            "zh": "良好的溝通對健康的人際關係至關重要。"
          },
          {
            "word": "compete",
            "pos": "競爭",
            "meaning": "v.",
            "en": "Athletes compete for medals in the Olympics.",
            "zh": "運動員在奧運上競爭獎牌。"
          },
          {
            "word": "consequently",
            "pos": "因此；結果",
            "meaning": "adv.",
            "en": "He didn’t study, so consequently, he failed the test.",
            "zh": "他沒有學習，因此考試不及格。"
          },
          {
            "word": "contend",
            "pos": "競爭；爭奪",
            "meaning": "v.",
            "en": "Many athletes contend for the championship.",
            "zh": "許多運動員爭奪冠軍。"
          },
          {
            "word": "content",
            "pos": "內容；滿足的",
            "meaning": "n./adj.",
            "en": "The content of the book is very interesting.",
            "zh": "這本書的內容非常有趣。"
          },
          {
            "word": "creature",
            "pos": "生物",
            "meaning": "n.",
            "en": "The ocean is home to many strange creatures.",
            "zh": "海洋裡住著許多奇怪的生物。"
          },
          {
            "word": "delicate",
            "pos": "精緻的；易碎的",
            "meaning": "adj.",
            "en": "This vase is very delicate, so handle it with care.",
            "zh": "這個花瓶非常易碎，請小心處理。"
          },
          {
            "word": "drastic",
            "pos": "劇烈的；極端的",
            "meaning": "adj.",
            "en": "The company made drastic changes to its policies.",
            "zh": "這家公司對政策做出了重大變更。"
          },
          {
            "word": "engage",
            "pos": "參與；吸引",
            "meaning": "v.",
            "en": "The teacher engaged the students in the discussion.",
            "zh": "老師讓學生參與討論。"
          },
          {
            "word": "entertainment",
            "pos": "娛樂",
            "meaning": "n.",
            "en": "Movies and music are popular forms of entertainment.",
            "zh": "電影和音樂是受歡迎的娛樂方式。"
          },
          {
            "word": "extension",
            "pos": "延長；擴展",
            "meaning": "n.",
            "en": "She requested an extension for her project.",
            "zh": "她要求延長專案期限。"
          },
          {
            "word": "extinct",
            "pos": "絕種的",
            "meaning": "adj.",
            "en": "Dinosaurs have been extinct for millions of years.",
            "zh": "恐龍已經絕種了數百萬年。"
          },
          {
            "word": "faculty",
            "pos": "教職員；才能",
            "meaning": "n.",
            "en": "He is a faculty member at the university.",
            "zh": "他是這所大學的教職員之一。"
          },
          {
            "word": "feedback",
            "pos": "反饋",
            "meaning": "n.",
            "en": "She gave me valuable feedback on my essay.",
            "zh": "她對我的文章給出了有價值的反饋。"
          },
          {
            "word": "fixed mindset",
            "pos": "固定思維模式",
            "meaning": "n.",
            "en": "A fixed mindset can limit personal growth.",
            "zh": "固定思維模式可能限制個人成長。"
          },
          {
            "word": "flip",
            "pos": "翻轉",
            "meaning": "v.",
            "en": "He flipped the page quickly.",
            "zh": "他快速翻過這一頁。"
          },
          {
            "word": "frighten",
            "pos": "使害怕",
            "meaning": "v.",
            "en": "The loud noise frightened the baby.",
            "zh": "巨大的噪音嚇到了嬰兒。"
          },
          {
            "word": "futuristic",
            "pos": "未來的；前衛的",
            "meaning": "adj.",
            "en": "The building has a futuristic design.",
            "zh": "這棟建築有未來感的設計。"
          },
          {
            "word": "gill",
            "pos": "魚鰓",
            "meaning": "n.",
            "en": "Fish use their gills to breathe underwater.",
            "zh": "魚用鰓在水中呼吸。"
          },
          {
            "word": "gladiator",
            "pos": "角鬥士",
            "meaning": "n.",
            "en": "Gladiators fought in arenas in ancient Rome.",
            "zh": "角鬥士在古羅馬的競技場上戰鬥。"
          },
          {
            "word": "growth mindset",
            "pos": "成長型思維",
            "meaning": "n.",
            "en": "A growth mindset helps people develop new skills.",
            "zh": "成長型思維有助於人們發展新技能。"
          },
          {
            "word": "habitat",
            "pos": "棲息地",
            "meaning": "n.",
            "en": "The rainforest is the habitat of many species.",
            "zh": "熱帶雨林是許多物種的棲息地。"
          },
          {
            "word": "hesitate",
            "pos": "猶豫",
            "meaning": "v.",
            "en": "She hesitated before answering the question.",
            "zh": "她在回答問題前猶豫了一下。"
          },
          {
            "word": "hunger",
            "pos": "飢餓",
            "meaning": "n.",
            "en": "Many people suffer from hunger worldwide.",
            "zh": "全球許多人都遭受飢餓之苦。"
          },
          {
            "word": "individual",
            "pos": "個人；個別的",
            "meaning": "n./adj.",
            "en": "Every individual has unique talents.",
            "zh": "每個人都有獨特的才能。"
          },
          {
            "word": "inspiration",
            "pos": "靈感；啟發",
            "meaning": "n.",
            "en": "The artist found inspiration in nature.",
            "zh": "這位藝術家從大自然中獲得靈感。"
          },
          {
            "word": "instructor",
            "pos": "指導員；講師",
            "meaning": "n.",
            "en": "The yoga instructor is very patient.",
            "zh": "瑜伽教練非常有耐心。"
          },
          {
            "word": "intelligence",
            "pos": "智慧；情報",
            "meaning": "n.",
            "en": "Artificial intelligence is changing the world.",
            "zh": "人工智慧正在改變世界。"
          },
          {
            "word": "invasion",
            "pos": "入侵",
            "meaning": "n.",
            "en": "The country defended itself against the invasion.",
            "zh": "這個國家抵禦了入侵。"
          },
          {
            "word": "issue",
            "pos": "問題；議題",
            "meaning": "n.",
            "en": "Climate change is a serious issue.",
            "zh": "氣候變遷是一個嚴重的問題。"
          },
          {
            "word": "labyrinth",
            "pos": "迷宮",
            "meaning": "n.",
            "en": "He got lost in the labyrinth.",
            "zh": "他在迷宮裡迷路了。"
          },
          {
            "word": "larvae",
            "pos": "幼蟲",
            "meaning": "n. (pl.)",
            "en": "Mosquito larvae live in water.",
            "zh": "蚊子的幼蟲生活在水中。"
          },
          {
            "word": "lung",
            "pos": "肺",
            "meaning": "n.",
            "en": "Smoking damages the lungs.",
            "zh": "吸菸會損害肺部。"
          },
          {
            "word": "mammal",
            "pos": "哺乳動物",
            "meaning": "n.",
            "en": "Whales are the largest mammals on Earth.",
            "zh": "鯨魚是地球上最大的哺乳動物。"
          },
          {
            "word": "manageable",
            "pos": "可管理的；易處理的",
            "meaning": "adj.",
            "en": "The workload is manageable.",
            "zh": "這個工作量是可以管理的。"
          },
          {
            "word": "mastery",
            "pos": "精通；掌握",
            "meaning": "n.",
            "en": "She has mastery of three languages.",
            "zh": "她精通三種語言。"
          },
          {
            "word": "mastery-oriented",
            "pos": "精通導向的",
            "meaning": "adj.",
            "en": "A mastery-oriented student focuses on learning rather than grades.",
            "zh": "精通導向的學生專注於學習而非成績。"
          },
          {
            "word": "merge",
            "pos": "合併；融合",
            "meaning": "v.",
            "en": "The two companies decided to merge.",
            "zh": "這兩家公司決定合併。"
          },
          {
            "word": "metamorphosis",
            "pos": "變態；蛻變",
            "meaning": "n.",
            "en": "A caterpillar undergoes metamorphosis to become a butterfly.",
            "zh": "毛毛蟲經歷蛻變變成蝴蝶。"
          },
          {
            "word": "moist",
            "pos": "潮濕的",
            "meaning": "adj.",
            "en": "The soil should be kept moist for the plants.",
            "zh": "植物的土壤應保持濕潤。"
          },
          {
            "word": "monster",
            "pos": "怪物",
            "meaning": "n.",
            "en": "The child was afraid of the monster under the bed.",
            "zh": "這個孩子害怕床底下的怪物。"
          },
          {
            "word": "mosquito",
            "pos": "蚊子",
            "meaning": "n.",
            "en": "Mosquito bites can be annoying.",
            "zh": "蚊子叮咬很煩人。"
          },
          {
            "word": "mythology",
            "pos": "神話",
            "meaning": "n.",
            "en": "Greek mythology is full of fascinating stories.",
            "zh": "希臘神話充滿了迷人的故事。"
          },
          {
            "word": "optional",
            "pos": "可選擇的",
            "meaning": "adj.",
            "en": "This course is optional for students.",
            "zh": "這門課對學生來說是選修的。"
          },
          {
            "word": "orient",
            "pos": "使適應；確定方向",
            "meaning": "v.",
            "en": "The map will help you orient yourself.",
            "zh": "這張地圖將幫助你確定方向。"
          },
          {
            "word": "original",
            "pos": "原創的；最初的",
            "meaning": "adj.",
            "en": "This is the original version of the book.",
            "zh": "這是這本書的原版。"
          },
          {
            "word": "outstanding",
            "pos": "傑出的",
            "meaning": "adj.",
            "en": "She is an outstanding student.",
            "zh": "她是一名傑出的學生。"
          },
          {
            "word": "oxygen",
            "pos": "氧氣",
            "meaning": "n.",
            "en": "Humans need oxygen to survive.",
            "zh": "人類需要氧氣才能生存。"
          },
          {
            "word": "paddle",
            "pos": "槳；划槳",
            "meaning": "n./v.",
            "en": "They used a paddle to move the boat.",
            "zh": "他們用槳來划船。"
          },
          {
            "word": "peer",
            "pos": "同儕",
            "meaning": "n.",
            "en": "Students often learn from their peers.",
            "zh": "學生經常從同儕中學習。"
          },
          {
            "word": "peer coach",
            "pos": "同儕教練",
            "meaning": "n.",
            "en": "The peer coach helped her improve her skills.",
            "zh": "同儕教練幫助她提高技能。"
          },
          {
            "word": "performance",
            "pos": "表現；表演",
            "meaning": "n.",
            "en": "His performance in the test was excellent.",
            "zh": "他的考試表現非常優異。"
          },
          {
            "word": "performance-oriented",
            "pos": "表現導向的",
            "meaning": "adj.",
            "en": "A performance-oriented approach focuses on results.",
            "zh": "表現導向的方法專注於結果。"
          },
          {
            "word": "persevere",
            "pos": "堅持不懈",
            "meaning": "v.",
            "en": "She persevered despite many challenges.",
            "zh": "儘管面臨許多挑戰，她依然堅持不懈。"
          },
          {
            "word": "pest",
            "pos": "害蟲",
            "meaning": "n.",
            "en": "Farmers use pesticides to control pests.",
            "zh": "農民使用農藥來控制害蟲。"
          },
          {
            "word": "physical",
            "pos": "身體的；物理的",
            "meaning": "adj.",
            "en": "Regular exercise improves physical health.",
            "zh": "規律運動有助於身體健康。"
          },
          {
            "word": "pilot",
            "pos": "飛行員",
            "meaning": "n.",
            "en": "The pilot safely landed the plane.",
            "zh": "飛行員安全地降落了飛機。"
          },
          {
            "word": "pollution",
            "pos": "污染",
            "meaning": "n.",
            "en": "Air pollution is a major problem in big cities.",
            "zh": "空氣污染是大城市的一個主要問題。"
          },
          {
            "word": "process",
            "pos": "過程；處理",
            "meaning": "n./v.",
            "en": "The application is still being processed.",
            "zh": "申請仍在處理中。"
          },
          {
            "word": "professor",
            "pos": "教授",
            "meaning": "n.",
            "en": "She is a professor of psychology.",
            "zh": "她是一位心理學教授。"
          },
          {
            "word": "psychologist",
            "pos": "心理學家",
            "meaning": "n.",
            "en": "A psychologist studies human behavior.",
            "zh": "心理學家研究人類行為。"
          },
          {
            "word": "punishment",
            "pos": "處罰",
            "meaning": "n.",
            "en": "The punishment for cheating is suspension.",
            "zh": "作弊的懲罰是停學。"
          },
          {
            "word": "react",
            "pos": "反應",
            "meaning": "v.",
            "en": "He reacted angrily to the news.",
            "zh": "他對這則新聞做出了憤怒的反應。"
          },
          {
            "word": "rebel",
            "pos": "反叛者；反抗",
            "meaning": "n./v.",
            "en": "The rebels fought against the government.",
            "zh": "叛軍與政府作戰。"
          },
          {
            "word": "recommend",
            "pos": "推薦",
            "meaning": "v.",
            "en": "I recommend this restaurant.",
            "zh": "我推薦這家餐廳。"
          },
          {
            "word": "response",
            "pos": "回應",
            "meaning": "n.",
            "en": "He gave a quick response to the question.",
            "zh": "他迅速回答了這個問題。"
          },
          {
            "word": "sake",
            "pos": "緣故",
            "meaning": "n.",
            "en": "He did it for the sake of his family.",
            "zh": "他為了家人而做這件事。"
          },
          {
            "word": "schedule",
            "pos": "行程；安排",
            "meaning": "n./v.",
            "en": "The meeting is scheduled for Monday.",
            "zh": "會議安排在星期一。"
          },
          {
            "word": "self-awareness",
            "pos": "自我認知",
            "meaning": "n.",
            "en": "Self-awareness is important for personal growth.",
            "zh": "自我認知對個人成長很重要。"
          },
          {
            "word": "semester",
            "pos": "學期",
            "meaning": "n.",
            "en": "The new semester starts next week.",
            "zh": "新學期下週開始。"
          },
          {
            "word": "shrink",
            "pos": "縮小",
            "meaning": "v.",
            "en": "Wool clothes shrink in hot water.",
            "zh": "羊毛衣服在熱水中會縮小。"
          },
          {
            "word": "sincerely",
            "pos": "真誠地",
            "meaning": "adv.",
            "en": "I sincerely apologize for the mistake.",
            "zh": "我真誠地為這個錯誤道歉。"
          },
          {
            "word": "slight",
            "pos": "輕微的",
            "meaning": "adj.",
            "en": "There was a slight delay in the flight.",
            "zh": "航班有些許延誤。"
          },
          {
            "word": "slightly",
            "pos": "稍微地",
            "meaning": "adv.",
            "en": "The temperature dropped slightly.",
            "zh": "氣溫稍微下降了。"
          },
          {
            "word": "slippery",
            "pos": "滑的",
            "meaning": "adj.",
            "en": "The road is slippery after the rain.",
            "zh": "下雨後道路變得很滑。"
          },
          {
            "word": "soak",
            "pos": "浸泡",
            "meaning": "v.",
            "en": "She soaked her feet in warm water.",
            "zh": "她把腳泡在溫水中。"
          },
          {
            "word": "species",
            "pos": "物種",
            "meaning": "n.",
            "en": "There are many endangered species.",
            "zh": "有許多瀕臨絕種的物種。"
          },
          {
            "word": "spine",
            "pos": "脊椎；書脊",
            "meaning": "n.",
            "en": "The human spine consists of 33 vertebrae.",
            "zh": "人類的脊椎由 33 塊椎骨組成。"
          },
          {
            "word": "staff",
            "pos": "員工；工作人員",
            "meaning": "n.",
            "en": "The hospital staff is well-trained.",
            "zh": "這家醫院的員工都受過良好訓練。"
          },
          {
            "word": "sum",
            "pos": "總和；金額",
            "meaning": "n.",
            "en": "The sum of 5 and 10 is 15.",
            "zh": "5 和 10 的總和是 15。"
          },
          {
            "word": "sustain",
            "pos": "維持；支撐",
            "meaning": "v.",
            "en": "Plants need water to sustain life.",
            "zh": "植物需要水來維持生命。"
          },
          {
            "word": "talent",
            "pos": "天賦；才能",
            "meaning": "n.",
            "en": "She has a talent for painting.",
            "zh": "她有繪畫的天賦。"
          },
          {
            "word": "threaten",
            "pos": "威脅",
            "meaning": "v.",
            "en": "Climate change threatens many species.",
            "zh": "氣候變遷威脅許多物種的生存。"
          },
          {
            "word": "transformation",
            "pos": "轉變；變化",
            "meaning": "n.",
            "en": "The city has undergone a major transformation.",
            "zh": "這座城市經歷了重大變化。"
          },
          {
            "word": "tricky",
            "pos": "棘手的；狡猾的",
            "meaning": "adj.",
            "en": "This is a tricky question to answer.",
            "zh": "這是一個棘手的問題。"
          },
          {
            "word": "vertebrate",
            "pos": "脊椎動物；有脊椎的",
            "meaning": "n./adj.",
            "en": "Birds, fish, and mammals are vertebrates.",
            "zh": "鳥類、魚類和哺乳類都是脊椎動物。"
          },
          {
            "word": "vulnerable",
            "pos": "易受傷的；脆弱的",
            "meaning": "adj.",
            "en": "Young children are vulnerable to diseases.",
            "zh": "幼兒容易受到疾病的侵害。"
          }
        ]
      },
      {
        "id": 3,
        "name": "LFM to meet",
        "words": [
          {
            "word": "accommodate",
            "pos": "容納；適應",
            "meaning": "v.",
            "en": "The hotel can accommodate 200 guests.",
            "zh": "這家飯店可容納 200 名客人。"
          },
          {
            "word": "ad",
            "pos": "廣告",
            "meaning": "n.",
            "en": "I saw an interesting ad on TV.",
            "zh": "我在電視上看到了一個有趣的廣告。"
          },
          {
            "word": "announcement",
            "pos": "公告；宣佈",
            "meaning": "n.",
            "en": "The principal made an important announcement.",
            "zh": "校長發表了一項重要公告。"
          },
          {
            "word": "application",
            "pos": "申請；應用",
            "meaning": "n.",
            "en": "He submitted his job application yesterday.",
            "zh": "他昨天提交了他的工作申請。"
          },
          {
            "word": "arms",
            "pos": "武器；手臂",
            "meaning": "n.",
            "en": "The country is reducing its stockpile of arms.",
            "zh": "這個國家正在減少武器庫存。"
          },
          {
            "word": "assignment",
            "pos": "作業；任務",
            "meaning": "n.",
            "en": "We have a math assignment due tomorrow.",
            "zh": "我們有一份數學作業明天要交。"
          },
          {
            "word": "attach",
            "pos": "附加；黏貼",
            "meaning": "v.",
            "en": "Please attach the document to the email.",
            "zh": "請將文件附加到電子郵件中。"
          },
          {
            "word": "aware",
            "pos": "意識到的",
            "meaning": "adj.",
            "en": "She was aware of the dangers.",
            "zh": "她意識到了這些危險。"
          },
          {
            "word": "billion",
            "pos": "十億",
            "meaning": "n.",
            "en": "The company made a billion dollars in profit.",
            "zh": "這家公司獲得了十億美元的利潤。"
          },
          {
            "word": "certificate",
            "pos": "證書；證明",
            "meaning": "n.",
            "en": "She received a certificate of achievement.",
            "zh": "她獲得了一張成就證書。"
          },
          {
            "word": "comfort",
            "pos": "舒適；安慰",
            "meaning": "n./v.",
            "en": "His words gave me great comfort.",
            "zh": "他的話給了我極大的安慰。"
          },
          {
            "word": "communication",
            "pos": "溝通",
            "meaning": "n.",
            "en": "Effective communication is important in a relationship.",
            "zh": "有效的溝通在關係中很重要。"
          },
          {
            "word": "confusion",
            "pos": "混亂；困惑",
            "meaning": "n.",
            "en": "The new rules caused a lot of confusion.",
            "zh": "新規則引起了很多困惑。"
          },
          {
            "word": "context",
            "pos": "上下文；背景",
            "meaning": "n.",
            "en": "You should read the word in context.",
            "zh": "你應該根據上下文理解這個單詞。"
          },
          {
            "word": "culture",
            "pos": "文化",
            "meaning": "n.",
            "en": "Chinese culture has a long history.",
            "zh": "中華文化有悠久的歷史。"
          },
          {
            "word": "despite",
            "pos": "儘管",
            "meaning": "prep.",
            "en": "Despite the rain, they continued their journey.",
            "zh": "儘管下雨，他們仍繼續旅行。"
          },
          {
            "word": "detective",
            "pos": "偵探",
            "meaning": "n.",
            "en": "Sherlock Holmes is a famous detective.",
            "zh": "福爾摩斯是一位著名的偵探。"
          },
          {
            "word": "diligence",
            "pos": "勤奮",
            "meaning": "n.",
            "en": "His diligence helped him succeed.",
            "zh": "他的勤奮幫助他成功。"
          },
          {
            "word": "diligent",
            "pos": "勤勉的；努力的",
            "meaning": "adj.",
            "en": "She is a diligent student.",
            "zh": "她是一個勤奮的學生。"
          },
          {
            "word": "disc",
            "pos": "圓盤；光碟",
            "meaning": "n.",
            "en": "He burned the files onto a disc.",
            "zh": "他把文件燒錄到光碟上。"
          },
          {
            "word": "discussion board",
            "pos": "討論區",
            "meaning": "n.",
            "en": "I posted my question on the discussion board.",
            "zh": "我在討論區發表了我的問題。"
          },
          {
            "word": "exaggerate",
            "pos": "誇大",
            "meaning": "v.",
            "en": "He tends to exaggerate his achievements.",
            "zh": "他往往誇大自己的成就。"
          },
          {
            "word": "exception",
            "pos": "例外",
            "meaning": "n.",
            "en": "There is an exception to every rule.",
            "zh": "每條規則都有例外。"
          },
          {
            "word": "expectation",
            "pos": "期望",
            "meaning": "n.",
            "en": "She has high expectations for her students.",
            "zh": "她對學生有很高的期望。"
          },
          {
            "word": "extension",
            "pos": "延期；擴展",
            "meaning": "n.",
            "en": "The deadline was given a one-week extension.",
            "zh": "截止日期延長了一週。"
          },
          {
            "word": "fake",
            "pos": "假的；假貨",
            "meaning": "adj./n.",
            "en": "The painting turned out to be a fake.",
            "zh": "這幅畫結果是贗品。"
          },
          {
            "word": "fantastic",
            "pos": "極好的；奇妙的",
            "meaning": "adj.",
            "en": "We had a fantastic time at the party.",
            "zh": "我們在派對上玩得很開心。"
          },
          {
            "word": "fictional",
            "pos": "虛構的",
            "meaning": "adj.",
            "en": "Harry Potter is a fictional character.",
            "zh": "哈利波特是一個虛構角色。"
          },
          {
            "word": "galaxy",
            "pos": "星系",
            "meaning": "n.",
            "en": "The Milky Way is the galaxy we live in.",
            "zh": "銀河系是我們所在的星系。"
          },
          {
            "word": "imagination",
            "pos": "想像力",
            "meaning": "n.",
            "en": "Children have great imagination.",
            "zh": "孩子們有豐富的想像力。"
          },
          {
            "word": "impede",
            "pos": "妨礙",
            "meaning": "v.",
            "en": "His injury impeded his ability to play soccer.",
            "zh": "他的傷勢妨礙了他踢足球的能力。"
          },
          {
            "word": "intelligence",
            "pos": "智慧；情報",
            "meaning": "n.",
            "en": "Artificial intelligence is advancing rapidly.",
            "zh": "人工智慧正在迅速發展。"
          },
          {
            "word": "issue",
            "pos": "問題；發行",
            "meaning": "n./v.",
            "en": "Climate change is a serious issue.",
            "zh": "氣候變遷是一個嚴重的問題。"
          },
          {
            "word": "journey",
            "pos": "旅程",
            "meaning": "n.",
            "en": "Their journey lasted for three months.",
            "zh": "他們的旅程持續了三個月。"
          },
          {
            "word": "lecture",
            "pos": "演講；講課",
            "meaning": "n./v.",
            "en": "The professor gave a lecture on history.",
            "zh": "教授進行了一場歷史講座。"
          },
          {
            "word": "literature",
            "pos": "文學",
            "meaning": "n.",
            "en": "She is studying English literature.",
            "zh": "她正在學習英國文學。"
          },
          {
            "word": "messy",
            "pos": "混亂的；凌亂的",
            "meaning": "adj.",
            "en": "His room is always messy.",
            "zh": "他的房間總是亂七八糟的。"
          },
          {
            "word": "misinformation",
            "pos": "誤導性資訊",
            "meaning": "n.",
            "en": "The spread of misinformation can be dangerous.",
            "zh": "假資訊的傳播可能是危險的。"
          },
          {
            "word": "mocking",
            "pos": "嘲弄的；諷刺的",
            "meaning": "adj.",
            "en": "He made a mocking remark about her accent.",
            "zh": "他對她的口音做出諷刺的評論。"
          },
          {
            "word": "mystery",
            "pos": "神秘；謎",
            "meaning": "n.",
            "en": "The cause of the fire remains a mystery.",
            "zh": "火災的原因仍然是個謎。"
          },
          {
            "word": "nowhere",
            "pos": "無處；沒有地方",
            "meaning": "adv.",
            "en": "I searched everywhere, but the keys were nowhere to be found.",
            "zh": "我到處找，但鑰匙卻找不到。"
          },
          {
            "word": "nutrition",
            "pos": "營養",
            "meaning": "n.",
            "en": "Good nutrition is essential for a healthy body.",
            "zh": "良好的營養對健康的身體至關重要。"
          },
          {
            "word": "observation",
            "pos": "觀察；觀察結果",
            "meaning": "n.",
            "en": "His observation about the experiment was accurate.",
            "zh": "他對這個實驗的觀察是準確的。"
          },
          {
            "word": "orbit",
            "pos": "軌道；環繞軌道運行",
            "meaning": "n./v.",
            "en": "The Earth orbits around the sun.",
            "zh": "地球繞著太陽運行。"
          },
          {
            "word": "Photoshop",
            "pos": "Photoshop（修圖軟體）",
            "meaning": "n./v.",
            "en": "He used Photoshop to edit the image.",
            "zh": "他使用 Photoshop 來編輯圖片。"
          },
          {
            "word": "prejudice",
            "pos": "偏見",
            "meaning": "n.",
            "en": "We must fight against racial prejudice.",
            "zh": "我們必須對抗種族偏見。"
          },
          {
            "word": "probably",
            "pos": "可能",
            "meaning": "adv.",
            "en": "It will probably rain tomorrow.",
            "zh": "明天可能會下雨。"
          },
          {
            "word": "professor",
            "pos": "教授",
            "meaning": "n.",
            "en": "He is a professor of physics.",
            "zh": "他是物理學教授。"
          },
          {
            "word": "publish",
            "pos": "出版；發表",
            "meaning": "v.",
            "en": "The author published her first novel last year.",
            "zh": "這位作家去年出版了她的第一本小說。"
          },
          {
            "word": "recognize",
            "pos": "認出；承認",
            "meaning": "v.",
            "en": "I hardly recognized him after so many years.",
            "zh": "經過這麼多年，我幾乎認不出他了。"
          },
          {
            "word": "refer",
            "pos": "提及；參考",
            "meaning": "v.",
            "en": "He referred to the book during his speech.",
            "zh": "他在演講時提到了這本書。"
          },
          {
            "word": "referred to as",
            "pos": "被稱為",
            "meaning": "ph.",
            "en": "This plant is often referred to as the \"king of herbs.\"",
            "zh": "這種植物通常被稱為“草藥之王”。"
          },
          {
            "word": "reminder",
            "pos": "提醒；提示",
            "meaning": "n.",
            "en": "I set a reminder for my meeting at 3 PM.",
            "zh": "我設定了一個下午 3 點的會議提醒。"
          },
          {
            "word": "reverse",
            "pos": "逆轉；相反",
            "meaning": "v./n.",
            "en": "He reversed the car into the parking spot.",
            "zh": "他把車倒進停車位。"
          },
          {
            "word": "romantic",
            "pos": "浪漫的",
            "meaning": "adj.",
            "en": "The couple had a romantic dinner by the beach.",
            "zh": "這對情侶在海邊享用了一頓浪漫的晚餐。"
          },
          {
            "word": "roughly",
            "pos": "大約；粗略地",
            "meaning": "adv.",
            "en": "The trip will take roughly three hours.",
            "zh": "這次旅程大約需要三個小時。"
          },
          {
            "word": "series",
            "pos": "系列",
            "meaning": "n.",
            "en": "She wrote a popular fantasy book series.",
            "zh": "她寫了一套受歡迎的奇幻小說系列。"
          },
          {
            "word": "setting",
            "pos": "環境；背景",
            "meaning": "n.",
            "en": "The story takes place in a medieval setting.",
            "zh": "這個故事發生在中世紀背景下。"
          },
          {
            "word": "site",
            "pos": "地點；網站",
            "meaning": "n.",
            "en": "This is a historical site.",
            "zh": "這是一個歷史遺址。"
          },
          {
            "word": "societal",
            "pos": "社會的",
            "meaning": "adj.",
            "en": "The movie addresses important societal issues.",
            "zh": "這部電影探討了重要的社會問題。"
          },
          {
            "word": "solar",
            "pos": "太陽的",
            "meaning": "adj.",
            "en": "The house is powered by solar energy.",
            "zh": "這棟房子由太陽能供電。"
          },
          {
            "word": "solar system",
            "pos": "太陽系",
            "meaning": "n.",
            "en": "There are eight planets in our solar system.",
            "zh": "我們的太陽系有八顆行星。"
          },
          {
            "word": "spiral",
            "pos": "螺旋狀的；螺旋",
            "meaning": "adj./n.",
            "en": "The staircase has a beautiful spiral design.",
            "zh": "這個樓梯有一個美麗的螺旋設計。"
          },
          {
            "word": "studio",
            "pos": "工作室；錄音室",
            "meaning": "n.",
            "en": "She works in a photography studio.",
            "zh": "她在一間攝影工作室工作。"
          },
          {
            "word": "submit",
            "pos": "提交",
            "meaning": "v.",
            "en": "Please submit your application by Friday.",
            "zh": "請在星期五前提交申請。"
          },
          {
            "word": "subtle",
            "pos": "微妙的；不易察覺的",
            "meaning": "adj.",
            "en": "There was a subtle change in his behavior.",
            "zh": "他的行為有一個微妙的變化。"
          },
          {
            "word": "technique",
            "pos": "技巧；技術",
            "meaning": "n.",
            "en": "He has an excellent painting technique.",
            "zh": "他有出色的繪畫技術。"
          },
          {
            "word": "transport",
            "pos": "運輸",
            "meaning": "v./n.",
            "en": "Goods are transported by truck.",
            "zh": "貨物是由卡車運輸的。"
          },
          {
            "word": "unlikely",
            "pos": "不太可能的",
            "meaning": "adj.",
            "en": "It is unlikely that he will come today.",
            "zh": "他今天來的可能性不大。"
          },
          {
            "word": "unrelated",
            "pos": "無關的",
            "meaning": "adj.",
            "en": "His comment was completely unrelated to the topic.",
            "zh": "他的評論與這個話題完全無關。"
          },
          {
            "word": "variety",
            "pos": "多樣性；種類",
            "meaning": "n.",
            "en": "The store sells a variety of snacks.",
            "zh": "這家商店販售各種零食。"
          },
          {
            "word": "website",
            "pos": "網站",
            "meaning": "n.",
            "en": "You can find more information on their website.",
            "zh": "你可以在他們的網站上找到更多資訊。"
          },
          {
            "word": "wellness",
            "pos": "健康；身心健康",
            "meaning": "n.",
            "en": "She focuses on overall wellness and mental health.",
            "zh": "她注重整體健康和心理健康。"
          },
          {
            "word": "witch",
            "pos": "女巫",
            "meaning": "n.",
            "en": "The old woman was believed to be a witch.",
            "zh": "這位老太太被認為是個女巫。"
          },
          {
            "word": "wizard",
            "pos": "巫師",
            "meaning": "n.",
            "en": "The wizard cast a powerful spell.",
            "zh": "巫師施放了一個強大的魔法。"
          }
        ]
      }
    ]
  }
];

export default VOCAB_DATA;