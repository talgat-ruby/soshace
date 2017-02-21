import React from 'react';
import './Confirm.css';

import ModalHeader from '../modal-header/ModalHeader';
import ModalFooter from '../modal-footer/ModalFooter';

const Confirm = (props) => {
	return (
		<div className="confirm">
			<ModalHeader />
			<main className="confirm-main">
				<p>You have not saved changes. Not saved changes will be lost. Do you want to proceed?</p>
			</main>
			<ModalFooter />
		</div>
	);
}

export default Confirm;