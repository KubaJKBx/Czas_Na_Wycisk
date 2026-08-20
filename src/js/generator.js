/* =========================================
   K&K — Czas na Wycisk!
   GENERATOR TRENINGU
   v0.10.3

   Nowości:
   - modularna baza window.ExercisesDatabase,
   - requiredEquipment / equipmentOptions,
   - equipmentConditions,
   - primaryBodyPart / strongSecondaryBodyParts,
   - workoutRole / fatigue / movementPattern,
   - repRange / timeRange / setRange / restRange,
   - ❤️ / 👎 i historia ostatnich treningów,
   - mocniejsza różnorodność ruchów,
   - dopasowanie objętości do wybranego czasu,
   - dokładna obsługa ilości i możliwości sprzętu.
   ========================================= */

const GENERATOR_CONFIG = {
  maxExercises: 8,

  difficultyProfiles: {
    beginner: {
      preferred: [1, 2],
      allowed: [1, 2, 3]
    },

    intermediate: {
      preferred: [2, 3],
      allowed: [1, 2, 3, 4]
    },

    advanced: {
      preferred: [3, 4, 5],
      allowed: [1, 2, 3, 4, 5]
    }
  },

  selectableBodyParts: [
    "chest",
    "back",
    "shoulders",
    "arms",
    "abs",
    "legs",
    "glutes"
  ],

  rolePriority: {
    main: 4,
    secondary: 3,
    accessory: 2,
    finisher: 1
  }
};


/* =========================================
   NARZĘDZIA
   ========================================= */

function randomBetween(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}

function clamp(value, min, max) {
  return Math.min(
    Math.max(value, min),
    max
  );
}

function shuffle(array) {
  const copy = [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];
  }

  return copy;
}

function getExerciseDatabase() {
  if (
    Array.isArray(
      window.ExercisesDatabase
    )
  ) {
    return window.ExercisesDatabase;
  }

  console.error(
    "[K&K Generator] Nie znaleziono window.ExercisesDatabase."
  );

  return [];
}


/* =========================================
   PAMIĘĆ GENERATORA
   ========================================= */

function getStorageProfileNameForGenerator(
  appProfile
) {
  if (appProfile === "woman") {
    return "female";
  }

  if (appProfile === "man") {
    return "male";
  }

  return null;
}

function getGeneratorMemory(config) {
  const emptyMemory = {
    preferences: {},
    recentExerciseCounts: {},
    lastWorkoutExerciseIds:
      new Set(),
    recentWorkouts: []
  };

  if (
    !window.WorkoutStorage ||
    !config ||
    !config.profile
  ) {
    return emptyMemory;
  }

  const storageProfile =
    getStorageProfileNameForGenerator(
      config.profile
    );

  if (!storageProfile) {
    return emptyMemory;
  }

  const preferences =
    window.WorkoutStorage
      .getExercisePreferences(
        storageProfile
      ) || {};

  const history =
    window.WorkoutStorage
      .getWorkoutHistory(
        storageProfile
      ) || [];

  const recentWorkouts =
    history.slice(0, 5);

  const recentExerciseCounts = {};

  const lastWorkoutExerciseIds =
    new Set();

  recentWorkouts.forEach(
    (workout, workoutIndex) => {
      const exercises =
        Array.isArray(
          workout.exercises
        )
          ? workout.exercises
          : [];

      exercises.forEach(
        (exercise) => {
          if (!exercise.id) {
            return;
          }

          recentExerciseCounts[
            exercise.id
          ] =
            (
              recentExerciseCounts[
                exercise.id
              ] || 0
            ) + 1;

          if (workoutIndex === 0) {
            lastWorkoutExerciseIds.add(
              exercise.id
            );
          }
        }
      );
    }
  );

  return {
    preferences,
    recentExerciseCounts,
    lastWorkoutExerciseIds,
    recentWorkouts
  };
}

function applyMemoryInfluence(
  score,
  exercise,
  memory
) {
  let adjustedScore = score;

  if (
    !memory ||
    !exercise ||
    !exercise.id
  ) {
    return adjustedScore;
  }

  const recentCount =
    memory.recentExerciseCounts[
      exercise.id
    ] || 0;

  adjustedScore -=
    recentCount * 6;

  if (
    memory.lastWorkoutExerciseIds.has(
      exercise.id
    )
  ) {
    adjustedScore -= 8;
  }

  const preference =
    memory.preferences[
      exercise.id
    ] || null;

  if (preference === "like") {
    adjustedScore *= 1.15;
  }

  if (preference === "dislike") {
    adjustedScore *= 0.8;
  }

  return adjustedScore;
}


/* =========================================
   SPRZĘT — DOKŁADNY PROFIL UŻYTKOWNIKA
   ========================================= */

