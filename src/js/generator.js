/* =========================================
   K&K — Czas na Wycisk!
   GENERATOR TRENINGU
   v0.05.3

   Cele tej wersji:
   - zróżnicowana liczba serii,
   - brak automatycznych 5 serii wszystkiego,
   - lepsza kolejność treningu,
   - przygotowanie danych pod przerwy
     między ćwiczeniami.
   ========================================= */


/* =========================================
   KONFIGURACJA
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


/* =========================================
   SPRZĘT
   ========================================= */

function isEquipmentAvailable(
  exercise,
  selectedEquipment
) {

  if (
    !exercise.equipment ||
    exercise.equipment.length === 0
  ) {

    return true;

  }


  return exercise.equipment.every(
    (equipmentItem) =>
      selectedEquipment.includes(
        equipmentItem
      )
  );

}


/* =========================================
   TRUDNOŚĆ
   ========================================= */

function getDifficultyProfile(level) {

  return (
    GENERATOR_CONFIG
      .difficultyProfiles[level] ||
    GENERATOR_CONFIG
      .difficultyProfiles.intermediate
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


  /*
    Poziom użytkownika jest głównym
    kryterium trudności.
  */

  if (
    profile.preferred.includes(
      exercise.difficulty
    )
  ) {

    score += 34;

  } else {

    score += 5;

  }


  /*
    Dyspozycja dnia tylko przesuwa
    preferencję w obrębie sensownego
    zakresu.
  */

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


  /*
    Dodatkowe ograniczenie:
    zaawansowany + mocny dzień
    nie powinien być przepełniony
    banalnymi ćwiczeniami.
  */

  if (
    config.level === "advanced" &&
    config.intensity === "hard" &&
    exercise.difficulty <= 2
  ) {

    score -= 18;

  }


  /*
    Początkujący nie powinien być
    kuszony trudniejszymi ruchami.
  */

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

function exerciseMatchesBodyParts(
  exercise,
  config
) {

  if (
    config.body.includes("full")
  ) {

    return true;

  }


  return exercise.bodyParts.some(
    (bodyPart) =>
      config.body.includes(
        bodyPart
      )
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
   ROLA ĆWICZENIA W SESJI
   ========================================= */

function getExerciseRole(
  exercise,
  index,
  workoutLength
) {

  /*
    Główne ruchy wielostawowe o wysokim
    priorytecie trafiają wcześniej.
  */

  if (
    exercise.exerciseType === "compound" &&
    exercise.sessionPriority >= 4 &&
    index <= 2
  ) {

    return "main";

  }


  /*
    Środkowa część treningu.
  */

  if (
    exercise.exerciseType === "compound" ||
    exercise.exerciseType === "accessory"
  ) {

    return "secondary";

  }


  /*
    Izolacje i brzuch są zwykle
    uzupełnieniem sesji.
  */

  if (
    exercise.exerciseType === "isolation" ||
    exercise.exerciseType === "core"
  ) {

    return "accessory";

  }


  /*
    Ostatnie ćwiczenie traktujemy
    zachowawczo.
  */

  if (
    index === workoutLength - 1
  ) {

    return "accessory";

  }


  return "secondary";

}


/* =========================================
   SERIE — ZRÓŻNICOWANA OBJĘTOŚĆ
   ========================================= */

function getSetRangeByLevel(level) {

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


function chooseSets(
  exercise,
  config,
  role
) {

  const range =
    getSetRangeByLevel(
      config.level
    );


  let sets;


  /*
    Punkt wyjścia zależny od roli.
  */

  if (
    role === "main"
  ) {

    sets =
      config.level === "beginner"
        ? 2
        : config.level === "advanced"
          ? 4
          : 3;

  } else if (
    role === "secondary"
  ) {

    sets =
      config.level === "beginner"
        ? 2
        : config.level === "advanced"
          ? 3
          : 3;

  } else {

    sets =
      config.level === "beginner"
        ? 1
        : config.level === "advanced"
          ? 2
          : 2;

  }


  /*
    Dyspozycja dnia.
    Nie ustawiamy maksimum wszystkim.
  */

  if (
    config.intensity === "light"
  ) {

    sets -= 1;

  }


  if (
    config.intensity === "hard"
  ) {

    /*
      Najmocniej podbijamy główne ruchy.
    */

    if (
      role === "main"
    ) {

      sets += 1;

    }


    /*
      Ćwiczenia drugorzędne tylko czasem
      dostają dodatkową serię.
    */

    if (
      role === "secondary" &&
      Math.random() < 0.35
    ) {

      sets += 1;

    }


    /*
      Izolacje / brzuch raczej nie są
      automatycznie pompowane objętością.
    */

    if (
      role === "accessory" &&
      Math.random() < 0.15
    ) {

      sets += 1;

    }

  }


  /*
    Dłuższa sesja może pozwolić na
    jedną dodatkową serię głównego ruchu,
    ale nadal nie wszystkim.
  */

  if (
    Number(config.time) >= 45 &&
    role === "main" &&
    Math.random() < 0.45
  ) {

    sets += 1;

  }


  /*
    Trudne technicznie / wysiłkowo
    ćwiczenie nie musi mieć wielu serii.
  */

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
    range.min,
    range.max
  );

}


/* =========================================
   POWTÓRZENIA / CZAS
   ========================================= */

function createPrescription(
  exercise,
  config,
  role
) {

  const sets =
    chooseSets(
      exercise,
      config,
      role
    );


  /*
    Ćwiczenia czasowe.
  */

  if (exercise.timed) {

    const range =
      exercise.timeRangeSeconds || {
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


  /*
    Ćwiczenia na powtórzenia.
  */

  const range =
    exercise.repetitionRange || {
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

    /*
      Przesuwamy zakres w górę,
      ale nie wychodzimy poza dane
      ćwiczenia.
    */

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
    exercise.restSeconds || {
      min: 45,
      max: 75
    };


  return {

    min: rest.min,

    max: rest.max,

    display:
      rest.min === rest.max
        ? `około ${rest.min} sek.`
        : `około ${rest.min}–${rest.max} sek.`

  };

}


/* =========================================
   PRZERWA MIĘDZY ĆWICZENIAMI
   ========================================= */

function createTransitionRest(
  exercise,
  nextExercise,
  index
) {

  /*
    Ostatnie ćwiczenie nie potrzebuje
    już ekranu odpoczynku.
  */

  if (!nextExercise) {

    return {
      show: false,
      min: 0,
      max: 0
    };

  }


  let fatigueScore = 0;


  /*
    Trudność obecnego ćwiczenia.
  */

  fatigueScore +=
    exercise.difficulty;


  /*
    Ruchy wielostawowe męczą bardziej.
  */

  if (
    exercise.exerciseType === "compound"
  ) {

    fatigueScore += 2;

  }


  /*
    Ćwiczenia o wysokim priorytecie
    zwykle są bardziej wymagające.
  */

  if (
    exercise.sessionPriority >= 4
  ) {

    fatigueScore += 1;

  }


  /*
    Jeśli następne ćwiczenie angażuje
    tę samą główną partię, odpoczynek
    jest bardziej uzasadniony.
  */

  if (
    exercise.primaryBodyPart ===
    nextExercise.primaryBodyPart
  ) {

    fatigueScore += 2;

  }


  /*
    Po kilku ćwiczeniach nawet umiarkowana
    sesja może zasługiwać na krótką przerwę.
  */

  if (
    index >= 2
  ) {

    fatigueScore += 1;

  }


  /*
    Bardzo lekkie przejście:
    żadnego osobnego ekranu.
  */

  if (
    fatigueScore <= 3
  ) {

    return {
      show: false,
      min: 0,
      max: 0
    };

  }


  /*
    Lekka / umiarkowana przerwa.
  */

  if (
    fatigueScore <= 5
  ) {

    return {
      show: true,
      min: 30,
      max: 45
    };

  }


  /*
    Wyraźniejsza przerwa.
  */

  if (
    fatigueScore <= 7
  ) {

    return {
      show: true,
      min: 45,
      max: 60
    };

  }


  /*
    Po mocniejszym ćwiczeniu.
  */

  return {
    show: true,
    min: 60,
    max: 90
  };

}


/* =========================================
   SZACOWANIE CZASU
   ========================================= */

function estimateExerciseSeconds(
  exercise,
  prescription
) {

  const setDuration =
    exercise.estimatedSetSeconds ||
    40;


  const rest =
    exercise.restSeconds || {
      min: 45,
      max: 75
    };


  const averageRest =
    (
      rest.min +
      rest.max
    ) / 2;


  const workTime =
    prescription.sets *
    setDuration;


  const restTime =
    Math.max(
      0,
      prescription.sets - 1
    ) *
    averageRest;


  return (
    workTime +
    restTime
  );

}


/* =========================================
   PUNKTACJA ĆWICZENIA
   ========================================= */

function scoreExercise(
  exercise,
  config,
  selectedExercises,
  bodyPartCounts,
  equipmentCounts
) {

  let score = 100;


  score +=
    getDifficultyScore(
      exercise,
      config
    );


  /*
    Ćwiczenia bardziej wartościowe dla
    struktury sesji dostają lekki bonus.
  */

  score +=
    exercise.sessionPriority * 3;


  /*
    Balans partii.
  */

  const bodyCount =
    bodyPartCounts[
      exercise.primaryBodyPart
    ] || 0;


  score -=
    bodyCount * 18;


  /*
    Unikamy powtarzania tego samego
    wzorca ruchowego.
  */

  const sameMovementCount =
    selectedExercises.filter(
      (selectedExercise) =>
        selectedExercise.movementType ===
        exercise.movementType
    ).length;


  score -=
    sameMovementCount * 25;


  /*
    Różnorodność sprzętu.
  */

  exercise.equipment.forEach(
    (equipmentItem) => {

      const equipmentCount =
        equipmentCounts[
          equipmentItem
        ] || 0;


      score -=
        equipmentCount * 8;

    }
  );


  /*
    Niewielka losowość, żeby treningi
    nie były kalką.
  */

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
  equipmentCounts
) {

  const available =
    pool.filter(
      (exercise) =>

        !selectedExercises.some(
          (selectedExercise) =>
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
            equipmentCounts
          )

      })
    );


  scored.sort(
    (a, b) =>
      b.score - a.score
  );


  /*
    Wybieramy spośród najlepszych,
    nie z całej puli.
  */

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
    "back",
    "chest",
    "glutes",
    "shoulders",
    "abs",
    "arms"
  ];


  const usedGroups =
    selectedExercises.map(
      (exercise) =>
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

        /*
          Najpierw priorytet sesyjny.
        */

        if (
          b.sessionPriority !==
          a.sessionPriority
        ) {

          return (
            b.sessionPriority -
            a.sessionPriority
          );

        }


        /*
          Przy podobnym priorytecie
          ćwiczenie wielostawowe wcześniej.
        */

        if (
          a.exerciseType === "compound" &&
          b.exerciseType !== "compound"
        ) {

          return -1;

        }


        if (
          b.exerciseType === "compound" &&
          a.exerciseType !== "compound"
        ) {

          return 1;

        }


        return 0;

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


    let candidateIndex =
      0;


    if (previous) {

      /*
        Najpierw próbujemy znaleźć
        inną partię i inny ruch.
      */

      let betterIndex =
        remaining.findIndex(
          (exercise) =>
            exercise.primaryBodyPart !==
              previous.primaryBodyPart &&
            exercise.movementType !==
              previous.movementType
        );


      /*
        Jeśli się nie uda, wystarczy
        inna partia.
      */

      if (
        betterIndex === -1
      ) {

        betterIndex =
          remaining.findIndex(
            (exercise) =>
              exercise.primaryBodyPart !==
              previous.primaryBodyPart
          );

      }


      if (
        betterIndex !== -1
      ) {

        candidateIndex =
          betterIndex;

      }

    }


    const [
      candidate
    ] =
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

  const targetExerciseCount =
    Math.min(
      getTargetExerciseCount(
        config.time
      ),
      GENERATOR_CONFIG.maxExercises
    );


  let pool =
    window.EXERCISES.filter(
      (exercise) =>

        isEquipmentAvailable(
          exercise,
          config.equipment
        ) &&

        isDifficultyAllowed(
          exercise,
          config
        ) &&

        exerciseMatchesBodyParts(
          exercise,
          config
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
        equipmentCounts
      );


    if (!candidate) {

      break;

    }


    selected.push(
      candidate
    );


    bodyPartCounts[
      candidate.primaryBodyPart
    ] =
      (
        bodyPartCounts[
          candidate.primaryBodyPart
        ] || 0
      ) + 1;


    candidate.equipment.forEach(
      (equipmentItem) => {

        equipmentCounts[
          equipmentItem
        ] =
          (
            equipmentCounts[
              equipmentItem
            ] || 0
          ) + 1;

      }
    );

  }


  const ordered =
    orderWorkout(
      selected
    );


  /*
    Najpierw budujemy pełne ćwiczenia.
  */

  const workout =
    ordered.map(
      (exercise, index) => {

        const role =
          getExerciseRole(
            exercise,
            index,
            ordered.length
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
    Następnie wyliczamy odpoczynek
    między poszczególnymi ćwiczeniami.
  */

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

  const usedIds =
    currentWorkout.map(
      (exercise) =>
        exercise.id
    );


  const candidates =
    window.EXERCISES.filter(
      (exercise) => {

        if (
          usedIds.includes(
            exercise.id
          )
        ) {

          return false;

        }


        if (
          exercise.primaryBodyPart !==
          currentExercise.primaryBodyPart
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
          !isEquipmentAvailable(
            exercise,
            config.equipment
          )
        ) {

          return false;

        }


        return true;

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
        exercise.movementType !==
        currentExercise.movementType
    );


  const finalPool =
    differentMovement.length > 0
      ? differentMovement
      : candidates;


  const replacement =
    shuffle(
      finalPool
    )[0];


  /*
    Zachowujemy podobną rolę w sesji.
  */

  const role =
    currentExercise.role ||
    "secondary";


  const prescription =
    createPrescription(
      replacement,
      config,
      role
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

    sets:
      prescription.sets,

    rest,

    estimatedSeconds:
      estimateExerciseSeconds(
        replacement,
        prescription
      ),

    transitionRest:
      currentExercise.transitionRest || {
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