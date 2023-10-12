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
}