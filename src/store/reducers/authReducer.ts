import { AuthActionTypes } from '../actions/actionTypes';
import { AuthAction, AuthState } from './../../types/auth';

const initialState: AuthState = {
    sing: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type) {
        case AuthActionTypes.AUTH_MODAL:
            return {
                sing: !state.sing,
                error: null
            }
        case AuthActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}