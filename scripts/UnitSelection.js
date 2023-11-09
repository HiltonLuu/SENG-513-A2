/*
Course: SENG 513
Date: Nov 8th, 2023
Assignment 3
Name: Hilton Luu
UCID: 30085893

Description: Logic for manipulating html code and allowing the user to choose a new unit to place
*/

import { Knight } from "./Knight.js";
import { Wizard } from "./Wizard.js";
import { Thief } from "./Thief.js";
import { Archer } from "./Archer.js";
import { Cleric } from "./Cleric.js";
import { state, rerenderBoard, rerenderStats } from "./GameDriver.js";

//used to make unit stats dynamic when hovering over units and deciding which one to pick
const changeStatDisplay = (unit) => {
  document.getElementById("unit-name").textContent = unit.type;
  document.getElementById("special-ability").textContent = unit.specialAbility;
  document.getElementById("health").textContent = unit.health;
  document.getElementById("physical-damage").textContent = unit.physicalDamage;
  document.getElementById("physical-defence").textContent =
    unit.physicalDefence;
  document.getElementById("magic-damage").textContent = unit.magicDamage;
  document.getElementById("magic-defence").textContent = unit.magicDefence;
  document.getElementById("speed").textContent = unit.speed;
};

//returns the stats to nothing when selecting units and you hover off all units
const defaultStatDisplay = () => {
  document.getElementById("unit-name").textContent = "";
  document.getElementById("special-ability").textContent = "";
  document.getElementById("health").textContent = "";
  document.getElementById("physical-damage").textContent = "";
  document.getElementById("physical-defence").textContent = "";
  document.getElementById("magic-damage").textContent = "";
  document.getElementById("magic-defence").textContent = "";
  document.getElementById("speed").textContent = "";
};

//array that stores the id of the buttons in the overlay and their corresponding unit classes
const unitButtons = [
  { buttonId: "knight", unitClass: Knight },
  { buttonId: "wizard", unitClass: Wizard },
  { buttonId: "archer", unitClass: Archer },
  { buttonId: "thief", unitClass: Thief },
  { buttonId: "cleric", unitClass: Cleric },
];

// Function to handle mouse enter and mouse leave events for unit buttons
const handleUnitSelectionButtonEvents = (buttonId, unitClass) => {
  const button = document.getElementById(buttonId);
  button.addEventListener("mouseenter", () => {
    changeStatDisplay(new unitClass());
  });
  button.addEventListener("mouseleave", () => {
    defaultStatDisplay();
  });

  //on click, the unit choice overlay closes,
  //then an overlay is opened where the user can choose where to place the unit on the board
  button.addEventListener("click", () => {
    document.getElementById("new-unit-overlay").style.display = "none";
    document.getElementById("new-unit-placement").style.display = "flex";

    let currentPlayer = state.getCurrentPlayer();

    let boardState = currentPlayer.board;
    let board = document.getElementById("unit-placement-board");
    board.innerHTML = "";
    let row = document.createElement("tr");

    for (let i = 0; i < boardState.length; i++) {
      let cell = document.createElement("td");

      cell.addEventListener("mouseenter", () => {
        if (boardState[i] != "") {
          cell.style.borderColor = "#FF0000";
        } else {
          cell.style.borderColor = "#008000";
        }
      });

      cell.addEventListener("mouseleave", () => {
        cell.style.borderColor = "#FFFFFF";
      });

      //if valid location to place unit, close overlay and rerender board to reflect changes
      cell.addEventListener("click", () => {
        if (boardState[i] === "") {
          currentPlayer.placeNewUnit(new unitClass(), i);
          document.getElementById("new-unit-placement").style.display = "none";
          currentPlayer.actionPoints -= 2;
          rerenderStats();
          rerenderBoard();
        }
      });

      //shows the units already on the board
      if (boardState[i] != "") {
        let img = document.createElement("img");
        img.classList.add("center-image");
        img.style.width = "100px";
        img.src =
          "../assets/" + String(boardState[i].type).toLowerCase() + ".png";
        cell.appendChild(img);
      }

      row.appendChild(cell);
    }

    board.appendChild(row);
  });
};

// Add event listeners for all unit buttons
unitButtons.forEach(({ buttonId, unitClass }) => {
  handleUnitSelectionButtonEvents(buttonId, unitClass);
});

export { changeStatDisplay, defaultStatDisplay };
