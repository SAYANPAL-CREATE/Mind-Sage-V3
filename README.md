# Mind-sage Version 4

**Student wellbeing experiences tailored by educational stage, with a guardian-led assessment for primary-school children.**

## NEW: Watch & Learn video library (curated final V4)

A complete dedicated `Watch & Learn` page was added at **`#/videos`**. You can reach it from the navigation sidebar, a new homepage feature panel, the student dashboard, and Bro-minD Plus.

- 11 specific, checked YouTube video links from Gaur Gopal Das, Simerjeet Singh, Raj Shamani (only mental-health-relevant expert interviews), Healthy Gamer / Dr. K, and NIMHANS child/family education.
- Six channels are listed: Gaur Gopal Das, Simerjeet Singh, Raj Shamani, SAMVAD–NIMHANS Child Protection, Healthy Gamer / Dr. K, and MindVeda by Mahua.
- Interactive audience filters: Everyone, Parent/Guardian, High School, UG, PG, and Ph.D.; plus topic filters and search. When logged into a stage in the local session, that stage is selected by default. Primary-school content is written **for guardians**, not as child-directed open YouTube recommendations.
- Distinguishes reflective/motivational content from mental-health professional interviews/education. Videos are linked to the original creators. No video assets are copied.
- **No auto-playing video, remote thumbnail loads, analytics, tracking scripts, or iframes.** A YouTube page opens only when the user clicks the external link. The website itself remains locally cacheable offline; external YouTube content requires internet.
- Available in English and Bengali.
- Existing **18 Swamiji Vani**, **200 core stage-specific questions**, guardian-led forms, PDF reports, mood diary and V3 interactive modules are preserved.

### Updating an existing V4 repository

Upload or replace all files from the final ZIP in the GitHub repository root; do not leave older versions of `app.js`, `index.html`, `sw.js` or the new `video-library.*` out. If the old offline version persists after publishing, close and reopen the installed web app, or clear its site cache and reload; the service-worker cache name has changed to force an update.

### Suggested acceptance check

1. Open `#/videos` from the sidebar.
2. Select **Parents / guardians**. The list should show family-focused and calming content; Raj Shamani's adult relationship talks should not be in this selection.
3. Select **High school** + **Exams & study**, then use the search box to find Simerjeet's exam videos.
4. Select **UG** + **Relationships & support** and find the two Raj Shamani expert conversations.
5. Click any `Watch on YouTube` button and verify the video opens in a new tab.
6. Use the Bengali switch and check translated page text.
7. Return to Vani and verify all 18 quotes are still present.
8. Check mobile responsiveness and the primary guardian pathway again.

## Main changes from V3

- Retains the V3 interface, Emotion Landscape, Mind Garden, Life Journey, private journal, wellbeing plans, insights, Mind Map, Bro-minD, the rule-based companion and support directory.
- Uses the supplied peaceful sunset/student image in the home hero, with a newly illustrated family photography panel beside the learning-stage selector. The Vivekananda illustration in the Vani section is retained.
- Offers **five separate stage-specific banks**: primary, high school, UG, PG, Ph.D. Each includes **four categories x 10 distinct core questions**, totalling 200 English and 200 matching Bengali question texts.
- The **primary-school form is for parents or guardians only**. It asks for relationship and confirmation and uses guardian-observable behaviours. The responses are *not* a child's self-report.
- Adapts some question wording further for younger primary-school pupils (ages <=8) and older high-school pupils (ages >=15).
- Reports and PDF exports identify the stage and explicitly label primary-school results as guardian observations. Primary reports give guardian-directed suggestions.
- Preserves the eight pre-existing Bengali Vivekananda sayings and adds ten sourced selections, for **18 quotations**. New excerpts are linked to official Belur Math source pages; see `SOURCES.md`.
- Keeps answers private by default. Under-18 diary entries stay in memory for the session; adults may explicitly save information on this device. V4 uses separate browser storage keys from V3; it does not silently import V3 data.
- PWA assets, cache version, manifest and relative image paths updated for GitHub Pages.

