import React from 'react';
import { Route, Link, matchPath } from 'react-router-dom';
import $class from 'classnames';
import './Category.css';

import { locale } from '../../../utils/';

const Category = ({ name }) => {
	const to = `/${name}`;

	return (
		<Route exact path={ to } children={(props) => (
			<li className={ $class('category', { active: props.match }) } title={ name }>
				<Link to={ to }>
					<i className="fa fa-times" />
					<span className="category-name">{ name || locale('categories.default') }</span>
				</Link>
			</li>
		)}/>
	);
}

export default Category;