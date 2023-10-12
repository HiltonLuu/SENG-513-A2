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
}