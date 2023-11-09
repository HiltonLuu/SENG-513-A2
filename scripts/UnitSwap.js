/*
Course: SENG 513
Date: Nov 8th, 2023
Assignment 3
Name: Hilton Luu
UCID: 30085893

Desc: Logic for swapping units and showing user varying html to do so.
*/

import { state, rerenderBoard } from "./GameDriver.js";

//generates the board in the overlay for the player to choose what to move
export const renderUnitSwapTable = () => {
  let board = document.getElementById("unit-move-board");
  board.innerHTML = "";
  let row = document.createElement("tr");
  let player = state.getCurrentPlayer();
  let toSwap = [];

  for (let i = 0; i < player.board.length; i++) {
    let cell = document.createElement("td");
    cell.setAttribute("data-position", i);

    //puts image of existing units on the board
    if (player.board[i] != "") {
      let img = document.createElement("img");
      img.classList.add("center-image");
      img.style.width = "100px";
      img.src =
        "../assets/" + String(player.board[i].type).toLowerCase() + ".png";
      cell.appendChild(img);
    }

    cell.addEventListener("mouseenter", () => {
      cell.style.borderColor = "#008000";
    });

    cell.addEventListener("mouseleave", () => {
      cell.style.borderColor = "#FFFFFF";
    });

    cell.addEventListener("click", () => {
      let position = Number(cell.getAttribute("data-position"));

      if (toSwap.length === 0 && player.board[position] != "") {
        toSwap.push(position);
      }

      if (toSwap.length >= 1 && toSwap[0] != position) {
        toSwap.push(position);

        //swap the units
        player.swapUnits(toSwap);

        //remove overlay
        document.getElementById("move-unit-placement").style.display = "none";

        //re-render the board
        rerenderBoard();
      }
    });

    row.appendChild(cell);
  }

  board.appendChild(row);
};
