/* =========================================
   K&K — Czas na Wycisk!
   APLIKACJA
   v0.06.6
   ========================================= */

/* EKRANY */
const welcomeScreen = document.querySelector("#welcomeScreen");
const configuratorScreen = document.querySelector("#configuratorScreen");
const workoutPreviewScreen = document.querySelector("#workoutPreviewScreen");
const workoutSessionScreen = document.querySelector("#workoutSessionScreen");
const restScreen = document.querySelector("#restScreen");
const summaryScreen = document.querySelector("#summaryScreen");
const resumeSessionScreen = document.querySelector("#resumeSessionScreen");

/* WZNOWIENIE SESJI */
const resumeSessionDetails = document.querySelector("#resumeSessionDetails");
const resumeSessionContinue = document.querySelector("#resumeSessionContinue");
const resumeSessionRestart = document.querySelector("#resumeSessionRestart");

/* START / KONFIGURATOR */
const profileButtons = document.querySelectorAll(".profile-card");
const optionButtons = document.querySelectorAll(".option");
const backToWelcomeButton = document.querySelector("#backToWelcome");
const backToConfiguratorButton = document.querySelector("#backToConfigurator");
const generateWorkoutButton = document.querySelector("#generateWorkout");
const formMessage = document.querySelector("#formMessage");

/* PODGLĄD */
const exerciseList = document.querySelector("#exerciseList");
const previewSummary = document.querySelector("#previewSummary");
const previewMessage = document.querySelector("#previewMessage");
const startWorkoutButton = document.querySelector("#startWorkout");

/* SESJA */
const sessionBackButton = document.querySelector("#sessionBack");
const sessionTimer = document.querySelector("#sessionTimer");
const sessionCounter = document.querySelector("#sessionCounter");
const sessionExerciseName = document.querySelector("#sessionExerciseName");
const sessionBodyParts = document.querySelector("#sessionBodyParts");
const sessionEquipment = document.querySelector("#sessionEquipment");
const sessionDifficulty = document.querySelector("#sessionDifficulty");
const sessionPrescription = document.querySelector("#sessionPrescription");
const sessionSetRest = document.querySelector("#sessionSetRest");
const howButton = document.querySelector("#howButton");
const howPanel = document.querySelector("#howPanel");
const exerciseInstructions = document.querySelector("#exerciseInstructions");
const videoLink = document.querySelector("#videoLink");
const timedControl = document.querySelector("#timedControl");
const countdownDisplay = document.querySelector("#countdownDisplay");
const countdownStart = document.querySelector("#countdownStart");
const countdownPause = document.querySelector("#countdownPause");
const countdownReset = document.querySelector("#countdownReset");
const sessionActions = document.querySelector("#sessionActions");
const completeExerciseButton = document.querySelector("#completeExercise");
const skipExerciseButton = document.querySelector("#skipExercise");
const reactionPanel = document.querySelector("#reactionPanel");
const likeExerciseButton = document.querySelector("#likeExercise");
const dislikeExerciseButton = document.querySelector("#dislikeExercise");
const nextExerciseButton = document.querySelector("#nextExercise");
const progressFill = document.querySelector("#progressFill");
const progressMascot = document.querySelector("#progressMascot");
const progressPercent = document.querySelector("#progressPercent");

/* ODPOCZYNEK */
const restSessionTimer = document.querySelector("#restSessionTimer");
const restProgressPercent = document.querySelector("#restProgressPercent");
const restProgressFill = document.querySelector("#restProgressFill");
const restProgressMascot = document.querySelector("#restProgressMascot");
const restRecommendation = document.querySelector("#restRecommendation");
const restNextExercise = document.querySelector("#restNextExercise");
const restNextButton = document.querySelector("#restNextButton");

