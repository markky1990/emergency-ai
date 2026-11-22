# Emergency Assistant

A phone app for emergencies. It works with no internet and no server once it is saved on your phone.

- Ask by voice or type. It finds the right guide and reads it out, one step at a time if you like.
- 72 guides for first aid, medical emergencies, disasters, water, food, shelter, illness, accidents, and attacks. Written for Australia.
- Every guide shows what it was checked against, with links.
- Hands-free mode: tap once, then say "next", "back", "repeat" or "stop".

**Guidance only. It does not replace professional help. In an emergency, call 000 if you can.**

## How to use it

1. Open the web address on your phone while you have internet.
2. Open Settings and tap "Save it for use with no internet" for the voice you want.
3. Add the app to your home screen. After that it works with no internet.

The microphone only works on a secure web address (one that starts with https).

## What is in this folder

| File or folder | What it is |
|---|---|
| `index.html`, `style.css`, `app.js` | The app screens |
| `cards.js`, `cards-more.js` | The guides |
| `verifications-source.json`, `verifications.js` | What each guide was checked against |
| `search.js` | Finds the right guide for a question |
| `voice.js`, `voice/` | Voice listening that works with no internet |
| `sw.js`, `manifest.json` | Lets the app work with no internet and be added to the home screen |
| `tools/` | Checks and helpers for people changing the guides |
| `PLAN.md`, `REVIEW-PACK.md` | Plans and a review document for experts |

## Changing the guides

Run the standing checks after any change:

```
node tools/test.js
```

If you edit a guide that was checked, it shows as "changed since checked" until it is checked again. See `tools/stamp.js`.

## Third-party files in `voice/`

- Vosk speech recognition (`vosk-browser`) and the small English model `vosk-model-small-en-us-0.15`, from Alpha Cephei.
- Whisper tiny English model from OpenAI (converted by Xenova) and Transformers.js from Hugging Face.

Check their licences before reusing them in another project.
