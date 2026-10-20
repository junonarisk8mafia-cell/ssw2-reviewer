// SSW2 REVIEWER question bank (construction). All questions are original.
// Ruby markup: {base|reading} shows furigana at level 0; {!base|reading} also at level 1 (hard words).
// lv: basic | real (exam level). part: gakka (written) | jitsugi (practical, with kubun).
const BANK = [
 {
  "cat": "職長の役割",
  "q": "{作業|さぎょう}{中|ちゅう}に、{!図面|ずめん}と{現場|げんば}が{違|ちが}うことに{気|き}づいた。{!職長|しょくちょう}として{最初|さいしょ}にすることはどれか。",
  "o": [
   "{自分|じぶん}の{判断|はんだん}で{作業|さぎょう}を{続|つづ}ける",
   "{作業|さぎょう}を{止|と}めて、{!元請|もとうけ}の{担当者|たんとうしゃ}に{報告|ほうこく}・{相談|そうだん}する",
   "{作業|さぎょう}が{終|お}わってから{報告|ほうこく}する",
   "{作業員|さぎょういん}に{判断|はんだん}を{任|まか}せる"
  ],
  "a": 1,
  "tl": "Kapag hindi tugma ang drawing (図面) sa actual na site, huwag mong ituloy ang trabaho base sa sarili mong desisyon. I-stop muna, tapos i-report at i-consult agad sa person-in-charge ng main contractor (元請). Ito ang 報連相: report, inform, consult. Basic duty ito ng isang foreman.",
  "en": "If the drawing and the actual site don't match, stop the work and report to the main contractor's person in charge before deciding anything yourself. This is 報連相 (report, inform, consult), one of a foreman's basic duties.",
  "g": [
   [
    "図面",
    "ずめん",
    "drawing"
   ],
   [
    "元請",
    "もとうけ",
    "main contractor"
   ],
   [
    "報連相",
    "ほうれんそう",
    "report, inform, consult"
   ]
  ],
  "tq": {
   "en": "While working, you notice that the drawing and the actual site are different. As foreman, what do you do first?",
   "tl": "Habang nagtatrabaho, napansin mong magkaiba ang drawing at ang actual na site. Bilang foreman, ano ang una mong gagawin?"
  },
  "to": {
   "en": [
    "Keep working based on your own judgment",
    "Stop the work and report to / consult the main contractor's person in charge",
    "Report after the work is finished",
    "Let the workers decide"
   ],
   "tl": [
    "Ituloy ang trabaho base sa sarili mong desisyon",
    "I-stop ang trabaho, tapos mag-report at mag-consult sa person-in-charge ng main contractor",
    "Mag-report pagkatapos matapos ang trabaho",
    "Hayaan ang mga worker ang magdesisyon"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{!KY活動|ケーワイかつどう}の{目的|もくてき}として{正|ただ}しいものはどれか。",
  "o": [
   "{作業|さぎょう}の{速|はや}さを{競|きそ}う",
   "{作業|さぎょう}の{前|まえ}に{危険|きけん}を{予想|よそう}し、{対策|たいさく}を{話|はな}し{合|あ}う",
   "{事故|じこ}の{後|あと}に{原因|げんいん}を{調|しら}べる",
   "{作業員|さぎょういん}の{技能|ぎのう}を{評価|ひょうか}する"
  ],
  "a": 1,
  "tl": "Ang KY ay 危険予知, ibig sabihin hazard prediction. Bago magsimula ang trabaho, pinag-uusapan ng team kung anong aksidente ang puwedeng mangyari at paano ito maiiwasan. Bago ang trabaho ito ginagawa, hindi pagkatapos ng aksidente.",
  "en": "KY stands for 危険予知 (hazard prediction). Before work starts, the team predicts what could go wrong and agrees on how to prevent it.",
  "g": [
   [
    "危険予知",
    "きけんよち",
    "hazard prediction"
   ],
   [
    "対策",
    "たいさく",
    "countermeasure"
   ]
  ],
  "tq": {
   "en": "Which is the correct purpose of KY activity?",
   "tl": "Alin ang tamang purpose ng KY activity?"
  },
  "to": {
   "en": [
    "To compete on work speed",
    "To predict dangers before work and discuss countermeasures",
    "To investigate the cause after an accident",
    "To evaluate workers' skills"
   ],
   "tl": [
    "Para magpabilisan sa trabaho",
    "Para hulaan ang panganib bago ang trabaho at pag-usapan ang countermeasure",
    "Para alamin ang dahilan pagkatapos ng aksidente",
    "Para i-evaluate ang skill ng mga worker"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "「ヒヤリ・ハット」の{説明|せつめい}として{正|ただ}しいものはどれか。",
  "o": [
   "{実際|じっさい}にけがをした{事故|じこ}",
   "けがはなかったが、{事故|じこ}になりそうだった{出来事|できごと}",
   "{機械|きかい}の{故障|こしょう}",
   "{雨|あめ}の{日|ひ}の{作業|さぎょう}"
  ],
  "a": 1,
  "tl": "Ito ang near miss: walang nasaktan, pero muntik nang maging aksidente. Mahalagang i-report ang mga near miss para maiwasan ang totoong aksidente sa susunod.",
  "en": "A near miss: nobody was hurt, but it almost became an accident. Reporting near misses helps stop the real accident before it happens.",
  "g": [
   [
    "ヒヤリ・ハット",
    "ひやり・はっと",
    "near miss"
   ],
   [
    "出来事",
    "できごと",
    "incident"
   ]
  ],
  "tq": {
   "en": "Which correctly describes a \"hiyari-hatto\"?",
   "tl": "Alin ang tamang paliwanag ng \"hiyari-hatto\"?"
  },
  "to": {
   "en": [
    "An accident where someone was actually hurt",
    "Nobody was hurt, but it almost became an accident",
    "A machine breakdown",
    "Working on a rainy day"
   ],
   "tl": [
    "Aksidente na may talagang nasaktan",
    "Walang nasaktan, pero muntik nang maging aksidente",
    "Pagkasira ng makina",
    "Trabaho sa araw na umuulan"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{!5S|ごエス}に{含|ふく}まれないものはどれか。",
  "o": [
   "{整理|せいり}",
   "{清掃|せいそう}",
   "{速度|そくど}",
   "しつけ"
  ],
  "a": 2,
  "tl": "Ang 5S ay 整理 (sort), 整頓 (set in order), 清掃 (clean), 清潔 (keep clean), at しつけ (discipline). Wala ang speed dito. Ang goal ng 5S ay malinis at ligtas na workplace.",
  "en": "The 5S are 整理 (sort), 整頓 (set in order), 清掃 (clean), 清潔 (keep clean) and しつけ (discipline). Speed is not one of them.",
  "g": [
   [
    "整理",
    "せいり",
    "sort"
   ],
   [
    "整頓",
    "せいとん",
    "set in order"
   ],
   [
    "清掃",
    "せいそう",
    "clean"
   ]
  ],
  "tq": {
   "en": "Which is NOT part of 5S?",
   "tl": "Alin ang HINDI kasama sa 5S?"
  },
  "to": {
   "en": [
    "Sort (seiri)",
    "Clean (seisō)",
    "Speed (sokudo)",
    "Discipline (shitsuke)"
   ],
   "tl": [
    "Sort (seiri)",
    "Clean (seisō)",
    "Speed (sokudo)",
    "Discipline (shitsuke)"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "リスクアセスメントで{最初|さいしょ}にすることはどれか。",
  "o": [
   "リスクを{減|へ}らす{対策|たいさく}を{実施|じっし}する",
   "{!危険性|きけんせい}・{!有害性|ゆうがいせい}を{特定|とくてい}する",
   "{報告書|ほうこくしょ}を{提出|ていしゅつ}する",
   "{保護具|ほごぐ}を{買|か}う"
  ],
  "a": 1,
  "tl": "Una, i-identify muna ang mga hazard (危険性・有害性). Pagkatapos, i-estimate at i-evaluate ang risk. Saka pa lang magdedesisyon at gagawa ng countermeasure.",
  "en": "First identify the hazards. Then estimate and evaluate the risk, and only after that decide on and carry out the measures.",
  "g": [
   [
    "危険性",
    "きけんせい",
    "danger, hazard"
   ],
   [
    "有害性",
    "ゆうがいせい",
    "harmfulness"
   ],
   [
    "特定",
    "とくてい",
    "identify"
   ]
  ],
  "tq": {
   "en": "In a risk assessment, what do you do first?",
   "tl": "Sa risk assessment, ano ang unang gagawin?"
  },
  "to": {
   "en": [
    "Carry out measures to reduce the risk",
    "Identify the hazards and harmful factors",
    "Submit a report",
    "Buy protective equipment"
   ],
   "tl": [
    "Gawin ang countermeasure para bawasan ang risk",
    "I-identify ang mga hazard at harmful factor",
    "Mag-submit ng report",
    "Bumili ng protective equipment"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{安全|あんぜん}{対策|たいさく}で、もっとも{優先|ゆうせん}すべきものはどれか。",
  "o": [
   "{保護具|ほごぐ}を{使|つか}う",
   "{注意|ちゅうい}の{看板|かんばん}を{立|た}てる",
   "{危険|きけん}そのものをなくす",
   "{作業員|さぎょういん}に「{気|き}をつけて」と{言|い}う"
  ],
  "a": 2,
  "tl": "Pinaka-priority ang tanggalin mismo ang panganib. Ito ang 本質安全 (inherent safety). Ang signboard, rules, at protective gear ay backup lang kapag hindi talaga matanggal ang hazard.",
  "en": "Removing the hazard itself (本質安全, inherent safety) comes first. Signs, rules and protective gear are backups for when the hazard cannot be removed.",
  "g": [
   [
    "本質安全",
    "ほんしつあんぜん",
    "inherent safety"
   ],
   [
    "保護具",
    "ほごぐ",
    "protective equipment"
   ],
   [
    "優先",
    "ゆうせん",
    "priority"
   ]
  ],
  "tq": {
   "en": "Which safety measure should have the highest priority?",
   "tl": "Aling safety measure ang dapat pinaka-priority?"
  },
  "to": {
   "en": [
    "Use protective equipment",
    "Put up a warning sign",
    "Remove the danger itself",
    "Tell the workers \"be careful\""
   ],
   "tl": [
    "Gumamit ng protective equipment",
    "Maglagay ng warning signboard",
    "Tanggalin mismo ang panganib",
    "Sabihan ang mga worker na \"mag-ingat kayo\""
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{!QCDSE|キューシーディーエスイー}の「D」が{表|あらわ}すものはどれか。",
  "o": [
   "{品質|ひんしつ}",
   "{工期|こうき}（{納期|のうき}）",
   "{原価|げんか}",
   "{安全|あんぜん}"
  ],
  "a": 1,
  "tl": "Q = quality (品質), C = cost (原価), D = delivery o schedule (工期), S = safety (安全), E = environment (環境). Kailangang i-balance ng foreman ang lima.",
  "en": "Q = quality, C = cost, D = delivery (the schedule or construction period), S = safety, E = environment. A foreman balances all five.",
  "g": [
   [
    "工期",
    "こうき",
    "construction period"
   ],
   [
    "原価",
    "げんか",
    "cost"
   ],
   [
    "品質",
    "ひんしつ",
    "quality"
   ]
  ],
  "tq": {
   "en": "What does the \"D\" in QCDSE stand for?",
   "tl": "Ano ang ibig sabihin ng \"D\" sa QCDSE?"
  },
  "to": {
   "en": [
    "Quality",
    "Construction period (delivery)",
    "Cost",
    "Safety"
   ],
   "tl": [
    "Quality",
    "Construction period (delivery)",
    "Cost",
    "Safety"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{!作業日報|さぎょうにっぽう}を{書|か}く{主|おも}な{目的|もくてき}はどれか。",
  "o": [
   "{作業員|さぎょういん}の{給料|きゅうりょう}だけを{決|き}めるため",
   "その{日|ひ}の{作業|さぎょう}の{内容|ないよう}・{人数|にんずう}・{進|すす}み{具合|ぐあい}を{記録|きろく}し、{!工程|こうてい}や{!原価|げんか}の{管理|かんり}に{使|つか}うため",
   "{天気|てんき}だけを{記録|きろく}するため",
   "{休|やす}みの{日|ひ}を{決|き}めるため"
  ],
  "a": 1,
  "tl": "Sa daily report (作業日報), nire-record kung anong ginawa, ilang tao ang nagtrabaho, at gaano na kalayo ang progress. Ginagamit ito para i-manage ang schedule (工程) at cost (原価).",
  "en": "The daily report records what was done, how many people worked and how far the work progressed. That record is used to manage the schedule and cost.",
  "g": [
   [
    "作業日報",
    "さぎょうにっぽう",
    "daily work report"
   ],
   [
    "工程",
    "こうてい",
    "schedule, process"
   ],
   [
    "管理",
    "かんり",
    "management"
   ]
  ],
  "tq": {
   "en": "What is the main purpose of writing a daily work report?",
   "tl": "Ano ang main purpose ng pagsulat ng daily work report?"
  },
  "to": {
   "en": [
    "Only to decide the workers' pay",
    "To record the day's work, number of people and progress, and use it to manage the schedule and cost",
    "Only to record the weather",
    "To decide days off"
   ],
   "tl": [
    "Para lang i-decide ang sahod ng mga worker",
    "Para i-record ang trabaho, ilang tao, at progress ngayong araw, at gamitin sa pag-manage ng schedule at cost",
    "Para lang i-record ang weather",
    "Para i-decide ang day off"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "職長の役割",
  "q": "{!職長|しょくちょう}の{行動|こうどう}で、パワーハラスメントになるおそれがあるものはどれか。",
  "o": [
   "{危|あぶ}ない{作業|さぎょう}を{見|み}て、すぐに{止|と}める",
   "ミスをした{作業員|さぎょういん}を、みんなの{前|まえ}で{長|なが}い{時間|じかん}どなる",
   "{作業|さぎょう}{手順|てじゅん}をていねいに{説明|せつめい}する",
   "{休憩|きゅうけい}をとるように{言|い}う"
  ],
  "a": 1,
  "tl": "Trabaho ng foreman na pahintuin ang delikadong trabaho. Pero ang sigawan nang matagal ang isang worker sa harap ng lahat ay pag-atake na sa tao, hindi sa problema. Puwede itong maging power harassment.",
  "en": "Stopping dangerous work is part of the job. Yelling at someone for a long time in front of everyone attacks the person, not the problem, and can count as power harassment.",
  "g": [
   [
    "手順",
    "てじゅん",
    "procedure"
   ],
   [
    "休憩",
    "きゅうけい",
    "break"
   ]
  ],
  "tq": {
   "en": "Which foreman behavior could become power harassment?",
   "tl": "Aling gawain ng foreman ang puwedeng maging power harassment?"
  },
  "to": {
   "en": [
    "Stopping dangerous work right away",
    "Yelling for a long time at a worker who made a mistake, in front of everyone",
    "Explaining work procedures carefully",
    "Telling workers to take a break"
   ],
   "tl": [
    "Agad pinapahinto ang delikadong trabaho",
    "Sinisigawan nang matagal ang worker na nagkamali, sa harap ng lahat",
    "Maingat na ipinapaliwanag ang work procedure",
    "Sinasabihang mag-break muna"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{高|たか}い{所|ところ}で{作業|さぎょう}するとき、{!墜落|ついらく}を{防|ふせ}ぐために{使|つか}うものはどれか。",
  "o": [
   "{耳栓|みみせん}",
   "{!墜落制止用器具|ついらくせいしようきぐ}",
   "{防|ぼう}じんマスク",
   "{安全靴|あんぜんぐつ}"
  ],
  "a": 1,
  "tl": "Ang 墜落制止用器具 (fall-arrest harness) ang pumipigil sa pagkahulog mula sa mataas na lugar. Dati itong tinatawag na 安全帯 (safety belt), kaya maririnig mo pa rin ito sa site.",
  "en": "A fall-arrest harness (墜落制止用器具) stops a fall from height. It used to be called 安全帯 (safety belt), and you may still hear that word on site.",
  "g": [
   [
    "墜落",
    "ついらく",
    "fall from height"
   ],
   [
    "墜落制止用器具",
    "ついらくせいしようきぐ",
    "fall-arrest harness"
   ],
   [
    "安全帯",
    "あんぜんたい",
    "safety belt (old term)"
   ]
  ],
  "tq": {
   "en": "When working at height, what do you use to prevent falls?",
   "tl": "Kapag nagtatrabaho sa mataas na lugar, ano ang ginagamit para hindi mahulog?"
  },
  "to": {
   "en": [
    "Earplugs",
    "Fall-arrest harness",
    "Dust mask",
    "Safety shoes"
   ],
   "tl": [
    "Earplugs",
    "Fall-arrest harness",
    "Dust mask",
    "Safety shoes"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "職長の役割",
  "q": "{!作業手順書|さぎょうてじゅんしょ}を{作|つく}るときに{大切|たいせつ}なことはどれか。",
  "o": [
   "{作業|さぎょう}の{順番|じゅんばん}と、それぞれの{危険|きけん}と{対策|たいさく}を{書|か}く",
   "できるだけ{長|なが}い{文章|ぶんしょう}で{書|か}く",
   "{職長|しょくちょう}だけが{分|わ}かればよい",
   "一{度|ど}{作|つく}ったら{変|か}えない"
  ],
  "a": 0,
  "tl": "Sa 作業手順書 (work procedure document), isulat ang pagkakasunod-sunod ng trabaho, ang panganib sa bawat step, at ang countermeasure. Dapat maintindihan ito ng lahat ng worker, at i-update kapag may nagbago sa site.",
  "en": "A work procedure document lists the order of the steps, the danger in each step and the countermeasure. Every worker must be able to understand it, and it is updated when the site changes.",
  "g": [
   [
    "作業手順書",
    "さぎょうてじゅんしょ",
    "work procedure document"
   ],
   [
    "順番",
    "じゅんばん",
    "order, sequence"
   ]
  ],
  "tq": {
   "en": "What is important when making a work procedure document?",
   "tl": "Ano ang mahalaga sa paggawa ng work procedure document?"
  },
  "to": {
   "en": [
    "Write the order of the steps, and the danger and countermeasure for each",
    "Write it in sentences as long as possible",
    "Only the foreman needs to understand it",
    "Never change it once it is made"
   ],
   "tl": [
    "Isulat ang pagkakasunod-sunod ng steps, at ang panganib at countermeasure sa bawat isa",
    "Isulat nang pinakamahaba hangga't maaari",
    "Foreman lang ang kailangang makaintindi",
    "Huwag nang baguhin kapag nagawa na"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "職長の役割",
  "q": "{作業員|さぎょういん}の{!適正配置|てきせいはいち}として{正|ただ}しい{考|かんが}え{方|かた}はどれか。",
  "o": [
   "{仲|なか}のよい{人|ひと}どうしを{組|く}ませる",
   "{一人|ひとり}ひとりの{技能|ぎのう}・{資格|しかく}・{経験|けいけん}に{合|あ}った{仕事|しごと}をさせる",
   "{新人|しんじん}に{一番|いちばん}{難|むずか}しい{仕事|しごと}をさせる",
   "{資格|しかく}がなくても{誰|だれ}でもよい"
  ],
  "a": 1,
  "tl": "Ang 適正配置 ay ilagay ang tamang tao sa tamang trabaho, base sa skill, license (資格), at experience niya. May mga trabaho na kailangan ng license o special training, kaya hindi puwedeng kahit sino lang.",
  "en": "Right placement means giving each worker a job that matches their skills, licenses (資格) and experience. Some jobs require a license or special training, so not just anyone can do them.",
  "g": [
   [
    "適正配置",
    "てきせいはいち",
    "right person in the right job"
   ],
   [
    "資格",
    "しかく",
    "license, qualification"
   ]
  ],
  "tq": {
   "en": "Which is the correct way of thinking about placing workers properly?",
   "tl": "Alin ang tamang paraan ng paglalagay ng mga worker sa tamang trabaho?"
  },
  "to": {
   "en": [
    "Pair people who are friends",
    "Give each person work that matches their skills, licenses and experience",
    "Give the hardest job to the newest worker",
    "Anyone is fine, even without a license"
   ],
   "tl": [
    "Pagsamahin ang magkakaibigan",
    "Bigyan ang bawat isa ng trabahong bagay sa skill, license, at experience niya",
    "Ibigay sa bagong worker ang pinakamahirap na trabaho",
    "Kahit sino puwede, kahit walang license"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{法律|ほうりつ}で{決|き}められた{危険|きけん}な{業務|ぎょうむ}に{作業員|さぎょういん}をつかせる{前|まえ}に、{必要|ひつよう}なものはどれか。",
  "o": [
   "{本人|ほんにん}のやる{気|き}だけ",
   "{法律|ほうりつ}で{決|き}められた{!特別教育|とくべつきょういく}や{資格|しかく}",
   "{職長|しょくちょう}の{許可|きょか}だけ",
   "{同僚|どうりょう}の{推薦|すいせん}"
  ],
  "a": 1,
  "tl": "May mga delikadong trabaho na ayon sa batas (労働安全衛生法, Industrial Safety and Health Act) ay kailangan ng special training (特別教育) o license bago gawin. Kahit sanay ka na, hindi puwede kung wala nito.",
  "en": "Under the Industrial Safety and Health Act (労働安全衛生法), some dangerous jobs require special training (特別教育) or a license first. Experience alone is not enough.",
  "g": [
   [
    "特別教育",
    "とくべつきょういく",
    "special safety training"
   ],
   [
    "労働安全衛生法",
    "ろうどうあんぜんえいせいほう",
    "Industrial Safety and Health Act"
   ]
  ],
  "tq": {
   "en": "Before assigning a worker to a dangerous job set by law, what is required?",
   "tl": "Bago ipagawa sa worker ang delikadong trabaho na nakasaad sa batas, ano ang kailangan?"
  },
  "to": {
   "en": [
    "Only the worker's motivation",
    "The special training or license required by law",
    "Only the foreman's permission",
    "A recommendation from a coworker"
   ],
   "tl": [
    "Kagustuhan lang ng worker",
    "Ang special training o license na hinihingi ng batas",
    "Permiso lang ng foreman",
    "Rekomendasyon ng katrabaho"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "リスクの{!見積|みつ}もりで{考|かんが}える2つのことはどれか。",
  "o": [
   "けがの{重|おも}さと、{起|お}こる{可能性|かのうせい}",
   "{作業|さぎょう}の{速|はや}さと{人数|にんずう}",
   "{材料|ざいりょう}の{値段|ねだん}と{量|りょう}",
   "{天気|てんき}と{気温|きおん}"
  ],
  "a": 0,
  "tl": "Sa risk estimation, tinitingnan mo ang dalawa: gaano kabigat ang injury at gaano kalaki ang chance na mangyari ito (可能性). Kapag mataas pareho, uunahin mo itong ayusin.",
  "en": "To estimate a risk you look at two things: how serious the injury would be and how likely it is to happen (可能性). When both are high, you deal with it first.",
  "g": [
   [
    "見積もり",
    "みつもり",
    "estimate"
   ],
   [
    "可能性",
    "かのうせい",
    "possibility, likelihood"
   ]
  ],
  "tq": {
   "en": "When estimating a risk, which two things do you consider?",
   "tl": "Sa pag-estimate ng risk, anong dalawang bagay ang tinitingnan?"
  },
  "to": {
   "en": [
    "How serious the injury is, and how likely it is to happen",
    "Work speed and number of people",
    "Price and amount of materials",
    "Weather and temperature"
   ],
   "tl": [
    "Gaano kabigat ang injury, at gaano kalaki ang chance na mangyari",
    "Bilis ng trabaho at dami ng tao",
    "Presyo at dami ng materyales",
    "Panahon at temperatura"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "ヒューマンエラーを{防|ふせ}ぐために{現場|げんば}でよく{使|つか}われる{方法|ほうほう}はどれか。",
  "o": [
   "{!指差呼称|ゆびさしこしょう}",
   "{作業|さぎょう}を{急|いそ}がせる",
   "{確認|かくにん}を{省略|しょうりゃく}する",
   "{一人|ひとり}で{判断|はんだん}する"
  ],
  "a": 0,
  "tl": "Ang 指差呼称 (pointing and calling) ay ituturo mo ng daliri ang bagay at sasabihin nang malakas ang chine-check mo, halimbawa \"Valve, sarado, yoshi!\". Nakakatulong ito para mabawasan ang pagkakamali dahil sa pagod o pagmamadali.",
  "en": "Pointing and calling (指差呼称): you point at the thing and say out loud what you are checking, for example \"Valve closed, yoshi!\". It reduces mistakes caused by tiredness or rushing.",
  "g": [
   [
    "指差呼称",
    "ゆびさしこしょう",
    "pointing and calling"
   ],
   [
    "確認",
    "かくにん",
    "check, confirmation"
   ]
  ],
  "tq": {
   "en": "Which method is often used on site to prevent human error?",
   "tl": "Aling paraan ang madalas gamitin sa site para maiwasan ang human error?"
  },
  "to": {
   "en": [
    "Pointing and calling",
    "Making people work faster",
    "Skipping checks",
    "Deciding alone"
   ],
   "tl": [
    "Pointing and calling",
    "Pagmamadaliin ang trabaho",
    "Lalaktawan ang check",
    "Magdedesisyon nang mag-isa"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{作業|さぎょう}を{始|はじ}める{前|まえ}に、{職長|しょくちょう}と{作業員|さぎょういん}が{短|みじか}い{時間|じかん}で{作業|さぎょう}の{内容|ないよう}と{危険|きけん}を{確認|かくにん}し{合|あ}うことを{何|なん}というか。",
  "o": [
   "{!TBM|ティービーエム}（ツールボックスミーティング）",
   "{作業日報|さぎょうにっぽう}",
   "{!工程表|こうていひょう}",
   "{!竣工検査|しゅんこうけんさ}"
  ],
  "a": 0,
  "tl": "Ang TBM (Tool Box Meeting) ay maikling meeting bago magsimula ang trabaho. Dito pinag-uusapan ang trabaho ngayong araw, ang mga panganib, at kung sino ang gagawa ng ano.",
  "en": "A TBM (Tool Box Meeting) is a short meeting before work starts. The team goes over today's work, the dangers, and who does what.",
  "g": [
   [
    "TBM",
    "ティービーエム",
    "tool box meeting"
   ],
   [
    "工程表",
    "こうていひょう",
    "schedule chart"
   ],
   [
    "竣工検査",
    "しゅんこうけんさ",
    "completion inspection"
   ]
  ],
  "tq": {
   "en": "Before starting work, the foreman and workers briefly check the work and its dangers together. What is this called?",
   "tl": "Bago magsimula ang trabaho, saglit na chine-check ng foreman at mga worker ang trabaho at ang panganib. Ano ang tawag dito?"
  },
  "to": {
   "en": [
    "TBM (tool box meeting)",
    "Daily work report",
    "Schedule chart",
    "Completion inspection"
   ],
   "tl": [
    "TBM (tool box meeting)",
    "Daily work report",
    "Schedule chart",
    "Completion inspection"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{現場|げんば}で{事故|じこ}が{起|お}きてけが{人|にん}が{出|で}た。{職長|しょくちょう}が{最初|さいしょ}にすべきことはどれか。",
  "o": [
   "{事故|じこ}の{原因|げんいん}を{調|しら}べる",
   "けが{人|にん}を{!救護|きゅうご}し、{!二次災害|にじさいがい}を{防|ふせ}ぎ、すぐに{報告|ほうこく}する",
   "{作業|さぎょう}をそのまま{続|つづ}ける",
   "{写真|しゃしん}を{撮|と}ってから{考|かんが}える"
  ],
  "a": 1,
  "tl": "Una sa lahat, tulungan ang nasugatan at tumawag ng ambulansya kung kailangan. Siguraduhing walang ibang madadamay (二次災害, secondary accident), tapos i-report agad sa main contractor. Mamaya na ang pag-imbestiga ng dahilan.",
  "en": "First help the injured person and call an ambulance if needed. Make sure no one else gets hurt (二次災害, secondary accident), then report to the main contractor right away. Investigating the cause comes later.",
  "g": [
   [
    "救護",
    "きゅうご",
    "rescue, first aid"
   ],
   [
    "二次災害",
    "にじさいがい",
    "secondary accident"
   ]
  ],
  "tq": {
   "en": "An accident happened on site and someone was injured. What should the foreman do first?",
   "tl": "May aksidente sa site at may nasugatan. Ano ang unang dapat gawin ng foreman?"
  },
  "to": {
   "en": [
    "Investigate the cause of the accident",
    "Help the injured person, prevent a second accident, and report right away",
    "Continue the work as it is",
    "Take photos first, then think"
   ],
   "tl": [
    "Imbestigahan ang dahilan ng aksidente",
    "Tulungan ang nasugatan, iwasan ang second accident, at mag-report agad",
    "Ituloy lang ang trabaho",
    "Mag-picture muna bago mag-isip"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{労働衛生|ろうどうえいせい}の「3{管理|かんり}」に{含|ふく}まれないものはどれか。",
  "o": [
   "{作業環境管理|さぎょうかんきょうかんり}",
   "{作業管理|さぎょうかんり}",
   "{健康管理|けんこうかんり}",
   "{!在庫管理|ざいこかんり}"
  ],
  "a": 3,
  "tl": "Ang 3管理 ng 労働衛生 (occupational health) ay 作業環境管理 (work environment), 作業管理 (how the work is done), at 健康管理 (health of workers). Ang 在庫管理 (inventory) ay hindi kasama.",
  "en": "The three managements of occupational health (労働衛生) are work environment management, work management and health management. Inventory management is not one of them.",
  "g": [
   [
    "作業環境管理",
    "さぎょうかんきょうかんり",
    "work environment management"
   ],
   [
    "健康管理",
    "けんこうかんり",
    "health management"
   ],
   [
    "在庫管理",
    "ざいこかんり",
    "inventory management"
   ]
  ],
  "tq": {
   "en": "Which is NOT one of the \"three managements\" of occupational health?",
   "tl": "Alin ang HINDI kasama sa \"3 management\" ng occupational health?"
  },
  "to": {
   "en": [
    "Work environment management",
    "Work management",
    "Health management",
    "Inventory management"
   ],
   "tl": [
    "Work environment management",
    "Work management",
    "Health management",
    "Inventory management"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{夏|なつ}の{現場|げんば}で{!熱中症|ねっちゅうしょう}を{防|ふせ}ぐための{行動|こうどう}として{正|ただ}しいものはどれか。",
  "o": [
   "のどがかわくまで{水|みず}を{飲|の}まない",
   "こまめに{水分|すいぶん}と{塩分|えんぶん}をとり、{休憩|きゅうけい}する",
   "{暑|あつ}くても{休|やす}まずに{早|はや}く{終|お}わらせる",
   "{体調|たいちょう}が{悪|わる}くても{言|い}わない"
  ],
  "a": 1,
  "tl": "Para iwas heatstroke (熱中症), uminom ng tubig at kumuha ng asin (salt) nang madalas kahit hindi pa nauuhaw, at mag-break sa malilim na lugar. Kapag masama ang pakiramdam, sabihin agad sa foreman.",
  "en": "To prevent heatstroke (熱中症), drink water and take salt often, even before you feel thirsty, and rest in the shade. If you feel unwell, tell the foreman right away.",
  "g": [
   [
    "熱中症",
    "ねっちゅうしょう",
    "heatstroke"
   ],
   [
    "水分",
    "すいぶん",
    "fluids, water"
   ],
   [
    "塩分",
    "えんぶん",
    "salt"
   ]
  ],
  "tq": {
   "en": "Which is the correct action to prevent heatstroke on a summer site?",
   "tl": "Alin ang tamang gawin para maiwasan ang heatstroke sa site tuwing summer?"
  },
  "to": {
   "en": [
    "Don't drink water until you are thirsty",
    "Take water and salt often, and take breaks",
    "Don't rest even when it is hot, finish quickly",
    "Don't say anything even if you feel sick"
   ],
   "tl": [
    "Huwag uminom ng tubig hangga't hindi nauuhaw",
    "Uminom ng tubig at kumuha ng asin nang madalas, at mag-break",
    "Huwag magpahinga kahit mainit, tapusin agad",
    "Huwag magsalita kahit masama ang pakiramdam"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "ヘルメットの{正|ただ}しい{使|つか}い{方|かた}はどれか。",
  "o": [
   "あごひもをしっかり{締|し}めてかぶる",
   "あごひもは{締|し}めずにかぶる",
   "{暑|あつ}いときは{外|はず}してもよい",
   "{後|うし}ろ{向|む}きにかぶる"
  ],
  "a": 0,
  "tl": "Isuot ang helmet nang tama at higpitan ang chin strap (あごひも). Kapag maluwag ang chin strap, puwedeng matanggal ang helmet kapag nahulog ka o may tumama, kaya mawawalan ito ng silbi.",
  "en": "Wear the helmet properly with the chin strap (あごひも) tight. With a loose strap the helmet can come off when you fall or something hits you, and then it protects nothing.",
  "g": [
   [
    "あごひも",
    "あごひも",
    "chin strap"
   ],
   [
    "締める",
    "しめる",
    "to tighten, fasten"
   ]
  ],
  "tq": {
   "en": "Which is the correct way to use a helmet?",
   "tl": "Alin ang tamang paggamit ng helmet?"
  },
  "to": {
   "en": [
    "Wear it with the chin strap fastened tight",
    "Wear it without fastening the chin strap",
    "You may take it off when it is hot",
    "Wear it backwards"
   ],
   "tl": [
    "Isuot nang mahigpit ang chin strap",
    "Isuot nang hindi isinasara ang chin strap",
    "Puwedeng tanggalin kapag mainit",
    "Isuot nang pabaliktad"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{危険|きけん}な{場所|ばしょ}の「{!見える化|みえるか}」の{例|れい}として{正|ただ}しいものはどれか。",
  "o": [
   "{!開口部|かいこうぶ}に{手|て}すりと{!立入禁止|たちいりきんし}の{表示|ひょうじ}をつける",
   "{危険|きけん}な{場所|ばしょ}を{口|くち}で一{度|ど}だけ{伝|つた}える",
   "{表示|ひょうじ}は{作業|さぎょう}が{終|お}わってからつける",
   "{危険|きけん}な{場所|ばしょ}は{誰|だれ}にも{言|い}わない"
  ],
  "a": 0,
  "tl": "Ang 見える化 (visualization) ay gawing kitang-kita ng lahat ang panganib. Halimbawa, lagyan ng handrail at \"Keep Out\" (立入禁止) sign ang mga butas o bukas na lugar (開口部). Hindi sapat na sabihin lang nang isang beses.",
  "en": "Visualization (見える化) means making a danger visible to everyone, for example putting handrails and a \"No entry\" (立入禁止) sign at an opening (開口部). Saying it once is not enough.",
  "g": [
   [
    "見える化",
    "みえるか",
    "visualization"
   ],
   [
    "開口部",
    "かいこうぶ",
    "opening (hole in a floor or wall)"
   ],
   [
    "立入禁止",
    "たちいりきんし",
    "no entry"
   ]
  ],
  "tq": {
   "en": "Which is a correct example of making a dangerous place \"visible\"?",
   "tl": "Alin ang tamang halimbawa ng \"pagpapakita\" ng delikadong lugar?"
  },
  "to": {
   "en": [
    "Put handrails and a \"No entry\" sign at an opening",
    "Tell people about the dangerous place only once",
    "Put up the sign after the work is finished",
    "Don't tell anyone about the dangerous place"
   ],
   "tl": [
    "Lagyan ng handrail at \"No entry\" sign ang butas",
    "Sabihin lang nang isang beses ang delikadong lugar",
    "Ilagay ang sign pagkatapos ng trabaho",
    "Huwag sabihin kahit kanino ang delikadong lugar"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{品質|ひんしつ}や{仕事|しごと}を{改善|かいぜん}するための「PDCA」の{正|ただ}しい{順番|じゅんばん}はどれか。",
  "o": [
   "{計画|けいかく}→{実行|じっこう}→{確認|かくにん}→{改善|かいぜん}",
   "{実行|じっこう}→{計画|けいかく}→{改善|かいぜん}→{確認|かくにん}",
   "{確認|かくにん}→{改善|かいぜん}→{計画|けいかく}→{実行|じっこう}",
   "{改善|かいぜん}→{確認|かくにん}→{実行|じっこう}→{計画|けいかく}"
  ],
  "a": 0,
  "tl": "PDCA = Plan (計画), Do (実行), Check (確認), Act (改善). Gagawa ng plano, gagawin ito, chine-check ang resulta, tapos iimprove. Inuulit-ulit ito para gumanda ang quality.",
  "en": "PDCA = Plan (計画), Do (実行), Check (確認), Act (改善). You plan, do it, check the result and improve, then repeat the cycle to raise quality.",
  "g": [
   [
    "計画",
    "けいかく",
    "plan"
   ],
   [
    "実行",
    "じっこう",
    "do, carry out"
   ],
   [
    "改善",
    "かいぜん",
    "improvement"
   ]
  ],
  "tq": {
   "en": "What is the correct order of \"PDCA\" for improving quality and work?",
   "tl": "Ano ang tamang pagkakasunod-sunod ng \"PDCA\" para i-improve ang quality at trabaho?"
  },
  "to": {
   "en": [
    "Plan → Do → Check → Act",
    "Do → Plan → Act → Check",
    "Check → Act → Plan → Do",
    "Act → Check → Do → Plan"
   ],
   "tl": [
    "Plan → Do → Check → Act",
    "Do → Plan → Act → Check",
    "Check → Act → Plan → Do",
    "Act → Check → Do → Plan"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{工期|こうき}を{無理|むり}に{短|みじか}くすると、{一般的|いっぱんてき}にどうなりやすいか。",
  "o": [
   "{品質|ひんしつ}が{上|あ}がり、{原価|げんか}が{下|さ}がる",
   "{品質|ひんしつ}や{安全|あんぜん}が{下|さ}がり、{原価|げんか}が{上|あ}がりやすい",
   "{何|なに}も{変|か}わらない",
   "{必|かなら}ず{利益|りえき}が{増|ふ}える"
  ],
  "a": 1,
  "tl": "Magkakaugnay ang schedule (工期), cost (原価), at quality (品質). Kapag minadali ang schedule, kailangan ng mas maraming tao at overtime kaya tataas ang cost, at mas madaling bumaba ang quality at safety.",
  "en": "Schedule (工期), cost (原価) and quality (品質) are connected. Forcing a shorter schedule needs more people and overtime, so cost rises, and quality and safety tend to drop.",
  "g": [
   [
    "工期",
    "こうき",
    "construction period"
   ],
   [
    "原価",
    "げんか",
    "cost"
   ],
   [
    "利益",
    "りえき",
    "profit"
   ]
  ],
  "tq": {
   "en": "If the construction period is forced to be shorter, what generally tends to happen?",
   "tl": "Kapag pinilit na paikliin ang construction period, ano ang kadalasang nangyayari?"
  },
  "to": {
   "en": [
    "Quality goes up and cost goes down",
    "Quality and safety tend to drop, and cost tends to rise",
    "Nothing changes",
    "Profit always increases"
   ],
   "tl": [
    "Tataas ang quality at bababa ang cost",
    "Bababa ang quality at safety, at tataas ang cost",
    "Walang magbabago",
    "Siguradong lalaki ang kita"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{工程|こうてい}が{遅|おく}れていると{分|わ}かった。{職長|しょくちょう}がすべきことはどれか。",
  "o": [
   "{遅|おく}れを{隠|かく}す",
   "{原因|げんいん}を{確認|かくにん}し、{元請|もとうけ}に{報告|ほうこく}して{対策|たいさく}を{相談|そうだん}する",
   "{安全確認|あんぜんかくにん}を{省|はぶ}いて{急|いそ}ぐ",
   "{何|なに}もしないで{待|ま}つ"
  ],
  "a": 1,
  "tl": "Kapag delayed ang schedule, alamin muna ang dahilan, tapos i-report sa main contractor at pag-usapan ang countermeasure. Huwag itago ang delay at huwag laktawan ang safety check para lang bumilis.",
  "en": "When the schedule is behind, find the cause, report to the main contractor and discuss countermeasures. Never hide the delay and never skip safety checks to go faster.",
  "g": [
   [
    "遅れ",
    "おくれ",
    "delay"
   ],
   [
    "対策",
    "たいさく",
    "countermeasure"
   ]
  ],
  "tq": {
   "en": "You find out the schedule is behind. What should the foreman do?",
   "tl": "Nalaman mong delayed ang schedule. Ano ang dapat gawin ng foreman?"
  },
  "to": {
   "en": [
    "Hide the delay",
    "Check the cause, report to the main contractor and discuss countermeasures",
    "Skip safety checks and hurry",
    "Do nothing and wait"
   ],
   "tl": [
    "Itago ang delay",
    "Alamin ang dahilan, i-report sa main contractor at pag-usapan ang countermeasure",
    "Laktawan ang safety check at magmadali",
    "Maghintay lang nang walang ginagawa"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "品質・工程・原価",
  "q": "{原価|げんか}を{増|ふ}やしてしまう{原因|げんいん}として{正|ただ}しいものはどれか。",
  "o": [
   "{材料|ざいりょう}のむだや{!手直|てなお}し{作業|さぎょう}",
   "{正|ただ}しい{!段取|だんど}り",
   "{作業前|さぎょうまえ}の{打|う}ち{合|あ}わせ",
   "{道具|どうぐ}の{点検|てんけん}"
  ],
  "a": 0,
  "tl": "Tumataas ang cost kapag may nasasayang na materyales o kailangang ulitin ang trabaho (手直し, rework). Kaya mahalaga ang maayos na paghahanda (段取り) bago magsimula.",
  "en": "Cost goes up when materials are wasted or work has to be redone (手直し, rework). That is why good preparation (段取り) before starting matters.",
  "g": [
   [
    "手直し",
    "てなおし",
    "rework"
   ],
   [
    "段取り",
    "だんどり",
    "preparation, planning"
   ]
  ],
  "tq": {
   "en": "Which is a cause that increases cost?",
   "tl": "Alin ang dahilan ng pagtaas ng cost?"
  },
  "to": {
   "en": [
    "Wasted materials and rework",
    "Proper preparation",
    "A meeting before work",
    "Checking tools"
   ],
   "tl": [
    "Nasasayang na materyales at rework",
    "Maayos na paghahanda",
    "Meeting bago ang trabaho",
    "Pag-check ng mga gamit"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "環境",
  "q": "{現場|げんば}の{!周辺環境|しゅうへんかんきょう}への{配慮|はいりょ}として{正|ただ}しいものはどれか。",
  "o": [
   "{!騒音|そうおん}・{!振動|しんどう}・ほこりをできるだけ{減|へ}らす",
   "{夜中|よなか}に{大|おお}きな{音|おと}の{作業|さぎょう}をする",
   "ごみを{道路|どうろ}に{置|お}く",
   "{近所|きんじょ}の{人|ひと}の{話|はなし}は{聞|き}かない"
  ],
  "a": 0,
  "tl": "Mahalaga rin ang mga kapitbahay ng site. Bawasan hangga't maaari ang ingay (騒音), vibration (振動), at alikabok, at panatilihing malinis ang paligid ng site.",
  "en": "The neighbors of the site matter too. Keep noise (騒音), vibration (振動) and dust as low as possible, and keep the area around the site clean.",
  "g": [
   [
    "騒音",
    "そうおん",
    "noise"
   ],
   [
    "振動",
    "しんどう",
    "vibration"
   ],
   [
    "周辺",
    "しゅうへん",
    "surroundings"
   ]
  ],
  "tq": {
   "en": "Which is correct care for the environment around the site?",
   "tl": "Alin ang tamang pag-aalaga sa paligid ng site?"
  },
  "to": {
   "en": [
    "Reduce noise, vibration and dust as much as possible",
    "Do loud work in the middle of the night",
    "Leave garbage on the road",
    "Don't listen to the neighbors"
   ],
   "tl": [
    "Bawasan hangga't maaari ang ingay, vibration, at alikabok",
    "Gumawa ng maingay na trabaho sa hatinggabi",
    "Iwan ang basura sa kalsada",
    "Huwag pakinggan ang mga kapitbahay"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "図面・建設業",
  "q": "{工事|こうじ}の{内容|ないよう}を{示|しめ}す「{!設計図書|せっけいとしょ}」に{含|ふく}まれるものはどれか。",
  "o": [
   "{設計図|せっけいず}と{!仕様書|しようしょ}",
   "{作業員|さぎょういん}の{給料表|きゅうりょうひょう}",
   "{会社|かいしゃ}の{広告|こうこく}",
   "{天気予報|てんきよほう}"
  ],
  "a": 0,
  "tl": "Ang 設計図書 (design documents) ay ang mga papel na nagsasabi kung ano ang gagawin sa construction, gaya ng design drawing (設計図) at specifications (仕様書). Dito nakabatay ang trabaho ng lahat.",
  "en": "Design documents (設計図書) describe what will be built, such as the design drawings (設計図) and specifications (仕様書). Everyone's work is based on them.",
  "g": [
   [
    "設計図書",
    "せっけいとしょ",
    "design documents"
   ],
   [
    "仕様書",
    "しようしょ",
    "specifications"
   ]
  ],
  "tq": {
   "en": "Which is included in the \"design documents\" that show the content of the work?",
   "tl": "Alin ang kasama sa \"design documents\" na nagpapakita ng laman ng trabaho?"
  },
  "to": {
   "en": [
    "Design drawings and specifications",
    "The workers' pay table",
    "The company's advertisement",
    "The weather forecast"
   ],
   "tl": [
    "Design drawings at specifications",
    "Listahan ng sahod ng mga worker",
    "Advertisement ng kumpanya",
    "Weather forecast"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "図面・建設業",
  "q": "{!施工図|せこうず}の{役割|やくわり}として{正|ただ}しいものはどれか。",
  "o": [
   "{設計図|せっけいず}をもとに、{現場|げんば}で{実際|じっさい}に{作|つく}るための{細|こま}かい{!寸法|すんぽう}や{!納|おさ}まりを{示|しめ}す",
   "{建物|たてもの}の{値段|ねだん}を{決|き}める",
   "{作業員|さぎょういん}の{休|やす}みを{決|き}める",
   "{工事|こうじ}の{宣伝|せんでん}に{使|つか}う"
  ],
  "a": 0,
  "tl": "Ang 施工図 (shop drawing) ay ginagawa base sa design drawing. Ipinapakita nito ang eksaktong sukat (寸法) at kung paano pagdudugtungin ang mga parte (納まり) para talagang magawa sa site.",
  "en": "A shop drawing (施工図) is made from the design drawings. It shows the exact dimensions (寸法) and how the parts fit together (納まり) so the work can actually be built on site.",
  "g": [
   [
    "施工図",
    "せこうず",
    "shop drawing"
   ],
   [
    "寸法",
    "すんぽう",
    "dimension"
   ],
   [
    "納まり",
    "おさまり",
    "how parts fit together"
   ]
  ],
  "tq": {
   "en": "Which is the correct role of a shop drawing?",
   "tl": "Alin ang tamang papel ng shop drawing?"
  },
  "to": {
   "en": [
    "Based on the design drawings, it shows detailed dimensions and how parts fit together for building on site",
    "It sets the price of the building",
    "It decides the workers' days off",
    "It is used to advertise the work"
   ],
   "tl": [
    "Base sa design drawing, ipinapakita nito ang eksaktong sukat at pagkakadugtong ng mga parte para sa site",
    "Dito nakatakda ang presyo ng building",
    "Dito nakatakda ang day off ng mga worker",
    "Ginagamit ito sa advertisement"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "図面・建設業",
  "q": "{!建設業法|けんせつぎょうほう}の{目的|もくてき}として{正|ただ}しいものはどれか。",
  "o": [
   "{工事|こうじ}を{適正|てきせい}に{行|おこな}い、{!発注者|はっちゅうしゃ}を{守|まも}り、{建設業|けんせつぎょう}を{健全|けんぜん}に{発展|はってん}させる",
   "{外国人|がいこくじん}の{在留資格|ざいりゅうしかく}を{決|き}める",
   "{作業員|さぎょういん}の{給料|きゅうりょう}を{全国|ぜんこく}で{同|おな}じにする",
   "{建物|たてもの}のデザインを{決|き}める"
  ],
  "a": 0,
  "tl": "Ang layunin ng 建設業法 (Construction Business Act) ay siguraduhing tama ang paggawa ng construction, protektahan ang client (発注者), at palaguin nang maayos ang construction industry.",
  "en": "The Construction Business Act (建設業法) aims to make sure construction is done properly, protect the client (発注者), and help the construction industry develop soundly.",
  "g": [
   [
    "建設業法",
    "けんせつぎょうほう",
    "Construction Business Act"
   ],
   [
    "発注者",
    "はっちゅうしゃ",
    "client (the one who orders the work)"
   ]
  ],
  "tq": {
   "en": "Which is the correct purpose of the Construction Business Act?",
   "tl": "Alin ang tamang layunin ng Construction Business Act?"
  },
  "to": {
   "en": [
    "To carry out work properly, protect the client, and develop the construction industry soundly",
    "To decide foreigners' visa status",
    "To make workers' pay the same nationwide",
    "To decide the design of buildings"
   ],
   "tl": [
    "Gawin nang tama ang trabaho, protektahan ang client, at palaguin nang maayos ang construction industry",
    "Magdesisyon sa visa status ng mga foreigner",
    "Gawing pare-pareho ang sahod sa buong bansa",
    "Magdesisyon sa design ng building"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "図面・建設業",
  "q": "{発注者|はっちゅうしゃ}から{直接|ちょくせつ}{工事|こうじ}を{請|う}け{負|お}う{会社|かいしゃ}を{何|なん}というか。",
  "o": [
   "{元請|もとうけ}",
   "{!下請|したうけ}",
   "{!孫請|まごうけ}",
   "{派遣|はけん}"
  ],
  "a": 0,
  "tl": "Ang 元請 (main contractor) ay ang kumpanyang direktang kumuha ng trabaho mula sa client. Ang 下請 (subcontractor) ay kumukuha ng trabaho mula sa 元請. Kadalasan, ang foreman (職長) ay nasa subcontractor at nakikipag-coordinate sa 元請.",
  "en": "The main contractor (元請) takes the work directly from the client. A subcontractor (下請) takes work from the main contractor. A foreman (職長) is usually with a subcontractor and coordinates with the main contractor.",
  "g": [
   [
    "元請",
    "もとうけ",
    "main contractor"
   ],
   [
    "下請",
    "したうけ",
    "subcontractor"
   ],
   [
    "孫請",
    "まごうけ",
    "sub-subcontractor"
   ]
  ],
  "tq": {
   "en": "What is the company that takes the work directly from the client called?",
   "tl": "Ano ang tawag sa kumpanyang direktang kumuha ng trabaho mula sa client?"
  },
  "to": {
   "en": [
    "Main contractor (motouke)",
    "Subcontractor (shitauke)",
    "Sub-subcontractor (magouke)",
    "Dispatch worker (haken)"
   ],
   "tl": [
    "Main contractor (motouke)",
    "Subcontractor (shitauke)",
    "Sub-subcontractor (magouke)",
    "Dispatch worker (haken)"
   ]
  },
  "lv": "basic",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "{建設業者|けんせつぎょうしゃ}が、{請|う}け{負|お}ったすべての{工事現場|こうじげんば}に{置|お}かなければならない{技術者|ぎじゅつしゃ}はどれか。",
  "o": [
   "{!主任技術者|しゅにんぎじゅつしゃ}",
   "{安全衛生推進者|あんぜんえいせいすいしんしゃ}",
   "{職長|しょくちょう}",
   "{現場代理人|げんばだいりにん}"
  ],
  "a": 0,
  "tl": "Ayon sa 建設業法, lahat ng construction company ay dapat maglagay ng 主任技術者 (chief engineer) sa bawat site na kinuha nila, para siguraduhin ang technical na kalidad ng trabaho. Hindi ito pareho ng 職長 (foreman) na nag-aasikaso ng mga worker.",
  "en": "Under the Construction Business Act, a construction company must place a chief engineer (主任技術者) at every site it contracts, to manage the technical quality of the work. This is different from the foreman (職長), who leads the workers.",
  "g": [
   [
    "主任技術者",
    "しゅにんぎじゅつしゃ",
    "chief engineer"
   ],
   [
    "技術者",
    "ぎじゅつしゃ",
    "engineer"
   ]
  ],
  "tq": {
   "en": "Which engineer must a construction company place at every site it contracts?",
   "tl": "Aling engineer ang dapat ilagay ng construction company sa bawat site na kinuha nila?"
  },
  "to": {
   "en": [
    "Chief engineer (shunin gijutsusha)",
    "Health and safety promoter",
    "Foreman (shokuchō)",
    "Site agent (genba dairinin)"
   ],
   "tl": [
    "Chief engineer (shunin gijutsusha)",
    "Health and safety promoter",
    "Foreman (shokuchō)",
    "Site agent (genba dairinin)"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "{元請|もとうけ}として{大|おお}きな{金額|きんがく}を{下請|したうけ}に{出|だ}す{工事|こうじ}で、{主任技術者|しゅにんぎじゅつしゃ}の{代|か}わりに{置|お}く{技術者|ぎじゅつしゃ}はどれか。",
  "o": [
   "{!監理技術者|かんりぎじゅつしゃ}",
   "{作業主任者|さぎょうしゅにんしゃ}",
   "{安全衛生責任者|あんぜんえいせいせきにんしゃ}",
   "{職長|しょくちょう}"
  ],
  "a": 0,
  "tl": "Kapag main contractor (元請) ka at malaki ang halaga ng trabahong ibinibigay mo sa mga subcontractor, kailangan mong maglagay ng 監理技術者 (supervising engineer) imbes na 主任技術者. Mas mataas na qualification ang kailangan dito.",
  "en": "When the main contractor (元請) subcontracts a large amount of work, it must place a supervising engineer (監理技術者) instead of a chief engineer. This role needs a higher qualification.",
  "g": [
   [
    "監理技術者",
    "かんりぎじゅつしゃ",
    "supervising engineer"
   ],
   [
    "下請",
    "したうけ",
    "subcontractor"
   ]
  ],
  "tq": {
   "en": "On a job where the main contractor subcontracts a large amount, which engineer is placed instead of the chief engineer?",
   "tl": "Sa trabahong malaki ang halagang ibinibigay ng main contractor sa subcontractor, aling engineer ang ilalagay imbes na chief engineer?"
  },
  "to": {
   "en": [
    "Supervising engineer (kanri gijutsusha)",
    "Operations chief (sagyō shuninsha)",
    "Health and safety officer",
    "Foreman"
   ],
   "tl": [
    "Supervising engineer (kanri gijutsusha)",
    "Operations chief (sagyō shuninsha)",
    "Health and safety officer",
    "Foreman"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "{請負契約|うけおいけいやく}にもとづき、{受注者|じゅちゅうしゃ}の{代理|だいり}として{工事現場|こうじげんば}を{運営|うんえい}・{取|と}り{締|し}まる{人|ひと}はどれか。",
  "o": [
   "{!現場代理人|げんばだいりにん}",
   "{発注者|はっちゅうしゃ}",
   "{作業員|さぎょういん}",
   "{設計者|せっけいしゃ}"
  ],
  "a": 0,
  "tl": "Ang 現場代理人 (site agent) ay ang representative ng contractor (受注者) sa site. Siya ang namamahala at nagpapatakbo ng site base sa contract. Sa maliit na site, puwedeng iisang tao ang 現場代理人 at 主任技術者.",
  "en": "The site agent (現場代理人) represents the contractor (受注者) on site and runs and controls the site under the contract. On small sites one person may serve as both site agent and chief engineer.",
  "g": [
   [
    "現場代理人",
    "げんばだいりにん",
    "site agent"
   ],
   [
    "受注者",
    "じゅちゅうしゃ",
    "contractor (the one who receives the order)"
   ],
   [
    "請負契約",
    "うけおいけいやく",
    "construction contract"
   ]
  ],
  "tq": {
   "en": "Under the contract, who runs and controls the site as the contractor's representative?",
   "tl": "Base sa contract, sino ang nagpapatakbo ng site bilang representative ng contractor?"
  },
  "to": {
   "en": [
    "Site agent (genba dairinin)",
    "Client (hacchūsha)",
    "Worker",
    "Designer"
   ],
   "tl": [
    "Site agent (genba dairinin)",
    "Client (hacchūsha)",
    "Worker",
    "Designer"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "{下請|したうけ}の{会社|かいしゃ}が{選|えら}び、{元請|もとうけ}の{統括安全衛生責任者|とうかつあんぜんえいせいせきにんしゃ}との{連絡|れんらく}などを{行|おこな}う{人|ひと}はどれか。",
  "o": [
   "{!安全衛生責任者|あんぜんえいせいせきにんしゃ}",
   "{監理技術者|かんりぎじゅつしゃ}",
   "{現場代理人|げんばだいりにん}",
   "{産業医|さんぎょうい}"
  ],
  "a": 0,
  "tl": "Ang subcontractor ay pumipili ng 安全衛生責任者 (health and safety officer). Siya ang kumokonekta sa 統括安全衛生責任者 ng main contractor, at nagpapasa ng mga safety instruction sa sarili niyang mga worker. Kadalasan, ang foreman ang gumagawa nito.",
  "en": "A subcontractor appoints a health and safety officer (安全衛生責任者), who liaises with the main contractor's general health and safety manager and passes safety instructions to their own workers. The foreman often takes this role.",
  "g": [
   [
    "安全衛生責任者",
    "あんぜんえいせいせきにんしゃ",
    "health and safety officer"
   ],
   [
    "統括",
    "とうかつ",
    "overall, general"
   ],
   [
    "連絡",
    "れんらく",
    "contact, liaison"
   ]
  ],
  "tq": {
   "en": "Who is appointed by the subcontractor and liaises with the main contractor's general health and safety manager?",
   "tl": "Sino ang pinipili ng subcontractor at kumokonekta sa general health and safety manager ng main contractor?"
  },
  "to": {
   "en": [
    "Health and safety officer (anzen eisei sekininsha)",
    "Supervising engineer",
    "Site agent",
    "Company doctor"
   ],
   "tl": [
    "Health and safety officer (anzen eisei sekininsha)",
    "Supervising engineer",
    "Site agent",
    "Company doctor"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "{型枠支保工|かたわくしほこう}の{組立|くみた}てなど、{法律|ほうりつ}で{決|き}められた{危険|きけん}な{作業|さぎょう}で、{作業|さぎょう}を{直接|ちょくせつ}{指揮|しき}するために{選|えら}ばれる{人|ひと}はどれか。",
  "o": [
   "{!作業主任者|さぎょうしゅにんしゃ}",
   "{現場代理人|げんばだいりにん}",
   "{発注者|はっちゅうしゃ}",
   "{設計者|せっけいしゃ}"
  ],
  "a": 0,
  "tl": "Sa mga delikadong trabaho na nakasaad sa batas, gaya ng pag-assemble ng 型枠支保工 (formwork shoring), kailangang pumili ng 作業主任者 (operations chief) na may tamang qualification. Siya ang direktang nag-uutos at nagbabantay sa trabaho.",
  "en": "For dangerous work set by law, such as assembling formwork shoring (型枠支保工), an operations chief (作業主任者) with the proper qualification must be appointed to direct the work in person.",
  "g": [
   [
    "作業主任者",
    "さぎょうしゅにんしゃ",
    "operations chief"
   ],
   [
    "型枠支保工",
    "かたわくしほこう",
    "formwork shoring"
   ],
   [
    "指揮",
    "しき",
    "direct, command"
   ]
  ],
  "tq": {
   "en": "For dangerous work set by law, such as assembling formwork shoring, who is appointed to direct the work in person?",
   "tl": "Sa delikadong trabahong nakasaad sa batas, gaya ng pag-assemble ng formwork shoring, sino ang pinipili para direktang mag-utos sa trabaho?"
  },
  "to": {
   "en": [
    "Operations chief (sagyō shuninsha)",
    "Site agent",
    "Client",
    "Designer"
   ],
   "tl": [
    "Operations chief (sagyō shuninsha)",
    "Site agent",
    "Client",
    "Designer"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "法令・役割",
  "q": "つり{上|あ}げ{荷重|かじゅう}1トン{以上|いじょう}のクレーンで{!玉掛|たまか}けをするために{必要|ひつよう}なものはどれか。",
  "o": [
   "{玉掛|たまか}け{!技能講習|ぎのうこうしゅう}の{修了|しゅうりょう}",
   "{運転免許証|うんてんめんきょしょう}だけ",
   "{職長|しょくちょう}の{許可|きょか}だけ",
   "{特別|とくべつ}なものは{必要|ひつよう}ない"
  ],
  "a": 0,
  "tl": "Para sa 玉掛け (slinging) sa crane na 1 ton pataas ang lifting capacity, kailangan mong natapos ang 玉掛け技能講習 (slinging skill training). Kung mas mababa sa 1 ton, special training (特別教育) ang kailangan.",
  "en": "Slinging (玉掛け) for a crane with a lifting capacity of 1 ton or more requires completing the slinging skill training (技能講習). Below 1 ton, special training (特別教育) is required.",
  "g": [
   [
    "玉掛け",
    "たまかけ",
    "slinging"
   ],
   [
    "技能講習",
    "ぎのうこうしゅう",
    "skill training course"
   ],
   [
    "荷重",
    "かじゅう",
    "load"
   ]
  ],
  "tq": {
   "en": "What is required to do slinging on a crane with a lifting capacity of 1 ton or more?",
   "tl": "Ano ang kailangan para mag-slinging sa crane na 1 ton pataas ang lifting capacity?"
  },
  "to": {
   "en": [
    "Completion of the slinging skill training",
    "Only a driver's license",
    "Only the foreman's permission",
    "Nothing special is required"
   ],
   "tl": [
    "Natapos ang slinging skill training",
    "Driver's license lang",
    "Permiso lang ng foreman",
    "Walang espesyal na kailangan"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{労働安全衛生規則|ろうどうあんぜんえいせいきそく}で、{墜落|ついらく}のおそれがある{場所|ばしょ}に{!作業床|さぎょうしょう}を{設|もう}けなければならない{高|たか}さはどれか。",
  "o": [
   "1m{以上|いじょう}",
   "1.5m{以上|いじょう}",
   "2m{以上|いじょう}",
   "3m{以上|いじょう}"
  ],
  "a": 2,
  "tl": "Ayon sa 労働安全衛生規則 (Industrial Safety and Health Regulations), kapag nagtatrabaho sa lugar na 2m pataas at may panganib na mahulog, kailangang maglagay ng 作業床 (working platform). Kapag hindi talaga puwede, gumamit ng safety net o fall-arrest harness.",
  "en": "Under the Industrial Safety and Health Regulations, work at a height of 2 m or more with a risk of falling requires a working platform (作業床). If that is not possible, use safety nets or a fall-arrest harness.",
  "g": [
   [
    "作業床",
    "さぎょうしょう",
    "working platform"
   ],
   [
    "墜落",
    "ついらく",
    "fall from height"
   ],
   [
    "労働安全衛生規則",
    "ろうどうあんぜんえいせいきそく",
    "Industrial Safety and Health Regulations"
   ]
  ],
  "tq": {
   "en": "Under the Industrial Safety and Health Regulations, at what height must a working platform be provided where there is a risk of falling?",
   "tl": "Ayon sa Industrial Safety and Health Regulations, sa anong taas kailangang maglagay ng working platform kapag may panganib na mahulog?"
  },
  "to": {
   "en": [
    "1 m or more",
    "1.5 m or more",
    "2 m or more",
    "3 m or more"
   ],
   "tl": [
    "1 m pataas",
    "1.5 m pataas",
    "2 m pataas",
    "3 m pataas"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "安全衛生",
  "q": "{法令|ほうれい}で「{!酸素欠乏|さんそけつぼう}」とされるのは、{空気中|くうきちゅう}の{酸素濃度|さんそのうど}が{何|なん}%{未満|みまん}の{状態|じょうたい}か。",
  "o": [
   "21%",
   "18%",
   "15%",
   "10%"
  ],
  "a": 1,
  "tl": "Normal na hangin ay mga 21% oxygen. Ayon sa batas, 酸素欠乏 (oxygen deficiency) kapag mababa sa 18%. Sa manhole, tangke, o malalim na hukay, sukatin muna ang oxygen bago pumasok at mag-ventilate.",
  "en": "Normal air is about 21% oxygen. By law, oxygen deficiency (酸素欠乏) means below 18%. Before entering manholes, tanks or deep pits, measure the oxygen and ventilate.",
  "g": [
   [
    "酸素欠乏",
    "さんそけつぼう",
    "oxygen deficiency"
   ],
   [
    "濃度",
    "のうど",
    "concentration"
   ],
   [
    "未満",
    "みまん",
    "less than"
   ]
  ],
  "tq": {
   "en": "By law, \"oxygen deficiency\" means the oxygen concentration in the air is below what percent?",
   "tl": "Ayon sa batas, ang \"oxygen deficiency\" ay kapag ang oxygen sa hangin ay mababa sa ilang porsyento?"
  },
  "to": {
   "en": [
    "21%",
    "18%",
    "15%",
    "10%"
   ],
   "tl": [
    "21%",
    "18%",
    "15%",
    "10%"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{工場|こうじょう}で{作|つく}ったコンクリート{杭|くい}や{鋼管杭|こうかんぐい}を、{地盤|じばん}に{打|う}ち{込|こ}んだり{埋|う}め{込|こ}んだりする{杭|くい}を{何|なん}というか。",
  "o": [
   "{!既製杭|きせいぐい}",
   "{場所打|ばしょう}ちコンクリート{杭|くい}",
   "{丁張|ちょうは}り",
   "{土留|どど}め"
  ],
  "a": 0,
  "tl": "Ang 既製杭 (precast pile) ay ginawa na sa factory, gaya ng concrete pile o steel pipe pile, at ipinapasok sa lupa sa site. Ang 場所打ちコンクリート杭 (cast-in-place pile) naman ay hinuhukay ang butas sa site, nilalagyan ng rebar cage, at binubuhusan ng concrete.",
  "en": "A precast pile (既製杭) is made in a factory, such as a concrete or steel pipe pile, and driven or embedded into the ground on site. A cast-in-place pile is made by digging a hole on site, placing a rebar cage and pouring concrete.",
  "g": [
   [
    "既製杭",
    "きせいぐい",
    "precast pile"
   ],
   [
    "鋼管杭",
    "こうかんぐい",
    "steel pipe pile"
   ],
   [
    "地盤",
    "じばん",
    "ground"
   ]
  ],
  "tq": {
   "en": "What is a pile made in a factory, such as a concrete or steel pipe pile, that is driven or embedded into the ground called?",
   "tl": "Ano ang tawag sa pile na ginawa sa factory, gaya ng concrete o steel pipe pile, na ipinapasok sa lupa?"
  },
  "to": {
   "en": [
    "Precast pile (kisei-gui)",
    "Cast-in-place concrete pile",
    "Batter board (chōhari)",
    "Earth retaining (dodome)"
   ],
   "tl": [
    "Precast pile (kisei-gui)",
    "Cast-in-place concrete pile",
    "Batter board (chōhari)",
    "Earth retaining (dodome)"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{!浚渫|しゅんせつ}{工事|こうじ}の{説明|せつめい}として{正|ただ}しいものはどれか。",
  "o": [
   "{川|かわ}や{港|みなと}の{水底|みなそこ}の{土砂|どしゃ}を{掘|ほ}って{取|と}り{除|のぞ}く",
   "{建物|たてもの}の{屋根|やね}をつくる",
   "{道路|どうろ}に{白線|はくせん}を{引|ひ}く",
   "{電線|でんせん}を{地中|ちちゅう}に{埋|う}める"
  ],
  "a": 0,
  "tl": "Ang 浚渫 (dredging) ay paghukay at pagtanggal ng lupa at buhangin sa ilalim ng ilog o pantalan, para lumalim ang tubig at makadaan ang barko o umagos nang maayos ang tubig.",
  "en": "Dredging (浚渫) means digging up and removing soil and sand from the bottom of rivers or harbors, to deepen the water for ships or to keep water flowing.",
  "g": [
   [
    "浚渫",
    "しゅんせつ",
    "dredging"
   ],
   [
    "土砂",
    "どしゃ",
    "soil and sand"
   ],
   [
    "水底",
    "みなそこ",
    "bottom of the water"
   ]
  ],
  "tq": {
   "en": "Which correctly describes dredging work?",
   "tl": "Alin ang tamang paliwanag ng dredging work?"
  },
  "to": {
   "en": [
    "Digging up and removing soil and sand from the bottom of rivers or harbors",
    "Building the roof of a building",
    "Painting white lines on roads",
    "Burying electric cables underground"
   ],
   "tl": [
    "Paghukay at pagtanggal ng lupa at buhangin sa ilalim ng ilog o pantalan",
    "Paggawa ng bubong ng building",
    "Pagpinta ng white line sa kalsada",
    "Pagbaon ng kable ng kuryente sa ilalim ng lupa"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{鉄筋|てっきん}の{!継手|つぎて}の{種類|しゅるい}ではないものはどれか。",
  "o": [
   "{重|かさ}ね{継手|つぎて}",
   "ガス{圧接|あっせつ}{継手|つぎて}",
   "{機械式継手|きかいしきつぎて}",
   "{!高力|こうりょく}ボルト{摩擦接合|まさつせつごう}"
  ],
  "a": 3,
  "tl": "Ang mga uri ng 継手 (splice) ng rebar ay 重ね継手 (lap splice), ガス圧接継手 (gas pressure welding), 機械式継手 (mechanical splice), at welded splice. Ang 高力ボルト摩擦接合 (high-strength bolt friction joint) ay ginagamit sa steel frame, hindi sa rebar.",
  "en": "Rebar splices (継手) include lap splices, gas pressure welded splices, mechanical splices and welded splices. A high-strength bolt friction joint is used for steel frames, not rebar.",
  "g": [
   [
    "継手",
    "つぎて",
    "splice, joint"
   ],
   [
    "圧接",
    "あっせつ",
    "pressure welding"
   ],
   [
    "高力ボルト",
    "こうりょくボルト",
    "high-strength bolt"
   ]
  ],
  "tq": {
   "en": "Which is NOT a type of rebar splice?",
   "tl": "Alin ang HINDI uri ng rebar splice?"
  },
  "to": {
   "en": [
    "Lap splice",
    "Gas pressure welded splice",
    "Mechanical splice",
    "High-strength bolt friction joint"
   ],
   "tl": [
    "Lap splice",
    "Gas pressure welded splice",
    "Mechanical splice",
    "High-strength bolt friction joint"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{鉄筋|てっきん}コンクリートの「{!かぶり厚|かぶりあつ}さ」を{確保|かくほ}する{主|おも}な{目的|もくてき}はどれか。",
  "o": [
   "{鉄筋|てっきん}がさびるのを{防|ふせ}ぎ、{火災|かさい}から{守|まも}る",
   "コンクリートの{色|いろ}をきれいにする",
   "{工事|こうじ}を{早|はや}く{終|お}わらせる",
   "{材料費|ざいりょうひ}を{減|へ}らす"
  ],
  "a": 0,
  "tl": "Ang かぶり厚さ (concrete cover) ay ang kapal ng concrete na tumatakip sa rebar. Pinoprotektahan nito ang rebar laban sa kalawang at sunog, at tumutulong para kumapit nang maayos ang concrete sa rebar.",
  "en": "Concrete cover (かぶり厚さ) is the thickness of concrete over the rebar. It protects the rebar from rust and fire and helps the concrete bond to the rebar.",
  "g": [
   [
    "かぶり厚さ",
    "かぶりあつさ",
    "concrete cover"
   ],
   [
    "鉄筋",
    "てっきん",
    "rebar"
   ],
   [
    "火災",
    "かさい",
    "fire"
   ]
  ],
  "tq": {
   "en": "What is the main purpose of keeping the proper concrete cover in reinforced concrete?",
   "tl": "Ano ang main purpose ng tamang concrete cover sa reinforced concrete?"
  },
  "to": {
   "en": [
    "To stop the rebar from rusting and protect it from fire",
    "To make the concrete color nicer",
    "To finish the work faster",
    "To reduce material costs"
   ],
   "tl": [
    "Para hindi kalawangin ang rebar at maprotektahan sa sunog",
    "Para gumanda ang kulay ng concrete",
    "Para matapos agad ang trabaho",
    "Para bumaba ang gastos sa materyales"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{!盛土|もりど}を{作|つく}るときの{正|ただ}しい{方法|ほうほう}はどれか。",
  "o": [
   "{土|つち}を{薄|うす}く{何層|なんそう}にも{分|わ}けて、そのたびに{締|し}め{固|かた}める",
   "{一度|いちど}に{厚|あつ}く{盛|も}ってから{最後|さいご}に{締|し}め{固|かた}める",
   "{締|し}め{固|かた}めずに{自然|しぜん}に{沈|しず}むのを{待|ま}つ",
   "{雨|あめ}の{日|ひ}に{水|みず}を{含|ふく}ませて{盛|も}る"
  ],
  "a": 0,
  "tl": "Sa 盛土 (embankment), ilagay ang lupa nang manipis na layer, tapos i-compact (締め固め) bawat layer bago maglagay ng susunod. Kapag makapal ang inilagay nang isang beses, hindi masisiksik ang ilalim at puwedeng lumubog o gumuho.",
  "en": "For an embankment (盛土), spread the soil in thin layers and compact (締め固め) each layer before adding the next. A thick layer placed at once cannot be compacted at the bottom and may settle or collapse.",
  "g": [
   [
    "盛土",
    "もりど",
    "embankment, fill"
   ],
   [
    "締め固め",
    "しめかため",
    "compaction"
   ],
   [
    "層",
    "そう",
    "layer"
   ]
  ],
  "tq": {
   "en": "Which is the correct way to build an embankment?",
   "tl": "Alin ang tamang paraan ng paggawa ng embankment?"
  },
  "to": {
   "en": [
    "Spread soil in many thin layers and compact each one",
    "Pile it thick at once and compact only at the end",
    "Don't compact it and wait for it to settle naturally",
    "Soak it with water on a rainy day and pile it"
   ],
   "tl": [
    "Ilagay nang manipis na layer at i-compact bawat isa",
    "Ilagay nang makapal nang isang beses at i-compact sa dulo lang",
    "Huwag i-compact at hintaying lumubog nang kusa",
    "Basain sa ulan bago ilagay"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{地震|じしん}の{揺|ゆ}れを、{建物|たてもの}の{中|なか}に{設|もう}けたダンパーなどで{吸収|きゅうしゅう}して{小|ちい}さくする{構造|こうぞう}を{何|なん}というか。",
  "o": [
   "{!制振|せいしん}{構造|こうぞう}",
   "{!免震|めんしん}{構造|こうぞう}",
   "{仮設|かせつ}{構造|こうぞう}",
   "{木造|もくぞう}"
  ],
  "a": 0,
  "tl": "Ang 制振構造 (vibration control) ay naglalagay ng damper sa loob ng building para sumipsip ng lindol. Ang 免震構造 (base isolation) naman ay naglalagay ng rubber bearing sa pagitan ng building at foundation para hindi gaanong maipasa ang galaw ng lupa.",
  "en": "Vibration control structures (制振構造) use dampers inside the building to absorb earthquake shaking. Base isolation (免震構造) places rubber bearings between the building and the foundation so ground motion is not passed up.",
  "g": [
   [
    "制振",
    "せいしん",
    "vibration control"
   ],
   [
    "免震",
    "めんしん",
    "base isolation"
   ],
   [
    "吸収",
    "きゅうしゅう",
    "absorb"
   ]
  ],
  "tq": {
   "en": "What is a structure that absorbs and reduces earthquake shaking with dampers inside the building called?",
   "tl": "Ano ang tawag sa structure na sumisipsip at nagbabawas ng lindol gamit ang damper sa loob ng building?"
  },
  "to": {
   "en": [
    "Vibration control structure (seishin)",
    "Base isolation structure (menshin)",
    "Temporary structure",
    "Wooden building"
   ],
   "tl": [
    "Vibration control structure (seishin)",
    "Base isolation structure (menshin)",
    "Temporary structure",
    "Wooden building"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "施工知識",
  "q": "{!型枠支保工|かたわくしほこう}の{説明|せつめい}として{正|ただ}しいものはどれか。",
  "o": [
   "コンクリートを{打|う}つとき、{型枠|かたわく}を{支|ささ}える{仮設|かせつ}の{支柱|しちゅう}など",
   "{完成|かんせい}した{建物|たてもの}の{柱|はしら}",
   "{地面|じめん}を{掘|ほ}る{機械|きかい}",
   "{鉄筋|てっきん}をつなぐ{部品|ぶひん}"
  ],
  "a": 0,
  "tl": "Ang 型枠支保工 (formwork shoring) ay mga pansamantalang poste at beam na sumusuporta sa formwork habang binubuhusan at pinapatigas ang concrete. Kapag bumigay ito, malaking aksidente, kaya may 作業主任者 na nagbabantay sa pag-assemble.",
  "en": "Formwork shoring (型枠支保工) is the temporary posts and beams that hold up the formwork while concrete is poured and cures. A collapse causes serious accidents, so an operations chief supervises its assembly.",
  "g": [
   [
    "型枠支保工",
    "かたわくしほこう",
    "formwork shoring"
   ],
   [
    "型枠",
    "かたわく",
    "formwork"
   ],
   [
    "仮設",
    "かせつ",
    "temporary"
   ]
  ],
  "tq": {
   "en": "Which correctly describes formwork shoring?",
   "tl": "Alin ang tamang paliwanag ng formwork shoring?"
  },
  "to": {
   "en": [
    "Temporary posts and supports that hold up the formwork when pouring concrete",
    "The columns of the finished building",
    "A machine for digging the ground",
    "A part that joins rebar"
   ],
   "tl": [
    "Pansamantalang poste at suporta ng formwork habang nagbubuhos ng concrete",
    "Mga poste ng tapos na building",
    "Makina sa paghukay ng lupa",
    "Piyesa na nagdudugtong ng rebar"
   ]
  },
  "lv": "real",
  "part": "gakka"
 },
 {
  "cat": "土工",
  "q": "{盛土|もりど}や{切土|きりど}をしたときにできる{斜面|しゃめん}を{何|なん}というか。",
  "o": [
   "{!法面|のりめん}",
   "{路盤|ろばん}",
   "{天端|てんば}",
   "{床掘|とこぼ}り"
  ],
  "a": 0,
  "tl": "Ang 法面 (slope face) ay ang slope na nabubuo kapag nag-fill (盛土) o nag-cut (切土) ng lupa. Pinoprotektahan ito ng grass, concrete, o net para hindi gumuho sa ulan.",
  "en": "The slope formed by filling (盛土) or cutting (切土) ground is called a slope face (法面). It is protected with grass, concrete or netting so rain does not wash it away.",
  "g": [
   [
    "法面",
    "のりめん",
    "slope face"
   ],
   [
    "切土",
    "きりど",
    "cut (excavation)"
   ],
   [
    "斜面",
    "しゃめん",
    "slope"
   ]
  ],
  "tq": {
   "en": "What is the slope formed by filling or cutting ground called?",
   "tl": "Ano ang tawag sa slope na nabubuo kapag nag-fill o nag-cut ng lupa?"
  },
  "to": {
   "en": [
    "Slope face (norimen)",
    "Roadbed base (roban)",
    "Crest (tenba)",
    "Trench excavation (tokobori)"
   ],
   "tl": [
    "Slope face (norimen)",
    "Roadbed base (roban)",
    "Crest (tenba)",
    "Trench excavation (tokobori)"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "土工",
  "q": "{掘削|くっさく}したとき、{周|まわ}りの{土|つち}が{崩|くず}れないように{支|ささ}える{仮設|かせつ}の{構造|こうぞう}を{何|なん}というか。",
  "o": [
   "{!土留|どど}め（{山留|やまど}め）",
   "{法面|のりめん}",
   "{舗装|ほそう}",
   "{丁張|ちょうは}り"
  ],
  "a": 0,
  "tl": "Ang 土留め (earth retaining, tinatawag ding 山留め) ay pansamantalang pader, gaya ng sheet pile at strut, na pumipigil sa pagguho ng lupa sa paligid ng hinukay. Mahalaga ito sa safety ng mga nasa loob ng hukay.",
  "en": "Earth retaining (土留め, also 山留め) is a temporary wall, such as sheet piles and struts, that stops the soil around an excavation from collapsing. It protects the people working in the pit.",
  "g": [
   [
    "土留め",
    "どどめ",
    "earth retaining"
   ],
   [
    "掘削",
    "くっさく",
    "excavation"
   ],
   [
    "崩れる",
    "くずれる",
    "to collapse"
   ]
  ],
  "tq": {
   "en": "What is the temporary structure that holds back the surrounding soil so it does not collapse during excavation?",
   "tl": "Ano ang tawag sa pansamantalang structure na pumipigil sa pagguho ng lupa sa paligid ng hinukay?"
  },
  "to": {
   "en": [
    "Earth retaining (dodome / yamadome)",
    "Slope face",
    "Pavement",
    "Batter board"
   ],
   "tl": [
    "Earth retaining (dodome / yamadome)",
    "Slope face",
    "Pavement",
    "Batter board"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "安全",
  "q": "{地山|じやま}の{掘削|くっさく}で、{作業主任者|さぎょうしゅにんしゃ}を{選|えら}ばなければならない{掘削面|くっさくめん}の{高|たか}さはどれか。",
  "o": [
   "1m{以上|いじょう}",
   "1.5m{以上|いじょう}",
   "2m{以上|いじょう}",
   "5m{以上|いじょう}"
  ],
  "a": 2,
  "tl": "Kapag ang taas ng hinuhukay na pader ng lupa (掘削面) ay 2m pataas, kailangang pumili ng 地山の掘削作業主任者 (excavation operations chief) na siyang mag-uutos at magbabantay sa trabaho.",
  "en": "When the excavation face (掘削面) is 2 m high or more, an excavation operations chief (地山の掘削作業主任者) must be appointed to direct and watch the work.",
  "g": [
   [
    "地山",
    "じやま",
    "natural ground"
   ],
   [
    "掘削面",
    "くっさくめん",
    "excavation face"
   ],
   [
    "作業主任者",
    "さぎょうしゅにんしゃ",
    "operations chief"
   ]
  ],
  "tq": {
   "en": "In natural-ground excavation, at what height of the excavation face must an operations chief be appointed?",
   "tl": "Sa paghukay ng natural na lupa, sa anong taas ng excavation face kailangang pumili ng operations chief?"
  },
  "to": {
   "en": [
    "1 m or more",
    "1.5 m or more",
    "2 m or more",
    "5 m or more"
   ],
   "tl": [
    "1 m pataas",
    "1.5 m pataas",
    "2 m pataas",
    "5 m pataas"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "舗装",
  "q": "アスファルト{舗装|ほそう}で、{一番上|いちばんうえ}にある{層|そう}はどれか。",
  "o": [
   "{!表層|ひょうそう}",
   "{路床|ろしょう}",
   "{下層路盤|かそうろばん}",
   "{上層路盤|じょうそうろばん}"
  ],
  "a": 0,
  "tl": "Ang mga layer ng asphalt pavement mula sa ibaba: 路床 (subgrade), 下層路盤 (lower base), 上層路盤 (upper base), 基層 (binder course), at sa pinakaitaas ang 表層 (surface course) na dinadaanan ng sasakyan.",
  "en": "Asphalt pavement layers from the bottom are the subgrade (路床), lower base, upper base, binder course (基層), and on top the surface course (表層) that vehicles drive on.",
  "g": [
   [
    "表層",
    "ひょうそう",
    "surface course"
   ],
   [
    "路床",
    "ろしょう",
    "subgrade"
   ],
   [
    "路盤",
    "ろばん",
    "base course"
   ]
  ],
  "tq": {
   "en": "In asphalt pavement, which layer is on the very top?",
   "tl": "Sa asphalt pavement, aling layer ang nasa pinakaitaas?"
  },
  "to": {
   "en": [
    "Surface course (hyōsō)",
    "Subgrade (roshō)",
    "Lower base course",
    "Upper base course"
   ],
   "tl": [
    "Surface course (hyōsō)",
    "Subgrade (roshō)",
    "Lower base course",
    "Upper base course"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "機械",
  "q": "{狭|せま}い{場所|ばしょ}で{土|つち}を{締|し}め{固|かた}めるときに、{人|ひと}が{持|も}って{使|つか}う{機械|きかい}はどれか。",
  "o": [
   "ランマー",
   "バックホウ",
   "クレーン",
   "ダンプトラック"
  ],
  "a": 0,
  "tl": "Ang ランマー (rammer, tinatawag ding tamper) ay maliit na makina na hawak ng tao at tumatalbog para siksikin ang lupa sa makitid na lugar, gaya ng tabi ng pader o tubo. Ang バックホウ (backhoe) ay panghukay.",
  "en": "A rammer (ランマー, also called a tamper) is a small hand-held machine that bounces to compact soil in tight spots, such as beside walls or pipes. A backhoe is for digging.",
  "g": [
   [
    "ランマー",
    "ランマー",
    "rammer, tamper"
   ],
   [
    "締め固め",
    "しめかため",
    "compaction"
   ],
   [
    "バックホウ",
    "バックホウ",
    "backhoe (excavator)"
   ]
  ],
  "tq": {
   "en": "Which hand-held machine is used to compact soil in narrow places?",
   "tl": "Aling makina na hawak ng tao ang ginagamit para siksikin ang lupa sa makitid na lugar?"
  },
  "to": {
   "en": [
    "Rammer",
    "Backhoe",
    "Crane",
    "Dump truck"
   ],
   "tl": [
    "Rammer",
    "Backhoe",
    "Crane",
    "Dump truck"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "測量",
  "q": "{盛土|もりど}や{切土|きりど}の{高|たか}さや{勾配|こうばい}の{目安|めやす}として、{杭|くい}と{板|いた}で{設置|せっち}するものを{何|なん}というか。",
  "o": [
   "{!丁張|ちょうは}り",
   "{土留|どど}め",
   "{足場|あしば}",
   "{型枠|かたわく}"
  ],
  "a": 0,
  "tl": "Ang 丁張り (batter board) ay mga stake at board na inilalagay sa site para ipakita ang tamang taas at slope (勾配) ng fill o cut. Ito ang tinitingnan ng operator at mga worker habang nagtatrabaho.",
  "en": "Batter boards (丁張り) are stakes and boards set on site to show the correct height and slope (勾配) of a fill or cut. Operators and workers follow them while working.",
  "g": [
   [
    "丁張り",
    "ちょうはり",
    "batter board"
   ],
   [
    "勾配",
    "こうばい",
    "slope, gradient"
   ],
   [
    "目安",
    "めやす",
    "guide, reference"
   ]
  ],
  "tq": {
   "en": "What are the stakes and boards set up as a guide for the height and slope of a fill or cut called?",
   "tl": "Ano ang tawag sa mga stake at board na gabay sa taas at slope ng fill o cut?"
  },
  "to": {
   "en": [
    "Batter board (chōhari)",
    "Earth retaining",
    "Scaffold",
    "Formwork"
   ],
   "tl": [
    "Batter board (chōhari)",
    "Earth retaining",
    "Scaffold",
    "Formwork"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "土木"
 },
 {
  "cat": "測量",
  "q": "{工事|こうじ}の{基準|きじゅん}となる{線|せん}や{位置|いち}を、{床|ゆか}などに{書|か}き{出|だ}す{作業|さぎょう}を{何|なん}というか。",
  "o": [
   "{!墨出|すみだ}し",
   "{養生|ようじょう}",
   "{配筋|はいきん}",
   "{塗装|とそう}"
  ],
  "a": 0,
  "tl": "Ang 墨出し (marking out) ay pagguhit ng reference line at posisyon sa sahig, pader, o kisame, base sa drawing. Dito nakabatay kung saan ilalagay ang pader, poste, at iba pa, kaya kailangang tumpak.",
  "en": "Marking out (墨出し) means drawing the reference lines and positions on floors, walls or ceilings from the drawings. Walls, columns and fittings are placed by these lines, so they must be accurate.",
  "g": [
   [
    "墨出し",
    "すみだし",
    "marking out"
   ],
   [
    "基準",
    "きじゅん",
    "reference, standard"
   ],
   [
    "養生",
    "ようじょう",
    "curing / protection"
   ]
  ],
  "tq": {
   "en": "What is the work of drawing the reference lines and positions for construction on the floor called?",
   "tl": "Ano ang tawag sa pagguhit ng reference line at posisyon sa sahig para sa construction?"
  },
  "to": {
   "en": [
    "Marking out (sumidashi)",
    "Curing / protection (yōjō)",
    "Rebar arrangement (haikin)",
    "Painting (tosō)"
   ],
   "tl": [
    "Marking out (sumidashi)",
    "Curing / protection (yōjō)",
    "Rebar arrangement (haikin)",
    "Painting (tosō)"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "鉄骨",
  "q": "{鉄骨|てっこつ}の{!高力|こうりょく}ボルトの{締|し}め{付|つ}けで、{一次締|いちじじ}めの{後|あと}に{行|おこな}うものはどれか。",
  "o": [
   "マーキングをしてから{本締|ほんじ}めをする",
   "すぐに{塗装|とそう}をする",
   "ボルトを{全部|ぜんぶ}{外|はず}す",
   "{溶接|ようせつ}でボルトを{固|かた}める"
  ],
  "a": 0,
  "tl": "Sa 高力ボルト (high-strength bolt): una ang 一次締め (first tightening), tapos lagyan ng marking ang bolt, nut, at plate, saka ang 本締め (final tightening). Sa marking, makikita kung umikot nang tama ang nut at kung may nakalimutan.",
  "en": "For high-strength bolts: first tightening (一次締め), then marking across the bolt, nut and plate, then final tightening (本締め). The marking shows whether each nut turned correctly and none was missed.",
  "g": [
   [
    "高力ボルト",
    "こうりょくボルト",
    "high-strength bolt"
   ],
   [
    "一次締め",
    "いちじじめ",
    "first tightening"
   ],
   [
    "本締め",
    "ほんじめ",
    "final tightening"
   ]
  ],
  "tq": {
   "en": "When tightening high-strength bolts on a steel frame, what comes after the first tightening?",
   "tl": "Sa pag-tighten ng high-strength bolt sa steel frame, ano ang kasunod ng first tightening?"
  },
  "to": {
   "en": [
    "Mark them, then do the final tightening",
    "Paint them right away",
    "Remove all the bolts",
    "Weld the bolts in place"
   ],
   "tl": [
    "Lagyan ng marking, saka i-final tighten",
    "Pinturahan agad",
    "Tanggalin lahat ng bolt",
    "I-weld ang bolt"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "コンクリート",
  "q": "コンクリートを{打|う}った{後|あと}の「{!養生|ようじょう}」として{正|ただ}しいものはどれか。",
  "o": [
   "{急|きゅう}な{乾燥|かんそう}や{低温|ていおん}を{防|ふせ}ぎ、{散水|さんすい}などで{湿|しめ}った{状態|じょうたい}に{保|たも}つ",
   "すぐに{上|うえ}を{重機|じゅうき}で{走|はし}る",
   "{強|つよ}い{日光|にっこう}で{早|はや}く{乾|かわ}かす",
   "{水|みず}を{全|まった}くかけない"
  ],
  "a": 0,
  "tl": "Pagkatapos magbuhos ng concrete, kailangan ang 養生 (curing): iwasan ang biglang pagkatuyo at sobrang lamig, at panatilihing basa sa pagwisik ng tubig o pagtakip. Kapag natuyo agad, magkakaroon ng crack at hindi lalakas nang tama.",
  "en": "After pouring concrete, curing (養生) is needed: prevent sudden drying and low temperatures and keep it moist by spraying water or covering it. Concrete that dries too fast cracks and does not reach full strength.",
  "g": [
   [
    "養生",
    "ようじょう",
    "curing"
   ],
   [
    "乾燥",
    "かんそう",
    "drying"
   ],
   [
    "散水",
    "さんすい",
    "spraying water"
   ]
  ],
  "tq": {
   "en": "Which is correct \"curing\" after pouring concrete?",
   "tl": "Alin ang tamang \"curing\" pagkatapos magbuhos ng concrete?"
  },
  "to": {
   "en": [
    "Prevent sudden drying and cold, and keep it moist by spraying water",
    "Drive heavy machines on it right away",
    "Dry it quickly in strong sunlight",
    "Never put water on it"
   ],
   "tl": [
    "Iwasan ang biglang pagkatuyo at lamig, at panatilihing basa sa pagwisik ng tubig",
    "Padaanan agad ng mabigat na makina",
    "Patuyuin agad sa matinding araw",
    "Huwag kailanman lagyan ng tubig"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "コンクリート",
  "q": "まだ{固|かた}まっていないコンクリートの{軟|やわ}らかさを{調|しら}べる{試験|しけん}はどれか。",
  "o": [
   "{!スランプ試験|スランプしけん}",
   "{水圧試験|すいあつしけん}",
   "{絶縁抵抗測定|ぜつえんていこうそくてい}",
   "{引張試験|ひっぱりしけん}"
  ],
  "a": 0,
  "tl": "Ang スランプ試験 (slump test) ay sumusukat kung gaano kalambot ang fresh concrete. Pinupuno ang cone, inaangat, at sinusukat kung ilang cm bumaba ang concrete. Ginagawa ito pagdating ng concrete sa site.",
  "en": "The slump test (スランプ試験) measures how soft fresh concrete is. A cone is filled and lifted, and the drop of the concrete in cm is measured. It is done when the concrete arrives on site.",
  "g": [
   [
    "スランプ試験",
    "スランプしけん",
    "slump test"
   ],
   [
    "軟らかさ",
    "やわらかさ",
    "softness"
   ]
  ],
  "tq": {
   "en": "Which test checks how soft fresh (not yet hardened) concrete is?",
   "tl": "Aling test ang sumusukat kung gaano kalambot ang fresh concrete?"
  },
  "to": {
   "en": [
    "Slump test",
    "Water pressure test",
    "Insulation resistance measurement",
    "Tensile test"
   ],
   "tl": [
    "Slump test",
    "Water pressure test",
    "Insulation resistance measurement",
    "Tensile test"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "仕上げ",
  "q": "{屋上|おくじょう}やベランダなどで、{雨水|あまみず}が{建物|たてもの}の{中|なか}に{入|はい}らないようにする{工事|こうじ}はどれか。",
  "o": [
   "{!防水|ぼうすい}{工事|こうじ}",
   "{解体|かいたい}{工事|こうじ}",
   "{杭|くい}{工事|こうじ}",
   "{鉄骨|てっこつ}{工事|こうじ}"
  ],
  "a": 0,
  "tl": "Ang 防水工事 (waterproofing work) ay paglalagay ng waterproof layer, gaya ng asphalt o sheet, sa bubong, rooftop, at veranda para hindi tumagas ang ulan sa loob ng building.",
  "en": "Waterproofing work (防水工事) applies a waterproof layer, such as asphalt or sheets, on roofs, rooftops and balconies so rain does not leak into the building.",
  "g": [
   [
    "防水",
    "ぼうすい",
    "waterproofing"
   ],
   [
    "屋上",
    "おくじょう",
    "rooftop"
   ],
   [
    "雨水",
    "あまみず",
    "rainwater"
   ]
  ],
  "tq": {
   "en": "Which work stops rainwater from getting into the building at rooftops and balconies?",
   "tl": "Aling trabaho ang pumipigil na pumasok ang ulan sa building sa rooftop at veranda?"
  },
  "to": {
   "en": [
    "Waterproofing work",
    "Demolition work",
    "Piling work",
    "Steel frame work"
   ],
   "tl": [
    "Waterproofing work",
    "Demolition work",
    "Piling work",
    "Steel frame work"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "安全",
  "q": "{脚立|きゃたつ}の{正|ただ}しい{使|つか}い{方|かた}はどれか。",
  "o": [
   "{開|ひら}き{止|ど}めを{確実|かくじつ}にかけ、{天板|てんいた}には{乗|の}らない",
   "{天板|てんいた}の{上|うえ}に{立|た}って{作業|さぎょう}する",
   "{開|ひら}き{止|ど}めをかけずに{使|つか}う",
   "{傾|かたむ}いた{床|ゆか}にそのまま{置|お}く"
  ],
  "a": 0,
  "tl": "Sa 脚立 (stepladder), siguraduhing naka-lock ang 開き止め (spreader lock) at nasa patag na sahig. Huwag tumayo o umupo sa 天板 (top plate) dahil madaling mawalan ng balanse at mahulog.",
  "en": "With a stepladder (脚立), make sure the spreader lock (開き止め) is set and it stands on a level floor. Never stand or sit on the top plate (天板), because you can easily lose balance and fall.",
  "g": [
   [
    "脚立",
    "きゃたつ",
    "stepladder"
   ],
   [
    "天板",
    "てんいた",
    "top plate"
   ],
   [
    "開き止め",
    "ひらきどめ",
    "spreader lock"
   ]
  ],
  "tq": {
   "en": "Which is the correct way to use a stepladder?",
   "tl": "Alin ang tamang paggamit ng stepladder?"
  },
  "to": {
   "en": [
    "Set the spreader lock firmly and don't stand on the top plate",
    "Stand on the top plate to work",
    "Use it without setting the spreader lock",
    "Put it on a sloping floor as it is"
   ],
   "tl": [
    "I-lock nang maayos ang spreader lock at huwag tumayo sa top plate",
    "Tumayo sa top plate habang nagtatrabaho",
    "Gamitin nang hindi naka-lock ang spreader",
    "Ilagay sa tagilid na sahig"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "建築"
 },
 {
  "cat": "配管",
  "q": "{排水管|はいすいかん}を{施工|せこう}するときに{大切|たいせつ}なことはどれか。",
  "o": [
   "{水|みず}が{自然|しぜん}に{流|なが}れるように{!勾配|こうばい}をつける",
   "{水平|すいへい}にまっすぐ{取|と}り{付|つ}ける",
   "{上|うえ}に{向|む}かって{勾配|こうばい}をつける",
   "{継手|つぎて}を{接着|せっちゃく}しない"
  ],
  "a": 0,
  "tl": "Ang drain pipe (排水管) ay hindi gumagamit ng pressure. Umaagos ang tubig dahil sa gravity, kaya kailangan itong lagyan ng tamang 勾配 (slope) pababa. Kapag patag o paakyat, maiipon ang tubig at dumi at babara.",
  "en": "Drain pipes (排水管) carry water by gravity, not pressure, so they need the proper downward slope (勾配). Pipes laid flat or uphill collect water and waste and clog.",
  "g": [
   [
    "排水管",
    "はいすいかん",
    "drain pipe"
   ],
   [
    "勾配",
    "こうばい",
    "slope"
   ],
   [
    "継手",
    "つぎて",
    "fitting, joint"
   ]
  ],
  "tq": {
   "en": "What is important when installing a drain pipe?",
   "tl": "Ano ang mahalaga sa pag-install ng drain pipe?"
  },
  "to": {
   "en": [
    "Give it a slope so water flows naturally",
    "Install it perfectly level",
    "Slope it upward",
    "Don't glue the fittings"
   ],
   "tl": [
    "Lagyan ng slope para kusang umagos ang tubig",
    "I-install nang ganap na patag",
    "Lagyan ng slope paakyat",
    "Huwag idikit ang mga fitting"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 },
 {
  "cat": "電気",
  "q": "{電気|でんき}{設備|せつび}の{作業|さぎょう}を{始|はじ}める{前|まえ}に{必|かなら}ず{行|おこな}うことはどれか。",
  "o": [
   "{停電|ていでん}させ、{!検電器|けんでんき}で{電気|でんき}が{来|き}ていないことを{確認|かくにん}する",
   "{手|て}で{触|さわ}って{確|たし}かめる",
   "{電気|でんき}が{来|き}ているまま{急|いそ}いで{作業|さぎょう}する",
   "{確認|かくにん}は{作業|さぎょう}の{後|あと}にする"
  ],
  "a": 0,
  "tl": "Bago magtrabaho sa electrical equipment, patayin muna ang kuryente (停電), tapos gamitin ang 検電器 (voltage tester) para siguraduhing wala nang kuryente. Huwag kailanman hawakan para lang i-check. Maglagay din ng tag na \"Huwag buksan\" sa breaker.",
  "en": "Before working on electrical equipment, cut the power (停電) and use a voltage tester (検電器) to confirm there is no voltage. Never touch it to check. Also put a \"Do not switch on\" tag on the breaker.",
  "g": [
   [
    "検電器",
    "けんでんき",
    "voltage tester"
   ],
   [
    "停電",
    "ていでん",
    "power cut"
   ]
  ],
  "tq": {
   "en": "What must always be done before starting work on electrical equipment?",
   "tl": "Ano ang dapat laging gawin bago magtrabaho sa electrical equipment?"
  },
  "to": {
   "en": [
    "Cut the power and confirm with a voltage tester that there is no electricity",
    "Touch it with your hand to check",
    "Work quickly with the power still on",
    "Check only after the work"
   ],
   "tl": [
    "Patayin ang kuryente at i-check sa voltage tester na wala nang kuryente",
    "Hawakan para i-check",
    "Magmadaling magtrabaho kahit may kuryente",
    "I-check lang pagkatapos ng trabaho"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 },
 {
  "cat": "電気",
  "q": "{電気|でんき}{機器|きき}に{!接地|せっち}（アース）をとる{主|おも}な{目的|もくてき}はどれか。",
  "o": [
   "{漏電|ろうでん}したときの{感電|かんでん}を{防|ふせ}ぐ",
   "{電気代|でんきだい}を{安|やす}くする",
   "{機器|きき}を{軽|かる}くする",
   "{音|おと}を{大|おお}きくする"
  ],
  "a": 0,
  "tl": "Ang 接地 (grounding / earth) ay nagdudugtong ng metal na bahagi ng makina sa lupa. Kapag may 漏電 (current leakage), dadaloy ang kuryente sa lupa imbes na sa katawan mo, kaya naiiwasan ang 感電 (electric shock).",
  "en": "Grounding (接地, earth) connects the metal parts of equipment to the ground. If current leaks (漏電), it flows to the ground instead of through your body, preventing electric shock (感電).",
  "g": [
   [
    "接地",
    "せっち",
    "grounding, earth"
   ],
   [
    "漏電",
    "ろうでん",
    "current leakage"
   ],
   [
    "感電",
    "かんでん",
    "electric shock"
   ]
  ],
  "tq": {
   "en": "What is the main purpose of grounding (earthing) electrical equipment?",
   "tl": "Ano ang main purpose ng grounding (earth) ng electrical equipment?"
  },
  "to": {
   "en": [
    "To prevent electric shock when current leaks",
    "To lower the electricity bill",
    "To make the equipment lighter",
    "To make it louder"
   ],
   "tl": [
    "Para maiwasan ang electric shock kapag may leakage",
    "Para bumaba ang bayad sa kuryente",
    "Para gumaan ang makina",
    "Para lumakas ang tunog"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 },
 {
  "cat": "空調",
  "q": "{空調|くうちょう}{設備|せつび}で、{室外機|しつがいき}と{室内機|しつないき}をつなぐ{配管|はいかん}の{中|なか}を{流|なが}れるものはどれか。",
  "o": [
   "{!冷媒|れいばい}",
   "{排水|はいすい}",
   "ガス{燃料|ねんりょう}",
   "{温水|おんすい}だけ"
  ],
  "a": 0,
  "tl": "Sa aircon, dumadaloy sa 冷媒配管 (refrigerant pipe) sa pagitan ng outdoor unit at indoor unit ang 冷媒 (refrigerant), na nagdadala ng init. Kapag may tagas, hihina ang lamig, kaya chine-check ito sa pressure test.",
  "en": "In air conditioning, refrigerant (冷媒) flows through the pipes between the outdoor and indoor units and carries the heat. A leak weakens cooling, so the pipes are pressure-tested.",
  "g": [
   [
    "冷媒",
    "れいばい",
    "refrigerant"
   ],
   [
    "室外機",
    "しつがいき",
    "outdoor unit"
   ],
   [
    "室内機",
    "しつないき",
    "indoor unit"
   ]
  ],
  "tq": {
   "en": "In an air-conditioning system, what flows through the pipes connecting the outdoor and indoor units?",
   "tl": "Sa aircon system, ano ang dumadaloy sa pipe na nagdudugtong sa outdoor at indoor unit?"
  },
  "to": {
   "en": [
    "Refrigerant",
    "Drain water",
    "Gas fuel",
    "Only hot water"
   ],
   "tl": [
    "Refrigerant",
    "Drain water",
    "Gas fuel",
    "Hot water lang"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 },
 {
  "cat": "配管",
  "q": "{給水管|きゅうすいかん}の{配管|はいかん}が{終|お}わった{後|あと}、{漏|も}れがないか{確|たし}かめるために{行|おこな}う{試験|しけん}はどれか。",
  "o": [
   "{!水圧試験|すいあつしけん}",
   "スランプ{試験|しけん}",
   "{絶縁抵抗測定|ぜつえんていこうそくてい}",
   "{騒音測定|そうおんそくてい}"
  ],
  "a": 0,
  "tl": "Pagkatapos ikabit ang 給水管 (water supply pipe), ginagawa ang 水圧試験 (water pressure test): nilalagyan ng pressure ang pipe nang ilang oras para makita kung may tagas, bago takpan ng pader o kisame.",
  "en": "After installing water supply pipes (給水管), a water pressure test (水圧試験) is done: the pipe is held under pressure for a set time to find leaks before walls or ceilings cover it.",
  "g": [
   [
    "給水管",
    "きゅうすいかん",
    "water supply pipe"
   ],
   [
    "水圧試験",
    "すいあつしけん",
    "water pressure test"
   ],
   [
    "漏れ",
    "もれ",
    "leak"
   ]
  ],
  "tq": {
   "en": "After installing water supply piping, which test checks for leaks?",
   "tl": "Pagkatapos ikabit ang water supply pipe, aling test ang tumitingin kung may tagas?"
  },
  "to": {
   "en": [
    "Water pressure test",
    "Slump test",
    "Insulation resistance measurement",
    "Noise measurement"
   ],
   "tl": [
    "Water pressure test",
    "Slump test",
    "Insulation resistance measurement",
    "Noise measurement"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 },
 {
  "cat": "配管",
  "q": "{冷水管|れいすいかん}などの{配管|はいかん}に{!保温材|ほおんざい}を{巻|ま}く{主|おも}な{理由|りゆう}はどれか。",
  "o": [
   "{熱|ねつ}が{逃|に}げるのを{防|ふせ}ぎ、{結露|けつろ}を{防|ふせ}ぐ",
   "{配管|はいかん}を{重|おも}くする",
   "{見|み}た{目|め}を{派手|はで}にする",
   "{水|みず}の{量|りょう}を{増|ふ}やす"
  ],
  "a": 0,
  "tl": "Binabalutan ng 保温材 (insulation) ang pipe para hindi lumabas o pumasok ang init. Sa malamig na pipe, pinipigilan din nito ang 結露 (condensation), na puwedeng tumulo at makasira ng kisame.",
  "en": "Pipes are wrapped in insulation (保温材) to stop heat from escaping or entering. On cold pipes it also prevents condensation (結露), which can drip and damage ceilings.",
  "g": [
   [
    "保温材",
    "ほおんざい",
    "insulation material"
   ],
   [
    "結露",
    "けつろ",
    "condensation"
   ]
  ],
  "tq": {
   "en": "What is the main reason for wrapping insulation around pipes such as chilled water pipes?",
   "tl": "Ano ang main reason ng pagbalot ng insulation sa pipe gaya ng chilled water pipe?"
  },
  "to": {
   "en": [
    "To stop heat loss and prevent condensation",
    "To make the pipe heavier",
    "To make it look flashy",
    "To increase the amount of water"
   ],
   "tl": [
    "Para hindi lumabas ang init at maiwasan ang condensation",
    "Para bumigat ang pipe",
    "Para magmukhang makulay",
    "Para dumami ang tubig"
   ]
  },
  "lv": "real",
  "part": "jitsugi",
  "kubun": "ライフライン・設備"
 }
];
