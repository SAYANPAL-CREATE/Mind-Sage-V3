/* Mind-sage V2 data: retained from the working V1, expanded with bilingual content. */
'use strict';
const LEVELS = [
  { id: 'primary', title: 'Primary School Student', short: 'Primary school', subtitle: 'A gentle space to share how you feel.', icon: '✿' },
  { id: 'high', title: 'High School Student', short: 'High school', subtitle: 'Check in through school and life changes.', icon: '▤' },
  { id: 'ug', title: 'UG Students', short: 'Undergraduate', subtitle: 'Find clarity alongside campus life.', icon: '◈' },
  { id: 'pg', title: 'PG Students', short: 'Postgraduate', subtitle: 'Reflect on academic and everyday balance.', icon: '✧' },
  { id: 'phd', title: 'Ph.D. Scholars', short: 'Ph.D. scholar', subtitle: 'A thoughtful pause for your research journey.', icon: '❋' }
];
const FEELINGS = {
  anxious: { title:'Anxious', noun:'anxiety', icon:'◌', description:'For moments when worries feel difficult to quiet.', intro:'Think about the last two weeks. Choose the answer that feels closest to your experience.', dimensions:['Worry and thoughts','Physical sensations','Daily impact'], questions:[
    'Have you felt nervous, worried, or on edge?',
    'Have you worried that something bad might happen?',
    'Has it been difficult to stop thinking about your worries?',
    'Has your heart raced or your body felt tense when you were worried?',
    'Have you felt restless or found it difficult to relax?',
    'Have worries made it difficult for you to sleep well?',
    'Have you avoided something because it made you feel anxious?',
    'Have you found it hard to focus because of worry?',
    'Have small uncertainties felt more frightening than usual?',
    'Have your worries interfered with your studies, relationships, or daily routines?'
  ], tips:['Try a few minutes of gentle, steady breathing when you notice tension.', 'Share what is worrying you with a person you trust.', 'Break an overwhelming task into one small, manageable action.'] },
  depressed: { title:'Depressed', noun:'low mood', icon:'☁', description:'For times when energy, hope, or interest feels low.', intro:'Think about the last two weeks. You can answer privately and at your own pace.', dimensions:['Mood and interest','Energy and self-view','Daily impact and safety'], questions:[
    'Have you felt sad, empty, or low for much of the day?',
    'Have you enjoyed your usual activities less than before?',
    'Have you felt disconnected from things that usually matter to you?',
    'Have you felt tired or low on energy?',
    'Have you noticed changes in your sleep?',
    'Have you been unusually hard on yourself?',
    'Have simple tasks seemed difficult to begin or finish?',
    'Have you found it difficult to concentrate on studies or everyday activities?',
    'Have you pulled away from friends, family, or people you usually enjoy being around?',
    'Have you had thoughts of hurting yourself or wishing you were not here?'
  ], tips:['Let one trusted person know how you have been feeling.', 'Make space for rest, daylight, and a small activity you usually enjoy.', 'If low mood is lasting or affecting life, make an appointment with a mental health professional.'] },
  stressed: { title:'Stressed', noun:'stress', icon:'↝', description:'For days when demands feel too heavy.', intro:'Think about the last two weeks and how you have responded to daily demands.', dimensions:['Pressure and demands','Physical and emotional strain','Daily impact'], questions:[
    'Have your responsibilities felt greater than you can comfortably manage?',
    'Have deadlines or expectations made you feel under pressure?',
    'Have you worried that there is not enough time to do everything?',
    'Have you felt tired even after resting?',
    'Have you become irritable or easily frustrated?',
    'Have you noticed tension, headaches, or difficulty relaxing?',
    'Have you had trouble taking breaks without feeling guilty?',
    'Have you found it difficult to manage several tasks at once?',
    'Have you felt unable to switch off from school, work, or research?',
    'Has pressure affected your sleep, relationships, or everyday routine?'
  ], tips:['Choose your next most important task rather than trying to do everything.', 'Plan a short break between periods of concentration.', 'Ask a teacher, supervisor, friend, or family member for practical support.'] },
  confused: { title:'Confused', noun:'uncertainty and difficulty focusing', icon:'✦', description:'For moments of uncertainty and difficulty finding direction.', intro:'Think about the last two weeks. These questions explore focus, decisions, and feeling overwhelmed.', dimensions:['Clarity and decisions','Attention and organisation','Daily impact'], questions:[
    'Have you been unsure what you are feeling or why?',
    'Have everyday decisions felt harder to make?',
    'Have you felt overwhelmed by too many possible choices?',
    'Have your thoughts felt scattered or difficult to organise?',
    'Have you lost track of what you were doing more often than usual?',
    'Have you found it hard to focus on one thing at a time?',
    'Have you needed extra time to understand or finish familiar tasks?',
    'Have you found it difficult to decide what to do first?',
    'Have you felt uncertain about whom to turn to for advice?',
    'Have difficulties with clarity or focus affected your normal routine?'
  ], tips:['Write down one question or decision at a time.', 'Take a short pause, then choose one small next action.', 'If confusion is sudden, severe, or involves disorientation, seek urgent medical care.'] }
};
const OPTIONS = ['Never', 'On a few days', 'On many days', 'Nearly every day'];
const QUOTES = [
  { bn:'নিজের উপর বিশ্বাস কখনও হারিও না, এ জগতে তুমি সব করতে পার।', source:'স্বামী বিবেকানন্দের বাণী ও রচনা, ৪র্থ খণ্ড', url:'https://media.belurmath.org/inspiration-swami-vivekananda-110-12620/' },
  { bn:'সেই বিশ্বাস-বলে নিজের পায়ে নিজে দাঁড়াও এবং বীর্যবান্ হও।', source:'বাণী ও রচনা, ৫ম খণ্ড', url:'https://media.belurmath.org/inspiration-swami-vivekananda-115-13890/' },
  { bn:'সব শক্তি তোমাদের ভিতরে রয়েছে। তোমরা সব করতে পারো। এটি বিশ্বাস কর।', source:'বাণী ও রচনা, ৫ম খণ্ড', url:'https://media.belurmath.org/inspiration-swami-vivekananda-52-7304/' },
  { bn:'তোমরা বিশ্বাস কর যে, তোমরা বড় বড় কাজ করবার জন্য জন্মেছ।', source:'পত্রাবলী, ৩১ আগস্ট ১৮৯৪', url:'https://media.belurmath.org/inspiration-swami-vivekananda-33-5415/' },
  { bn:'অসীম বিশ্বাস ও ধৈর্যই সফলতালাভের একমাত্র উপায়।', source:'পত্রাবলী, স্বামী বিবেকানন্দ', url:'https://media.belurmath.org/inspiration-swami-vivekananda-104-12093/' },
  { bn:'ওঠো, জাগো, আর ঘুমিও না; সকল অভাব, সকল দুঃখ ঘুচাবার শক্তি তোমাদের নিজের ভিতর রয়েছে।', source:'স্বামী-শিষ্য সংবাদ, ২', url:'https://media.belurmath.org/inspiration-swami-vivekananda-59-7962/' },
  { bn:'সাহসীরাই কেবল বড় বড় কাজ করতে পারে — কাপুরুষেরা নয়।', source:'বাণী ও রচনা, ৭ম খণ্ড', url:'https://media.belurmath.org/inspiration-swami-vivekananda-116-13973/' },
  { bn:'কিছুতেই ভয় খেও না।', source:'স্বামী রামকৃষ্ণানন্দকে পত্র, ১৮৯৫', url:'https://media.belurmath.org/inspiration-swami-vivekananda-27-4922/' }
];
const MOTIVATIONS = [
  {title:'Progress is often quiet', text:'Not every meaningful step feels like a breakthrough. Sometimes progress means showing up for a difficult day, asking a question, or finishing one simple task. Give your efforts room to grow. A small step can still change the direction of a journey.'},
  {title:'You may begin again', text:'A difficult morning does not have to define the rest of your day. Notice what has happened, allow yourself to reset, and choose one manageable thing to do next. Starting again is not a failure of the first attempt; it is a useful skill.'},
  {title:'Your pace is your own', text:'Comparison can make even good work feel insufficient. Another person’s progress tells only one part of their story. Pay attention to what you are learning, the resources you have, and the pace that keeps you well enough to continue.'},
  {title:'Connection is a strength', text:'You do not need to solve every hard situation alone. A conversation with a friend, family member, teacher, counsellor, or doctor may offer relief and a new perspective. Asking for support is a thoughtful decision.'},
  {title:'Rest belongs in the plan', text:'Your attention and energy need time to recover. Rest is not something you must earn by exhausting yourself. Short breaks, comfortable sleep routines, and moments away from screens can be meaningful parts of study and work.'},
  {title:'Make room for what matters', text:'When everything seems urgent, choose what is genuinely important for today. Write down your priorities, leave space for change, and recognise what you have already completed. Clarity can begin with one honest question: what needs my attention now?'}
];

