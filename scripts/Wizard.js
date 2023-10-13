/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

class Wizard extends Unit {
    constructor() {
        super({
            type: "Wizard",
            image: "",
            owner: 0,
            health: 10,
            physicalDamage: 0,
            physicalDefence: 0,
            magicDamage: 10,
            magicDefence: 5,
            speed: 2,
        });
    }

    //if target is instance of knight, deal damageCalc + 5
    //else use regular damage calc function
    attack = (target, targetStrategist, board) => {}
}