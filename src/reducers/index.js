import tilesReducer from "./tiles-reducer";
import displayFormReducer from "./display-form-reducer";
import displayWinReducer from "./display-win-reducer";
import playerReducer from "./player-reducer";
import turnReducer from "./turn-reducer";
import winnerReducer from "./winner-reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  displayForm: displayFormReducer,
  tiles: tilesReducer,
  displayWin: displayWinReducer,
  players: playerReducer,
  turn: turnReducer,
  winner: winnerReducer
});

export default rootReducer;