import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';
import $class from 'classnames';
import './Category.css';

import { locale } from '../../../utils/';

const Category = ({ name, id, removeCategory }) => {
	const to = `/${id}`;

	return (
		<Route exact path={to} children={props => (
			<li className={$class('category', { active: props.match })} title={name}>
				<Link to={to}>
					{name && <i className="fa fa-times" data-id={id} onClick={removeCategory}/>}
					<span className={$class('category-name', { default: !name })}>
						{ name || locale('categories.default') }
					</span>
				</Link>
			</li>
		)}/>
	);
};

Category.propTypes = {
	name: PropTypes.string.isRequired,
	removeCategory: PropTypes.func.isRequired,
	match: PropTypes.bool,
	id: PropTypes.string.isRequired
};

export default Category;
