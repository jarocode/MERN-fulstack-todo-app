import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

 const AllReducers  = combineReducers({
    error: errorReducer,
    auth: authReducer
})

export default AllReducers;