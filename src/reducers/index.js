import tilesReducer from "./tiles-reducer";
import displayFormReducer from "./display-form-reducer";
import displayWinReducer from "./display-win-reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  displayForm: displayFormReducer,
  tiles: tilesReducer,
  displayWin: displayWinReducer
});

export default rootReducer;