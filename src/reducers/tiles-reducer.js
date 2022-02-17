export default (state = [0,0,0,0,0,0,0,0,0], action) => {
  const { id, currentPlayer } = action;
  switch(action.type) {
    case 'EDIT_TILES':
      let newState = [...state];
      newState[id] = currentPlayer;
      return newState;
    case 'RESET-TILES':
      let resetState = [0,0,0,0,0,0,0,0,0];
      return resetState;
    default:
    return state;
  }
}