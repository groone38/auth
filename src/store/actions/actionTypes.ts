export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    EDIT_USER = 'EDIT_USER',
    REMOVE_USER = 'REMOVE_USER'
}

export enum AuthActionTypes {
    AUTH_MODAL = 'AUTH_MODAL',
    AUTH_ERROR = 'AUTH_ERROR'
}

export enum ModalActionTypes {
    OPEN_MODAL = 'OPEN_MODAL',
}

export const MODAL_TYPE = {
	login: 0,
	register: 1,
	edit: 2,
    close: 3
}