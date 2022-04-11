import { UserAction, UserState } from "../../types/users"
import { UserActionTypes } from "../actions/actionTypes"

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                loading: true,
                error: null,
                users: []
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null,
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                loading: true,
                error: action.payload,
                users: []
            }
        case UserActionTypes.REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state
    }
}