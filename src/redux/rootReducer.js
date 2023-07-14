import { combineReducers } from 'redux';
import userReducer from './user/slice';
import operationReducer from './operation/slice';

const rootReducer = combineReducers({ userReducer, operationReducer });

export default rootReducer;
