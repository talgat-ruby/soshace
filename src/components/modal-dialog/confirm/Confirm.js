import React, { PropTypes } from 'react';
import './Confirm.css';

import ModalHeader from '../modal-header/ModalHeader';
import ModalFooter from '../modal-footer/ModalFooter';

const Confirm = ({ header, message, buttons, actionHandler }) => {
	const clickHandler = action => {
		actionHandler(action)
	} 

	return (
		<div className="confirm">
			<ModalHeader text={header} clickHandler={clickHandler}/>
			<main className="confirm-main">
				<p>{message}</p>
			</main>
			<ModalFooter buttons={buttons} clickHandler={clickHandler}/>
		</div>
	);
}

Confirm.propTypes = {
	header: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	actionHandler: PropTypes.func.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		action: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default Confirm;