## Publish on GitHub Pages (recommended: separate V4 repository)

1. Unzip `Mind-sage-Version-4-GitHub-Pages.zip` onto your computer.
2. Create a public repository named `MIND-SageV4` under your GitHub account.
3. Upload all website files **directly to the repository's top-level/root**, including `index.html`, all `.js` and `.css` files, the `.webp` images, icon files, `manifest.webmanifest` and `sw.js`. **Do not upload the ZIP instead of extracting it.**
4. Open GitHub repository **Settings > Pages > Build and deployment**. Choose **Deploy from a branch**, `main`, `/(root)` and **Save**.
5. Your URL will usually be `https://sayanpal-create.github.io/MIND-SageV4/` if you use the suggested repository name.
6. Open the website, test the primary-school guardian flow and Ph.D. flow, and use `Ctrl + Shift + R` to reload after the published deployment updates.

You can also update the existing V3 repository, but creating a separate V4 repo preserves the V3 website while you validate the new questionnaires.

## File structure

```text
index.html
styles.css
v3.css
v4.css
video-library.css
data.js
v4-questions.js
app.js
config.js
v3.js
v4.js
video-library.js
student-calm-sunset.webp
parent-child-reflection.webp
vivekananda-portrait.webp
favicon.svg
manifest.webmanifest
sw.js
icon-192.png
icon-512.png
README.md
SOURCES.md
```

All image references use **relative paths** and all required assets are in the repository root.

## Guided acceptance test

1. Choose **Primary School Student**.
2. Verify that the page identifies the respondent as a **parent or guardian**, and that the relationship selector and guardian confirmation are mandatory.
3. Select the child's birth date and gender, enter a **wrong CAPTCHA** first, and verify that the challenge refreshes.
4. Complete the corrected CAPTCHA and begin one of the four assessments. All ten core questions must be guardian-oriented. The eleventh, adaptive follow-up question remains unscored.
5. Download a report. It should identify **GUARDIAN-OBSERVED - Primary School Student**, not a student self-report.
6. Return home, choose **Ph.D. Scholars** and verify the specific research/supervisor/publication questions, then switch to Bengali and verify translated questions.
7. Open **Bro-minD > Vani** and step through all 18 original and added, source-linked quotes.
8. Check the homepage photograph, the family image, and the Vivekananda illustration at both desktop and mobile widths.
9. Test V3's original Mind Garden, Life Journey, private journal, PWA installation and wellbeing plan features after publishing.

## Clinical/academic interpretation

The questionnaires are originally drafted **wellbeing reflection prompts**, not validated diagnostic scales. A percentage describes the frequency of selected responses, **not a probability of a disorder**. Differences between guardian reports and student self-reports must not be interpreted as differences in clinical severity. The website does **not** decide whether medication is required; it directs such decisions to professionals.

For actual university research, the questions, age coverage, languages, respondent type and referral workflow require psychometric evaluation, ethics approval, appropriate consent/assent and a secure data-governance process. No institutional participant database is collecting responses in this static package.

Primary guardian reports depend on what the caregiver could observe and may miss some internal experiences. A concerning response about self-harm prompts immediate human-support guidance; neither a low score nor a nonobserved item rules out risk.

## Offline and support

The static site is GitHub Pages-compatible without Render. `sw.js` precaches the required site assets when installed from an HTTPS address. Some features such as external source links, externally supplied counselling links and optional secure AI services require internet access.

The local rule-based companion is provided. The **connected AI service** remains an optional external integration that requires a separately hosted, secured server; setting an AI API key in public `config.js` would be insecure. The original V3 optional backend starter is not deployed as part of this static repository.

Public resources displayed in the existing support directory include Tele-MANAS (14416), Child Helpline (1098) and India's emergency service (112). Confirm links and programme details periodically.
