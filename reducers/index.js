import { combineReducers } from 'redux';

import loginDetails from './loginDetails';

export default combineReducers({

    user: loginDetails,
});