/* PODSUMOWANIE */
const summaryTime = document.querySelector("#summaryTime");
const summaryCompleted = document.querySelector("#summaryCompleted");
const summarySkipped = document.querySelector("#summarySkipped");
const summaryExerciseList = document.querySelector("#summaryExerciseList");
const summaryListToggle = document.querySelector("#summaryListToggle");
const summaryRatingButtons = document.querySelectorAll(".summary-rating-button");
const summaryDoneButton = document.querySelector("#summaryDone");

/* STAN */
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
let activeSessionScreen = null;
let activeExercisePhase = "actions";
let pendingResumeSession = null;
let pendingResumeProfile = null;

/* TIMER ĆWICZENIA */
let countdownInterval = null;
let countdownInitialSeconds = 0;
let countdownRemainingSeconds = 0;
let countdownRunning = false;

/* =========================================
   PROFIL
   ========================================= */

profileButtons.forEach((button) => {
  const setTheme = () => {
    document.body.dataset.theme = button.dataset.profile;
  };

  button.addEventListener("mouseenter", setTheme);
  button.addEventListener("focus", setTheme);

  button.addEventListener("click", () => {
    workoutConfig.profile = button.dataset.profile;
    document.body.dataset.theme = workoutConfig.profile;

    const storageProfile = getStorageProfileName(workoutConfig.profile);

    exercisePreferences = window.WorkoutStorage
      ? window.WorkoutStorage.getExercisePreferences(storageProfile)
      : {};

    showScreen(configuratorScreen);
  });
});

/* =========================================
   KONFIGURATOR
   ========================================= */

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.group;
    const value = button.dataset.value;

    if (group === "body") {
      handleBodySelection(button, value);
      return;
    }

    if (group === "equipment") {
      handleMultipleSelection(button, group, value);
      return;
    }

    handleSingleSelection(button, group, value);
  });
});

function handleSingleSelection(selectedButton, group, value) {
  document
    .querySelectorAll(`[data-group="${group}"]`)
    .forEach((button) => button.classList.remove("is-selected"));

  selectedButton.classList.add("is-selected");
  workoutConfig[group] = value;
  clearFormMessage();
}

function handleMultipleSelection(button, group, value) {
  button.classList.toggle(
    "is-selected"
  );

  workoutConfig[group] =
    Array.from(
      document.querySelectorAll(
        `[data-group="${group}"].is-selected`
      )
    ).map(
      (selectedButton) =>
        selectedButton.dataset.value
    );

  clearFormMessage();
}

