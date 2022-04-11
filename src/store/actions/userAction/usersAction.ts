import axios from "axios"
import { Dispatch } from "redux"
import { UserAction } from "../../../types/users"
import { UserActionTypes } from "../actionTypes"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('http://localhost:3001/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
        } catch(e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: `${e}`})
        }
    }
}