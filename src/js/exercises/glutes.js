/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — POŚLADKI
   glutes.js
   v1.0
   ========================================= */

const gluteExercises = [

  {
    id: "glute-bridge",
    name: "Most biodrowy",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "bilateral"],
    workoutRole: "main",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Połóż się na plecach, ugnij kolana i ustaw stopy płasko na podłożu mniej więcej na szerokość bioder. Napnij brzuch i pośladki, a następnie unieś biodra do momentu, aż tułów i uda utworzą niemal prostą linię. Zatrzymaj ruch na chwilę w górnej pozycji, mocno napinając pośladki, a następnie kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/LORVjN2bg5o"
  },

  {
    id: "hip-thrust",
    name: "Hip thrust",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["hip-thrust", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie i ustaw stopy płasko na podłożu. Napnij brzuch i unieś biodra, mocno napinając pośladki w górnej pozycji. Nie przeprostowuj dolnej części pleców. Następnie kontrolowanie opuść biodra i powtórz ruch.",
    videoUrl: "https://www.youtube.com/shorts/rc9O9xpwqUY"
  },

  {
    id: "dumbbell-glute-bridge",
    name: "Most biodrowy z hantlem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "weighted", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach, ugnij kolana i ustaw stopy płasko na podłożu. Połóż hantel stabilnie na biodrach i przytrzymaj go dłońmi. Napnij brzuch i pośladki, a następnie unieś biodra. W górnej pozycji mocno napnij pośladki, nie przeprostowując dolnej części pleców. Powoli opuść biodra i powtórz ruch.",
    videoUrl: "https://www.youtube.com/shorts/iOrJXNUH3to"
  },

  {
    id: "kettlebell-glute-bridge",
    name: "Most biodrowy z kettlebell",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "weighted", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach, ugnij kolana i ustaw stopy płasko na podłożu. Ustaw kettlebell stabilnie na biodrach i przytrzymaj go dłońmi. Napnij brzuch i pośladki, a następnie unieś biodra. W górnej pozycji mocno napnij pośladki bez nadmiernego wyginania dolnej części pleców. Następnie kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/ULl7xM2yWgo"
  },

  {
    id: "mini-band-glute-bridge",
    name: "Most biodrowy z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "abduction", "mini-band"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Załóż mini band nad kolanami i połóż się na plecach z ugiętymi nogami. Ustaw stopy płasko na podłożu, napnij brzuch i lekko wypchnij kolana na zewnątrz. Unieś biodra do góry, mocno napinając pośladki. Utrzymuj napięcie gumy i nie pozwalaj kolanom zapadać się do środka.",
    videoUrl: "https://www.youtube.com/shorts/p5N_fok9YCM"
  },

  {
    id: "single-leg-glute-bridge",
    name: "Most biodrowy na jednej nodze",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "single-leg-hip-extension",
    movementTags: ["glute-bridge", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach, ugnij jedną nogę i ustaw jej stopę płasko na podłożu. Drugą nogę unieś. Napnij brzuch i pośladek nogi podporowej, a następnie unieś biodra. Utrzymuj miednicę stabilnie i nie pozwalaj jej opadać na bok. Po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/qB_bC7-CQjI"
  },

  {
    id: "dumbbell-single-leg-glute-bridge",
    name: "Most biodrowy na jednej nodze z hantlem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "single-leg-hip-extension",
    movementTags: ["glute-bridge", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach i oprzyj jedną stopę o podłoże. Umieść hantel stabilnie na biodrze po stronie nogi pracującej. Unieś drugą nogę, napnij brzuch i wypchnij biodra do góry, utrzymując miednicę możliwie równo. Po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/Ju8SoYMcFJo"
  },

  {
    id: "kettlebell-single-leg-glute-bridge",
    name: "Most biodrowy na jednej nodze z kettlebell",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "single-leg-hip-extension",
    movementTags: ["glute-bridge", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach i oprzyj jedną stopę o podłoże. Umieść kettlebell stabilnie na biodrze po stronie nogi pracującej. Unieś drugą nogę, napnij brzuch i wypchnij biodra do góry, zachowując stabilną miednicę. Po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/dgJoc5mbNzA"
  },

  {
    id: "dumbbell-hip-thrust",
    name: "Hip thrust z hantlem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["hip-thrust", "weighted", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie i połóż hantel na biodrach. Napnij brzuch, a następnie unieś biodra poprzez mocny wyprost bioder. W górnej pozycji napnij pośladki i nie przeprostowuj dolnej części pleców. Kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/61D_iI-mzYg"
  },

  {
    id: "kettlebell-hip-thrust",
    name: "Hip thrust z kettlebell",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["hip-thrust", "weighted", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie i ustaw kettlebell stabilnie na biodrach. Napnij brzuch i wypchnij biodra do góry. W górnej pozycji mocno napnij pośladki bez przeprostowywania dolnej części pleców. Kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/WAA-DqqRMSE"
  },

  {
    id: "mini-band-hip-thrust",
    name: "Hip thrust z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["hip-thrust", "abduction", "mini-band"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie i załóż mini band nad kolanami. Ustaw stopy stabilnie, lekko rozpychaj kolana na zewnątrz i wypchnij biodra do góry. Utrzymuj napięcie gumy przez cały ruch.",
    videoUrl: "https://www.youtube.com/shorts/pSwLdoIwPik"
  },

  {
    id: "single-leg-hip-thrust",
    name: "Hip thrust na jednej nodze",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 3,
    movementPattern: "single-leg-hip-extension",
    movementTags: ["hip-thrust", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie. Ustaw jedną stopę na podłożu, a drugą unieś. Napnij brzuch i pośladek nogi pracującej, a następnie wypchnij biodra do góry, utrzymując miednicę możliwie równo. Po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/c4nCc3Ox93k"
  },

  {
    id: "glute-bridge-march",
    name: "Marsz w moście biodrowym",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension-stability",
    movementTags: ["glute-bridge", "march", "stability", "unilateral"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 16 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Unieś biodra do pozycji mostu. Utrzymując miednicę nieruchomo, oderwij jedną stopę od podłoża i przyciągnij kolano lekko w kierunku klatki. Odstaw stopę i wykonaj ruch drugą nogą. Nie pozwalaj biodrom opadać ani obracać się.",
    videoUrl: "https://www.youtube.com/shorts/ORO64L7Iz4w"
  },

  {
    id: "side-lying-leg-raise",
    name: "Unoszenie nogi bokiem w leżeniu",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction",
    movementTags: ["abduction", "side-lying"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na boku z nogami wyprostowanymi. Napnij brzuch i unieś górną nogę w bok bez obracania biodra do tyłu. Zatrzymaj ruch na moment, a następnie kontrolowanie opuść nogę. Po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/TdfRsUbODlM"
  },

  {
    id: "glute-bridge-abduction",
    name: "Most biodrowy z odwodzeniem kolan",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension-abduction",
    movementTags: ["glute-bridge", "abduction", "mini-band"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Załóż mini band nad kolanami i unieś biodra do pozycji mostu. Utrzymując biodra wysoko, rozsuń kolana na boki przeciwko oporowi gumy, a następnie kontrolowanie zbliż je do siebie.",
    videoUrl: "https://www.youtube.com/shorts/lPWimfNqby4"
  },

  {
    id: "quadruped-hip-extension",
    name: "Unoszenie prostej nogi w tył w klęku podpartym",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["kickback", "quadruped", "straight-leg"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze na dłoniach i kolanach. Wyprostuj jedną nogę do tyłu, napnij brzuch i unieś ją lekko ponad linię tułowia, skupiając się na pracy pośladka. Nie obracaj miednicy ani nie wyginaj nadmiernie dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/2DrhXa2B0J0"
  },

  {
    id: "donkey-kick",
    name: "Donkey kick",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["kickback", "quadruped", "bent-knee"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze na dłoniach i kolanach. Napnij brzuch i utrzymuj stabilną miednicę. Unieś jedną nogę do tyłu i w górę, zachowując ugięcie kolana. Skup się na pracy pośladka i nie przeprostowuj dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/YoOlLusFMYU"
  },

  {
    id: "seated-mini-band-hip-abduction",
    name: "Odwodzenie kolan w siadzie z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: ["stable-seated-surface"],
    difficulty: 1,
    movementPattern: "hip-abduction",
    movementTags: ["abduction", "mini-band", "seated"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 15, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 150,
    instructions: "Usiądź stabilnie i załóż mini band nad kolanami. Ustaw stopy płasko na podłożu i rozsuń kolana na boki przeciwko oporowi gumy. Zatrzymaj ruch na moment, a następnie powoli wróć.",
    videoUrl: "https://www.youtube.com/shorts/9UGzMsHINjo"
  },

  {
    id: "standing-hip-abduction",
    name: "Odwodzenie nogi w bok na stojąco",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction",
    movementTags: ["abduction", "standing"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto i przenieś ciężar ciała na jedną nogę. Napnij brzuch i unieś drugą nogę w bok bez przechylania tułowia i obracania biodra. W razie potrzeby lekko przytrzymaj się stabilnego podparcia.",
    videoUrl: "https://www.youtube.com/shorts/ITyJfMetA8s"
  },

  {
    id: "mini-band-standing-hip-abduction",
    name: "Odwodzenie nogi w bok z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction",
    movementTags: ["abduction", "standing", "mini-band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Załóż mini band wokół kostek lub nad kolanami. Stań stabilnie, przenieś ciężar na jedną nogę i odwiedź drugą nogę w bok bez przechylania tułowia. Kontrolowanie wróć i po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/UCVP0qaHzN8"
  },

  {
    id: "side-plank-hip-abduction",
    name: "Unoszenie nogi w podporze bokiem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["abs", "legs", "shoulders"],
    strongSecondaryBodyParts: ["abs"],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-abduction-stability",
    movementTags: ["abduction", "side-plank", "stability"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze bokiem na przedramieniu i utrzymuj ciało w jednej linii. Unieś górną nogę bez obracania miednicy do tyłu. Utrzymuj biodra uniesione przez całą serię.",
    videoUrl: "https://www.youtube.com/shorts/8JZUOtcp0Js"
  },

  {
    id: "standing-hip-extension",
    name: "Prostowanie nogi w tył na stojąco",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["kickback", "standing"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto, przenieś ciężar na jedną nogę i przesuń drugą nogę do tyłu. Napnij pośladek, nie wyginając nadmiernie dolnej części pleców. W razie potrzeby lekko przytrzymaj się stabilnego podparcia.",
    videoUrl: "https://www.youtube.com/shorts/ysG2GAdq2Uw"
  },

  {
    id: "resistance-band-glute-kickback",
    name: "Prostowanie nogi w tył z długą gumą",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],
    equipmentConditions: ["anchor-low"],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["kickback", "standing", "band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Zamocuj długą gumę nisko i załóż jej drugi koniec na kostkę. Stań stabilnie, napnij brzuch i wyprostuj nogę do tyłu, skupiając się na pracy pośladka. Nie wykonuj ruchu z zamachu ani nie przeprostowuj odcinka lędźwiowego.",
    videoUrl: "https://www.youtube.com/shorts/CZvQm1vNzD0"
  },

  {
    id: "clamshell",
    name: "Clamshell",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction-external-rotation",
    movementTags: ["clamshell", "abduction", "external-rotation"],
    workoutRole: "accessory",
    fatigue: 1,
    timed: false,
    repRange: { min: 15, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 150,
    instructions: "Połóż się na boku z nogami ugiętymi i stopami złączonymi. Unieś górne kolano bez obracania miednicy do tyłu. Zatrzymaj ruch na moment, napinając pośladek, a następnie powoli opuść kolano.",
    videoUrl: "https://www.youtube.com/shorts/GhtIRFqClwE"
  },

  {
    id: "mini-band-clamshell",
    name: "Clamshell z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction-external-rotation",
    movementTags: ["clamshell", "abduction", "external-rotation", "mini-band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na boku z ugiętymi kolanami i załóż mini band nad kolanami. Utrzymując stopy razem, unieś górne kolano przeciwko oporowi gumy bez obracania miednicy do tyłu.",
    videoUrl: "https://www.youtube.com/shorts/Hj-2r7OlXuE"
  },

  {
    id: "prone-hip-extension",
    name: "Unoszenie nogi w leżeniu na brzuchu",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "lower-back", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["hip-extension", "prone", "unilateral"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na brzuchu z nogami wyprostowanymi. Napnij brzuch i pośladki, a następnie unieś jedną nogę kilka centymetrów nad podłoże bez odrywania miednicy i nadmiernego wyginania dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/CLxYwpYDX9U"
  },

  {
    id: "reverse-hyperextension-floor",
    name: "Odwrotne unoszenie nóg w leżeniu na brzuchu",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "lower-back", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["hip-extension", "prone", "bilateral"],
    workoutRole: "secondary",
    fatigue: 2,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na brzuchu z nogami wyprostowanymi. Unieś obie nogi jednocześnie kilka centymetrów nad podłoże, skupiając się na pracy pośladków. Nie wykonuj zamachu ani nie przeprostowuj dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/4K72dv6liRU"
  },

  {
    id: "glute-bridge-hold",
    name: "Izometryczny most biodrowy",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension-isometric",
    movementTags: ["glute-bridge", "isometric"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: true,
    repRange: null,
    timeRange: { min: 20, max: 60 },
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Unieś biodra do pozycji mostu biodrowego i mocno napnij pośladki. Utrzymuj biodra wysoko przez cały zadany czas, zachowując napięty brzuch i neutralną pozycję odcinka lędźwiowego.",
    videoUrl: "https://www.youtube.com/shorts/PnttCYHhyis"
  },

  {
    id: "hip-airplane",
    name: "Hip airplane",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs", "legs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "single-leg-hip-stability",
    movementTags: ["hip-hinge", "rotation", "stability", "unilateral"],
    workoutRole: "secondary",
    fatigue: 2,
    timed: false,
    repRange: { min: 5, max: 10 },
    timeRange: null,
    setRange: { min: 2, max: 3 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Stań na jednej nodze i pochyl tułów jak przy martwym ciągu na jednej nodze. Utrzymując stabilną nogę podporową, powoli otwórz biodro i miednicę na bok, a następnie wróć do ustawienia równoległego do podłoża.",
    videoUrl: "https://www.youtube.com/shorts/U5f8h7FDEa0"
  },

  {
    id: "glute-bridge-pulse",
    name: "Pulsowanie w moście biodrowym",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "pulse"],
    workoutRole: "finisher",
    fatigue: 2,
    timed: false,
    repRange: { min: 15, max: 30 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 150,
    instructions: "Unieś biodra do pozycji mostu i pozostając w górnym zakresie ruchu wykonuj krótkie, kontrolowane ruchy biodrami w górę i w dół. Nie odkładaj bioder całkowicie na podłoże.",
    videoUrl: "https://www.youtube.com/shorts/RtOvGkRDSFI"
  },

  {
    id: "feet-elevated-glute-bridge",
    name: "Most biodrowy ze stopami na podwyższeniu",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "feet-elevated"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Połóż się na plecach i oprzyj stopy na stabilnym podwyższeniu. Napnij brzuch i unieś biodra, mocno angażując pośladki. Kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/xDlHnGkBN58"
  },

  {
    id: "rainbow-leg-lift",
    name: "Unoszenie nogi po łuku w klęku podpartym",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-extension-abduction",
    movementTags: ["quadruped", "abduction", "hip-extension", "arc"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 10, max: 16 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze na dłoniach i kolanach. Wyprostuj jedną nogę do tyłu i prowadź ją szerokim łukiem z jednej strony ciała na drugą. Utrzymuj napięty brzuch i możliwie nieruchomą miednicę.",
    videoUrl: "https://www.youtube.com/shorts/G6NYStpJjOs"
  },

  {
    id: "side-lying-leg-circles",
    name: "Krążenia nogą w leżeniu bokiem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction-rotation",
    movementTags: ["abduction", "rotation", "side-lying"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 3 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na boku i unieś górną nogę. Wykonuj niewielkie, kontrolowane krążenia bez poruszania tułowiem i miednicą. Zmień kierunek, a następnie stronę.",
    videoUrl: "https://www.youtube.com/shorts/_eBInb08pQU"
  },

  {
    id: "frog-pump",
    name: "Frog pump",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["frog-pump", "hip-extension"],
    workoutRole: "finisher",
    fatigue: 2,
    timed: false,
    repRange: { min: 15, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na plecach, złącz podeszwy stóp i pozwól kolanom opaść na boki. Napnij brzuch i pośladki, a następnie unieś biodra. Mocno napnij pośladki w górnej pozycji i kontrolowanie opuść biodra.",
    videoUrl: "https://www.youtube.com/shorts/NNOUE6uAV0E"
  },

  {
    id: "frog-pump-hold",
    name: "Izometryczny frog pump",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["abs", "hamstrings"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension-isometric",
    movementTags: ["frog-pump", "isometric"],
    workoutRole: "finisher",
    fatigue: 2,
    timed: true,
    repRange: null,
    timeRange: { min: 20, max: 45 },
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 150,
    instructions: "Połóż się na plecach, złącz podeszwy stóp i pozwól kolanom opaść na boki. Unieś biodra i mocno napnij pośladki. Utrzymuj pozycję przez zadany czas bez przeprostowywania dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/NNOUE6uAV0E"
  },

  {
    id: "b-stance-glute-bridge",
    name: "Most biodrowy B-stance",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "asymmetrical-hip-extension",
    movementTags: ["glute-bridge", "b-stance", "unilateral-bias"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 210,
    instructions: "Ustaw jedną stopę bliżej pośladka, a drugą nieco dalej. Większość ciężaru przenieś na nogę znajdującą się bliżej ciała. Unieś biodra, mocno napinając pośladek nogi pracującej. Po serii zmień ustawienie nóg.",
    videoUrl: "https://www.youtube.com/shorts/nEQaMjD78sY"
  },

  {
    id: "b-stance-hip-thrust",
    name: "Hip thrust B-stance",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "asymmetrical-hip-extension",
    movementTags: ["hip-thrust", "b-stance", "unilateral-bias"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Oprzyj górną część pleców o stabilne podwyższenie. Jedną stopę ustaw bliżej ciała, a drugą lekko wysuń. Większość ciężaru przenieś na nogę pracującą i wypchnij biodra do góry. Po serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/I62r9IoLgmw"
  },

  {
    id: "glute-bridge-adduction",
    name: "Most biodrowy z dociskiem kolan",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["adductors", "hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["soft-object-between-knees"],
    difficulty: 1,
    movementPattern: "hip-extension-adduction",
    movementTags: ["glute-bridge", "adduction"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Umieść między kolanami zwinięty ręcznik lub niewielką poduszkę i lekko ją ściskaj. Unieś biodra do mostu, zachowując nacisk kolan do środka i napięte pośladki.",
    videoUrl: "https://www.youtube.com/shorts/FzVRNIR-ptA"
  },

  {
    id: "glute-bridge-feet-together",
    name: "Most biodrowy ze złączonymi stopami",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["hamstrings", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension",
    movementTags: ["glute-bridge", "narrow-stance"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Połóż się na plecach, ugnij kolana i ustaw stopy blisko siebie. Napnij brzuch i pośladki, a następnie unieś biodra. Zatrzymaj ruch na moment w górnej pozycji i kontrolowanie wróć.",
    videoUrl: "https://www.youtube.com/shorts/mSuDY5J0Fwo"
  },

  {
    id: "fire-hydrant",
    name: "Fire hydrant",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction-external-rotation",
    movementTags: ["fire-hydrant", "abduction", "external-rotation"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze na dłoniach i kolanach. Utrzymując kolano ugięte, unieś nogę w bok bez nadmiernego obracania miednicy. Zatrzymaj ruch na moment i kontrolowanie wróć.",
    videoUrl: "https://www.youtube.com/shorts/Y0G0DqWsSuM"
  },

  {
    id: "mini-band-fire-hydrant",
    name: "Fire hydrant z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-abduction-external-rotation",
    movementTags: ["fire-hydrant", "abduction", "external-rotation", "mini-band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Załóż mini band nad kolanami i ustaw się w podporze na dłoniach i kolanach. Unieś jedno kolano w bok przeciwko oporowi gumy bez nadmiernego obracania miednicy.",
    videoUrl: "https://www.youtube.com/shorts/VtgLTY_051M"
  },

  {
    id: "quadruped-hip-circles",
    name: "Krążenia biodrem w klęku podpartym",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "mixed",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-circumduction",
    movementTags: ["quadruped", "rotation", "abduction", "mobility"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 3 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze na dłoniach i kolanach. Unieś jedno kolano lekko nad podłoże i prowadź je szerokim, kontrolowanym ruchem po okręgu. Utrzymuj tułów i miednicę możliwie nieruchomo.",
    videoUrl: "https://www.youtube.com/shorts/P8P1E_IosqA"
  },

  {
    id: "mini-band-lateral-walk",
    name: "Chodzenie bokiem z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "lateral-locomotion",
    movementTags: ["lateral-walk", "abduction", "mini-band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Załóż mini band nad kolanami lub wokół kostek. Lekko ugnij kolana i biodra, a następnie wykonuj kontrolowane kroki w bok, cały czas utrzymując napięcie gumy.",
    videoUrl: "https://www.youtube.com/shorts/N28Hpdezg7Q"
  },

  {
    id: "mini-band-monster-walk",
    name: "Monster walk z mini bandem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["legs", "abs"],
    strongSecondaryBodyParts: ["legs"],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "mini-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "diagonal-locomotion",
    movementTags: ["monster-walk", "abduction", "mini-band"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Załóż mini band nad kolanami lub wokół kostek. Lekko ugnij kolana i cofnij biodra. Utrzymując napięcie gumy, wykonuj kontrolowane kroki po skosie do przodu lub na boki.",
    videoUrl: "https://www.youtube.com/shorts/1DCjhDQrUhU"
  },

  {
    id: "standing-glute-squeeze",
    name: "Izometryczne napięcie pośladków na stojąco",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["abs"],
    strongSecondaryBodyParts: [],
    gluteTarget: "maximus",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-extension-isometric",
    movementTags: ["isometric", "activation"],
    workoutRole: "accessory",
    fatigue: 1,
    timed: true,
    repRange: null,
    timeRange: { min: 20, max: 40 },
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 45 },
    estimatedSeconds: 120,
    instructions: "Stań prosto ze stopami mniej więcej na szerokość bioder. Napnij brzuch i mocno ściśnij pośladki, zachowując neutralne ustawienie miednicy. Nie przeprostowuj dolnej części pleców.",
    videoUrl: "https://www.youtube.com/shorts/d0fdgr59NsQ"
  },

  {
    id: "side-plank-clamshell",
    name: "Clamshell w podporze bokiem",
    primaryBodyPart: "glutes",
    secondaryBodyParts: ["abs", "legs", "shoulders"],
    strongSecondaryBodyParts: ["abs"],
    gluteTarget: "medius",
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-abduction-external-rotation-stability",
    movementTags: ["clamshell", "side-plank", "stability"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Ustaw się w podporze bokiem na przedramieniu z ugiętymi kolanami. Unieś biodra i utrzymuj stopy razem. Unieś górne kolano jak w clamshell bez obracania miednicy do tyłu. Utrzymuj biodra wysoko przez całą serię.",
    videoUrl: "https://www.youtube.com/shorts/uY-rt8MFnTM"
  }

];

window.GluteExercises = gluteExercises;