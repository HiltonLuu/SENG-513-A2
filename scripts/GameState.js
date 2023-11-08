/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

import { Strategist } from "./Strategist.js";
import { Combat } from "./Combat.js";
import { rerenderBoard, rerenderStats } from "./GameDriver.js";

export class GameState {
  player1 = "";
  player2 = "";
  turn = 0;
  combat = "";

  constructor() {
    this.player1 = new Strategist();
    this.player2 = new Strategist();
    this.turn = 1;
    this.combat = new Combat();
  }

  messageAnimation = (msg) => {
    let overlay = document.getElementById("turn-change-overlay");
    let header = overlay.getElementsByTagName("h1")[0];
    header.textContent = msg;
    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 2000);
  };

  changePlayerCardBackground = (turn) => {
    switch (turn) {
      case 1:
        document.getElementById("player1-stats").classList.add("playerStats");
        document
          .getElementById("player2-stats")
          .classList.remove("playerStats");
        break;
      case 2:
        document
          .getElementById("player1-stats")
          .classList.remove("playerStats");
        document.getElementById("player2-stats").classList.add("playerStats");
        break;
      case 3:
        document
          .getElementById("player1-stats")
          .classList.remove("playerStats");
        document
          .getElementById("player2-stats")
          .classList.remove("playerStats");
        break;
    }
  };

  /* 
        will give 2 points to each strategist
        custom animation will be temporarily 
        enlargening the action point icons on the 
        UI to indicate points have been added
    */
  giveActionPoints = () => {
    this.player1.actionPoints += 2;
    this.player2.actionPoints += 2;
  };

  /*
        will traverse through both player's boards
        and call various cases of combat from the combat class
        flowchart can be found in readme and is labelled
    
        custom Animation will be an explosion photo on 
        top of the unit to indicate it was damaged
    */
  battle = () => {
    for (let i = 0; i < 5; i++) {
      let player1Unit = this.player1.board[i];
      let player2Unit = this.player2.board[i];

      //direct attack if
      if (player1Unit != "" && player2Unit === "") {
        this.combat.directAttackCombat(
          player1Unit,
          this.player2,
          this.player1.board
        );
      } else if (player2Unit != "" && player1Unit === "") {
        this.combat.directAttackCombat(
          player2Unit,
          this.player1,
          this.player2.board
        );
      } else if (player1Unit.speed === player2Unit.speed) {
      } else if (player1Unit.speed > player2Unit.speed) {
        this.combat.regularCombat(player1Unit, player2Unit, board);
      } else if (player2Unit.speed > player1Unit.speed) {
        this.combat.regularCombat(player2Unit, player1Unit, board);
      }

      //speed tie if statement
      //regular combat if statement

      rerenderBoard();
      rerenderStats();
    }
  };

  /*
        check if a player has defeated more than 10 units
        or a player's health is less than or equal to zero
    */
  CheckWinCondition = () => {};

  /*
        Will change the value of the turn counter
        1 = player1
        2 = player2
        3 = battle should commence
        Custom animation will be Overlay that shows end turn and the next action to occur
    */
  endTurn = () => {
    switch (this.turn) {
      case 1:
        this.turn = 2;
        this.messageAnimation("Player " + this.turn + " turn!");
        break;
      case 2:
        this.turn = 3;
        this.messageAnimation("Commence Combat!");
        break;
      case 3:
        this.turn = 1;
        this.messageAnimation("Player " + this.turn + " turn!");
        this.giveActionPoints();
        break;
    }

    return this.turn;
  };

  getCurrentPlayer = () => {
    if (this.turn === 1) {
      return this.player1;
    }

    if (this.turn === 2) {
      return this.player2;
    }
  };
}
