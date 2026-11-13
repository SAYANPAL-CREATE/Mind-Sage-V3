/* Mind-sage V4: original, education-stage-specific reflection prompts, not clinical instruments. */
const V4_QUESTIONS = {
  "primary": {
    "anxious": {
      "en": [
        "During the last two weeks, have you noticed your child becoming unusually worried before school?",
        "Has your child repeatedly asked for reassurance that family members are safe?",
        "Has your child seemed unable to settle after something uncertain or unexpected happened?",
        "Have you noticed shaking, stomach discomfort, or a racing heartbeat when your child is worried?",
        "Has your child appeared restless or unusually clingy at home?",
        "Has worry made bedtime or sleeping more difficult for your child?",
        "Has your child avoided school, activities, or meeting others because of fear?",
        "Have teachers or family noticed difficulty concentrating when your child seems worried?",
        "Has your child become particularly distressed by small changes in routine?",
        "Has worry visibly disrupted your child's play, school attendance, friendships, or daily life?"
      ],
      "bn": [
        "গত দুই সপ্তাহে কি দেখেছেন যে আপনার সন্তান স্কুলে যাওয়ার আগে অস্বাভাবিকভাবে চিন্তিত হচ্ছে?",
        "পরিবারের সদস্যরা নিরাপদ আছেন কি না, তা কি আপনার সন্তান বারবার নিশ্চিত হতে চেয়েছে?",
        "অপ্রত্যাশিত কিছু ঘটলে কি আপনার সন্তানের শান্ত হতে অসুবিধা হয়েছে?",
        "দুশ্চিন্তার সময় কি সন্তানের কাঁপুনি, পেটের অস্বস্তি বা বুক ধড়ফড় লক্ষ্য করেছেন?",
        "বাড়িতে কি আপনার সন্তান অস্থির বা অস্বাভাবিকভাবে আঁকড়ে থাকতে চেয়েছে?",
        "দুশ্চিন্তার কারণে কি সন্তানের ঘুম বা শোবার সময়ে সমস্যা হয়েছে?",
        "ভয়ের কারণে কি সন্তান স্কুল, খেলা বা অন্যদের সঙ্গে দেখা করা এড়িয়েছে?",
        "দুশ্চিন্তার সময় মনোযোগে অসুবিধা কি আপনি বা শিক্ষক লক্ষ্য করেছেন?",
        "রুটিনে ছোট পরিবর্তনেও কি সন্তান বিশেষভাবে বিচলিত হয়েছে?",
        "দুশ্চিন্তা কি সন্তানের খেলা, স্কুলে যাওয়া, বন্ধুত্ব বা দৈনন্দিন কাজে বাধা দিয়েছে?"
      ]
    },
    "depressed": {
      "en": [
        "Over the last two weeks, have you noticed your child appearing sad or tearful more often than usual?",
        "Has your child shown less interest in games or activities they usually enjoy?",
        "Has your child withdrawn from family conversations or shared activities?",
        "Has your child seemed unusually tired or less energetic?",
        "Have you noticed a clear change in your child's sleep routine?",
        "Has your child made unusually negative statements about themselves?",
        "Has your child struggled more than usual to begin ordinary activities?",
        "Have you or their teacher noticed new difficulty paying attention to familiar tasks?",
        "Has your child avoided friends or preferred to stay alone much more often?",
        "Has your child said anything about hurting themselves, wanting to disappear, or not wanting to be alive?"
      ],
      "bn": [
        "গত দুই সপ্তাহে কি সন্তানকে আগের তুলনায় বেশি মনমরা বা কাঁদতে দেখেছেন?",
        "যে খেলা বা কাজে আগে আনন্দ পেত, তাতে কি আগ্রহ কমে গেছে?",
        "পরিবারের সঙ্গে কথা বা একসঙ্গে কাজ করা থেকে কি সন্তান সরে এসেছে?",
        "সন্তানকে কি অস্বাভাবিক ক্লান্ত বা শক্তিহীন মনে হয়েছে?",
        "সন্তানের ঘুমের অভ্যাসে কি স্পষ্ট পরিবর্তন দেখেছেন?",
        "সন্তান কি নিজের সম্পর্কে বারবার নেতিবাচক কথা বলেছে?",
        "সহজ দৈনন্দিন কাজ শুরু করতেও কি সন্তানের বেশি অসুবিধা হয়েছে?",
        "পরিচিত কাজে মন দিতে অসুবিধা কি আপনি বা শিক্ষক লক্ষ্য করেছেন?",
        "বন্ধুদের এড়িয়ে কি সন্তান আগের তুলনায় বেশি একা থাকতে চাইছে?",
        "সন্তান কি নিজেকে আঘাত করা, হারিয়ে যাওয়া বা বেঁচে না থাকার কথা বলেছে?"
      ]
    },
    "stressed": {
      "en": [
        "Have you observed your child becoming upset when homework or school tasks are mentioned?",
        "Has your child appeared distressed about tests, grades, or being corrected?",
        "Has your child worried about having too little time for schoolwork and play?",
        "Has your child appeared tired even after a usual night of rest?",
        "Has your child been more easily irritated by ordinary family situations?",
        "Have you noticed tension, headaches, or stomach discomfort around school demands?",
        "Has your child found it difficult to relax during free time?",
        "Has your child become overwhelmed when asked to do more than one task?",
        "Has your child found it difficult to switch off from school worries at home?",
        "Have school-related pressures visibly affected your child's sleep, play, or relationships?"
      ],
      "bn": [
        "বাড়ির কাজ বা স্কুলের পড়ার কথা উঠলে কি সন্তানকে বিচলিত হতে দেখেছেন?",
        "পরীক্ষা, নম্বর বা বকাঝকা নিয়ে কি সন্তান কষ্ট পেয়েছে?",
        "পড়াশোনা ও খেলার সময় কম বলে কি সন্তান দুশ্চিন্তা করেছে?",
        "স্বাভাবিক বিশ্রামের পরও কি সন্তানকে ক্লান্ত মনে হয়েছে?",
        "পরিবারের সাধারণ ঘটনায় কি সন্তান সহজে বিরক্ত হচ্ছে?",
        "স্কুলের চাপের সময় কি মাথা বা পেটে ব্যথা বা শরীরে টান লক্ষ্য করেছেন?",
        "অবসর সময়েও কি সন্তানকে স্বস্তি পেতে অসুবিধা হয়েছে?",
        "একসঙ্গে একাধিক কাজ করতে বললে কি সন্তান অভিভূত হয়েছে?",
        "বাড়িতে থেকেও কি সন্তান স্কুলের চিন্তা থামাতে পারছে না?",
        "স্কুলের চাপ কি সন্তানের ঘুম, খেলা বা সম্পর্ককে প্রভাবিত করেছে?"
      ]
    },
    "confused": {
      "en": [
        "Have you noticed your child having difficulty explaining what has upset them?",
        "Has your child become unusually distressed when making simple everyday choices?",
        "Has your child seemed overwhelmed when presented with several options?",
        "Have you noticed your child becoming more disorganised during familiar routines?",
        "Has your child frequently forgotten what they were doing during ordinary activities?",
        "Have you or a teacher noticed new difficulty focusing on one task?",
        "Has your child needed unusually long to complete familiar tasks?",
        "Has your child seemed unsure about how to start simple school or home activities?",
        "Has your child found it hard to identify a trusted adult to ask for help?",
        "Have recent problems with attention or clarity disrupted your child's daily routine?"
      ],
      "bn": [
        "কী কারণে কষ্ট হচ্ছে তা বোঝাতে কি সন্তানের অসুবিধা দেখেছেন?",
        "সাধারণ পছন্দ করতে গেলেও কি সন্তান অস্বাভাবিকভাবে বিচলিত হচ্ছে?",
        "অনেক বিকল্প সামনে এলে কি সন্তান অভিভূত হচ্ছে?",
        "পরিচিত রুটিনের কাজেও কি সন্তান আগের তুলনায় বেশি অগোছালো?",
        "সাধারণ কাজ করার সময় কী করছিল, তা কি সন্তান প্রায়ই ভুলে যাচ্ছে?",
        "একটি কাজে মন রাখতে নতুন অসুবিধা কি আপনি বা শিক্ষক লক্ষ্য করেছেন?",
        "পরিচিত কাজ করতে কি সন্তানের অস্বাভাবিক বেশি সময় লাগছে?",
        "স্কুল বা বাড়ির সহজ কাজ কোথা থেকে শুরু করবে তা কি বুঝতে পারছে না?",
        "সাহায্যের জন্য কোন বিশ্বাসী বড় মানুষের কাছে যাবে তা কি সন্তান বুঝতে পারছে না?",
        "মনোযোগ বা স্পষ্টতার সমস্যায় কি সন্তানের দৈনন্দিন রুটিন ব্যাহত হয়েছে?"
      ]
    }
  },
  "high": {
    "anxious": {
      "en": [
        "In the last two weeks, have you felt nervous before attending school or classes?",
        "Have worries about tests, grades, or your future repeatedly occupied your mind?",
        "Have you found it hard to stop worrying about what classmates think of you?",
        "Have you noticed a racing heart or tense body before presentations or examinations?",
        "Have you felt restless when trying to study or take a break?",
        "Has worrying about school or friendships disrupted your sleep?",
        "Have you avoided participating in class because you feared making a mistake?",
        "Have social media or group conversations increased your worry?",
        "Have small changes in school plans made you unusually nervous?",
        "Has anxiety affected your attendance, concentration, friendships, or daily routine?"
      ],
      "bn": [
        "গত দুই সপ্তাহে স্কুল বা ক্লাসে যাওয়ার আগে কি উদ্বিগ্ন লেগেছে?",
        "পরীক্ষা, নম্বর বা ভবিষ্যৎ নিয়ে কি বারবার চিন্তা হয়েছে?",
        "সহপাঠীরা কী ভাববে তা নিয়ে চিন্তা থামাতে কি কষ্ট হয়েছে?",
        "উপস্থাপনা বা পরীক্ষার আগে কি বুক ধড়ফড় বা শরীরে টান লেগেছে?",
        "পড়া বা বিশ্রামের সময় কি অস্থির অনুভব করেছেন?",
        "স্কুল বা বন্ধুত্বের চিন্তায় কি ঘুমে সমস্যা হয়েছে?",
        "ভুল করার ভয়ে কি ক্লাসে অংশ নেওয়া এড়িয়েছেন?",
        "সোশ্যাল মিডিয়া বা গ্রুপের কথাবার্তায় কি দুশ্চিন্তা বেড়েছে?",
        "স্কুলের পরিকল্পনায় ছোট বদলেও কি বেশি উদ্বিগ্ন হয়েছেন?",
        "উদ্বেগ কি উপস্থিতি, পড়া, বন্ধু বা দৈনন্দিন কাজে প্রভাব ফেলেছে?"
      ]
    },
    "depressed": {
      "en": [
        "In the last two weeks, have you felt low or sad during much of the school day?",
        "Have sports, hobbies, or time with friends seemed less enjoyable than before?",
        "Have you felt distant from people you normally feel close to?",
        "Have you felt unusually exhausted during classes or after school?",
        "Has your sleep pattern changed noticeably during school days?",
        "Have you been very critical of yourself about your appearance or achievements?",
        "Have ordinary assignments seemed difficult to begin?",
        "Have you struggled to concentrate even during familiar lessons?",
        "Have you stopped meeting friends or participating in activities you previously enjoyed?",
        "Have you thought about hurting yourself or wished you were not alive?"
      ],
      "bn": [
        "গত দুই সপ্তাহে স্কুলের সময় কি প্রায়ই মন খারাপ লেগেছে?",
        "খেলা, শখ বা বন্ধুর সঙ্গে সময় কাটানো কি আগের মতো ভালো লাগেনি?",
        "কাছের মানুষদের থেকেও কি দূরে মনে হয়েছে?",
        "ক্লাসে বা স্কুলের পরে কি অস্বাভাবিক ক্লান্ত লেগেছে?",
        "স্কুলের দিনগুলিতে ঘুমের অভ্যাস কি বদলে গেছে?",
        "চেহারা বা সাফল্য নিয়ে কি নিজের প্রতি খুব কঠোর হয়েছেন?",
        "সাধারণ অ্যাসাইনমেন্ট শুরু করতেও কি কষ্ট হয়েছে?",
        "পরিচিত পড়াতেও কি মনোযোগ দিতে অসুবিধা হয়েছে?",
        "আগে ভালো লাগত এমন বন্ধু বা কাজ থেকে কি সরে এসেছেন?",
        "নিজেকে আঘাত করার বা বেঁচে না থাকার চিন্তা কি এসেছে?"
      ]
    },
    "stressed": {
      "en": [
        "Have homework, tuition, or school assignments felt difficult to manage?",
        "Have examinations or expectations from adults made you feel under pressure?",
        "Have you worried that your schedule leaves too little time for rest?",
        "Have you felt drained even after taking a break?",
        "Have you become easily annoyed during ordinary conversations?",
        "Have you had headaches or muscle tension when thinking about schoolwork?",
        "Have you felt guilty while taking time off from studying?",
        "Have overlapping school and extracurricular commitments felt overwhelming?",
        "Have you struggled to stop thinking about marks or upcoming tests?",
        "Has school pressure affected sleep, family time, or friendships?"
      ],
      "bn": [
        "বাড়ির পড়া, টিউশন বা অ্যাসাইনমেন্ট কি সামলানো কঠিন লেগেছে?",
        "পরীক্ষা বা বড়দের প্রত্যাশায় কি চাপ অনুভব করেছেন?",
        "পড়া ও বিশ্রামের জন্য সময় কম বলে কি চিন্তা হয়েছে?",
        "বিরতি নিয়েও কি ক্লান্ত লেগেছে?",
        "সাধারণ কথাবার্তায় কি সহজে বিরক্ত হয়েছেন?",
        "পড়ার চিন্তায় কি মাথাব্যথা বা শরীরে টান লেগেছে?",
        "পড়া বন্ধ করে বিশ্রাম নিলে কি অপরাধবোধ হয়েছে?",
        "স্কুল ও অন্যান্য কাজ একসঙ্গে সামলাতে কি চাপ লেগেছে?",
        "নম্বর বা পরীক্ষার চিন্তা থেকে কি মন সরাতে পারেননি?",
        "স্কুলের চাপ কি ঘুম, পরিবার বা বন্ধুদের সময়ে প্রভাব ফেলেছে?"
      ]
    },
    "confused": {
      "en": [
        "Have you struggled to identify what you are feeling about school or friends?",
        "Have everyday choices about school activities seemed unusually difficult?",
        "Have subject choices or future plans left you feeling overwhelmed?",
        "Have your thoughts felt scattered while trying to study?",
        "Have you lost track of instructions or deadlines more often than usual?",
        "Have you found it hard to focus in lessons despite trying?",
        "Have you needed more time than usual to understand familiar school tasks?",
        "Have you struggled to decide which assignment to finish first?",
        "Have you been unsure whom to approach for advice at school?",
        "Have problems with focus or decision-making affected your normal school routine?"
      ],
      "bn": [
        "স্কুল বা বন্ধুদের বিষয়ে নিজের অনুভূতি বুঝতে কি কষ্ট হয়েছে?",
        "স্কুলের সাধারণ পছন্দ করাও কি কঠিন লেগেছে?",
        "বিষয় নির্বাচন বা ভবিষ্যৎ পরিকল্পনায় কি অভিভূত হয়েছেন?",
        "পড়তে বসলে কি চিন্তাগুলো এলোমেলো হয়েছে?",
        "নির্দেশ বা সময়সীমা কি আগের চেয়ে বেশি ভুলে গেছেন?",
        "চেষ্টা করেও কি ক্লাসে মনোযোগ দিতে অসুবিধা হয়েছে?",
        "পরিচিত পড়া বুঝতেও কি আগের চেয়ে বেশি সময় লেগেছে?",
        "কোন অ্যাসাইনমেন্ট আগে করবেন তা কি বুঝতে পারেননি?",
        "স্কুলে কার কাছে পরামর্শ চাইবেন তা কি স্পষ্ট ছিল না?",
        "মনোযোগ বা সিদ্ধান্তের সমস্যা কি স্কুলজীবনে প্রভাব ফেলেছে?"
      ]
    }
  },
  "ug": {
    "anxious": {
      "en": [
        "Have you felt nervous when entering lectures, tutorials, or campus spaces?",
        "Have worries about grades, placements, or your career repeatedly occupied your mind?",
        "Have you struggled to stop thinking about possible academic failures?",
        "Have you experienced bodily tension before presentations, vivas, or interviews?",
        "Have you felt restless while trying to balance classes and personal time?",
        "Have thoughts about college or relationships made sleeping difficult?",
        "Have you avoided seminars, teamwork, or social events because of apprehension?",
        "Have you struggled to concentrate on lectures because of worry?",
        "Have uncertain schedules or financial matters increased your nervousness?",
        "Has anxiety interfered with attendance, coursework, friendships, or everyday activities?"
      ],
      "bn": [
        "লেকচার, টিউটোরিয়াল বা ক্যাম্পাসে ঢোকার আগে কি উদ্বিগ্ন হয়েছেন?",
        "নম্বর, প্লেসমেন্ট বা ক্যারিয়ার নিয়ে কি বারবার চিন্তা হয়েছে?",
        "পড়ায় ব্যর্থ হওয়ার আশঙ্কা থামাতে কি কষ্ট হয়েছে?",
        "প্রেজেন্টেশন, ভাইভা বা ইন্টারভিউয়ের আগে কি শরীর টানটান হয়েছে?",
        "ক্লাস ও নিজের সময় সামলাতে গিয়ে কি অস্থির লেগেছে?",
        "কলেজ বা সম্পর্কের চিন্তায় কি ঘুমে সমস্যা হয়েছে?",
        "উদ্বেগের কারণে কি সেমিনার, দলীয় কাজ বা অনুষ্ঠান এড়িয়েছেন?",
        "দুশ্চিন্তায় কি ক্লাসে মন দিতে অসুবিধা হয়েছে?",
        "সময়সূচি বা অর্থের অনিশ্চয়তায় কি উদ্বেগ বেড়েছে?",
        "উদ্বেগ কি উপস্থিতি, পড়া, বন্ধুত্ব বা দৈনন্দিন কাজে বাধা দিয়েছে?"
      ]
    },
    "depressed": {
      "en": [
        "Have you felt sad or emotionally flat during much of your college day?",
        "Have you lost interest in courses, clubs, or activities you used to enjoy?",
        "Have you felt disconnected from roommates, classmates, or close friends?",
        "Have you experienced unusually low energy while managing campus life?",
        "Has your sleep routine changed noticeably during the semester?",
        "Have you felt persistently inadequate compared with your peers?",
        "Have you struggled to start or complete ordinary coursework?",
        "Have you found it difficult to concentrate during classes or independent study?",
        "Have you withdrawn from campus activities or close relationships?",
        "Have you thought about hurting yourself or wished you were not alive?"
      ],
      "bn": [
        "কলেজের দিনের বেশির ভাগ সময় কি মন খারাপ বা শূন্য লেগেছে?",
        "কোর্স, ক্লাব বা পছন্দের কাজে কি আগ্রহ কমে গেছে?",
        "রুমমেট, সহপাঠী বা বন্ধুদের থেকে কি বিচ্ছিন্ন লেগেছে?",
        "ক্যাম্পাসজীবন সামলাতে কি অস্বাভাবিক শক্তির অভাব হয়েছে?",
        "সেমিস্টারে কি ঘুমের রুটিন স্পষ্ট বদলেছে?",
        "সহপাঠীদের সঙ্গে তুলনা করে কি নিজেকে অযোগ্য মনে হয়েছে?",
        "সাধারণ কোর্সের কাজ শুরু করতে কি কষ্ট হয়েছে?",
        "ক্লাস বা নিজের পড়ায় কি মনোযোগ ধরে রাখতে পারেননি?",
        "কলেজের অনুষ্ঠান বা সম্পর্ক থেকে কি সরে এসেছেন?",
        "নিজেকে আঘাত করা বা বেঁচে না থাকার চিন্তা কি এসেছে?"
      ]
    },
    "stressed": {
      "en": [
        "Have lectures, assignments, and assessments felt greater than you can manage?",
        "Have internship, placement, or career expectations created strong pressure?",
        "Have you worried that you cannot fit coursework and personal responsibilities into your time?",
        "Have you felt drained after ordinary academic days?",
        "Have you become unusually irritated by small setbacks on campus?",
        "Have you noticed headaches, muscle tension, or difficulty relaxing during deadlines?",
        "Have you felt guilty taking time away from your studies?",
        "Have overlapping classes, projects, and part-time responsibilities felt overwhelming?",
        "Have you struggled to mentally switch off from college tasks?",
        "Has academic pressure disrupted your sleep, relationships, or wellbeing routine?"
      ],
      "bn": [
        "লেকচার, অ্যাসাইনমেন্ট ও পরীক্ষা কি সামলানোর বাইরে মনে হয়েছে?",
        "ইন্টার্নশিপ, প্লেসমেন্ট বা ক্যারিয়ারের প্রত্যাশায় কি চাপ হয়েছে?",
        "পড়া ও ব্যক্তিগত দায়িত্বের জন্য সময় কম মনে হয়েছে?",
        "সাধারণ পড়ার দিনের পরও কি শক্তিহীন লেগেছে?",
        "ক্যাম্পাসে ছোট সমস্যাতেও কি বেশি বিরক্ত হয়েছেন?",
        "ডেডলাইনের সময় কি মাথাব্যথা বা শরীরে টান লেগেছে?",
        "পড়া থেকে বিরতি নিলে কি অপরাধবোধ হয়েছে?",
        "ক্লাস, প্রজেক্ট বা পার্ট-টাইম কাজ একসঙ্গে সামলাতে কি কষ্ট হয়েছে?",
        "কলেজের কাজের চিন্তা থেকে কি মন সরাতে পারেননি?",
        "পড়ার চাপ কি ঘুম, সম্পর্ক বা রুটিনে প্রভাব ফেলেছে?"
      ]
    },
    "confused": {
      "en": [
        "Have you found it difficult to understand your reactions to college experiences?",
        "Have choices about electives, activities, or relationships felt unusually hard?",
        "Have career options or placement choices left you feeling overwhelmed?",
        "Have your thoughts seemed disorganised when planning coursework?",
        "Have you forgotten academic tasks or appointments more often than usual?",
        "Have you struggled to stay focused while attending lectures or reading?",
        "Have assignments taken much longer because you could not find a starting point?",
        "Have you found it difficult to decide which college responsibilities to prioritise?",
        "Have you felt unsure whom to consult about academic or personal decisions?",
        "Have difficulties with clarity affected your academic work or daily living?"
      ],
      "bn": [
        "কলেজের অভিজ্ঞতা নিয়ে নিজের প্রতিক্রিয়া বুঝতে কি কষ্ট হয়েছে?",
        "ইলেকটিভ, ক্লাব বা সম্পর্কের পছন্দ করতে কি অসুবিধা হয়েছে?",
        "ক্যারিয়ার বা প্লেসমেন্টের নানা পথ কি অভিভূত করেছে?",
        "কোর্সওয়ার্ক পরিকল্পনা করতে কি চিন্তা এলোমেলো হয়েছে?",
        "পড়ার কাজ বা অ্যাপয়েন্টমেন্ট কি আগের চেয়ে বেশি ভুলেছেন?",
        "লেকচার বা পড়ার সময় মন রাখতে কি কষ্ট হয়েছে?",
        "কোথা থেকে শুরু করবেন বুঝতে না পেরে কাজ কি দীর্ঘ হয়েছে?",
        "কলেজের কোন দায়িত্ব আগে করবেন তা কি ঠিক করতে পারেননি?",
        "পড়া বা ব্যক্তিগত সিদ্ধান্তে কার পরামর্শ নেবেন তা কি বুঝতে পারেননি?",
        "অস্পষ্টতা কি পড়াশোনা বা দৈনন্দিন জীবনে প্রভাব ফেলেছে?"
      ]
    }
  },
  "pg": {
    "anxious": {
      "en": [
        "Have you felt anxious before advanced seminars, coursework discussions, or presentations?",
        "Have worries about dissertation quality or future opportunities occupied your thoughts?",
        "Have you found it difficult to stop worrying about academic expectations?",
        "Have you experienced physical tension before assessments or project reviews?",
        "Have you felt restless when working independently on complex material?",
        "Have postgraduate responsibilities affected your sleep through worry?",
        "Have you avoided contacting faculty or contributing ideas because of apprehension?",
        "Has anxiety made it harder to focus on advanced reading or analysis?",
        "Have uncertain career or funding prospects increased your nervousness?",
        "Has worry disrupted your studies, relationships, or regular life?"
      ],
      "bn": [
        "উচ্চতর সেমিনার বা প্রেজেন্টেশনের আগে কি উদ্বিগ্ন হয়েছেন?",
        "ডিসার্টেশন বা ভবিষ্যৎ সুযোগ নিয়ে কি বারবার চিন্তা হয়েছে?",
        "একাডেমিক প্রত্যাশার চিন্তা থামাতে কি অসুবিধা হয়েছে?",
        "মূল্যায়ন বা প্রজেক্ট রিভিউয়ের আগে কি শরীর টানটান হয়েছে?",
        "জটিল বিষয় নিয়ে একা কাজের সময় কি অস্থির লেগেছে?",
        "স্নাতকোত্তরের দায়িত্বের চিন্তায় কি ঘুম কমেছে?",
        "ভয়ের কারণে কি শিক্ষকদের সঙ্গে যোগাযোগ বা মতামত দেওয়া এড়িয়েছেন?",
        "উদ্বেগ কি কঠিন পড়া বা বিশ্লেষণে মনোযোগ কমিয়েছে?",
        "ক্যারিয়ার বা অর্থায়নের অনিশ্চয়তায় কি অস্বস্তি বেড়েছে?",
        "উদ্বেগ কি পড়া, সম্পর্ক বা দৈনন্দিন জীবনে বাধা দিয়েছে?"
      ]
    },
    "depressed": {
      "en": [
        "Have you felt low or emotionally empty during postgraduate study?",
        "Have you lost interest in your chosen subject or personal activities?",
        "Have you felt isolated from classmates or your usual support network?",
        "Have you experienced low energy during reading, lab work, or coursework?",
        "Has your sleeping pattern changed noticeably during the term?",
        "Have you repeatedly judged your ability against other postgraduate students?",
        "Have routine dissertation or coursework tasks felt hard to begin?",
        "Have you struggled to focus on complex material you previously managed?",
        "Have you withdrawn from academic discussion or social contact?",
        "Have you thought about hurting yourself or wished you were not alive?"
      ],
      "bn": [
        "স্নাতকোত্তর পড়ার সময় কি মন খারাপ বা শূন্য লেগেছে?",
        "নিজের বিষয় বা পছন্দের কাজে কি আগ্রহ কমেছে?",
        "সহপাঠী বা সমর্থনের মানুষদের থেকে কি বিচ্ছিন্ন লেগেছে?",
        "পড়া, ল্যাব বা কোর্সওয়ার্কে কি শক্তির অভাব হয়েছে?",
        "এই টার্মে কি ঘুমের রুটিন বদলে গেছে?",
        "অন্য স্নাতকোত্তর শিক্ষার্থীদের সঙ্গে তুলনা করে কি নিজেকে ছোট মনে হয়েছে?",
        "ডিসার্টেশন বা কোর্সওয়ার্কের সাধারণ কাজ শুরু করতে কি কষ্ট হয়েছে?",
        "জটিল পড়ায় মন দিতে কি আগের চেয়ে কষ্ট হয়েছে?",
        "একাডেমিক আলোচনা বা সামাজিক মেলামেশা কি এড়িয়েছেন?",
        "নিজেকে আঘাত করার বা বেঁচে না থাকার চিন্তা কি এসেছে?"
      ]
    },
    "stressed": {
      "en": [
        "Have advanced coursework or dissertation requirements felt too heavy to manage?",
        "Have supervisor expectations or assessment deadlines caused intense pressure?",
        "Have you worried about balancing study with financial or family responsibilities?",
        "Have you remained exhausted despite time away from coursework?",
        "Have you been more easily frustrated by academic setbacks?",
        "Have you experienced tension or headaches around dissertation work?",
        "Have you felt unable to take breaks without guilt?",
        "Have competing assignments, teaching duties, or projects overwhelmed you?",
        "Have you found it hard to switch off from postgraduate work?",
        "Has pressure disrupted your sleep, relationships, or personal health habits?"
      ],
      "bn": [
        "উচ্চতর কোর্সওয়ার্ক বা ডিসার্টেশন কি খুব ভারী লেগেছে?",
        "সুপারভাইজারের প্রত্যাশা বা ডেডলাইনে কি বেশি চাপ হয়েছে?",
        "পড়া, আর্থিক বা পারিবারিক দায়িত্ব সামলানো নিয়ে কি দুশ্চিন্তা হয়েছে?",
        "কোর্সওয়ার্ক থেকে দূরে থেকেও কি ক্লান্তি রয়ে গেছে?",
        "একাডেমিক সমস্যায় কি সহজে বিরক্ত হয়েছেন?",
        "ডিসার্টেশনের কাজে কি মাথাব্যথা বা শরীরে টান হয়েছে?",
        "বিরতি নিলে কি অপরাধবোধ হয়েছে?",
        "অ্যাসাইনমেন্ট, টিচিং বা প্রজেক্ট একসঙ্গে কি অভিভূত করেছে?",
        "পড়ার কাজের চিন্তা থেকে কি মন সরাতে পারেননি?",
        "চাপ কি ঘুম, সম্পর্ক বা স্বাস্থ্যের অভ্যাসে প্রভাব ফেলেছে?"
      ]
    },
    "confused": {
      "en": [
        "Have you struggled to understand your feelings about postgraduate study?",
        "Have dissertation or specialization decisions felt unusually difficult?",
        "Have multiple academic or career pathways left you overwhelmed?",
        "Have your thoughts seemed scattered when developing a project plan?",
        "Have you lost track of readings, deadlines, or research notes more often than usual?",
        "Have you struggled to concentrate on sustained, complex reading?",
        "Have familiar academic tasks needed unexpectedly long to complete?",
        "Have you struggled to choose the most important research or study task?",
        "Have you felt unsure whose guidance to seek about your next steps?",
        "Have uncertainty or focus problems interfered with postgraduate routines?"
      ],
      "bn": [
        "স্নাতকোত্তর পড়া নিয়ে নিজের অনুভূতি বুঝতে কি কষ্ট হয়েছে?",
        "ডিসার্টেশন বা বিশেষায়নের সিদ্ধান্ত কি কঠিন লেগেছে?",
        "নানা পড়ার বা ক্যারিয়ারের পথ কি অভিভূত করেছে?",
        "প্রজেক্ট পরিকল্পনার সময় কি চিন্তা এলোমেলো হয়েছে?",
        "পেপার, সময়সীমা বা নোট কি আগের চেয়ে বেশি ভুলেছেন?",
        "দীর্ঘ জটিল পড়ায় মনোযোগ রাখতে কি কষ্ট হয়েছে?",
        "পরিচিত একাডেমিক কাজেও কি অস্বাভাবিক বেশি সময় লেগেছে?",
        "কোন কাজটি আগে করবেন তা কি ঠিক করতে পারেননি?",
        "পরের পদক্ষেপে কার পরামর্শ নেবেন তা কি বুঝতে পারেননি?",
        "অস্পষ্টতা বা মনোযোগের সমস্যা কি পড়ার রুটিন ব্যাহত করেছে?"
      ]
    }
  },
  "phd": {
    "anxious": {
      "en": [
        "Have you felt anxious before meetings with your research supervisor or advisory committee?",
        "Have concerns about publication, funding, or thesis completion repeatedly occupied your thoughts?",
        "Have you found it difficult to switch off worries about your research progress?",
        "Have you experienced physical tension before presentations, reviews, or defenses?",
        "Have you felt restless or on edge while writing or analysing results?",
        "Have research-related worries disrupted your sleep?",
        "Have you postponed asking for feedback because you feared criticism?",
        "Have worries affected your concentration during experiments, coding, or reading?",
        "Have uncertain results or changes in research direction caused intense apprehension?",
        "Has anxiety interfered with your research work, relationships, or daily functioning?"
      ],
      "bn": [
        "সুপারভাইজার বা কমিটির মিটিংয়ের আগে কি উদ্বেগ হয়েছে?",
        "প্রকাশনা, ফান্ডিং বা থিসিস শেষ করা নিয়ে কি বারবার চিন্তা হয়েছে?",
        "গবেষণার অগ্রগতির দুশ্চিন্তা কি থামাতে পারেননি?",
        "প্রেজেন্টেশন, রিভিউ বা ডিফেন্সের আগে কি শরীরে টান লেগেছে?",
        "লেখা বা ফলাফল বিশ্লেষণের সময় কি অস্থির লেগেছে?",
        "গবেষণার চিন্তায় কি ঘুম ব্যাহত হয়েছে?",
        "সমালোচনার ভয়ে কি ফিডব্যাক চাওয়া পিছিয়ে দিয়েছেন?",
        "উদ্বেগ কি পরীক্ষা, কোডিং বা পড়ায় মনোযোগ কমিয়েছে?",
        "অপ্রত্যাশিত ফলাফল বা গবেষণার দিক বদলালে কি তীব্র উদ্বেগ হয়েছে?",
        "উদ্বেগ কি গবেষণা, সম্পর্ক বা দৈনন্দিন কাজে বাধা দিয়েছে?"
      ]
    },
    "depressed": {
      "en": [
        "Have you felt sad or emotionally flat during much of your research week?",
        "Have you lost interest in experiments, writing, or interests outside the laboratory?",
        "Have you felt isolated from peers or colleagues during doctoral work?",
        "Have you experienced persistent low energy while working on your thesis?",
        "Has your sleep routine changed noticeably during research-intensive periods?",
        "Have you felt persistently inadequate compared with other researchers?",
        "Have even manageable research tasks felt difficult to start?",
        "Have you struggled to focus on papers, data, or manuscript preparation?",
        "Have you withdrawn from collaborators, friends, or familiar activities?",
        "Have you thought about hurting yourself or wished you were not alive?"
      ],
      "bn": [
        "গবেষণার সপ্তাহের অনেকটা সময় কি মন খারাপ বা শূন্য লেগেছে?",
        "পরীক্ষা, লেখা বা গবেষণার বাইরের শখে কি আগ্রহ কমেছে?",
        "গবেষক সহকর্মীদের থেকে কি বিচ্ছিন্ন লেগেছে?",
        "থিসিসের কাজে কি দীর্ঘস্থায়ী শক্তির অভাব হয়েছে?",
        "গবেষণার ব্যস্ত সময়ে কি ঘুমের রুটিন বদলেছে?",
        "অন্য গবেষকদের সঙ্গে তুলনা করে কি নিজেকে অযোগ্য মনে হয়েছে?",
        "সামান্য গবেষণার কাজও শুরু করতে কি কঠিন লেগেছে?",
        "পেপার, ডেটা বা লেখা নিয়ে মনোযোগ দিতে কি কষ্ট হয়েছে?",
        "সহযোগী, বন্ধু বা পরিচিত কাজ থেকে কি সরে এসেছেন?",
        "নিজেকে আঘাত করা বা বেঁচে না থাকার চিন্তা কি এসেছে?"
      ]
    },
    "stressed": {
      "en": [
        "Have dissertation milestones, experiments, or publication deadlines felt unmanageable?",
        "Have supervisor expectations or research evaluation created substantial pressure?",
        "Have you worried about balancing research with teaching, funding, or family obligations?",
        "Have you felt exhausted even after taking time off from research?",
        "Have you become unusually irritable after experiments or manuscript feedback?",
        "Have you noticed bodily tension or headaches during high-workload periods?",
        "Have you felt guilty whenever you stop working on your thesis?",
        "Have simultaneous research, teaching, and publication demands overwhelmed you?",
        "Have you found it difficult to disconnect mentally from unresolved research problems?",
        "Has research-related strain affected your sleep, health habits, or close relationships?"
      ],
      "bn": [
        "থিসিসের ধাপ, পরীক্ষা বা প্রকাশনার ডেডলাইন কি অসামলানো লেগেছে?",
        "সুপারভাইজারের প্রত্যাশা বা মূল্যায়নে কি তীব্র চাপ হয়েছে?",
        "গবেষণা, পড়ানো, অর্থায়ন বা পরিবারের ভারসাম্য নিয়ে কি দুশ্চিন্তা হয়েছে?",
        "গবেষণা থেকে বিরতি নিয়েও কি ক্লান্তি কাটেনি?",
        "পরীক্ষা বা রিভিউয়ের পর কি বেশি বিরক্ত হয়ে পড়েছেন?",
        "অতিরিক্ত কাজের সময় কি শরীরে টান বা মাথাব্যথা হয়েছে?",
        "থিসিসের কাজ বন্ধ করলেই কি অপরাধবোধ হয়েছে?",
        "গবেষণা, পড়ানো ও প্রকাশনার চাহিদা কি একসঙ্গে অভিভূত করেছে?",
        "অসমাপ্ত গবেষণার চিন্তা থেকে কি মন সরাতে পারেননি?",
        "গবেষণার চাপ কি ঘুম, স্বাস্থ্যের অভ্যাস বা ঘনিষ্ঠ সম্পর্কে প্রভাব ফেলেছে?"
      ]
    },
    "confused": {
      "en": [
        "Have you struggled to make sense of your emotional reaction to research setbacks?",
        "Have major methodological or publication decisions felt unusually difficult?",
        "Have conflicting reviewer or supervisor suggestions left you overwhelmed?",
        "Have your research ideas seemed scattered or difficult to organise?",
        "Have you lost track of experiment plans, references, or analysis steps more often than usual?",
        "Have you struggled to sustain attention while reviewing papers or analysing data?",
        "Have familiar research tasks taken much longer because you could not gain clarity?",
        "Have you found it difficult to identify the highest-priority next research step?",
        "Have you felt unsure who to approach for guidance about a research dilemma?",
        "Have problems with clarity or focus disrupted your research or daily life?"
      ],
      "bn": [
        "গবেষণায় বাধা এলে নিজের অনুভূতি বুঝতে কি কঠিন লেগেছে?",
        "পদ্ধতি বা প্রকাশনার বড় সিদ্ধান্ত কি অস্বাভাবিক কঠিন লেগেছে?",
        "রিভিউয়ার বা সুপারভাইজারের পরস্পরবিরোধী পরামর্শ কি অভিভূত করেছে?",
        "গবেষণার ধারণাগুলো কি অগোছালো মনে হয়েছে?",
        "পরীক্ষা, রেফারেন্স বা বিশ্লেষণের ধাপ কি আগের চেয়ে বেশি ভুলেছেন?",
        "পেপার পড়া বা ডেটা বিশ্লেষণে মনোযোগ ধরে রাখতে কি কষ্ট হয়েছে?",
        "পরিচিত গবেষণার কাজেও কি স্পষ্টতার অভাবে বেশি সময় লেগেছে?",
        "পরের গুরুত্বপূর্ণ গবেষণার কাজটি কি চিহ্নিত করতে পারেননি?",
        "গবেষণার দ্বিধায় কার পরামর্শ নেবেন তা কি বুঝতে পারেননি?",
        "স্পষ্টতা বা মনোযোগের সমস্যা কি গবেষণা বা দৈনন্দিন জীবন ব্যাহত করেছে?"
      ]
    }
  }
};
