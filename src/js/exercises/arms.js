/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — RAMIONA
   arms.js
   v1.1
   ========================================= */

const armExercises = [

  /* =========================================
     BICEPS
     ========================================= */

  {
    id: "dumbbell-biceps-curl",
    name: "Uginanie ramion z hantlami",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "supinated-grip"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań stabilnie z hantlami po bokach ciała i dłońmi skierowanymi do przodu. Utrzymuj łokcie blisko tułowia i ugnij ramiona, unosząc hantle w kierunku barków. Nie pomagaj sobie zamachem. Następnie kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/PuaJzTatIJM"
  },

  {
    id: "hammer-curl",
    name: "Uginanie ramion chwytem młotkowym",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "hammer-grip",
      "forearm-emphasis"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań stabilnie z hantlami po bokach ciała i dłońmi skierowanymi do siebie. Utrzymuj łokcie blisko tułowia i ugnij ramiona bez obracania nadgarstków. Kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/6qmFOofPmP0"
  },

  {
    id: "alternating-dumbbell-curl",
    name: "Naprzemienne uginanie ramion z hantlami",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "alternating",
      "unilateral"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 210,

    instructions:
      "Stań stabilnie z hantlami po bokach ciała. Uginaj naprzemiennie jedno ramię, utrzymując łokcie blisko tułowia i nie pomagając sobie zamachem.",

    videoUrl:
      "https://www.youtube.com/shorts/FHY_2t7R714"
  },

  {
    id: "resistance-band-biceps-curl",
    name: "Uginanie ramion z długą gumą",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "supinated-grip",
      "band"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na środku długiej gumy oporowej i chwyć jej końce dłońmi skierowanymi do przodu. Utrzymuj łokcie blisko tułowia i przyciągnij dłonie w kierunku barków. Następnie kontrolowanie wyprostuj ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/20xtfGZ37nw"
  },

  {
    id: "kettlebell-biceps-curl",
    name: "Uginanie ramion z kettlebell",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "bilateral"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden kettlebell oburącz przed udami. Utrzymuj łokcie blisko tułowia i ugnij ramiona, unosząc ciężar w kierunku klatki. Kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/So4iApZfoDI"
  },

  {
    id: "concentration-curl",
    name: "Uginanie ramienia w podporze o udo",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],

    equipmentConditions: ["stable-seated-surface"],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "unilateral",
      "supported"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Usiądź stabilnie i oprzyj tylną część ramienia o wewnętrzną stronę uda. Ugnij łokieć, unosząc hantel w kierunku barku. Nie odrywaj ramienia od uda. Po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/EjUnEEfTSEY"
  },

  {
    id: "reverse-dumbbell-curl",
    name: "Uginanie ramion nachwytem z hantlami",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "elbow-flexion",

    movementTags: [
      "reverse-grip",
      "forearm-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj hantle nachwytem przed udami. Utrzymuj łokcie blisko tułowia i ugnij ramiona bez odchylania ciała. Następnie kontrolowanie opuść ciężary.",

    videoUrl:
      "https://www.youtube.com/watch?v=EoYWMB856cA"
  },

  {
    id: "resistance-band-hammer-curl",
    name: "Uginanie ramion chwytem młotkowym z długą gumą",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "hammer-grip",
      "forearm-emphasis",
      "band"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na środku długiej gumy oporowej i chwyć jej końce dłońmi skierowanymi do siebie. Ugnij ramiona, utrzymując łokcie blisko tułowia i nie obracając nadgarstków.",

    videoUrl:
      "https://www.youtube.com/watch?v=bcond2tqWg0"
  },

  {
    id: "cross-body-hammer-curl",
    name: "Uginanie młotkowe hantla do przeciwnego barku",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "hammer-grip",
      "alternating",
      "cross-body",
      "forearm-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj hantle po bokach ciała. Ugnij jedno ramię, prowadząc hantel po skosie w kierunku przeciwnego barku. Kontrolowanie opuść ciężar i wykonaj ruch drugą ręką.",

    videoUrl:
      "https://www.youtube.com/shorts/qmQkt1Y-FX8"
  },

  {
    id: "zottman-curl",
    name: "Uginanie Zottmana z hantlami",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "elbow-flexion",

    movementTags: [
      "forearm-rotation",
      "supinated-grip",
      "reverse-grip",
      "forearm-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 12
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Ugnij ramiona klasycznym podchwytem. W górnej pozycji obróć dłonie nachwytem i powoli opuść hantle. Na dole ponownie ustaw dłonie do kolejnego powtórzenia.",

    videoUrl:
      "https://www.youtube.com/shorts/5Go_uOTnFl0"
  },

  {
    id: "resistance-band-reverse-curl",
    name: "Uginanie ramion nachwytem z długą gumą",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "reverse-grip",
      "forearm-emphasis",
      "band"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na środku długiej gumy oporowej i chwyć jej końce nachwytem. Uginaj łokcie, utrzymując ramiona blisko tułowia. Kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl: ""
  },

  {
    id: "kettlebell-hammer-curl",
    name: "Uginanie młotkowe z kettlebell",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: ["forearms"],

    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "hammer-grip",
      "bilateral",
      "forearm-emphasis"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden kettlebell oburącz za boki uchwytu przed udami. Ugnij ramiona, unosząc ciężar w kierunku klatki, bez odchylania tułowia. Następnie kontrolowanie opuść ciężar.",

    videoUrl:
      "https://www.youtube.com/shorts/Yftd5p5Fc3A"
  },

  {
    id: "resistance-band-concentration-curl",
    name: "Uginanie ramienia z długą gumą w podporze",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: ["stable-seated-surface"],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "unilateral",
      "supported",
      "band"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Usiądź stabilnie i zamocuj długą gumę pod stopą. Oprzyj ramię o wewnętrzną stronę uda i ugnij łokieć, przyciągając dłoń w kierunku barku. Po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/7EQSPIrN2-w"
  },

  {
    id: "drag-curl-dumbbells",
    name: "Drag curl z hantlami",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "elbow-flexion",

    movementTags: [
      "drag-curl"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Uginaj łokcie, prowadząc hantle blisko tułowia i lekko cofając łokcie do tyłu. Nie używaj zamachu. W górze napnij biceps i kontrolowanie opuść ciężary.",

    videoUrl:
      "https://www.youtube.com/shorts/MfnKlwR7RT4"
  },

  {
    id: "resistance-band-drag-curl",
    name: "Drag curl z długą gumą",

    primaryBodyPart: "arms",
    armTarget: "biceps",

    secondaryBodyParts: ["forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-flexion",

    movementTags: [
      "drag-curl",
      "band"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na środku długiej gumy oporowej. Uginaj łokcie, prowadząc dłonie blisko tułowia i lekko cofając łokcie. Kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/ovV4V7V-UWU"
  },


  /* =========================================
     TRICEPS
     ========================================= */

  {
    id: "dumbbell-overhead-triceps-extension",
    name: "Prostowanie ramion z hantlem nad głową",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "overhead"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden hantel oburącz nad głową. Utrzymuj łokcie blisko głowy, opuść ciężar za głowę poprzez ugięcie łokci, a następnie wyprostuj ramiona bez nadmiernego wyginania pleców.",

    videoUrl:
      "https://www.youtube.com/shorts/b_r_LW4HEcM"
  },

  {
    id: "triceps-kickback-dumbbell",
    name: "Prostowanie ramienia z hantlem w opadzie",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "unilateral",
      "kickback"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Pochyl tułów i ustaw ramię blisko ciała. Wyprostuj przedramię do tyłu bez poruszania ramieniem w barku. Mocno napnij triceps, kontrolowanie wróć i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/3Bv1n7-DN7c"
  },

  {
    id: "resistance-band-triceps-pushdown",
    name: "Prostowanie ramion z długą gumą w dół",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [
      "anchor-high"
    ],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "pushdown",
      "band"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Zamocuj długą gumę oporową wysoko. Ustaw łokcie blisko tułowia i wyprostuj przedramiona w dół. Nie pozwalaj łokciom odsuwać się od ciała i kontrolowanie wróć.",

    videoUrl:
      "https://www.youtube.com/shorts/PkGesjlH7RQ"
  },

  {
    id: "resistance-band-overhead-triceps-extension",
    name: "Prostowanie ramion z długą gumą nad głową",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "overhead",
      "band"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na długiej gumie oporowej albo zamocuj ją nisko za sobą i poprowadź za głowę. Utrzymuj łokcie blisko głowy i wyprostuj ramiona nad głowę. Kontrolowanie wróć.",

    videoUrl:
      "https://www.youtube.com/watch?v=Yi_zNoIsNcc"
  },

  {
    id: "diamond-push-up",
    name: "Pompki diamentowe",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["chest", "shoulders", "abs"],
    strongSecondaryBodyParts: ["chest"],

    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-push",

    movementTags: [
      "elbow-extension",
      "bodyweight",
      "close-grip",
      "compound"
    ],

    workoutRole: "main",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 6,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Ustaw dłonie blisko siebie pod klatką piersiową. Prowadź łokcie blisko tułowia, opuść ciało w kontrolowany sposób, a następnie odepchnij się od podłoża. Utrzymuj napięty brzuch i stabilną pozycję ciała.",

    videoUrl:
      "https://www.youtube.com/shorts/PPTj-MW2tcs"
  },

  {
    id: "bench-dip",
    name: "Dipy tricepsowe na podwyższeniu",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "chest"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],

    equipmentConditions: [
      "stable-elevated-surface"
    ],

    difficulty: 2,

    movementPattern: "elbow-extension",

    movementTags: [
      "bodyweight",
      "supported",
      "dip"
    ],

    workoutRole: "secondary",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Oprzyj dłonie na stabilnym podwyższeniu za plecami i utrzymuj biodra blisko podparcia. Ugnij łokcie w komfortowym zakresie, a następnie wyprostuj ramiona. Nie opuszczaj barków głębiej, niż pozwala komfortowy zakres ruchu.",

    videoUrl:
      "https://www.youtube.com/shorts/dmVqZMnGins"
  },

  {
    id: "kettlebell-overhead-triceps-extension",
    name: "Prostowanie ramion z kettlebell nad głową",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "overhead",
      "bilateral"
    ],

    workoutRole: "main",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden kettlebell oburącz nad głową. Opuść ciężar za głowę poprzez ugięcie łokci, a następnie wyprostuj ramiona. Utrzymuj łokcie możliwie blisko głowy.",

    videoUrl:
      "https://www.youtube.com/shorts/3s_dRicgY5U"
  },

  {
    id: "resistance-band-triceps-kickback",
    name: "Prostowanie ramienia z długą gumą w opadzie",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "unilateral",
      "kickback",
      "band"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na długiej gumie oporowej albo zamocuj ją nisko. Pochyl tułów, ustaw ramię blisko ciała i wyprostuj przedramię do tyłu. Kontrolowanie wróć i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/pivEbYg9uCY"
  },

  {
    id: "single-arm-dumbbell-triceps-extension",
    name: "Jednorącz prostowanie hantla nad głową",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 1 }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "elbow-extension",

    movementTags: [
      "unilateral",
      "overhead"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden hantel nad głową i utrzymuj łokieć blisko głowy. Opuść ciężar za głowę poprzez ugięcie łokcia, a następnie wyprostuj ramię. Po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/_w3ggqafzqU"
  },

  {
    id: "resistance-band-close-grip-press",
    name: "Wyciskanie długiej gumy wąskim chwytem na triceps",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["chest", "shoulders"],
    strongSecondaryBodyParts: ["chest"],

    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],

    equipmentConditions: [
      "anchor-mid"
    ],

    difficulty: 1,

    movementPattern: "horizontal-push",

    movementTags: [
      "elbow-extension",
      "close-grip",
      "band",
      "compound"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 10,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Zamocuj długą gumę oporową za sobą mniej więcej na wysokości klatki piersiowej. Trzymaj dłonie blisko siebie i łokcie przy tułowiu. Wypchnij dłonie przed siebie, a następnie kontrolowanie wróć.",

    videoUrl:
      "https://www.youtube.com/shorts/T0UJ0W-_yIE"
  },

  {
    id: "skull-crusher-floor-dumbbells",
    name: "Francuskie wyciskanie hantli leżąc na podłodze",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "forearms"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "elbow-extension",

    movementTags: [
      "lying",
      "skull-crusher"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 45,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Połóż się na plecach i trzymaj hantle nad klatką piersiową. Utrzymując ramiona możliwie nieruchomo, ugnij łokcie i opuść hantle w kierunku boków głowy. Następnie wyprostuj łokcie.",

    videoUrl:
      "https://www.youtube.com/shorts/YRKjhLPLXho"
  },

  {
    id: "close-grip-dumbbell-floor-press",
    name: "Wyciskanie hantli wąsko leżąc na podłodze",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["chest", "shoulders"],
    strongSecondaryBodyParts: ["chest"],

    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "elbow-extension",
      "close-grip",
      "compound",
      "floor-press"
    ],

    workoutRole: "main",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 8,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 3,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Połóż się na plecach i trzymaj hantle blisko siebie. Utrzymuj łokcie przy tułowiu, kontrolowanie opuść ciężary, a następnie wypchnij je do góry, skupiając się na pracy tricepsów.",

    videoUrl:
      "https://www.youtube.com/shorts/VkukgxNaUpQ"
  },

  {
    id: "bodyweight-triceps-extension",
    name: "Prostowanie ramion w podporze na triceps",

    primaryBodyPart: "arms",
    armTarget: "triceps",

    secondaryBodyParts: ["shoulders", "chest", "abs"],
    strongSecondaryBodyParts: [],

    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],

    equipmentConditions: [
      "stable-elevated-surface"
    ],

    difficulty: 3,

    movementPattern: "elbow-extension",

    movementTags: [
      "bodyweight",
      "stability"
    ],

    workoutRole: "secondary",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 6,
      max: 15
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Oprzyj dłonie na stabilnym podwyższeniu i ustaw ciało w jednej linii. Ugnij łokcie, opuszczając głowę i klatkę w kierunku podparcia, a następnie wyprostuj ramiona, skupiając się na pracy tricepsów.",

    videoUrl:
      "https://www.youtube.com/shorts/_o6S5sjhgIQ"
  }

];


/* =========================================
   UDOSTĘPNIENIE MODUŁU
   ========================================= */

window.ArmExercises = armExercises;