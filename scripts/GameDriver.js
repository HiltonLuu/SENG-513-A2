/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/
import { changeStatDisplay, defaultStatDisplay } from "./UnitSelection.js";

//flow chart can be found in readme called MatchStart
const matchStart = () => {};

const newUnitOverlay = document.getElementById("new-unit-overlay");
const newUnitButton = document.getElementById("new-unit-button");
newUnitButton.addEventListener("click", () => {
  newUnitOverlay.classList.add("fade-in-animation");
  newUnitOverlay.style.display = "flex";
});
