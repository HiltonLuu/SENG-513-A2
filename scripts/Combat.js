class Combat {

    constructor () {}

    /*
        unit attacks target strategist
        custom animation of target strategist taking damage with a pixelated 8-bit damage photo
    */
    DirectAttackCombat = (attackingUnit, targetStrategist) => {}

    /*
        faster unit attacks
        if slower unit is still alive
        slower unit attacks
    */
    RegularCombat = (fasterUnit, slowerUnit) => {}

    /*
        both units attack each other
    */
    SpeedTieCombat = (unit1, unit2) => {}


    /*
        remove all units with negative health
        update count of units defeated accordingly
        custom animations for removing units by having them shrink
        custom animation for unit defeated count which will indicate a change
    */
    UpdateBoard = () => {}
}