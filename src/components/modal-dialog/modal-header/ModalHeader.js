import React, { PropTypes } from 'react';
import './ModalHeader.css';

const ModalHeader = ({ text, clickHandler }) => {
	return (
		<header className="modal-header">
			<span>{text}</span>
			<i className="fa fa-times" onClick={clickHandler}/>
		</header>
	);
}

ModalHeader.propTypes = {
	text: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired
};

export default ModalHeader;