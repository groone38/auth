import { Dispatch } from 'redux';
import { ModalAction } from '../../../types/modal';
import { AuthActionTypes, ModalActionTypes, MODAL_TYPE } from '../actionTypes';
import { store } from './../../rootReducer';
import axios from "axios"

export function openModal(typeModal: string, id?: number) {
	return (dispatch: Dispatch<ModalAction>) => {
        if(id) {
            dispatch({type: ModalActionTypes.OPEN_MODAL, payload: typeModal, id})
        } else {
            dispatch({type: ModalActionTypes.OPEN_MODAL, payload: typeModal})
        }
	}
}

export function closeModal() {
	return (dispatch: Dispatch<ModalAction>) => {
		dispatch({type: ModalActionTypes.CLOSE_MODAL})
	}
}

interface Auth {
    email: string
    password: string
}

export const AuthUser = (value: Auth) => {
    return (dispatch: Dispatch<ModalAction>) =>  {
        const prevState = store.getState()
        const user = prevState.users.users.filter(item => {
            if(item.email === value.email && item.password === value.password)
                return item
        })
        if(user.length) {
            localStorage.setItem('auth', value.email)
            dispatch({type: AuthActionTypes.AUTH_MODAL})
            dispatch({type: AuthActionTypes.AUTH_ERROR, payload: ""})
            dispatch({type: ModalActionTypes.CLOSE_MODAL})
			
        } else {
            dispatch({type: AuthActionTypes.AUTH_ERROR, payload: "Пользователь не найден"})
        }
        }
}

export const OutUser = () => {
    return (dispatch: Dispatch<ModalAction>) => {
        localStorage.removeItem("auth")
        dispatch({type: AuthActionTypes.AUTH_MODAL})
		dispatch({type: ModalActionTypes.OPEN_MODAL, payload: MODAL_TYPE.login})
    }
}

interface Registr {
    email: string,
    password: string,
    firstName: string,
    middleName: string,
    lastName: string,
    number: number | null,
    company: string
}

export const RegistrUser = (value: Registr) => {
    return async () => {
        console.log(value)
        try {
            await axios.post('http://localhost:3001/users', {id: Date.now(), ...value })
        } catch (error) {
            
        }
    }
}