function handleBodySelection(button, value) {
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

    workoutConfig.body = [
      "full"
    ];

    clearFormMessage();

    return;
  }

  const fullBodyButton =
    document.querySelector(
      '[data-group="body"][data-value="full"]'
    );

  fullBodyButton?.classList.remove(
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

function validateConfig() {
  /*
    Przed walidacją synchronizujemy sprzęt
    bezpośrednio z zaznaczonymi przyciskami.
  */
  workoutConfig.equipment =
    Array.from(
      document.querySelectorAll(
        '[data-group="equipment"].is-selected'
      )
    ).map(
      (button) =>
        button.dataset.value
    );

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

generateWorkoutButton.addEventListener("click", () => {
  const validationError = validateConfig();

  if (validationError) {
    showFormMessage(validationError);
    return;
  }

  currentWorkout =
    window.WorkoutGenerator.generateWorkout(workoutConfig);

  if (currentWorkout.length === 0) {
    showFormMessage(
      "Nie znaleźliśmy pasujących ćwiczeń. Spróbuj zmienić ustawienia."
    );
    return;
  }

  renderWorkoutPreview();
  showScreen(workoutPreviewScreen);
});

/* =========================================
   PODGLĄD TRENINGU
   ========================================= */

function renderWorkoutPreview() {
  exerciseList.innerHTML = "";

  const estimatedMinutes =
    calculateEstimatedWorkoutMinutes(currentWorkout);

  previewSummary.textContent =
    `około ${estimatedMinutes} min • ${currentWorkout.length} ćwiczeń`;

  currentWorkout.forEach((exercise, index) => {
    exerciseList.appendChild(
      createExerciseCard(exercise, index)
    );
  });
}

function calculateEstimatedWorkoutMinutes(workout) {
  const exerciseSeconds = workout.reduce(
    (total, exercise) =>
      total + (exercise.estimatedSeconds || 0),
    0
  );

  const transitionRestSeconds = workout.reduce(
    (total, exercise) => {
      if (!exercise.transitionRest?.show) {
        return total;
      }

      return total +
        (
          exercise.transitionRest.min +
          exercise.transitionRest.max
        ) / 2;
    },
    0
  );

  const naturalTransitions =
    Math.max(0, workout.length - 1) * 15;

  const totalSeconds =
    exerciseSeconds +
    transitionRestSeconds +
    naturalTransitions;

  return Math.max(
    1,
    Math.round(totalSeconds / 60)
  );
}

/* =========================================
   KARTA ĆWICZENIA
   ========================================= */

function createExerciseCard(exercise, index) {
  const article = document.createElement("article");
  article.className = "exercise-card";

  const number =
    String(index + 1).padStart(2, "0");

  const equipment =
    getEquipmentLabel(exercise.equipment);

  const difficulty =
    createDifficultyDisplay(exercise.difficulty);

  const bodyParts =
    getBodyPartsLabel(exercise.bodyParts);

  const rest =
    exercise.rest?.display || "";

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
    article.querySelector(".replace-button");

  replaceButton.addEventListener(
    "click",
    () => {
      replaceExercise(index);
    }
  );

  return article;
}

/* =========================================
   ZASTĄP
   ========================================= */

function replaceExercise(index) {
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

  currentWorkout[index] = replacement;

  clearPreviewMessage();
  renderWorkoutPreview();
}

/* =========================================
   ETYKIETY
   ========================================= */

function getEquipmentLabel(equipment) {
  if (!equipment || equipment.length === 0) {
    return "Bez sprzętu";
  }

  const labels = {
    bodyweight: "Masa własnego ciała",
    dumbbells: "Hantle",
    kettlebell: "Kettlebell",
    bands: "Gumy",
    "pullup-bar": "Drążek"
  };

  return equipment
    .map((item) => labels[item] || item)
    .join(" + ");
}

function getBodyPartsLabel(bodyParts) {
  const labels = {
    chest: "klatka",
    back: "plecy",
    shoulders: "barki",
    arms: "ramiona",
    abs: "brzuch",
    legs: "nogi",
    glutes: "pośladki"
  };

  return (bodyParts || [])
    .map((item) => labels[item] || item)
    .join(" • ");
}

function createDifficultyDisplay(difficulty) {
  let output = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= difficulty) {
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

function showScreen(screenToShow) {
  const screens =
    document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.add("is-hidden");
  });

  screenToShow?.classList.remove("is-hidden");

  window.scrollTo(0, 0);
}

/* =========================================
   POWROTY
   ========================================= */

backToWelcomeButton.addEventListener(
  "click",
  () => {
    showScreen(welcomeScreen);
  }
);

backToConfiguratorButton.addEventListener(
  "click",
  () => {
    showScreen(configuratorScreen);
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
  currentExerciseIndex = 0;

  workoutStartedAt =
    Date.now();

  finalWorkoutDuration = 0;

  workoutRating = null;

  workoutHistorySaved = false;

  activeSessionScreen =
    "exercise";

  activeExercisePhase =
    "actions";

  exerciseStatuses =
    currentWorkout.map(
      () => "pending"
    );

  startSessionTimer();

  renderSessionExercise();

  updateProgress();

  showScreen(workoutSessionScreen);

  saveActiveWorkoutSession();
}

/* =========================================
   LICZNIK SESJI
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
    formatDuration(elapsed);

  sessionTimer.textContent =
    formatted;

  restSessionTimer.textContent =
    formatted;
}

function formatDuration(milliseconds) {
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
   TIMER ĆWICZENIA
   ========================================= */

countdownStart.addEventListener(
  "click",
  () => {
    if (countdownRunning) {
      return;
    }

    if (
      countdownRemainingSeconds <= 0
    ) {
      countdownRemainingSeconds =
        countdownInitialSeconds;
    }

    countdownRunning = true;

    saveActiveWorkoutSession();

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

countdownPause.addEventListener(
  "click",
  () => {
    if (!countdownRunning) {
      return;
    }

    clearInterval(
      countdownInterval
    );

    countdownInterval =
      null;

    countdownRunning =
      false;

    saveActiveWorkoutSession();
  }
);

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

    saveActiveWorkoutSession();
  }
);

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

    activeSessionScreen =
      "exercise";

    activeExercisePhase =
      "reaction";

    saveActiveWorkoutSession();
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

    saveActiveWorkoutSession();
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

    saveActiveWorkoutSession();
  }
);

