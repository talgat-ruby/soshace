import React from 'react';
import './ModalHeader.css';

const ModalHeader = (props) => {
	return (
		<header className="modal-header">
			<span>Header text</span>
			<i className="fa fa-times" />
		</header>
	);
}

export default ModalHeader;