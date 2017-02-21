import React from 'react';
import './ModalDialog.css';

import Confirm from './confirm/Confirm';

const ModalDialog = (props) => {
	return (
		<div className="modal-dialog open">
			<Confirm />
		</div>
	);
}

export default ModalDialog;