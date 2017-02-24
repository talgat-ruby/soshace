import { CLOSE_MODAL_DIALOG, OPEN_CONFIRM_SUCCESS } from '../../constants/modal-dialog_constants';
import { pipe } from '../../../utils';

const closeModalDialog = () => ({
	type: CLOSE_MODAL_DIALOG
});

const openConfirmSuccess = payload => ({
	type: OPEN_CONFIRM_SUCCESS,
	payload
});

export const openConfirm = params => (
	dispatch => (
		new Promise((res, rej) => {
			pipe({}, params, { 
				actionHandler(action) { 
					res(action);
					dispatch(closeModalDialog()); 
				} 
			})(Object.assign, openConfirmSuccess, dispatch);
		})
	)
);