function createEquipmentInventory(
  config
) {
  const selected =
    Array.isArray(
      config?.equipment
    )
      ? config.equipment
      : [];

  const details =
    config?.equipmentDetails &&
    typeof config.equipmentDetails ===
      "object"
      ? config.equipmentDetails
      : {};

  const hasDetailedEquipmentConfig =
    Boolean(
      config?.equipmentDetails
    );

  const inventory = {
    bodyweight: 0,
    dumbbells: 0,
    kettlebell: 0,
    "resistance-band": 0,
    "mini-band": 0,
    "pull-up-bar": 0,
    barbell: 0,
    bench: 0,

    bandAnchors:
      Array.isArray(
        details.bandAnchors
      )
        ? [
            ...details.bandAnchors
          ]
        : [],

    pullUpBarTypes:
      Array.isArray(
        details.pullUpBarTypes
      )
        ? [
            ...details.pullUpBarTypes
          ]
        : []
  };

  if (
    selected.includes(
      "bodyweight"
    )
  ) {
    inventory.bodyweight = 1;
  }

  if (
    selected.includes(
      "dumbbells"
    )
  ) {
    const quantity =
      Number(
        details.dumbbellsQuantity
      );

    inventory.dumbbells =
      Number.isFinite(quantity) &&
      quantity > 0
        ? quantity
        : hasDetailedEquipmentConfig
          ? 1
          : 2;
  }

  if (
    selected.includes(
      "kettlebell"
    )
  ) {
    const quantity =
      Number(
        details.kettlebellQuantity
      );

    inventory.kettlebell =
      Number.isFinite(quantity) &&
      quantity > 0
        ? quantity
        : hasDetailedEquipmentConfig
          ? 1
          : 2;
  }

  /*
    Nowy konfigurator używa osobnych
    wartości resistance-band i mini-band.

    "bands" zostawiamy wyłącznie jako
    zgodność wsteczną ze starszą wersją.
  */
  if (
    selected.includes(
      "resistance-band"
    ) ||
    selected.includes(
      "bands"
    )
  ) {
    inventory[
      "resistance-band"
    ] = 1;
  }

  if (
    selected.includes(
      "mini-band"
    ) ||
    selected.includes(
      "bands"
    )
  ) {
    inventory[
      "mini-band"
    ] = 1;
  }

  if (
    selected.includes(
      "pull-up-bar"
    ) ||
    selected.includes(
      "pullup-bar"
    )
  ) {
    inventory[
      "pull-up-bar"
    ] = 1;
  }

  if (
    selected.includes(
      "barbell"
    )
  ) {
    inventory.barbell = 1;
  }

  if (
    selected.includes(
      "bench"
    )
  ) {
    inventory.bench = 1;
  }

  return inventory;
}


function isEquipmentItemAvailable(
  item,
  inventory
) {
  if (
    !item ||
    !item.type
  ) {
    return false;
  }

  const availableQuantity =
    Number(
      inventory[
        item.type
      ]
    ) || 0;

  const requiredQuantity =
    Number(
      item.quantity
    ) || 1;

  return (
    availableQuantity >=
    requiredQuantity
  );
}


function isEquipmentSetAvailable(
  equipmentSet,
  inventory
) {
  if (
    !Array.isArray(
      equipmentSet
    )
  ) {
    return false;
  }

  return equipmentSet.every(
    (item) =>
      isEquipmentItemAvailable(
        item,
        inventory
      )
  );
}


function resolveExerciseEquipment(
  exercise,
  inventory
) {
  const required =
    Array.isArray(
      exercise.requiredEquipment
    )
      ? exercise.requiredEquipment
      : [];

  if (required.length > 0) {
    return isEquipmentSetAvailable(
      required,
      inventory
    )
      ? required
      : null;
  }

  const options =
    Array.isArray(
      exercise.equipmentOptions
    )
      ? exercise.equipmentOptions
      : [];

  for (
    const option of options
  ) {
    if (
      isEquipmentSetAvailable(
        option,
        inventory
      )
    ) {
      return option;
    }
  }

  return null;
}


function isEquipmentConditionAvailable(
  condition,
  inventory
) {
  if (!condition) {
    return true;
  }

  if (
    condition ===
    "anchor-any"
  ) {
    return (
      inventory[
        "resistance-band"
      ] >= 1 &&
      inventory.bandAnchors.length >
        0
    );
  }

  if (
    condition ===
      "anchor-low" ||
    condition ===
      "anchor-mid" ||
    condition ===
      "anchor-high"
  ) {
    return (
      inventory[
        "resistance-band"
      ] >= 1 &&
      inventory.bandAnchors.includes(
        condition
      )
    );
  }

  if (
    condition ===
      "bar-high" ||
    condition ===
      "bar-low"
  ) {
    return (
      inventory[
        "pull-up-bar"
      ] >= 1 &&
      inventory.pullUpBarTypes.includes(
        condition
      )
    );
  }

  if (
    condition ===
    "stable-dumbbell-base"
  ) {
    return (
      inventory.dumbbells >= 2
    );
  }

  /*
    To nie są osobne elementy wyposażenia
    w obecnym konfiguratorze.
  */
  const temporaryHouseholdConditions = [
    "stable-elevated-surface",
    "stable-seated-surface",
    "stable-support",
    "sliding-surface",
    "soft-object-between-knees",
    "wall"
  ];

  if (
    temporaryHouseholdConditions
      .includes(
        condition
      )
  ) {
    return true;
  }

  return false;
}


