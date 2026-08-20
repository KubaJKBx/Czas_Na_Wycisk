/* =========================================
   K&K — Czas na Wycisk!
   APLIKACJA
   v0.10.1
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

/* HISTORIA TRENINGÓW */
const historyScreen = document.querySelector("#historyScreen");
const historyOpenButton = document.querySelector("#historyOpenButton");
const historyBackButton = document.querySelector("#historyBackButton");
const historyFemaleButton = document.querySelector("#historyFemaleButton");
const historyMaleButton = document.querySelector("#historyMaleButton");
const historyProfileButtons = document.querySelectorAll(".history-profile-button");
const historySummary = document.querySelector("#historySummary");
const historyList = document.querySelector("#historyList");
const historyEmpty = document.querySelector("#historyEmpty");

/* START / KONFIGURATOR */
const profileButtons = document.querySelectorAll(".profile-card");
const optionButtons = document.querySelectorAll(".option");
const equipmentDetailButtons = document.querySelectorAll(".equipment-detail-option");
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
  equipment: [],

  equipmentDetails: {
    dumbbellsQuantity: null,
    kettlebellQuantity: null,
    bandAnchors: [],
    pullUpBarTypes: []
  }
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
let currentHistoryProfile = null;

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
    document.body.dataset.theme =
      button.dataset.profile;
  };

  button.addEventListener(
    "mouseenter",
    setTheme
  );

  button.addEventListener(
    "focus",
    setTheme
  );

  button.addEventListener(
    "click",
    () => {
      workoutConfig.profile =
        button.dataset.profile;

      document.body.dataset.theme =
        workoutConfig.profile;

      const storageProfile =
        getStorageProfileName(
          workoutConfig.profile
        );

      exercisePreferences =
        window.WorkoutStorage
          ? window.WorkoutStorage
              .getExercisePreferences(
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
        handleEquipmentSelection(
          button,
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


function handleSingleSelection(
  selectedButton,
  group,
  value
) {
  document
    .querySelectorAll(
      `[data-group="${group}"]`
    )
    .forEach(
      (button) =>
        button.classList.remove(
          "is-selected"
        )
    );

  selectedButton.classList.add(
    "is-selected"
  );

  workoutConfig[group] =
    value;

  clearFormMessage();
}


function handleMultipleSelection(
  button,
  group,
  value
) {
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


/* =========================================
   SPRZĘT — GŁÓWNY WYBÓR
   ========================================= */

function handleEquipmentSelection(
  button,
  value
) {
  button.classList.toggle(
    "is-selected"
  );

  const isSelected =
    button.classList.contains(
      "is-selected"
    );

  const detailsPanel =
    document.querySelector(
      `[data-equipment-details="${value}"]`
    );

  if (detailsPanel) {
    detailsPanel.classList.toggle(
      "is-hidden",
      !isSelected
    );

    button.setAttribute(
      "aria-expanded",
      String(isSelected)
    );
  }

  if (!isSelected) {
    clearEquipmentDetailsFor(
      value
    );
  }

  syncEquipmentSelectionFromDom();

  clearFormMessage();
}


/* =========================================
   SPRZĘT — OPCJE SZCZEGÓŁOWE
   ========================================= */

equipmentDetailButtons.forEach(
  (button) => {
    button.addEventListener(
      "click",
      () => {
        const setting =
          button.dataset
            .equipmentSetting;

        const value =
          button.dataset.value;

        if (
          !setting ||
          !value
        ) {
          return;
        }

        if (
          setting ===
            "dumbbells-quantity" ||
          setting ===
            "kettlebell-quantity"
        ) {
          document
            .querySelectorAll(
              `[data-equipment-setting="${setting}"]`
            )
            .forEach(
              (detailButton) => {
                detailButton
                  .classList
                  .remove(
                    "is-selected"
                  );
              }
            );

          button.classList.add(
            "is-selected"
          );

          const quantity =
            Number(value);

          if (
            setting ===
            "dumbbells-quantity"
          ) {
            workoutConfig
              .equipmentDetails
              .dumbbellsQuantity =
                quantity;
          } else {
            workoutConfig
              .equipmentDetails
              .kettlebellQuantity =
                quantity;
          }
        }

        if (
          setting ===
          "band-anchor"
        ) {
          button.classList.toggle(
            "is-selected"
          );

          workoutConfig
            .equipmentDetails
            .bandAnchors =
              getSelectedEquipmentDetailValues(
                "band-anchor"
              );
        }

        if (
          setting ===
          "pull-up-bar-type"
        ) {
          button.classList.toggle(
            "is-selected"
          );

          workoutConfig
            .equipmentDetails
            .pullUpBarTypes =
              getSelectedEquipmentDetailValues(
                "pull-up-bar-type"
              );
        }

        clearFormMessage();
      }
    );
  }
);


function getSelectedEquipmentDetailValues(
  setting
) {
  return Array.from(
    document.querySelectorAll(
      `[data-equipment-setting="${setting}"].is-selected`
    )
  ).map(
    (button) =>
      button.dataset.value
  );
}


function syncEquipmentSelectionFromDom() {
  workoutConfig.equipment =
    Array.from(
      document.querySelectorAll(
        '[data-group="equipment"].is-selected'
      )
    ).map(
      (button) =>
        button.dataset.value
    );
}


function clearEquipmentDetailsFor(
  equipmentType
) {
  const item =
    document.querySelector(
      `[data-equipment-item="${equipmentType}"]`
    );

  item
    ?.querySelectorAll(
      ".equipment-detail-option"
    )
    .forEach(
      (button) => {
        button.classList.remove(
          "is-selected"
        );
      }
    );

  if (
    equipmentType ===
    "dumbbells"
  ) {
    workoutConfig
      .equipmentDetails
      .dumbbellsQuantity =
        null;
  }

  if (
    equipmentType ===
    "kettlebell"
  ) {
    workoutConfig
      .equipmentDetails
      .kettlebellQuantity =
        null;
  }

  if (
    equipmentType ===
    "resistance-band"
  ) {
    workoutConfig
      .equipmentDetails
      .bandAnchors =
        [];
  }

  if (
    equipmentType ===
    "pull-up-bar"
  ) {
    workoutConfig
      .equipmentDetails
      .pullUpBarTypes =
        [];
  }
}


function cloneEquipmentDetails(
  source =
    workoutConfig
      .equipmentDetails
) {
  return {
    dumbbellsQuantity:
      Number(
        source
          ?.dumbbellsQuantity
      ) || null,

    kettlebellQuantity:
      Number(
        source
          ?.kettlebellQuantity
      ) || null,

    bandAnchors:
      Array.isArray(
        source
          ?.bandAnchors
      )
        ? [
            ...source.bandAnchors
          ]
        : [],

    pullUpBarTypes:
      Array.isArray(
        source
          ?.pullUpBarTypes
      )
        ? [
            ...source.pullUpBarTypes
          ]
        : []
  };
}


/* =========================================
   MOST DO GENERATORA
   ========================================= */

function getGeneratorCompatibleEquipment() {
  const compatible = [];

  workoutConfig.equipment.forEach(
    (item) => {
      let value = item;

      if (
        item ===
          "resistance-band" ||
        item ===
          "mini-band"
      ) {
        value = "bands";
      }

      if (
        item ===
        "pull-up-bar"
      ) {
        value =
          "pullup-bar";
      }

      if (
        !compatible.includes(
          value
        )
      ) {
        compatible.push(
          value
        );
      }
    }
  );

  return compatible;
}


function getGeneratorConfig() {
  return {
    ...workoutConfig,

    equipment:
      getGeneratorCompatibleEquipment(),

    equipmentDetails:
      cloneEquipmentDetails()
  };
}


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
    Zawsze synchronizujemy sprzęt
    z faktycznie zaznaczonymi
    przyciskami.
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

  if (
    workoutConfig.equipment.includes(
      "dumbbells"
    ) &&
    !workoutConfig
      .equipmentDetails
      .dumbbellsQuantity
  ) {
    return "Wybierz, czy masz 1 czy 2 hantle.";
  }

  if (
    workoutConfig.equipment.includes(
      "kettlebell"
    ) &&
    !workoutConfig
      .equipmentDetails
      .kettlebellQuantity
  ) {
    return "Wybierz, czy masz 1 czy 2 kettlebelle.";
  }

  if (
    workoutConfig.equipment.includes(
      "pull-up-bar"
    ) &&
    workoutConfig
      .equipmentDetails
      .pullUpBarTypes
      .length === 0
  ) {
    return "Wybierz, czy masz dostęp do wysokiego, niskiego albo obu typów drążka.";
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
      window.WorkoutGenerator
        .generateWorkout(
          getGeneratorConfig()
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
  exerciseList.innerHTML = "";

  const estimatedMinutes =
    calculateEstimatedWorkoutMinutes(
      currentWorkout
    );

  previewSummary.textContent =
    `około ${estimatedMinutes} min • ${currentWorkout.length} ćwiczeń`;

  currentWorkout.forEach(
    (exercise, index) => {
      exerciseList.appendChild(
        createExerciseCard(
          exercise,
          index
        )
      );
    }
  );
}


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
          !exercise.transitionRest?.show
        ) {
          return total;
        }

        return (
          total +
          (
            exercise.transitionRest.min +
            exercise.transitionRest.max
          ) / 2
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
    String(
      index + 1
    ).padStart(
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
    currentWorkout[
      index
    ];

  const replacement =
    window.WorkoutGenerator
      .findReplacement(
        currentExercise,
        currentWorkout,
        getGeneratorConfig()
      );

  if (!replacement) {
    showPreviewMessage(
      "Nie mamy teraz innego pasującego ćwiczenia."
    );

    return;
  }

  currentWorkout[
    index
  ] =
    replacement;

  clearPreviewMessage();

  renderWorkoutPreview();
}


/* =========================================
   ETYKIETY
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

    "resistance-band":
      "Długa guma",

    "mini-band":
      "Mini band",

    "pullup-bar":
      "Drążek",

    "pull-up-bar":
      "Drążek",

    barbell:
      "Sztanga",

    bench:
      "Ławka"
  };

  return equipment
    .map(
      (item) =>
        labels[item] ||
        item
    )
    .join(
      " + "
    );
}


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

  return (
    bodyParts ||
    []
  )
    .map(
      (item) =>
        labels[item] ||
        item
    )
    .join(
      " • "
    );
}


function createDifficultyDisplay(
  difficulty
) {
  let output = "";

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

  screenToShow?.classList.remove(
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

  activeSessionScreen =
    "exercise";

  activeExercisePhase =
    "actions";

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
  if (
    !workoutStartedAt
  ) {
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
    ] ||
    null;

  if (
    savedPreference ===
    "like"
  ) {
    likeExerciseButton.classList.add(
      "is-selected"
    );
  }

  if (
    savedPreference ===
    "dislike"
  ) {
    dislikeExerciseButton.classList.add(
      "is-selected"
    );
  }

  resetCountdownState();

  if (
    exercise.timed
  ) {
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
    currentExerciseIndex ===
    0;
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
    if (
      countdownRunning
    ) {
      return;
    }

    if (
      countdownRemainingSeconds <=
      0
    ) {
      countdownRemainingSeconds =
        countdownInitialSeconds;
    }

    countdownRunning =
      true;

    saveActiveWorkoutSession();

    countdownInterval =
      setInterval(
        () => {
          countdownRemainingSeconds -=
            1;

          if (
            countdownRemainingSeconds <=
            0
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

  if (
    isLastExercise
  ) {
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
      currentExerciseIndex <=
      0
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
        status ===
          "completed" ||
        status ===
          "skipped"
    ).length;

  if (
    currentWorkout.length ===
    0
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
        status ===
        "completed"
    ).length;

  const skipped =
    exerciseStatuses.filter(
      (status) =>
        status ===
        "skipped"
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
        exerciseStatuses[
          index
        ];

      const statusLabel =
        status ===
        "completed"
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
      new Date()
        .toISOString(),

    profile:
      workoutConfig.profile,

    config: {
      profile:
        workoutConfig.profile,

      time:
        workoutConfig.time,

      body: [
        ...workoutConfig.body
      ],

      level:
        workoutConfig.level,

      intensity:
        workoutConfig.intensity,

      equipment: [
        ...workoutConfig.equipment
      ],

      equipmentDetails:
        cloneEquipmentDetails()
    },

    workout:
      currentWorkout,

    currentExerciseIndex:
      currentExerciseIndex,

    exerciseStatuses: [
      ...exerciseStatuses
    ],

    workoutStartedAt:
      workoutStartedAt,

    finalWorkoutDuration:
      finalWorkoutDuration,

    workoutRating:
      workoutRating ||
      null,

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
   HISTORIA — ZAPIS TRENINGU
   ========================================= */

function saveCompletedWorkoutToHistory() {
  if (
    workoutHistorySaved ||
    !window.WorkoutStorage ||
    !workoutConfig.profile ||
    currentWorkout.length ===
      0
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

    body: [
      ...workoutConfig.body
    ],

    equipment: [
      ...workoutConfig.equipment
    ],

    equipmentDetails:
      cloneEquipmentDetails(),

    actualDurationMs:
      finalWorkoutDuration,

    actualDurationSeconds:
      Math.floor(
        finalWorkoutDuration /
        1000
      ),

    rating:
      workoutRating ||
      null,

    exercises:
      currentWorkout.map(
        (
          exercise,
          index
        ) => ({
          id:
            exercise.id,

          name:
            exercise.name,

          bodyParts: [
            ...(
              exercise.bodyParts ||
              []
            )
          ],

          equipment: [
            ...(
              exercise.equipment ||
              []
            )
          ],

          difficulty:
            exercise.difficulty,

          prescription:
            exercise.prescription,

          status:
            exerciseStatuses[
              index
            ] ||
            "pending"
        })
      )
  };

  const saved =
    window.WorkoutStorage
      .addWorkout(
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
  return appProfile ===
    "woman"
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
   HISTORIA TRENINGÓW — EKRAN
   ========================================= */

historyOpenButton?.addEventListener(
  "click",
  () => {
    openWorkoutHistory();
  }
);


historyBackButton?.addEventListener(
  "click",
  () => {
    showScreen(
      welcomeScreen
    );
  }
);


historyFemaleButton?.addEventListener(
  "click",
  () => {
    selectHistoryProfile(
      "female"
    );
  }
);


historyMaleButton?.addEventListener(
  "click",
  () => {
    selectHistoryProfile(
      "male"
    );
  }
);


function openWorkoutHistory() {
  if (
    !historyScreen
  ) {
    return;
  }

  currentHistoryProfile =
    null;

  historyProfileButtons.forEach(
    (button) => {
      button.classList.remove(
        "is-selected"
      );
    }
  );

  clearHistoryView();

  setHistoryEmptyMessage(
    "Wybierz profil, żeby zobaczyć historię.",
    "Treningi kobiety i mężczyzny zapisujemy osobno."
  );

  showScreen(
    historyScreen
  );
}


function selectHistoryProfile(
  storageProfile
) {
  if (
    storageProfile !==
      "female" &&
    storageProfile !==
      "male"
  ) {
    return;
  }

  currentHistoryProfile =
    storageProfile;

  historyProfileButtons.forEach(
    (button) => {
      button.classList.toggle(
        "is-selected",
        button.dataset
          .historyProfile ===
          storageProfile
      );
    }
  );

  document.body.dataset.theme =
    storageProfile ===
    "female"
      ? "woman"
      : "man";

  renderWorkoutHistory(
    storageProfile
  );
}


function clearHistoryView() {
  if (
    historySummary
  ) {
    historySummary.innerHTML =
      "";

    historySummary.classList.add(
      "is-hidden"
    );
  }

  if (
    historyList
  ) {
    historyList.innerHTML =
      "";
  }

  if (
    historyEmpty
  ) {
    historyEmpty.classList.remove(
      "is-hidden"
    );
  }
}


function renderWorkoutHistory(
  storageProfile
) {
  clearHistoryView();

  if (
    !window.WorkoutStorage ||
    !historyList
  ) {
    setHistoryEmptyMessage(
      "Nie udało się odczytać historii.",
      "Odśwież aplikację i spróbuj ponownie."
    );

    return;
  }

  const workouts =
    window.WorkoutStorage
      .getWorkoutHistory(
        storageProfile
      ) ||
    [];

  if (
    workouts.length === 0
  ) {
    setHistoryEmptyMessage(
      "Nie masz jeszcze zapisanych treningów.",
      "Ukończ trening i kliknij „Gotowe”, a pojawi się tutaj."
    );

    return;
  }

  historyEmpty?.classList.add(
    "is-hidden"
  );

  renderHistorySummary(
    workouts
  );

  workouts.forEach(
    (workout) => {
      historyList.appendChild(
        createHistoryWorkoutCard(
          workout
        )
      );
    }
  );
}


function setHistoryEmptyMessage(
  title,
  description
) {
  if (
    !historyEmpty
  ) {
    return;
  }

  const titleElement =
    historyEmpty.querySelector(
      "p"
    );

  const descriptionElement =
    historyEmpty.querySelector(
      "span"
    );

  if (
    titleElement
  ) {
    titleElement.textContent =
      title;
  }

  if (
    descriptionElement
  ) {
    descriptionElement.textContent =
      description;
  }

  historyEmpty.classList.remove(
    "is-hidden"
  );
}
/* =========================================
   PODSUMOWANIE HISTORII
   ========================================= */

function renderHistorySummary(
  workouts
) {
  if (
    !historySummary
  ) {
    return;
  }

  const totalDurationSeconds =
    workouts.reduce(
      (
        total,
        workout
      ) =>
        total +
        getWorkoutDurationSeconds(
          workout
        ),
      0
    );

  const completedExercises =
    workouts.reduce(
      (
        total,
        workout
      ) =>
        total +
        getWorkoutStatusCount(
          workout,
          "completed"
        ),
      0
    );

  historySummary.innerHTML = `
    <div class="history-summary-item">

      <span class="history-summary-value">
        ${workouts.length}
      </span>

      <span class="history-summary-label">
        treningi
      </span>

    </div>

    <div class="history-summary-item">

      <span class="history-summary-value">
        ${formatHistoryTotalDuration(totalDurationSeconds)}
      </span>

      <span class="history-summary-label">
        łączny czas
      </span>

    </div>

    <div class="history-summary-item">

      <span class="history-summary-value">
        ${completedExercises}
      </span>

      <span class="history-summary-label">
        wykonane ćwiczenia
      </span>

    </div>
  `;

  historySummary.classList.remove(
    "is-hidden"
  );
}


/* =========================================
   KARTA TRENINGU W HISTORII
   ========================================= */

function createHistoryWorkoutCard(
  workout
) {
  const card =
    document.createElement(
      "article"
    );

  card.className =
    "history-workout-card";

  const exercises =
    Array.isArray(
      workout.exercises
    )
      ? workout.exercises
      : [];

  const completed =
    getWorkoutStatusCount(
      workout,
      "completed"
    );

  const skipped =
    getWorkoutStatusCount(
      workout,
      "skipped"
    );

  const durationSeconds =
    getWorkoutDurationSeconds(
      workout
    );

  const dateInfo =
    formatHistoryDate(
      workout.completedAt
    );

  const bodyLabel =
    getHistoryBodyLabel(
      workout.body
    );

  const equipmentLabel =
    getEquipmentLabel(
      workout.equipment ||
      []
    );

  const ratingLabel =
    getHistoryRatingLabel(
      workout.rating
    );

  card.innerHTML = `
    <div class="history-workout-main">

      <div class="history-workout-top">

        <div>

          <div class="history-workout-date">
            ${dateInfo.date}
          </div>

          <div class="history-workout-time">
            ${dateInfo.time}
          </div>

        </div>

        <div class="history-workout-rating">
          ${ratingLabel}
        </div>

      </div>


      <div class="history-workout-stats">

        <div class="history-workout-stat">

          <strong>
            ${formatHistoryWorkoutDuration(durationSeconds)}
          </strong>

          <span>
            czas treningu
          </span>

        </div>


        <div class="history-workout-stat">

          <strong>
            ${completed}
          </strong>

          <span>
            wykonane
          </span>

        </div>


        <div class="history-workout-stat">

          <strong>
            ${skipped}
          </strong>

          <span>
            pominięte
          </span>

        </div>

      </div>


      <div class="history-workout-meta">

        <span class="history-meta-chip">
          ${bodyLabel}
        </span>

        <span class="history-meta-chip">
          ${equipmentLabel}
        </span>

        <span class="history-meta-chip">
          plan: ${Number(workout.plannedMinutes) || 0} min
        </span>

      </div>


      <button
        class="history-details-toggle"
        type="button"
      >
        Zobacz szczegóły
      </button>

    </div>

    <div class="history-exercise-details is-hidden"></div>
  `;

  const details =
    card.querySelector(
      ".history-exercise-details"
    );

  const toggleButton =
    card.querySelector(
      ".history-details-toggle"
    );

  exercises.forEach(
    (exercise) => {
      details?.appendChild(
        createHistoryExerciseRow(
          exercise
        )
      );
    }
  );

  toggleButton?.addEventListener(
    "click",
    () => {
      if (
        !details
      ) {
        return;
      }

      const wasHidden =
        details.classList.contains(
          "is-hidden"
        );

      details.classList.toggle(
        "is-hidden"
      );

      toggleButton.textContent =
        wasHidden
          ? "Ukryj szczegóły"
          : "Zobacz szczegóły";
    }
  );

  return card;
}


/* =========================================
   ĆWICZENIE W HISTORII
   ========================================= */

function createHistoryExerciseRow(
  exercise
) {
  const row =
    document.createElement(
      "div"
    );

  row.className =
    "history-exercise-row";

  const status =
    exercise.status ===
      "completed"
      ? "completed"
      : exercise.status ===
          "skipped"
        ? "skipped"
        : "pending";

  const statusLabel =
    status ===
      "completed"
      ? "✓ Wykonane"
      : status ===
          "skipped"
        ? "— Pominięte"
        : "• Bez statusu";

  const bodyLabel =
    getBodyPartsLabel(
      exercise.bodyParts ||
      []
    );

  row.innerHTML = `
    <div class="history-exercise-info">

      <strong>
        ${exercise.name || "Ćwiczenie"}
      </strong>

      <span>
        ${exercise.prescription || ""}
        ${bodyLabel ? ` • ${bodyLabel}` : ""}
      </span>

    </div>

    <span
      class="history-exercise-status ${status === "completed" ? "is-completed" : ""}"
    >
      ${statusLabel}
    </span>
  `;

  return row;
}


/* =========================================
   NARZĘDZIA HISTORII
   ========================================= */

function getWorkoutStatusCount(
  workout,
  status
) {
  const exercises =
    Array.isArray(
      workout.exercises
    )
      ? workout.exercises
      : [];

  return exercises.filter(
    (exercise) =>
      exercise.status ===
      status
  ).length;
}


function getWorkoutDurationSeconds(
  workout
) {
  const directSeconds =
    Number(
      workout.actualDurationSeconds
    );

  if (
    Number.isFinite(
      directSeconds
    ) &&
    directSeconds >= 0
  ) {
    return Math.floor(
      directSeconds
    );
  }

  const milliseconds =
    Number(
      workout.actualDurationMs
    );

  if (
    Number.isFinite(
      milliseconds
    ) &&
    milliseconds >= 0
  ) {
    return Math.floor(
      milliseconds /
      1000
    );
  }

  return 0;
}


function formatHistoryDate(
  isoDate
) {
  const date =
    new Date(
      isoDate
    );

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return {
      date:
        "Nieznana data",

      time:
        ""
    };
  }

  return {
    date:
      new Intl.DateTimeFormat(
        "pl-PL",
        {
          day:
            "numeric",

          month:
            "long",

          year:
            "numeric"
        }
      ).format(
        date
      ),

    time:
      new Intl.DateTimeFormat(
        "pl-PL",
        {
          hour:
            "2-digit",

          minute:
            "2-digit"
        }
      ).format(
        date
      )
  };
}


function formatHistoryWorkoutDuration(
  totalSeconds
) {
  const minutes =
    Math.floor(
      totalSeconds /
      60
    );

  const seconds =
    totalSeconds %
      60;

  return (
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`
  );
}


function formatHistoryTotalDuration(
  totalSeconds
) {
  const totalMinutes =
    Math.floor(
      totalSeconds /
      60
    );

  const hours =
    Math.floor(
      totalMinutes /
      60
    );

  const minutes =
    totalMinutes %
      60;

  if (
    hours > 0
  ) {
    return `${hours} h ${minutes} min`;
  }

  return `${totalMinutes} min`;
}


function getHistoryRatingLabel(
  rating
) {
  const labels = {
    easy:
      "Za lekko",

    good:
      "W sam raz",

    hard:
      "Za ciężko"
  };

  return (
    labels[rating] ||
    "Bez oceny"
  );
}


function getHistoryBodyLabel(
  body
) {
  const values =
    Array.isArray(
      body
    )
      ? body
      : [];

  if (
    values.includes(
      "full"
    )
  ) {
    return "Całe ciało";
  }

  const labels = {
    chest:
      "Klatka",

    back:
      "Plecy",

    shoulders:
      "Barki",

    arms:
      "Ramiona",

    abs:
      "Brzuch",

    legs:
      "Nogi",

    glutes:
      "Pośladki"
  };

  const result =
    values
      .map(
        (item) =>
          labels[item] ||
          item
      )
      .filter(
        Boolean
      )
      .join(
        " • "
      );

  return (
    result ||
    "Brak danych o partiach"
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
          a.session.savedAt ||
          ""
        ) ||
        0;

      const bTime =
        Date.parse(
          b.session.savedAt ||
          ""
        ) ||
        0;

      return (
        bTime -
        aTime
      );
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
      pendingResumeProfile ===
      "female"
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
        status ===
        "completed"
    ).length;

  const skipped =
    statuses.filter(
      (status) =>
        status ===
        "skipped"
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
    session.profile ===
      "woman"
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
    session.workout.length ===
      0
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
      pendingResumeProfile ===
      "female"
        ? "woman"
        : "man"
    );

  workoutConfig.time =
    config.time ??
    null;

  workoutConfig.body =
    Array.isArray(
      config.body
    )
      ? [
          ...config.body
        ]
      : [];

  workoutConfig.level =
    config.level ??
    null;

  workoutConfig.intensity =
    config.intensity ??
    null;

  workoutConfig.equipment =
    Array.isArray(
      config.equipment
    )
      ? [
          ...config.equipment
        ]
      : [];

  workoutConfig.equipmentDetails =
    cloneEquipmentDetails(
      config.equipmentDetails
    );

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
          (
            exercise,
            index
          ) =>
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
    Nie doliczamy czasu, kiedy
    aplikacja była zamknięta.
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
    ) ||
    0;

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
    ) ||
    0;

  const savedCountdownRemaining =
    Number(
      savedCountdown.remainingSeconds
    );

  renderSessionExercise();

  /*
    renderSessionExercise ustawia timer
    od nowa, więc przywracamy zapis.
  */
  if (
    savedCountdownInitial >
    0
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
    activeSessionScreen ===
    "summary"
  ) {
    clearInterval(
      sessionTimerInterval
    );

    sessionTimerInterval =
      null;

    if (
      finalWorkoutDuration <=
      0
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
    activeSessionScreen ===
    "rest"
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
    activeExercisePhase ===
    "reaction"
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
      currentWorkout.length >
        0 &&
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
/* =========================================
   v0.07.5 — USUWANIE SESJI Z HISTORII
   ========================================= */

const createHistoryWorkoutCardBase =
  createHistoryWorkoutCard;


createHistoryWorkoutCard =
  function (
    workout
  ) {

    const card =
      createHistoryWorkoutCardBase(
        workout
      );


    const main =
      card.querySelector(
        ".history-workout-main"
      );


    if (
      !main ||
      !workout?.id
    ) {

      return card;

    }


    const deleteButton =
      document.createElement(
        "button"
      );


    deleteButton.className =
      "history-delete-button";


    deleteButton.type =
      "button";


    deleteButton.textContent =
      "Usuń sesję";


    deleteButton.addEventListener(
      "click",
      () => {

        if (
          !currentHistoryProfile ||
          !window.WorkoutStorage
        ) {

          return;

        }


        const confirmed =
          window.confirm(
            "Czy na pewno chcesz usunąć ten trening?\n\nTej operacji nie można cofnąć."
          );


        if (
          !confirmed
        ) {

          return;

        }


        const removed =
          window.WorkoutStorage
            .removeWorkout(
              currentHistoryProfile,
              workout.id
            );


        if (
          !removed
        ) {

          window.alert(
            "Nie udało się usunąć treningu."
          );

          return;

        }


        renderWorkoutHistory(
          currentHistoryProfile
        );

      }
    );


    main.appendChild(
      deleteButton
    );


    return card;

  };


/* =========================================
   v0.07.6 — ROZSZERZONE STATYSTYKI HISTORII
   ========================================= */

const renderHistorySummaryBase =
  renderHistorySummary;


renderHistorySummary =
  function (
    workouts
  ) {

    if (
      !historySummary ||
      !Array.isArray(workouts)
    ) {

      return;

    }


    const now =
      new Date();


    /* =========================================
       POCZĄTEK TYGODNIA — PONIEDZIAŁEK
       ========================================= */

    const weekStart =
      new Date(now);

    const currentDay =
      weekStart.getDay();

    const daysFromMonday =
      currentDay === 0
        ? 6
        : currentDay - 1;

    weekStart.setDate(
      weekStart.getDate() -
      daysFromMonday
    );

    weekStart.setHours(
      0,
      0,
      0,
      0
    );


    /* =========================================
       POCZĄTEK MIESIĄCA
       ========================================= */

    const monthStart =
      new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );


    /* =========================================
       PODSTAWOWE STATYSTYKI
       ========================================= */

    const totalDurationSeconds =
      workouts.reduce(
        (
          total,
          workout
        ) =>
          total +
          getWorkoutDurationSeconds(
            workout
          ),
        0
      );


    const completedExercises =
      workouts.reduce(
        (
          total,
          workout
        ) =>
          total +
          getWorkoutStatusCount(
            workout,
            "completed"
          ),
        0
      );


    const averageDurationSeconds =
      workouts.length > 0
        ? Math.round(
            totalDurationSeconds /
            workouts.length
          )
        : 0;


    /* =========================================
       TRENINGI W TYM TYGODNIU
       ========================================= */

    const workoutsThisWeek =
      workouts.filter(
        (workout) => {

          const date =
            new Date(
              workout.completedAt
            );


          if (
            Number.isNaN(
              date.getTime()
            )
          ) {

            return false;

          }


          return (
            date >= weekStart &&
            date <= now
          );

        }
      ).length;


    /* =========================================
       TRENINGI W TYM MIESIĄCU
       ========================================= */

    const workoutsThisMonth =
      workouts.filter(
        (workout) => {

          const date =
            new Date(
              workout.completedAt
            );


          if (
            Number.isNaN(
              date.getTime()
            )
          ) {

            return false;

          }


          return (
            date >= monthStart &&
            date <= now
          );

        }
      ).length;


    /* =========================================
       NAJCZĘŚCIEJ ĆWICZONA PARTIA
       ========================================= */

    const bodyPartCounts =
      {};


    workouts.forEach(
      (workout) => {

        const exercises =
          Array.isArray(
            workout.exercises
          )
            ? workout.exercises
            : [];


        exercises.forEach(
          (exercise) => {

            /*
              Liczymy tylko ćwiczenia,
              które faktycznie wykonano.
            */

            if (
              exercise.status !==
              "completed"
            ) {

              return;

            }


            const bodyParts =
              Array.isArray(
                exercise.bodyParts
              )
                ? exercise.bodyParts
                : [];


            bodyParts.forEach(
              (bodyPart) => {

                bodyPartCounts[
                  bodyPart
                ] =
                  (
                    bodyPartCounts[
                      bodyPart
                    ] ||
                    0
                  ) +
                  1;

              }
            );

          }
        );

      }
    );


    const mostTrainedBodyPart =
      Object.entries(
        bodyPartCounts
      )
        .sort(
          (
            a,
            b
          ) =>
            b[1] -
            a[1]
        )[0]?.[0] ||
      null;


    const mostTrainedBodyPartLabel =
      getHistoryStatisticBodyLabel(
        mostTrainedBodyPart
      );


    /* =========================================
       WIDOK
       ========================================= */

    historySummary.innerHTML = `

      <div class="history-summary-item">

        <span class="history-summary-value">
          ${workoutsThisWeek}
        </span>

        <span class="history-summary-label">
          treningi w tym tygodniu
        </span>

      </div>


      <div class="history-summary-item">

        <span class="history-summary-value">
          ${workoutsThisMonth}
        </span>

        <span class="history-summary-label">
          treningi w tym miesiącu
        </span>

      </div>


      <div class="history-summary-item">

        <span class="history-summary-value">
          ${workouts.length}
        </span>

        <span class="history-summary-label">
          wszystkie treningi
        </span>

      </div>


      <div class="history-summary-item">

        <span class="history-summary-value">
          ${formatHistoryTotalDuration(
            totalDurationSeconds
          )}
        </span>

        <span class="history-summary-label">
          łączny czas
        </span>

      </div>


      <div class="history-summary-item">

        <span class="history-summary-value">
          ${formatHistoryAverageDuration(
            averageDurationSeconds
          )}
        </span>

        <span class="history-summary-label">
          średni czas treningu
        </span>

      </div>


      <div class="history-summary-item">

        <span class="history-summary-value">
          ${completedExercises}
        </span>

        <span class="history-summary-label">
          wykonane ćwiczenia
        </span>

      </div>


      <div class="history-summary-item history-summary-item--wide">

        <span class="history-summary-value">
          ${mostTrainedBodyPartLabel}
        </span>

        <span class="history-summary-label">
          najczęściej ćwiczona partia
        </span>

      </div>

    `;


    historySummary.classList.remove(
      "is-hidden"
    );

  };


/* =========================================
   FORMAT ŚREDNIEGO CZASU
   ========================================= */

function formatHistoryAverageDuration(
  totalSeconds
) {

  const safeSeconds =
    Math.max(
      0,
      Math.round(
        Number(totalSeconds) ||
        0
      )
    );


  const minutes =
    Math.floor(
      safeSeconds /
      60
    );


  const seconds =
    safeSeconds %
    60;


  if (
    minutes === 0
  ) {

    return `${seconds} sek.`;

  }


  if (
    seconds === 0
  ) {

    return `${minutes} min`;

  }


  return (
    `${minutes} min ${seconds} sek.`
  );

}


/* =========================================
   NAZWA PARTII W STATYSTYKACH
   ========================================= */

function getHistoryStatisticBodyLabel(
  bodyPart
) {

  const labels = {

    chest:
      "Klatka",

    back:
      "Plecy",

    shoulders:
      "Barki",

    arms:
      "Ramiona",

    abs:
      "Brzuch",

    legs:
      "Nogi",

    glutes:
      "Pośladki"

  };


  if (
    !bodyPart
  ) {

    return "—";

  }


  return (
    labels[
      bodyPart
    ] ||
    bodyPart
  );

}
/* =========================================
   v0.10.4 — DOKŁADNE PRZEKAZYWANIE SPRZĘTU
   ========================================= */

getGeneratorCompatibleEquipment =
  function () {
    return [
      ...workoutConfig.equipment
    ];
  };


getGeneratorConfig =
  function () {
    return {
      ...workoutConfig,

      equipment: [
        ...workoutConfig.equipment
      ],

      equipmentDetails:
        cloneEquipmentDetails()
    };
  };
  /* =========================================
   v0.10.6 — DOMYŚLNA MASA WŁASNEGO CIAŁA
   ========================================= */

function selectBodyweightByDefault() {
  const bodyweightButton =
    document.querySelector(
      '[data-group="equipment"][data-value="bodyweight"]'
    );

  if (!bodyweightButton) {
    return;
  }

  bodyweightButton.classList.add(
    "is-selected"
  );

  syncEquipmentSelectionFromDom();
}


profileButtons.forEach(
  (button) => {
    button.addEventListener(
      "click",
      () => {
        selectBodyweightByDefault();
      }
    );
  }
);
/* =========================================
   v0.10.9 — OTWIERANIE BAZY ĆWICZEŃ
   ========================================= */

const exerciseLibraryScreen =
  document.querySelector(
    "#exerciseLibraryScreen"
  );

const exerciseLibraryOpenButton =
  document.querySelector(
    "#exerciseLibraryOpenButton"
  );

const exerciseLibraryBackButton =
  document.querySelector(
    "#exerciseLibraryBackButton"
  );


exerciseLibraryOpenButton?.addEventListener(
  "click",
  () => {
    showScreen(
      exerciseLibraryScreen
    );
  }
);


exerciseLibraryBackButton?.addEventListener(
  "click",
  () => {
    showScreen(
      welcomeScreen
    );
  }
);
/* =========================================
   v0.11.0 — LISTA ĆWICZEŃ W BAZIE
   ========================================= */

const exerciseLibraryList =
  document.querySelector(
    "#exerciseLibraryList"
  );

const exerciseLibraryEmpty =
  document.querySelector(
    "#exerciseLibraryEmpty"
  );

const exerciseLibraryBodyPartButtons =
  document.querySelectorAll(
    ".exercise-library-body-part"
  );

let currentExerciseLibraryBody =
  "all";


/* =========================================
   FILTRY PARTII
   ========================================= */

exerciseLibraryBodyPartButtons.forEach(
  (button) => {
    button.addEventListener(
      "click",
      () => {
        currentExerciseLibraryBody =
          button.dataset.libraryBody ||
          "all";

        exerciseLibraryBodyPartButtons
          .forEach(
            (bodyButton) => {
              bodyButton.classList.toggle(
                "is-selected",
                bodyButton === button
              );
            }
          );

        renderExerciseLibrary();
      }
    );
  }
);


/* =========================================
   RENDER BAZY
   ========================================= */

function renderExerciseLibrary() {
  if (
    !exerciseLibraryList ||
    !exerciseLibraryEmpty
  ) {
    return;
  }

  exerciseLibraryList.innerHTML =
    "";

  const database =
    Array.isArray(
      window.ExercisesDatabase
    )
      ? window.ExercisesDatabase
      : [];

  const exercises =
    database
      .filter(
        (exercise) => {
          if (
            currentExerciseLibraryBody ===
            "all"
          ) {
            return true;
          }

          return (
            exercise.primaryBodyPart ===
            currentExerciseLibraryBody
          );
        }
      )
      .sort(
        (a, b) =>
          a.name.localeCompare(
            b.name,
            "pl"
          )
      );

  if (
    exercises.length === 0
  ) {
    exerciseLibraryEmpty
      .classList
      .remove(
        "is-hidden"
      );

    const title =
      exerciseLibraryEmpty
        .querySelector(
          "p"
        );

    const description =
      exerciseLibraryEmpty
        .querySelector(
          "span"
        );

    if (title) {
      title.textContent =
        "Brak ćwiczeń.";
    }

    if (description) {
      description.textContent =
        "Nie znaleźliśmy ćwiczeń dla tej partii.";
    }

    return;
  }

  exerciseLibraryEmpty
    .classList
    .add(
      "is-hidden"
    );

  exercises.forEach(
    (exercise) => {
      exerciseLibraryList
        .appendChild(
          createExerciseLibraryCard(
            exercise
          )
        );
    }
  );
}


/* =========================================
   KARTA ĆWICZENIA W BAZIE
   ========================================= */

function createExerciseLibraryCard(
  exercise
) {
  const card =
    document.createElement(
      "article"
    );

  card.className =
    "exercise-library-card";

  const equipment =
    Array.isArray(
      exercise.requiredEquipment
    )
      ? exercise.requiredEquipment.map(
          (item) =>
            item.type
        )
      : [];

  const primaryBodyPart =
    getBodyPartsLabel(
      [
        exercise.primaryBodyPart
      ]
    );

  const secondaryBodyParts =
    Array.isArray(
      exercise.secondaryBodyParts
    )
      ? exercise.secondaryBodyParts
      : [];

  const strongSecondaryBodyParts =
    Array.isArray(
      exercise.strongSecondaryBodyParts
    )
      ? exercise.strongSecondaryBodyParts
      : [];

  const difficulty =
    createDifficultyDisplay(
      exercise.difficulty
    );

  const instructions =
    exercise.instructions ||
    "Instrukcja nie została jeszcze dodana.";

  const videoUrl =
    exercise.videoUrl ||
    "";

  card.innerHTML = `
    <button
      class="exercise-library-card-main"
      type="button"
      aria-expanded="false"
    >

      <div class="exercise-library-card-info">

        <h2>
          ${exercise.name}
        </h2>

        <div class="exercise-library-card-meta">

          <span>
            ${primaryBodyPart}
          </span>

          <span>
            ${getEquipmentLabel(equipment)}
          </span>

          <span class="difficulty">
            ${difficulty}
          </span>

        </div>

      </div>

      <span
        class="exercise-library-card-arrow"
        aria-hidden="true"
      >
        ↓
      </span>

    </button>


    <div
      class="exercise-library-card-details is-hidden"
    >

      <div class="exercise-library-detail-section">

        <span class="exercise-library-detail-label">
          Główna partia
        </span>

        <strong>
          ${primaryBodyPart}
        </strong>

      </div>


      ${
        secondaryBodyParts.length > 0
          ? `
            <div class="exercise-library-detail-section">

              <span class="exercise-library-detail-label">
                Partie pomocnicze
              </span>

              <strong>
                ${getSecondaryBodyPartsLabel(
  secondaryBodyParts
)}
              </strong>

            </div>
          `
          : ""
      }


      ${
        strongSecondaryBodyParts.length > 0
          ? `
            <div class="exercise-library-detail-section">

              <span class="exercise-library-detail-label">
                Mocno angażuje również
              </span>

              <strong>
                ${getBodyPartsLabel(
                  strongSecondaryBodyParts
                )}
              </strong>

            </div>
          `
          : ""
      }


      <div class="exercise-library-detail-section">

        <span class="exercise-library-detail-label">
          Sprzęt
        </span>

        <strong>
          ${getEquipmentLabel(equipment)}
        </strong>

      </div>


      <div class="exercise-library-detail-section">

        <span class="exercise-library-detail-label">
          Trudność
        </span>

        <div class="difficulty">
          ${difficulty}
        </div>

      </div>


      <div class="exercise-library-detail-instructions">

        <span class="exercise-library-detail-label">
          Jak wykonać?
        </span>

        <p>
          ${instructions}
        </p>

      </div>


      ${
        videoUrl
          ? `
            <a
              class="exercise-library-video-link"
              href="${videoUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz film instruktażowy ↗
            </a>
          `
          : ""
      }

    </div>
  `;


  const mainButton =
    card.querySelector(
      ".exercise-library-card-main"
    );

  const details =
    card.querySelector(
      ".exercise-library-card-details"
    );

  const arrow =
    card.querySelector(
      ".exercise-library-card-arrow"
    );


  mainButton?.addEventListener(
  "click",
  () => {
    const isOpen =
      card.classList.contains(
        "is-open"
      );


    /* ZWIŃ INNE OTWARTE KARTY */

    document
      .querySelectorAll(
        ".exercise-library-card.is-open"
      )
      .forEach(
        (openCard) => {
          if (
            openCard === card
          ) {
            return;
          }

          const openDetails =
            openCard.querySelector(
              ".exercise-library-card-details"
            );

          const openButton =
            openCard.querySelector(
              ".exercise-library-card-main"
            );

          const openArrow =
            openCard.querySelector(
              ".exercise-library-card-arrow"
            );


          openDetails?.classList.add(
            "is-hidden"
          );

          openButton?.setAttribute(
            "aria-expanded",
            "false"
          );

          openCard.classList.remove(
            "is-open"
          );

          if (openArrow) {
            openArrow.textContent =
              "↓";
          }
        }
      );


    /* OTWÓRZ / ZAMKNIJ KLIKNIĘTĄ KARTĘ */

    if (isOpen) {
      details.classList.add(
        "is-hidden"
      );

      mainButton.setAttribute(
        "aria-expanded",
        "false"
      );

      card.classList.remove(
        "is-open"
      );

      if (arrow) {
        arrow.textContent =
          "↓";
      }

      return;
    }


    details.classList.remove(
      "is-hidden"
    );

    mainButton.setAttribute(
      "aria-expanded",
      "true"
    );

    card.classList.add(
      "is-open"
    );

    if (arrow) {
      arrow.textContent =
        "↑";
    }
  }
);


  return card;
}


/* =========================================
   ODŚWIEŻANIE PRZY OTWARCIU
   ========================================= */

exerciseLibraryOpenButton?.addEventListener(
  "click",
  () => {
    currentExerciseLibraryBody =
      "all";

    exerciseLibraryBodyPartButtons
      .forEach(
        (button) => {
          button.classList.toggle(
            "is-selected",
            button.dataset.libraryBody ===
              "all"
          );
        }
      );

    renderExerciseLibrary();
  }
);
/* =========================================
   v0.11.3 — POLSKIE NAZWY PARTII POMOCNICZYCH
   ========================================= */

function getSecondaryBodyPartsLabel(
  bodyParts
) {
  const labels = {
    chest: "klatka",
    back: "plecy",
    shoulders: "barki",
    arms: "ramiona",
    abs: "brzuch",
    glutes: "pośladki",
    legs: "nogi",

    biceps: "biceps",
    triceps: "triceps",
    forearms: "przedramiona",

    "hip-flexors":
      "zginacze bioder",

    hamstrings:
      "tył uda",

    quadriceps:
      "przód uda",

    quads:
      "przód uda",

    calves:
      "łydki",

    adductors:
      "przywodziciele uda",

    abductors:
      "odwodziciele uda",

    obliques:
      "mięśnie skośne brzucha",

    lats:
      "mięśnie najszersze grzbietu",

    traps:
      "mięśnie czworoboczne",

    rhomboids:
      "mięśnie równoległoboczne",

    "lower-back":
      "dolna część pleców",

    "upper-back":
      "górna część pleców",

    "rear-delts":
      "tył barków",

    "front-delts":
      "przód barków",

    "side-delts":
      "bok barków",

    serratus:
      "mięsień zębaty przedni",

    "spinal-erectors":
      "prostowniki grzbietu",

    grip:
      "chwyt"
  };

  return (
    bodyParts ||
    []
  )
    .map(
      (bodyPart) =>
        labels[bodyPart] ||
        bodyPart
          .replaceAll(
            "-",
            " "
          )
    )
    .join(
      " • "
    );
}