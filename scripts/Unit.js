class Unit {
    type = "";
    image = "";
    owner = 0;
    health = 0;
    physicalDamage = 0;
    physicalDefence = 0;
    magicDamage = 0;
    magicDefence = 0;
    speed = 0;
    
    constructor(obj) {
        this.type = obj.type;
        this.image = obj.image;
        this.owner = obj.owner;
        this.health = obj.health;
        this.physicalDamage = obj.physicalDamage;
        this.physicalDefence = obj.physicalDefence;
        this.magicDamage = obj.magicDamage;
        this.magicDefence = obj.magicDefence;
        this.speed = obj.speed;
    }

    //calculating damage
    //Damage to units  = Health - ((Attacker Physical Damage - Defender Physical Defence) + (Attacker Magic Damage - Defender Magical Defence))
    damageCalculation = (target) => {}

    //will be implemented at child class level
    attack = (target, targetStrategist, board) => {}
}