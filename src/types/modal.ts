import { ModalActionTypes } from "../store/actions/actionTypes"


export interface ModalState {
    is_open: boolean
    typeModal: string
}

interface ModalOpenAction {
    type: ModalActionTypes.OPEN_MODAL
    payload?: string
}

export type ModalAction = ModalOpenAction