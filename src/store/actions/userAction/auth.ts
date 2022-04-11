import { Dispatch } from "redux"
import { AuthAction } from "../../../types/auth"
import { AuthActionTypes } from "../actionTypes";
import { store } from './../../rootReducer';

interface Value {
    email: string
    password: string
}

export const AuthUser = (value: Value) => {
    return (dispatch: Dispatch<AuthAction>) =>  {
        const prevState = store.getState()
        const user = prevState.users.users.filter(item => {
            if(item.email === value.email && item.password === value.password)
                return item
        })
        if(user.length) {
            localStorage.setItem('auth', value.email)
            dispatch({type: AuthActionTypes.AUTH_MODAL})
            dispatch({type: AuthActionTypes.AUTH_ERROR, payload: ""})
        } else {
            dispatch({type: AuthActionTypes.AUTH_ERROR, payload: "Пользователь не найден"})
        }
        }
}

export const OutUser = () => {
    console.log('work')
    return (dispatch: Dispatch<AuthAction>) => {
        localStorage.removeItem("auth")
        dispatch({type: AuthActionTypes.AUTH_MODAL})
    }
}