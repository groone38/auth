import { ModalAction, ModalState } from "../../types/modal";
import { ModalActionTypes } from "../actions/actionTypes";


const initialState: ModalState = {
    typeModal: '',
    is_open: false
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch(action.type) {
        case ModalActionTypes.OPEN_MODAL: 
            return {
                is_open: true,
                typeModal: action.payload??''
            }
        default:
            return state
    }
}