const QUESTIONS_BN = {
  anxious: [
    'আপনি কি উদ্বিগ্ন, চিন্তিত বা অস্থির অনুভব করেছেন?',
    'খারাপ কিছু ঘটতে পারে বলে কি আপনি চিন্তা করেছেন?',
    'দুশ্চিন্তা থামানো কি আপনার জন্য কঠিন হয়েছে?',
    'চিন্তার সময় কি বুক ধড়ফড় করেছে বা শরীর টানটান লেগেছে?',
    'আপনি কি অস্থির বোধ করেছেন বা আরাম করতে অসুবিধা হয়েছে?',
    'দুশ্চিন্তার কারণে কি ঘুমের সমস্যা হয়েছে?',
    'উদ্বেগের কারণে কি কোনো কাজ বা পরিস্থিতি এড়িয়ে গেছেন?',
    'দুশ্চিন্তার জন্য কি মনোযোগ দিতে অসুবিধা হয়েছে?',
    'ছোট অনিশ্চয়তাও কি সাধারণের তুলনায় বেশি ভীতিকর মনে হয়েছে?',
    'দুশ্চিন্তার কারণে কি পড়াশোনা, সম্পর্ক বা দৈনন্দিন কাজে অসুবিধা হয়েছে?'
  ],
  depressed: [
    'দিনের বেশির ভাগ সময় কি মন খারাপ, শূন্য বা বিষণ্ণ লেগেছে?',
    'আগে ভালো লাগত এমন কাজে কি এখন আনন্দ কম পান?',
    'আপনার কাছে গুরুত্বপূর্ণ বিষয়গুলো থেকে কি নিজেকে বিচ্ছিন্ন মনে হয়েছে?',
    'আপনার কি ক্লান্তি বা শক্তির অভাব অনুভূত হয়েছে?',
    'আপনার ঘুমের অভ্যাসে কি পরিবর্তন হয়েছে?',
    'আপনি কি নিজের প্রতি অস্বাভাবিকভাবে কঠোর হয়েছেন?',
    'সাধারণ কাজ শুরু বা শেষ করতেও কি কষ্ট হয়েছে?',
    'পড়াশোনা বা দৈনন্দিন কাজে কি মনোযোগের সমস্যা হয়েছে?',
    'বন্ধু, পরিবার বা কাছের মানুষদের থেকে কি দূরে সরে গেছেন?',
    'আপনার কি নিজেকে আঘাত করার বা বেঁচে না থাকার চিন্তা এসেছে?'
  ],
  stressed: [
    'দায়িত্বগুলো কি সামলানোর তুলনায় বেশি মনে হয়েছে?',
    'সময়সীমা বা অন্যের প্রত্যাশার কারণে কি চাপ অনুভব করেছেন?',
    'সবকিছু করার মতো যথেষ্ট সময় নেই বলে কি চিন্তা হয়েছে?',
    'বিশ্রামের পরও কি ক্লান্ত লেগেছে?',
    'আপনি কি সহজে বিরক্ত বা রেগে গেছেন?',
    'শরীরে টান, মাথাব্যথা বা বিশ্রাম নিতে অসুবিধা হয়েছে?',
    'বিরতি নিলে কি অপরাধবোধ হয়েছে?',
    'একসঙ্গে একাধিক কাজ সামলাতে কি অসুবিধা হয়েছে?',
    'স্কুল, কলেজ বা গবেষণার চিন্তা থেকে কি মন সরাতে পারেননি?',
    'চাপের কারণে কি ঘুম, সম্পর্ক বা রোজকার কাজে প্রভাব পড়েছে?'
  ],
  confused: [
    'আপনি কী অনুভব করছেন বা কেন, তা কি বুঝতে অসুবিধা হয়েছে?',
    'সাধারণ সিদ্ধান্ত নেওয়াও কি কঠিন মনে হয়েছে?',
    'অনেক বিকল্প দেখে কি অভিভূত বোধ করেছেন?',
    'চিন্তাভাবনা কি অগোছালো মনে হয়েছে?',
    'কোনো কাজ করার সময় কি আগের চেয়ে বেশি ভুলে গেছেন?',
    'একটি কাজে মনোনিবেশ করতে কি অসুবিধা হয়েছে?',
    'পরিচিত কাজ বুঝতে বা শেষ করতে কি বেশি সময় লেগেছে?',
    'কোন কাজটি আগে করবেন তা ঠিক করতে কি অসুবিধা হয়েছে?',
    'পরামর্শের জন্য কার কাছে যাবেন তা কি বুঝতে পারেননি?',
    'মনোযোগ বা সিদ্ধান্তের অসুবিধা কি দৈনন্দিন জীবনে প্রভাব ফেলেছে?'
  ]
};
const LEVEL_BN = { primary:'প্রাথমিক বিদ্যালয়ের শিক্ষার্থী', high:'উচ্চ বিদ্যালয়ের শিক্ষার্থী', ug:'স্নাতক শিক্ষার্থী', pg:'স্নাতকোত্তর শিক্ষার্থী', phd:'পিএইচ.ডি. গবেষক' };
const FEELINGS_BN = {anxious:'উদ্বিগ্ন',depressed:'মন খারাপ',stressed:'চাপে আছি',confused:'বিভ্রান্ত'};
const OPTIONS_BN = ['কখনও নয়','কয়েক দিন','অনেক দিন','প্রায় প্রতিদিন'];
const SCENARIOS = [
 {id:'exam',tag:'ACADEMIC PRESSURE',bnTag:'পড়াশোনার চাপ',title:'The evening before an exam',bnTitle:'পরীক্ষার আগের সন্ধ্যা',desc:'A student sees a long list of topics and has limited time left to prepare.',bnDesc:'একজন শিক্ষার্থী পড়ার অনেক বিষয় বাকি দেখে বুঝতে পারছে সময় কম।',question:'What would help you most in this situation?',bnQuestion:'এই পরিস্থিতিতে আপনার সবচেয়ে বেশি কী সাহায্য করবে?',options:['Choose two priority topics and begin','Ask a friend or teacher for guidance','Take a short calming break first','I am not sure yet'],bnOptions:['দুটি গুরুত্বপূর্ণ বিষয় বেছে শুরু করব','বন্ধু বা শিক্ষকের সাহায্য চাইব','আগে ছোট্ট একটি বিরতি নেব','এখনও বুঝতে পারছি না'],note:'There is no scored right or wrong answer. A manageable next step and a little support can both be useful.',bnNote:'এখানে সঠিক-ভুলের নম্বর নেই। একটি ছোট পদক্ষেপ এবং প্রয়োজনীয় সাহায্য—দুটোই কাজে আসতে পারে।',art:'exam'},
 {id:'social',tag:'BELONGING',bnTag:'সম্পর্ক ও বন্ধুত্ব',title:'A quiet moment on campus',bnTitle:'ক্যাম্পাসে একা একটি মুহূর্ত',desc:'You notice a classmate sitting by themselves while others are talking in groups.',bnDesc:'অন্যরা দলে কথা বলছে, আর একজন সহপাঠী একা বসে আছে।',question:'What might be a thoughtful response?',bnQuestion:'কীভাবে সংবেদনশীলভাবে এগোনো যায়?',options:['Gently ask if they would like company','Give them space and check in later','Invite them to join a shared activity','I would first consider their comfort'],bnOptions:['সঙ্গ চাই কি না আলতো করে জিজ্ঞাসা করব','জায়গা দিয়ে পরে খোঁজ নেব','একসঙ্গে কিছু করতে আমন্ত্রণ জানাব','প্রথমে তাদের স্বাচ্ছন্দ্যের কথা ভাবব'],note:'Different people prefer different kinds of support. Asking respectfully is often a good start.',bnNote:'প্রত্যেকে আলাদা ধরনের সহায়তা পছন্দ করেন। সম্মান রেখে জিজ্ঞাসা করা ভালো শুরু হতে পারে।',art:'social'},
 {id:'deadline',tag:'RESEARCH & WORK',bnTag:'গবেষণা ও কাজ',title:'When the workload builds up',bnTitle:'যখন কাজ জমতে থাকে',desc:'Several assignments, messages and deadlines arrive on the same day.',bnDesc:'একদিনেই একাধিক অ্যাসাইনমেন্ট, বার্তা ও সময়সীমা এসে পড়েছে।',question:'Which small action would you start with?',bnQuestion:'কোন ছোট কাজ দিয়ে শুরু করবেন?',options:['Write a realistic priority list','Talk to someone about the workload','Choose one task for the next 20 minutes','Pause, breathe, and reassess'],bnOptions:['বাস্তবসম্মত অগ্রাধিকার তালিকা করব','কাজের চাপ নিয়ে কারও সঙ্গে কথা বলব','পরবর্তী ২০ মিনিটের জন্য একটি কাজ বেছে নেব','কিছুক্ষণ থেমে পরিস্থিতি ভাবব'],note:'Organising demands into manageable steps can reduce the feeling of being overwhelmed.',bnNote:'কাজগুলো ছোট ছোট ধাপে সাজালে অতিরিক্ত চাপের অনুভূতি কমতে পারে।',art:'deadline'},
 {id:'rest',tag:'REST & SELF-CARE',bnTag:'বিশ্রাম ও যত্ন',title:'A moment to recharge',bnTitle:'নিজেকে সময় দেওয়ার মুহূর্ত',desc:'After a busy day, a student notices they are exhausted but still wants to keep working.',bnDesc:'ব্যস্ত দিনের শেষে ক্লান্তি থাকলেও একজন শিক্ষার্থী কাজ চালিয়ে যেতে চাইছে।',question:'What would a supportive choice look like?',bnQuestion:'নিজের যত্নের জন্য কী করা যায়?',options:['Take a brief screen-free break','Have water or a nourishing snack','Share how I feel with someone','Plan a realistic stopping time'],bnOptions:['স্ক্রিন থেকে কিছুক্ষণ দূরে থাকব','জল বা পুষ্টিকর খাবার খাব','কাউকে নিজের অনুভূতির কথা বলব','কখন থামব তা ঠিক করব'],note:'Rest is part of a sustainable routine, not something you must earn by becoming exhausted.',bnNote:'বিশ্রাম দীর্ঘমেয়াদি সুস্থ অভ্যাসের অংশ। সম্পূর্ণ ক্লান্ত না হয়েও বিশ্রাম নেওয়া যায়।',art:'rest'}
];
const TOOLS = [
 {id:'breathing',icon:'wind',title:'Guided breathing',bn:'শ্বাসের ব্যায়াম',description:'A calm two-minute breathing exercise.'},
 {id:'grounding',icon:'target',title:'5–4–3–2–1 grounding',bn:'মনোযোগের অনুশীলন',description:'Reconnect with your surroundings.'},
 {id:'meditation',icon:'moon',title:'Guided meditation',bn:'ধ্যান',description:'Take a gentle three-minute pause.'},
 {id:'vani',icon:'book',title:'Vani · স্বামীজীর বাণী',bn:'স্বামীজীর বাণী',description:'Bengali words of Swami Vivekananda.'},
 {id:'motivation',icon:'heart',title:'Words of encouragement',bn:'অনুপ্রেরণার কথা',description:'Short, original reflections for your day.'}
];

