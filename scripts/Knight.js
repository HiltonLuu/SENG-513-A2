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
}