export default (state = {}, action) => {
  const {p1, p2, winner} = action;
  switch (action.type) {
  case 'EDIT_PLAYERS':
    return {
      player1: p1,
      player2: p2
    };
  case 'PLAYER_WIN':
    let newPlayers = {
      player1: p1,
      player2: p2
    }
    winner === 1 ?
    newPlayers.player1.score += 1 :
    newPlayers.player2.score += 1;
    return newPlayers;
  default:
    return state;
  }
};