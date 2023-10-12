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
}