/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

import { Knight } from "./Knight.js";

export class Strategist {
  health = 0;
  actionPoints = 0;
  defeatedUnits = 0;
  board = [];

  constructor() {
    this.health = 100;
    this.actionPoints = 0;
    this.defeatedUnits = 0;
    this.board = ["", "", "", "", ""];
  }

  //flowchart can be found in the readme
  /*
        will create an animation for the image of the unit appearing. Most likely through a dust cloud effect
        or image will appear on the screen gradually.
    */
  placeNewUnit = (unit, location) => {
    this.board[location] = unit;
  };

  //flowchart can be found in the readme
  /*
        custom animation will take form as a sound effect or a screen overlay that indicates the unit swap
    */
  swapUnits = (toSwap) => {
    let temp = this.board[toSwap[0]];
    this.board[toSwap[0]] = this.board[toSwap[1]];
    this.board[toSwap[1]] = temp;
  };

  /*
        checks the number of units currently on the player's board
        returns the total as a result
    */
  countTotalUnits = () => {
    return this.board.filter((unit) => unit !== "").length;
  };
}
