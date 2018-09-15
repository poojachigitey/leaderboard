import { combineReducers } from 'redux';
import Leaderboard from '../app/Modules/Leaderboard';


export default combineReducers({
  [Leaderboard.constants.NAME]: Leaderboard.reducer,
});