/* =========================================
   DALEJ
   ========================================= */

nextExerciseButton.addEventListener(
  "click",
  () => {
    advanceToNextExercise(
      true
    );
  }
);

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

  activeSessionScreen =
    "exercise";

  activeExercisePhase =
    "actions";

  renderSessionExercise();

  showScreen(
    workoutSessionScreen
  );

  saveActiveWorkoutSession();
}

/* =========================================
   ODPOCZYNEK
   ========================================= */

function showRestScreen(
  transitionRest
) {
  const nextExercise =
    currentWorkout[
      currentExerciseIndex + 1
    ];

  restRecommendation.textContent =
    transitionRest.min ===
      transitionRest.max
      ? `Odpocznij około ${transitionRest.min} sek.`
      : `Odpocznij około ${transitionRest.min}–${transitionRest.max} sek.`;

  restNextExercise.textContent =
    nextExercise
      ? nextExercise.name
      : "";

  syncRestProgress();

  activeSessionScreen =
    "rest";

  activeExercisePhase =
    "actions";

  showScreen(
    restScreen
  );

  saveActiveWorkoutSession();
}

restNextButton.addEventListener(
  "click",
  () => {
    if (
      currentExerciseIndex >=
      currentWorkout.length - 1
    ) {
      return;
    }

    currentExerciseIndex +=
      1;

    activeSessionScreen =
      "exercise";

    activeExercisePhase =
      "actions";

    renderSessionExercise();

    showScreen(
      workoutSessionScreen
    );

    saveActiveWorkoutSession();
  }
);

/* =========================================
   COFNIĘCIE
   ========================================= */

sessionBackButton.addEventListener(
  "click",
  () => {
    if (
      currentExerciseIndex <= 0
    ) {
      return;
    }

    currentExerciseIndex -=
      1;

    activeSessionScreen =
      "exercise";

    activeExercisePhase =
      "actions";

    renderSessionExercise();

    saveActiveWorkoutSession();
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

  activeSessionScreen =
    "summary";

  activeExercisePhase =
    "actions";

  showScreen(
    summaryScreen
  );

  saveActiveWorkoutSession();
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

        saveActiveWorkoutSession();
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

    clearSavedActiveSession();

    resetSessionState();

    showScreen(
      welcomeScreen
    );
  }
);

/* =========================================
   ZAPIS AKTYWNEJ SESJI
   ========================================= */

