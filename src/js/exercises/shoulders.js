/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — BARKI
   shoulders.js
   v1.0
   ========================================= */

const shoulderExercises = [

  {
    id: "dumbbell-shoulder-press",
    name: "Wyciskanie hantli nad głowę",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "vertical-push",

    movementTags: [],

    workoutRole: "main",

    fatigue: 4,

    timed: false,

    repRange: {
      min: 6,
      max: 12
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
      "Stań stabilnie i trzymaj hantle na wysokości barków. Napnij brzuch i pośladki, a następnie wypchnij hantle nad głowę do prawie pełnego wyprostu ramion. Nie wyginaj nadmiernie dolnej części pleców. Następnie kontrolowanie opuść hantle do wysokości barków.",

    videoUrl:
      "https://www.youtube.com/shorts/k6tzKisR3NY"
  },


  {
    id: "single-arm-kettlebell-shoulder-press",
    name: "Jednorącz wyciskanie kettlebell nad głowę",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
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

    movementPattern: "vertical-push",

    movementTags: [
      "unilateral",
      "stability"
    ],

    workoutRole: "main",

    fatigue: 3,

    timed: false,

    repRange: {
      min: 6,
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
      "Stań stabilnie i trzymaj kettlebell przy barku w pozycji rack. Napnij brzuch i pośladki, a następnie wypchnij ciężar pionowo nad głowę. Nie przechylaj tułowia na bok ani nie odchylaj się do tyłu. Kontrolowanie opuść kettlebell i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/Pnr37xl8kgs"
  },


  {
    id: "dumbbell-lateral-raise",
    name: "Unoszenie hantli bokiem",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "shoulder-abduction",

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
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Stań prosto z hantlami po bokach ciała i lekko ugnij łokcie. Unieś ramiona na boki mniej więcej do wysokości barków, bez szarpania i bez unoszenia barków w kierunku uszu. Następnie powoli opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/xyK8UiC-BUw"
  },


  {
    id: "dumbbell-front-raise",
    name: "Unoszenie hantli w przód",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "chest",
      "traps"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "shoulder-flexion",

    movementTags: [],

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
      "Stań prosto z hantlami przed udami. Unieś ramiona przed siebie mniej więcej do wysokości barków. Nie kołysz tułowiem ani nie pomagaj sobie zamachem. Następnie kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/h9xfpTrAvkE"
  },


  {
    id: "resistance-band-lateral-raise",
    name: "Unoszenie ramion bokiem z gumą",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "shoulder-abduction",

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
      "Stań na środku gumy i chwyć jej końce po bokach ciała. Unieś ramiona na boki do mniej więcej wysokości barków. Utrzymuj tułów nieruchomo i nie pomagaj sobie zamachem. Następnie powoli opuść ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/__0jIbOwnfI"
  },


  {
    id: "resistance-band-front-raise",
    name: "Unoszenie ramion w przód z gumą",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "chest",
      "traps"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "shoulder-flexion",

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
      "Stań na środku gumy i trzymaj jej końce przed udami. Unieś ramiona przed siebie mniej więcej do wysokości barków. Nie odchylaj tułowia i nie używaj zamachu. Następnie powoli opuść ramiona.",

    videoUrl:
      "https://www.youtube.com/shorts/pYVlZiu2Mps"
  },


  {
    id: "arnold-press",
    name: "Wyciskanie Arnolda",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "vertical-push",

    movementTags: [
      "rotation"
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
      "Trzymaj hantle przed barkami z dłońmi skierowanymi do siebie. Podczas wyciskania obracaj ramiona na zewnątrz, tak aby w górnej pozycji dłonie były skierowane do przodu. Następnie kontrolowanie odwróć ruch.",

    videoUrl:
      "https://www.youtube.com/shorts/6K_N9AGhItQ"
  },


  {
    id: "pike-push-up",
    name: "Pompki pike",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
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

    movementPattern: "vertical-push",

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
      max: 120
    },

    estimatedSeconds: 210,

    instructions:
      "Ustaw ciało w odwróconą literę V z biodrami wysoko. Ugnij łokcie i kontrolowanie opuszczaj głowę w kierunku podłoża. Następnie odepchnij się do pozycji wyjściowej, skupiając pracę na barkach.",

    videoUrl:
      "https://www.youtube.com/shorts/eG20L9cl81w"
  },


  {
    id: "resistance-band-shoulder-press",
    name: "Wyciskanie gumy nad głowę",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "vertical-push",

    movementTags: [],

    workoutRole: "secondary",

    fatigue: 3,

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
      min: 60,
      max: 90
    },

    estimatedSeconds: 210,

    instructions:
      "Stań na środku gumy i trzymaj jej końce na wysokości barków. Napnij brzuch i pośladki, a następnie wypchnij dłonie pionowo nad głowę. Nie odchylaj tułowia do tyłu. Kontrolowanie wróć do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/3KFECHGL9vM"
  },


  {
    id: "kettlebell-lateral-raise",
    name: "Unoszenie kettlebell bokiem",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "shoulder-abduction",

    movementTags: [
      "unilateral"
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
      "Trzymaj kettlebell jedną ręką przy boku. Unieś ramię na bok mniej więcej do wysokości barku, bez przechylania tułowia i bez zamachu. Kontrolowanie opuść ciężar i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/77bxysmjs7Y"
  },


  {
    id: "kettlebell-front-raise",
    name: "Unoszenie kettlebell w przód",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "chest",
      "traps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "shoulder-flexion",

    movementTags: [
      "unilateral"
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
      "Trzymaj kettlebell jedną ręką przed udem. Unieś ciężar przed siebie do mniej więcej wysokości barku, bez odchylania tułowia. Kontrolowanie opuść kettlebell i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/x3NfXXVArQY"
  },


  {
    id: "upright-row-dumbbells",
    name: "Podciąganie hantli wzdłuż tułowia",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps",
      "biceps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "upright-row",

    movementTags: [
      "shoulder-abduction"
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

    estimatedSeconds: 210,

    instructions:
      "Stań prosto z hantlami przed udami. Przyciągnij hantle wzdłuż tułowia, prowadząc łokcie na boki i ku górze. Zatrzymaj ruch w komfortowym zakresie, a następnie kontrolowanie opuść ciężary.",

    videoUrl:
      "https://www.youtube.com/shorts/fbc8FrvjFHk"
  },


  {
    id: "kettlebell-upright-row",
    name: "Podciąganie kettlebell wzdłuż tułowia",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps",
      "biceps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "kettlebell",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "upright-row",

    movementTags: [],

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

    estimatedSeconds: 210,

    instructions:
      "Trzymaj kettlebell oburącz przed udami. Przyciągnij ciężar wzdłuż tułowia, prowadząc łokcie na boki i ku górze. Zatrzymaj ruch w komfortowym zakresie, a następnie kontrolowanie opuść kettlebell.",

    videoUrl:
      "https://www.youtube.com/shorts/_E2wnqjBciE"
  },


  {
    id: "dumbbell-y-raise",
    name: "Unoszenie hantli w kształcie Y",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "traps"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "scapular-plane-raise",

    movementTags: [
      "y-raise",
      "scapular-control"
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
      "Trzymaj lekkie hantle przed sobą i unieś ramiona ukośnie do góry oraz na boki tak, aby utworzyły kształt litery Y. Nie unoś barków do uszu i nie używaj zamachu. Następnie kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/ms5xXcaWwSA"
  },


  {
    id: "dumbbell-shoulder-press-neutral-grip",
    name: "Wyciskanie hantli nad głowę chwytem neutralnym",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "vertical-push",

    movementTags: [
      "neutral-grip"
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
      min: 3,
      max: 4
    },

    restRange: {
      min: 75,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Trzymaj hantle na wysokości barków z dłońmi skierowanymi do siebie. Wypchnij ciężary pionowo nad głowę, utrzymując łokcie lekko przed linią barków. Kontrolowanie opuść hantle do pozycji wyjściowej.",

    videoUrl:
      "https://www.youtube.com/shorts/aO_1PB0X_lU"
  },


  {
    id: "single-arm-dumbbell-shoulder-press",
    name: "Jednorącz wyciskanie hantla nad głowę",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "abs",
      "chest"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "vertical-push",

    movementTags: [
      "unilateral",
      "stability"
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
      min: 3,
      max: 4
    },

    restRange: {
      min: 60,
      max: 120
    },

    estimatedSeconds: 240,

    instructions:
      "Trzymaj jeden hantel na wysokości barku. Napnij brzuch i wypchnij ciężar pionowo nad głowę bez przechylania tułowia. Kontrolowanie opuść hantel i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/KLSYjgShghk"
  },


  {
    id: "resistance-band-upright-row",
    name: "Podciąganie gumy wzdłuż tułowia",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps",
      "biceps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "upright-row",

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
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Stań na środku gumy i chwyć jej końce przed udami. Przyciągnij dłonie wzdłuż tułowia, prowadząc łokcie na boki i ku górze. Zatrzymaj ruch w komfortowym zakresie i kontrolowanie opuść ręce.",

    videoUrl:
      "https://www.youtube.com/shorts/VyS7ifbL8vw"
  },


  {
    id: "dumbbell-external-rotation",
    name: "Rotacja zewnętrzna barku z hantlem",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 1
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "external-rotation",

    movementTags: [
      "shoulder-stability",
      "unilateral"
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
      "Trzymaj lekki hantel w jednej dłoni, z łokciem ugiętym około 90 stopni i blisko tułowia. Obróć przedramię na zewnątrz bez odrywania łokcia od boku. Powoli wróć i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/Nhq49UJefwI"
  },


  {
    id: "resistance-band-external-rotation",
    name: "Rotacja zewnętrzna barku z gumą",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-mid"
    ],

    difficulty: 1,

    movementPattern: "external-rotation",

    movementTags: [
      "shoulder-stability",
      "unilateral"
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
      "Zamocuj gumę mniej więcej na wysokości łokcia i stań bokiem do punktu zaczepienia. Utrzymuj łokieć przy tułowiu i obracaj przedramię na zewnątrz. Powoli wróć i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/FeCio_IImxc"
  },


  {
    id: "kettlebell-halo",
    name: "Halo z kettlebell",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "back",
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

    movementPattern: "shoulder-circumduction",

    movementTags: [
      "shoulder-stability",
      "mobility"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 6,
      max: 10
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
      "Trzymaj kettlebell oburącz przed klatką. Prowadź ciężar powoli wokół głowy, utrzymując napięty brzuch i kontrolując ruch barków. Wykonaj pełny obieg i następnie zmień kierunek.",

    videoUrl:
      "https://www.youtube.com/shorts/7oPYzH80bM4"
  },


  {
    id: "dumbbell-around-the-world",
    name: "Krążenie hantlami wokół ciała",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "traps",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "shoulder-circumduction",

    movementTags: [
      "mobility"
    ],

    workoutRole: "accessory",

    fatigue: 2,

    timed: false,

    repRange: {
      min: 6,
      max: 10
    },

    timeRange: null,

    setRange: {
      min: 2,
      max: 3
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Trzymaj lekkie hantle przed udami i prowadź ramiona szerokim łukiem na boki oraz do góry. Następnie kontrolowanie wróć tą samą drogą. Używaj lekkiego ciężaru i nie wykonuj ruchu z zamachu.",

    videoUrl:
      "https://www.youtube.com/shorts/uhLsEvxSYBY"
  },


  {
    id: "dumbbell-cuban-press",
    name: "Cuban press z hantlami",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "triceps",
      "forearms"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 3,

    movementPattern: "vertical-push",

    movementTags: [
      "external-rotation",
      "compound-combination",
      "shoulder-stability"
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
      max: 3
    },

    restRange: {
      min: 45,
      max: 75
    },

    estimatedSeconds: 180,

    instructions:
      "Unieś łokcie do wysokości barków i utrzymuj je ugięte około 90 stopni. Obróć przedramiona do góry, a następnie wyciśnij hantle nad głowę. Wróć kontrolowanie tą samą drogą i używaj lekkiego ciężaru.",

    videoUrl:
      "https://www.youtube.com/shorts/rv41bj3JTkQ"
  },


  {
    id: "single-arm-diagonal-band-press",
    name: "Jednorącz wyciskanie gumy po skosie w górę",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "triceps",
      "chest",
      "abs"
    ],

    requiredEquipment: [
      {
        type: "bands",
        quantity: 1
      }
    ],

    equipmentConditions: [
      "anchor-low"
    ],

    difficulty: 2,

    movementPattern: "diagonal-push",

    movementTags: [
      "unilateral",
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
      max: 90
    },

    estimatedSeconds: 210,

    instructions:
      "Zamocuj gumę nisko za sobą i chwyć ją jedną ręką na wysokości barku. Wypchnij dłoń po skosie do góry i lekko przed siebie. Utrzymuj stabilny tułów, kontrolowanie wróć i po serii zmień stronę.",

    videoUrl:
      "https://www.youtube.com/shorts/h4y1HPWPYMg"
  },


  {
    id: "dumbbell-rear-delt-row",
    name: "Wiosłowanie hantlami na tył barków",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "back",
      "traps",
      "biceps"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 2,

    movementPattern: "horizontal-pull",

    movementTags: [
      "rear-delt",
      "elbows-out"
    ],

    workoutRole: "accessory",

    fatigue: 3,

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
      "Pochyl tułów z neutralnym kręgosłupem i trzymaj hantle pod sobą. Przyciągnij je w kierunku górnej części tułowia, prowadząc łokcie szeroko na boki. Skup się na tylnej części barków i kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/UikHRgJhnBY"
  },


  {
    id: "dumbbell-scaption-raise",
    name: "Unoszenie hantli po skosie w przód",

    primaryBodyPart: "shoulders",

    secondaryBodyParts: [
      "traps",
      "back"
    ],

    requiredEquipment: [
      {
        type: "dumbbells",
        quantity: 2
      }
    ],

    equipmentConditions: [],

    difficulty: 1,

    movementPattern: "scapular-plane-raise",

    movementTags: [],

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
      "Stań stabilnie z hantlami po bokach ciała. Unieś ramiona po skosie do przodu, mniej więcej 30–45 stopni od linii tułowia. Zatrzymaj ruch około wysokości barków i kontrolowanie opuść hantle.",

    videoUrl:
      "https://www.youtube.com/shorts/x3UaLA8DoGc"
  }

];


/* =========================================
   UDOSTĘPNIENIE MODUŁU
   ========================================= */

window.ShoulderExercises =
  shoulderExercises;