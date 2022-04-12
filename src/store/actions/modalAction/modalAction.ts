import { Dispatch } from 'redux';
import { ModalAction } from '../../../types/modal';
import { ModalActionTypes } from '../actionTypes';
import { store } from './../../rootReducer';

export function openModal(typeModal: string) {
	return async (dispatch: Dispatch<ModalAction>) => {
		const prevState = store.getState()
        dispatch({type: ModalActionTypes.OPEN_MODAL, payload: typeModal})
	}
}