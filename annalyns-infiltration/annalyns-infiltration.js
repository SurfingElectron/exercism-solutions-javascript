// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 * 
 * ORIGINAL CODE - refactored following automated mentoring advice
 * if(knightIsAwake) {
 *    return false;
 *  }
 *  return true;
 * 
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 * 
 * ORIGINAL CODE - refactored following automated mentoring advice
 * if(!knightIsAwake && !archerIsAwake && !prisonerIsAwake) {
 *  return false
 * }
 * return true;
 * 
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 * 
 * ORIGINAL CODE - refactored following automated mentoring advice
 * if(!archerIsAwake && prisonerIsAwake) {
 *   return true;
 * }
 * return false;
 * 
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 * 
 * ORIGINAL CODE - refactored following automated mentoring advice
 * if (!archerIsAwake && petDogIsPresent) {
 *   return true
 * }
 * if (!knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent) {
 *   return true
 * }
 * return false;
 * 
 */

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (petDogIsPresent && !archerIsAwake)
    ||
    (prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  );
}
