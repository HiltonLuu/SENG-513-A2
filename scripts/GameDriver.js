/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/
import { changeStatDisplay, defaultStatDisplay } from "./UnitSelection.js";
import { GameState } from "./GameState.js";

export let state = new GameState();

export const rerenderBoard = () => {
  let board = document.getElementById("game-board");
  board.innerHTML = "";

  let row = document.createElement("tr");

  for (let i = 0; i < state.player2.board.length; i++) {
    let cell = document.createElement("td");

    if (state.player2.board[i] != "") {
      let img = document.createElement("img");
      img.classList.add("center-image");
      img.style.width = "100px";
      img.src =
        "../assets/" +
        String(state.player2.board[i].type).toLowerCase() +
        ".png";
      cell.appendChild(img);
    }

    row.appendChild(cell);
  }

  board.appendChild(row);

  row = document.createElement("tr");

  for (let i = 0; i < state.player1.board.length; i++) {
    let cell = document.createElement("td");

    if (state.player1.board[i] != "") {
      let img = document.createElement("img");
      img.classList.add("center-image");
      img.style.width = "100px";
      img.src =
        "../assets/" +
        String(state.player1.board[i].type).toLowerCase() +
        ".png";
      cell.appendChild(img);
    }

    row.appendChild(cell);
  }

  board.appendChild(row);
};

//flow chart can be found in readme called MatchStart
const matchStart = () => {};

const newUnitOverlay = document.getElementById("new-unit-overlay");
const newUnitButton = document.getElementById("new-unit-button");
newUnitButton.addEventListener("click", () => {
  newUnitOverlay.classList.add("fade-in-animation");
  newUnitOverlay.style.display = "flex";
});
