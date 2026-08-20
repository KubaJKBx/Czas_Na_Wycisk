/* =========================================
   K&K — Czas na Wycisk!
   BAZA ĆWICZEŃ — NOGI
   legs.js
   v1.1
   ========================================= */

const legExercises = [

  {
    id: "bodyweight-squat",
    name: "Przysiad z masą własnego ciała",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "squat",
    movementTags: ["squat", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań ze stopami mniej więcej na szerokość barków i skieruj palce lekko na zewnątrz. Cofnij biodra i ugnij kolana, schodząc w dół tak głęboko, jak pozwala komfortowy zakres ruchu. Utrzymuj klatkę piersiową uniesioną, kolana prowadź w kierunku palców stóp i nie pozwalaj im zapadać się do środka. Następnie odepchnij się całymi stopami od podłoża i wróć do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/-5LhNSMBrEs"
  },

  {
    id: "goblet-squat",
    name: "Goblet squat",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "back"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [],
    equipmentOptions: [
      [
        { type: "dumbbells", quantity: 1 }
      ],
      [
        { type: "kettlebell", quantity: 1 }
      ]
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "squat",
    movementTags: ["squat", "goblet", "weighted"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań ze stopami mniej więcej na szerokość barków i trzymaj hantel lub kettlebell oburącz przy klatce piersiowej. Cofnij biodra i ugnij kolana, schodząc w dół tak głęboko, jak pozwala komfortowy zakres ruchu. Utrzymuj klatkę piersiową uniesioną, kolana prowadź w kierunku palców stóp i nie pozwalaj im zapadać się do środka. Następnie odepchnij się całymi stopami od podłoża i wróć do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/yTDROg8zZsU"
  },

  {
    id: "dumbbell-squat",
    name: "Przysiad z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "back"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "squat",
    movementTags: ["squat", "weighted", "bilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań ze stopami mniej więcej na szerokość barków i trzymaj hantle po bokach ciała. Cofnij biodra i ugnij kolana, schodząc w dół w kontrolowanym zakresie. Utrzymuj neutralną pozycję kręgosłupa, kolana prowadź w kierunku palców stóp i nie pozwalaj im zapadać się do środka. Następnie odepchnij się całymi stopami od podłoża i wróć do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/OTyb4YUDYYY"
  },

  {
    id: "reverse-lunge",
    name: "Wykroki w tył",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "reverse", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań prosto i wykonaj długi krok jedną nogą w tył. Ugnij oba kolana, opuszczając ciało w dół, aż przednie udo zbliży się do pozycji równoległej do podłoża. Utrzymuj przednie kolano w linii z palcami stopy i stabilny tułów. Odepchnij się przednią nogą i wróć do pozycji stojącej, a następnie zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/b_2qgdXT_QQ"
  },

  {
    id: "forward-lunge",
    name: "Wykroki w przód",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "forward", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań prosto i wykonaj kontrolowany krok jedną nogą w przód. Ugnij oba kolana, opuszczając ciało w dół, aż przednie udo zbliży się do pozycji równoległej do podłoża. Utrzymuj kolano przedniej nogi w linii z palcami stopy i stabilny tułów. Odepchnij się przednią nogą, wróć do pozycji stojącej i wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/wkPpcAqvats"
  },

  {
    id: "walking-lunge",
    name: "Wykroki chodzone",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge-locomotion",
    movementTags: ["lunge", "walking", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 240,
    instructions: "Stań prosto i wykonaj krok do przodu, opuszczając ciało do wykroku. Utrzymuj przednie kolano w linii z palcami stopy i stabilny tułów. Odepchnij się tylną nogą, przenieś ją do przodu i od razu przejdź do kolejnego wykroku drugą stroną. Poruszaj się płynnie i kontrolowanie przez całą serię.",
    videoUrl: "https://www.youtube.com/shorts/y5NZOpxcALQ"
  },

  {
    id: "dumbbell-reverse-lunge",
    name: "Wykroki w tył z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "reverse", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto z hantlami trzymanymi po bokach ciała. Wykonaj długi krok jedną nogą w tył i ugnij oba kolana, opuszczając ciało w dół. Utrzymuj przednie kolano w linii z palcami stopy, a tułów stabilnie. Odepchnij się przednią nogą i wróć do pozycji stojącej, a następnie wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/J9MpoAQCjos"
  },

  {
    id: "kettlebell-reverse-lunge",
    name: "Wykroki w tył z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "reverse", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto i trzymaj kettlebell oburącz przy klatce piersiowej lub jednorącz w pozycji rack. Wykonaj długi krok jedną nogą w tył i ugnij oba kolana, opuszczając ciało w dół. Utrzymuj przednie kolano w linii z palcami stopy i stabilny tułów. Odepchnij się przednią nogą i wróć do pozycji stojącej, a następnie wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/NjsoHmFrEZ0"
  },

  {
    id: "dumbbell-forward-lunge",
    name: "Wykroki w przód z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "forward", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto z hantlami trzymanymi po bokach ciała. Wykonaj kontrolowany krok jedną nogą w przód i ugnij oba kolana, opuszczając ciało w dół. Utrzymuj przednie kolano w linii z palcami stopy i stabilny tułów. Odepchnij się przednią nogą, wróć do pozycji stojącej i wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/Qo2J__a9ue8"
  },

  {
    id: "kettlebell-forward-lunge",
    name: "Wykroki w przód z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "forward", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto i trzymaj kettlebell oburącz przy klatce piersiowej lub jednorącz w pozycji rack. Wykonaj kontrolowany krok jedną nogą w przód i ugnij oba kolana, opuszczając ciało w dół. Utrzymuj przednie kolano w linii z palcami stopy i stabilny tułów. Odepchnij się przednią nogą, wróć do pozycji stojącej i wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/DM0B6wOSJc0"
  },

  {
    id: "dumbbell-walking-lunge",
    name: "Wykroki chodzone z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge-locomotion",
    movementTags: ["lunge", "walking", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto z hantlami trzymanymi po bokach ciała. Wykonaj krok do przodu i opuść ciało do wykroku, utrzymując przednie kolano w linii z palcami stopy. Odepchnij się tylną nogą, przenieś ją do przodu i od razu przejdź do kolejnego wykroku drugą stroną. Utrzymuj stabilny tułów i wykonuj ruch płynnie oraz kontrolowanie.",
    videoUrl: "https://www.youtube.com/shorts/Tc1TsAdoDRo"
  },

  {
    id: "bulgarian-split-squat",
    name: "Przysiad bułgarski",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 3,
    movementPattern: "single-leg-squat",
    movementTags: ["split-squat", "bulgarian", "unilateral"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań tyłem do stabilnego podwyższenia i oprzyj na nim grzbiet jednej stopy. Przednią stopę ustaw na tyle daleko, aby podczas zejścia kolano mogło poruszać się swobodnie w linii z palcami stopy. Opuść ciało w dół, uginając przednią nogę, a następnie odepchnij się całą stopą i wróć do pozycji wyjściowej. Utrzymuj stabilny tułów i nie pozwalaj kolanu zapadać się do środka.",
    videoUrl: "https://www.youtube.com/shorts/or1frhkjBDc"
  },

  {
    id: "dumbbell-bulgarian-split-squat",
    name: "Przysiad bułgarski z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 3,
    movementPattern: "single-leg-squat",
    movementTags: ["split-squat", "bulgarian", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań tyłem do stabilnego podwyższenia i oprzyj na nim grzbiet jednej stopy. Trzymaj hantle po bokach ciała. Opuść ciało w dół, uginając przednią nogę i utrzymując kolano w linii z palcami stopy. Następnie odepchnij się całą przednią stopą i wróć do pozycji wyjściowej. Utrzymuj stabilny tułów i nie pozwalaj kolanu zapadać się do środka.",
    videoUrl: "https://www.youtube.com/shorts/zXYKJ490RVo"
  },

  {
    id: "kettlebell-bulgarian-split-squat",
    name: "Przysiad bułgarski z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 3,
    movementPattern: "single-leg-squat",
    movementTags: ["split-squat", "bulgarian", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań tyłem do stabilnego podwyższenia i oprzyj na nim grzbiet jednej stopy. Trzymaj kettlebell oburącz przy klatce piersiowej lub jednorącz w pozycji rack. Opuść ciało w dół, uginając przednią nogę i utrzymując kolano w linii z palcami stopy. Następnie odepchnij się całą przednią stopą i wróć do pozycji wyjściowej. Utrzymuj stabilny tułów i nie pozwalaj kolanu zapadać się do środka.",
    videoUrl: "https://www.youtube.com/shorts/OcKmv53D0hw"
  },

  {
    id: "split-squat",
    name: "Przysiad wykroczny",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "single-leg-squat",
    movementTags: ["split-squat", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Ustaw jedną nogę z przodu, a drugą z tyłu i zachowaj stabilną pozycję stóp przez całą serię. Ugnij oba kolana i opuszczaj ciało pionowo w dół, utrzymując przednie kolano w linii z palcami stopy. Odepchnij się przednią nogą i wróć do pozycji wyjściowej bez zmiany ustawienia stóp. Po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/YuLqw3kHPaw"
  },

  {
    id: "sumo-squat",
    name: "Przysiad sumo",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "squat",
    movementTags: ["squat", "sumo", "wide-stance"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań szerzej niż na szerokość barków i skieruj palce stóp wyraźnie na zewnątrz. Ugnij kolana i opuść biodra w dół, prowadząc kolana w kierunku palców stóp. Utrzymuj klatkę piersiową uniesioną i neutralną pozycję kręgosłupa. Następnie odepchnij się całymi stopami od podłoża i wróć do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/c44X65gbyHQ"
  },

  {
    id: "goblet-sumo-squat",
    name: "Przysiad sumo z obciążeniem trzymanym przy klatce",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs"],
    legTarget: "adductors",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [],
    equipmentOptions: [
      [
        { type: "dumbbells", quantity: 1 }
      ],
      [
        { type: "kettlebell", quantity: 1 }
      ]
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "squat",
    movementTags: ["squat", "sumo", "goblet", "weighted"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań szerzej niż na szerokość barków i skieruj palce stóp na zewnątrz. Trzymaj hantel lub kettlebell oburącz przy klatce piersiowej. Ugnij kolana i opuszczaj biodra w dół, prowadząc kolana w kierunku palców stóp. Utrzymuj wyprostowany tułów i neutralną pozycję kręgosłupa. Następnie odepchnij się całymi stopami od podłoża i wróć do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/ka3Kga-00ok"
  },

  {
    id: "step-up",
    name: "Wejścia na podwyższenie",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "step-up",
    movementTags: ["step-up", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań przed stabilnym podwyższeniem i postaw na nim całą stopę jednej nogi. Odepchnij się głównie nogą znajdującą się na podwyższeniu i wejdź do góry, prostując biodro oraz kolano. Następnie kontrolowanie zejdź na podłoże. Nie odbijaj się nadmiernie nogą pozostającą na ziemi i utrzymuj kolano nogi pracującej w linii z palcami stopy.",
    videoUrl: "https://www.youtube.com/shorts/S9uzCELLo_0"
  },

  {
    id: "dumbbell-step-up",
    name: "Wejścia na podwyższenie z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "step-up",
    movementTags: ["step-up", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań przed stabilnym podwyższeniem i trzymaj hantle po bokach ciała. Postaw całą stopę jednej nogi na podwyższeniu i odepchnij się głównie tą nogą, prostując biodro oraz kolano. Następnie kontrolowanie zejdź na podłoże. Nie odbijaj się nadmiernie nogą pozostającą na ziemi i utrzymuj kolano nogi pracującej w linii z palcami stopy.",
    videoUrl: "https://www.youtube.com/shorts/kjhfQ9BqvfI"
  },

  {
    id: "kettlebell-step-up",
    name: "Wejścia na podwyższenie z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs", "forearms"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: ["stable-elevated-surface"],
    difficulty: 2,
    movementPattern: "step-up",
    movementTags: ["step-up", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań przed stabilnym podwyższeniem i trzymaj kettlebell oburącz przy klatce piersiowej lub jednorącz w pozycji rack. Postaw całą stopę jednej nogi na podwyższeniu i odepchnij się głównie tą nogą, prostując biodro oraz kolano. Następnie kontrolowanie zejdź na podłoże. Nie odbijaj się nadmiernie nogą pozostającą na ziemi i utrzymuj kolano nogi pracującej w linii z palcami stopy.",
    videoUrl: "https://www.youtube.com/shorts/I-qdNU05nEk"
  },

  {
    id: "dumbbell-romanian-deadlift",
    name: "Rumuński martwy ciąg z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "forearms", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-hinge",
    movementTags: ["rdl", "hip-hinge", "weighted"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań ze stopami mniej więcej na szerokość bioder i trzymaj hantle przed udami. Lekko ugnij kolana, cofnij biodra i opuszczaj hantle blisko nóg, utrzymując neutralną pozycję kręgosłupa. Zejdź do momentu wyraźnego napięcia tylnej części ud, a następnie wyprostuj biodra i wróć do pozycji stojącej. Nie zamieniaj ruchu w przysiad.",
    videoUrl: "https://www.youtube.com/shorts/hu3jRvTc_po"
  },

  {
    id: "kettlebell-romanian-deadlift",
    name: "Rumuński martwy ciąg z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "forearms", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-hinge",
    movementTags: ["rdl", "hip-hinge", "weighted"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań ze stopami mniej więcej na szerokość bioder i trzymaj kettlebell oburącz przed udami. Lekko ugnij kolana, cofnij biodra i opuszczaj ciężar w dół blisko nóg, utrzymując neutralną pozycję kręgosłupa. Zejdź do momentu wyraźnego napięcia tylnej części ud, a następnie wyprostuj biodra i wróć do pozycji stojącej. Nie zamieniaj ruchu w przysiad.",
    videoUrl: "https://www.youtube.com/shorts/OpiHtdxk2Hg"
  },

  {
    id: "single-leg-romanian-deadlift",
    name: "Rumuński martwy ciąg na jednej nodze",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "single-leg-hip-hinge",
    movementTags: ["rdl", "hip-hinge", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań na jednej nodze i lekko ugnij kolano nogi podporowej. Cofnij biodra i pochyl tułów do przodu, jednocześnie prowadząc drugą nogę do tyłu. Utrzymuj neutralną pozycję kręgosłupa i biodra skierowane możliwie prosto do podłoża. Zejdź do momentu wyraźnego napięcia tylnej części uda, a następnie wyprostuj biodro i wróć do pozycji stojącej. Po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/s32cCgmRV3I"
  },

  {
    id: "dumbbell-single-leg-romanian-deadlift",
    name: "Rumuński martwy ciąg na jednej nodze z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "abs", "forearms"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "single-leg-hip-hinge",
    movementTags: ["rdl", "hip-hinge", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań na jednej nodze i trzymaj hantle przed udami. Lekko ugnij kolano nogi podporowej, cofnij biodra i pochyl tułów do przodu, jednocześnie prowadząc drugą nogę do tyłu. Utrzymuj neutralną pozycję kręgosłupa i biodra skierowane możliwie prosto do podłoża. Zejdź do momentu wyraźnego napięcia tylnej części uda, a następnie wyprostuj biodro i wróć do pozycji stojącej. Po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/R_fJ6H3FlVw"
  },

  {
    id: "kettlebell-single-leg-romanian-deadlift",
    name: "Rumuński martwy ciąg na jednej nodze z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "abs", "forearms"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "single-leg-hip-hinge",
    movementTags: ["rdl", "hip-hinge", "weighted", "unilateral"],
    workoutRole: "main",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań na jednej nodze i trzymaj kettlebell przed sobą lub w dłoni po przeciwnej stronie nogi podporowej. Lekko ugnij kolano nogi podporowej, cofnij biodra i pochyl tułów do przodu, jednocześnie prowadząc drugą nogę do tyłu. Utrzymuj neutralną pozycję kręgosłupa i biodra możliwie równo. Następnie wyprostuj biodro i wróć do pozycji stojącej. Po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/s32cCgmRV3I"
  },

  {
    id: "calf-raise",
    name: "Wspięcia na palce stojąc",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["calves", "abs"],
    legTarget: "calves",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "plantar-flexion",
    movementTags: ["calf-raise"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto ze stopami mniej więcej na szerokość bioder. Unieś pięty możliwie wysoko, wspinając się na palce i mocno napinając łydki. Zatrzymaj ruch na moment w górnej pozycji, a następnie kontrolowanie opuść pięty do podłoża. Nie odbijaj się i nie wykonuj ruchu z zamachu.",
    videoUrl: "https://www.youtube.com/shorts/fZYTVO9-Ggk"
  },

  {
    id: "dumbbell-calf-raise",
    name: "Wspięcia na palce z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["calves", "forearms", "abs"],
    legTarget: "calves",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "plantar-flexion",
    movementTags: ["calf-raise", "weighted"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto z hantlami trzymanymi po bokach ciała. Unieś pięty możliwie wysoko, wspinając się na palce i mocno napinając łydki. Zatrzymaj ruch na moment w górnej pozycji, a następnie kontrolowanie opuść pięty do podłoża. Nie odbijaj się i nie wykonuj ruchu z zamachu.",
    videoUrl: "https://www.youtube.com/shorts/ADITZCcUyVo"
  },

  {
    id: "kettlebell-calf-raise",
    name: "Wspięcia na palce z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["calves", "forearms", "abs"],
    legTarget: "calves",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "plantar-flexion",
    movementTags: ["calf-raise", "weighted"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 12, max: 25 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto i trzymaj kettlebell oburącz przed sobą lub jednorącz przy boku. Unieś pięty możliwie wysoko, wspinając się na palce i mocno napinając łydki. Zatrzymaj ruch na moment w górnej pozycji, a następnie kontrolowanie opuść pięty do podłoża. Utrzymuj stabilny tułów i nie wykonuj ruchu z odbicia.",
    videoUrl: "https://www.youtube.com/shorts/VvVYByY_kmA"
  },

  {
    id: "wall-sit",
    name: "Krzesełko przy ścianie",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["wall"],
    difficulty: 1,
    movementPattern: "isometric-squat",
    movementTags: ["squat", "isometric"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: true,
    repRange: null,
    timeRange: { min: 20, max: 60 },
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 180,
    instructions: "Oprzyj plecy o ścianę i zsuń się w dół, aż uda będą mniej więcej równoległe do podłoża. Ustaw stopy stabilnie przed sobą i trzymaj kolana w linii z palcami stóp. Napnij brzuch i pośladki, utrzymuj plecy przy ścianie i wytrzymaj przez wyznaczony czas.",
    videoUrl: "https://www.youtube.com/shorts/UZp11A98yyU"
  },

  {
    id: "jump-squat",
    name: "Przysiad z wyskokiem",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "calves", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "squat-jump",
    movementTags: ["squat", "jump", "power"],
    workoutRole: "finisher",
    fatigue: 4,
    timed: false,
    repRange: { min: 6, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 210,
    instructions: "Stań ze stopami mniej więcej na szerokość barków i zejdź do przysiadu w kontrolowanym zakresie. Następnie dynamicznie wyprostuj biodra i kolana, wykonując wyskok. Wyląduj miękko na lekko ugiętych nogach i od razu przejdź do kolejnego przysiadu. Utrzymuj kolana w linii z palcami stóp i nie pozwalaj im zapadać się do środka.",
    videoUrl: "https://www.youtube.com/shorts/IfqrxS_-8oU"
  },

  {
    id: "lateral-lunge",
    name: "Wykroki boczne",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs"],
    legTarget: "adductors",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lateral-lunge",
    movementTags: ["lunge", "lateral", "unilateral"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań prosto ze stopami mniej więcej na szerokość bioder. Wykonaj szeroki krok w bok i ugnij kolano nogi wykrocznej, cofając biodra, podczas gdy druga noga pozostaje bardziej wyprostowana. Utrzymuj stopę i kolano nogi pracującej skierowane w tę samą stronę. Odepchnij się od podłoża i wróć do pozycji stojącej, a następnie wykonaj ruch na drugą stronę.",
    videoUrl: "https://www.youtube.com/shorts/ATKZQJkjIpg"
  },

  {
    id: "dumbbell-lateral-lunge",
    name: "Wykroki boczne z hantlami",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs", "forearms"],
    legTarget: "adductors",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "dumbbells", quantity: 2 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lateral-lunge",
    movementTags: ["lunge", "lateral", "weighted", "unilateral"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto z hantlami trzymanymi po bokach ciała. Wykonaj szeroki krok w bok i ugnij kolano nogi wykrocznej, cofając biodra, podczas gdy druga noga pozostaje bardziej wyprostowana. Utrzymuj stopę i kolano nogi pracującej skierowane w tę samą stronę. Odepchnij się od podłoża i wróć do pozycji stojącej, a następnie wykonaj ruch na drugą stronę.",
    videoUrl: "https://www.youtube.com/shorts/guAKp7vHzqQ"
  },

  {
    id: "kettlebell-lateral-lunge",
    name: "Wykroki boczne z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs", "forearms"],
    legTarget: "adductors",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lateral-lunge",
    movementTags: ["lunge", "lateral", "weighted", "unilateral"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań prosto i trzymaj kettlebell oburącz przy klatce piersiowej. Wykonaj szeroki krok w bok i ugnij kolano nogi wykrocznej, cofając biodra, podczas gdy druga noga pozostaje bardziej wyprostowana. Utrzymuj kolano w linii z palcami stopy. Odepchnij się nogą pracującą i wróć do pozycji stojącej, a następnie wykonaj ruch drugą stroną.",
    videoUrl: "https://www.youtube.com/shorts/Vgv0UzfMkiY"
  },

  {
    id: "resistance-band-leg-curl",
    name: "Uginanie nóg z długą gumą",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["hamstrings", "glutes"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],
    equipmentConditions: ["anchor-low"],
    difficulty: 1,
    movementPattern: "knee-flexion",
    movementTags: ["leg-curl", "knee-flexion", "band"],
    workoutRole: "secondary",
    fatigue: 2,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Zamocuj długą gumę oporową nisko za sobą i załóż jej drugi koniec na kostkę. Stań stabilnie lub połóż się na brzuchu, zależnie od rodzaju gumy i sposobu mocowania. Ugnij kolano, przyciągając piętę w kierunku pośladka, bez unoszenia biodra i bez wykonywania ruchu z zamachu. Następnie kontrolowanie wyprostuj nogę i po wykonaniu serii zmień stronę.",
    videoUrl: "https://www.youtube.com/shorts/gTVC0qZJLzk"
  },

  {
    id: "hamstring-walkout",
    name: "Marsz piętami z mostu biodrowego",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["hamstrings", "glutes", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "knee-flexion",
    movementTags: ["leg-curl", "hamstring", "bodyweight"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 6, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Połóż się na plecach, ugnij kolana i unieś biodra jak do mostu biodrowego. Utrzymując biodra możliwie wysoko, wykonuj małe kroki piętami do przodu, stopniowo prostując nogi. Następnie wróć piętami w kierunku pośladków. Utrzymuj napięty brzuch i nie pozwalaj biodrom opadać podczas ruchu.",
    videoUrl: "https://www.youtube.com/shorts/YOnrl0Ar6D4"
  },

  {
    id: "sliding-leg-curl",
    name: "Uginanie nóg na ślizgu",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["hamstrings", "glutes", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["sliding-surface"],
    difficulty: 2,
    movementPattern: "knee-flexion",
    movementTags: ["leg-curl", "sliding", "hamstring"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 180,
    instructions: "Połóż się na plecach i ustaw pięty na ślizgaczach lub ręczniku na gładkiej powierzchni. Unieś biodra jak do mostu biodrowego, a następnie powoli wysuń stopy do przodu, prostując nogi. Przyciągnij pięty z powrotem w kierunku pośladków, mocno pracując tyłem uda. Staraj się utrzymywać biodra uniesione przez cały ruch.",
    videoUrl: "https://www.youtube.com/shorts/Rk1_yjhKDc8"
  },

  {
    id: "sissy-squat",
    name: "Sissy squat",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["abs", "calves"],
    legTarget: "quads",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-support"],
    difficulty: 3,
    movementPattern: "knee-dominant-squat",
    movementTags: ["squat", "knee-dominant"],
    workoutRole: "accessory",
    fatigue: 3,
    timed: false,
    repRange: { min: 6, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 180,
    instructions: "Stań stabilnie i w razie potrzeby lekko przytrzymaj się podparcia. Unieś pięty, wysuń kolana do przodu i odchyl tułów lekko do tyłu, utrzymując ciało możliwie w jednej linii od kolan do barków. Zejdź tylko tak nisko, jak pozwala pełna kontrola ruchu, a następnie wróć do pozycji stojącej poprzez wyprost kolan. Nie wykonuj ruchu gwałtownie.",
    videoUrl: "https://www.youtube.com/shorts/pU7XbxvViIY"
  },

  {
    id: "cossack-squat",
    name: "Przysiad kozacki",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs"],
    legTarget: "adductors",
    strongSecondaryBodyParts: [],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "lateral-squat",
    movementTags: ["squat", "lateral", "mobility"],
    workoutRole: "accessory",
    fatigue: 3,
    timed: false,
    repRange: { min: 6, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań szeroko i przenieś ciężar ciała na jedną nogę, uginając jej kolano i cofając biodra. Druga noga pozostaje wyprostowana, a stopa może lekko obrócić się palcami do góry. Zejdź tylko tak nisko, jak pozwala komfortowy zakres ruchu, a następnie odepchnij się nogą pracującą i przejdź na drugą stronę.",
    videoUrl: "https://www.youtube.com/shorts/MJvazUpmdZU"
  },

  {
    id: "jump-lunge",
    name: "Wykroki z wyskokiem",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "calves", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 3,
    movementPattern: "lunge-jump",
    movementTags: ["lunge", "jump", "power"],
    workoutRole: "finisher",
    fatigue: 4,
    timed: false,
    repRange: { min: 6, max: 12 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 210,
    instructions: "Ustaw się w pozycji wykroku z jedną nogą z przodu. Odbij się dynamicznie od podłoża, wyskocz i w powietrzu zamień ustawienie nóg. Wyląduj miękko w pozycji wykroku i od razu przygotuj się do kolejnego powtórzenia. Utrzymuj stabilny tułów i pilnuj, aby kolano przedniej nogi nie zapadało się do środka.",
    videoUrl: "https://www.youtube.com/shorts/87iIVYGbxao"
  },

  {
    id: "skater-jump",
    name: "Przeskoki łyżwiarskie",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "calves", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lateral-jump",
    movementTags: ["jump", "lateral", "power"],
    workoutRole: "finisher",
    fatigue: 4,
    timed: false,
    repRange: { min: 8, max: 16 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań na jednej nodze i wykonaj dynamiczny przeskok w bok na drugą nogę. Wyląduj miękko, lekko uginając kolano i cofając biodra. Utrzymuj stabilny tułów i kontroluj ustawienie kolana nad stopą. Następnie odbij się w przeciwną stronę i kontynuuj naprzemiennie.",
    videoUrl: "https://www.youtube.com/shorts/qM5jviFhw9U"
  },

  {
    id: "pistol-squat",
    name: "Przysiad na jednej nodze",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "calves", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 4,
    movementPattern: "single-leg-squat",
    movementTags: ["pistol-squat", "unilateral"],
    workoutRole: "main",
    fatigue: 4,
    timed: false,
    repRange: { min: 3, max: 8 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Stań na jednej nodze, a drugą wyprostuj przed sobą. Napnij brzuch i rozpocznij zejście w dół, cofając biodra i uginając kolano nogi podporowej. Zejdź tylko tak nisko, jak pozwala Ci zachować kontrolę i równowagę. Następnie odepchnij się całą stopą i wróć do pozycji stojącej. Pilnuj, aby kolano nie zapadało się do środka.",
    videoUrl: "https://www.youtube.com/shorts/IfESGr170DY"
  },

  {
    id: "assisted-pistol-squat",
    name: "Przysiad na jednej nodze z podparciem",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "calves", "abs"],
    legTarget: "quads",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: ["stable-support"],
    difficulty: 3,
    movementPattern: "single-leg-squat",
    movementTags: ["pistol-squat", "assisted", "unilateral"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 5, max: 10 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 60, max: 90 },
    estimatedSeconds: 210,
    instructions: "Stań obok stabilnego podparcia i chwyć je jedną lub obiema rękami. Unieś jedną nogę przed siebie, a następnie wykonaj przysiad na nodze podporowej, wykorzystując podparcie tylko tyle, ile potrzeba do zachowania równowagi i kontroli. Zejdź do komfortowej głębokości i wróć do pozycji stojącej. Pilnuj, aby kolano nogi podporowej nie zapadało się do środka.",
    videoUrl: "https://www.youtube.com/shorts/h6AaN2p4Bh4"
  },

  {
    id: "kettlebell-swing",
    name: "Swing z kettlebell",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "hamstrings", "back", "abs", "forearms"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "kettlebell", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "hip-hinge-power",
    movementTags: ["swing", "hip-hinge", "power", "conditioning"],
    workoutRole: "finisher",
    fatigue: 4,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 60, max: 120 },
    estimatedSeconds: 240,
    instructions: "Ustaw stopy nieco szerzej niż biodra, a kettlebell połóż przed sobą. Cofnij biodra, chwyć kettlebell i przeciągnij go między nogami. Następnie dynamicznie wyprostuj biodra, wykorzystując pracę pośladków i tyłu uda, aby kettlebell uniósł się mniej więcej do wysokości klatki piersiowej. Ramiona powinny głównie prowadzić ciężar, a nie aktywnie go podnosić. Pozwól kettlebell opaść i ponownie cofnij biodra, zachowując prostą pozycję pleców.",
    videoUrl: "https://www.youtube.com/shorts/SR_4kUbkEaw"
  },

  {
    id: "curtsy-lunge",
    name: "Wykrok skrzyżny",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["glutes", "adductors", "abs"],
    legTarget: "mixed",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 2,
    movementPattern: "lunge",
    movementTags: ["lunge", "curtsy", "lateral", "unilateral"],
    workoutRole: "accessory",
    fatigue: 3,
    timed: false,
    repRange: { min: 8, max: 15 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Stań prosto, a następnie przenieś jedną nogę ukośnie za drugą i zejdź w dół poprzez ugięcie kolan. Utrzymuj tułów stabilnie i większość ciężaru na nodze znajdującej się z przodu. Odepchnij się od podłoża i wróć do pozycji stojącej, a następnie wykonaj ruch na drugą stronę.",
    videoUrl: "https://www.youtube.com/shorts/bRdYP5SOea0"
  },

  {
    id: "bodyweight-good-morning",
    name: "Good morning z masą własnego ciała",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["hamstrings", "glutes", "back", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "bodyweight", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-hinge",
    movementTags: ["good-morning", "hip-hinge", "technique"],
    workoutRole: "accessory",
    fatigue: 2,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 2, max: 4 },
    restRange: { min: 30, max: 60 },
    estimatedSeconds: 180,
    instructions: "Stań prosto ze stopami mniej więcej na szerokość bioder. Lekko ugnij kolana, napnij brzuch i cofaj biodra, pochylając tułów do przodu przy zachowaniu neutralnej pozycji pleców. Zejdź do momentu wyraźnego rozciągnięcia tyłu uda, a następnie napnij pośladki i wyprostuj biodra, wracając do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/tNLDpesr1IE"
  },

  {
    id: "resistance-band-good-morning",
    name: "Good morning z długą gumą",
    primaryBodyPart: "legs",
    secondaryBodyParts: ["hamstrings", "glutes", "back", "abs"],
    legTarget: "hamstrings",
    strongSecondaryBodyParts: ["glutes"],
    requiredEquipment: [
      { type: "resistance-band", quantity: 1 }
    ],
    equipmentConditions: [],
    difficulty: 1,
    movementPattern: "hip-hinge",
    movementTags: ["good-morning", "hip-hinge", "band"],
    workoutRole: "secondary",
    fatigue: 3,
    timed: false,
    repRange: { min: 10, max: 20 },
    timeRange: null,
    setRange: { min: 3, max: 4 },
    restRange: { min: 45, max: 75 },
    estimatedSeconds: 180,
    instructions: "Stań na środku długiej gumy oporowej i przełóż jej drugi koniec za kark lub górną część pleców. Lekko ugnij kolana, napnij brzuch i cofaj biodra, pochylając tułów do przodu przy zachowaniu neutralnej pozycji pleców. Gdy poczujesz wyraźne rozciągnięcie tyłu uda, napnij pośladki i wyprostuj biodra, wracając do pozycji stojącej.",
    videoUrl: "https://www.youtube.com/shorts/rQmkPvfcaSU"
  }

];

window.LegExercises = legExercises;