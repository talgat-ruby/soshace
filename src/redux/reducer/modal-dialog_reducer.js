import { MODAL_DIALOG_TYPES } from '../../environment/modal-dialog_environment';
import { CLOSE_MODAL_DIALOG, OPEN_CONFIRM_SUCCESS } from '../constants/modal-dialog_constants';

export default function modalDialog(state=null, action) {
	switch(action.type) {
		case CLOSE_MODAL_DIALOG:
			return null;
		case OPEN_CONFIRM_SUCCESS:
			return Object.assign({}, action.payload, { type: MODAL_DIALOG_TYPES.CONFIRM });
		default:
			return state;
	}
}