/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

class Archer extends Unit {
    constructor() {
        super({
            type: "Archer",
            image: "",
            owner: 0,
            health: 10,
            physicalDamage: 7,
            physicalDefence: 3,
            magicDamage: 0,
            magicDefence: 3,
            speed: 2,
        });
    }

    //if target is instance of Archer, attack the strategist instead
    //else use regular damage calc function
    attack = (target, targetStrategist, board) => {}
}