function saveActiveWorkoutSession() {
  if (
    !window.WorkoutStorage ||
    !workoutConfig.profile ||
    currentWorkout.length === 0 ||
    !workoutStartedAt
  ) {
    return false;
  }

  const storageProfile =
    getStorageProfileName(
      workoutConfig.profile
    );

  const sessionSnapshot = {
    version: 1,

    savedAt:
      new Date().toISOString(),

    profile:
      workoutConfig.profile,

    config: {
      profile:
        workoutConfig.profile,

      time:
        workoutConfig.time,

      body:
        [
          ...workoutConfig.body
        ],

      level:
        workoutConfig.level,

      intensity:
        workoutConfig.intensity,

      equipment:
        [
          ...workoutConfig.equipment
        ]
    },

    workout:
      currentWorkout,

    currentExerciseIndex:
      currentExerciseIndex,

    exerciseStatuses:
      [
        ...exerciseStatuses
      ],

    workoutStartedAt:
      workoutStartedAt,

    finalWorkoutDuration:
      finalWorkoutDuration,

    workoutRating:
      workoutRating || null,

    screen:
      activeSessionScreen ||
      "exercise",

    exercisePhase:
      activeExercisePhase,

    countdown: {
      initialSeconds:
        countdownInitialSeconds,

      remainingSeconds:
        countdownRemainingSeconds,

      running:
        false
    }
  };

  return window.WorkoutStorage
    .saveActiveSession(
      storageProfile,
      sessionSnapshot
    );
}

function clearSavedActiveSession() {
  if (
    !window.WorkoutStorage ||
    !workoutConfig.profile
  ) {
    return false;
  }

  const storageProfile =
    getStorageProfileName(
      workoutConfig.profile
    );

  return window.WorkoutStorage
    .clearActiveSession(
      storageProfile
    );
}

/* =========================================
   HISTORIA TRENINGÓW
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
        (exercise, index) => ({
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
        })
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

  activeSessionScreen =
    null;

  activeExercisePhase =
    "actions";

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
  return appProfile === "woman"
    ? "female"
    : "male";
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
   WYKRYWANIE NIEDOKOŃCZONEJ SESJI
   ========================================= */

function initializeResumeSession() {
  if (
    !window.WorkoutStorage ||
    !resumeSessionScreen
  ) {
    return;
  }

  const candidates = [
    {
      storageProfile:
        "female",

      session:
        window.WorkoutStorage
          .getActiveSession(
            "female"
          )
    },

    {
      storageProfile:
        "male",

      session:
        window.WorkoutStorage
          .getActiveSession(
            "male"
          )
    }
  ].filter(
    (item) =>
      item.session
  );

  if (
    candidates.length === 0
  ) {
    return;
  }

  candidates.sort(
    (a, b) => {
      const aTime =
        Date.parse(
          a.session.savedAt || ""
        ) || 0;

      const bTime =
        Date.parse(
          b.session.savedAt || ""
        ) || 0;

      return bTime - aTime;
    }
  );

  const latest =
    candidates[0];

  pendingResumeProfile =
    latest.storageProfile;

  pendingResumeSession =
    latest.session;

  const appProfile =
    pendingResumeSession.profile ||
    (
      pendingResumeProfile === "female"
        ? "woman"
        : "man"
    );

  document.body.dataset.theme =
    appProfile;

  renderResumeSessionDetails(
    pendingResumeSession
  );

  showScreen(
    resumeSessionScreen
  );
}

/* =========================================
   INFORMACJE O NIEDOKOŃCZONEJ SESJI
   ========================================= */

function renderResumeSessionDetails(
  session
) {
  if (
    !resumeSessionDetails ||
    !session
  ) {
    return;
  }

  const workout =
    Array.isArray(
      session.workout
    )
      ? session.workout
      : [];

  const statuses =
    Array.isArray(
      session.exerciseStatuses
    )
      ? session.exerciseStatuses
      : [];

  const completed =
    statuses.filter(
      (status) =>
        status === "completed"
    ).length;

  const skipped =
    statuses.filter(
      (status) =>
        status === "skipped"
    ).length;

  const currentIndex =
    Number.isInteger(
      session.currentExerciseIndex
    )
      ? session.currentExerciseIndex
      : 0;

  const safeIndex =
    Math.min(
      Math.max(
        currentIndex,
        0
      ),
      Math.max(
        workout.length - 1,
        0
      )
    );

  const currentExercise =
    workout[
      safeIndex
    ];

  const profileLabel =
    session.profile === "woman"
      ? "Kobieta"
      : "Mężczyzna";

  const exerciseLabel =
    currentExercise?.name
      ? ` • ${currentExercise.name}`
      : "";

  resumeSessionDetails.textContent =
    `${profileLabel} • ${completed} wykonane • ${skipped} pominięte${exerciseLabel}`;
}