function areEquipmentConditionsAvailable(
  exercise,
  inventory
) {
  const conditions =
    Array.isArray(
      exercise.equipmentConditions
    )
      ? exercise.equipmentConditions
      : [];

  return conditions.every(
    (condition) =>
      isEquipmentConditionAvailable(
        condition,
        inventory
      )
  );
}


function isExerciseEquipmentAvailable(
  exercise,
  inventory
) {
  return (
    resolveExerciseEquipment(
      exercise,
      inventory
    ) !== null &&
    areEquipmentConditionsAvailable(
      exercise,
      inventory
    )
  );
}
/* =========================================
   TRUDNOŚĆ
   ========================================= */

function getDifficultyProfile(
  level
) {
  return (
    GENERATOR_CONFIG
      .difficultyProfiles[
        level
      ] ||
    GENERATOR_CONFIG
      .difficultyProfiles
      .intermediate
  );
}


function isDifficultyAllowed(
  exercise,
  config
) {
  const profile =
    getDifficultyProfile(
      config.level
    );

  return profile.allowed.includes(
    exercise.difficulty
  );
}


function getDifficultyScore(
  exercise,
  config
) {
  const profile =
    getDifficultyProfile(
      config.level
    );

  let score = 0;

  if (
    profile.preferred.includes(
      exercise.difficulty
    )
  ) {
    score += 34;
  } else {
    score += 5;
  }

  const preferredMin =
    Math.min(
      ...profile.preferred
    );

  const preferredMax =
    Math.max(
      ...profile.preferred
    );

  if (
    config.intensity === "light"
  ) {
    if (
      exercise.difficulty ===
      preferredMin
    ) {
      score += 12;
    }

    if (
      exercise.difficulty >
      preferredMax
    ) {
      score -= 15;
    }
  }

  if (
    config.intensity === "hard"
  ) {
    if (
      exercise.difficulty ===
      preferredMax
    ) {
      score += 12;
    }

    if (
      exercise.difficulty <
      preferredMin
    ) {
      score -= 8;
    }
  }

  if (
    config.level === "advanced" &&
    config.intensity === "hard" &&
    exercise.difficulty <= 2
  ) {
    score -= 18;
  }

  if (
    config.level === "beginner" &&
    exercise.difficulty === 3
  ) {
    score -= 12;
  }

  return score;
}


/* =========================================
   PARTIE CIAŁA
   ========================================= */

function getExerciseSelectableBodyParts(
  exercise
) {
  const parts =
    new Set();

  if (
    GENERATOR_CONFIG
      .selectableBodyParts
      .includes(
        exercise.primaryBodyPart
      )
  ) {
    parts.add(
      exercise.primaryBodyPart
    );
  }

  const strongSecondary =
    Array.isArray(
      exercise
        .strongSecondaryBodyParts
    )
      ? exercise
          .strongSecondaryBodyParts
      : [];

  strongSecondary.forEach(
    (bodyPart) => {
      if (
        GENERATOR_CONFIG
          .selectableBodyParts
          .includes(
            bodyPart
          )
      ) {
        parts.add(
          bodyPart
        );
      }
    }
  );

  return [...parts];
}


function exerciseMatchesBodyParts(
  exercise,
  config
) {
  if (
    config.body.includes(
      "full"
    )
  ) {
    return true;
  }

  const selectableBodyParts =
    getExerciseSelectableBodyParts(
      exercise
    );

  return selectableBodyParts.some(
    (bodyPart) =>
      config.body.includes(
        bodyPart
      )
  );
}


function getSelectionBodyPart(
  exercise,
  config
) {
  if (
    config.body.includes(
      "full"
    )
  ) {
    return exercise.primaryBodyPart;
  }

  if (
    config.body.includes(
      exercise.primaryBodyPart
    )
  ) {
    return exercise.primaryBodyPart;
  }

  const strongSecondary =
    Array.isArray(
      exercise
        .strongSecondaryBodyParts
    )
      ? exercise
          .strongSecondaryBodyParts
      : [];

  return (
    strongSecondary.find(
      (bodyPart) =>
        config.body.includes(
          bodyPart
        )
    ) ||
    exercise.primaryBodyPart
  );
}


/* =========================================
   LICZBA ĆWICZEŃ
   ========================================= */

function getTargetExerciseCount(
  time
) {
  const minutes =
    Number(time);

  if (minutes <= 15) {
    return 3;
  }

  if (minutes <= 25) {
    return 4;
  }

  if (minutes <= 35) {
    return 5;
  }

  if (minutes <= 45) {
    return 6;
  }

  if (minutes <= 55) {
    return 7;
  }

  return 8;
}


/* =========================================
   ROLA ĆWICZENIA
   ========================================= */

function getExerciseRole(
  exercise
) {
  const role =
    exercise.workoutRole;

  if (
    GENERATOR_CONFIG
      .rolePriority[
        role
      ]
  ) {
    return role;
  }

  return "secondary";
}


function getRoleScore(
  exercise
) {
  const role =
    getExerciseRole(
      exercise
    );

  return (
    GENERATOR_CONFIG
      .rolePriority[
        role
      ] || 2
  ) * 5;
}


