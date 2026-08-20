/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — KLATKA PIERSIOWA
   chest.js
   v1.1
   ========================================= */

const chestExercises = [

  {
    id: "barbell-bench-press",
    name: "Wyciskanie sztangi leżąc",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "barbell",
        quantity: 1
      },
      {
        type: "bench",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-push",

    movementTags: [
      "bench-press",
      "compound"
    ],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 5,
      max: 12
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 5
    },

    restRange: {
      min: 90,
      max: 180
    },

    estimatedSeconds: 300,

    instructions:
      "Połóż się stabilnie na ławce, ściągnij łopatki i oprzyj stopy o podłoże. Opuść sztangę kontrolowanie do klatki i wypchnij ją w górę, zachowując stabilną pozycję.",

    videoUrl:
      "https://www.youtube.com/shorts/PTzUJkPrrDw"
  },


  {
    id: "dumbbell-floor-press",
    name: "Wyciskanie hantli leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "compound"
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
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Połóż się na plecach z ugiętymi kolanami. Wypchnij hantle nad klatkę, a następnie opuszczaj je kontrolowanie, aż ramiona lekko dotkną podłoża.",

    videoUrl:
      "https://www.youtube.com/shorts/mTaiQemkEpU"
  },


  {
    id: "push-up",
    name: "Pompki klasyczne",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "stability",
      "compound"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 6,
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
      "Ustaw ciało w jednej linii i napnij brzuch oraz pośladki. Opuść klatkę w kierunku podłoża i odepchnij się do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/c-lBErfxszs"
  },


  {
    id: "knee-push-up",
    name: "Pompki na kolanach",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
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

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "stability",
      "assisted-variation"
    ],

    workoutRole: "secondary",

    fatigue: 1,

    timed: false,

    repRange: {
      min: 8,
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

    estimatedSeconds: 150,

    instructions:
      "Oprzyj kolana o podłoże i utrzymuj prostą linię od kolan do głowy. Opuść klatkę kontrolowanie i odepchnij się do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/FZZA4XscUW8"
  },


  {
    id: "dumbbell-squeeze-press-floor",
    name: "Wyciskanie hantli z dociskiem leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "squeeze"
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
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Leżąc na podłodze, trzymaj hantle razem nad klatką i stale dociskaj je do siebie. Opuszczaj i wypychaj ciężar, nie tracąc docisku.",

    videoUrl:
      "https://www.youtube.com/shorts/1FET7CSUXJc"
  },


  {
    id: "wide-push-up",
    name: "Pompki z szerokim rozstawem dłoni",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "shoulders",
      "triceps",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "wide-grip",
      "stability"
    ],

    workoutRole: "secondary",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 6,
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
      "Ustaw dłonie szerzej niż barki i utrzymuj ciało w jednej linii. Opuść klatkę kontrolowanie, a następnie odepchnij się do góry.",

    videoUrl:
      "https://www.youtube.com/shorts/B-wzr02OO1g"
  },


  {
    id: "resistance-band-chest-press",
    name: "Wyciskanie długiej gumy na klatkę",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    movementPattern: "horizontal-push",

    movementTags: [
      "band",
      "chest-press",
      "stability"
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
      "Zaczep długą gumę oporową za sobą mniej więcej na wysokości klatki piersiowej. Napnij brzuch, wypchnij ręce przed siebie i kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/cd5MqVorBH0"
  },


  {
    id: "resistance-band-chest-fly",
    name: "Rozpiętki z długą gumą",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
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

    movementPattern: "horizontal-adduction",

    movementTags: [
      "fly",
      "band"
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
      "Zaczep długą gumę oporową za sobą mniej więcej na wysokości klatki piersiowej. Prowadź lekko ugięte ramiona szerokim łukiem przed klatkę. Powoli wróć, utrzymując napięcie gumy.",

    videoUrl:
      "https://www.youtube.com/shorts/PqoL7FOD_Aw"
  },


  {
    id: "dumbbell-chest-fly-floor",
    name: "Rozpiętki z hantlami leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
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

    difficulty: 2,

    movementPattern: "horizontal-adduction",

    movementTags: [
      "fly",
      "floor"
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
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Leżąc na podłodze, trzymaj hantle nad klatką z lekko ugiętymi łokciami. Opuść ramiona szerokim łukiem i przywiedź je ponownie nad klatkę.",

    videoUrl:
      "https://www.youtube.com/watch?v=bgC53-J-6gA"
  },


  {
    id: "double-kettlebell-floor-press",
    name: "Wyciskanie dwóch kettlebell leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "compound",
      "bilateral"
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
      min: 2,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Leżąc na podłodze, trzymaj dwa kettlebelle po bokach klatki. Wypchnij je w górę, utrzymując stabilne nadgarstki, a następnie kontrolowanie opuść ramiona do podłoża.",

    videoUrl: ""
  },


  {
    id: "single-kettlebell-floor-press",
    name: "Jednorącz wyciskanie kettlebell leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [
      "abs"
    ],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "unilateral",
      "stability",
      "anti-rotation"
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
      max: 120
    },

    estimatedSeconds: 300,

    instructions:
      "Trzymaj kettlebell w jednej dłoni przy klatce. Wypchnij ciężar w górę, stabilizując tułów i ograniczając jego rotację, a następnie kontrolowanie opuść ramię. Po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/watch?v=GEY6kc26kZY"
  },


  {
    id: "resistance-band-low-to-high-fly",
    name: "Rozpiętki z długą gumą od dołu do góry",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
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
      "anchor-low"
    ],

    difficulty: 2,

    movementPattern: "horizontal-adduction",

    movementTags: [
      "fly",
      "band",
      "low-to-high"
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
      "Zaczep długą gumę oporową nisko za sobą. Prowadź lekko ugięte ramiona łukiem do przodu i ku górze, a następnie kontrolowanie wróć.",

    videoUrl:
      "https://www.youtube.com/watch?v=POOzv5VF6sI"
  },


  {
    id: "resistance-band-high-to-low-fly",
    name: "Rozpiętki z długą gumą z góry do dołu",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
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

    difficulty: 2,

    movementPattern: "horizontal-adduction",

    movementTags: [
      "fly",
      "band",
      "high-to-low"
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
      "Zaczep długą gumę oporową wysoko za sobą. Prowadź lekko ugięte ramiona łukiem do przodu i w dół, a następnie spokojnie wróć.",

    videoUrl:
      "https://www.youtube.com/watch?v=LHcvAuDLqvg"
  },


  {
    id: "kettlebell-crush-press-floor",
    name: "Wyciskanie kettlebell z dociskiem leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders"
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

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "squeeze"
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
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Chwyć kettlebell oburącz nad klatką i utrzymuj mocny docisk dłoni. Wypchnij ciężar w górę, po czym kontrolowanie opuść go do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/watch?v=v-zeDF4m8Nw"
  },


  {
    id: "dumbbell-pullover-floor",
    name: "Pullover z hantlem leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "back",
      "triceps",
      "shoulders"
    ],

    strongSecondaryBodyParts: [
      "back"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "shoulder-extension",

    movementTags: [
      "pullover",
      "multi-muscle",
      "back-emphasis"
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
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj jeden hantel oburącz nad klatką. Prowadź go kontrolowanie za głowę w bezpiecznym zakresie, a następnie wróć nad klatkę, utrzymując stabilny tułów.",

    videoUrl:
      "https://www.youtube.com/shorts/kuhaRRSK1Js"
  },


  {
    id: "kettlebell-pullover-floor",
    name: "Pullover z kettlebell leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "back",
      "triceps",
      "shoulders"
    ],

    strongSecondaryBodyParts: [
      "back"
    ],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "shoulder-extension",

    movementTags: [
      "pullover",
      "multi-muscle",
      "back-emphasis"
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
      max: 90
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj kettlebell oburącz nad klatką. Prowadź ciężar kontrolowanie za głowę, a następnie przyciągnij go z powrotem, utrzymując napięty brzuch.",

    videoUrl:
      "https://www.youtube.com/watch?v=hbiDlO7VBxs"
  },


  {
    id: "dumbbell-svend-press",
    name: "Wyciskanie hantla z dociskiem przed klatką",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "shoulders",
      "triceps"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "horizontal-push",

    movementTags: [
      "squeeze",
      "svend-press"
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
      "Trzymaj jeden hantel oburącz przed klatką i mocno go dociskaj. Wypchnij ciężar przed siebie, a następnie kontrolowanie przyciągnij go z powrotem do klatki.",

    videoUrl:
      "https://www.youtube.com/shorts/OZ1thS_rrpg"
  },


  {
    id: "push-up-with-resistance-band",
    name: "Pompki z długą gumą oporową",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      },
      {
        type: "resistance-band",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "band",
      "progressive-resistance",
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
      "Przełóż długą gumę oporową przez górną część pleców i przytrzymaj jej końce pod dłońmi. Wykonuj pompki, pokonując rosnący opór gumy podczas wypychania.",

    videoUrl:
      "https://www.youtube.com/shorts/RYV6D14cI0s"
  },


  {
    id: "push-up-to-dumbbell-row",
    name: "Pompka z wiosłowaniem hantlem",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "back",
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [
      "back",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      },
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [
      "stable-dumbbell-base"
    ],

    difficulty: 4,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "horizontal-pull",
      "compound-combination",
      "stability",
      "anti-rotation",
      "unilateral",
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

    estimatedSeconds: 300,

    instructions:
      "Wykonaj pompkę, a następnie przyciągnij jeden hantel w kierunku biodra. Ograniczaj rotację tułowia i zmieniaj stronę po kolejnych powtórzeniach.",

    videoUrl:
      "https://www.youtube.com/shorts/01Rq3iZYxqg"
  },


  {
    id: "plyometric-push-up",
    name: "Pompki plyometryczne",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 4,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "explosive",
      "power"
    ],

    workoutRole: "finisher",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 4,
      max: 10
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 4
    },

    restRange: {
      min: 90,
      max: 150
    },

    estimatedSeconds: 240,

    instructions:
      "Opuść ciało jak przy klasycznej pompce, a następnie dynamicznie odepchnij się tak, aby dłonie oderwały się od podłoża. Ląduj miękko i zachowuj kontrolę.",

    videoUrl:
      "https://www.youtube.com/watch?v=QcAAKuEgYjw"
  },


  {
    id: "alternating-dumbbell-floor-press",
    name: "Naprzemienne wyciskanie hantli leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "alternating",
      "stability"
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
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Trzymaj oba hantle nad klatką i opuszczaj je naprzemiennie. Utrzymuj drugą rękę stabilnie oraz napinaj brzuch przez całą serię.",

    videoUrl:
      "https://www.youtube.com/watch?v=FTB9c8CxPQo"
  },


  {
    id: "push-up-with-shoulder-tap",
    name: "Pompka z dotknięciem barku",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
      "shoulders",
      "abs"
    ],

    strongSecondaryBodyParts: [
      "abs"
    ],

    requiredEquipment: [
      {
        type: "bodyweight",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "horizontal-push",

    movementTags: [
      "push-up",
      "bodyweight",
      "stability",
      "anti-rotation",
      "core-emphasis"
    ],

    workoutRole: "secondary",

    fatigue: 3,

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
      max: 90
    },

    estimatedSeconds: 210,

    instructions:
      "Po każdej pompce dotknij jedną dłonią przeciwnego barku. Utrzymuj biodra możliwie nieruchomo i zmieniaj strony.",

    videoUrl:
      "https://www.youtube.com/shorts/n2jS_QxIcos"
  },


  {
    id: "dumbbell-floor-fly-to-press",
    name: "Rozpiętki z hantlami z przejściem do wyciskania",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    difficulty: 3,

    movementPattern: "horizontal-adduction",

    movementTags: [
      "fly",
      "floor-press",
      "horizontal-push",
      "compound-combination"
    ],

    workoutRole: "accessory",

    fatigue: 3,

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
      min: 60,
      max: 90
    },

    estimatedSeconds: 210,

    instructions:
      "Wykonaj rozpiętkę na podłodze, wróć z hantlami nad klatkę i wykonaj wyciskanie. Oba ruchy traktuj jako jedno powtórzenie.",

    videoUrl:
      "https://www.youtube.com/shorts/Y5mwx0SvRe4"
  },


  {
    id: "neutral-grip-dumbbell-floor-press",
    name: "Wyciskanie hantli chwytem neutralnym leżąc na podłodze",

    primaryBodyPart: "chest",

    secondaryBodyParts: [
      "triceps",
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

    difficulty: 2,

    movementPattern: "horizontal-push",

    movementTags: [
      "floor-press",
      "neutral-grip"
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
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Leżąc na podłodze, trzymaj hantle chwytem neutralnym i prowadź łokcie bliżej tułowia. Wypchnij ciężary w górę i kontrolowanie opuść.",

    videoUrl:
      "https://www.youtube.com/watch?v=rs05AtccEhg"
  }

];


/* =========================================
   UDOSTĘPNIENIE MODUŁU
   ========================================= */

window.ChestExercises =
  chestExercises;