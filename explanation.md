# Object-Oriented Units and Characters

The various classes of units all inherit from a parent class called Unit that defines the types of stats a unit can have. Using this design, I avoided repeated code and standardized the structure of units.

The attack function on each unit was also designed with polymorphism in mind. The logic inside each attack function is different, but they all take the same parameters.

This allows for the simplification of combat logic into generic api calls.

# Dynamic rendering of stats on unit selection

When users are selecting a new unit to place on their board, they have the ability to hover over a unit to view its base stats and special ability. I had to add event listeners to each unit button for mouseenter, mouseexit, and click that had different rendering logic.

# State Management

Using the class called GameState, I was able to have central object that allowed me to pass context of information to various different classes that needed it to function. It kept track of things such as each players health, their current board, points, and the win condition.
