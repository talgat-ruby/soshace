import React, { PropTypes } from 'react';
import $class from 'classnames';
import './Button.css';

const Button = ({ name, type, clickHandler }) => {
	return (
		<a className={$class('button', type)} onClick={clickHandler}>
			{name}
		</a>
	);
};

Button.PropTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	clickHandler: PropTypes.string.isRequired
};

export default Button;