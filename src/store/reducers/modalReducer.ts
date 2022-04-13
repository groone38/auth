import { ModalAction, ModalState } from "../../types/modal";
import { AuthActionTypes, ModalActionTypes } from "../actions/actionTypes";


const initialState: ModalState = {
    typeModal: '',
    is_open: false,
    params: null,
    sing: false,
    error: null
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch(action.type) {
        case ModalActionTypes.OPEN_MODAL: 
            return {
                ...state,
                is_open: true,
                typeModal: action.payload??'',
                params: action.id
            }
        case AuthActionTypes.AUTH_MODAL:
            return {
                ...state,
                sing: !state.sing
            }
            case AuthActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ModalActionTypes.CLOSE_MODAL:
            return {
                ...state,
                typeModal: '',
                is_open: false
            } 
        default:
            return state
    }
}