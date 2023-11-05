import { Knight } from "./Knight.js";
import { Wizard } from "./Wizard.js";
import { Thief } from "./Thief.js";
import { Archer } from "./Archer.js";
import { Cleric } from "./Cleric.js";

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
  button.addEventListener("click", () => {
    document.getElementById("new-unit-overlay").style.display = "none";
    document.getElementById("new-unit-placement").style.display = "flex";
  });
};

// Add event listeners for all unit buttons
unitButtons.forEach(({ buttonId, unitClass }) => {
  handleUnitSelectionButtonEvents(buttonId, unitClass);
});

export { changeStatDisplay, defaultStatDisplay };
