import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

import { fetchCategories } from '../../redux/actions/categories/categories_actions';

import ControllerPanel from './controller-panel/ControllerPanel';
import Table from './table/Table'

class Main extends Component {
	componentDidMount = () => {
		this.props.fetchCategories();
	}

	componentWillRecieveProps = () => {

	}

	render = () => (
		<main>
			<ControllerPanel />
			<Table />
		</main>
	)
}

Main.propTypes = {
	fetchCategories: PropTypes.func.isRequired
}

export default connect(null, { fetchCategories })(Main);