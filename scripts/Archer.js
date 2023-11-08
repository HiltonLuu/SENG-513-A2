/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

import { Strategist } from "./Strategist.js";
import { Unit } from "./Unit.js";

export class Archer extends Unit {
  constructor() {
    super({
      type: "Archer",
      specialAbility:
        "If attacking another archer, attack the enemy strategist instead",
      image: "",
      owner: 0,
      health: 10,
      physicalDamage: 7,
      physicalDefence: 3,
      magicDamage: 0,
      magicDefence: 3,
      speed: 2,
    });
  }

  //if target is instance of Archer, attack the strategist instead
  //else use regular damage calc function
  attack = (target, targetStrategist, board) => {
    if (target instanceof Archer || target instanceof Strategist) {
      targetStrategist.health -= this.physicalDamage;
    } else {
      target.health -= this.physicalDamage - target.physicalDefence;
    }
  };
}
