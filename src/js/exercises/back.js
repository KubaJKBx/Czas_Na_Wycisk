/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — PLECY
   back.js
   v1.1
   ========================================= */

const backExercises = [

  {
    id: "pull-up",
    name: "Podciąganie nachwytem",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 4,

    movementPattern: "vertical-pull",

    movementTags: [],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 3,
      max: 12
    },

    timeRange: null,

    setRange: {
      min: 3,
      max: 5
    },

    restRange: {
      min: 90,
      max: 180
    },

    estimatedSeconds: 300,

    instructions:
      "Chwyć drążek nachwytem nieco szerzej niż barki. Napnij brzuch i pośladki, rozpocznij ruch od pracy łopatek i przyciągnij klatkę w kierunku drążka. Następnie kontrolowanie opuść ciało do prawie pełnego wyprostu ramion.",

    videoUrl:
      "https://www.youtube.com/shorts/LkLAIT--o0g"
  },


  {
    id: "chin-up",
    name: "Podciąganie podchwytem",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: ["arms"],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 3,

    movementPattern: "vertical-pull",

    movementTags: [
      "supinated-grip",
      "biceps-emphasis"
    ],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 3,
      max: 12
    },

    timeRange: null,

    setRange: {
      min: 3,
      max: 5
    },

    restRange: {
      min: 90,
      max: 180
    },

    estimatedSeconds: 300,

    instructions:
      "Chwyć drążek podchwytem mniej więcej na szerokość barków. Napnij brzuch, ściągnij łopatki i przyciągnij klatkę w kierunku drążka. Następnie kontrolowanie opuść ciało do prawie pełnego wyprostu ramion.",

    videoUrl:
      "https://www.youtube.com/shorts/Oi3bW9nQmGI"
  },


  {
    id: "assisted-pull-up-band",
    name: "Podciąganie z pomocą długiej gumy",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "resistance-band",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 2,

    movementPattern: "vertical-pull",

    movementTags: [
      "assisted-variation",
      "band"
    ],

    workoutRole: "main",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 5,
      max: 12
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
      "Zamocuj długą gumę oporową do drążka i oprzyj na niej stopę lub kolano. Napnij brzuch, ściągnij łopatki i podciągnij ciało w kierunku drążka. Opuszczaj się kontrolowanie, pozwalając gumie jedynie pomagać w ruchu.",

    videoUrl:
      "https://www.youtube.com/shorts/H2YH7zMIJm8"
  },


  {
    id: "negative-pull-up",
    name: "Negatywne podciąganie",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 2,

    movementPattern: "vertical-pull",

    movementTags: [
      "eccentric"
    ],

    workoutRole: "secondary",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 3,
      max: 8
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Rozpocznij w górnej pozycji z brodą nad drążkiem. Opuszczaj ciało możliwie powoli przez około 3–6 sekund, aż ramiona będą prawie wyprostowane. Do kolejnego powtórzenia wróć do góry z pomocą.",

    videoUrl:
      "https://www.youtube.com/shorts/xlbp2Pd0YmE"
  },


  {
    id: "wide-grip-pull-up",
    name: "Podciąganie szerokim nachwytem",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 4,

    movementPattern: "vertical-pull",

    movementTags: [
      "wide-grip",
      "pronated-grip"
    ],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 3,
      max: 10
    },

    timeRange: null,

    setRange: {
      min: 3,
      max: 4
    },

    restRange: {
      min: 90,
      max: 180
    },

    estimatedSeconds: 300,

    instructions:
      "Chwyć drążek nachwytem szerzej niż barki. Napnij brzuch, rozpocznij ruch od pracy łopatek i przyciągnij górną część klatki w kierunku drążka. Nie odchylaj nadmiernie tułowia.",

    videoUrl:
      "https://www.youtube.com/shorts/DcIqyu9s8fA"
  },


  {
    id: "close-grip-pull-up",
    name: "Podciąganie wąskim nachwytem",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: ["arms"],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 3,

    movementPattern: "vertical-pull",

    movementTags: [
      "close-grip",
      "pronated-grip"
    ],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 3,
      max: 10
    },

    timeRange: null,

    setRange: {
      min: 3,
      max: 4
    },

    restRange: {
      min: 90,
      max: 150
    },

    estimatedSeconds: 270,

    instructions:
      "Chwyć drążek nachwytem nieco węziej niż barki. Napnij brzuch, ściągnij łopatki i przyciągnij klatkę w kierunku drążka. Prowadź łokcie w dół i lekko do tyłu.",

    videoUrl:
      "https://www.youtube.com/shorts/0pw8KroIr-M"
  },


  {
    id: "resistance-band-lat-pulldown",
    name: "Ściąganie długiej gumy z góry do klatki",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-high"
    ],

    difficulty: 1,

    movementPattern: "vertical-pull",

    movementTags: [],

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
      "Zamocuj długą gumę oporową wysoko nad sobą. Usiądź lub uklęknij stabilnie i ściągnij dłonie w kierunku górnej części klatki, prowadząc łokcie w dół. Następnie powoli wyprostuj ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/YiMOntCKE8I"
  },


  {
    id: "straight-arm-band-pulldown",
    name: "Ściąganie długiej gumy prostymi ramionami",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "triceps",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-high"
    ],

    difficulty: 1,

    movementPattern: "shoulder-extension",

    movementTags: [
      "straight-arm",
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
      "Zamocuj długą gumę oporową wysoko przed sobą. Utrzymując ramiona prawie wyprostowane, ściągnij dłonie w dół w kierunku bioder. Kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/watch?v=OzYLIIPrndQ"
  },


  {
    id: "one-arm-dumbbell-row",
    name: "Wiosłowanie hantlem jednorącz",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-pull",

    movementTags: [
      "unilateral"
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
      "Pochyl tułów z zachowaniem neutralnych pleców. Przyciągnij hantel w kierunku biodra, prowadząc łokieć blisko tułowia. Ściągnij łopatkę, kontrolowanie opuść ciężar i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/wd3IqM3Y2DU"
  },


  {
    id: "bent-over-dumbbell-row",
    name: "Wiosłowanie hantlami w opadzie tułowia",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-pull",

    movementTags: [
      "hinge-position"
    ],

    workoutRole: "main",

    fatigue: 4,

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
      "Cofnij biodra i pochyl tułów, utrzymując neutralny kręgosłup. Przyciągnij oba hantle w kierunku bioder, prowadząc łokcie do tyłu i ściągając łopatki. Następnie kontrolowanie opuść ciężary.",

    videoUrl:
      "https://www.youtube.com/shorts/IOOLhrkN_NI"
  },


  {
    id: "resistance-band-row",
    name: "Wiosłowanie długą gumą",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-mid"
    ],

    difficulty: 1,

    movementPattern: "horizontal-pull",

    movementTags: [],

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
      "Zamocuj długą gumę oporową stabilnie przed sobą. Przyciągnij dłonie w kierunku żeber, prowadząc łokcie blisko tułowia i ściągając łopatki. Następnie powoli wyprostuj ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/DWl-WW3ScEM"
  },


  {
    id: "kettlebell-row",
    name: "Wiosłowanie kettlebell jednorącz",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-pull",

    movementTags: [
      "unilateral",
      "hinge-position"
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
      min: 3,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Pochyl tułów, cofając biodra i utrzymując neutralne plecy. Przyciągnij kettlebell jedną ręką w kierunku biodra, ściągnij łopatkę i kontrolowanie opuść ciężar. Po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/TO6UHf5Tsbs"
  },


  {
    id: "inverted-row",
    name: "Wiosłowanie australijskie",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-low"
    ],

    difficulty: 2,

    movementPattern: "horizontal-pull",

    movementTags: [
      "bodyweight-row"
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
      min: 3,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Ustaw się pod nisko umieszczonym drążkiem i utrzymuj ciało w jednej linii. Przyciągnij klatkę piersiową w kierunku drążka, ściągając łopatki, a następnie kontrolowanie opuść ciało.",

    videoUrl:
      "https://www.youtube.com/shorts/SmURWHO2v_k"
  },


  {
    id: "renegade-row",
    name: "Wiosłowanie hantlami w podporze",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs",
      "triceps"
    ],

    strongSecondaryBodyParts: ["abs"],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "stable-dumbbell-base"
    ],

    difficulty: 4,

    movementPattern: "horizontal-pull",

    movementTags: [
      "unilateral",
      "stability",
      "anti-rotation",
      "core-emphasis"
    ],

    workoutRole: "secondary",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 6,
      max: 12
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Ustaw się w podporze na stabilnych hantlach. Przyciągnij jeden hantel w kierunku biodra, starając się nie obracać tułowia ani bioder. Opuść ciężar i wykonaj ruch drugą ręką.",

    videoUrl:
      "https://www.youtube.com/watch?v=LccyTxiUrhg"
  },


  {
    id: "seated-resistance-band-row",
    name: "Wiosłowanie długą gumą siedząc",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "horizontal-pull",

    movementTags: [
      "seated",
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
      "Usiądź stabilnie i przełóż długą gumę oporową wokół stóp. Wyprostuj plecy i przyciągnij dłonie w kierunku dolnych żeber, prowadząc łokcie blisko tułowia. Powoli wyprostuj ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/bBpK36TAQww"
  },


  {
    id: "single-arm-band-row",
    name: "Wiosłowanie długą gumą jednorącz",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-mid"
    ],

    difficulty: 1,

    movementPattern: "horizontal-pull",

    movementTags: [
      "unilateral",
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

    estimatedSeconds: 210,

    instructions:
      "Zamocuj długą gumę oporową przed sobą. Przyciągnij ją jedną ręką w kierunku żeber lub biodra, prowadząc łokieć blisko ciała. Ściągnij łopatkę, powoli wyprostuj ramię i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/watch?v=u_86gl58qBM"
  },


  {
    id: "bent-over-kettlebell-row",
    name: "Wiosłowanie kettlebell oburącz w opadzie",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "biceps",
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-pull",

    movementTags: [
      "bilateral",
      "hinge-position"
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
      min: 3,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Chwyć jeden kettlebell oburącz. Cofnij biodra i pochyl tułów, utrzymując neutralne plecy. Przyciągnij kettlebell w kierunku brzucha lub dolnych żeber, ściągając łopatki, a następnie kontrolowanie go opuść.",

    videoUrl:
      "https://www.youtube.com/shorts/JEC5QU-_t1Q"
  },


  {
    id: "reverse-fly-dumbbells",
    name: "Odwrotne rozpiętki z hantlami w opadzie",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-abduction",

    movementTags: [
      "scapular-retraction",
      "rear-delt-emphasis"
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
      "Pochyl tułów, utrzymując neutralne plecy. Unieś lekko ugięte ramiona szeroko na boki, ściągając łopatki. Następnie powoli opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/apcNuGp97sY"
  },


  {
    id: "resistance-band-face-pull",
    name: "Face pull z długą gumą",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-mid"
    ],

    difficulty: 1,

    movementPattern: "horizontal-pull",

    movementTags: [
      "scapular-retraction",
      "external-rotation",
      "band",
      "rear-delt-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 12,
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
      "Zamocuj długą gumę oporową mniej więcej na wysokości twarzy. Przyciągnij dłonie w kierunku twarzy, prowadząc łokcie szeroko i ściągając łopatki. Następnie powoli wyprostuj ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/1s-0WtJMsu8"
  },


  {
    id: "dumbbell-shrug",
    name: "Szrugsy z hantlami",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "forearms",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "scapular-elevation",

    movementTags: [],

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
      "Stań prosto z hantlami po bokach. Unieś barki pionowo w kierunku uszu, zatrzymaj ruch na moment, a następnie kontrolowanie je opuść. Nie wykonuj krążenia barkami.",

    videoUrl:
      "https://www.youtube.com/shorts/j2-RccWDhDo"
  },


  {
    id: "resistance-band-reverse-fly",
    name: "Odwrotne rozpiętki z długą gumą",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "horizontal-abduction",

    movementTags: [
      "scapular-retraction",
      "band",
      "rear-delt-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 12,
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
      "Trzymaj długą gumę oporową przed sobą na wysokości klatki. Rozciągnij ją na boki, prowadząc dłonie szeroko i ściągając łopatki. Następnie powoli wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/hrXMJIxzGlM"
  },


  {
    id: "resistance-band-pull-apart",
    name: "Rozciąganie długiej gumy przed klatką",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "horizontal-abduction",

    movementTags: [
      "scapular-retraction",
      "activation",
      "band",
      "rear-delt-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 1,

    timed: false,

    repRange: {
      min: 12,
      max: 20
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 30,
      max: 60
    },

    estimatedSeconds: 150,

    instructions:
      "Trzymaj długą gumę oporową przed sobą z ramionami prawie wyprostowanymi. Rozciągnij ją na boki i ściągnij łopatki do siebie. Powoli wróć, nie unosząc barków.",

    videoUrl:
      "https://www.youtube.com/shorts/SuvO4TBwSu4"
  },


  {
    id: "resistance-band-shrug",
    name: "Szrugsy z długą gumą",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "scapular-elevation",

    movementTags: [],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 12,
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
      "Stań na długiej gumie oporowej i chwyć jej końce po bokach ciała. Unieś barki pionowo w kierunku uszu, zatrzymaj ruch na moment, a następnie kontrolowanie opuść barki.",

    videoUrl:
      "https://www.youtube.com/shorts/OjHqkDWGXlw"
  },


  {
    id: "dead-hang",
    name: "Zwis na drążku",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "forearms",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 1,

    movementPattern: "hang",

    movementTags: [
      "grip",
      "shoulder-stability",
      "forearm-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: true,

    repRange: null,

    timeRange: {
      min: 20,
      max: 60
    },

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
      "Chwyć drążek i pozwól ciału stabilnie zwisać. Utrzymuj mocny chwyt, lekko napnij brzuch i unikaj kołysania. Zachowaj kontrolę obręczy barkowej przez cały czas.",

    videoUrl:
      "https://www.youtube.com/shorts/dOCQjaasbGs"
  },


  {
    id: "scapular-pull-up",
    name: "Podciąganie łopatek na drążku",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "forearms",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "pull-up-bar",
        quantity: 1
      },
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "bar-high"
    ],

    difficulty: 2,

    movementPattern: "scapular-depression",

    movementTags: [
      "scapular-retraction",
      "activation"
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
      "Zawiśnij na wyprostowanych ramionach. Bez zginania łokci opuść barki i lekko ściągnij łopatki, unosząc ciało o kilka centymetrów. Następnie kontrolowanie wróć do pełnego zwisu.",

    videoUrl:
      "https://www.youtube.com/shorts/9M8ylnbriB0"
  },


  {
    id: "superman",
    name: "Superman",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "glutes",
      "hamstrings",
      "shoulders"
    ],

    strongSecondaryBodyParts: ["glutes"],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "trunk-extension",

    movementTags: [
      "stability",
      "posterior-chain"
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
      "Połóż się na brzuchu z wyprostowanymi rękami i nogami. Unieś ręce, górną część klatki i nogi kilka centymetrów nad podłoże. Zatrzymaj ruch na moment i kontrolowanie wróć.",

    videoUrl:
      "https://www.youtube.com/shorts/KTWWh3GsyYw"
  },


  {
    id: "prone-y-raise",
    name: "Unoszenie ramion w kształcie Y leżąc na brzuchu",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "scapular-control",

    movementTags: [
      "y-raise",
      "activation",
      "shoulder-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 1,

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
      min: 30,
      max: 60
    },

    estimatedSeconds: 150,

    instructions:
      "Połóż się na brzuchu i ustaw ręce ukośnie przed sobą w kształcie litery Y. Lekko unieś ramiona, ściągając łopatki w dół i do siebie. Kontrolowanie opuść ręce.",

    videoUrl:
      "https://www.youtube.com/watch?v=w1AWGKubE5U"
  },


  {
    id: "prone-t-raise",
    name: "Unoszenie ramion w kształcie T leżąc na brzuchu",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "horizontal-abduction",

    movementTags: [
      "scapular-retraction",
      "t-raise",
      "activation",
      "shoulder-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 1,

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
      min: 30,
      max: 60
    },

    estimatedSeconds: 150,

    instructions:
      "Połóż się na brzuchu i wyprostuj ramiona na boki w kształcie litery T. Unieś ramiona kilka centymetrów, ściągając łopatki do siebie, a następnie kontrolowanie je opuść.",

    videoUrl:
      "https://www.youtube.com/shorts/i-jEU2pBdzM"
  },


  {
    id: "prone-w-raise",
    name: "Unoszenie ramion w kształcie W leżąc na brzuchu",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders"
    ],

    strongSecondaryBodyParts: ["shoulders"],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "scapular-control",

    movementTags: [
      "scapular-retraction",
      "external-rotation",
      "w-raise",
      "activation",
      "shoulder-emphasis"
    ],

    workoutRole: "accessory",

    fatigue: 1,

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
      min: 30,
      max: 60
    },

    estimatedSeconds: 150,

    instructions:
      "Połóż się na brzuchu i ugnij łokcie tak, aby ramiona utworzyły kształt litery W. Unieś dłonie i łokcie lekko nad podłoże, ściągając łopatki w dół i do siebie.",

    videoUrl:
      "https://www.youtube.com/shorts/lWta671_6mE"
  },


  {
    id: "prone-cobra",
    name: "Cobra leżąc na brzuchu",

    primaryBodyPart: "back",

    secondaryBodyParts: [
      "shoulders",
      "glutes"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "trunk-extension",

    movementTags: [
      "scapular-retraction",
      "isometric",
      "activation"
    ],

    workoutRole: "accessory",

    fatigue: 1,

    timed: true,

    repRange: null,

    timeRange: {
      min: 15,
      max: 30
    },

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 30,
      max: 60
    },

    estimatedSeconds: 150,

    instructions:
      "Połóż się na brzuchu z rękami wzdłuż tułowia. Unieś lekko klatkę oraz dłonie, ściągnij łopatki w dół i do siebie i utrzymuj szyję neutralnie. Wytrzymaj przez wyznaczony czas.",

    videoUrl:
      "https://www.youtube.com/shorts/HyZDhy6EaSQ"
  }

];


/* =========================================
   UDOSTĘPNIENIE MODUŁU
   ========================================= */

window.BackExercises =
  backExercises;