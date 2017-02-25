import { CLOSE_MODAL_DIALOG, OPEN_MODAL_SUCCESS, INVALID_MODAL_DATA } from '../../constants/modal-dialog_constants';
import { pipe } from '../../../utils';

const showModalErrors = errMessages => ({
	type: INVALID_MODAL_DATA,
	errMessages
});

const closeModalDialog = () => ({
	type: CLOSE_MODAL_DIALOG
});

const openModalSuccess = payload => ({
	type: OPEN_MODAL_SUCCESS,
	payload
});

export const openModal = (params, validator) => (
	dispatch => (
		new Promise(res => {
			pipe({}, params, {
				actionHandler(action, data) {
					if(!validator) {
						res(action);
						dispatch(closeModalDialog());
					} else {
						const errMessages = validator(action, data);
						if(errMessages) {
							dispatch(showModalErrors(errMessages));
						} else {
							res(data);
							dispatch(closeModalDialog());
						}
					}
				}
			})(Object.assign, openModalSuccess, dispatch);
		})
	)
);
