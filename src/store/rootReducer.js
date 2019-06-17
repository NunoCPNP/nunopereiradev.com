import { combineReducers } from 'redux';

import navbar from './Navbar/reducers';
import darkmode from './Darkmode/reducers';

const rootReducer = combineReducers({ navbar, darkmode });

export default rootReducer;
