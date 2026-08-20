/* =========================================
   K&K — Czas na Wycisk!
   ŁĄCZENIE MODUŁÓW BAZY ĆWICZEŃ
   exercises/index.js
   v1.0
   ========================================= */

const allExercises = [
  ...window.ArmExercises,
  ...window.BackExercises,
  ...window.ChestExercises,
  ...window.CoreExercises,
  ...window.GluteExercises,
  ...window.LegExercises,
  ...window.ShoulderExercises
];

window.ExercisesDatabase = allExercises;