/* =========================================
   SERIE
   ========================================= */

function getSetRangeByLevel(
  level
) {
  if (
    level === "beginner"
  ) {
    return {
      min: 1,
      max: 3
    };
  }

  if (
    level === "advanced"
  ) {
    return {
      min: 2,
      max: 5
    };
  }

  return {
    min: 2,
    max: 4
  };
}


function getExerciseSetLimits(
  exercise,
  config
) {
  const levelRange =
    getSetRangeByLevel(
      config.level
    );

  const exerciseRange =
    exercise.setRange || {
      min: 1,
      max: 5
    };

  const minimum =
    Math.max(
      levelRange.min,
      exerciseRange.min
    );

  const maximum =
    Math.min(
      levelRange.max,
      exerciseRange.max
    );

  return {
    min:
      Math.min(
        minimum,
        maximum
      ),

    max:
      Math.max(
        minimum,
        maximum
      )
  };
}


function chooseSets(
  exercise,
  config,
  role
) {
  const limits =
    getExerciseSetLimits(
      exercise,
      config
    );

  let sets;

  if (role === "main") {
    sets =
      config.level ===
        "beginner"
        ? 2
        : config.level ===
            "advanced"
          ? 4
          : 3;
  } else if (
    role === "secondary"
  ) {
    sets =
      config.level ===
        "beginner"
        ? 2
        : 3;
  } else {
    sets =
      config.level ===
        "beginner"
        ? 1
        : 2;
  }

  if (
    config.intensity === "light"
  ) {
    sets -= 1;
  }

  if (
    config.intensity === "hard"
  ) {
    if (
      role === "main"
    ) {
      sets += 1;
    }

    if (
      role === "secondary" &&
      Math.random() < 0.35
    ) {
      sets += 1;
    }

    if (
      role === "accessory" &&
      Math.random() < 0.15
    ) {
      sets += 1;
    }
  }

  /*
    Przy dłuższych treningach
    zwiększamy przede wszystkim objętość,
    a nie bez końca liczbę ćwiczeń.
  */
  if (
    Number(
      config.time
    ) >= 45 &&
    (
      role === "main" ||
      role === "secondary"
    ) &&
    Math.random() < 0.45
  ) {
    sets += 1;
  }

  if (
    exercise.difficulty >= 4 &&
    role !== "main"
  ) {
    sets =
      Math.min(
        sets,
        3
      );
  }

  return clamp(
    sets,
    limits.min,
    limits.max
  );
}


/* =========================================
   POWTÓRZENIA / CZAS
   ========================================= */

function createPrescription(
  exercise,
  config,
  role,
  forcedSets = null
) {
  const sets =
    forcedSets === null
      ? chooseSets(
          exercise,
          config,
          role
        )
      : forcedSets;

  if (exercise.timed) {
    const range =
      exercise.timeRange || {
        min: 20,
        max: 45
      };

    let seconds;

    if (
      config.intensity === "light"
    ) {
      seconds =
        range.min;
    } else if (
      config.intensity === "hard"
    ) {
      seconds =
        Math.round(
          range.min +
          (
            range.max -
            range.min
          ) * 0.75
        );
    } else {
      seconds =
        Math.round(
          (
            range.min +
            range.max
          ) / 2
        );
    }

    return {
      sets,
      seconds,

      display:
        `${sets} serie × ${seconds} sek.`
    };
  }

  const range =
    exercise.repRange || {
      min: 8,
      max: 12
    };

  let minReps =
    range.min;

  let maxReps =
    range.max;

  if (
    config.intensity === "light"
  ) {
    maxReps =
      Math.max(
        minReps,
        Math.round(
          (
            minReps +
            maxReps
          ) / 2
        )
      );
  }

  if (
    config.intensity === "hard"
  ) {
    minReps =
      Math.max(
        range.min,
        range.max - 3
      );
  }

  return {
    sets,
    minReps,
    maxReps,

    display:
      minReps === maxReps
        ? `${sets} serie × ${minReps}`
        : `${sets} serie × ${minReps}–${maxReps}`
  };
}


/* =========================================
   PRZERWY MIĘDZY SERIAMI
   ========================================= */

function getRestRecommendation(
  exercise
) {
  const rest =
    exercise.restRange || {
      min: 45,
      max: 75
    };

  return {
    min:
      rest.min,

    max:
      rest.max,

    display:
      rest.min === rest.max
        ? `około ${rest.min} sek.`
        : `około ${rest.min}–${rest.max} sek.`
  };
}


/* =========================================
   SZACOWANIE CZASU ĆWICZENIA
   ========================================= */

function estimateExerciseSeconds(
  exercise,
  prescription
) {
  const rest =
    exercise.restRange || {
      min: 45,
      max: 75
    };

  const averageRest =
    (
      rest.min +
      rest.max
    ) / 2;

  let workPerSet;

  if (exercise.timed) {
    workPerSet =
      prescription.seconds ||
      30;
  } else {
    const averageRepetitions =
      (
        prescription.minReps +
        prescription.maxReps
      ) / 2;

    /*
      Około 3 sekundy na jedno
      kontrolowane powtórzenie.
    */
    workPerSet =
      averageRepetitions * 3;
  }

  const workTime =
    prescription.sets *
    workPerSet;

  const restTime =
    Math.max(
      0,
      prescription.sets - 1
    ) *
    averageRest;

  /*
    Kilkanaście sekund na ustawienie
    ciężaru / pozycji przed ćwiczeniem.
  */
  const setupTime = 20;

  return Math.round(
    workTime +
    restTime +
    setupTime
  );
}


