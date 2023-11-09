/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893

Desc: General combat class that handles the different combat variations
*/

export class Combat {
  constructor() {}

  //unit attacks target strategist
  //attack function is polymorphic so the same call works for various types of units
  directAttackCombat = (attackingUnit, targetStrategist, board) => {
    attackingUnit.attack(targetStrategist, targetStrategist, board);
  };

  //faster unit attacks
  //if slower unit is still alive
  //slower unit attacks
  //attack function is polymorphic so the same call works for various types of units
  regularCombat = (fasterUnit, slowerUnit, board) => {
    fasterUnit.attack(slowerUnit, "", board);

    if (slowerUnit.health > 0) {
      slowerUnit.attack(fasterUnit, "", board);
    }
  };

  //both units attack each other
  //this function is called twice to specify which board will be used
  speedTieCombat = (unit1, unit2, board) => {
    unit1.attack(unit2, "", board);
  };
}
