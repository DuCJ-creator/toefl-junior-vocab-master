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
    category: "RC Diagnostic Test",
    units: [
      {
        id: 1,
        words: [
          { word: "absurd", pos: "adj.", meaning: "荒謬的;愚蠢的", en: "That is an absurd idea.", zh: "那是個荒謬的想法。" },
          { word: "acceptable", pos: "adj.", meaning: "可以接受的;令人滿意的", en: "The results are acceptable.", zh: "結果是可以接受的。" },
          { word: "accommodation", pos: "n.", meaning: "適應;方便設施;住處", en: "They are looking for accommodation.", zh: "他們正在尋找住處。" },
          { word: "acknowledge", pos: "v.", meaning: "承認;就……表示謝忱", en: "He acknowledged the gift.", zh: "他對禮物表示感謝。" },
          { word: "adaptation", pos: "n.", meaning: "適應;改寫", en: "The film is an adaptation of a novel.", zh: "這部電影是由小說改編的。" },
          { word: "admire", pos: "v.", meaning: "欽佩;欣賞", en: "I admire your courage.", zh: "我欽佩你的勇氣。" },
          { word: "admission", pos: "n.", meaning: "進入許可;入場費;承認", en: "Admission is free for children.", zh: "兒童免費入場。" },
          { word: "adopt", pos: "v.", meaning: "採納;收養;接受", en: "They decided to adopt a child.", zh: "他們決定收養一個孩子。" }
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
          { word: "advertising", pos: "n.", meaning: "廣告業；廣告宣傳", en: "The company spent millions on advertising.", zh: "這家公司在廣告上花費了數百萬。" }
        ]
      }
    ]
  }
];

export default VOCAB_DATA;
