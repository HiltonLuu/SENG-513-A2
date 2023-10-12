class Strategist {
    health = 0;
    actionPoints = 0;
    defeatedUnits = 0;
    board = [];

    construtor() {
        this.health = 100;
        this.actionPoints = 0;
        this.defeatedUnits = 0;
        this.board = new Array(5);
    }

    //flowchart can be found in the readme
    /*
        will create an animation for the image of the unit appearing. Most likely through a dust cloud effect
        or image will appear on the screen gradually.
    */
    PlaceNewUnit = (unit, location) => {}

    //flowchart can be found in the readme
    /*
        custom animation will take form as a sound effect or a screen overlay that indicates the unit swap
    */
    SwapUnits = (unit1, unit2) => {}

    /*
        checks the number of units currently on the player's board
        returns the total as a result
    */
    CountTotalUnits = () => {}

}