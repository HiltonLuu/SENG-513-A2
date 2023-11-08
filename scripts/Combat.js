/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

export class Combat {
  constructor() {}

  /*
        unit attacks target strategist
        custom animation of target strategist taking damage with a pixelated 8-bit damage photo
    */
  directAttackCombat = (attackingUnit, targetStrategist, board) => {
    attackingUnit.attack(targetStrategist, targetStrategist, board);
  };

  /*
        faster unit attacks
        if slower unit is still alive
        slower unit attacks
    */
  regularCombat = (fasterUnit, slowerUnit, board) => {
    fasterUnit.attack(slowerUnit, targetStrategist, board);
  };

  /*
        both units attack each other
    */
  speedTieCombat = (unit1, unit2) => {};

  /*
        remove all units with negative health
        update count of units defeated accordingly
        custom animations for removing units by having them shrink
        custom animation for unit defeated count which will indicate a change
    */
  UpdateBoard = () => {};
}
