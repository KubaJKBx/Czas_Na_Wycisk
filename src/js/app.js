/* =========================================
   K&K — Czas na Wycisk!
   APLIKACJA
   v0.06.2
   ========================================= */


/* =========================================
   EKRANY
   ========================================= */

const welcomeScreen =
  document.querySelector("#welcomeScreen");

const configuratorScreen =
  document.querySelector("#configuratorScreen");

const workoutPreviewScreen =
  document.querySelector("#workoutPreviewScreen");

const workoutSessionScreen =
  document.querySelector("#workoutSessionScreen");

const restScreen =
  document.querySelector("#restScreen");

const summaryScreen =
  document.querySelector("#summaryScreen");


/* =========================================
   START / KONFIGURATOR
   ========================================= */

const profileButtons =
  document.querySelectorAll(".profile-card");

const optionButtons =
  document.querySelectorAll(".option");

const backToWelcomeButton =
  document.querySelector("#backToWelcome");

const backToConfiguratorButton =
  document.querySelector("#backToConfigurator");

const generateWorkoutButton =
  document.querySelector("#generateWorkout");

const formMessage =
  document.querySelector("#formMessage");


/* =========================================
   PODGLĄD TRENINGU
   ========================================= */

const exerciseList =
  document.querySelector("#exerciseList");

const previewSummary =
  document.querySelector("#previewSummary");

const previewMessage =
  document.querySelector("#previewMessage");

const startWorkoutButton =
  document.querySelector("#startWorkout");


/* =========================================
   SESJA
   ========================================= */

const sessionBackButton =
  document.querySelector("#sessionBack");

const sessionTimer =
  document.querySelector("#sessionTimer");

const sessionCounter =
  document.querySelector("#sessionCounter");

const sessionExerciseName =
  document.querySelector("#sessionExerciseName");

const sessionBodyParts =
  document.querySelector("#sessionBodyParts");

const sessionEquipment =
  document.querySelector("#sessionEquipment");

const sessionDifficulty =
  document.querySelector("#sessionDifficulty");

const sessionPrescription =
  document.querySelector("#sessionPrescription");

const sessionSetRest =
  document.querySelector("#sessionSetRest");

const howButton =
  document.querySelector("#howButton");

const howPanel =
  document.querySelector("#howPanel");

const exerciseInstructions =
  document.querySelector("#exerciseInstructions");

const videoLink =
  document.querySelector("#videoLink");

const timedControl =
  document.querySelector("#timedControl");

const countdownDisplay =
  document.querySelector("#countdownDisplay");

const countdownStart =
  document.querySelector("#countdownStart");

const countdownPause =
  document.querySelector("#countdownPause");

const countdownReset =
  document.querySelector("#countdownReset");

const sessionActions =
  document.querySelector("#sessionActions");

const completeExerciseButton =
  document.querySelector("#completeExercise");

const skipExerciseButton =
  document.querySelector("#skipExercise");

const reactionPanel =
  document.querySelector("#reactionPanel");

const likeExerciseButton =
  document.querySelector("#likeExercise");

const dislikeExerciseButton =
  document.querySelector("#dislikeExercise");

const nextExerciseButton =
  document.querySelector("#nextExercise");

const progressFill =
  document.querySelector("#progressFill");

const progressMascot =
  document.querySelector("#progressMascot");

const progressPercent =
  document.querySelector("#progressPercent");


/* =========================================
   EKRAN ODPOCZYNKU
   ========================================= */

const restSessionTimer =
  document.querySelector("#restSessionTimer");

const restProgressPercent =
  document.querySelector("#restProgressPercent");

const restProgressFill =
  document.querySelector("#restProgressFill");

const restProgressMascot =
  document.querySelector("#restProgressMascot");

const restRecommendation =
  document.querySelector("#restRecommendation");

const restNextExercise =
  document.querySelector("#restNextExercise");

const restNextButton =
  document.querySelector("#restNextButton");


/* =========================================
   PODSUMOWANIE
   ========================================= */

const summaryTime =
  document.querySelector("#summaryTime");

const summaryCompleted =
  document.querySelector("#summaryCompleted");

