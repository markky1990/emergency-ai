// Emergency cards. Each guide is checked against published sources: see verifications.js.
// Editing a guide's text makes it show as "changed" until it is re-checked and stamped (node tools/stamp.js).
(function (root) {
  const CARDS = [
    {
      "id": "water-boil",
      "title": "Boil water to make it safe to drink",
      "category": "Water",
      "keywords": [
        "boil water",
        "purify water",
        "make water safe",
        "drink water",
        "how long boil",
        "sterilize water",
        "disinfect water",
        "clean water"
      ],
      "steps": [
        "If the water is cloudy, let it settle, then pour it through a clean cloth or coffee filter.",
        "Bring the water to a full, rolling boil. Big bubbles, not just small ones at the edge.",
        "Keep it at a rolling boil for 1 minute.",
        "If you are higher than 2,000 metres (6,500 feet), boil for 3 minutes.",
        "Let it cool by itself. Store it in a clean, covered container."
      ],
      "warning": "Boiling kills germs. It does not remove chemicals or fuel. If the water smells of chemicals or fuel, do not drink it.",
      "source": "CDC (boil-water guidance)"
    },
    {
      "id": "water-bleach",
      "title": "Treat water with household bleach",
      "category": "Water",
      "keywords": [
        "bleach water",
        "chlorine water",
        "water treatment",
        "no fire to boil",
        "purify water bleach",
        "disinfect water bleach",
        "water purification tablets"
      ],
      "steps": [
        "Use plain household bleach with 5 to 9 percent chlorine. No scent, no added cleaners.",
        "Filter cloudy water through a clean cloth first.",
        "Clear water: add 2 drops of bleach per litre (8 drops per 4 litres or 1 gallon).",
        "Cloudy water: double it. 4 drops per litre.",
        "Stir, then wait 30 minutes before drinking.",
        "The water should smell slightly of chlorine. If it does not, treat it again or boil it instead."
      ],
      "warning": "Bleach does not work well against parasites such as Cryptosporidium. Boiling is best. Do not use old bleach, scented bleach, or bleach with added cleaners. Water purification tablets also work. Follow the packet.",
      "source": "CDC (emergency water disinfection)"
    },
    {
      "id": "water-amount",
      "title": "How much water do I need each day",
      "category": "Water",
      "keywords": [
        "how much water",
        "water per day",
        "daily water",
        "water supply",
        "how long without water",
        "dehydration"
      ],
      "steps": [
        "Plan for at least 3 litres per person per day for drinking. For cooking and washing too, aim for about 10 litres per person per day if you can.",
        "Store at least 3 days of water. More is better.",
        "Children, nursing mothers, sick people, and anyone in hot weather need more.",
        "A person can survive only about 3 days without water, so find a water source early.",
        "In an emergency, other sources are the hot water tank, melted ice, and the toilet tank (not the bowl). Treat all of them first."
      ],
      "source": "Queensland Government / council emergency kit guidance"
    },
    {
      "id": "cpr-adult",
      "title": "Adult not breathing: CPR (chest pushes and breaths)",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "cpr",
        "not breathing",
        "no pulse",
        "heart stopped",
        "cardiac arrest",
        "unresponsive",
        "collapsed",
        "unconscious",
        "stopped breathing"
      ],
      "steps": [
        "Shout for help. Call 000 if you can, or ask someone else to. Put the phone on speaker.",
        "Lay the person on their back on a firm surface.",
        "Put the heel of one hand on the lower half of the breastbone, in the middle of the chest. Put your other hand on top.",
        "Push hard and fast: at least 5 centimetres deep (about one third of the chest), 100 to 120 pushes a minute. Let the chest come back up fully each time.",
        "If you are trained and willing, give 2 breaths after every 30 pushes. If not, keep pushing without stopping. Any CPR is better than none.",
        "If an AED (a machine that can restart the heart) is available, switch it on and follow its voice instructions.",
        "Do not stop until help arrives, the person starts to move or breathe normally, or you cannot continue."
      ],
      "warning": "Do this only if the person is not responding and not breathing normally. Gasping is not normal breathing.",
      "source": "Australian Resuscitation Council / St John Ambulance Australia"
    },
    {
      "id": "bleeding-severe",
      "title": "Severe bleeding",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "bleeding",
        "heavy bleeding",
        "blood",
        "cut",
        "wound",
        "stab",
        "gunshot",
        "tourniquet",
        "bleed out",
        "stop bleeding"
      ],
      "steps": [
        "Call 000. Press firmly and continuously on the wound with your hands, using a clean cloth or clothing if you have it.",
        "Do not lift the cloth to check. If blood soaks through, add more cloth on top and keep pressing.",
        "If you have a dressing or bandage, put a firm pad over the wound and bandage it tightly. Keep pressing on top.",
        "A tourniquet (a tight band that stops the blood flow) is only for bleeding on an arm or leg that is life threatening and that firm pressure has not stopped. A purpose-made tourniquet is best.",
        "Place it 5 to 8 centimetres (about 3 fingers wide) above the bleeding, directly on the skin, never over a joint or the wound. Tighten until the bleeding stops.",
        "Write down the time you applied it. Do not loosen or remove it. Keep the person still and warm until the ambulance arrives."
      ],
      "source": "St John Ambulance Australia / Australian Resuscitation Council"
    },
    {
      "id": "choking-adult",
      "title": "Adult choking",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "choking",
        "choke",
        "something stuck in throat",
        "can't breathe",
        "cannot speak",
        "heimlich",
        "food stuck"
      ],
      "steps": [
        "Ask: are you choking? If they can still cough or speak, encourage them to keep coughing.",
        "If they cannot speak, cough, or breathe: call 000, or ask someone else to.",
        "Lean them forward. Give up to 5 firm back blows between the shoulder blades with the heel of your hand. Check after each blow to see if the object has come out.",
        "If that does not work, give up to 5 chest pushes. Place your hand on the lower half of the breastbone and push sharply. Make them slower and harder than CPR pushes.",
        "Keep alternating back blows and chest pushes until the object comes out or help arrives.",
        "If they stop responding, lower them to the ground and start CPR."
      ],
      "source": "Healthdirect / St John Ambulance Australia / Australian Red Cross"
    },
    {
      "id": "burns",
      "title": "Burns",
      "category": "First aid",
      "keywords": [
        "burn",
        "burns",
        "scald",
        "burned",
        "fire injury",
        "hot water burn"
      ],
      "steps": [
        "Move away from the heat source.",
        "Cool the burn under cool running water for at least 20 minutes, as soon as possible. Cooling still helps for up to 3 hours after the burn.",
        "Take off rings, watches, and loose clothing near the burn before it swells. Do not pull off anything stuck to the skin.",
        "Cover loosely with a clean, non-fluffy covering. Plastic cling film works well.",
        "Chemical burns: rinse under running water for at least 20 minutes, and keep going even after the chemical seems gone.",
        "Do not use ice, butter, oils, toothpaste, or creams. Do not burst blisters."
      ],
      "warning": "Get medical help if the burn is larger than the person's palm, is deep, or is on the face, hands, feet, or genitals. Call 000 if it is severe or their breathing may be affected.",
      "source": "Healthdirect / St John Ambulance Australia / Better Health Channel"
    },
    {
      "id": "hypothermia",
      "title": "Dangerously cold: hypothermia (body gets too cold)",
      "category": "Weather",
      "keywords": [
        "hypothermia",
        "cold",
        "freezing",
        "shivering",
        "too cold",
        "frostbite",
        "warm up",
        "winter"
      ],
      "steps": [
        "Signs: shivering, slurred speech, clumsiness, confusion, drowsiness.",
        "Get the person out of the wind and rain. Handle them gently.",
        "Take off wet clothes. Replace with dry ones. Cover their head, and wrap in blankets, coats, or sleeping bags.",
        "Insulate them from the cold ground with a mat, branches, or bags.",
        "Warm them slowly with blankets and warm clothing. Give warm drinks if they are awake and can swallow. No alcohol.",
        "Do not use direct heat or a hot bath. Do not rub their arms or legs.",
        "If they are confused, drowsy, or unconscious, call 000. Start CPR if they are not breathing normally."
      ],
      "warning": "Rough handling can cause cardiac arrest in severe hypothermia. Move the person gently.",
      "source": "Better Health Channel / Healthdirect"
    },
    {
      "id": "heat-stroke",
      "title": "Dangerously hot: heat stroke (body gets too hot)",
      "category": "Weather",
      "urgent": true,
      "keywords": [
        "heat stroke",
        "heatstroke",
        "too hot",
        "overheated",
        "heat exhaustion",
        "hot weather",
        "heatwave"
      ],
      "steps": [
        "Signs: hot, dry or very sweaty skin, confusion, fainting, a very high body temperature.",
        "Call 000 right away.",
        "Move the person into shade or a cool place. Loosen tight clothing.",
        "Cool them fast: wet their skin with cool water, fan them, and put wrapped ice packs or wet cloths on the neck, armpits, and groin. A bath of cold water is the most effective if you have one.",
        "If they are awake and can swallow, give small sips of cool water. Otherwise give nothing to drink.",
        "If they start to shiver, ease off the cooling. If they become unconscious, roll them onto their side and check their breathing."
      ],
      "warning": "Heat stroke can kill. Confusion or fainting means get medical help as soon as possible.",
      "source": "Red Cross / St John Ambulance Australia / Better Health Channel"
    },
    {
      "id": "co-poisoning",
      "title": "Carbon monoxide (invisible poison gas): generators, stoves, and barbecues",
      "category": "Home safety",
      "urgent": true,
      "keywords": [
        "carbon monoxide",
        "generator",
        "gas poisoning",
        "charcoal indoors",
        "barbecue indoors",
        "headache dizzy",
        "fumes",
        "gas stove heating"
      ],
      "steps": [
        "Never run a generator, barbecue, camping stove, or charcoal grill inside a house, garage, tent, or near windows.",
        "Signs: headache, dizziness, nausea, confusion, feeling sleepy.",
        "If you suspect it: get everyone into fresh air immediately.",
        "Do not go back inside until it is safe. Call emergency services if you can.",
        "Run generators outside, at least 6 metres (20 feet) from windows, doors, and vents, with the exhaust (where the fumes come out) pointing away. Use a battery-powered carbon monoxide alarm."
      ],
      "source": "CDC (US guidance). Check your state energy safety authority for local rules."
    },
    {
      "id": "food-power-cut",
      "title": "Food safety in a power cut",
      "category": "Shelter and food",
      "keywords": [
        "fridge",
        "freezer",
        "food safe",
        "power cut",
        "power outage",
        "blackout",
        "spoiled food",
        "can i eat",
        "food spoil"
      ],
      "steps": [
        "Keep fridge and freezer doors closed as much as possible.",
        "A closed fridge keeps food safe for about 4 hours.",
        "A full freezer stays frozen about 48 hours. A half-full freezer, about 24 hours.",
        "Eat fresh food and leftovers from the fridge first, then freezer food, then tinned and dry food.",
        "If food that spoils (meat, fish, dairy, cooked leftovers) has been above 4 degrees Celsius (40 F) for more than 2 hours, throw it away.",
        "Never taste food to check if it is safe. When in doubt, throw it out."
      ],
      "source": "CDC / USDA Food Safety and Inspection Service"
    },
    {
      "id": "rule-of-threes",
      "title": "Survival priorities: the rule of threes",
      "category": "Basics",
      "keywords": [
        "rule of threes",
        "priorities",
        "survival priorities",
        "what first",
        "where do i start",
        "survive",
        "apocalypse",
        "first steps"
      ],
      "steps": [
        "This is a rough rule of thumb, not an exact rule. Children, older people, and sick people have less time.",
        "About 3 minutes without air. Fix breathing and heavy bleeding first.",
        "About 3 hours in harsh weather without shelter. Get out of the wind, rain, cold, or heat.",
        "About 3 days without water. Find and treat safe drinking water.",
        "About 3 weeks without food. Food comes after the others.",
        "Stay calm, stay put if it is safe, and avoid risks. An injury now is much harder to fix later."
      ],
      "source": "US Air Force Arctic Survival School fact sheet (rule of thumb)"
    },
    {
      "id": "signal-help",
      "title": "How to signal for help",
      "category": "Basics",
      "keywords": [
        "signal for help",
        "rescue",
        "lost",
        "stranded",
        "whistle",
        "get found",
        "sos",
        "distress"
      ],
      "steps": [
        "Three short blasts on a whistle, regularly spaced, is a recognised distress signal. Three of anything (shouts, fires, flashes of light) is also widely used.",
        "Make yourself big and bright. Spread bright clothing or material in an open area.",
        "Use a mirror or any shiny object to flash sunlight toward aircraft or distant people.",
        "Stay in one place if people know you are missing. It is easier to find you.",
        "Write SOS in large letters on open ground, with rocks, sticks, or by trampling snow."
      ],
      "source": "AMSA National Search and Rescue Manual / common guidance"
    },
    {
      "id": "comms-offline",
      "title": "Communicating when phones and internet are down",
      "category": "Staying in touch",
      "keywords": [
        "no signal",
        "phones down",
        "internet down",
        "communicate",
        "radio",
        "contact family",
        "no network",
        "emergency broadcast",
        "news"
      ],
      "steps": [
        "Keep calls short and only for urgent things. Busy networks can block important calls. Avoid sending photos and videos.",
        "Use a battery or wind-up radio. Tune to local ABC radio for emergency news.",
        "Keep power banks charged. Even with battery, the network may be down.",
        "Agree on a meeting point and a contact person outside your area that everyone calls or texts.",
        "Save battery: lower screen brightness, turn on low-power mode, close apps, and keep the phone warm.",
        "Short-range handheld radios can reach others nearby. Only use frequencies you are allowed to."
      ],
      "source": "Queensland Fire Department / ABC Emergency"
    },
    {
      "id": "cyber-ransomware",
      "title": "Computer attack: files locked for ransom, or a hacked computer",
      "category": "Computers and scams",
      "keywords": [
        "ransomware",
        "cyber attack",
        "hacked",
        "malware",
        "virus",
        "files locked",
        "ransom note",
        "computer infected",
        "encrypted files"
      ],
      "steps": [
        "Disconnect the device from everything: unplug network cables and USB devices, and turn off Wi-Fi, Bluetooth, and mobile data.",
        "Do not respond to the threats, and do not pay the ransom. There is no guarantee you will get your files back.",
        "Take photos of any ransom message, payment demand, and payment details, using another clean device.",
        "Do not use the infected device. Do not plug backup drives into it.",
        "Assume any accounts used on that device may be compromised. Change passwords from a different, clean device.",
        "Report it to ReportCyber at cyber.gov.au, and tell your IT person if you have one.",
        "Remove the harmful software (malware), or reset the device, before reconnecting it. Restore from offline backups."
      ],
      "source": "Australian Cyber Security Centre (cyber.gov.au)"
    },
    {
      "id": "cyber-account",
      "title": "Hacked account: someone else is using my account",
      "category": "Computers and scams",
      "keywords": [
        "account hacked",
        "password stolen",
        "account compromised",
        "phishing",
        "clicked link",
        "stolen identity",
        "bank account hacked",
        "scam",
        "someone logged in"
      ],
      "steps": [
        "Use a different, clean device to change the password right away.",
        "Turn on two-step sign-in (a code as well as your password).",
        "Sign out of all other sessions or devices in the account settings.",
        "If you used that password anywhere else, change it there too.",
        "If money or cards are involved, call your bank straight away and ask to freeze the account or card.",
        "Check for changed recovery phone numbers or email addresses, and for new forwarding rules in your email.",
        "Scan the device you used for harmful software (malware) and for software that lets others control it. Scammers can leave a back door.",
        "Report it at cyber.gov.au (ReportCyber). IDCARE gives free help on 1800 595 160."
      ],
      "source": "Scamwatch / cyber.gov.au / IDCARE"
    }
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = CARDS;
  else root.CARDS = CARDS;
})(typeof self !== "undefined" ? self : this);
