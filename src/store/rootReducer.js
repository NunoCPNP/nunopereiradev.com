import { combineReducers } from 'redux';

import navbar from './Navbar/reducers';
import darkmode from './Darkmode/reducers';
import sanity from './Sanity/reducers';

const rootReducer = combineReducers({ navbar, darkmode, sanity });

export default rootReducer;
