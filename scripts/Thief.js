/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

class Thief extends Unit {
    constructor() {
        super({
            type: "Thief",
            image: "",
            owner: 0,
            health: 10,
            physicalDamage: 5,
            physicalDefence: 0,
            magicDamage: 0,
            magicDefence: 0,
            speed: 3,
        });
    }

    //if target is instance of Strategist, attack twice
    //if target is slower unit, attack twice
    //else use regular damage calc function
    attack = (target, targetStrategist, board) => {}
}