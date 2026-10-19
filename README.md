# SSW2 REVIEWER

Unofficial study app (PWA) for **The Specified Skills (ii) Evaluation Exam for Construction Industry**
（建設分野特定技能2号評価試験）.

- Furigana in 3 levels: all → hard words only → none (same as the real exam)
- Explanations in Taglish and English, with a tap-to-show translation of each question
- Works offline after the first visit and can be added to the home screen

This app is not affiliated with the Japan Association for Construction Human Resources (JAC).
All questions are original and are not copied from official sample questions.

## Files

| File | Role |
| --- | --- |
| `index.html` | The whole app (questions, translations and UI in one file) |
| `manifest.webmanifest` | App name and icons for "Add to Home Screen" |
| `sw.js` | Offline cache |
| `icons/` | App icons |

Deploy: static site, no build step. Import the repo in Vercel and deploy with default settings.

Built by Onari Creations.