/* =========================================
   DOPASOWANIE OBJĘTOŚCI DO CZASU
   ========================================= */

function calculateWorkoutCoreSeconds(
  workout
) {
  return workout.reduce(
    (
      total,
      exercise
    ) =>
      total +
      (
        exercise
          .estimatedSeconds ||
        0
      ),
    0
  );
}


function getEstimatedTransitionSeconds(
  workout
) {
  if (
    workout.length <= 1
  ) {
    return 0;
  }

  /*
    Naturalne przejście:
    odłożenie ciężaru,
    przeczytanie następnego ćwiczenia itd.
  */
  return (
    workout.length - 1
  ) * 20;
}


function getWorkoutEstimatedSeconds(
  workout
) {
  return (
    calculateWorkoutCoreSeconds(
      workout
    ) +
    getEstimatedTransitionSeconds(
      workout
    )
  );
}


function updateExercisePrescriptionSets(
  workoutExercise,
  newSets,
  config
) {
  const role =
    workoutExercise.role ||
    getExerciseRole(
      workoutExercise
    );

  const prescription =
    createPrescription(
      workoutExercise,
      config,
      role,
      newSets
    );

  workoutExercise.sets =
    prescription.sets;

  workoutExercise.prescription =
    prescription.display;

  workoutExercise.prescriptionData =
    prescription;

  workoutExercise.estimatedSeconds =
    estimateExerciseSeconds(
      workoutExercise,
      prescription
    );
}


function getVolumeIncreasePriority(
  workout
) {
  const roleWeight = {
    main: 4,
    secondary: 3,
    accessory: 2,
    finisher: 1
  };

  return [...workout].sort(
    (a, b) => {
      const roleDifference =
        (
          roleWeight[
            b.role
          ] || 0
        ) -
        (
          roleWeight[
            a.role
          ] || 0
        );

      if (
        roleDifference !== 0
      ) {
        return roleDifference;
      }

      return (
        Number(
          b.fatigue || 0
        ) -
        Number(
          a.fatigue || 0
        )
      );
    }
  );
}


function fitWorkoutVolumeToTime(
  workout,
  config
) {
  if (
    !Array.isArray(workout) ||
    workout.length === 0
  ) {
    return workout;
  }

  const targetSeconds =
    Number(
      config.time
    ) * 60;

  /*
    Trening może być ok. 5 minut
    krótszy od deklarowanego czasu.
  */
  const minimumDesiredSeconds =
    Math.max(
      1,
      targetSeconds - 300
    );

  const candidates =
    getVolumeIncreasePriority(
      workout
    );

  let safetyCounter = 0;

  while (
    getWorkoutEstimatedSeconds(
      workout
    ) <
      minimumDesiredSeconds &&
    safetyCounter < 30
  ) {
    let increasedSomething =
      false;

    for (
      const exercise of candidates
    ) {
      const limits =
        getExerciseSetLimits(
          exercise,
          config
        );

      const currentSets =
        Number(
          exercise.sets
        ) || limits.min;

      if (
        currentSets >=
        limits.max
      ) {
        continue;
      }

      updateExercisePrescriptionSets(
        exercise,
        currentSets + 1,
        config
      );

      increasedSomething =
        true;

      if (
        getWorkoutEstimatedSeconds(
          workout
        ) >=
          minimumDesiredSeconds
      ) {
        break;
      }
    }

    if (!increasedSomething) {
      break;
    }

    safetyCounter += 1;
  }

  return workout;
}
/* =========================================
   PRZERWA MIĘDZY ĆWICZENIAMI
   ========================================= */

function createTransitionRest(
  exercise,
  nextExercise,
  index
) {
  if (!nextExercise) {
    return {
      show: false,
      min: 0,
      max: 0
    };
  }

  let fatigueScore =
    Number(
      exercise.fatigue
    ) || 1;

  if (
    exercise.workoutRole ===
      "main"
  ) {
    fatigueScore += 2;
  }

  if (
    exercise.primaryBodyPart ===
    nextExercise.primaryBodyPart
  ) {
    fatigueScore += 2;
  }

  if (
    exercise.selectionBodyPart &&
    nextExercise.selectionBodyPart &&
    exercise.selectionBodyPart ===
      nextExercise.selectionBodyPart
  ) {
    fatigueScore += 1;
  }

  if (index >= 2) {
    fatigueScore += 1;
  }

  if (
    fatigueScore <= 3
  ) {
    return {
      show: false,
      min: 0,
      max: 0
    };
  }

  if (
    fatigueScore <= 5
  ) {
    return {
      show: true,
      min: 30,
      max: 45
    };
  }

  if (
    fatigueScore <= 7
  ) {
    return {
      show: true,
      min: 45,
      max: 60
    };
  }

  return {
    show: true,
    min: 60,
    max: 90
  };
}


