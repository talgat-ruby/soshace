import React from 'react';
import './Main.css';

import ControllerPanel from './controller-panel/ControllerPanel';
import Table from './table/Table';

const Main = () => {
	return (
		<main>
			<ControllerPanel />
			<Table />
		</main>
	);
}

export default Main;