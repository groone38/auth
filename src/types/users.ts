import { UserActionTypes } from "../store/actions/actionTypes"

export interface User {
    id: number
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    number: number
    company: string
}

export interface UserState {
    users: User[],
    loading: boolean
    error: null | string
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: User[]
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

interface EditUserAction {
    type: UserActionTypes.EDIT_USER
    payload: User
}

interface RemoveUserAction {
    type: UserActionTypes.REMOVE_USER
    payload: number
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | EditUserAction | RemoveUserAction