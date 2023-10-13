/*
Course: SENG 513
Date: Oct 12, 2023
Assignment 2 Part One
Name: Hilton Luu
UCID: 30085893
*/

class GameState {
    player1 = "";
    player2 = "";
    turn = 0;

    constructor() {
        this.player1 = new Strategist();
        this.player2 = new Strategist();
        turn = 0;
    }

    /* 
        will give 2 points to each strategist
        custom animation will be temporarily 
        enlargening the action point icons on the 
        UI to indicate points have been added
    */
    GiveActionPoints = () => {}

    /*
        will traverse through both player's boards
        and call various cases of combat from the combat class
        flowchart can be found in readme and is labelled
    
        custom Animation will be an explosion photo on 
        top of the unit to indicate it was damaged
    */
    Battle = () => {}

    /*
        check if a player has defeated more than 10 units
        or a player's health is less than or equal to zero
    */
    CheckWinCondition = () => {}

    /*
        Will change the value of the turn counter
        1 = player1
        2 = player2
        3 = battle should commence
        Custom animation will be Overlay that shows end turn and the next action to occur
    */
    EndTurn = () => {}
}