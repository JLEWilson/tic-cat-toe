export default (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_WIN':
      return !state;
    default:
      return state;
  }
}