const team = {
  name: 'Bills',
  _players: [
    { firstName: 'Josh', 
      lastName: 'Allen', 
      age: 26 },
    { firstName: 'Stef',
      lastName: 'Diggs',
      age: 29 },
    { firstName: 'Jordan',
      lastName: 'Poyer',
      age: 31 }
  ],
  _games: [
    { opponent: 'Dolphins',
      teamPoints: 41,
      opponentPoints: 3 },
    { opponent: 'Bengals',
      teamPoints: 37,
      opponentPoints: 17 },
    { opponent: 'Chiefs',
      teamPoints: 33, 
      opponentPoints: 21 }
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (newFirstName, newLastName, newAge) {
    this._players.push(
      { firstName: newFirstName,
        lastName: newLastName,
        age: newAge });
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    });
  },
  avgTeamPoints () {
    let totalPoints = 0;
    let totalGames = 0;
    for (let points in this.games) {
      totalPoints += this._games[points].teamPoints;
      totalGames++;
        // console.log(total);
        // console.log(totalGames);
    }
    return totalPoints / totalGames;
  },
  avgOpponentPoints () {
    let totalPoints = 0;
    let totalGames = 0;
    for (let points in this.games) {
      totalPoints += this._games[points].opponentPoints;
      totalGames++;
        // console.log(total);
        // console.log(totalGames);
    }
    return totalPoints / totalGames;
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);
console.log(team.avgTeamPoints());
console.log(team.avgOpponentPoints());

