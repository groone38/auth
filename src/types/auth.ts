import { AuthActionTypes } from "../store/actions/actionTypes"

export interface AuthState {
    sing: boolean
    error: null | string
}

interface AuthErrorAction {
    type: AuthActionTypes.AUTH_ERROR
    payload: string
}

interface AuthOpenModal {
    type: AuthActionTypes.AUTH_MODAL
}

export type AuthAction = AuthErrorAction | AuthOpenModal