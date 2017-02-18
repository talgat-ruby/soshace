import React from 'react';
import { Route, Link } from 'react-router-dom';
import $class from 'classnames';
import './Category.css';

const Category = ({ name }) => {
	const to = `/${name}`;

	return (
		<Route path={ to } children={({ match }) => (
			<li className={ $class('category', { active: match }) }>
				<Link to={ to }>
					<i className="fa fa-times" />
					<span className="category-name">{ name }</span>
				</Link>
			</li>
		)}/>
	);
}

export default Category;