/* =========================================
   KONTYNUUJ
   ========================================= */

resumeSessionContinue?.addEventListener(
  "click",
  () => {
    restoreActiveWorkoutSession();
  }
);

/* =========================================
   ZACZNIJ OD NOWA
   ========================================= */

resumeSessionRestart?.addEventListener(
  "click",
  () => {
    if (
      window.WorkoutStorage &&
      pendingResumeProfile
    ) {
      window.WorkoutStorage
        .clearActiveSession(
          pendingResumeProfile
        );
    }

    pendingResumeSession =
      null;

    pendingResumeProfile =
      null;

    resetSessionState();

    workoutConfig.profile =
      null;

    document.body.removeAttribute(
      "data-theme"
    );

    showScreen(
      welcomeScreen
    );
  }
);

/* =========================================
   PRZYWRACANIE SESJI
   ========================================= */

function restoreActiveWorkoutSession() {
  const session =
    pendingResumeSession;

  if (
    !session ||
    !Array.isArray(
      session.workout
    ) ||
    session.workout.length === 0
  ) {
    pendingResumeSession =
      null;

    pendingResumeProfile =
      null;

    showScreen(
      welcomeScreen
    );

    return;
  }

  const config =
    session.config ||
    {};

  workoutConfig.profile =
    config.profile ||
    session.profile ||
    (
      pendingResumeProfile === "female"
        ? "woman"
        : "man"
    );

  workoutConfig.time =
    config.time ?? null;

  workoutConfig.body =
    Array.isArray(
      config.body
    )
      ? [
          ...config.body
        ]
      : [];

  workoutConfig.level =
    config.level ?? null;

  workoutConfig.intensity =
    config.intensity ?? null;

  workoutConfig.equipment =
    Array.isArray(
      config.equipment
    )
      ? [
          ...config.equipment
        ]
      : [];

  document.body.dataset.theme =
    workoutConfig.profile;

  const storageProfile =
    getStorageProfileName(
      workoutConfig.profile
    );

  exercisePreferences =
    window.WorkoutStorage
      .getExercisePreferences(
        storageProfile
      );

  currentWorkout =
    session.workout;

  currentExerciseIndex =
    Number.isInteger(
      session.currentExerciseIndex
    )
      ? Math.min(
          Math.max(
            session.currentExerciseIndex,
            0
          ),
          currentWorkout.length - 1
        )
      : 0;

  exerciseStatuses =
    Array.isArray(
      session.exerciseStatuses
    )
      ? currentWorkout.map(
          (exercise, index) =>
            session.exerciseStatuses[
              index
            ] ||
            "pending"
        )
      : currentWorkout.map(
          () =>
            "pending"
        );

  /*
    Nie doliczamy czasu, kiedy aplikacja
    była zamknięta albo odświeżona.
  */

  const savedAt =
    Date.parse(
      session.savedAt ||
      ""
    );

  const originalStartedAt =
    Number(
      session.workoutStartedAt
    );

  if (
    Number.isFinite(
      savedAt
    ) &&
    Number.isFinite(
      originalStartedAt
    )
  ) {
    const elapsedAtSave =
      Math.max(
        0,
        savedAt -
        originalStartedAt
      );

    workoutStartedAt =
      Date.now() -
      elapsedAtSave;
  } else {
    workoutStartedAt =
      Date.now();
  }

  finalWorkoutDuration =
    Number(
      session.finalWorkoutDuration
    ) || 0;

  workoutRating =
    session.workoutRating ||
    null;

  workoutHistorySaved =
    false;

  activeSessionScreen =
    session.screen ||
    "exercise";

  activeExercisePhase =
    session.exercisePhase ||
    "actions";

  const savedCountdown =
    session.countdown ||
    {};

  const savedCountdownInitial =
    Number(
      savedCountdown.initialSeconds
    ) || 0;

  const savedCountdownRemaining =
    Number(
      savedCountdown.remainingSeconds
    );

  renderSessionExercise();

  /*
    renderSessionExercise ustawia timer od nowa,
    więc tutaj przywracamy zapisany stan.
    Timer po wznowieniu pozostaje na pauzie.
  */

  if (
    savedCountdownInitial > 0
  ) {
    countdownInitialSeconds =
      savedCountdownInitial;

    countdownRemainingSeconds =
      Number.isFinite(
        savedCountdownRemaining
      )
        ? Math.max(
            0,
            savedCountdownRemaining
          )
        : savedCountdownInitial;

    countdownRunning =
      false;

    updateCountdownDisplay();
  }

  updateProgress();

  if (
    activeSessionScreen === "summary"
  ) {
    clearInterval(
      sessionTimerInterval
    );

    sessionTimerInterval =
      null;

    if (
      finalWorkoutDuration <= 0
    ) {
      finalWorkoutDuration =
        Date.now() -
        workoutStartedAt;
    }

    renderSummary();

    if (
      workoutRating
    ) {
      summaryRatingButtons.forEach(
        (button) => {
          button.classList.toggle(
            "is-selected",
            button.dataset.rating ===
              workoutRating
          );
        }
      );
    }

    showScreen(
      summaryScreen
    );
  } else if (
    activeSessionScreen === "rest"
  ) {
    startSessionTimer();

    restoreRestScreen();

    showScreen(
      restScreen
    );
  } else {
    activeSessionScreen =
      "exercise";

    startSessionTimer();

    applyRestoredExercisePhase();

    showScreen(
      workoutSessionScreen
    );
  }

  pendingResumeSession =
    null;

  pendingResumeProfile =
    null;

  saveActiveWorkoutSession();
}

