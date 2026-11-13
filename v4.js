/* Mind-sage V4: guardian-led primary assessments, stage-specific questionnaires and sourced Vani. */
'use strict';
// Preserve V3 modules and their private-first local storage behaviour.
LEVELS[0].subtitle='Parents and guardians answer observed-behaviour questions for their child.';
LEVELS[1].subtitle='School life, examinations, friendships and belonging.';
LEVELS[2].subtitle='Campus life, studies, relationships and career choices.';
LEVELS[3].subtitle='Advanced coursework, dissertation and work-life balance.';
LEVELS[4].subtitle='Research, supervision, publications and doctoral life.';

const V4_NEW_QUOTES = [
  {bn:'যাতে character form (চরিত্র তৈরী) হয়, মনের শক্তি বাড়ে, বুদ্ধির বিকাশ হয়, নিজের পায়ে নিজে দাঁড়াতে পারে, এই-রকম শিক্ষা চাই।',source:'স্বামীজীর বাণী ও রচনা, ৯ম খণ্ড, তিনদিনের স্মৃতিলিপি',url:'https://media.belurmath.org/inspiration-swami-vivekananda-29-4991/'},
  {bn:'প্রেম, সত্য, নিঃস্বার্থপরতা — এগুলি শুধু নীতি-সম্বন্ধীয় আলঙ্কারিক বর্ণনা নয়, এগুলি আমাদের সর্বোচ্চ আদর্শ…',source:'বাণী ও রচনা, ১ম খণ্ড, কর্মযোগ (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-53-7324/'},
  {bn:'যিনি প্রেমিক, তিনিই জীবিত; যিনি স্বার্থপর, তিনি মরণোন্মুখ।',source:'স্বামী ব্রহ্মানন্দকে পত্র, ১৮৯৫ (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-34-5563/'},
  {bn:'অপরের নিকট ভাল যাহা কিছু পাও শিক্ষা কর, কিন্তু সেইটি লইয়া নিজেদের ভাবে গঠন করিয়া লইতে হইবে।',source:'বাণী ও রচনা, ৫ম খণ্ড, হিন্দুধর্মের সাধারণ ভিত্তি (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-109-12528/'},
  {bn:'সমস্ত শরীরে তীব্র ক্রিয়াশীলতা, আর মুখ যেন নীল আকাশের মতো ধীর গম্ভীর প্রশান্ত।',source:'বাণী ও রচনা, ৯ম খণ্ড, স্বামীজীর স্মৃতি (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-28-4955/'},
  {bn:'একটি আদর্শের জন্য জীবন উৎসর্গ কর, আর কোন কিছু যেন মনে স্থান না পায়।',source:'বাণী ও রচনা, ৩য় খণ্ড, সাধন সম্বন্ধে কয়েকটি কথা',url:'https://media.belurmath.org/inspiration-swami-vivekananda-63-8379/'},
  {bn:'যদি একজনের মনে—এ সংসার নরককুণ্ডের মধ্যে একদিনও একটু আনন্দ ও শান্তি দেওয়া যায়, সেইটুকুই সত্য…',source:'স্বামী ব্রহ্মানন্দকে পত্র, ১৮ ফেব্রুয়ারি ১৯০২ (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-40-6637/'},
  {bn:'জীবন ক্ষণস্থায়ী, কিন্তু আত্মা অবিনাশী ও অনন্ত।',source:'বাণী ও রচনা, ৫ম খণ্ড, ভারতের ভবিষ্যৎ (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-48-7054/'},
  {bn:'তাহারাই যথার্থ জীবিত, যাহারা অপরের জন্য জীবনধারণ করে।',source:'মহীশূরের মহারাজাকে পত্র, ২৩ জুন ১৮৯৪ (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-95-10363/'},
  {bn:'কেবল তিনিই যথার্থ আচার্য, যিনি অল্পায়াসেই শিষ্যের অবস্থায় আপনাকে লইয়া যাইতে পারেন।',source:'বাণী ও রচনা, ৮ম খণ্ড, মদীয় আচার্যদেব (নির্বাচিত অংশ)',url:'https://media.belurmath.org/inspiration-swami-vivekananda-113-12698/'}
];
QUOTES.push(...V4_NEW_QUOTES);