const summarySkipped =
  document.querySelector("#summarySkipped");

const summaryExerciseList =
  document.querySelector("#summaryExerciseList");

const summaryListToggle =
  document.querySelector("#summaryListToggle");

const summaryRatingButtons =
  document.querySelectorAll(".summary-rating-button");

const summaryDoneButton =
  document.querySelector("#summaryDone");


/* =========================================
   STAN APLIKACJI
   ========================================= */

const workoutConfig = {

  profile: null,

  time: null,

  body: [],

  level: null,

  intensity: null,

  equipment: []

};


let currentWorkout = [];

let currentExerciseIndex = 0;

let workoutStartedAt = null;

let finalWorkoutDuration = 0;

let sessionTimerInterval = null;

let exerciseStatuses = [];

let exercisePreferences = {};

let workoutRating = null;

let workoutHistorySaved = false;


/* =========================================
   TIMER ĆWICZENIA CZASOWEGO
   ========================================= */

let countdownInterval = null;

let countdownInitialSeconds = 0;

let countdownRemainingSeconds = 0;

let countdownRunning = false;


/* =========================================
   WYBÓR PROFILU
   ========================================= */

profileButtons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      document.body.dataset.theme =
        button.dataset.profile;

    }
  );


  button.addEventListener(
    "focus",
    () => {

      document.body.dataset.theme =
        button.dataset.profile;

    }
  );


  button.addEventListener(
    "click",
    () => {

      workoutConfig.profile =
        button.dataset.profile;


      document.body.dataset.theme =
        button.dataset.profile;


      const storageProfile =
        getStorageProfileName(
          workoutConfig.profile
        );


      exercisePreferences =
        window.WorkoutStorage
          ? window.WorkoutStorage.getExercisePreferences(
              storageProfile
            )
          : {};


      showScreen(
        configuratorScreen
      );

    }
  );

});


/* =========================================
   KONFIGURATOR
   ========================================= */

optionButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const group =
        button.dataset.group;

      const value =
        button.dataset.value;


      if (group === "body") {

        handleBodySelection(
          button,
          value
        );

        return;

      }


      if (group === "equipment") {

        handleMultipleSelection(
          button,
          group,
          value
        );

        return;

      }


      handleSingleSelection(
        button,
        group,
        value
      );

    }
  );

});


/* =========================================
   POJEDYNCZY WYBÓR
   ========================================= */

function handleSingleSelection(
  selectedButton,
  group,
  value
) {

  const groupButtons =
    document.querySelectorAll(
      `[data-group="${group}"]`
    );


  groupButtons.forEach(
    (button) => {

      button.classList.remove(
        "is-selected"
      );

    }
  );


  selectedButton.classList.add(
    "is-selected"
  );


  workoutConfig[group] =
    value;


  clearFormMessage();

}


/* =========================================
   WIELOKROTNY WYBÓR
   ========================================= */

function handleMultipleSelection(
  button,
  group,
  value
) {

  button.classList.toggle(
    "is-selected"
  );


  const selectedValues =
    workoutConfig[group];


  const valueIndex =
    selectedValues.indexOf(
      value
    );


  if (valueIndex === -1) {

    selectedValues.push(
      value
    );

  } else {

    selectedValues.splice(
      valueIndex,
      1
    );

  }


  clearFormMessage();

}


/* =========================================
   PARTIE CIAŁA
   ========================================= */

function handleBodySelection(
  button,
  value
) {

  const bodyButtons =
    document.querySelectorAll(
      '[data-group="body"]'
    );


  if (value === "full") {

    bodyButtons.forEach(
      (bodyButton) => {

        bodyButton.classList.remove(
          "is-selected"
        );

      }
    );


    button.classList.add(
      "is-selected"
    );


    workoutConfig.body =
      ["full"];


    clearFormMessage();

    return;

  }


  const fullBodyButton =
    document.querySelector(
      '[data-group="body"][data-value="full"]'
    );


  fullBodyButton.classList.remove(
    "is-selected"
  );


  workoutConfig.body =
    workoutConfig.body.filter(
      (item) =>
        item !== "full"
    );


  button.classList.toggle(
    "is-selected"
  );


  if (
    button.classList.contains(
      "is-selected"
    )
  ) {

    if (
      !workoutConfig.body.includes(
        value
      )
    ) {

      workoutConfig.body.push(
        value
      );

    }

  } else {

    workoutConfig.body =
      workoutConfig.body.filter(
        (item) =>
          item !== value
      );

  }


  clearFormMessage();

}


