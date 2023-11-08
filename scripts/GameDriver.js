/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/
import { changeStatDisplay, defaultStatDisplay } from "./UnitSelection.js";
import { renderUnitSwapTable } from "./UnitSwap.js";
import { GameState } from "./GameState.js";

/*
        remove all units with negative health
        update count of units defeated accordingly
        custom animations for removing units by having them shrink
        custom animation for unit defeated count which will indicate a change
*/
const updateBoard = () => {
  for (let i = 0; i < 5; i++) {
    if (state.player1.board[i] != "" && state.player1.board[i].health <= 0) {
      state.player1.health -= state.player1.board[i].health;
      state.player1.board[i] = "";
      state.player2.defeatedUnits++;
    }

    if (state.player2.board[i] != "" && state.player2.board[i].health <= 0) {
      state.player2.health -= state.player2.board[i].health;
      state.player2.board[i] = "";
      state.player1.defeatedUnits++;
    }
  }
};

const generatePlayerBoard = (board, player) => {
  let row = document.createElement("tr");

  for (let i = 0; i < player.board.length; i++) {
    let cell = document.createElement("td");
    cell.classList.add = "flex-column";

    if (player.board[i] != "") {
      let unitHealth = document.createElement("div");
      unitHealth.style.marginLeft = "25px";
      unitHealth.style.display = "flex";
      let heart = document.createElement("img");
      heart.src = "../assets/heart.png";
      heart.style.width = "50px";
      heart.style.height = "50px";
      let healthValue = document.createElement("h2");

      unitHealth.appendChild(heart);
      unitHealth.appendChild(healthValue);

      cell.append(unitHealth);

      healthValue.textContent = player.board[i].health;
      let img = document.createElement("img");
      img.classList.add("center-image");
      img.style.width = "100px";
      img.src =
        "../assets/" + String(player.board[i].type).toLowerCase() + ".png";
      cell.appendChild(img);
    }

    row.appendChild(cell);
  }

  board.appendChild(row);
};

export let state = new GameState();

export const rerenderBoard = () => {
  let board = document.getElementById("game-board");
  board.innerHTML = "";

  if (state.turn === 2 || state.turn === 3) {
    generatePlayerBoard(board, state.player2);
  }

  if (state.turn === 1 || state.turn === 3) {
    generatePlayerBoard(board, state.player1);
  }
};

export const rerenderStats = () => {
  document.getElementById("player1-health").textContent = state.player1.health;
  document.getElementById("player1-points").textContent =
    state.player1.actionPoints;
  document.getElementById("player1-defeated-units").textContent =
    state.player1.defeatedUnits;

  document.getElementById("player2-health").textContent = state.player2.health;
  document.getElementById("player2-points").textContent =
    state.player2.actionPoints;
  document.getElementById("player2-defeated-units").textContent =
    state.player2.defeatedUnits;
};

//flow chart can be found in readme called MatchStart
const matchStart = () => {
  state.messageAnimation("Match Start!");
  state.giveActionPoints();
  rerenderBoard();
  rerenderStats();

  //indicate player 1 turn
  state.changePlayerCardBackground(1);
};

const newUnitOverlay = document.getElementById("new-unit-overlay");
const newUnitButton = document.getElementById("new-unit-button");
newUnitButton.addEventListener("click", () => {
  if (state.turn != 3) {
    if (state.getCurrentPlayer().countTotalUnits() === 5) {
      state.messageAnimation("Your board is full!");
    } else if (state.getCurrentPlayer().actionPoints >= 2) {
      newUnitOverlay.classList.add("fade-in-animation");
      newUnitOverlay.style.display = "flex";
    } else {
      state.messageAnimation("invalid amount of points!");
    }
  }
});

const endTurnButton = document.getElementById("end-turn-button");
endTurnButton.addEventListener("click", () => {
  if (state.turn != 3) {
    state.changePlayerCardBackground(state.endTurn());
    rerenderBoard();
    rerenderStats();
  }

  if (state.turn === 3) {
    state.battle();

    setTimeout(() => {
      updateBoard();
      rerenderBoard();
    }, 4000);

    setTimeout(() => {
      state.changePlayerCardBackground(state.endTurn());
      rerenderBoard();
      rerenderStats();

      state.checkWinCondition();
    }, 7000);
  }
});

const moveUnitOverlay = document.getElementById("move-unit-placement");
const moveUnitButton = document.getElementById("move-unit-button");
moveUnitButton.addEventListener("click", () => {
  if (state.turn != 3) {
    if (state.getCurrentPlayer().countTotalUnits() === 0) {
      state.messageAnimation("Your board is empty!");
    } else {
      moveUnitOverlay.classList.add("fade-in-animation");
      moveUnitOverlay.style.display = "flex";
      renderUnitSwapTable();
    }
  }
});

matchStart();
