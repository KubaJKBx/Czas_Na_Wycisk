/* =========================================
   K&K — Czas na Wycisk!
   WALIDATOR MODULARNEJ BAZY ĆWICZEŃ
   exercises/validator.js
   v1.0
   ========================================= */

(function validateExerciseDatabase() {

  const exercises = window.ExercisesDatabase;

  if (!Array.isArray(exercises)) {
    console.error(
      "[K&K Validator] Nie znaleziono window.ExercisesDatabase albo nie jest tablicą."
    );
    return;
  }


  /* =========================================
     DOZWOLONE WARTOŚCI
     ========================================= */

  const allowedPrimaryBodyParts = [
    "arms",
    "back",
    "chest",
    "abs",
    "glutes",
    "legs",
    "shoulders"
  ];

  const allowedStrongSecondaryBodyParts = [
    "arms",
    "back",
    "chest",
    "abs",
    "glutes",
    "legs",
    "shoulders"
  ];

  const allowedEquipment = [
    "bodyweight",
    "dumbbells",
    "kettlebell",
    "resistance-band",
    "mini-band",
    "pull-up-bar",
    "barbell",
    "bench"
  ];

  const allowedEquipmentConditions = [
    "anchor-low",
    "anchor-mid",
    "anchor-high",
    "anchor-any",
    "bar-high",
    "bar-low",
    "stable-dumbbell-base",
    "stable-elevated-surface",
    "stable-seated-surface",
    "stable-support",
    "sliding-surface",
    "soft-object-between-knees",
    "wall"
  ];

  const allowedWorkoutRoles = [
    "main",
    "secondary",
    "accessory",
    "finisher"
  ];

  const allowedArmTargets = [
    "biceps",
    "triceps"
  ];

  const allowedCoreFunctions = [
    "flexion",
    "rotation",
    "anti-rotation",
    "anti-extension",
    "lateral-flexion",
    "anti-lateral-flexion",
    "hip-flexion",
    "dynamic-stability"
  ];

  const allowedLegTargets = [
    "quads",
    "hamstrings",
    "calves",
    "adductors",
    "mixed"
  ];

  const allowedGluteTargets = [
    "maximus",
    "medius",
    "mixed"
  ];


  /* =========================================
     POMOCNICZE
     ========================================= */

  const errors = [];
  const warnings = [];

  function addError(exercise, message) {
    errors.push({
      id: exercise?.id || "(brak id)",
      message
    });
  }

  function addWarning(exercise, message) {
    warnings.push({
      id: exercise?.id || "(brak id)",
      message
    });
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  function validateRange(exercise, range, fieldName, required) {

    if (range == null) {
      if (required) {
        addError(
          exercise,
          `${fieldName} jest wymagane.`
        );
      }

      return;
    }

    if (
      typeof range !== "object" ||
      typeof range.min !== "number" ||
      typeof range.max !== "number"
    ) {
      addError(
        exercise,
        `${fieldName} musi mieć min i max jako liczby.`
      );

      return;
    }

    if (range.min < 0 || range.max < 0) {
      addError(
        exercise,
        `${fieldName} nie może zawierać wartości ujemnych.`
      );
    }

    if (range.min > range.max) {
      addError(
        exercise,
        `${fieldName}: min nie może być większe od max.`
      );
    }
  }

  function validateEquipmentItem(exercise, item, sourceName) {

    if (!item || typeof item !== "object") {
      addError(
        exercise,
        `${sourceName}: wpis sprzętu nie jest obiektem.`
      );
      return;
    }

    if (!allowedEquipment.includes(item.type)) {
      addError(
        exercise,
        `${sourceName}: nieznany sprzęt "${item.type}".`
      );
    }

    if (!isPositiveInteger(item.quantity)) {
      addError(
        exercise,
        `${sourceName}: quantity musi być dodatnią liczbą całkowitą.`
      );
    }
  }


  /* =========================================
     KONTROLA DUPLIKATÓW ID
     ========================================= */

  const idCounts = new Map();

  exercises.forEach((exercise) => {
    const id = exercise?.id;

    if (!isNonEmptyString(id)) {
      return;
    }

    idCounts.set(
      id,
      (idCounts.get(id) || 0) + 1
    );
  });

  idCounts.forEach((count, id) => {
    if (count > 1) {
      errors.push({
        id,
        message: `ID występuje ${count} razy.`
      });
    }
  });


  /* =========================================
     WALIDACJA KAŻDEGO ĆWICZENIA
     ========================================= */

  exercises.forEach((exercise) => {

    if (!exercise || typeof exercise !== "object") {
      errors.push({
        id: "(nieznany)",
        message: "Rekord ćwiczenia nie jest obiektem."
      });
      return;
    }


    /* -----------------------------------------
       PODSTAWOWE POLA
       ----------------------------------------- */

    if (!isNonEmptyString(exercise.id)) {
      addError(exercise, "Brak poprawnego id.");
    }

    if (!isNonEmptyString(exercise.name)) {
      addError(exercise, "Brak poprawnej nazwy.");
    }

    if (!allowedPrimaryBodyParts.includes(exercise.primaryBodyPart)) {
      addError(
        exercise,
        `Nieznane primaryBodyPart "${exercise.primaryBodyPart}".`
      );
    }

    if (!Array.isArray(exercise.secondaryBodyParts)) {
      addError(
        exercise,
        "secondaryBodyParts musi być tablicą."
      );
    }

    if (!Array.isArray(exercise.strongSecondaryBodyParts)) {
      addError(
        exercise,
        "strongSecondaryBodyParts musi być tablicą."
      );
    } else {

      exercise.strongSecondaryBodyParts.forEach((bodyPart) => {

        if (!allowedStrongSecondaryBodyParts.includes(bodyPart)) {
          addError(
            exercise,
            `Nieznane strongSecondaryBodyParts "${bodyPart}".`
          );
        }

        if (bodyPart === exercise.primaryBodyPart) {
          addWarning(
            exercise,
            `strongSecondaryBodyParts zawiera tę samą partię co primaryBodyPart: "${bodyPart}".`
          );
        }

    

      });

    }


    /* -----------------------------------------
       SPRZĘT
       ----------------------------------------- */

    if (!Array.isArray(exercise.requiredEquipment)) {
      addError(
        exercise,
        "requiredEquipment musi być tablicą."
      );
    } else {

      exercise.requiredEquipment.forEach((item) => {
        validateEquipmentItem(
          exercise,
          item,
          "requiredEquipment"
        );
      });

    }


    if (exercise.equipmentOptions !== undefined) {

      if (!Array.isArray(exercise.equipmentOptions)) {
        addError(
          exercise,
          "equipmentOptions musi być tablicą."
        );
      } else {

        if (exercise.equipmentOptions.length === 0) {
          addWarning(
            exercise,
            "equipmentOptions istnieje, ale jest puste."
          );
        }

        exercise.equipmentOptions.forEach(
          (option, optionIndex) => {

            if (!Array.isArray(option)) {
              addError(
                exercise,
                `equipmentOptions[${optionIndex}] musi być tablicą.`
              );
              return;
            }

            if (option.length === 0) {
              addError(
                exercise,
                `equipmentOptions[${optionIndex}] jest puste.`
              );
            }

            option.forEach((item) => {
              validateEquipmentItem(
                exercise,
                item,
                `equipmentOptions[${optionIndex}]`
              );
            });

          }
        );

      }

    }


    if (
      Array.isArray(exercise.requiredEquipment) &&
      exercise.requiredEquipment.length === 0 &&
      (
        !Array.isArray(exercise.equipmentOptions) ||
        exercise.equipmentOptions.length === 0
      )
    ) {
      addError(
        exercise,
        "Brak requiredEquipment i brak equipmentOptions."
      );
    }


    /* -----------------------------------------
       WARUNKI SPRZĘTOWE
       ----------------------------------------- */

    if (!Array.isArray(exercise.equipmentConditions)) {
      addError(
        exercise,
        "equipmentConditions musi być tablicą."
      );
    } else {

      exercise.equipmentConditions.forEach(
        (condition) => {

          if (!allowedEquipmentConditions.includes(condition)) {
            addError(
              exercise,
              `Nieznany equipmentCondition "${condition}".`
            );
          }

        }
      );

    }


    /* -----------------------------------------
       TRUDNOŚĆ
       ----------------------------------------- */

    if (
      !Number.isInteger(exercise.difficulty) ||
      exercise.difficulty < 1 ||
      exercise.difficulty > 5
    ) {
      addError(
        exercise,
        "difficulty musi być liczbą całkowitą od 1 do 5."
      );
    }


    /* -----------------------------------------
       WZORZEC RUCHU / TAGI
       ----------------------------------------- */

    if (!isNonEmptyString(exercise.movementPattern)) {
      addError(
        exercise,
        "Brak poprawnego movementPattern."
      );
    }

    if (!Array.isArray(exercise.movementTags)) {
      addError(
        exercise,
        "movementTags musi być tablicą."
      );
    }


    /* -----------------------------------------
       ROLA
       ----------------------------------------- */

    if (!allowedWorkoutRoles.includes(exercise.workoutRole)) {
      addError(
        exercise,
        `Nieznane workoutRole "${exercise.workoutRole}".`
      );
    }


    /* -----------------------------------------
       ZMĘCZENIE
       ----------------------------------------- */

    if (
      !Number.isInteger(exercise.fatigue) ||
      exercise.fatigue < 1 ||
      exercise.fatigue > 5
    ) {
      addError(
        exercise,
        "fatigue musi być liczbą całkowitą od 1 do 5."
      );
    }


    /* -----------------------------------------
       POWTÓRZENIA / CZAS
       ----------------------------------------- */

    if (typeof exercise.timed !== "boolean") {
      addError(
        exercise,
        "timed musi być true albo false."
      );
    } else if (exercise.timed) {

      if (exercise.repRange !== null) {
        addError(
          exercise,
          "Ćwiczenie timed=true powinno mieć repRange: null."
        );
      }

      validateRange(
        exercise,
        exercise.timeRange,
        "timeRange",
        true
      );

    } else {

      validateRange(
        exercise,
        exercise.repRange,
        "repRange",
        true
      );

      if (exercise.timeRange !== null) {
        addError(
          exercise,
          "Ćwiczenie timed=false powinno mieć timeRange: null."
        );
      }

    }


    validateRange(
      exercise,
      exercise.setRange,
      "setRange",
      true
    );

    validateRange(
      exercise,
      exercise.restRange,
      "restRange",
      true
    );


    /* -----------------------------------------
       SZACOWANY CZAS
       ----------------------------------------- */

    if (
      typeof exercise.estimatedSeconds !== "number" ||
      exercise.estimatedSeconds <= 0
    ) {
      addError(
        exercise,
        "estimatedSeconds musi być liczbą większą od 0."
      );
    }


    /* -----------------------------------------
       INSTRUKCJE / FILM
       ----------------------------------------- */

    if (!isNonEmptyString(exercise.instructions)) {
      addError(
        exercise,
        "Brak instrukcji."
      );
    }

    if (typeof exercise.videoUrl !== "string") {
      addError(
        exercise,
        "videoUrl musi być stringiem."
      );
    }


    /* -----------------------------------------
       POLA SPECJALNE PARTII
       ----------------------------------------- */

    if (exercise.primaryBodyPart === "arms") {

      if (!allowedArmTargets.includes(exercise.armTarget)) {
        addError(
          exercise,
          `Ramiona wymagają poprawnego armTarget. Otrzymano "${exercise.armTarget}".`
        );
      }

    }


    if (exercise.primaryBodyPart === "abs") {

      if (!allowedCoreFunctions.includes(exercise.coreFunction)) {
        addError(
          exercise,
          `Brzuch wymaga poprawnego coreFunction. Otrzymano "${exercise.coreFunction}".`
        );
      }

    }


    if (exercise.primaryBodyPart === "legs") {

      if (!allowedLegTargets.includes(exercise.legTarget)) {
        addError(
          exercise,
          `Nogi wymagają poprawnego legTarget. Otrzymano "${exercise.legTarget}".`
        );
      }

    }


    if (exercise.primaryBodyPart === "glutes") {

      if (!allowedGluteTargets.includes(exercise.gluteTarget)) {
        addError(
          exercise,
          `Pośladki wymagają poprawnego gluteTarget. Otrzymano "${exercise.gluteTarget}".`
        );
      }

    }

  });


  /* =========================================
     RAPORT
     ========================================= */

  console.group(
    `[K&K Validator] Baza ćwiczeń — ${exercises.length} rekordów`
  );

  if (errors.length === 0) {
    console.log("✅ Brak błędów krytycznych.");
  } else {
    console.error(
      `❌ Błędy krytyczne: ${errors.length}`
    );

    console.table(errors);
  }

  if (warnings.length === 0) {
    console.log("✅ Brak ostrzeżeń.");
  } else {
    console.warn(
      `⚠️ Ostrzeżenia: ${warnings.length}`
    );

    console.table(warnings);
  }

  console.log(
    `Łącznie ćwiczeń: ${exercises.length}`
  );

  console.log(
    `Unikalnych ID: ${idCounts.size}`
  );

  console.groupEnd();


  /* =========================================
     UDOSTĘPNIENIE RAPORTU
     ========================================= */

  window.ExerciseDatabaseValidation = {
    totalExercises: exercises.length,
    uniqueIds: idCounts.size,
    errors,
    warnings,
    isValid: errors.length === 0
  };

})();