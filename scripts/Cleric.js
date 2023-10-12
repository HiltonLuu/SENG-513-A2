class Cleric extends Unit {
    constructor() {
        super({
            type: "Cleric",
            image: "",
            owner: 0,
            health: 10,
            physicalDamage: 0,
            physicalDefence: 3,
            magicDamage: 0,
            magicDefence: 3,
            speed: 2,
        });
    }
}