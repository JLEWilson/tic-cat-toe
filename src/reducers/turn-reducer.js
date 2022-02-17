export default (state = 0, action) => {
  switch(action.type) {
    case 'SWITCH_TURN':
      switch(state){
        case 1:
          return 2;
        case 2:
          return 1;
        default:
          return 1;
      }
    default:
      return state;
  }
}