// SSW2 REVIEWER question bank (construction, written test). All questions are original.
// Ruby markup: {base|reading} shows furigana at level 0; {!base|reading} also at level 1 (hard words).
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
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
  }
 }
];
