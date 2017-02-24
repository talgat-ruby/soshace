import React from 'react';
import { Route, Link } from 'react-router-dom';
import $class from 'classnames';
import './Category.css';

import { locale } from '../../../utils/';

const Category = ({ name }) => {
	const to = `/${name}`;

	return (
		<Route exact path={ to } children={(props) => (
			<li className={ $class('category', { active: props.match }) } title={ name }>
				<Link to={ to }>
					{name && <i className="fa fa-times" />}
					<span className={$class('category-name', { default: !name })}>{ name || locale('categories.default') }</span>
				</Link>
			</li>
		)}/>
	);
}

export default Category;