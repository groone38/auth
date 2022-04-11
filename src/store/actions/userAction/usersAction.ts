import axios from "axios"
import { Dispatch } from "redux"
import { UserAction } from "../../../types/users"
import { UserActionTypes } from "../actionTypes"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        console.log('work')
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('http://localhost:3001/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
        } catch(e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: `${e}`})
        }
    }
}

export const removeUser = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`)
            fetchUsers()
        } catch (error) {
            
        }
    }
}

export const editUser = (id: number, firstName?: string, middleName?: string, lastName?: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const responce = await axios.post(`http://localhost:3001/users/${id}`, {firstName, middleName, lastName})
            console.log(responce.data)
        } catch (error) {
            console.log('error')
        }
    }
}