/* Shorter wording for primary-school readers; same descriptive constructs, not a clinical instrument. */
const PRIMARY_QUESTIONS_EN = {
 anxious:[
 'Have you felt scared or worried at school or home?','Have you worried that something bad might happen?','Has it been hard to stop worrying?','When worried, has your heart beaten fast or your tummy felt funny?','Have you found it hard to sit calmly or relax?','Have worries made sleeping difficult?','Have you stayed away from something because you felt scared?','Have worries made it hard to listen or study?','Have little changes made you feel extra nervous?','Have worries made play, schoolwork or time with people harder?'
 ],
 depressed:[
 'Have you felt sad or down for much of the day?','Have games or activities seemed less fun than before?','Have you felt far away from things you used to like?','Have you felt very tired?','Have you been sleeping much more or less than usual?','Have you said unkind things to yourself in your mind?','Have simple everyday tasks felt difficult?','Has it been hard to pay attention to schoolwork?','Have you wanted to stay away from people you usually like?','Have you thought about hurting yourself or not wanting to be here?'
 ],
 stressed:[
 'Have schoolwork or chores felt like too much?','Have tests or other people’s expectations felt scary?','Have you worried that you do not have enough time?','Have you felt tired even after resting?','Have you become upset or annoyed more easily?','Have you felt a headache or tightness when worried?','Has taking a break made you feel guilty?','Have too many tasks at once been difficult?','Has it been hard to stop thinking about school?','Has pressure made sleeping, playing or talking with people harder?'
 ],
 confused:[
 'Has it been hard to tell how you are feeling?','Have little decisions felt tricky?','Have too many choices made you feel stuck?','Have your thoughts felt mixed up?','Have you forgotten what you were doing?','Has it been difficult to focus on one thing?','Have familiar tasks taken longer than normal?','Has it been hard to choose what to do first?','Have you felt unsure whom to ask for help?','Has confusion made school or home activities harder?'
 ]
};
const PRIMARY_QUESTIONS_BN = {
 anxious:[
 'স্কুলে বা বাড়িতে কি ভয় বা দুশ্চিন্তা হয়েছে?','খারাপ কিছু হতে পারে বলে কি ভেবেছ?','চিন্তা থামাতে কি অসুবিধা হয়েছে?','চিন্তার সময় বুক ধড়ফড় বা পেটে অস্বস্তি হয়েছে?','শান্তভাবে বসতে বা বিশ্রাম নিতে কষ্ট হয়েছে?','চিন্তার জন্য ঘুমের অসুবিধা হয়েছে?','ভয় পেয়ে কোনো কাজ এড়িয়েছ?','চিন্তার জন্য পড়া বা কথা শুনতে সমস্যা হয়েছে?','ছোট পরিবর্তনেও কি বেশি ভয় লেগেছে?','চিন্তার কারণে খেলা, পড়া বা মেলামেশায় অসুবিধা হয়েছে?'
 ],
 depressed:[
 'দিনের অনেকটা সময় কি মন খারাপ লেগেছে?','খেলা বা পছন্দের কাজ কি আগের মতো ভালো লাগেনি?','ভালো লাগার বিষয়গুলো কি দূরের মনে হয়েছে?','খুব ক্লান্ত লেগেছে?','আগের চেয়ে বেশি বা কম ঘুমিয়েছ?','নিজের সম্পর্কে কি খারাপ কথা ভেবেছ?','সহজ কাজও কি কঠিন মনে হয়েছে?','পড়ায় মন দিতে কি অসুবিধা হয়েছে?','পরিচিত মানুষদের এড়িয়ে যেতে ইচ্ছা হয়েছে?','নিজেকে আঘাত করার বা এখানে না থাকার চিন্তা এসেছে?'
 ],
 stressed:[
 'পড়াশোনা বা বাড়ির কাজ কি খুব বেশি মনে হয়েছে?','পরীক্ষা বা অন্যের আশা কি ভয়ের মনে হয়েছে?','সময় কম বলে কি চিন্তা হয়েছে?','বিশ্রামের পরও কি ক্লান্ত লেগেছে?','সহজেই কি রাগ বা বিরক্তি হয়েছে?','চিন্তার সময় মাথাব্যথা বা অস্বস্তি হয়েছে?','বিরতি নিলে কি খারাপ লেগেছে?','একসঙ্গে অনেক কাজ কি কঠিন লেগেছে?','স্কুলের চিন্তা কি থামাতে পারোনি?','চাপের জন্য ঘুম, খেলা বা কথা বলায় অসুবিধা হয়েছে?'
 ],
 confused:[
 'কেমন লাগছে তা কি বুঝতে অসুবিধা হয়েছে?','ছোট সিদ্ধান্ত নিতেও কি কষ্ট হয়েছে?','অনেক বিকল্প দেখে কি আটকে গেছ?','চিন্তাগুলো কি এলোমেলো লেগেছে?','কী করছিলে তা কি ভুলে গেছ?','একটি কাজে মন দিতে কি কষ্ট হয়েছে?','পরিচিত কাজ করতে কি বেশি সময় লেগেছে?','কোন কাজ আগে করবে তা কি বুঝতে পারোনি?','কার কাছে সাহায্য চাইবে তা কি বুঝতে পারোনি?','এই অসুবিধার কারণে স্কুল বা বাড়ির কাজে সমস্যা হয়েছে?'
 ]
};