/* =========================================
   SPRZĘT DO WYŚWIETLENIA W app.js
   ========================================= */

function getCompatibilityEquipment(
  resolvedEquipment
) {
  const equipment = [];

  resolvedEquipment.forEach(
    (item) => {
      const type =
        item.type;

      if (
        type &&
        !equipment.includes(
          type
        )
      ) {
        equipment.push(
          type
        );
      }
    }
  );

  return equipment;
}


function getCompatibilityBodyParts(
  exercise
) {
  return (
    getExerciseSelectableBodyParts(
      exercise
    )
  );
}


function createCompatibleExercise(
  exercise,
  config,
  inventory
) {
  const resolvedEquipment =
    resolveExerciseEquipment(
      exercise,
      inventory
    ) || [];

  return {
    ...exercise,

    selectionBodyPart:
      getSelectionBodyPart(
        exercise,
        config
      ),

    resolvedEquipment:
      resolvedEquipment.map(
        (item) => ({
          ...item
        })
      ),

    equipment:
      getCompatibilityEquipment(
        resolvedEquipment
      ),

    bodyParts:
      getCompatibilityBodyParts(
        exercise
      )
  };
}


/* =========================================
   PUNKTACJA ĆWICZENIA
   ========================================= */

function getSharedMovementTagCount(
  exercise,
  selectedExercises
) {
  const tags =
    Array.isArray(
      exercise.movementTags
    )
      ? exercise.movementTags
      : [];

  if (
    tags.length === 0
  ) {
    return 0;
  }

  let sharedCount = 0;

  selectedExercises.forEach(
    (selectedExercise) => {
      const selectedTags =
        Array.isArray(
          selectedExercise
            .movementTags
        )
          ? selectedExercise
              .movementTags
          : [];

      const hasSharedTag =
        tags.some(
          (tag) =>
            selectedTags.includes(
              tag
            )
        );

      if (hasSharedTag) {
        sharedCount += 1;
      }
    }
  );

  return sharedCount;
}


function scoreExercise(
  exercise,
  config,
  selectedExercises,
  bodyPartCounts,
  equipmentCounts,
  memory
) {
  let score = 100;

  score +=
    getDifficultyScore(
      exercise,
      config
    );

  score +=
    getRoleScore(
      exercise
    );

  const selectionBodyPart =
    exercise.selectionBodyPart ||
    exercise.primaryBodyPart;

  const bodyCount =
    bodyPartCounts[
      selectionBodyPart
    ] || 0;

  score -=
    bodyCount * 18;

  /*
    Bardzo mocna kara za dokładnie
    ten sam wzorzec ruchu.
  */
  const sameMovementCount =
    selectedExercises.filter(
      (selectedExercise) =>
        selectedExercise
          .movementPattern ===
        exercise.movementPattern
    ).length;

  score -=
    sameMovementCount * 55;

  /*
    Jeśli już mamy dwa ćwiczenia
    o identycznym wzorcu ruchu,
    trzecie jest mocno niepożądane.
  */
  if (
    sameMovementCount >= 2
  ) {
    score -= 80;
  }

  /*
    Dodatkowo ograniczamy bardzo podobne
    warianty opisane tymi samymi tagami.
  */
  const sharedMovementTags =
    getSharedMovementTagCount(
      exercise,
      selectedExercises
    );

  score -=
    sharedMovementTags * 12;

  const equipmentTypes =
    Array.isArray(
      exercise.resolvedEquipment
    )
      ? exercise
          .resolvedEquipment
          .map(
            (item) =>
              item.type
          )
      : [];

  equipmentTypes.forEach(
    (equipmentItem) => {
      const equipmentCount =
        equipmentCounts[
          equipmentItem
        ] || 0;

      score -=
        equipmentCount * 8;
    }
  );

  if (
    config.intensity === "light"
  ) {
    score -=
      Math.max(
        0,
        exercise.fatigue - 2
      ) * 5;
  }

  if (
    config.intensity === "hard"
  ) {
    score +=
      Math.max(
        0,
        exercise.fatigue - 2
      ) * 3;
  }

  score =
    applyMemoryInfluence(
      score,
      exercise,
      memory
    );

  score +=
    randomBetween(
      0,
      12
    );

  return score;
}


/* =========================================
   WYBÓR KANDYDATA
   ========================================= */

function chooseCandidate(
  pool,
  config,
  selectedExercises,
  bodyPartCounts,
  equipmentCounts,
  memory
) {
  const available =
    pool.filter(
      (exercise) =>
        !selectedExercises.some(
          (
            selectedExercise
          ) =>
            selectedExercise.id ===
            exercise.id
        )
    );

  if (
    available.length === 0
  ) {
    return null;
  }

  const scored =
    available.map(
      (exercise) => ({
        exercise,

        score:
          scoreExercise(
            exercise,
            config,
            selectedExercises,
            bodyPartCounts,
            equipmentCounts,
            memory
          )
      })
    );

  scored.sort(
    (a, b) =>
      b.score - a.score
  );

  const topCandidates =
    scored.slice(
      0,
      Math.min(
        3,
        scored.length
      )
    );

  return (
    topCandidates[
      randomBetween(
        0,
        topCandidates.length - 1
      )
    ].exercise
  );
}


