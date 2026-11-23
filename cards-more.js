// More emergency cards (Australian focus). See verifications.js for what each was checked against.
(function (root) {
  const MORE = [
    {
      "id": "emergency-numbers-au",
      "title": "Emergency phone numbers (Australia)",
      "category": "Basics",
      "urgent": true,
      "keywords": [
        "emergency number",
        "triple zero",
        "000",
        "112",
        "call ambulance",
        "call police",
        "call fire",
        "who to call",
        "poisons",
        "lifeline",
        "ses",
        "phone numbers"
      ],
      "steps": [
        "Life in danger, serious injury, fire, or crime in progress: call 000 (triple zero) for police, fire, or ambulance.",
        "You can also dial 112 from a mobile phone. It connects to the same Triple Zero service. It does not work from a landline.",
        "If there is no mobile coverage from any provider, no number will work. Move to higher ground or an open area and try again.",
        "Deaf, hard of hearing, or with a speech impairment: you cannot send a text message to 000. Use the National Relay Service. For emergency calls on a text phone or similar device, call 106.",
        "Poisons Information Centre: 13 11 26 (24 hours).",
        "Police Assistance Line (not urgent): 131 444.",
        "State Emergency Service (floods, storms, tsunami): 132 500.",
        "Lifeline (crisis support, 24 hours): 13 11 14.",
        "Healthdirect nurse advice: 1800 022 222.",
        "National Security Hotline: 1800 123 400."
      ],
      "warning": "Call 000 first for any emergency. Keep trying if it does not connect.",
      "source": "Triple Zero Australia / Healthdirect / state emergency services"
    },
    {
      "id": "go-bag",
      "title": "Emergency kit checklist",
      "category": "Basics",
      "keywords": [
        "emergency kit",
        "go bag",
        "bug out bag",
        "prepper",
        "what to pack",
        "checklist",
        "survival kit",
        "supplies",
        "prepare",
        "stockpile"
      ],
      "steps": [
        "Water: at least 3 litres per person per day, for at least 3 days. More if you can.",
        "Food: tinned or dry food that needs no cooking, for at least 3 days, plus a tin opener.",
        "Light and power: torch, spare batteries, battery or wind-up radio, phone charger and a power bank.",
        "First aid kit and a first aid book. At least a week of any prescription medicines and a list of what you take.",
        "Warm clothing, sturdy shoes, blanket or sleeping bag, rain jacket.",
        "Whistle, waterproof matches or lighter, a knife or multi-tool, cable ties, duct tape.",
        "Copies of ID, insurance, and contact numbers in a waterproof bag. Some cash in small notes.",
        "Masks, soap, hand sanitiser, toilet paper, garbage bags.",
        "Pets: food, water, lead, and any medicine. Babies: formula, nappies, wipes."
      ],
      "source": "Australian Red Cross RediPlan / Emergency Management Australia"
    },
    {
      "id": "evacuate-home",
      "title": "Leaving home in an emergency",
      "category": "Basics",
      "keywords": [
        "evacuate",
        "evacuation",
        "leave home",
        "leave now",
        "evacuation order",
        "get out",
        "flee",
        "leave early",
        "relocate"
      ],
      "steps": [
        "Leave early when told to. Leaving late is the most dangerous option. Roads can get blocked.",
        "Take your emergency kit, medicines, phone and charger, and important papers such as ID and insurance.",
        "If you have time, turn off the power, water, and gas where you can. Lock up.",
        "Tell someone where you are going.",
        "Use the route the authorities say. Do not take shortcuts through floodwater, smoke, or closed roads.",
        "Staying with family or friends outside the danger area is the best choice. Emergency shelters (evacuation centres) are a last resort. They give a place to stay, food, and water, but not medicines, so bring your own.",
        "Pets are usually not allowed in emergency shelters, except registered assistance animals. Plan for your pets early, and pack food, water, and a lead."
      ],
      "source": "NSW SES / Brisbane City Council / Fraser Coast Regional Council / Queensland Government"
    },
    {
      "id": "navigation-south",
      "title": "Finding which way is south without a compass",
      "category": "Basics",
      "keywords": [
        "navigation",
        "find direction",
        "which way is north",
        "no compass",
        "lost",
        "southern cross",
        "find south",
        "sun direction",
        "map reading",
        "gps down"
      ],
      "steps": [
        "The sun rises roughly in the east and sets roughly in the west.",
        "In the Southern Hemisphere, the midday sun is in the north.",
        "At night, find the Southern Cross. Extend its long axis about 4 to 4.5 times its length. As a cross-check, find the middle of the line between the two Pointer stars and draw a line at right angles from it. Where the two lines cross is very near the south pole. Drop straight down from that point to the horizon to find south.",
        "Follow creeks downhill, they lead to larger rivers and usually to people. Follow roads, power lines, and fences. They lead somewhere.",
        "If you are not sure where you are, and people know you are missing, stay put."
      ],
      "warning": "Moss on trees is not a reliable direction guide. Do not trust it.",
      "source": "EarthSky / Te Ara (NZ) star navigation guides"
    },
    {
      "id": "heart-attack",
      "title": "Heart attack",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "heart attack",
        "chest pain",
        "chest pressure",
        "chest tightness",
        "pain in arm",
        "pain in jaw",
        "angina",
        "heart pain",
        "myocardial"
      ],
      "steps": [
        "Signs: pain, pressure or tightness in the chest. It may spread to the arm, neck, jaw, or back. Sweating, nausea, breathlessness, feeling faint.",
        "Call 000 right away. Do not drive yourself.",
        "Sit the person down, resting, in a comfortable position. Loosen tight clothing.",
        "If the ambulance operator advises it, and they are not allergic to aspirin or told by a doctor to avoid it, give a 300 mg aspirin tablet to chew slowly.",
        "Stay with them. Reassure them. Get an AED (a machine that can restart the heart) if one is near.",
        "If they stop responding and stop breathing normally, start CPR."
      ],
      "warning": "Women, older people, and people with diabetes may have milder or different signs, such as breathlessness, nausea, or back pain.",
      "source": "Healthdirect / St John Ambulance Australia / Heart Foundation"
    },
    {
      "id": "stroke",
      "title": "Stroke: act FAST",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "stroke",
        "face drooping",
        "slurred speech",
        "arm weakness",
        "can't speak",
        "mini stroke",
        "tia",
        "sudden weakness",
        "fast test"
      ],
      "steps": [
        "F is for Face. Ask them to smile. Is one side drooping?",
        "A is for Arms. Ask them to lift both arms. Does one drift down?",
        "S is for Speech. Is it slurred, strange, or are they unable to speak?",
        "T is for Time. If you see any of these, call 000 right away.",
        "Note the time when the signs started. Tell the ambulance.",
        "Keep the person calm, resting, and lying down or sitting. Do not give food, drink, or medicines.",
        "If they become drowsy or not responding, place them on their side and check their breathing."
      ],
      "source": "Stroke Foundation Australia"
    },
    {
      "id": "anaphylaxis",
      "title": "Severe allergic reaction (anaphylaxis)",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "anaphylaxis",
        "allergic reaction",
        "epipen",
        "adrenaline",
        "swollen throat",
        "swollen lips",
        "hives",
        "peanut allergy",
        "bee sting allergy",
        "allergy"
      ],
      "steps": [
        "Signs: swelling of the face, lips, or throat. Difficulty breathing, wheeze, noisy breathing. Hives, vomiting, feeling faint, collapse.",
        "Lay the person flat. Do not let them stand or walk. If they have trouble breathing, let them sit. If they are unconscious, roll them onto their side. If pregnant, lie them on their left side.",
        "Give the adrenaline pen (such as an EpiPen) into the outer middle thigh, through clothing if needed. Follow the instructions on the pen.",
        "Call 000. Say it is a severe allergic reaction (anaphylaxis).",
        "If there is no improvement after 5 minutes, you may give a further dose if you have another pen.",
        "If you are not sure it is a severe allergic reaction, still give the adrenaline. If they stop breathing, start CPR. Adrenaline is still important.",
        "Even if they seem better, they must go to hospital."
      ],
      "source": "ASCIA First Aid Plan for Anaphylaxis",
      "warning": "Do not make a person with a severe allergic reaction stand or walk."
    },
    {
      "id": "asthma",
      "title": "Asthma attack",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "asthma",
        "wheeze",
        "short of breath",
        "can't breathe",
        "puffer",
        "ventolin",
        "inhaler",
        "asthma attack",
        "breathless"
      ],
      "steps": [
        "Sit the person upright. Stay calm. Stay with them.",
        "Give 4 puffs of a blue or grey reliever puffer, one puff at a time, using a spacer if you have one (a tube that fits on the puffer). Take 4 breaths after each puff.",
        "Wait 4 minutes. If they still cannot breathe normally, give 4 more puffs.",
        "If there is still no improvement, call 000. Keep giving 4 puffs every 4 minutes until help arrives.",
        "Call 000 straight away if they are not breathing, suddenly get worse, or are turning blue.",
        "If they have a known allergy and sudden breathing trouble, give their adrenaline pen first."
      ],
      "source": "Asthma Australia"
    },
    {
      "id": "seizure",
      "title": "Seizure or fit",
      "category": "Medical emergency",
      "keywords": [
        "seizure",
        "fit",
        "epilepsy",
        "convulsion",
        "shaking",
        "fitting",
        "collapsed shaking"
      ],
      "steps": [
        "Note the time it started.",
        "Clear the area around them. Cushion their head. Loosen tight clothing around the neck.",
        "Do not hold them down. Do not put anything in their mouth.",
        "When the shaking stops, roll them onto their side. Check they are breathing.",
        "Stay with them until they are fully awake. They may be confused for some time.",
        "Call 000 if it lasts more than 5 minutes, or they do not respond for more than 5 minutes after it ends, or they have another seizure straight away, are injured, have trouble breathing afterwards, or are in water. Also call if it is their first seizure, or they are pregnant or have diabetes."
      ],
      "source": "Epilepsy Action Australia / St John Ambulance Australia"
    },
    {
      "id": "low-blood-sugar",
      "title": "Low blood sugar (diabetes)",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "low blood sugar",
        "hypo",
        "hypoglycemia",
        "diabetic",
        "diabetes",
        "sweaty shaky",
        "insulin",
        "sugar low"
      ],
      "steps": [
        "Signs: shaky, sweaty, hungry, pale, confused, irritable, drowsy.",
        "If they are awake and can swallow, give fast sugar (about 15 grams): 150 to 200 ml of regular soft drink or juice (not diet), or 3 teaspoons of sugar or honey in water, or 6 to 7 jelly beans, or glucose tablets.",
        "Recheck in 15 minutes. If still unwell, give more.",
        "When they feel better, give a snack with slow-release carbohydrate such as a sandwich or biscuits.",
        "If they are unconscious or cannot swallow: do not put anything in the mouth. Place them on their side. Call 000 and say it is a diabetes emergency. Give glucagon (an emergency injection for diabetes) only if it is available and you know how."
      ],
      "source": "Diabetes Australia / Healthdirect"
    },
    {
      "id": "recovery-position",
      "title": "Unconscious but breathing: lie them on their side",
      "category": "Medical emergency",
      "keywords": [
        "recovery position",
        "unconscious",
        "passed out",
        "fainted",
        "faint",
        "not waking",
        "knocked out",
        "drunk unconscious",
        "on their side"
      ],
      "steps": [
        "Check for danger. Shout and squeeze their shoulders. If there is no response, call 000.",
        "Open the airway (the passage you breathe through): tilt the head back gently and lift the chin. Check for normal breathing for up to 10 seconds.",
        "If they are breathing normally, roll them onto their side. Bend the top knee to keep them from rolling onto their face. Rest their top hand under the cheek.",
        "Tilt the head back so the mouth is open and pointing slightly down. Fluid can drain out.",
        "Keep checking breathing. If it stops, roll them onto their back and start CPR.",
        "Keep them warm. Stay with them."
      ],
      "source": "Australian Resuscitation Council"
    },
    {
      "id": "shock",
      "title": "Shock (body shutting down)",
      "category": "Medical emergency",
      "keywords": [
        "shock",
        "pale and clammy",
        "cold and sweaty",
        "fast pulse",
        "weak pulse",
        "blood loss",
        "going into shock"
      ],
      "steps": [
        "Signs: pale, cold, clammy skin. Fast weak pulse. Fast breathing. Weak, dizzy, anxious, or confused.",
        "Call 000.",
        "Treat the cause, such as severe bleeding.",
        "Lay them down and keep them still. Reassure them.",
        "Loosen tight clothing. Keep them warm with a blanket, but do not use direct heat.",
        "Do not give food or drink.",
        "Keep checking their breathing."
      ],
      "source": "St John Ambulance Australia / Healthdirect"
    },
    {
      "id": "trauma-major",
      "title": "Major injury: car crash, fall, head or spine injury",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "major injury",
        "head injury",
        "spinal injury",
        "fall",
        "broken back",
        "broken neck",
        "concussion",
        "trauma",
        "hit head",
        "crushed",
        "serious injury"
      ],
      "steps": [
        "Check for danger to yourself first. Only move the person if they are in immediate danger.",
        "Call 000.",
        "Control any heavy bleeding first. See the severe bleeding guide.",
        "If you suspect a head, neck, or spine injury, keep them still. Support the head and neck in the position found. Do not let them move.",
        "If they are unconscious and not breathing normally, start CPR. Breathing is more important than protecting the spine.",
        "Signs of a serious head injury: drowsiness, repeated vomiting, confusion, seizure, clear fluid from nose or ears, one pupil bigger than the other.",
        "Keep them warm. Do not give food or drink. Do not take off a motorcycle helmet unless it is the only way to keep their breathing passage open or help them breathe."
      ],
      "source": "St John Ambulance Australia"
    },
    {
      "id": "cpr-child-baby",
      "title": "CPR for a child or baby (chest pushes and breaths)",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "child cpr",
        "baby cpr",
        "infant cpr",
        "baby not breathing",
        "child not breathing",
        "toddler",
        "kid collapsed",
        "infant"
      ],
      "steps": [
        "Shout for help. Call 000 on speaker so you can keep both hands free.",
        "Lay them on a firm flat surface.",
        "Child (1 year and over): push on the lower half of the breastbone with the heel of one hand (or two hands for a bigger child), about one third of the chest depth, around 5 centimetres.",
        "Baby (under 1 year): push with two fingers on the lower half of the breastbone, about one third of the chest depth, around 4 centimetres.",
        "Push 100 to 120 times a minute. After every 30 pushes, give 2 gentle breaths if you can. For a baby, cover mouth and nose with your mouth.",
        "Use an AED if you have one, with child pads if available.",
        "Do not stop until help arrives."
      ],
      "source": "Australian Resuscitation Council / St John Ambulance Australia / Healthdirect"
    },
    {
      "id": "choking-baby",
      "title": "Baby or small child choking",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "baby choking",
        "infant choking",
        "child choking",
        "toddler choking",
        "baby can't breathe",
        "baby gagging",
        "baby chokes"
      ],
      "steps": [
        "If the baby cannot cry, cough, or breathe, call 000.",
        "Lay the baby face down along your forearm, with the head lower than the body. Support the head and jaw.",
        "Give up to 5 firm back blows between the shoulder blades with the heel of your hand.",
        "If that fails, turn the baby onto their back, head low. Give up to 5 chest pushes with two fingers on the lower half of the breastbone.",
        "Repeat 5 back blows and 5 chest pushes until the object comes out or the baby stops responding.",
        "If the baby stops responding, start CPR."
      ],
      "warning": "Do not push on a baby's belly.",
      "source": "Australian Resuscitation Council / Red Cross"
    },
    {
      "id": "childbirth-emergency",
      "title": "Emergency childbirth",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "childbirth",
        "giving birth",
        "labour",
        "labor",
        "baby coming",
        "delivering a baby",
        "birth",
        "pregnant",
        "water broke",
        "contractions"
      ],
      "steps": [
        "Call 000 and stay on the line. The operator can talk you through it. Stay calm.",
        "Help the mother get low and comfortable, for example half sitting or on her side. Put towels or sheets under her so the baby has a soft landing.",
        "Wash your hands if you can. Do not pull the baby. Let it come out by itself and catch it gently with a clean towel.",
        "Once born, dry the baby and keep it warm. Put the baby on the mother's chest, skin to skin, and cover both with a warm towel or blanket.",
        "Do not cut or tie the cord. Do not pull on it. The placenta can wait until the ambulance arrives.",
        "If the baby is not breathing, follow the operator's instructions and start baby CPR (see the baby CPR guide)."
      ],
      "source": "St John Ambulance NZ / Western Sydney University / The Conversation"
    },
    {
      "id": "fracture-sprain",
      "title": "Broken bone, sprain, or joint out of place",
      "category": "First aid",
      "keywords": [
        "broken bone",
        "fracture",
        "sprain",
        "dislocated",
        "twisted ankle",
        "splint",
        "broken arm",
        "broken leg",
        "swollen limb",
        "can't move"
      ],
      "steps": [
        "Keep the person still. Do not try to straighten the limb.",
        "Support the injured part in the position found. Use a splint, such as a rolled magazine or stick, padded and tied above and below the injury.",
        "If the bone has come through the skin, cover the wound with a clean dressing. Do not push the bone back. Control bleeding with pressure around the bone, not on it.",
        "Put a cold pack, wrapped in cloth, on the injury for 20 minutes.",
        "Check below the injury. Is the skin warm and pink, and can they feel it? If not, loosen the bandage and get help.",
        "Call 000 if it is a leg, hip, back, neck, or head injury, or if blood flow is lost."
      ],
      "source": "St John Ambulance Australia"
    },
    {
      "id": "snake-bite",
      "title": "Snake bite (Australia)",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "snake bite",
        "snakebite",
        "bitten by snake",
        "brown snake",
        "tiger snake",
        "venom",
        "pressure immobilisation",
        "pressure bandage"
      ],
      "steps": [
        "Call 000 right away. Keep the person calm and completely still. Do not let them walk.",
        "Do not wash the bite site. Venom on the skin helps identify the snake.",
        "Put a firm, wide bandage (10 to 15 centimetres) over the bite site straight away.",
        "Then wrap another bandage over the whole limb, starting just above the fingers or toes and going up as far as you can. It should be tight, but should not cause numbness, tingling, or a colour change in the fingers or toes.",
        "Splint the limb to stop it moving. Mark the bite site on the bandage.",
        "Do not cut the bite, suck it, or tie a tight band around the limb. Do not remove the bandage.",
        "Do not try to catch the snake."
      ],
      "source": "Healthdirect / St John Ambulance Australia / Better Health Channel"
    },
    {
      "id": "spider-bite",
      "title": "Spider bite (Australia)",
      "category": "First aid",
      "keywords": [
        "spider bite",
        "redback",
        "funnel web",
        "funnel-web",
        "white tail",
        "bitten by spider",
        "venomous spider"
      ],
      "steps": [
        "Funnel-web or mouse spider: treat like a snake bite. Call 000, do not wash the bite, apply a firm bandage, splint the limb, and keep the person still.",
        "Redback: do not use a firm bandage, because it increases pain. Wash the area with soap and water, then put a cold pack on the bite for 15 minutes.",
        "White-tail and most other spiders: wash the bite, apply a cold pack, and watch for signs of infection.",
        "Call 000 if there is difficulty breathing, severe pain, vomiting, sweating, or the person collapses. Get medical help for a redback bite if there is severe pain or the person feels unwell."
      ],
      "source": "Better Health Channel / St John Ambulance Australia"
    },
    {
      "id": "marine-stings",
      "title": "Jellyfish and marine stings (Australia)",
      "category": "First aid",
      "keywords": [
        "jellyfish",
        "box jellyfish",
        "bluebottle",
        "irukandji",
        "marine sting",
        "sea sting",
        "stung in water",
        "tentacles",
        "stingray",
        "cone shell",
        "blue ringed octopus"
      ],
      "steps": [
        "Get the person out of the water. Call 000 if there is severe pain, trouble breathing, or collapse. Start CPR if they are not breathing.",
        "Box jellyfish or Irukandji (tropical northern waters): pour lots of vinegar over the stings for at least 30 seconds, and call 000. If you are not sure what stung them in northern Australia, treat it as a box jellyfish sting.",
        "After the vinegar, pick off any tentacles. Do not use fresh water. Do not wrap a firm bandage on a box jellyfish sting.",
        "Bluebottle: pick off tentacles and rinse with seawater. Then soak in hot water, as hot as the person can stand without burning (about 45 degrees Celsius), for 20 minutes. If there is no hot water, use a cold pack.",
        "Do not use vinegar on a bluebottle sting.",
        "Blue-ringed octopus: call 000, put on a firm bandage and splint the limb (keep it from moving), and be ready to do CPR."
      ],
      "source": "Healthdirect / St John Ambulance Australia / Better Health Channel"
    },
    {
      "id": "insect-stings",
      "title": "Bee, wasp, and ant stings",
      "category": "First aid",
      "keywords": [
        "bee sting",
        "wasp sting",
        "ant bite",
        "bull ant",
        "insect sting",
        "stung",
        "sting removal"
      ],
      "steps": [
        "Remove a bee sting quickly by scraping it sideways with a fingernail or card. Do not squeeze or pull it, because that can inject more venom.",
        "Wash the area. Put a cold pack, wrapped in cloth, on it.",
        "Watch for 20 minutes for signs of a severe allergic reaction: swelling of the face or throat, difficulty breathing, hives, dizziness.",
        "If there are any of those signs, follow the severe allergic reaction guide and call 000.",
        "A sting in the mouth, throat, or eye, or many stings at once (more than 10 in an adult, more than 5 in a child), needs hospital care. Call 000."
      ],
      "source": "Healthdirect / Better Health Channel / ASCIA"
    },
    {
      "id": "poisoning",
      "title": "Poisoning, chemicals, or overdose",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "poison",
        "poisoning",
        "swallowed",
        "overdose",
        "chemical",
        "bleach swallowed",
        "drank",
        "cleaning product",
        "medication overdose",
        "poisons information"
      ],
      "steps": [
        "If the person is unconscious, having a seizure, or having trouble breathing, call 000.",
        "Otherwise call the Poisons Information Centre on 13 11 26 (24 hours). Tell them what, how much, and when.",
        "Do not make the person vomit. Do not give food or drink unless told to.",
        "If a chemical is on skin: take off clothing that has the chemical on it and rinse the skin under running water for at least 20 minutes.",
        "If a chemical is in the eye: hold the eyelids open and rinse gently under running water for 20 minutes. Do not rub.",
        "Keep the container or label to show the ambulance."
      ],
      "source": "Healthdirect / Poisons Information Centre"
    },
    {
      "id": "electric-shock",
      "title": "Electric shock",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "electric shock",
        "electrocuted",
        "electrocution",
        "power line",
        "downed line",
        "live wire",
        "shocked",
        "powerline",
        "fallen power line"
      ],
      "steps": [
        "Do not touch the person until the power is off. Electricity can pass through them to you.",
        "Switch off the power at the switch or main. If you cannot, use a dry non-metal object, such as a wooden broom handle, to push them clear.",
        "Fallen power lines: stay at least 8 metres (about 2 car lengths) away. Call 000. Do not go near, even to help. Warn others away.",
        "If the person is touching a high-voltage line, do not approach. Wait for the power company or emergency crews to cut the power.",
        "Call 000 for any serious electric shock, or if they passed out or have abnormal breathing or heartbeat.",
        "If they are not responding and not breathing normally, start CPR.",
        "Cool burns under running water for 20 minutes and cover loosely. Even after a mild shock, get a medical check, because it can affect the heart."
      ],
      "source": "Ausgrid / Healthdirect / St John Ambulance Australia"
    },
    {
      "id": "drowning",
      "title": "Drowning",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "drowning",
        "drowned",
        "pulled from water",
        "swimming pool",
        "not breathing water",
        "near drowning",
        "pool rescue"
      ],
      "steps": [
        "Do not put yourself at risk. Reach with a pole, rope, or throw something that floats. Go in only if you are trained and it is safe.",
        "Call 000.",
        "Get them out of the water and lay them flat.",
        "Check breathing. If they are not breathing normally, start CPR with chest pushes and breaths (30 pushes then 2 breaths). Breaths matter in drowning. Trained rescuers may give 2 breaths first.",
        "Do not try to drain water from the lungs.",
        "If they are breathing, roll them onto their side and keep them warm. All near-drowning cases must go to hospital."
      ],
      "source": "Australian Resuscitation Council (ANZCOR 9.3.2) / Royal Life Saving Society Australia"
    },
    {
      "id": "eye-injury",
      "title": "Eye injury or chemical in the eye",
      "category": "First aid",
      "keywords": [
        "eye injury",
        "chemical in eye",
        "something in eye",
        "splash in eye",
        "eye pain",
        "eye burn",
        "cut eye"
      ],
      "steps": [
        "Chemical in the eye: call 000. Tilt the head back with the hurt eye down, and flush the eye with cool water for 20 minutes. Keep the eyelids open.",
        "Protect the other eye so the chemical does not wash into it.",
        "Do not put drops, ointment, or medicine in the eye. Do not rub it.",
        "Small loose speck on the surface of the eye: it may wash out with tears. If not, pull the lower lid down, look up, and gently wipe it away with the corner of a damp cloth. Or flush with clean water.",
        "Object stuck in the eye: do not take it out. Cover the eye with pads without pressing on the eyelid, and go to hospital straight away.",
        "Get medical help for any chemical splash, deep cut, stuck object, or loss of sight."
      ],
      "source": "St John Ambulance Australia / Healthdirect"
    },
    {
      "id": "wound-care",
      "title": "Cleaning a wound and preventing infection",
      "category": "First aid",
      "keywords": [
        "wound care",
        "clean wound",
        "infection",
        "infected wound",
        "dirty cut",
        "pus",
        "tetanus",
        "dressing",
        "small cut",
        "graze"
      ],
      "steps": [
        "Wash your hands first, if you can.",
        "Stop any bleeding with firm pressure.",
        "Rinse the wound with clean running water. Use safe or boiled-and-cooled water. Remove dirt gently.",
        "Cover with a clean, non-sticky dressing. Change it every day or when wet or dirty.",
        "Signs of infection: spreading redness, warmth, swelling, pus, red streaks, or fever. Get medical help.",
        "Get medical help for deep wounds, animal bites, and dirty wounds. You may need a tetanus shot."
      ],
      "source": "Red Cross / Better Health Channel"
    },
    {
      "id": "shelter-build",
      "title": "Making a shelter",
      "category": "Shelter and food",
      "keywords": [
        "shelter",
        "make shelter",
        "build shelter",
        "camp",
        "bivouac",
        "stay warm outside",
        "no tent",
        "sleep outside",
        "lean to"
      ],
      "steps": [
        "If you are lost or stuck, try a short way back along your path. If that does not work, stay where you are. Rescuers can take a long time to reach you, so keep warm and dry.",
        "Get out of the wind. Pick higher, flat ground, not a gully or creek bed that could flood.",
        "Insulate yourself from the ground, because cold ground steals body heat. Sit or lie on your pack, branches, leaves, or bags.",
        "Cover your head. Change out of wet clothes if you can.",
        "A large rubbish bag or a space blanket can work as an emergency shelter.",
        "Do not burn charcoal or run a stove in a closed shelter. See the carbon monoxide guide."
      ],
      "source": "Victoria Police / NSW National Parks / Better Health Channel"
    },
    {
      "id": "fire-safe",
      "title": "Making a fire safely",
      "category": "Shelter and food",
      "keywords": [
        "make fire",
        "light fire",
        "start fire",
        "campfire",
        "fire starting",
        "tinder",
        "kindling",
        "fire for warmth",
        "put out fire"
      ],
      "steps": [
        "Check fire bans first. In Australia, lighting a fire on a Total Fire Ban day is illegal.",
        "Clear a 3 metre circle down to bare soil. Keep it away from trees, tents, and dry grass. Keep water or sand close.",
        "Collect three sizes: tinder (dry grass, bark shavings), kindling (pencil-thin sticks), and fuel (wrist-thick wood).",
        "Make a small pile of tinder with kindling leaned over it. Light the tinder from the windward side. Add bigger sticks slowly.",
        "Never leave a fire alone. Do not use petrol or other fuel to light it.",
        "To put it out: pour on plenty of water (not sand or dirt, because the fire can restart), stir the ashes, and pour on more water. It must be cold to the touch."
      ],
      "source": "Country Fire Authority / Queensland Fire Department / NSW Rural Fire Service"
    },
    {
      "id": "cook-no-power",
      "title": "Cooking and eating without power",
      "category": "Shelter and food",
      "keywords": [
        "cooking without power",
        "camp stove",
        "bbq",
        "cook outside",
        "no electricity cooking",
        "tin food",
        "eating cold",
        "portable stove"
      ],
      "steps": [
        "Use a camping stove or barbecue outdoors only. Never inside a house, garage, tent, or caravan.",
        "Keep stoves on level ground, away from flammable things. Keep children away.",
        "Tinned food can be eaten cold. If the tin is swollen, leaking, or badly dented, do not eat it.",
        "Cook meat, chicken, and eggs thoroughly. Wash your hands before preparing food.",
        "Use the fridge food first, then freezer, then tinned and dry food.",
        "Store spare gas bottles and fuel outdoors, upright and away from heat."
      ],
      "source": "Food Standards Australia New Zealand / Red Cross"
    },
    {
      "id": "food-storage",
      "title": "Storing food for emergencies",
      "category": "Shelter and food",
      "keywords": [
        "food storage",
        "stockpile food",
        "long life food",
        "pantry",
        "rice",
        "tinned food",
        "how much food",
        "emergency food",
        "store food"
      ],
      "steps": [
        "Store food that lasts: rice, pasta, oats, tinned fish, tinned vegetables, beans, long-life milk, peanut butter, dried fruit, biscuits.",
        "Aim for at least 3 days of food. More is better.",
        "Keep it at room temperature, cool and dry, in sealed containers away from pests.",
        "Use the oldest first and replace it. Follow the date on the pack.",
        "Include foods people like, and any special diets, baby food, and pet food.",
        "Plan for what your household will actually eat. Include any special diets, baby food, and pet food."
      ],
      "source": "Queensland Government / Queensland Health / Australian Red Cross"
    },
    {
      "id": "toilet-hygiene",
      "title": "Toilets and staying clean without running water",
      "category": "Shelter and food",
      "keywords": [
        "toilet",
        "no water toilet",
        "sanitation",
        "hygiene",
        "handwashing",
        "latrine",
        "poo",
        "bucket toilet",
        "sewage",
        "wash hands"
      ],
      "steps": [
        "Wash hands with soap and clean water for 20 seconds after the toilet, before eating, and before preparing food. If there is no water, use hand sanitiser (at least 60 percent alcohol).",
        "Emergency toilet at home: use a bucket lined with a strong bag. Add a handful of cat litter, sawdust, or ash after each use. Seal and store the bag outside in a lidded bin.",
        "In the bush, if you must dig: make a hole at least 15 centimetres deep (deeper in sand), at least 100 metres from water and campsites, and cover it afterwards. Pack out toilet paper and sanitary items (pads and tampons). Check local park rules.",
        "Do not flush if the sewer is not working or a flood is nearby.",
        "Keep waste, food, and water well apart."
      ],
      "source": "NSW National Parks / Queensland Parks / WHO"
    },
    {
      "id": "wild-food",
      "title": "Finding food in the wild: be careful",
      "category": "Shelter and food",
      "keywords": [
        "wild food",
        "foraging",
        "eat plants",
        "mushrooms",
        "berries",
        "edible",
        "hunting",
        "fishing",
        "find food",
        "survival food"
      ],
      "steps": [
        "Do not eat any wild mushroom, plant, or berry unless you are 100 percent sure what it is. There is no home test, and cooking, soaking, or peeling does not remove the poison.",
        "You can survive weeks without food but only days without water. Do not take risks for food.",
        "Fish, shellfish, and meat must be cooked well. Do not eat shellfish from water that may be polluted.",
        "Do not eat anything that has made someone sick, anything dead you did not see die, or anything with an unusual smell.",
        "Insects and grubs can be eaten once cooked, but avoid brightly coloured ones.",
        "Rules about fishing, hunting, and protected species still apply in most places.",
        "If you or someone else ate a wild mushroom or plant and you are unsure, call the Poisons Information Centre on 13 11 26 straight away. You may not feel sick for 30 minutes to a day. Call 000 if the person is unwell."
      ],
      "source": "NSW Health / Better Health Channel / Healthdirect"
    },
    {
      "id": "earthquake",
      "title": "Earthquake",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "earthquake",
        "tremor",
        "shaking ground",
        "quake",
        "aftershock",
        "drop cover hold"
      ],
      "steps": [
        "Drop to your hands and knees. Cover your head and neck, ideally under a sturdy table or desk. Hold on until the shaking stops.",
        "Stay where you are until the shaking stops. Do not run outside.",
        "Stay away from windows, glass, mirrors, and heavy things that can fall.",
        "If you are outside, move away from buildings, power lines, and trees.",
        "After the shaking: check yourself and others for injury. Expect aftershocks.",
        "If you smell gas, hear hissing, or see damage, turn off the gas if safe, and leave.",
        "If you are near the coast and the shaking was strong or long, or the sea pulls back, move to high ground at once. See the tsunami guide."
      ],
      "source": "Geoscience Australia / Victoria SES"
    },
    {
      "id": "flood",
      "title": "Flood",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "flood",
        "flooding",
        "floodwater",
        "flash flood",
        "river rising",
        "storm surge",
        "if it's flooded forget it",
        "drive through water"
      ],
      "steps": [
        "Move to higher ground early. Do not wait for water to reach you.",
        "Never walk, swim, ride, or drive through floodwater. It can be deeper than it looks and can hide damaged roads and bridges, debris, and other dangers. If it is flooded, forget it.",
        "Floodwater is dirty. It carries sewage, chemicals, and sharp debris. Keep children and pets out.",
        "If it is safe, switch off power, gas, and water at the mains.",
        "Call 132 500 for State Emergency Service help in a flood or storm. Call 000 if life is in danger.",
        "If trapped, go to the highest safe place in the building and signal for help.",
        "After a flood, do not use electrical items that got wet. Throw away food that touched floodwater."
      ],
      "source": "State Emergency Service (NSW and Victoria)"
    },
    {
      "id": "bushfire",
      "title": "Bushfire",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "bushfire",
        "wildfire",
        "grass fire",
        "fire front",
        "bush fire",
        "embers",
        "fire danger",
        "catastrophic fire",
        "forest fire",
        "fire coming"
      ],
      "steps": [
        "Leaving early is the safest option. Do not wait to see flames. Leave when you get a warning, or before on bad fire danger days.",
        "Listen to local ABC radio, and check your state fire service app or website.",
        "Wear long cotton or wool clothes, sturdy boots, gloves, a hat, and a damp cloth or a P2 mask (a tight-fitting mask that filters smoke) over your nose and mouth.",
        "If you are caught on the road: turn back and drive away from the fire if it is safe. If you cannot, shelter in a solid building if there is one very close. Only if there is nowhere else, stay in your car.",
        "In a car: park clear of bush, trees, and other cars, ideally behind a barrier such as a brick wall, facing the fire. Shut all windows and vents, turn off the air conditioning and the engine, and get down below window level under a dry pure wool blanket. Do not wet the blanket, because it can cause steam burns.",
        "After the fire front passes, hold your hand up to feel the air before you get out of the car.",
        "If you are trapped at home: stay inside a solid building. Move to a room on the side away from the fire, with two exits if possible. Watch for embers and put out small spot fires.",
        "Call 000 if life is in danger."
      ],
      "warning": "The heat given off by a fire can kill, even from a distance. Do not shelter in the open. Staying low, covered up, and shielded from the fire is critical. Fire services differ on the engine: Victoria's CFA says turn it off as the fire front arrives, while Queensland says leave it running with headlights and hazard lights on. Follow your own state fire service.",
      "source": "Country Fire Authority (Vic) / Country Fire Service (SA) / NSW Rural Fire Service"
    },
    {
      "id": "cyclone",
      "title": "Cyclone, hurricane, or severe storm",
      "category": "Disasters",
      "keywords": [
        "cyclone",
        "hurricane",
        "typhoon",
        "severe storm",
        "damaging winds",
        "storm warning",
        "eye of the storm",
        "tornado"
      ],
      "steps": [
        "Before: tidy the yard, secure loose objects, and fill vehicles with fuel. Keep your go-bag ready.",
        "Stay inside. Shelter in the strongest part of the building, such as an inner room or bathroom, away from windows. Pull a mattress over you for protection.",
        "Do not go out in the eye of the cyclone. The calm is short, and the wind will return from the opposite direction.",
        "Listen to a battery radio for warnings and the all-clear.",
        "After: keep away from fallen power lines and floodwater. Do not drink tap water until it is declared safe.",
        "Get out of damaged buildings. Wear sturdy shoes to avoid injury from debris."
      ],
      "source": "Bureau of Meteorology / state emergency services"
    },
    {
      "id": "lightning",
      "title": "Thunderstorm and lightning",
      "category": "Disasters",
      "keywords": [
        "lightning",
        "thunderstorm",
        "thunder",
        "struck by lightning",
        "storm outside",
        "hail",
        "lightning strike"
      ],
      "steps": [
        "If you hear thunder, find shelter urgently inside a building or a hard-topped car.",
        "Stay inside and well clear of windows, doors, and skylights.",
        "Do not use a landline phone. Do not use a mobile phone outdoors during a storm.",
        "Stay sheltered for at least 30 minutes after the last thunder.",
        "If you are caught outside: stay away from open fields, hilltops, water, and isolated trees.",
        "A person struck by lightning does not carry a charge. Call 000 and start CPR if they are not breathing."
      ],
      "source": "Bureau of Meteorology"
    },
    {
      "id": "tsunami",
      "title": "Tsunami",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "tsunami",
        "tidal wave",
        "sea receding",
        "ocean pulled back",
        "coastal evacuation",
        "big wave",
        "water rushing out"
      ],
      "steps": [
        "Natural warning signs: a strong or long earthquake near the coast, the sea suddenly pulling back, or a loud roar from the ocean. Move to high ground or inland at once. You may not get an official warning.",
        "Go on foot if you can. Roads may jam. Go as high and as far inland as you can quickly reach. Follow local signs and maps that show where to go.",
        "Never go to the beach to watch.",
        "A tsunami is a series of waves. The first may not be the biggest. They can keep coming for hours.",
        "Stay away from the coast until the official all-clear.",
        "Call the SES on 132 500 for tsunami help, and 000 if life is in danger."
      ],
      "source": "NSW State Emergency Service"
    },
    {
      "id": "chemical-shelter",
      "title": "Chemical spill, toxic smoke, or gas cloud",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "chemical spill",
        "toxic gas",
        "hazmat",
        "toxic smoke",
        "chemical leak",
        "shelter in place",
        "gas cloud",
        "industrial accident",
        "fumes outside",
        "chemical attack"
      ],
      "steps": [
        "Move away from the spill, smoke, or gas. Do not walk through it. Walk into the wind if you can, so it blows the gas away from you.",
        "Go inside the nearest building. Close and lock all windows and doors. Turn off air conditioners, fans, and heaters that draw in outside air.",
        "Go to an inner room with few or no windows, as high in the building as you can, and ideally with water. Seal gaps with plastic sheeting and tape or wet towels.",
        "Call 000. Listen to local ABC radio for instructions.",
        "If a chemical got on your skin or clothing: take off outer clothes (cut them off rather than pulling over your head), put them in a bag, and wash the skin with lots of soap and water.",
        "A sealed room is meant for a few hours only. Stay until authorities say it is clear, then air out the building."
      ],
      "source": "CDC / FEMA Ready.gov"
    },
    {
      "id": "radiation",
      "title": "Nuclear or radiation emergency",
      "category": "Disasters",
      "urgent": true,
      "keywords": [
        "nuclear",
        "radiation",
        "fallout",
        "dirty bomb",
        "radioactive",
        "nuclear plant",
        "atomic",
        "nuclear attack",
        "radiation leak",
        "iodine"
      ],
      "steps": [
        "Get inside the nearest solid building straight away. Go to a basement or the middle of the building, away from outside walls and the roof.",
        "Stay inside. Close windows and doors. Turn off fans, air conditioners, and heaters that bring in outside air.",
        "Stay tuned. Use a battery radio for official instructions. Stay inside at least 24 hours unless told otherwise.",
        "If you were outside: take off your outer clothes and seal them in a bag. This can remove most radioactive material. Wash your skin and hair with soap and water.",
        "Do not take potassium iodide tablets unless authorities tell you to.",
        "Eat and drink only sealed food and water until told that it is safe."
      ],
      "warning": "Shelter and stay informed is the main protection. Distance and time reduce exposure.",
      "source": "CDC radiation emergency guidance"
    },
    {
      "id": "outbreak-protect",
      "title": "Protecting yourself when an illness is spreading",
      "category": "Illness that spreads",
      "keywords": [
        "outbreak",
        "pandemic",
        "epidemic",
        "virus",
        "infection prevention",
        "covid",
        "flu",
        "mask",
        "social distancing",
        "stop spreading",
        "contagious"
      ],
      "steps": [
        "Wash your hands often with soap and water for 20 seconds. Use alcohol hand rub (at least 60 percent) if no water.",
        "Cough or sneeze into your elbow or a tissue. Bin the tissue and wash your hands.",
        "Stay home if you are sick. Keep away from crowds if you are at higher risk.",
        "Keep your distance from others when you can. Choose outdoor or rooms or spaces with fresh air. Open windows.",
        "A face mask can lower your chance of catching or spreading a respiratory virus. Wear one in crowded places, or if you must go out while sick.",
        "Clean and disinfect surfaces that are touched often.",
        "Do not touch your face with unwashed hands."
      ],
      "source": "Better Health Channel / Healthdirect / CDC"
    },
    {
      "id": "care-for-sick",
      "title": "Caring for a sick person at home",
      "category": "Illness that spreads",
      "keywords": [
        "caring for sick",
        "sick at home",
        "isolate",
        "quarantine",
        "fever",
        "looking after sick",
        "home care",
        "high temperature",
        "isolation"
      ],
      "steps": [
        "Keep the sick person in a separate room with the door closed, and their own bathroom if you can. Only one person should care for them.",
        "The sick person should wear a mask when they leave the room. The carer should wear a mask when close.",
        "Give plenty of fluids and rest.",
        "Do not share cups, plates, towels, or bedding. Wash them in hot water with soap.",
        "Wash your hands with soap and water for 20 seconds, especially after taking off a mask. Clean the things the sick person touches, such as bedside tables and bathroom surfaces.",
        "Call 000 if they find it hard to breathe, have chest pain, or are confused. Tell the operator it may be an infection such as COVID or flu.",
        "For advice, call Healthdirect on 1800 022 222. Babies, older people, pregnant women, and people with other illnesses need a doctor sooner."
      ],
      "source": "Better Health Channel / Queensland Health / Australian Department of Health"
    },
    {
      "id": "dehydration-diarrhoea",
      "title": "Diarrhoea, vomiting, and dehydration (losing too much water)",
      "category": "Illness that spreads",
      "urgent": true,
      "keywords": [
        "diarrhoea",
        "diarrhea",
        "vomiting",
        "dehydration",
        "oral rehydration",
        "gastro",
        "cholera",
        "stomach bug",
        "rehydration",
        "ors",
        "sunken eyes"
      ],
      "steps": [
        "The main danger is losing too much water. Give small, frequent sips of fluid, such as rehydration drink (oral rehydration solution) from a pharmacy. Sachets are best.",
        "If you have no sachets, WHO gives a home mix: 6 level teaspoons of sugar and half a level teaspoon of salt in 1 litre of safe water (boiled and cooled). Measure carefully. Too much sugar or salt is harmful.",
        "Give a sip every few minutes. If the person vomits, wait 10 minutes and start again slowly.",
        "Keep eating normally if they can.",
        "Get medical help for blood in the poo, a high fever, little or no urine, a very dry mouth, dizziness, drowsiness, or confusion, or if the diarrhoea keeps going.",
        "A baby under 6 months with diarrhoea needs to see a doctor right away. Small children, older people, and pregnant women need help sooner.",
        "Wash hands carefully. Keep sick people away from food preparation."
      ],
      "source": "WHO / Healthdirect"
    },
    {
      "id": "disinfect-surfaces",
      "title": "Disinfecting surfaces with bleach",
      "category": "Illness that spreads",
      "keywords": [
        "disinfect",
        "clean surfaces",
        "bleach solution",
        "sanitise",
        "sanitize",
        "mop",
        "clean after flood",
        "kill germs"
      ],
      "steps": [
        "Use plain household bleach with 5 to 6 percent chlorine. Do not use scented or splashless bleach, or bleach with added cleaners. Wear gloves and work in a well-place with fresh air.",
        "Mix 20 millilitres (4 teaspoons) of bleach into 1 litre of cold water. Make a fresh batch each day.",
        "Clean the surface with soap and water first to remove dirt.",
        "Apply the bleach solution and keep the surface wet for at least 1 minute. Follow the product label if it gives a different time. Rinse if the surface touches food or skin.",
        "Never mix bleach with ammonia, vinegar, or other cleaners. It makes poisonous gas.",
        "Keep bleach away from children and from food."
      ],
      "source": "CDC"
    },
    {
      "id": "floodwater-contamination",
      "title": "Dirty floodwater, food, and mud",
      "category": "Illness that spreads",
      "keywords": [
        "floodwater contamination",
        "contaminated",
        "sewage",
        "mud",
        "wet food",
        "after flood food",
        "dirty water",
        "wet house",
        "mould"
      ],
      "steps": [
        "Treat floodwater as dirty. It can carry sewage and chemicals. Avoid contact. Wear boots, gloves, and long sleeves for cleanup.",
        "Cover cuts with waterproof dressings. Wash hands and skin well with soap and clean water after contact. Ask a doctor about tetanus protection for cuts that touched floodwater or soil.",
        "Throw out any food that touched floodwater, including tins unless they can be thoroughly washed and disinfected. Throw out wet soft items, such as mattresses.",
        "Do not use tap water for drinking until authorities say it is safe. Boil water or use bottled water.",
        "Dry the house out well. Mould makes some people sick. Wear a P2 mask when cleaning mould.",
        "Get medical help for fever, rashes, or infected cuts after floodwater contact."
      ],
      "source": "Better Health Channel / Queensland Health"
    },
    {
      "id": "mosquito-bites",
      "title": "Stopping mosquito bites and the illnesses they spread",
      "category": "Illness that spreads",
      "keywords": [
        "mosquito",
        "mozzie",
        "dengue",
        "ross river",
        "malaria",
        "insect repellent",
        "bug bites",
        "ticks",
        "disease from mosquitoes",
        "japanese encephalitis"
      ],
      "steps": [
        "Use repellent with DEET, picaridin, or oil of lemon eucalyptus on exposed skin. Put it on after sunscreen, and reapply after swimming or sweating. Keep it off broken skin.",
        "Wear long, loose, light-coloured clothes, especially at dawn and dusk.",
        "Empty standing water around the home: buckets, pots, tyres, gutters. Mosquitoes breed there.",
        "Use flyscreens and mosquito nets. Cover water tanks.",
        "See a doctor if you have fever, headache, joint pain, or a rash after being bitten."
      ],
      "source": "NSW Health / Queensland Health / Better Health Channel"
    },
    {
      "id": "car-crash",
      "title": "Car crash",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "car crash",
        "car accident",
        "road accident",
        "collision",
        "motorbike crash",
        "traffic accident",
        "vehicle crash",
        "hit by car"
      ],
      "steps": [
        "Stop and park safely. Turn on hazard lights. Check for danger from traffic, fuel, fire, or live power lines.",
        "Call 000. Give the location, number of people, and injuries.",
        "Turn off the ignition. Put the handbrake on.",
        "Do not move injured people unless they are in danger, for example from fire. If you think they have a neck or back injury, keep their head and neck still.",
        "Check breathing and bleeding. See the CPR and severe bleeding guides.",
        "Do not take off a motorcycle helmet unless it is the only way to keep their breathing passage open or help them breathe.",
        "Keep them warm and stay with them until help arrives."
      ],
      "source": "ANZCOR / St John Ambulance Australia / Healthdirect"
    },
    {
      "id": "car-in-water",
      "title": "Car sinking in water",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "car in water",
        "sinking car",
        "car in river",
        "flooded road car",
        "trapped in car water",
        "car submerged",
        "drove into water"
      ],
      "steps": [
        "Act at once. The car may float for only a short time.",
        "Undo seatbelts. Open or break the windows. Climb out through the window. Children first.",
        "Electric windows may work for a short time. Open them straight away. If the window will not open, use a window breaker or hard object on a side window, not the windscreen.",
        "The doors will be very hard to open until the car fills with water. Do not wait for that.",
        "Get out and swim or float to safety. Call 000 when you are out."
      ],
      "warning": "Prevention: do not drive into floodwater. If it is flooded, forget it.",
      "source": "Royal Automobile Club / State Emergency Service"
    },
    {
      "id": "building-fire",
      "title": "Fire in a house or building",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "house fire",
        "building fire",
        "fire in house",
        "smoke alarm",
        "smoke",
        "on fire",
        "fire escape",
        "clothes on fire",
        "stop drop and roll",
        "kitchen fire"
      ],
      "steps": [
        "Get out. Stay out. Call 000 from outside.",
        "Get low and go. Smoke rises, so crawl under it. Cover your mouth with a cloth.",
        "Feel closed doors with the back of your hand before opening. If hot, do not open. Use another way out.",
        "Close doors behind you to slow fire spread. Do not use lifts.",
        "If you cannot get out: go to a room with a window. Seal door gaps with wet towels. Signal at the window and call 000.",
        "If your clothes are on fire: stop, drop to the ground, cover your face, and roll.",
        "Never go back inside for belongings or pets.",
        "Small kitchen oil fire: turn off the heat if safe, cover with a lid or fire blanket. Never use water."
      ],
      "source": "Fire and Rescue NSW / Metropolitan Fire Brigade"
    },
    {
      "id": "gas-leak",
      "title": "Gas leak",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "gas leak",
        "smell gas",
        "lpg",
        "natural gas",
        "gas bottle",
        "rotten egg smell",
        "gas explosion",
        "gas stove leak"
      ],
      "steps": [
        "If you smell gas: do not turn on or off any lights, switches, or phones. Do not light anything.",
        "Open doors and windows. Get everyone out.",
        "Turn off the gas at the meter or bottle, only if you can do it quickly and safely.",
        "Call your gas emergency line or 000 from outside, away from the building.",
        "Stay out until the all-clear.",
        "Feeling dizzy, headachy, or sick may be gas poisoning. Get fresh air."
      ],
      "source": "Gas distributors / Fire and Rescue services"
    },
    {
      "id": "vehicle-fire",
      "title": "Vehicle fire",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "car fire",
        "vehicle fire",
        "engine fire",
        "smoke from bonnet",
        "burning car",
        "truck fire",
        "fire in car"
      ],
      "steps": [
        "Pull over safely and switch off the engine.",
        "Get everyone out and move well away, at least 30 metres. Move uphill if possible.",
        "Call 000.",
        "Do not open the bonnet or boot. Fresh air feeds the fire.",
        "Do not go back for belongings. Keep other people away.",
        "Only try to use an extinguisher on a very small fire, from a safe distance, and only if you know how."
      ],
      "source": "Fire and Rescue services"
    },
    {
      "id": "evacuate-vehicle",
      "title": "Escaping a train, bus, or aircraft after an accident",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "plane crash",
        "train crash",
        "bus crash",
        "aircraft evacuation",
        "emergency exit",
        "evacuate plane",
        "derailment",
        "ferry sinking",
        "ship sinking"
      ],
      "steps": [
        "Leave your belongings behind. Bags slow everyone down and block aisles.",
        "Listen to the crew and follow their instructions. In an aircraft, stay braced until it stops, or until the crew tells you to leave.",
        "Before take-off, count the rows between you and the nearest exits, in front and behind. The closest one may be behind you.",
        "Stay low if there is smoke.",
        "Do not use an exit if there is fire or smoke outside it. Use another.",
        "Once out, move well away from the vehicle. Fuel can catch fire.",
        "Help others only if it is safe. Call 000 if you can."
      ],
      "source": "Civil Aviation Safety Authority / FAA"
    },
    {
      "id": "stranded-remote",
      "title": "Broken down or stranded in a remote area",
      "category": "Vehicles and accidents",
      "urgent": true,
      "keywords": [
        "stranded",
        "broken down",
        "outback",
        "remote",
        "stuck in desert",
        "car trouble remote",
        "no phone coverage",
        "bogged",
        "lost in bush",
        "epirb",
        "plb"
      ],
      "steps": [
        "Stay with your vehicle. It is easier to see from the air than a person, and it gives shade and shelter. Walking away is the leading cause of death.",
        "Tell someone where you are going before remote trips, and when to expect you back.",
        "Ration water. Drink when thirsty.",
        "Stay in the shade, not inside a hot car. Rest during the heat of the day.",
        "Make yourself easy to find: open the bonnet, spread bright clothing, and light a signal fire at night if safe. Three of anything is a distress signal.",
        "If you have an emergency beacon (EPIRB or personal locator beacon), activate it. Hold the aerial upright with a clear view of the sky, away from trees, buildings, and vehicles."
      ],
      "source": "AMSA (beacons) / RAA / RACQ"
    },
    {
      "id": "armed-attack",
      "title": "Armed attack or gunman: Escape, Hide, Tell",
      "category": "Attacks and threats",
      "urgent": true,
      "keywords": [
        "armed attack",
        "gunman",
        "shooter",
        "active shooter",
        "terror attack",
        "knife attack",
        "armed offender",
        "gun shots",
        "escape hide tell",
        "hostage",
        "armed confrontation",
        "gun",
        "weapon",
        "shooting",
        "shots fired",
        "man with a gun",
        "someone has a gun"
      ],
      "steps": [
        "ESCAPE: If there is a safe way out, move quickly and quietly away from danger. Leave your belongings. Help others if you can, but do not stop.",
        "HIDE: If you cannot escape, stay out of sight. Put a sturdy barrier between you and the attacker, such as a locked or barricaded door and solid cover. Silence your phone, including vibration.",
        "TELL: When it is safe, call 000. Give the location, the number of attackers, descriptions, weapons, and where you are.",
        "Keep reviewing your situation and your options.",
        "Stay where you are hiding until police tell you it is safe. Armed police may move past you to find the attacker.",
        "When police reach you: stay calm, keep your hands up and visible, and follow instructions. Do not run toward them."
      ],
      "source": "Australia-New Zealand Counter-Terrorism Committee"
    },
    {
      "id": "bomb-threat",
      "title": "Bomb threat or suspicious item",
      "category": "Attacks and threats",
      "urgent": true,
      "keywords": [
        "bomb threat",
        "suspicious package",
        "suspicious item",
        "unattended bag",
        "explosive",
        "bomb",
        "explosion",
        "package",
        "threat call",
        "terror threat"
      ],
      "steps": [
        "Do not touch, tilt, or tamper with a suspicious item. Clear the area around it.",
        "Do not use mobile phones or radios within about 25 metres of it. Move further for a vehicle: at least 100 metres.",
        "Call 000 from a safe distance. Say where it is and what you saw. Note its position and what it looks like.",
        "If a threat comes by phone: stay calm, keep the caller talking, note the number if it shows, and record the call if you can. Write down the exact words, and ask where it is and when it will go off. Tell building security and call 000.",
        "If a threat comes by email or social media: do not reply, forward, or delete it. Note the sender or username and call 000.",
        "After an explosion: move away. Another may follow. Help injured people if it is safe. Do not go back."
      ],
      "source": "Australian Government National Security: IED Guidelines for Crowded Places"
    },
    {
      "id": "civil-disorder",
      "title": "Riot or civil unrest",
      "category": "Attacks and threats",
      "keywords": [
        "riot",
        "civil unrest",
        "protest violence",
        "looting",
        "crowd",
        "mob",
        "civil disorder",
        "tear gas",
        "crowd crush",
        "unrest",
        "violent protest"
      ],
      "steps": [
        "Avoid the area. Leave early and calmly, away from the crowd. Do not film or confront.",
        "If you are inside: stay in, lock doors, stay away from windows, and keep lights low.",
        "If you are in a crowd: stay on your feet. Move to the edge diagonally. Keep your arms up in front of your chest to protect breathing space. Avoid walls, fences, and narrow places.",
        "If you fall, curl up and protect your head and chest, and try to get up quickly.",
        "Tear gas or pepper spray: walk into the wind and uphill. Do not rub your eyes. Rinse eyes with plain water for 10 to 15 minutes, wash skin with soap and water, and take off clothes with gas or spray on them and contact lenses.",
        "Follow police directions. Keep your hands visible.",
        "Keep a charged phone. Let family know where you are."
      ],
      "source": "Police services / Red Cross"
    },
    {
      "id": "power-outage",
      "title": "Long power outage",
      "category": "Attacks and threats",
      "keywords": [
        "power outage",
        "blackout",
        "no power",
        "power cut",
        "grid down",
        "electricity out",
        "outage days",
        "no electricity",
        "power failure"
      ],
      "steps": [
        "Check if it is just your house: look outside, check the switchboard, and ask neighbours.",
        "Report the outage to your electricity distributor. Call 000 for downed lines.",
        "Switch off and unplug heating and cooking appliances, because they could start a fire if power returns when no one is around. Unplug sensitive electronics to protect them from surges.",
        "Use a torch or battery lantern. Avoid candles, which cause house fires.",
        "Keep fridge and freezer doors closed. See the food safety guide.",
        "Never run a generator, barbecue, or camp stove indoors. Never connect a generator to your switchboard or a wall socket. See the carbon monoxide guide.",
        "Stay cool or warm safely. Check on elderly neighbours and people who use medical equipment.",
        "Charge phones in the car. Use low-power mode. Use a battery radio for news."
      ],
      "source": "Energy Safe Victoria / Ausgrid / Energex"
    },
    {
      "id": "systems-down",
      "title": "Payments, internet, or services are down for days",
      "category": "Attacks and threats",
      "keywords": [
        "payments down",
        "banks down",
        "card machines down",
        "atm not working",
        "cash",
        "internet outage",
        "systems down",
        "cyber disruption",
        "essential services",
        "supermarket down",
        "fuel stations",
        "grid cyber attack"
      ],
      "steps": [
        "Cash is king. Keep some cash in small notes at home. Card machines and ATMs may not work.",
        "Keep your car fuel tank at least half full. Fuel pumps need power and networks.",
        "Keep at least a week of any medicines. Pharmacies may be closed.",
        "Store water and non-food that spoils for at least 3 days. Councils suggest 5 to 7 days if you can.",
        "Have a battery or wind-up radio. ABC local radio is the national emergency broadcaster.",
        "Keep a paper list of key phone numbers, addresses, and accounts. Meet or check on neighbours.",
        "Do not panic buy. Take only what you need so others can get supplies.",
        "Only trust official sources. Beware of rumours and scams."
      ],
      "source": "ABC Emergency / Queensland Government / Queensland Fire Department"
    },
    {
      "id": "rip-current",
      "title": "Caught in a rip current",
      "category": "Outdoors and animals",
      "urgent": true,
      "keywords": [
        "rip",
        "rip current",
        "dragged out to sea",
        "caught in a rip",
        "swept out",
        "beach",
        "swimming",
        "surf",
        "can't get back to shore"
      ],
      "steps": [
        "Stay calm. Do not try to swim straight back against the rip. You will get tired.",
        "Float on your back and keep your head up. Save your energy. A rip may carry you out, or it may bring you back to a sandbank.",
        "Raise one arm and call out for help. Lifeguards and other swimmers will see you.",
        "If you are a strong swimmer, you can swim across the rip, parallel to the beach, or towards the breaking waves. Rips do not always run straight out, so floating is the safer choice.",
        "Once you are out of the rip, let the waves carry you in, or swim back to shore.",
        "To help someone else: do not go in unless you are trained. Call 000 and ask for surf lifesavers. Throw something that floats, like a board, a cooler or a ring."
      ],
      "warning": "Swim between the red and yellow flags. Lifeguards watch that area.",
      "source": "Surf Life Saving Australia / Royal Life Saving Society Australia / Healthdirect"
    },
    {
      "id": "boat-capsized",
      "title": "Boat tipped over or sinking",
      "category": "Outdoors and animals",
      "urgent": true,
      "keywords": [
        "boat",
        "capsized",
        "boat sinking",
        "overboard",
        "dinghy",
        "kayak",
        "man overboard",
        "lifejacket",
        "epirb",
        "marine radio"
      ],
      "steps": [
        "Put on a lifejacket and keep it on. Count everyone.",
        "Stay with the boat. It is easier for rescuers to find than a person in the water. Hold on to it, or get on top of it if you can.",
        "Call for help. Marine radio: channel 16 on VHF, say Mayday. Or call 000 if you have phone reception.",
        "Switch on your EPIRB or personal locator beacon, if you have one. Leave it on until rescuers tell you to turn it off.",
        "In the water with others: stay close together in a huddle. On your own: bring your knees up to your chest and keep still.",
        "Make yourselves easy to see: bright clothes, a torch, a whistle, flares.",
        "Do not swim for shore unless it is very close and you can land safely.",
        "Once out of the water, dry and warm everyone up. Cold water can cause hypothermia."
      ],
      "source": "NSW Government / Transport Victoria / WA Department of Transport"
    },
    {
      "id": "dog-bite",
      "title": "Dog bite",
      "category": "Outdoors and animals",
      "keywords": [
        "dog bite",
        "dog attack",
        "bitten by a dog",
        "animal bite",
        "bitten",
        "dog",
        "puppy bite"
      ],
      "steps": [
        "Get away from the dog and keep other people away. Do not try to fight it.",
        "Heavy bleeding: call 000. Press firmly on the wound with a clean pad or cloth. Keep pressing until help arrives.",
        "Small wound: clean it with warm water and a soft cloth, then cover it with a clean dressing.",
        "See a doctor for every bite that breaks the skin. Bites can get infected, and you may need a tetanus shot.",
        "Signs of infection: more pain or soreness, warmth around the wound, redness, pus or a fever. See a doctor straight away.",
        "Tell your local council or ranger about the dog. Note where it lives, if you know."
      ],
      "source": "St John Ambulance Australia / St John New Zealand"
    },
    {
      "id": "tick-bite",
      "title": "Tick bite",
      "category": "Outdoors and animals",
      "keywords": [
        "tick",
        "tick bite",
        "paralysis tick",
        "tick stuck on me",
        "tick on child",
        "bush tick",
        "embedded tick"
      ],
      "steps": [
        "Do not pull, squeeze or scratch the tick. Do not use tweezers. This can make it inject more poison.",
        "Kill the tick where it is. Use a tick spray with ether from a pharmacy, or permethrin cream on small ticks. Then leave it to drop off.",
        "Swelling of the face or throat, trouble breathing, or collapse: call 000. This is a severe allergic reaction.",
        "Know you are allergic to ticks: get medical help straight away after any bite.",
        "If you cannot kill or remove it, see a doctor or go to an emergency department. You can ask the Poisons Information Centre on 13 11 26.",
        "Over the next days and weeks, watch for headache, blurred vision, weakness, poor balance, fever or a rash. See a doctor urgently and say you had a tick bite.",
        "Check the rest of the body, and children and pets, for more ticks. Check the hairline, behind the ears, and the groin."
      ],
      "source": "Australian Government Department of Health / NSW Poisons Information Centre / Healthdirect"
    },
    {
      "id": "bat-bite",
      "title": "Bat bite or scratch",
      "category": "Outdoors and animals",
      "keywords": [
        "bat",
        "bat bite",
        "bat scratch",
        "flying fox",
        "lyssavirus",
        "rabies",
        "bat saliva",
        "touched a bat"
      ],
      "steps": [
        "Never touch a bat with bare hands. If you find a hurt bat, call a wildlife rescue group or a vet.",
        "Bitten or scratched: wash the wound gently with soap and running water for at least 15 minutes. Do not scrub.",
        "Then put on an antiseptic, such as povidone-iodine or alcohol.",
        "Bat saliva in your eyes, nose or mouth: flush with water for several minutes.",
        "See a doctor urgently, even if you feel fine and even if you have had rabies shots before. You may need a course of shots and a tetanus shot.",
        "You can call Healthdirect on 1800 022 222 for advice at any hour. Call 000 if the person is very unwell."
      ],
      "warning": "Bat bites are rare but can be deadly. Treat every bite or scratch as serious.",
      "source": "Queensland Health / NSW Health / Healthdirect"
    },
    {
      "id": "shark-croc-attack",
      "title": "Shark or crocodile attack",
      "category": "Outdoors and animals",
      "urgent": true,
      "keywords": [
        "shark",
        "shark attack",
        "crocodile",
        "croc",
        "croc attack",
        "bitten by a shark",
        "shark bite",
        "saltie"
      ],
      "steps": [
        "Get the person out of the water, or well away from the water's edge, as fast and calmly as you can. In croc country, go at least 5 metres from the water.",
        "If you can, press on the bleeding while you move them.",
        "Call 000. At a beach, also get the lifeguards or surf lifesavers.",
        "Lay the person down. Find the bleeding and press hard on it with a towel, clothes or your hands. Keep pressing.",
        "Bleeding from an arm or leg that will not stop: use a tourniquet. Put it between the heart and the wound, close to the wound. Tighten until the bleeding stops. Do not take it off. Write down the time.",
        "Keep them lying down and warm. Watch their breathing. If they are not breathing normally, start CPR.",
        "Stay with them until the ambulance arrives."
      ],
      "warning": "Never swim where crocodiles live, even if there is no sign.",
      "source": "Victorian Fisheries Authority / St John Ambulance Victoria / Queensland and NT Governments (Be Crocwise)"
    },
    {
      "id": "lost-bush",
      "title": "Lost in the bush",
      "category": "Outdoors and animals",
      "urgent": true,
      "keywords": [
        "lost",
        "lost in the bush",
        "lost bushwalking",
        "lost hiking",
        "can't find the track",
        "lost in the scrub",
        "bushwalker lost"
      ],
      "steps": [
        "Stop as soon as you know you are lost. Do not keep walking. The more you move, the bigger the area rescuers have to search.",
        "Call 000 and ask for police, if you have any phone reception. Even one bar can be enough for a short call or text. If you have a personal locator beacon, switch it on.",
        "Stay together if you are in a group.",
        "Stay where you are once help is called. If there is open ground nearby, move there so aircraft can see you.",
        "Make yourself easy to see and hear: bright clothes, a torch, a whistle (three blasts), a mirror or phone screen.",
        "Get out of the wind and rain. Put on all your clothes. Sit on a pack or branches, not on the cold ground.",
        "Save your phone battery. Turn on flight mode between calls.",
        "Ration your water. Do not drink from questionable water unless you have to. See the water guides."
      ],
      "warning": "Before every walk, tell someone your route and when you will be back.",
      "source": "NSW SES Bush Search and Rescue / state police services"
    },
    {
      "id": "missing-child",
      "title": "Missing child",
      "category": "Outdoors and animals",
      "urgent": true,
      "keywords": [
        "missing child",
        "lost child",
        "child missing",
        "can't find my child",
        "child wandered off",
        "lost kid",
        "missing kid",
        "my son is missing",
        "my daughter is missing"
      ],
      "steps": [
        "Do not wait. Start looking now, and call police as soon as you think your child is missing. You do not have to wait 24 hours.",
        "In a shop or public place: tell security or staff straight away. They may be able to close the exits and use their speakers.",
        "In danger or taken: call 000. Otherwise call the police on 131 444.",
        "Have a recent photo, what they are wearing, and their age, height and name ready.",
        "Look in places they like to go. Check hiding spots, water, cars and nearby streets. Ask others to help search in different directions.",
        "Stay in touch with the person at the starting place, in case your child returns.",
        "Tell police where you last saw your child, and any details that might help, like favourite places."
      ],
      "source": "Australian Federal Police National Missing Persons / state police"
    },
    {
      "id": "stab-gunshot",
      "title": "Stab or gunshot wound",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "stab",
        "stabbed",
        "stab wound",
        "knife wound",
        "gunshot",
        "shot",
        "gunshot wound",
        "bullet wound",
        "knife in",
        "impaled",
        "chest wound"
      ],
      "steps": [
        "Make sure the attacker is gone and it is safe. If it is not safe, get away first. See the armed attack guide.",
        "Call 000 now.",
        "Do not pull out a knife or any object stuck in the wound. It may be helping to slow the bleeding.",
        "Object stuck in: press firmly on both sides of it to close the wound. Pack padding around it so it cannot move, and bandage over the padding. Do not press on the object.",
        "No object: press hard straight on the wound with a thick pad or cloth, or your hands. Do not lift to look. If blood soaks through, add more on top.",
        "Gunshot: check for a second wound, an exit wound, on the other side. Check the back and sides. Press on each one.",
        "Chest or belly wound: press gently around it. Let the person take the position that eases their breathing, often sitting up. Do not push anything back in.",
        "Bleeding from an arm or leg that will not stop: use a tourniquet. See the severe bleeding guide.",
        "Keep them warm and as still as possible. Watch breathing. If they are not breathing normally, start CPR."
      ],
      "source": "St John Ambulance Victoria / St John Ambulance NZ / Australian Resuscitation Council"
    },
    {
      "id": "crush-amputation",
      "title": "Crush injury or cut-off body part",
      "category": "First aid",
      "urgent": true,
      "keywords": [
        "amputation",
        "finger cut off",
        "severed finger",
        "cut off",
        "crush injury",
        "crushed hand",
        "crushed finger",
        "trapped under",
        "hand in machine",
        "severed limb"
      ],
      "steps": [
        "Call 000.",
        "Stop the bleeding. Press firmly on the wound with a clean pad. If an arm or leg is bleeding badly and pressure does not work, use a tourniquet. See the severe bleeding guide.",
        "Cut-off part: do not put it in water and do not put it straight on ice. Wrap it in clean damp gauze or cloth, then put it in a sealed plastic bag.",
        "Put that bag in a container of cold water with ice, or on a cold pack. Keep it cool. Send it to hospital with the person.",
        "Lay the person down and keep them warm. Treat them for shock. Watch their breathing.",
        "Trapped under something heavy: call 000 and say they are trapped. Only free them if you can do it safely, or if they are in danger, such as fire.",
        "Minor crush to a finger: hold it under cool running water for about 10 minutes, then use a wrapped cold pack. Raise the hand. Get it checked by a doctor, because a bone may be broken."
      ],
      "source": "Royal Children's Hospital Melbourne / First Aid for Life"
    },
    {
      "id": "nosebleed",
      "title": "Nosebleed",
      "category": "First aid",
      "keywords": [
        "nosebleed",
        "nose bleed",
        "bleeding nose",
        "blood from nose",
        "nose bleeding",
        "nose won't stop bleeding"
      ],
      "steps": [
        "Sit down and lean forward. Do not tilt your head back. Blood going down your throat can make you cough or be sick.",
        "Pinch the soft part of the nose, just below the hard bone. Breathe through your mouth.",
        "Keep pinching for at least 10 minutes. Do not let go to check. Spit out any blood in your mouth.",
        "After it stops, rest and do not blow your nose for several hours.",
        "Still bleeding after 10 minutes of pinching: keep pinching and get medical help.",
        "Get help straight away if there is a lot of blood, the person feels faint, or the bleed started after a head injury."
      ],
      "source": "St John Ambulance Australia / St John New Zealand"
    },
    {
      "id": "fainting",
      "title": "Fainting",
      "category": "First aid",
      "keywords": [
        "faint",
        "fainted",
        "fainting",
        "passed out",
        "blacked out",
        "collapsed",
        "dizzy",
        "feel faint",
        "light headed"
      ],
      "steps": [
        "Lay the person on their back and raise their legs. Hold them up or rest them on a chair.",
        "Loosen any tight clothes, like a collar or belt. Give them fresh air.",
        "Check they are breathing normally. If they are not breathing normally, call 000 and start CPR.",
        "Pregnant: lay them on their left side or put a pillow under the right hip.",
        "Most people wake in a minute or two. When they wake, keep them lying down for a few minutes. Do not make them stand up quickly.",
        "Do not splash water on their face. Do not sit them with their head between their knees.",
        "Call 000 if they do not wake up within a minute or two, or if they hurt their head when they fell.",
        "Get a doctor to check them if it was their first faint, they faint again, or they have chest pain, a severe headache, slurred speech or blurred vision.",
        "Feeling faint yourself: lie down straight away with your legs up."
      ],
      "source": "Healthdirect / Better Health Channel"
    },
    {
      "id": "child-fever-fit",
      "title": "Child having a fit with a fever",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "febrile convulsion",
        "febrile seizure",
        "fit",
        "child fit",
        "child shaking",
        "baby shaking",
        "fever fit",
        "convulsion",
        "child has a seizure",
        "toddler seizure"
      ],
      "steps": [
        "Stay calm. Note the time the fit started.",
        "Lay your child on their side on the floor or a flat surface. Move hard or sharp things away.",
        "Do not hold them down or shake them. Do not put anything in their mouth.",
        "Do not cool them with a bath or sponge. You can take off extra clothes.",
        "Stay with them. Most fits stop on their own within a few minutes.",
        "Call 000 if the fit lasts more than 5 minutes, if one fit follows another, if they have trouble breathing, or if they look very unwell.",
        "When the fit stops, if they are drowsy, lay them on their side. Rest and comfort them. Keep them cool.",
        "See a doctor after any first fit, even if it stopped. Paracetamol or ibuprofen can make a child more comfortable, but it does not prevent fits."
      ],
      "source": "St John Ambulance Australia / Better Health Channel"
    },
    {
      "id": "overdose",
      "title": "Drug or medicine overdose",
      "category": "Medical emergency",
      "urgent": true,
      "keywords": [
        "overdose",
        "overdosed",
        "took too many pills",
        "drug overdose",
        "opioid",
        "heroin",
        "naloxone",
        "narcan",
        "too much medicine",
        "not waking up",
        "drugs"
      ],
      "steps": [
        "Call 000 now. Tell them what was taken, how much and when, if you know. Tell them if you have naloxone.",
        "Check if they respond and are breathing. Not breathing normally: start CPR. Breaths matter, so give them if you know how.",
        "Unconscious but breathing: roll them onto their side into the recovery position. Tilt the head back and lift the chin to keep the airway open.",
        "Suspected opioid overdose (heroin, morphine, oxycodone, fentanyl) and you have naloxone: give it following the instructions on the pack. If there is no response, give another dose every 2 to 3 minutes until they wake up or the ambulance arrives.",
        "Stay with them until the ambulance arrives. They can stop breathing again.",
        "Do not try to make them vomit. Do not put them in a cold shower or give them coffee.",
        "Ambulance staff are there to help. Police do not usually attend overdoses unless someone is in danger.",
        "Swallowed something by accident, and they are awake: call the Poisons Information Centre on 13 11 26."
      ],
      "source": "Better Health Channel / NSW Health / St John Ambulance"
    },
    {
      "id": "bushfire-smoke",
      "title": "Bushfire smoke",
      "category": "Weather",
      "keywords": [
        "smoke",
        "bushfire smoke",
        "smoky air",
        "air quality",
        "p2 mask",
        "n95",
        "haze",
        "smoke in the house",
        "smoke from the bushfire",
        "smoke from bushfire",
        "bushfire smoke in my house",
        "breathing smoke"
      ],
      "steps": [
        "Stay inside with windows and doors shut. Keep out of the smoke if you can.",
        "Stop outdoor exercise. Stay in the cleanest room, away from the kitchen.",
        "If you have air conditioning, set it to recirculate so it does not pull smoke in.",
        "You must go out: wear a P2 or N95 mask that fits tightly. Paper, surgical and cloth masks do not stop fine smoke. P2 masks do not stop gases like carbon monoxide.",
        "At most risk: babies and children, older people, pregnant women, and people with asthma, lung disease or heart disease. Check on them.",
        "Asthma: follow your asthma action plan and keep your reliever handy. See the asthma guide.",
        "Struggling to breathe, chest pain or tightness: call 000.",
        "Feel dizzy or short of breath in a mask: take it off and move to cleaner air.",
        "For health advice, call Healthdirect on 1800 022 222."
      ],
      "source": "Australian Government Department of Health / NSW Health / SA Health"
    },
    {
      "id": "heatwave",
      "title": "Heatwave",
      "category": "Weather",
      "keywords": [
        "heatwave",
        "extreme heat",
        "very hot",
        "hot weather",
        "hot day",
        "staying cool",
        "heat",
        "hot house",
        "40 degrees"
      ],
      "steps": [
        "Drink water often, even if you are not thirsty. Ask your doctor first if you have been told to limit fluids.",
        "Stay in the coolest place you can. Close curtains and blinds on sunny windows. Open windows only when it is cooler outside than inside.",
        "Go to somewhere cool during the hottest part of the day, like a library or shopping centre.",
        "Cool your body: use a wet cloth or a cool shower, or wet clothes and a fan.",
        "Never leave children, pets or anyone else in a parked car, even for a minute.",
        "Plan outdoor work and exercise for early morning or evening.",
        "Check on older neighbours, relatives and people who live alone. They are at higher risk.",
        "Most at risk: people over 65, babies and young children, pregnant women, people with health problems, and people who are alone.",
        "Feeling unwell: move somewhere cool, drink water and call Healthdirect on 1800 022 222. Confused, collapsing or having a fit: call 000. See the heat stroke guide."
      ],
      "source": "Healthdirect / NSW Health / Queensland Health / Better Health Channel"
    },
    {
      "id": "return-home",
      "title": "Going home after a flood, fire or storm",
      "category": "Disasters",
      "keywords": [
        "return home",
        "going home after",
        "after the flood",
        "after the fire",
        "after the storm",
        "clean up",
        "asbestos",
        "mould",
        "power lines down",
        "damaged house",
        "cleaning up after a disaster"
      ],
      "steps": [
        "Wait for the all-clear from emergency services before you go back.",
        "Look at the outside first. Stay away if the building looks damaged, leaning or cracked. Watch for snakes, broken glass and loose roof sheets.",
        "Power lines down: stay well away and call your power company. Treat every line as live.",
        "Smell gas or hear hissing: leave straight away, and call the gas company or 000 from outside.",
        "Do not turn on power, gas or water until your supplier or a licensed electrician or plumber says it is safe. After a flood, an electrician must check the wiring first.",
        "Wear sturdy boots, gloves, long sleeves and a P2 mask. Floodwater can carry germs and sewage.",
        "Homes built before 1990 may contain asbestos. Do not break, drill, sweep or blow it. Keep it wet, and get licensed removalists for anything big.",
        "Mould: leave it alone until the area is fully dry. Clean it up before you move back in.",
        "Take photos of the damage before you clean up, for your insurance.",
        "Throw away food that touched floodwater, and food in a fridge that has lost power for hours. See the food and power cut guides."
      ],
      "source": "Australian Red Cross / Queensland Health / Better Health Channel"
    },
    {
      "id": "family-plan",
      "title": "Family emergency plan",
      "category": "Basics",
      "keywords": [
        "family plan",
        "emergency plan",
        "household plan",
        "meeting place",
        "rediplan",
        "prepare family",
        "make a plan",
        "prepare",
        "get ready",
        "babies",
        "older people",
        "disability",
        "pregnant"
      ],
      "steps": [
        "Find out what could happen where you live: bushfire, flood, cyclone, storm, heat. Check your state emergency service and council websites.",
        "Make a plan together. Write down who does what, where you will go, and how you will leave.",
        "Pick two meeting places: one near home, and one outside your area in case you cannot get home.",
        "Write down key phone numbers on paper, including an out-of-town contact. Everyone should have a copy.",
        "Plan for everyone in the house: babies (formula, nappies, medicines), older people, anyone with a disability or health condition (medicines, equipment, power for medical devices), and pregnant family members.",
        "Plan for pets. See the pets guide.",
        "Plan how you will leave, and check how you will get out if roads are cut.",
        "Know your neighbours. Agree to check on each other, especially older people or people who live alone.",
        "Keep a kit ready. See the emergency kit checklist.",
        "Practise the plan once or twice a year. Update it when things change."
      ],
      "source": "Australian Red Cross RediPlan"
    },
    {
      "id": "pets-emergency",
      "title": "Pets in an emergency",
      "category": "Basics",
      "keywords": [
        "pets",
        "dog",
        "cat",
        "pet emergency",
        "animals",
        "evacuate with pets",
        "pet kit",
        "horses",
        "livestock",
        "microchip"
      ],
      "steps": [
        "Make sure every pet is microchipped, and that your phone number and address are up to date on the register.",
        "Make a pet kit: food and water for at least a few days, bowls, lead or carrier, medicines, vet records, and a recent photo of each pet.",
        "Take your pets with you when you leave. Leave early, before roads are blocked.",
        "Do not leave pets tied up or locked in. Leaving them behind should be a last resort.",
        "Many evacuation centres do not take pets. Plan a place to stay that does, such as a friend's home, a pet-friendly motel or a boarding kennel.",
        "Sudden disaster and no time to leave: shelter your pet in a safe room with water, and never leave a pet in a car.",
        "Lost pet after a disaster: check local shelters and vets, and tell the council. Put up photos.",
        "Large animals and livestock need their own plan. Contact your local RSPCA or Department of Agriculture."
      ],
      "source": "RSPCA Australia / Victorian Department of Agriculture / Queensland Government"
    },
    {
      "id": "kitchen-fire",
      "title": "Kitchen fire: pan, oil, oven or microwave",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "kitchen fire",
        "pan fire",
        "oil fire",
        "fat fire",
        "frying pan on fire",
        "stove fire",
        "oven fire",
        "microwave fire",
        "toaster fire",
        "chip pan",
        "cooking fire",
        "grease fire"
      ],
      "steps": [
        "Pan or oil fire: turn off the heat if it is safe. Cover the pan with its lid or a fire blanket. Never use water. Water makes an oil fire flare up and spread.",
        "Fire blanket: hold it in front of you to protect your hands and face. Lay it over the pan. Do not throw it.",
        "Do not move a burning pan, even to the sink or outside. It can spill and spread the fire. Leave the lid on until the pan is completely cool.",
        "Oven fire: keep the oven door shut and turn the oven off. Shutting the door cuts off air to the fire. Do not open it until it has cooled.",
        "Microwave fire: keep the door shut and switch it off at the wall if you can do it safely. Do not open it until the fire is out. Never put metal in a microwave.",
        "Toaster or grill fire: switch it off at the wall. Smother it with a fire blanket. Do not use water.",
        "Only fight the fire in the first few seconds, and only if you feel confident. If it is spreading, get out, close the kitchen door and call 000. Wait outside.",
        "Burned yourself? See the burns guide. Cool the burn under running water for 20 minutes."
      ],
      "warning": "Never leave cooking unattended, especially with oil.",
      "source": "Fire and Rescue NSW / Metropolitan Fire Service SA / Queensland Fire Department"
    },
    {
      "id": "fire-extinguisher-blanket",
      "title": "Using a fire extinguisher or fire blanket",
      "category": "Fire at home",
      "keywords": [
        "fire extinguisher",
        "extinguisher",
        "fire blanket",
        "put out a fire",
        "how to use extinguisher",
        "pass",
        "pull the pin",
        "dry powder",
        "small fire"
      ],
      "steps": [
        "Fight a fire only if all of these are true: it is small, it has only just started, you have a clear way out behind you, and you feel confident. If not, get out and call 000.",
        "Keep your escape route at your back. Never let the fire get between you and the way out.",
        "PASS. Pull the pin. Aim low at the base of the flames. Squeeze the handle. Sweep side to side until the fire is out.",
        "Dry chemical powder extinguishers (marked AB(E)) suit most home fires, including electrical fires. Water extinguishers (red band) are only for wood, paper and cloth. Never use water on oil, fat or electrical fires.",
        "Fire blanket: use it on a pan or oil fire. Pull the tapes to free it. Hold it in front of your hands and face. Lay it over the fire. Do not throw it. Leave it in place.",
        "A fire blanket can also smother flames on a person. Wrap it around them and roll them on the ground.",
        "Fire not out after a short time, or growing: stop, leave, close the door and call 000.",
        "Where to keep them: a fire blanket at least 1 metre from the stove, on the way to the exit. An extinguisher near an exit, where you can grab it as you leave.",
        "After any use, get the extinguisher checked or replaced."
      ],
      "source": "Fire and Rescue NSW / Queensland Fire Department / ACT Emergency Services Agency"
    },
    {
      "id": "electrical-fire",
      "title": "Electrical fire: powerboard, appliance or power point",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "electrical fire",
        "powerboard fire",
        "power point fire",
        "appliance fire",
        "sparks",
        "burning smell",
        "plug on fire",
        "fuse box fire",
        "switchboard fire",
        "wiring fire",
        "toaster",
        "kettle fire"
      ],
      "steps": [
        "Never use water or a wet cloth on an electrical fire. Water carries electricity and can shock you.",
        "Small fire: switch the power off at the switchboard if you can reach it safely. Do not touch the appliance or try to pull out a sparking plug.",
        "Put it out with a fire blanket, or a dry powder or CO2 extinguisher. Do not use water, foam or wet chemical.",
        "Fire at the switchboard, or the fire is spreading, or you are not sure: leave, close the door and call 000. Wait outside.",
        "Warning signs: a burning smell, a hot or discoloured power point or plug, sparks, buzzing, or lights that flicker or trip the power. Switch off at the switchboard and call a licensed electrician.",
        "Do not use that appliance or power point again until an electrician has checked it.",
        "Hurt by a shock? See the electric shock guide."
      ],
      "warning": "Do not overload powerboards. Do not plug a powerboard into another powerboard.",
      "source": "NSW Rural Fire Service / Metropolitan Fire Service SA / energy safety regulators"
    },
    {
      "id": "lithium-battery-fire",
      "title": "Lithium battery fire: e-bike, e-scooter, phone, power bank",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "lithium battery",
        "lithium-ion",
        "e-bike fire",
        "e-scooter fire",
        "battery fire",
        "battery swelling",
        "phone on fire",
        "power bank",
        "battery hissing",
        "battery smoking",
        "vape",
        "mobility scooter"
      ],
      "steps": [
        "A battery is on fire, smoking or flaming: do not try to fight it. These fires are fast, hot and give off toxic smoke.",
        "Get everyone out. Close doors behind you. Call 000 from outside and say it is a lithium battery fire.",
        "Do not go back for the device. Do not stand in the smoke.",
        "Warning signs: it is very hot, swollen, leaking, hissing, popping, or smells strange. If the device is only hot or swollen and not smoking, and you can do it safely, unplug it. Carry it outside onto bare ground, away from the house.",
        "A battery fire can flare up again after it looks out. Keep away until firefighters say it is safe.",
        "Charge safely: use the charger that came with the device or one made for it. Charge on a hard surface that will not burn, not on a bed, couch or carpet.",
        "Do not charge while you sleep or are out. Do not charge near your only way out.",
        "Buy products with an approval mark. Have repairs done by a qualified repairer. Do not use damaged batteries.",
        "Do not put batteries in the bin. Drop them at a battery recycling point."
      ],
      "source": "Fire and Rescue NSW / NSW Government / Queensland Fire Department"
    },
    {
      "id": "clothes-on-fire",
      "title": "Clothes on fire",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "clothes on fire",
        "clothing on fire",
        "stop drop and roll",
        "on fire",
        "burning clothes",
        "hair on fire",
        "someone is on fire",
        "set alight"
      ],
      "steps": [
        "Stop. Do not run. Running feeds the flames.",
        "Drop to the ground. Cover your face with your hands.",
        "Roll over and over until the flames are out.",
        "Helping someone else: stop them running. Get them down on the ground. Smother the flames with a fire blanket, coat or blanket, and roll them until the fire is out.",
        "Cool the burn under cool running water for at least 20 minutes. This still helps for up to 3 hours after the burn.",
        "Take off jewellery and loose clothing near the burn. Do not pull off anything stuck to the skin.",
        "Cover the burn loosely with plastic cling film or a clean non-fluffy cloth. Do not use ice, butter, creams or ointments.",
        "Call 000 for a severe burn, a burn on the face or airway, or a burn bigger than a 20 cent coin. See the burns guide."
      ],
      "source": "Metropolitan Fire Service SA / St John Ambulance Australia / Fire and Rescue NSW"
    },
    {
      "id": "smoke-alarm-escape-plan",
      "title": "Smoke alarm sounding, and your home escape plan",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "smoke alarm",
        "smoke alarm going off",
        "alarm beeping",
        "escape plan",
        "fire escape plan",
        "home fire plan",
        "fire drill",
        "meeting place",
        "detector",
        "smoke detector"
      ],
      "steps": [
        "Alarm sounds or you see fire: get out. Do not stop to check or collect things.",
        "Get down low and go. Close doors behind you if you can. Wake the others on your way out.",
        "Go to your meeting place. Call 000 from outside and ask for fire. Stay out. Do not go back in. Wait for firefighters.",
        "Make a plan before a fire. Draw a floor plan of your home. Mark two ways out of every room.",
        "Pick a meeting place at the front of the house, where firefighters can see you.",
        "Keep exits clear. Make sure windows and screens open easily, and you know where the keys are for locked doors and grills.",
        "Practise with everyone in the house, including pets, regularly.",
        "Children, and people affected by alcohol or drugs, may not wake to the alarm. Decide who will wake them.",
        "Have a working smoke alarm on every floor. Test them every month. Replace each alarm every 10 years.",
        "In NSW you can book a free Home Fire Safety Visit with Fire and Rescue NSW. Ask your state fire service if they offer the same."
      ],
      "source": "Fire and Rescue NSW"
    },
    {
      "id": "apartment-fire",
      "title": "Fire in an apartment or high-rise",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "apartment fire",
        "unit fire",
        "high rise",
        "high-rise fire",
        "fire in my building",
        "fire stairs",
        "lift in a fire",
        "flat fire",
        "fire alarm in building",
        "tower fire",
        "fire in my apartment building",
        "apartment building fire",
        "fire in my unit"
      ],
      "steps": [
        "Fire in your unit: get everyone out, close the door behind you, and head for the fire stairs. Do not use the lift.",
        "Call 000 once you are outside, or in a safe place. Say the street address and your apartment number.",
        "Fire alarm sounds somewhere else in the building: leave by the fire stairs, calmly, and follow the building's evacuation plan and any warden or firefighter instructions.",
        "Feel a closed door with the back of your hand before you open it. If it is hot, do not open it.",
        "Smoke in the corridor or stairs: do not go through it. Go back into your unit and close the door.",
        "Stuck inside: close the windows and doors to keep smoke out. Seal door gaps with wet towels. Call 000, give your apartment number, and say where you are. Signal at a window. Follow the operator's advice.",
        "Never prop open fire doors. Never leave anything in the fire stairs.",
        "Know your building's evacuation plan and the way to the fire stairs from your door. Count the doors between your unit and the stairs, so you can find them in smoke.",
        "Do not go back in until firefighters say it is safe."
      ],
      "warning": "Some buildings have a different plan. If your building's plan or a fire warden tells you to do something else, follow that and the firefighters.",
      "source": "Fire and Rescue NSW / ACT Emergency Services Agency"
    },
    {
      "id": "heater-candle-dryer-fire",
      "title": "Heater, candle or clothes dryer fire",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "heater fire",
        "candle fire",
        "dryer fire",
        "clothes dryer",
        "lint",
        "portable heater",
        "radiator",
        "electric blanket",
        "winter fire",
        "fan heater",
        "gas heater",
        "candle"
      ],
      "steps": [
        "Small fire that has only just started, and you feel confident: switch off at the wall if it is safe. Smother it with a fire blanket, or use a dry powder extinguisher. Never use water on electrical heaters or dryers.",
        "Fire growing or smoke filling the room: leave, close doors behind you and call 000. Wait outside.",
        "Clothes dryer fire: keep the door shut, switch off at the wall if it is safe, and get out of the room. Do not open the door. Fresh air feeds the fire.",
        "Stop it happening. Heaters: keep things at least 1 metre away. Never put anything on top of a heater or dry clothes on it. Use a heater with a tip-over switch. Turn it off when you go to bed.",
        "Check every heater at the start of each winter before you use it.",
        "Candles: keep them at least 1 metre from anything that can burn. Put them out before you leave the room, leave the house or go to bed.",
        "Clothes dryers: clean the lint filter after every load. Do not run the dryer when you are out or asleep. Keep space around it for air.",
        "Make sure you have working smoke alarms. See the smoke alarm and escape plan guide."
      ],
      "source": "ACT Emergency Services Agency / Product Safety Australia / state consumer protection agencies"
    },
    {
      "id": "bbq-gas-fire",
      "title": "Barbecue or gas bottle fire",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "barbecue fire",
        "bbq fire",
        "gas bottle",
        "lpg",
        "gas cylinder",
        "bbq gas leak",
        "gas bottle on fire",
        "gas hose",
        "gas bbq",
        "camping stove"
      ],
      "steps": [
        "Barbecue on fire: call 000. If it is safe, turn off the gas at the bottle. In most cases the fire will go out by itself.",
        "Keep everyone well back. Do not move a burning barbecue or gas bottle.",
        "Gas bottle on fire, venting or hissing loudly: leave the area, keep others away and call 000. Ask for fire.",
        "Smell gas: turn the bottle valve off. Put out any flames. Do not switch anything on or off. Move away, and call 000 and ask for fire if the smell does not clear.",
        "Check for leaks before use. After opening the bottle valve and before lighting, spray or brush soapy water on the hose and every join. Bubbles mean a leak.",
        "Leak: turn the bottle off straight away. Do not use the barbecue until a licensed gas fitter has fixed it. Never use a flame to look for a leak.",
        "Do not use a gas barbecue indoors, in a garage, or in strong wind. LPG is heavier than air and pools low to the ground.",
        "Only use a barbecue outside, on level ground, away from fences and anything that burns."
      ],
      "source": "Fire Rescue Victoria / Energy Safe Victoria / CFA / Fire and Rescue NSW"
    },
    {
      "id": "chimney-fire",
      "title": "Chimney or wood heater fire",
      "category": "Fire at home",
      "urgent": true,
      "keywords": [
        "chimney fire",
        "flue fire",
        "wood heater fire",
        "fireplace fire",
        "wood fire heater",
        "slow combustion",
        "creosote",
        "sparks from chimney",
        "roaring chimney",
        "wood stove",
        "flames coming out of the chimney",
        "flames from the chimney",
        "chimney on fire",
        "chimney"
      ],
      "steps": [
        "Signs of a chimney fire: a roaring or rumbling sound, flames or sparks from the top of the chimney, thick smoke, or a very hot flue.",
        "Get everyone out of the house. Call 000 and say it is a chimney fire.",
        "If you can do it safely, shut the heater door and close the air vents. Do not throw water into the heater.",
        "Do not climb on the roof.",
        "Even if it seems to have gone out, fire can spread into the walls and roof space. Let firefighters check the house before you go back in.",
        "Stop it happening. Have the chimney and flue cleaned every year. Soot and tar can build up and catch fire.",
        "Check the flue is joined firmly. Use dry, seasoned wood. Do not shut the air control right down, especially overnight.",
        "Never leave a fire unattended. Use a fire guard if there are children in the house. Put ashes in a metal bucket and keep it outside."
      ],
      "source": "State fire services / Victorian Building Authority / Maroondah City Council"
    }
  ];

  if (typeof module !== "undefined" && module.exports) module.exports = MORE;
  else (root.CARDS = root.CARDS || []).push(...MORE);
})(typeof self !== "undefined" ? self : this);
