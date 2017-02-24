import React from 'react';
import './ModalDialog.css';

import Confirm from './confirm/Confirm';

const ModalDialog = (props) => {
	return (
		<div className="modal-dialog">
			<Confirm />
		</div>
	);
}

export default ModalDialog;