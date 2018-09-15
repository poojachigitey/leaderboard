import { combineReducers } from 'redux';
import Swixer from '../app/Modules/Swixer';


export default combineReducers({
  [Swixer.constants.NAME]: Swixer.reducer,
});
