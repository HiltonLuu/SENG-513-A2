/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

class Knight extends Unit {
    constructor() {
        super({
            type: "Knight",
            image: "",
            owner: 0,
            health: 20,
            physicalDamage: 10,
            physicalDefence: 5,
            magicDamage: 0,
            magicDefence: 0,
            speed: 1,
        });
    }

    //if target is instance of Strategist, deal physical damage + 2
    //else use regular damage calc function
    attack = (target, targetStrategist, board) => {}
}