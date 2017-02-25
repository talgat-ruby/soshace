import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $class from 'classnames';
import './ModalDialog.css';

import { TEMPLATES } from '../../environment/modal-dialog_environment';

import Confirm from './confirm/Confirm';
import AddCategory from './add-category/AddCategory';

const ModalDialog = props => {
	const renderChild = template => {
		switch(template) {
			case TEMPLATES.CONFIRM:
				return <Confirm {...props}/>;
			case TEMPLATES.ADD_CATEGORY:
				return <AddCategory {...props}/>;
			default:
				return null;
		}
	};

	return (
		<div className={$class('modal-dialog', {open: Boolean(props.template)})}>
			{renderChild(props.template)}
		</div>
	);
};

ModalDialog.propTypes = {
	template: PropTypes.string
};

const mapStateToProps = ({ modalDialog }) => ({ ...modalDialog });

export default connect(mapStateToProps)(ModalDialog);