const V4_GUARDIAN_TIPS={
  anxious:[['Offer predictable routines and listen gently when your child seems worried.','সন্তানের জন্য সহজ রুটিন রাখুন এবং উদ্বেগ দেখা দিলে মন দিয়ে শুনুন।'],['Ask a teacher whether similar changes have appeared at school.','স্কুলেও এমন পরিবর্তন হয়েছে কি না শিক্ষকের সঙ্গে কথা বলুন।'],['If worry persists or limits daily life, consult a qualified child professional.','দুশ্চিন্তা চলতে থাকলে বা দৈনন্দিন কাজে বাধা দিলে শিশু-বিশেষজ্ঞের সাহায্য নিন।']],
  depressed:[['Make calm time to connect through play and everyday conversation.','খেলা ও সাধারণ কথোপকথনের মাধ্যমে সন্তানের সঙ্গে শান্ত সময় কাটান।'],['Speak with your child and their teacher about changes you have noticed.','আপনি যে পরিবর্তনগুলি দেখেছেন তা নিয়ে সন্তান ও শিক্ষকের সঙ্গে কথা বলুন।'],['Seek prompt child-focused professional support for marked or persistent changes.','পরিবর্তন বেশি বা দীর্ঘস্থায়ী হলে দ্রুত শিশু-উপযুক্ত পেশাদার সহায়তা নিন।']],
  stressed:[['Break tasks into simple steps and include free play in the routine.','কাজ ছোট ধাপে ভাগ করুন এবং খেলাধুলার জন্য সময় রাখুন।'],['Coordinate with teachers about homework and test-related pressure.','বাড়ির পড়া ও পরীক্ষার চাপ নিয়ে শিক্ষকের সঙ্গে আলোচনা করুন।'],['Pay attention to sleep and physical symptoms; seek medical advice if needed.','ঘুম ও শারীরিক সমস্যার দিকে খেয়াল রাখুন; প্রয়োজনে চিকিৎসকের পরামর্শ নিন।']],
  confused:[['Give one clear instruction at a time and allow extra time to respond.','একবারে একটি সহজ নির্দেশ দিন এবং উত্তর দেওয়ার সময় দিন।'],['Check whether school or home routines have recently changed.','স্কুল বা বাড়ির রুটিনে সম্প্রতি কোনো পরিবর্তন হয়েছে কি না দেখুন।'],['If confusion is new, severe, or persistent, ask a qualified child professional.','বিভ্রান্তি নতুন, তীব্র বা দীর্ঘস্থায়ী হলে শিশু-বিশেষজ্ঞের সাহায্য নিন।']]
};
function v4ParentTips(type,lang=state.lang){return V4_GUARDIAN_TIPS[type].map(x=>x[lang==='bn'?1:0]);}
// Within-stage language changes are intentionally limited to age-relevant wording.
const V4_AGE_WORDING={
  primary:{young:{anxious:{0:['During the last two weeks, have you noticed your child becoming worried before going to primary school?','গত দুই সপ্তাহে প্রাথমিক বিদ্যালয়ে যাওয়ার আগে কি সন্তানকে উদ্বিগ্ন হতে দেখেছেন?']},stressed:{1:['Has your child become distressed about school activities or being corrected by adults?','স্কুলের কাজ বা বড়দের সংশোধনের সময় কি সন্তান বিচলিত হয়েছে?']},confused:{1:['Has your child become distressed when choosing between two simple activities?','সহজ দুটি কাজের মধ্যে বেছে নিতে কি সন্তান বিচলিত হয়েছে?']}}},
  high:{senior:{anxious:{1:['Have worries about board examinations, competitive tests, or future courses occupied your mind?','বোর্ড পরীক্ষা, প্রতিযোগিতামূলক পরীক্ষা বা ভবিষ্যৎ বিষয় নিয়ে কি বারবার চিন্তা হয়েছে?']},stressed:{1:['Have board examinations, entrance coaching, or expectations from adults made you feel under pressure?','বোর্ড পরীক্ষা, প্রবেশিকা প্রস্তুতি বা বড়দের প্রত্যাশায় কি চাপ অনুভব করেছেন?']},confused:{2:['Have subject streams, entrance examinations, or career choices left you feeling overwhelmed?','বিষয় নির্বাচন, প্রবেশিকা পরীক্ষা বা ক্যারিয়ারের সিদ্ধান্ত কি অভিভূত করেছে?']}}}
};
function v4Question(type,index){let pair=V4_QUESTIONS[state.level][type][state.lang==='bn'?'bn':'en'][index];const band=state.level==='primary'&&state.age!==null&&state.age<=8?'young':state.level==='high'&&state.age!==null&&state.age>=15?'senior':null;if(band){const v=V4_AGE_WORDING[state.level]?.[band]?.[type]?.[index];if(v)pair=v[state.lang==='bn'?1:0];}return pair;}

