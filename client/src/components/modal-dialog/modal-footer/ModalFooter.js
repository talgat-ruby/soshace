import React, { PropTypes } from 'react';
import './ModalFooter.css';

import Button from '../../share/button/Button';

const ModalFooter = ({ buttons, clickHandler }) => {
	const renderButtons = ({ name, type, action }) => (
		<Button 
			name={name} 
			type={type}
			clickHandler={() => clickHandler(action)}
			key={name}/>
	);

	return (
		<div className="modal-footer">
			{buttons.map(renderButtons)}
		</div>
	);
}

ModalFooter.propTypes = {
	clickHandler: PropTypes.func.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default ModalFooter;