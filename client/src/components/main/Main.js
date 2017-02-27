import React from 'react';
import './Main.css';

import ControllerPanel from './controller-panel/ControllerPanel';
import Table from './table/Table';

const Main = ({ match: { params } }) => {
	return (
		<main>
			<ControllerPanel />
			<Table filterParams={params}/>
		</main>
	);
};

export default Main;