// Enhance the existing stage-selection cards without removing their V3 styling.
const v4CategoryCardsBase=categoryCards;
categoryCards=function(){const html=v4CategoryCardsBase();return html.replace('সহজভাবে নিজের অনুভূতি বলুন।','সন্তানের আচরণ দেখে অভিভাবক উত্তর দেবেন।').replace('হৃদয়ে','হৃদয়ে');};

const v4ProfileBase=profile;
profile=function(){
  let html=v4ProfileBase();if(typeof html!=='string')return html;
  if(state.level!=='primary')return html;
  const intro=`<div class="v4-guardian-head"><span class="v4-brow">${T('PARENT / GUARDIAN RESPONSE','অভিভাবকের উত্তর')}</span><h2>${T('You are answering on behalf of your child.','আপনি আপনার সন্তানের হয়ে উত্তর দিচ্ছেন।')}</h2><p>${T('Only a parent or guardian should complete the primary-school assessment. Questions focus on behaviour you have actually observed, not thoughts you must guess.','প্রাথমিক বিদ্যালয়ের মূল্যায়ন কেবল পিতা-মাতা বা অভিভাবক পূরণ করবেন। প্রশ্নগুলি আপনি বাস্তবে যা দেখেছেন, তার ওপর ভিত্তি করে তৈরি।')}</p></div>`;
  const guardianFields=`<div class="v4-guardian-fields"><label class="field"><span>${T('Your relationship to the child','শিশুর সঙ্গে আপনার সম্পর্ক')} <b>*</b></span><select name="guardianRelationship" required><option value="">${T('Choose your relationship','সম্পর্ক বেছে নিন')}</option>${[['parent','Parent (mother/father)','পিতা বা মাতা'],['legal','Legal guardian','আইনি অভিভাবক'],['other','Other responsible guardian','অন্যান্য দায়িত্বপ্রাপ্ত অভিভাবক']].map(([id,en,bn])=>`<option value="${id}" ${state.guardianRelationship===id?'selected':''}>${T(en,bn)}</option>`).join('')}</select></label><label class="v4-checkline"><input type="checkbox" name="guardianConfirmed" required ${state.guardianConfirmed?'checked':''}/><span>${T('I am the parent or guardian responding for this primary-school child. I will answer using observations from the past two weeks.','আমি এই প্রাথমিক বিদ্যালয়ের শিশুটির পিতা-মাতা বা অভিভাবক। গত দুই সপ্তাহে দেখা আচরণের ভিত্তিতে উত্তর দেব।')}</span></label><div class="v4-soft-note">${I('shield',17)} ${T('For younger children, the report is a guardian-observation summary. If you are concerned about your child, discuss your observations with a qualified child health professional.','ছোট শিশুদের ক্ষেত্রে রিপোর্টটি অভিভাবকের পর্যবেক্ষণের সারাংশ। উদ্বেগ থাকলে শিশু-স্বাস্থ্য বিশেষজ্ঞের সঙ্গে আলোচনা করুন।')}</div></div>`;
  html=html.replace('<div class="two-col">',intro+'<div class="two-col">');
  html=html.replace('<div class="captcha">',guardianFields+'<div class="captcha">');
  html=html.replace('A few details to get started.','A few details about the child.').replace('শুরু করতে কিছু তথ্য দিন।','শিশুর কয়েকটি তথ্য দিন।');
  return html;
};

// Keep the primary-school safeguarding notice visible before selecting a feeling.
const v4MoodsBase=moods;
moods=function(){let html=v4MoodsBase();if(state.level==='primary'&&typeof html==='string')html=html.replace('<div class="mood-page-grid">',`<div class="v4-guardian-page"><strong>${T('Guardian-guided check-in','অভিভাবকের মাধ্যমে মূল্যায়ন')}</strong><p>${T('Choose the concern you have observed in your child. Every answer should reflect what you noticed, rather than your child completing the form.','আপনার সন্তানের মধ্যে যে সমস্যা দেখেছেন সেটি বেছে নিন। শিশুকে দিয়ে ফর্ম পূরণ না করিয়ে নিজে দেখা বিষয়ের ভিত্তিতে উত্তর দিন।')}</p></div><div class="mood-page-grid">`);return html;};