/* =========================================
   WALIDACJA
   ========================================= */

function validateConfig() {

  if (!workoutConfig.time) {

    return "Wybierz czas treningu.";

  }


  if (
    workoutConfig.body.length === 0
  ) {

    return "Wybierz, co chcesz ćwiczyć.";

  }


  if (!workoutConfig.level) {

    return "Wybierz swój poziom.";

  }


  if (!workoutConfig.intensity) {

    return "Wybierz intensywność treningu.";

  }


  if (
    workoutConfig.equipment.length === 0
  ) {

    return "Wybierz przynajmniej jedną opcję sprzętu.";

  }


  return null;

}


/* =========================================
   GENEROWANIE
   ========================================= */

generateWorkoutButton.addEventListener(
  "click",
  () => {

    const validationError =
      validateConfig();


    if (validationError) {

      showFormMessage(
        validationError
      );

      return;

    }


    currentWorkout =
      window.WorkoutGenerator.generateWorkout(
        workoutConfig
      );


    if (
      currentWorkout.length === 0
    ) {

      showFormMessage(
        "Nie znaleźliśmy pasujących ćwiczeń. Spróbuj zmienić ustawienia."
      );

      return;

    }


    renderWorkoutPreview();


    showScreen(
      workoutPreviewScreen
    );

  }
);


/* =========================================
   PODGLĄD TRENINGU
   ========================================= */

function renderWorkoutPreview() {

  exerciseList.innerHTML =
    "";


  const estimatedMinutes =
    calculateEstimatedWorkoutMinutes(
      currentWorkout
    );


  previewSummary.textContent =
    `około ${estimatedMinutes} min • ${currentWorkout.length} ćwiczeń`;


  currentWorkout.forEach(
    (exercise, index) => {

      const card =
        createExerciseCard(
          exercise,
          index
        );


      exerciseList.appendChild(
        card
      );

    }
  );

}


/* =========================================
   SZACOWANIE CZASU
   ========================================= */

function calculateEstimatedWorkoutMinutes(
  workout
) {

  const exerciseSeconds =
    workout.reduce(
      (total, exercise) =>
        total +
        (
          exercise.estimatedSeconds ||
          0
        ),
      0
    );


  const transitionRestSeconds =
    workout.reduce(
      (total, exercise) => {

        if (
          !exercise.transitionRest ||
          !exercise.transitionRest.show
        ) {

          return total;

        }


        const averageRest =
          (
            exercise.transitionRest.min +
            exercise.transitionRest.max
          ) / 2;


        return (
          total +
          averageRest
        );

      },
      0
    );


  const naturalTransitions =
    Math.max(
      0,
      workout.length - 1
    ) * 15;


  const totalSeconds =
    exerciseSeconds +
    transitionRestSeconds +
    naturalTransitions;


  return Math.max(
    1,
    Math.round(
      totalSeconds / 60
    )
  );

}


/* =========================================
   KARTA ĆWICZENIA
   ========================================= */

function createExerciseCard(
  exercise,
  index
) {

  const article =
    document.createElement(
      "article"
    );


  article.className =
    "exercise-card";


  const number =
    String(index + 1)
      .padStart(
        2,
        "0"
      );


  const equipment =
    getEquipmentLabel(
      exercise.equipment
    );


  const difficulty =
    createDifficultyDisplay(
      exercise.difficulty
    );


  const bodyParts =
    getBodyPartsLabel(
      exercise.bodyParts
    );


  const rest =
    exercise.rest?.display ||
    "";


  article.innerHTML = `

    <div class="exercise-number">
      ${number}
    </div>


    <div class="exercise-information">

      <h2>
        ${exercise.name}
        <span class="exercise-body-parts-inline">
          (${bodyParts})
        </span>
      </h2>


      <div class="exercise-meta">

        <span>
          ${equipment}
        </span>

        <span class="difficulty">
          ${difficulty}
        </span>

      </div>


      <p class="exercise-prescription">
        ${exercise.prescription}
      </p>


      ${
        rest
          ? `
            <p class="exercise-rest-preview">
              Przerwa między seriami: ${rest}
            </p>
          `
          : ""
      }

    </div>


    <button
      class="replace-button"
      type="button"
      data-index="${index}"
    >
      ↻ Zastąp
    </button>

  `;


  const replaceButton =
    article.querySelector(
      ".replace-button"
    );


  replaceButton.addEventListener(
    "click",
    () => {

      replaceExercise(
        index
      );

    }
  );


  return article;

}


