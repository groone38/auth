import { AuthActionTypes, ModalActionTypes } from "../store/actions/actionTypes"


export interface ModalState {
    is_open: boolean
    typeModal: string
    sing: boolean
    error: null | string
}

interface ModalOpenAction {
    type: ModalActionTypes.OPEN_MODAL
    payload?: string
}

interface ModalCloseAction {
    type: ModalActionTypes.CLOSE_MODAL
}

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

interface ModalCloseAction {
    type: ModalActionTypes.CLOSE_MODAL
}


// export type AuthAction = AuthErrorAction | AuthOpenModal | ModalCloseAction

export type ModalAction = ModalOpenAction | ModalCloseAction | AuthErrorAction | AuthOpenModal | ModalCloseAction