const v4ReportBase=report;
report=function(t){let html=v4ReportBase(t);if(typeof html!=='string')return html;if(state.level!=='primary')return html;
 const note=`<section class="v4-observer-panel"><span class="v4-brow">${T('GUARDIAN OBSERVATION REPORT','অভিভাবকের পর্যবেক্ষণের রিপোর্ট')}</span><h2>${T('About this child’s response pattern','শিশুর আচরণ সম্পর্কে এই সারাংশ')}</h2><p>${T('This summary reflects behaviours reported by a parent or guardian during the past two weeks. A caregiver may not observe everything a child experiences. This score is not a diagnosis and should not be compared directly with a student self-report.','এই সারাংশে গত দুই সপ্তাহে অভিভাবকের দেখা আচরণ ব্যবহার করা হয়েছে। শিশুর সব অভিজ্ঞতা অভিভাবকের চোখে পড়তেই হবে এমন নয়। এটি রোগনির্ণয় নয় এবং শিক্ষার্থীর নিজের দেওয়া উত্তরের সঙ্গে সরাসরি তুলনাযোগ্য নয়।')}</p><p>${T('If changes persist or affect school, play, sleep or relationships, discuss them with a qualified paediatrician or child mental health professional.','পরিবর্তনগুলো চলতে থাকলে বা স্কুল, খেলা, ঘুম বা সম্পর্কে প্রভাব ফেললে শিশু-বিশেষজ্ঞ বা শিশু-মানসিক স্বাস্থ্য বিশেষজ্ঞের সাহায্য নিন।')}</p></section>`;
 return html.replace('<section class="report-score',note+'<section class="report-score');
};

// Add reporter validation before the existing app form handler executes. No guardian name is collected.
document.addEventListener('submit',function(event){
 if(event.target.id!=='profile-form')return;
 const f=event.target;
 state.profileReady=false;
 if(state.level!=='primary')return;
 state.guardianRelationship=f.elements.guardianRelationship?.value||'';
 state.guardianConfirmed=!!f.elements.guardianConfirmed?.checked;
 if(!state.guardianConfirmed||!['parent','legal','other'].includes(state.guardianRelationship)){
   event.preventDefault();event.stopImmediatePropagation();
   const err=document.querySelector('#profile-error');if(err)err.textContent=T('A parent or guardian must confirm their role to complete this assessment.','এই মূল্যায়নের জন্য পিতা-মাতা বা অভিভাবককে নিজের ভূমিকা নিশ্চিত করতে হবে।');
 }
},true);
// Route updates and stable V4 branding.
const v4LandingBase=v3Landing;
v3Landing=function(){return v4LandingBase().replace('<div class="level-grid">',`<div class="v4-family-banner"><div><span class="v4-brow">${T('A DEDICATED SPACE FOR YOUNGER LEARNERS','ছোট শিক্ষার্থীদের জন্য')}</span><h3>${T('For primary school, a parent or guardian leads the conversation.','প্রাথমিক শিক্ষার্থীর হয়ে কথা বলবেন অভিভাবক।')}</h3><p>${T('Questions focus on observable changes at home and in school, with family-centred next steps.','বাড়ি ও স্কুলে শিশুর দেখা আচরণ এবং পরিবারের করণীয় নিয়ে প্রশ্ন।')}</p></div><img src="./parent-child-reflection.webp" alt="An illustrative photograph of a parent listening to a young child while drawing" loading="lazy"></div><div class="level-grid">`).replaceAll('MIND-SAGE · VERSION 3','MIND-SAGE').replaceAll('মাইন্ড-সেজ · সংস্করণ ৩','মাইন্ড-সেজ · সংস্করণ ৪').replace('Choose a category to begin the original assessment and personal dashboard.','Choose a learning stage: each has its own dedicated questions, and primary-school forms are answered by guardians.').replace('আপনার বিভাগের মাধ্যমে ব্যক্তিগত ড্যাশবোর্ড ও মূল্যায়ন শুরু করুন।','নিজের শিক্ষাস্তর বেছে নিন। প্রাথমিক বিভাগের প্রশ্নের উত্তর অভিভাবকেরা দেবেন।');};
const v4DashboardBase=v3Dashboard;
v3Dashboard=function(){return v4DashboardBase().replace('MIND-SAGE V3','MIND-SAGE V4');};
const v4AfterNavBase=v3AfterNavigate;
v3AfterNavigate=function(page){v4AfterNavBase(page);document.title='Mind-sage V4 | '+(navs.find(x=>x[0]===page)?.[2]||page);const sidebar=document.querySelector('.brand small');if(sidebar)sidebar.textContent='YOUR WELLBEING JOURNEY · V4';};

// Refresh the initial route after all V4 upgrades are installed.
if(!state.level)state.profileReady=false;
if(!state.guardianConfirmed)state.guardianConfirmed=false;
navigation();
