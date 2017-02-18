import React from 'react';
import './SideBar.css';

import Logo from './logo/Logo';
import Categories from './categories/Categories';

const SideBar = () => {
	return (
		<aside>
			<Logo />
			<Categories />
		</aside>
	);
}

export default SideBar; 