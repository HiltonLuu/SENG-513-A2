/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

import { Unit } from "./Unit.js";

export class Cleric extends Unit {
  constructor() {
    super({
      type: "Cleric",
      specialAbility: "Heal ally units for 2 health when attacking",
      image: "",
      owner: 0,
      health: 10,
      physicalDamage: 0,
      physicalDefence: 3,
      magicDamage: 0,
      magicDefence: 3,
      speed: 2,
    });
  }

  //Heal all ally units for 2 health if health is positive
  attack = (target, targetStrategist, board) => {};
}
