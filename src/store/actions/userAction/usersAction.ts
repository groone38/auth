import axios from "axios"
import { Dispatch } from "redux"
import { UserAction } from "../../../types/users"
import { UserActionTypes } from "../actionTypes"
import { store } from './../../rootReducer';

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

export const removeUser = (id: number) => {
    return async () => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
}

interface EditUser {
    firstName: string,
    middleName: string,
    lastName: string,
}

export const editUser = (id: number | undefined | null, value: EditUser) => {
    return async () => {
        const user = store.getState().users.users.filter(user => user.id === id)
        const data = {
            ...user[0],
            firstName: value.firstName,
            middleName: value.middleName,
            lastName: value.lastName
        }
        try {
            await axios.put(`http://localhost:3001/users/${id}`, data)
        } catch (error) {
            console.log('error')
        }
    }
}
interface Add {
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    number: number | null,
    company: string
}

export const addUser = (value: Add) => {
    return async () => {
        try {
            await axios.post('http://localhost:3001/users', {id: Date.now(), ...value })
        } catch (error) {
            console.log(error)
        }
    }
}