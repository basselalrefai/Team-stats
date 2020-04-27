//Create an empty team object
const team = {
    //in order to represent both of the games and the players create a players property and _games property which are initialized to empty arrays
    //populate the _players empty array with three actual players with each player being an object
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },

        {
            firstName: 'Cristiano',
            lastName: 'Ronaldo',
            age: 40,
        },

        {
            firstName: 'Gareth',
            lastName: 'Bale',
            age: 35,
        },
    ],
    //populate the _games empty array the same way
    _games: [{
            opponent: 'Jarmana',
            teamPoints: 25,
            opponentPoints: 5,
        },

        {
            opponent: 'Jeish',
            teamPoints: 35,
            opponentPoints: 15,
        },

        {
            opponent: 'Fijeh',
            teamPoints: 65,
            opponentPoints: 35,
        },
    ],
    //Create getter methods for _players and _games
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // create a method to add a new player to your team object with three parameters for first name last name and age, and it should create a player object and push it into the players array
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        // push the player object to the players array
        this._players.push(player);
    },
    // add a similar method for games result that has parameters for oppenents name your tems points and the oppenents points, and creates a game object and push it to the games array
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        // push the game object to the games array
        this._games.push(game);
    },
};
// invoke the method to add the players and log it to the console
team.addPlayer('Steph', 'Curry', '28');
team.addPlayer('Lisa', 'Leslie', '44');
team.addPlayer('Buggs', 'Bunny', '76');
//test 
console.log(team._players);
// invoke addGame method on three teams and log it to the console.
team.addGame('Heat', 65, 50);
team.addGame('Cold', 52, 51);
team.addGame('Mild', 54, 45);
// test
console.log(team._games)