/* =========================================
   CAŁE CIAŁO
   ========================================= */

function getFullBodyPriorityPool(
  pool,
  selectedExercises
) {
  const majorGroups = [
    "legs",
    "glutes",
    "chest",
    "back",
    "shoulders",
    "arms",
    "abs"
  ];

  const usedGroups =
    selectedExercises.map(
      (exercise) =>
        exercise.selectionBodyPart ||
        exercise.primaryBodyPart
    );

  const missingGroups =
    majorGroups.filter(
      (group) =>
        !usedGroups.includes(
          group
        )
    );

  if (
    missingGroups.length === 0
  ) {
    return pool;
  }

  const preferred =
    pool.filter(
      (exercise) =>
        missingGroups.includes(
          exercise.primaryBodyPart
        )
    );

  return (
    preferred.length > 0
      ? preferred
      : pool
  );
}


/* =========================================
   KOLEJNOŚĆ TRENINGU
   ========================================= */

function orderWorkout(
  workout
) {
  const remaining =
    [...workout].sort(
      (a, b) => {
        const roleDifference =
          (
            GENERATOR_CONFIG
              .rolePriority[
                b.workoutRole
              ] || 0
          ) -
          (
            GENERATOR_CONFIG
              .rolePriority[
                a.workoutRole
              ] || 0
          );

        if (
          roleDifference !== 0
        ) {
          return roleDifference;
        }

        return (
          Number(
            b.fatigue || 0
          ) -
          Number(
            a.fatigue || 0
          )
        );
      }
    );

  const ordered = [];

  while (
    remaining.length > 0
  ) {
    const previous =
      ordered[
        ordered.length - 1
      ];

    let candidateIndex = 0;

    if (previous) {
      let betterIndex =
        remaining.findIndex(
          (exercise) =>
            (
              exercise.selectionBodyPart ||
              exercise.primaryBodyPart
            ) !==
              (
                previous.selectionBodyPart ||
                previous.primaryBodyPart
              ) &&
            exercise.movementPattern !==
              previous.movementPattern
        );

      if (
        betterIndex === -1
      ) {
        betterIndex =
          remaining.findIndex(
            (exercise) =>
              exercise
                .movementPattern !==
              previous
                .movementPattern
          );
      }

      if (
        betterIndex === -1
      ) {
        betterIndex =
          remaining.findIndex(
            (exercise) =>
              (
                exercise.selectionBodyPart ||
                exercise.primaryBodyPart
              ) !==
                (
                  previous.selectionBodyPart ||
                  previous.primaryBodyPart
                )
          );
      }

      if (
        betterIndex !== -1
      ) {
        candidateIndex =
          betterIndex;
      }
    }

    const [candidate] =
      remaining.splice(
        candidateIndex,
        1
      );

    ordered.push(
      candidate
    );
  }

  return ordered;
}
/* =========================================
   GENEROWANIE
   ========================================= */

function generateWorkout(
  config
) {
  const database =
    getExerciseDatabase();

  if (
    database.length === 0
  ) {
    return [];
  }

  const memory =
    getGeneratorMemory(
      config
    );

  const inventory =
    createEquipmentInventory(
      config
    );

  const targetExerciseCount =
    Math.min(
      getTargetExerciseCount(
        config.time
      ),
      GENERATOR_CONFIG
        .maxExercises
    );

  let pool =
    database
      .filter(
        (exercise) =>
          isExerciseEquipmentAvailable(
            exercise,
            inventory
          ) &&
          isDifficultyAllowed(
            exercise,
            config
          ) &&
          exerciseMatchesBodyParts(
            exercise,
            config
          )
      )
      .map(
        (exercise) =>
          createCompatibleExercise(
            exercise,
            config,
            inventory
          )
      );

  pool =
    shuffle(
      pool
    );

  const selected = [];

  const bodyPartCounts = {};

  const equipmentCounts = {};

  while (
    selected.length <
      targetExerciseCount &&
    selected.length <
      pool.length
  ) {
    let candidatePool =
      pool;

    if (
      config.body.includes(
        "full"
      )
    ) {
      candidatePool =
        getFullBodyPriorityPool(
          pool,
          selected
        );
    }

    const candidate =
      chooseCandidate(
        candidatePool,
        config,
        selected,
        bodyPartCounts,
        equipmentCounts,
        memory
      );

    if (!candidate) {
      break;
    }

    selected.push(
      candidate
    );

    const selectionBodyPart =
      candidate.selectionBodyPart ||
      candidate.primaryBodyPart;

    bodyPartCounts[
      selectionBodyPart
    ] =
      (
        bodyPartCounts[
          selectionBodyPart
        ] || 0
      ) + 1;

    candidate
      .resolvedEquipment
      .forEach(
        (equipmentItem) => {
          equipmentCounts[
            equipmentItem.type
          ] =
            (
              equipmentCounts[
                equipmentItem.type
              ] || 0
            ) + 1;
        }
      );
  }

  const ordered =
    orderWorkout(
      selected
    );

  let workout =
    ordered.map(
      (exercise) => {
        const role =
          getExerciseRole(
            exercise
          );

        const prescription =
          createPrescription(
            exercise,
            config,
            role
          );

        const rest =
          getRestRecommendation(
            exercise
          );

        return {
          ...exercise,

          role,

          prescription:
            prescription.display,

          prescriptionData:
            prescription,

          sets:
            prescription.sets,

          rest,

          estimatedSeconds:
            estimateExerciseSeconds(
              exercise,
              prescription
            )
        };
      }
    );

  /*
    Jeżeli trening wychodzi wyraźnie
    krótszy niż czas wybrany przez użytkownika,
    najpierw zwiększamy liczbę serii
    w rozsądnych granicach.
  */
  workout =
    fitWorkoutVolumeToTime(
      workout,
      config
    );

  return workout.map(
    (exercise, index) => {
      const nextExercise =
        workout[
          index + 1
        ] || null;

      return {
        ...exercise,

        transitionRest:
          createTransitionRest(
            exercise,
            nextExercise,
            index
          )
      };
    }
  );
}


