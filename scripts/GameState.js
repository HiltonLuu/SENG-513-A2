/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893

Desc: stores main logic for the game state and has helper functions to update data when needed
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

  //creates an overlay to inform users of turn change or invalid moves
  messageAnimation = (msg) => {
    let overlay = document.getElementById("turn-change-overlay");
    let header = overlay.getElementsByTagName("h1")[0];
    header.textContent = msg;
    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 2000);
  };

  //adds a background color to the current players turn
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
    */
  giveActionPoints = () => {
    this.player1.actionPoints += 2;
    this.player2.actionPoints += 2;
  };

  /*
        will traverse through both player's boards
        and call various cases of combat from the combat class
        flowchart can be found in readme and is labelled
    */
  battle = () => {
    for (let i = 0; i < 5; i++) {
      let player1Unit = this.player1.board[i];
      let player2Unit = this.player2.board[i];

      //if empty do nothing
      if (player1Unit === "" && player2Unit === "") {
      }
      //player1 direct attack
      else if (player1Unit != "" && player2Unit === "") {
        this.combat.directAttackCombat(
          player1Unit,
          this.player2,
          this.player1.board
        );
      }
      //player2 direct attack
      else if (player2Unit != "" && player1Unit === "") {
        this.combat.directAttackCombat(
          player2Unit,
          this.player1,
          this.player2.board
        );
      }
      //speed tie case
      else if (player1Unit.speed === player2Unit.speed) {
        this.combat.speedTieCombat(
          player1Unit,
          player2Unit,
          this.player1.board
        );
        this.combat.speedTieCombat(
          player2Unit,
          player1Unit,
          this.player2.board
        );
      }
      //regular combat cases
      else if (player1Unit.speed > player2Unit.speed) {
        this.combat.regularCombat(player1Unit, player2Unit, this.player1.board);
      } else if (player2Unit.speed > player1Unit.speed) {
        this.combat.regularCombat(player2Unit, player1Unit, this.player2.board);
      }

      rerenderBoard();
      rerenderStats();
    }
  };

  //check if a player has defeated more than 10 units
  //or a player's health is less than or equal to zero
  checkWinCondition = () => {
    if (this.player2.health <= 0 || this.player1.defeatedUnits >= 10) {
      alert("Player 1 wins!");
    }

    if (this.player1.health <= 0 || this.player2.defeatedUnits >= 10) {
      alert("Player 2 wins!");
    }
  };

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
