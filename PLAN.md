# How we stand apart from other emergency apps

Audience: everyday Australians (households preparing for floods, fires, outages, and other emergencies).
Platform: phone web app only for now. Device idea is parked.
Focus: (1) trust, (2) voice-first and hands-free, (3) talking without a phone network.

## What others already do
- Red Cross First Aid apps: offline first aid with steps and a call button. First aid only.
- Kiwix / WikiMed: offline encyclopedia. Not emergency steps. Not voice.
- Survival apps (OFFGRID, HAVEN, Prepper AI): lots of content, some with offline AI. Claims are unproven and unchecked.
- Meshtastic: radio devices that pass text messages with no phone network. Needs extra hardware.

## Our three differences

### 1. Trust: every answer is checked and shows where it came from
Why: in an emergency, a wrong answer can hurt someone. Most survival apps do not say who checked their content.
What we build:
- Each guide shows: source, who reviewed it, review date, and a version number.
- Unreviewed guides show a clear "Draft, not yet checked" label, so we can ship before every guide is checked.
- A review list inside the project: guide, source link, reviewer, date, status.
- Get the highest-risk guides checked first by a qualified person (paramedic, nurse, or first aid trainer): CPR, bleeding, anaphylaxis, snake bite, bushfire, poisoning.
- A fixed test list of questions with the correct guide, run every time we change content or search.
- No AI-made answers. The app can only show checked guides.
- Content version and "last updated" date, with updates when online.
Done when: every urgent guide is reviewed and shows reviewer and date.

### 2. Voice-first and hands-free
Why: when you are treating someone, your hands are busy and you are stressed.
What we build:
- Hands-free loop: it reads a step, then listens for "next", "repeat", "back", "stop" without a tap.
- Urgent guides (CPR, bleeding, choking, anaphylaxis) default to voice step by step.
- Limited command list for "next / repeat / stop" so it is far more reliable than free speech.
- Test with Australian accents, background noise, and a phone on a table or in a pocket.
- Check the phone has an offline voice installed for speaking. Some phones need a one-time download.
- Battery: microphone is on only after a tap or during a guide, never always listening.
Done when: someone can do CPR using voice only, with no screen touch, on a real phone in airplane mode.

### 3. Talking without a phone network
Why: in a big outage, phones may have no signal. Nobody else in this list pairs this with checked guides.
Honest limits: phones cannot do long-range radio alone. Options, from easiest to hardest:
- A. Link to a Meshtastic radio (about $30 to $60) over Bluetooth, from the app. I believe Chrome on Android can do this, but I have not tested it.
- B. Phone-to-phone messages using Bluetooth or Wi-Fi nearby. Needs a real Android app, not a web app. Short range.
- C. Do nothing, and include a guide on how to use Meshtastic and radios.
Decision needed after the first two are done.

## Order of work
1. Host the app at a secure web address so we can test on a real phone. (needed for mic and offline)
2. Trust features: review labels, source and date, draft badge, review list.
3. Hands-free voice loop, then real phone and accent testing.
4. Get urgent guides checked by a qualified person.
5. Decide on mesh messaging (A, B or C).
6. Revisit the device idea once the phone app is proven.

## Risks to watch
- Wrong or outdated guidance. Mitigation: review, draft labels, dates.
- Voice mistakes in noisy places. Mitigation: limited commands, typed fallback, big buttons.
- Phone offline voice not installed. Mitigation: test and show a setup check.
- Legal exposure. Mitigation: clear "guidance only" message, call 000 prompts, get advice before publishing widely.
