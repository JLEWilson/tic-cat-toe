export default (state = "", action) => {
  const { winner } = action;
  switch(action.type) {
    case 'SET_WINNER':
      return winner;
    default:
      return state;
  }
}