/* =========================================
   PRZYWRACANIE ETAPU ĆWICZENIA
   ========================================= */

function applyRestoredExercisePhase() {
  if (
    activeExercisePhase === "reaction"
  ) {
    sessionActions.classList.add(
      "is-hidden"
    );

    reactionPanel.classList.remove(
      "is-hidden"
    );
  } else {
    activeExercisePhase =
      "actions";

    reactionPanel.classList.add(
      "is-hidden"
    );

    sessionActions.classList.remove(
      "is-hidden"
    );
  }
}

/* =========================================
   PRZYWRACANIE ODPOCZYNKU
   ========================================= */

function restoreRestScreen() {
  const exercise =
    currentWorkout[
      currentExerciseIndex
    ];

  const nextExercise =
    currentWorkout[
      currentExerciseIndex + 1
    ];

  const transitionRest =
    exercise?.transitionRest;

  if (
    transitionRest
  ) {
    restRecommendation.textContent =
      transitionRest.min ===
        transitionRest.max
        ? `Odpocznij około ${transitionRest.min} sek.`
        : `Odpocznij około ${transitionRest.min}–${transitionRest.max} sek.`;
  } else {
    restRecommendation.textContent =
      "Odpocznij chwilę i rusz dalej, kiedy będziesz gotowy.";
  }

  restNextExercise.textContent =
    nextExercise
      ? nextExercise.name
      : "";

  syncRestProgress();
}

/* =========================================
   ZAPIS PRZED F5 / ZAMKNIĘCIEM
   ========================================= */

window.addEventListener(
  "beforeunload",
  () => {
    if (
      currentWorkout.length > 0 &&
      workoutStartedAt
    ) {
      saveActiveWorkoutSession();
    }
  }
);

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

/* =========================================
   START APLIKACJI
   ========================================= */

initializeResumeSession();