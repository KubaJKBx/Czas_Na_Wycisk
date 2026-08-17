/* =========================================
   K&K — Czas na Wycisk!
   PAMIĘĆ APLIKACJI
   v0.06.0
   ========================================= */


(() => {

  const STORAGE_KEY =
    "kk-czas-na-wycisk";


  const STORAGE_VERSION =
    1;


  /* =========================================
     DOMYŚLNA STRUKTURA DANYCH
     ========================================= */

  function createDefaultData() {

    return {

      version:
        STORAGE_VERSION,

      profiles: {

        female: createDefaultProfile(),

        male: createDefaultProfile()

      }

    };

  }


  function createDefaultProfile() {

    return {

      workoutHistory: [],

      exercisePreferences: {}

    };

  }


  /* =========================================
     ODCZYT
     ========================================= */

  function loadData() {

    try {

      const savedData =
        localStorage.getItem(
          STORAGE_KEY
        );


      if (!savedData) {

        return createDefaultData();

      }


      const parsedData =
        JSON.parse(
          savedData
        );


      return normalizeData(
        parsedData
      );

    } catch (error) {

      console.warn(
        "Nie udało się odczytać pamięci aplikacji.",
        error
      );


      return createDefaultData();

    }

  }


  /* =========================================
     ZAPIS
     ========================================= */

  function saveData(data) {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
      );


      return true;

    } catch (error) {

      console.warn(
        "Nie udało się zapisać pamięci aplikacji.",
        error
      );


      return false;

    }

  }


  /* =========================================
     NORMALIZACJA
     ========================================= */

  function normalizeData(data) {

    const defaultData =
      createDefaultData();


    if (
      !data ||
      typeof data !== "object"
    ) {

      return defaultData;

    }


    return {

      version:
        STORAGE_VERSION,

      profiles: {

        female:
          normalizeProfile(
            data.profiles?.female
          ),

        male:
          normalizeProfile(
            data.profiles?.male
          )

      }

    };

  }


  function normalizeProfile(profile) {

    if (
      !profile ||
      typeof profile !== "object"
    ) {

      return createDefaultProfile();

    }


    return {

      workoutHistory:
        Array.isArray(
          profile.workoutHistory
        )
          ? profile.workoutHistory
          : [],

      exercisePreferences:
        (
          profile.exercisePreferences &&
          typeof profile.exercisePreferences ===
            "object"
        )
          ? profile.exercisePreferences
          : {}

    };

  }


  /* =========================================
     PROFIL
     ========================================= */

  function getProfile(profileName) {

    const data =
      loadData();


    return (
      data.profiles[profileName] ||
      createDefaultProfile()
    );

  }


  /* =========================================
     HISTORIA TRENINGÓW
     ========================================= */

  function addWorkout(
    profileName,
    workout
  ) {

    const data =
      loadData();


    if (
      !data.profiles[profileName]
    ) {

      return false;

    }


    data.profiles[
      profileName
    ].workoutHistory.unshift(
      workout
    );


    /*
      Na razie przechowujemy maksymalnie
      50 ostatnich treningów na profil.
    */

    data.profiles[
      profileName
    ].workoutHistory =
      data.profiles[
        profileName
      ].workoutHistory.slice(
        0,
        50
      );


    return saveData(
      data
    );

  }


  function getWorkoutHistory(
    profileName
  ) {

    const profile =
      getProfile(
        profileName
      );


    return [
      ...profile.workoutHistory
    ];

  }


  /* =========================================
     PREFERENCJE ĆWICZEŃ
     ========================================= */

  function setExercisePreference(
    profileName,
    exerciseId,
    preference
  ) {

    const data =
      loadData();


    if (
      !data.profiles[profileName]
    ) {

      return false;

    }


    if (
      preference !== "like" &&
      preference !== "dislike" &&
      preference !== null
    ) {

      return false;

    }


    if (
      preference === null
    ) {

      delete data
        .profiles[
          profileName
        ]
        .exercisePreferences[
          exerciseId
        ];

    } else {

      data
        .profiles[
          profileName
        ]
        .exercisePreferences[
          exerciseId
        ] =
          preference;

    }


    return saveData(
      data
    );

  }


  function getExercisePreference(
    profileName,
    exerciseId
  ) {

    const profile =
      getProfile(
        profileName
      );


    return (
      profile
        .exercisePreferences[
          exerciseId
        ] ||
      null
    );

  }


  function getExercisePreferences(
    profileName
  ) {

    const profile =
      getProfile(
        profileName
      );


    return {
      ...profile.exercisePreferences
    };

  }


  /* =========================================
     RESET — PRZYDA SIĘ W TESTACH
     ========================================= */

  function clearAllData() {

    localStorage.removeItem(
      STORAGE_KEY
    );

  }


  /* =========================================
     PUBLICZNE API
     ========================================= */

  window.WorkoutStorage = {

    loadData,

    getProfile,

    addWorkout,

    getWorkoutHistory,

    setExercisePreference,

    getExercisePreference,

    getExercisePreferences,

    clearAllData

  };

})();