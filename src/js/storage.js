/* =========================================
   K&K — Czas na Wycisk!
   PAMIĘĆ APLIKACJI
   v0.07.4
   ========================================= */


(() => {

  const STORAGE_KEY =
    "kk-czas-na-wycisk";


  const STORAGE_VERSION =
    2;


  /* =========================================
     DOMYŚLNA STRUKTURA DANYCH
     ========================================= */

  function createDefaultData() {

    return {

      version:
        STORAGE_VERSION,

      profiles: {

        female:
          createDefaultProfile(),

        male:
          createDefaultProfile()

      }

    };

  }


  function createDefaultProfile() {

    return {

      workoutHistory: [],

      exercisePreferences: {},

      activeSession: null

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
          : {},

      activeSession:
        (
          profile.activeSession &&
          typeof profile.activeSession ===
            "object"
        )
          ? profile.activeSession
          : null

    };

  }


  /* =========================================
     PROFIL
     ========================================= */

  function getProfile(
    profileName
  ) {

    const data =
      loadData();


    return (
      data.profiles[
        profileName
      ] ||
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
      !data.profiles[
        profileName
      ]
    ) {

      return false;

    }


    data.profiles[
      profileName
    ].workoutHistory.unshift(
      workout
    );


    /*
      Maksymalnie 50 ostatnich
      treningów na profil.
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


  function removeWorkout(
    profileName,
    workoutId
  ) {

    const data =
      loadData();


    if (
      !data.profiles[
        profileName
      ]
    ) {

      return false;

    }


    if (
      !workoutId
    ) {

      return false;

    }


    const currentHistory =
      data.profiles[
        profileName
      ].workoutHistory;


    const updatedHistory =
      currentHistory.filter(
        (workout) =>
          workout.id !==
          workoutId
      );


    /*
      Jeśli nic nie usunięto,
      zwracamy false.
    */

    if (
      updatedHistory.length ===
      currentHistory.length
    ) {

      return false;

    }


    data.profiles[
      profileName
    ].workoutHistory =
      updatedHistory;


    return saveData(
      data
    );

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
      !data.profiles[
        profileName
      ]
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
     AKTYWNA SESJA
     ========================================= */

  function saveActiveSession(
    profileName,
    session
  ) {

    const data =
      loadData();


    if (
      !data.profiles[
        profileName
      ]
    ) {

      return false;

    }


    if (
      !session ||
      typeof session !== "object"
    ) {

      return false;

    }


    data.profiles[
      profileName
    ].activeSession =
      session;


    return saveData(
      data
    );

  }


  function getActiveSession(
    profileName
  ) {

    const profile =
      getProfile(
        profileName
      );


    if (
      !profile.activeSession
    ) {

      return null;

    }


    return {
      ...profile.activeSession
    };

  }


  function clearActiveSession(
    profileName
  ) {

    const data =
      loadData();


    if (
      !data.profiles[
        profileName
      ]
    ) {

      return false;

    }


    data.profiles[
      profileName
    ].activeSession =
      null;


    return saveData(
      data
    );

  }


  function hasActiveSession(
    profileName
  ) {

    return (
      getActiveSession(
        profileName
      ) !== null
    );

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

    removeWorkout,

    setExercisePreference,

    getExercisePreference,

    getExercisePreferences,

    saveActiveSession,

    getActiveSession,

    clearActiveSession,

    hasActiveSession,

    clearAllData

  };

})();