/* =========================================
   ZASTĄP
   ========================================= */

function replaceExercise(
  index
) {

  const currentExercise =
    currentWorkout[index];


  const replacement =
    window.WorkoutGenerator.findReplacement(
      currentExercise,
      currentWorkout,
      workoutConfig
    );


  if (!replacement) {

    showPreviewMessage(
      "Nie mamy teraz innego pasującego ćwiczenia."
    );

    return;

  }


  currentWorkout[index] =
    replacement;


  clearPreviewMessage();


  renderWorkoutPreview();

}


/* =========================================
   NAZWY SPRZĘTU
   ========================================= */

function getEquipmentLabel(
  equipment
) {

  if (
    !equipment ||
    equipment.length === 0
  ) {

    return "Bez sprzętu";

  }


  const labels = {

    bodyweight:
      "Masa własnego ciała",

    dumbbells:
      "Hantle",

    kettlebell:
      "Kettlebell",

    bands:
      "Gumy",

    "pullup-bar":
      "Drążek"

  };


  return equipment
    .map(
      (item) =>
        labels[item] ||
        item
    )
    .join(" + ");

}


/* =========================================
   NAZWY PARTII CIAŁA
   ========================================= */

function getBodyPartsLabel(
  bodyParts
) {

  const labels = {

    chest:
      "klatka",

    back:
      "plecy",

    shoulders:
      "barki",

    arms:
      "ramiona",

    abs:
      "brzuch",

    legs:
      "nogi",

    glutes:
      "pośladki"

  };


  return bodyParts
    .map(
      (item) =>
        labels[item] ||
        item
    )
    .join(" • ");

}


/* =========================================
   TRUDNOŚĆ
   ========================================= */

function createDifficultyDisplay(
  difficulty
) {

  let output =
    "";


  for (
    let i = 1;
    i <= 5;
    i++
  ) {

    if (
      i <= difficulty
    ) {

      output +=
        `<span class="difficulty-active">💪</span>`;

    } else {

      output +=
        `<span class="difficulty-inactive">💪</span>`;

    }

  }


  return output;

}


/* =========================================
   EKRANY
   ========================================= */

function showScreen(
  screenToShow
) {

  const screens =
    document.querySelectorAll(
      ".screen"
    );


  screens.forEach(
    (screen) => {

      screen.classList.add(
        "is-hidden"
      );

    }
  );


  screenToShow.classList.remove(
    "is-hidden"
  );


  window.scrollTo(
    0,
    0
  );

}


/* =========================================
   POWROTY
   ========================================= */

backToWelcomeButton.addEventListener(
  "click",
  () => {

    showScreen(
      welcomeScreen
    );

  }
);


backToConfiguratorButton.addEventListener(
  "click",
  () => {

    showScreen(
      configuratorScreen
    );

  }
);


/* =========================================
   START TRENINGU
   ========================================= */

startWorkoutButton.addEventListener(
  "click",
  () => {

    startWorkoutSession();

  }
);


function startWorkoutSession() {

  currentExerciseIndex =
    0;


  workoutStartedAt =
    Date.now();


  finalWorkoutDuration =
    0;


  workoutRating =
    null;


  workoutHistorySaved =
    false;


  exerciseStatuses =
    currentWorkout.map(
      () =>
        "pending"
    );


  startSessionTimer();


  renderSessionExercise();


  updateProgress();


  showScreen(
    workoutSessionScreen
  );

}


