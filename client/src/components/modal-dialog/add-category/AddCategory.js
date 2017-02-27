import React, { PropTypes, PureComponent } from 'react';
import $class from 'classnames';
import './AddCategory.css';

import { BUTTON_KEYS } from '../../../environment/app_environment';

import ModalHeader from '../modal-header/ModalHeader';
import ModalFooter from '../modal-footer/ModalFooter';

class AddCategory extends PureComponent {
	state = {
		value: ''
	}

	componentDidMount = () => {
		this.input.focus();
	}

	keyHandler = ({ keyCode }) => {
		if(keyCode === BUTTON_KEYS.ENTER) {
			this.props.actionHandler('enter', this.state.value);
		}
	}

	clickHandler = action => {
		this.props.actionHandler(action, this.state.value);
	}

	changeHandler = ({ target: { value } }) => {
		this.setState({ value });
	}

	render = () => (
		<div className="add-category">
			<ModalHeader text={this.props.header} clickHandler={this.clickHandler}/>
			<main className="add-category-main">
				<input
					type="text"
					ref={ref => (this.input = ref)}
					value={this.state.value}
					placeholder={this.props.placeholder}
					onKeyDown={this.keyHandler}
					onChange={this.changeHandler}/>
				<span className={$class('error', { visible: this.props.err })}>{this.props.err}</span>
			</main>
			<ModalFooter buttons={this.props.buttons} clickHandler={this.clickHandler}/>
		</div>
	)
}

AddCategory.propTypes = {
	header: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	actionHandler: PropTypes.func.isRequired,
	err: PropTypes.string.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default AddCategory;
