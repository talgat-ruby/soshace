import { CLOSE_MODAL_DIALOG, OPEN_MODAL_SUCCESS, INVALID_MODAL_DATA } from '../constants/modal-dialog_constants';

export default function modalDialog(state=null, action) {
	switch(action.type) {
		case CLOSE_MODAL_DIALOG:
			return null;
		case OPEN_MODAL_SUCCESS:
			return action.payload;
		case INVALID_MODAL_DATA:
			return Object.assign({}, state, action.errMessages);
		default:
			return state;
	}
}
