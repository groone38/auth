import { UserActionTypes } from "../store/actions/actionTypes"

export interface User {
    id: number
    email: string
    password: string
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

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction