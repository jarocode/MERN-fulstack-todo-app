import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

import { returnErrors } from "./errorActions";

//check token and load user
export const loadUser = () => async (dispatch, getState) => {
    //user loading...
    dispatch({type: USER_LOADING});

    //Get token from localstorage
    const token = getState().auth.token;
    
    try {
        const getUser = await fetch('/api/auth/user', {
            method: 'GET',
            headers: {
                "Content-type" : "application/json",
                "x-auth-token" :  token && token //if there is a token add to headers
            }
        });

        dispatch({type: USER_LOADED, payload: getUser});
    
    } catch (error) {
        dispatch(returnErrors(error.msg, error.status));
        dispatch({ type: AUTH_ERROR});
    }



    
}