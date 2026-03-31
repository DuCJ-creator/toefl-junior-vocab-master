const VOCAB_DATA = [
  {
    category: "Preface & RC Intro",
    units: [
      {
        id: 1,
        words: [
          { word: "abstract", pos: "adj./n.", meaning: "抽象的；摘要", en: "His ideas are too abstract to understand.", zh: "他的想法太抽象，難以理解。" },
          { word: "academic", pos: "adj./n.", meaning: "學術的；學者", en: "She has an excellent academic record.", zh: "她的學術成績非常優異。" },
          { word: "accompany", pos: "v.", meaning: "陪伴；伴隨", en: "He will accompany me to the meeting.", zh: "他將陪我一起去開會。" },
          { word: "accordingly", pos: "adv.", meaning: "因此；相應地", en: "We have different opinions, so we should act accordingly.", zh: "我們有不同的意見，所以應該相應地行動。" },
          { word: "achievement", pos: "n.", meaning: "成就；完成", en: "Winning the award was a great achievement.", zh: "獲得這個獎項是一項偉大的成就。" },
          { word: "acknowledge", pos: "v.", meaning: "承認；感謝", en: "She acknowledged her mistake.", zh: "她承認了自己的錯誤。" },
          { word: "adapt", pos: "v.", meaning: "適應；改編", en: "Animals adapt to their environments.", zh: "動物會適應它們的環境。" },
          { word: "administer", pos: "v.", meaning: "管理；執行", en: "The teacher administered the test.", zh: "老師監督了這次考試。" },
          { word: "advantage", pos: "n.", meaning: "優勢；好處", en: "Being bilingual is an advantage in the job market.", zh: "會說雙語在職場上是一種優勢。" },
          { word: "advertisement", pos: "n.", meaning: "廣告", en: "I saw an advertisement for a new phone.", zh: "我看到了一則新手機的廣告。" },
          { word: "agency", pos: "n.", meaning: "機構；代理商", en: "She works for a travel agency.", zh: "她在一家旅行社工作。" },
          { word: "ambition", pos: "n.", meaning: "野心；抱負", en: "His ambition is to become a doctor.", zh: "他的抱負是成為一名醫生。" },
          { word: "announcement", pos: "n.", meaning: "公告；通知", en: "The school made an important announcement.", zh: "學校發布了一個重要公告。" },
          { word: "applicants", pos: "n.", meaning: "申請人", en: "There were many applicants for the job.", zh: "這個職位有許多申請人。" },
          { word: "appropriate", pos: "adj.", meaning: "合適的；適當的", en: "Wear appropriate clothes for the interview.", zh: "穿著適當的衣服去面試。" },
          { word: "approve", pos: "v.", meaning: "批准；贊同", en: "The manager approved my request.", zh: "經理批准了我的請求。" }
        ]
      },
      {
        id: 2,
        words: [
          { word: "arise", pos: "v.", meaning: "出現；產生", en: "Problems may arise during the project.", zh: "這個專案可能會出現問題。" },
          { word: "aspect", pos: "n.", meaning: "方面", en: "The cultural aspect of the country is fascinating.", zh: "這個國家的文化方面很迷人。" },
          { word: "assess", pos: "v.", meaning: "評估", en: "The teacher assessed the students' progress.", zh: "老師評估了學生的進步情況。" },
          { word: "assessment", pos: "n.", meaning: "評估", en: "The company conducted a risk assessment.", zh: "這家公司進行了風險評估。" },
          { word: "assign", pos: "v.", meaning: "分配；指派", en: "The teacher assigned us homework.", zh: "老師給我們布置了作業。" },
          { word: "assist", pos: "v.", meaning: "幫助", en: "He assisted me with my homework.", zh: "他幫助我完成作業。" },
          { word: "background", pos: "n.", meaning: "背景", en: "She has a strong academic background.", zh: "她有良好的學術背景。" },
          { word: "bronze", pos: "n./adj.", meaning: "青銅；青銅色的", en: "The statue was made of bronze.", zh: "這座雕像是青銅製成的。" },
          { word: "certificate", pos: "n.", meaning: "證書；證明", en: "He received a graduation certificate.", zh: "他獲得了畢業證書。" },
          { word: "cite", pos: "v.", meaning: "引用；舉例", en: "The professor cited several studies.", zh: "教授引用了幾項研究。" },
          { word: "clause", pos: "n.", meaning: "子句", en: "\"Because she was late\" is a subordinate clause.", zh: "“因為她遲到了” 是一個從屬子句。" },
          { word: "coherent", pos: "adj.", meaning: "連貫的；一致的", en: "His argument was clear and coherent.", zh: "他的論點清晰且連貫。" },
          { word: "communicate", pos: "v.", meaning: "溝通", en: "We need to communicate more effectively.", zh: "我們需要更有效地溝通。" },
          { word: "comparison", pos: "n.", meaning: "比較", en: "The comparison between the two products was helpful.", zh: "這兩種產品的比較很有幫助。" },
          { word: "compile", pos: "v.", meaning: "編輯；匯整", en: "He compiled a list of useful websites.", zh: "他整理了一份有用的網站清單。" },
          { word: "complexity", pos: "n.", meaning: "複雜性", en: "The complexity of the problem made it hard to solve.", zh: "這個問題的複雜性讓它難以解決。" }
        ]
      }
    ]
  },
  {
    category: "RC Strategy 1: Main Idea",
    units: [
      {
        id: 1,
        words: [
          { word: "accurately", pos: "adv.", meaning: "準確地", en: "He can accurately predict the weather.", zh: "他能準確預測天氣。" },
          { word: "acre", pos: "n.", meaning: "英畝", en: "The farm covers 50 acres of land.", zh: "這座農場佔地 50 英畝。" },
          { word: "ad", pos: "n.", meaning: "廣告", en: "I saw an ad for a new phone on TV.", zh: "我在電視上看到一則新手機的廣告。" },
          { word: "addicted", pos: "adj.", meaning: "上癮的", en: "He is addicted to video games.", zh: "他對電子遊戲上癮了。" },
          { word: "addiction", pos: "n.", meaning: "成癮", en: "Drug addiction is a serious problem.", zh: "毒品成癮是一個嚴重的問題。" },
          { word: "adjust", pos: "v.", meaning: "調整", en: "She adjusted the seat to make it more comfortable.", zh: "她調整了座椅，使其更舒適。" },
          { word: "adjustment", pos: "n.", meaning: "調整", en: "A small adjustment can make a big difference.", zh: "一個小調整可能帶來很大的不同。" },
          { word: "advertising", pos: "n.", meaning: "廣告業；廣告宣傳", en: "The company spent millions on advertising.", zh: "這家公司在廣告上花費了數百萬。" },
          { word: "amazingly", pos: "adv.", meaning: "令人驚訝地", en: "The baby learned to walk amazingly fast.", zh: "這個嬰兒學走路的速度令人驚訝。" },
          { word: "analyze", pos: "v.", meaning: "分析", en: "Scientists analyze data to find solutions.", zh: "科學家分析數據以尋找解決方案。" },
          { word: "applicant", pos: "n.", meaning: "申請人", en: "There were many applicants for the job.", zh: "這份工作有很多申請人。" },
          { word: "approval", pos: "n.", meaning: "批准；認可", en: "The project is waiting for government approval.", zh: "這個專案正在等待政府批准。" },
          { word: "approve", pos: "v.", meaning: "批准；同意", en: "The manager approved my vacation request.", zh: "經理批准了我的休假申請。" },
          { word: "aspect", pos: "n.", meaning: "方面", en: "Exercise is an important aspect of a healthy lifestyle.", zh: "運動是健康生活方式的一個重要方面。" },
          { word: "astronaut", pos: "n.", meaning: "太空人", en: "The astronaut spent six months in space.", zh: "這名太空人在太空待了六個月。" },
          { word: "attitude", pos: "n.", meaning: "態度", en: "He has a positive attitude towards work.", zh: "他對工作持積極的態度。" }
        ]
      },
      {
        id: 2,
        words: [
          { word: "audience", pos: "n.", meaning: "觀眾", en: "The audience applauded the performance.", zh: "觀眾為表演鼓掌。" },
          { word: "bachelor", pos: "n.", meaning: "單身漢；學士學位", en: "He received his bachelor’s degree in engineering.", zh: "他獲得了工程學學士學位。" },
          { word: "beneficial", pos: "adj.", meaning: "有益的", en: "A balanced diet is beneficial to your health.", zh: "均衡飲食對健康有益。" },
          { word: "benefit", pos: "n./v.", meaning: "好處；受益", en: "Everyone benefits from regular exercise.", zh: "定期運動讓每個人受益。" },
          { word: "block", pos: "v./n.", meaning: "阻擋；街區", en: "The road was blocked by fallen trees.", zh: "這條路被倒下的樹木阻擋了。" },
          { word: "bolt", pos: "n./v.", meaning: "螺栓；快速移動", en: "He tightened the bolts on the machine.", zh: "他擰緊了機器上的螺栓。" },
          { word: "bored", pos: "adj.", meaning: "無聊的", en: "She felt bored during the long meeting.", zh: "她在冗長的會議中感到無聊。" },
          { word: "calculation", pos: "n.", meaning: "計算", en: "His calculation of the costs was incorrect.", zh: "他對成本的計算是錯誤的。" },
          { word: "calorie", pos: "n.", meaning: "卡路里", en: "This snack contains 200 calories.", zh: "這款零食含有 200 卡路里。" },
          { word: "career", pos: "n.", meaning: "職業", en: "She has a successful career in law.", zh: "她在法律界擁有成功的職業生涯。" },
          { word: "central", pos: "adj.", meaning: "中央的；主要的", en: "The park is located in the central part of the city.", zh: "這座公園位於城市的中心部分。" },
          { word: "challenger", pos: "n.", meaning: "挑戰者", en: "He is the main challenger in the boxing match.", zh: "他是這場拳擊比賽的主要挑戰者。" },
          { word: "clue", pos: "n.", meaning: "線索", en: "The police found a clue at the crime scene.", zh: "警察在犯罪現場發現了一條線索。" },
          { word: "communicate", pos: "v.", meaning: "溝通", en: "It is important to communicate clearly.", zh: "清楚溝通很重要。" },
          { word: "community", pos: "n.", meaning: "社區", en: "He is an active member of the local community.", zh: "他是當地社區的活躍成員。" },
          { word: "complicated", pos: "adj.", meaning: "複雜的", en: "The instructions were too complicated to follow.", zh: "這些說明過於複雜，難以遵循。" }
        ]
      }
    ]
  },
  {
    category: "RC Strategy 2: Text Structure",
    units: [
      {
        id: 1,
        words: [
          { word: "academic", pos: "adj.", meaning: "學術的", en: "She has a strong academic background.", zh: "她在學術上有很強的背景。" },
          { word: "accomplish", pos: "v.", meaning: "實現", en: "He worked hard to accomplish his goals.", zh: "他努力實現自己的目標。" },
          { word: "admiring", pos: "adj.", meaning: "欽佩的", en: "She looked at him with admiring eyes.", zh: "她以欽佩的眼光看著他。" },
          { word: "anxious", pos: "adj.", meaning: "焦慮的", en: "She felt anxious before the exam.", zh: "她在考試前感到焦慮。" },
          { word: "appreciation", pos: "n.", meaning: "欣賞", en: "Show your appreciation for their hard work.", zh: "對他們的辛勤工作表示欣賞。" },
          { word: "assist", pos: "v.", meaning: "協助", en: "I will assist you in completing the project.", zh: "我將協助你完成這個項目。" },
          { word: "atmosphere", pos: "n.", meaning: "氛圍", en: "The atmosphere in the room was tense.", zh: "房間的氛圍很緊張。" },
          { word: "attitude", pos: "n.", meaning: "態度", en: "Your attitude towards work is important.", zh: "你對工作的態度很重要。" },
          { word: "awake", pos: "adj./v.", meaning: "醒著的 / 喚醒", en: "She was awake all night studying.", zh: "她整夜都醒著讀書。" },
          { word: "aware", pos: "adj.", meaning: "察覺到的", en: "Are you aware of the consequences?", zh: "你察覺到後果了嗎？" },
          { word: "bacon", pos: "n.", meaning: "培根", en: "I love the smell of sizzling bacon.", zh: "我喜歡培根嘶嘶作響的香味。" },
          { word: "balance", pos: "n./v.", meaning: "平衡 / 平衡", en: "Finding a balance in life is essential.", zh: "在生活中找到平衡是必要的。" },
          { word: "basis", pos: "n.", meaning: "基礎", en: "The decision was made on the basis of facts.", zh: "決策是基於事實的基礎上做出的。" },
          { word: "community", pos: "n.", meaning: "社區", en: "The community came together to support each other.", zh: "社區齊心協力相互支持。" },
          { word: "comprehension", pos: "n.", meaning: "理解", en: "His comprehension of the topic was impressive.", zh: "他對這個主題的理解令人印象深刻。" },
          { word: "concepts", pos: "n.", meaning: "概念", en: "The teacher explained complex concepts clearly.", zh: "老師清晰地解釋了复雜的概念。" }
        ]
      }
    ]
  },
  {
    category: "RC Strategy 3: Purpose & Tone",
    units: [
      {
        id: 1,
        words: [
          { word: "academic", pos: "adj./n.", meaning: "學術的；學者", en: "He has a strong academic background.", zh: "他有很強的學術背景。" },
          { word: "accomplish", pos: "v.", meaning: "完成；達成", en: "She accomplished all her goals this year.", zh: "她今年完成了所有目標。" },
          { word: "admire", pos: "v.", meaning: "欣賞；敬佩", en: "I really admire her hard work.", zh: "我非常欽佩她的努力。" },
          { word: "anxious", pos: "adj.", meaning: "焦慮的；擔心的", en: "She felt anxious about her exam.", zh: "她對考試感到焦慮。" },
          { word: "appreciation", pos: "n.", meaning: "感激；欣賞", en: "He showed his appreciation for their help.", zh: "他對他們的幫助表示感激。" },
          { word: "assist", pos: "v.", meaning: "協助；幫助", en: "The nurse assisted the doctor during the surgery.", zh: "護士在手術過程中協助醫生。" },
          { word: "atmosphere", pos: "n.", meaning: "氣氛；大氣", en: "The restaurant has a cozy atmosphere.", zh: "這家餐廳有溫馨的氛圍。" },
          { word: "attitude", pos: "n.", meaning: "態度", en: "His positive attitude helped him succeed.", zh: "他的積極態度幫助他成功。" },
          { word: "awake", pos: "adj./v.", meaning: "醒著的；喚醒", en: "He stayed awake all night.", zh: "他整夜未眠。" },
          { word: "aware", pos: "adj.", meaning: "意識到的；知道的", en: "She is aware of the risks involved.", zh: "她意識到涉及的風險。" },
          { word: "bacon", pos: "n.", meaning: "培根", en: "He had eggs and bacon for breakfast.", zh: "他早餐吃了雞蛋和培根。" },
          { word: "community", pos: "n.", meaning: "社區；群體", en: "The local community organized a charity event.", zh: "當地社區組織了一場慈善活動。" },
          { word: "comprehension", pos: "n.", meaning: "理解；理解力", en: "Reading comprehension is important for learning.", zh: "閱讀理解對學習很重要。" },
          { word: "concept", pos: "n.", meaning: "概念", en: "The concept of gravity was explained by Newton.", zh: "牛頓解釋了重力的概念。" },
          { word: "convince", pos: "v.", meaning: "說服", en: "He convinced me to join the club.", zh: "他說服我加入這個俱樂部。" },
          { word: "dairy", pos: "n./adj.", meaning: "乳製品；乳品的", en: "She avoids dairy because she is lactose intolerant.", zh: "她因為乳糖不耐症而避免食用乳製品。" }
        ]
      }
    ]
  },
  {
    category: "LC To Exceed 1-5",
    units: [
      {
        id: 1,
        words: [
          { word: "abundance", pos: "n.", meaning: "豐富；大量", en: "The forest has an abundance of wildlife.", zh: "這片森林有豐富的野生動物。" },
          { word: "amphibian", pos: "n.", meaning: "兩棲動物", en: "Frogs and salamanders are amphibians.", zh: "青蛙和蠑螈是兩棲動物。" },
          { word: "Antarctica", pos: "n.", meaning: "南極洲", en: "Antarctica is the coldest continent on Earth.", zh: "南極洲是地球上最寒冷的大陸。" },
          { word: "appointment", pos: "n.", meaning: "預約；約會", en: "I have a doctor's appointment at 3 PM.", zh: "我下午三點有個看診預約。" },
          { word: "arrange", pos: "v.", meaning: "安排；整理", en: "She arranged the books on the shelf.", zh: "她整理了書架上的書。" },
          { word: "astronomical", pos: "adj.", meaning: "天文的；極大的", en: "The cost of the project is astronomical.", zh: "這個專案的成本非常高。" },
          { word: "basin", pos: "n.", meaning: "盆地；水盆", en: "The Amazon Basin is home to diverse species.", zh: "亞馬遜盆地是多種物種的棲息地。" },
          { word: "biodiversity", pos: "n.", meaning: "生物多樣性", en: "Biodiversity is essential for a healthy ecosystem.", zh: "生物多樣性對健康的生態系統至關重要。" },
          { word: "biologist", pos: "n.", meaning: "生物學家", en: "The biologist studies marine life.", zh: "這位生物學家研究海洋生物。" },
          { word: "carbon", pos: "n.", meaning: "碳", en: "Carbon is an essential element in all living organisms.", zh: "碳是所有生物體內不可或缺的元素。" },
          { word: "carbon dioxide", pos: "n.", meaning: "二氧化碳", en: "Plants absorb carbon dioxide during photosynthesis.", zh: "植物在光合作用時吸收二氧化碳。" },
          { word: "characteristic", pos: "n./adj.", meaning: "特徵；典型的", en: "One characteristic of cats is their agility.", zh: "貓的一個特徵是它們的敏捷性。" },
          { word: "collection", pos: "n.", meaning: "收藏；收集物", en: "She has a collection of rare stamps.", zh: "她有一個稀有郵票的收藏。" },
          { word: "comprehension", pos: "n.", meaning: "理解力", en: "Reading comprehension is an important skill.", zh: "閱讀理解力是一項重要技能。" },
          { word: "confess", pos: "v.", meaning: "承認；坦白", en: "He confessed to stealing the money.", zh: "他承認偷了錢。" },
          { word: "consequence", pos: "n.", meaning: "後果；結果", en: "His actions had serious consequences.", zh: "他的行為產生了嚴重的後果。" }
        ]
      }
    ]
  }
];

export default VOCAB_DATA;
