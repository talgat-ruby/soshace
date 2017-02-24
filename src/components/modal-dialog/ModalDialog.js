import React from 'react';
import { connect } from 'react-redux';
import $class from 'classnames';
import './ModalDialog.css';

import { MODAL_DIALOG_TYPES } from '../../environment/modal-dialog_environment';

import Confirm from './confirm/Confirm';

const ModalDialog = (props) => {
	const renderChild = type => {
		switch(type) {
			case MODAL_DIALOG_TYPES.CONFIRM:
				return <Confirm { ...props }/>
			default:
				return null;
		}
	} 

	return (
		<div className={$class('modal-dialog', { open: !!props.type })}>
			{renderChild(props.type)}
		</div>
	);
}

const mapStateToProps = ({ modalDialog }) => ({ ...modalDialog });

export default connect(mapStateToProps)(ModalDialog);