/* =========================================
   LICZNIK CAŁEJ SESJI
   ========================================= */

function startSessionTimer() {

  clearInterval(
    sessionTimerInterval
  );


  updateSessionTimer();


  sessionTimerInterval =
    setInterval(
      updateSessionTimer,
      1000
    );

}


function updateSessionTimer() {

  if (!workoutStartedAt) {

    return;

  }


  const elapsed =
    Date.now() -
    workoutStartedAt;


  const formatted =
    formatDuration(
      elapsed
    );


  sessionTimer.textContent =
    formatted;


  restSessionTimer.textContent =
    formatted;

}


function formatDuration(
  milliseconds
) {

  const totalSeconds =
    Math.floor(
      milliseconds / 1000
    );


  const minutes =
    Math.floor(
      totalSeconds / 60
    );


  const seconds =
    totalSeconds % 60;


  return (
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`
  );

}


/* =========================================
   RENDER ĆWICZENIA
   ========================================= */

function renderSessionExercise() {

  const exercise =
    currentWorkout[
      currentExerciseIndex
    ];


  if (!exercise) {

    return;

  }


  sessionCounter.textContent =
    `Ćwiczenie ${currentExerciseIndex + 1} z ${currentWorkout.length}`;


  sessionExerciseName.textContent =
    exercise.name;


  sessionBodyParts.textContent =
    `(${getBodyPartsLabel(exercise.bodyParts)})`;


  sessionEquipment.textContent =
    getEquipmentLabel(
      exercise.equipment
    );


  sessionDifficulty.innerHTML =
    createDifficultyDisplay(
      exercise.difficulty
    );


  sessionPrescription.textContent =
    exercise.prescription;


  sessionSetRest.textContent =
    exercise.rest?.display
      ? `Przerwa między seriami: ${exercise.rest.display}`
      : "";


  exerciseInstructions.textContent =
    exercise.instructions ||
    "Instrukcję dodamy później.";


  videoLink.href =
    exercise.videoUrl ||
    "https://www.youtube.com/";


  howPanel.classList.add(
    "is-hidden"
  );


  reactionPanel.classList.add(
    "is-hidden"
  );


  sessionActions.classList.remove(
    "is-hidden"
  );


  likeExerciseButton.classList.remove(
    "is-selected"
  );


  dislikeExerciseButton.classList.remove(
    "is-selected"
  );


  const savedPreference =
    exercisePreferences[
      exercise.id
    ] || null;


  if (
    savedPreference === "like"
  ) {

    likeExerciseButton.classList.add(
      "is-selected"
    );

  }


  if (
    savedPreference === "dislike"
  ) {

    dislikeExerciseButton.classList.add(
      "is-selected"
    );

  }


  resetCountdownState();


  if (exercise.timed) {

    timedControl.classList.remove(
      "is-hidden"
    );


    countdownInitialSeconds =
      extractSecondsFromPrescription(
        exercise.prescription
      );


    countdownRemainingSeconds =
      countdownInitialSeconds;


    updateCountdownDisplay();

  } else {

    timedControl.classList.add(
      "is-hidden"
    );

  }


  sessionBackButton.disabled =
    currentExerciseIndex === 0;

}


/* =========================================
   TECHNIKA
   ========================================= */

howButton.addEventListener(
  "click",
  () => {

    howPanel.classList.toggle(
      "is-hidden"
    );

  }
);


/* =========================================
   TIMER — START
   ========================================= */

countdownStart.addEventListener(
  "click",
  () => {

    if (
      countdownRunning
    ) {

      return;

    }


    if (
      countdownRemainingSeconds <= 0
    ) {

      countdownRemainingSeconds =
        countdownInitialSeconds;

    }


    countdownRunning =
      true;


    countdownInterval =
      setInterval(
        () => {

          countdownRemainingSeconds -=
            1;


          if (
            countdownRemainingSeconds <= 0
          ) {

            countdownRemainingSeconds =
              0;


            clearInterval(
              countdownInterval
            );


            countdownInterval =
              null;


            countdownRunning =
              false;

          }


          updateCountdownDisplay();

        },
        1000
      );

  }
);


/* =========================================
   TIMER — PAUZA
   ========================================= */

countdownPause.addEventListener(
  "click",
  () => {

    if (
      !countdownRunning
    ) {

      return;

    }


    clearInterval(
      countdownInterval
    );


    countdownInterval =
      null;


    countdownRunning =
      false;

  }
);


/* =========================================
   TIMER — RESET
   ========================================= */

countdownReset.addEventListener(
  "click",
  () => {

    clearInterval(
      countdownInterval
    );


    countdownInterval =
      null;


    countdownRunning =
      false;


    countdownRemainingSeconds =
      countdownInitialSeconds;


    updateCountdownDisplay();

  }
);


/* =========================================
   TIMER — WYŚWIETLANIE
   ========================================= */

function updateCountdownDisplay() {

  countdownDisplay.textContent =
    `${countdownRemainingSeconds} s`;

}


function extractSecondsFromPrescription(
  prescription
) {

  const match =
    prescription.match(
      /(\d+)\s*sek/
    );


  if (!match) {

    return 30;

  }


  return Number(
    match[1]
  );

}


function resetCountdownState() {

  clearInterval(
    countdownInterval
  );


  countdownInterval =
    null;


  countdownRunning =
    false;


  countdownInitialSeconds =
    0;


  countdownRemainingSeconds =
    0;


  countdownDisplay.textContent =
    "";

}


/* =========================================
   WYKONANE
   ========================================= */

completeExerciseButton.addEventListener(
  "click",
  () => {

    exerciseStatuses[
      currentExerciseIndex
    ] =
      "completed";


    updateProgress();


    sessionActions.classList.add(
      "is-hidden"
    );


    reactionPanel.classList.remove(
      "is-hidden"
    );

  }
);


/* =========================================
   POMIŃ
   ========================================= */

skipExerciseButton.addEventListener(
  "click",
  () => {

    exerciseStatuses[
      currentExerciseIndex
    ] =
      "skipped";


    updateProgress();


    advanceToNextExercise(
      false
    );

  }
);


/* =========================================
   REAKCJE
   ========================================= */

likeExerciseButton.addEventListener(
  "click",
  () => {

    const exercise =
      currentWorkout[
        currentExerciseIndex
      ];


    exercisePreferences[
      exercise.id
    ] =
      "like";


    saveExercisePreference(
      exercise.id,
      "like"
    );


    likeExerciseButton.classList.add(
      "is-selected"
    );


    dislikeExerciseButton.classList.remove(
      "is-selected"
    );

  }
);


dislikeExerciseButton.addEventListener(
  "click",
  () => {

    const exercise =
      currentWorkout[
        currentExerciseIndex
      ];


    exercisePreferences[
      exercise.id
    ] =
      "dislike";


    saveExercisePreference(
      exercise.id,
      "dislike"
    );


    dislikeExerciseButton.classList.add(
      "is-selected"
    );


    likeExerciseButton.classList.remove(
      "is-selected"
    );

  }
);


/* =========================================
   DALEJ PO WYKONANYM
   ========================================= */

nextExerciseButton.addEventListener(
  "click",
  () => {

    advanceToNextExercise(
      true
    );

  }
);


/* =========================================
   PRZEJŚCIE DALEJ
   ========================================= */

function advanceToNextExercise(
  allowRestScreen
) {

  const exercise =
    currentWorkout[
      currentExerciseIndex
    ];


  const isLastExercise =
    currentExerciseIndex >=
    currentWorkout.length - 1;


  if (isLastExercise) {

    finishWorkout();

    return;

  }


  if (
    allowRestScreen &&
    exercise.transitionRest &&
    exercise.transitionRest.show
  ) {

    showRestScreen(
      exercise.transitionRest
    );


    return;

  }


  currentExerciseIndex +=
    1;


  renderSessionExercise();


  showScreen(
    workoutSessionScreen
  );

}


/* =========================================
   EKRAN ODPOCZYNKU
   ========================================= */

function showRestScreen(
  transitionRest
) {

  const nextExercise =
    currentWorkout[
      currentExerciseIndex + 1
    ];


  restRecommendation.textContent =
    transitionRest.min === transitionRest.max
      ? `Odpocznij około ${transitionRest.min} sek.`
      : `Odpocznij około ${transitionRest.min}–${transitionRest.max} sek.`;


  restNextExercise.textContent =
    nextExercise
      ? nextExercise.name
      : "";


  syncRestProgress();


  showScreen(
    restScreen
  );

}


/* =========================================
   DALEJ Z ODPOCZYNKU
   ========================================= */

restNextButton.addEventListener(
  "click",
  () => {

    if (
      currentExerciseIndex <
      currentWorkout.length - 1
    ) {

      currentExerciseIndex +=
        1;


      renderSessionExercise();


      showScreen(
        workoutSessionScreen
      );

    }

  }
);


/* =========================================
   COFNIĘCIE
   ========================================= */

sessionBackButton.addEventListener(
  "click",
  () => {

    if (
      currentExerciseIndex > 0
    ) {

      currentExerciseIndex -=
        1;


      renderSessionExercise();

    }

  }
);


/* =========================================
   POSTĘP
   ========================================= */

function getProgressPercent() {

  const processedExercises =
    exerciseStatuses.filter(
      (status) =>
        status === "completed" ||
        status === "skipped"
    ).length;


  if (
    currentWorkout.length === 0
  ) {

    return 0;

  }


  return Math.round(
    (
      processedExercises /
      currentWorkout.length
    ) * 100
  );

}


function updateProgress() {

  const progress =
    getProgressPercent();


  progressPercent.textContent =
    `${progress}%`;


  progressFill.style.width =
    `${progress}%`;


  progressMascot.style.left =
    `${progress}%`;


  syncRestProgress();

}


function syncRestProgress() {

  const progress =
    getProgressPercent();


  restProgressPercent.textContent =
    `${progress}%`;


  restProgressFill.style.width =
    `${progress}%`;


  restProgressMascot.style.left =
    `${progress}%`;

}


/* =========================================
   KONIEC TRENINGU
   ========================================= */

function finishWorkout() {

  clearInterval(
    sessionTimerInterval
  );


  sessionTimerInterval =
    null;


  resetCountdownState();


  finalWorkoutDuration =
    Date.now() -
    workoutStartedAt;


  renderSummary();


  showScreen(
    summaryScreen
  );

}


/* =========================================
   PODSUMOWANIE
   ========================================= */

function renderSummary() {

  const completed =
    exerciseStatuses.filter(
      (status) =>
        status === "completed"
    ).length;


  const skipped =
    exerciseStatuses.filter(
      (status) =>
        status === "skipped"
    ).length;


  summaryTime.textContent =
    formatDuration(
      finalWorkoutDuration
    );


  summaryCompleted.textContent =
    completed;


  summarySkipped.textContent =
    skipped;


  summaryExerciseList.innerHTML =
    "";


  currentWorkout.forEach(
    (exercise, index) => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "summary-exercise-row";


      const status =
        exerciseStatuses[index];


      const statusLabel =
        status === "completed"
          ? "✓ Wykonane"
          : "— Pominięte";


      row.innerHTML = `

        <span>
          ${exercise.name}
        </span>

        <span class="summary-exercise-status">
          ${statusLabel}
        </span>

      `;


      summaryExerciseList.appendChild(
        row
      );

    }
  );


  summaryExerciseList.classList.add(
    "is-hidden"
  );


  summaryListToggle.textContent =
    "Zobacz ćwiczenia";


  summaryRatingButtons.forEach(
    (button) => {

      button.classList.remove(
        "is-selected"
      );

    }
  );

}


/* =========================================
   LISTA W PODSUMOWANIU
   ========================================= */

summaryListToggle.addEventListener(
  "click",
  () => {

    const isHidden =
      summaryExerciseList
        .classList
        .contains(
          "is-hidden"
        );


    summaryExerciseList
      .classList
      .toggle(
        "is-hidden"
      );


    summaryListToggle.textContent =
      isHidden
        ? "Ukryj ćwiczenia"
        : "Zobacz ćwiczenia";

  }
);


/* =========================================
   OCENA TRENINGU
   ========================================= */

summaryRatingButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        summaryRatingButtons.forEach(
          (ratingButton) => {

            ratingButton.classList.remove(
              "is-selected"
            );

          }
        );


        button.classList.add(
          "is-selected"
        );


        workoutRating =
          button.dataset.rating;

      }
    );

  }
);


/* =========================================
   GOTOWE
   ========================================= */

summaryDoneButton.addEventListener(
  "click",
  () => {

    saveCompletedWorkoutToHistory();


    resetSessionState();


    showScreen(
      welcomeScreen
    );

  }
);


/* =========================================
   ZAPIS ZAKOŃCZONEGO TRENINGU
   ========================================= */

function saveCompletedWorkoutToHistory() {

  if (
    workoutHistorySaved ||
    !window.WorkoutStorage ||
    !workoutConfig.profile ||
    currentWorkout.length === 0
  ) {

    return;

  }


  const storageProfile =
    getStorageProfileName(
      workoutConfig.profile
    );


  const completedAt =
    new Date();


  const workoutEntry = {

    id:
      `workout-${completedAt.getTime()}`,

    completedAt:
      completedAt.toISOString(),

    profile:
      workoutConfig.profile,

    plannedMinutes:
      Number(
        workoutConfig.time
      ),

    level:
      workoutConfig.level,

    intensity:
      workoutConfig.intensity,

    body:
      [
        ...workoutConfig.body
      ],

    equipment:
      [
        ...workoutConfig.equipment
      ],

    actualDurationMs:
      finalWorkoutDuration,

    actualDurationSeconds:
      Math.floor(
        finalWorkoutDuration / 1000
      ),

    rating:
      workoutRating || null,

    exercises:
      currentWorkout.map(
        (exercise, index) => {

          return {

            id:
              exercise.id,

            name:
              exercise.name,

            bodyParts:
              [
                ...(exercise.bodyParts || [])
              ],

            equipment:
              [
                ...(exercise.equipment || [])
              ],

            difficulty:
              exercise.difficulty,

            prescription:
              exercise.prescription,

            status:
              exerciseStatuses[index] ||
              "pending"

          };

        }
      )

  };


  const saved =
    window.WorkoutStorage.addWorkout(
      storageProfile,
      workoutEntry
    );


  if (saved) {

    workoutHistorySaved =
      true;

  }

}


/* =========================================
   RESET SESJI
   ========================================= */

function resetSessionState() {

  currentWorkout =
    [];


  currentExerciseIndex =
    0;


  workoutStartedAt =
    null;


  finalWorkoutDuration =
    0;


  exerciseStatuses =
    [];


  workoutRating =
    null;


  workoutHistorySaved =
    false;


  clearInterval(
    sessionTimerInterval
  );


  sessionTimerInterval =
    null;


  resetCountdownState();


  progressFill.style.width =
    "0%";


  progressMascot.style.left =
    "0%";


  progressPercent.textContent =
    "0%";


  restProgressFill.style.width =
    "0%";


  restProgressMascot.style.left =
    "0%";


  restProgressPercent.textContent =
    "0%";

}


/* =========================================
   PAMIĘĆ PROFILU I REAKCJI
   ========================================= */

function getStorageProfileName(
  appProfile
) {

  if (
    appProfile === "woman"
  ) {

    return "female";

  }


  return "male";

}


function saveExercisePreference(
  exerciseId,
  preference
) {

  if (
    !window.WorkoutStorage ||
    !workoutConfig.profile
  ) {

    return;

  }


  const storageProfile =
    getStorageProfileName(
      workoutConfig.profile
    );


  window.WorkoutStorage
    .setExercisePreference(
      storageProfile,
      exerciseId,
      preference
    );

}


/* =========================================
   KOMUNIKATY
   ========================================= */

function showFormMessage(
  message
) {

  formMessage.textContent =
    message;

}


function clearFormMessage() {

  formMessage.textContent =
    "";

}


function showPreviewMessage(
  message
) {

  previewMessage.textContent =
    message;

}


function clearPreviewMessage() {

  previewMessage.textContent =
    "";

}