/* =========================================
   ZASTĘPOWANIE ĆWICZENIA
   ========================================= */

function findReplacement(
  currentExercise,
  currentWorkout,
  config
) {
  const database =
    getExerciseDatabase();

  const memory =
    getGeneratorMemory(
      config
    );

  const inventory =
    createEquipmentInventory(
      config
    );

  const usedIds =
    currentWorkout.map(
      (exercise) =>
        exercise.id
    );

  const targetBodyPart =
    currentExercise
      .selectionBodyPart ||
    currentExercise
      .primaryBodyPart;

  const candidates =
    database
      .filter(
        (exercise) => {
          if (
            usedIds.includes(
              exercise.id
            )
          ) {
            return false;
          }

          if (
            !getExerciseSelectableBodyParts(
              exercise
            ).includes(
              targetBodyPart
            )
          ) {
            return false;
          }

          if (
            Math.abs(
              exercise.difficulty -
              currentExercise.difficulty
            ) > 1
          ) {
            return false;
          }

          if (
            !isDifficultyAllowed(
              exercise,
              config
            )
          ) {
            return false;
          }

          if (
            !isExerciseEquipmentAvailable(
              exercise,
              inventory
            )
          ) {
            return false;
          }

          return true;
        }
      )
      .map(
        (exercise) => {
          const compatible =
            createCompatibleExercise(
              exercise,
              config,
              inventory
            );

          compatible.selectionBodyPart =
            targetBodyPart;

          return compatible;
        }
      );

  if (
    candidates.length === 0
  ) {
    return null;
  }

  const differentMovement =
    candidates.filter(
      (exercise) =>
        exercise.movementPattern !==
        currentExercise
          .movementPattern
    );

  const finalPool =
    differentMovement.length > 0
      ? differentMovement
      : candidates;

  const scoredReplacements =
    finalPool.map(
      (exercise) => {
        let score =
          100 +
          getDifficultyScore(
            exercise,
            config
          ) +
          getRoleScore(
            exercise
          );

        if (
          exercise.movementPattern !==
          currentExercise
            .movementPattern
        ) {
          score += 18;
        }

        score =
          applyMemoryInfluence(
            score,
            exercise,
            memory
          );

        score +=
          randomBetween(
            0,
            10
          );

        return {
          exercise,
          score
        };
      }
    );

  scoredReplacements.sort(
    (a, b) =>
      b.score - a.score
  );

  const topReplacements =
    scoredReplacements.slice(
      0,
      Math.min(
        3,
        scoredReplacements.length
      )
    );

  const replacement =
    topReplacements[
      randomBetween(
        0,
        topReplacements.length - 1
      )
    ].exercise;

  const role =
    currentExercise.role ||
    getExerciseRole(
      replacement
    );

  /*
    Przy zastąpieniu zachowujemy
    mniej więcej objętość starego ćwiczenia,
    o ile nowy rekord na to pozwala.
  */
  const replacementLimits =
    getExerciseSetLimits(
      replacement,
      config
    );

  const preferredSets =
    clamp(
      Number(
        currentExercise.sets
      ) ||
        replacementLimits.min,
      replacementLimits.min,
      replacementLimits.max
    );

  const prescription =
    createPrescription(
      replacement,
      config,
      role,
      preferredSets
    );

  const rest =
    getRestRecommendation(
      replacement
    );

  return {
    ...replacement,

    role,

    prescription:
      prescription.display,

    prescriptionData:
      prescription,

    sets:
      prescription.sets,

    rest,

    estimatedSeconds:
      estimateExerciseSeconds(
        replacement,
        prescription
      ),

    transitionRest:
      currentExercise
        .transitionRest || {
          show: false,
          min: 0,
          max: 0
        }
  };
}


/* =========================================
   PUBLICZNE API
   ========================================= */

window.WorkoutGenerator = {
  generateWorkout,
  findReplacement
};