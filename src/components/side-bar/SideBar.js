import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './SideBar.css';

import { locale } from '../../utils';
import { fetchCategories, removeCategory } from '../../redux/actions/categories/categories_actions';
import { openConfirm } from '../../redux/actions/modal-dialog/modal-dialog_actions';

import Logo from './logo/Logo';
import Category from './category/Category';

class SideBar extends PureComponent {
	componentDidMount = () => {
		this.props.fetchCategories();
	}

	removeCategory = ({ target: { dataset } }) => {
		const { message, header } = locale('confirm.remove_category');
		this.props.openConfirm({
			header,
			message,
			buttons: [
				{ name: locale('buttons.yes'), action: 'yes', type: 'red' },
				{ name: locale('buttons.no'), action: 'no', type: 'green' }
			]
		}).then(action => {
			if(action === 'yes') {
				this.props.removeCategory(dataset.id);
			}
		});
	}

	renderCategories = ({ name, _id }) => (
		<Category 
			name={ name }
			id={_id}
			removeCategory={ this.removeCategory } 
			key={ _id } />
	)

	render = () => (
		<aside>
			<Logo />
			<ul className="categories-container">
				{  	[
						...this.props.categories,
						{ name: '', _id: 0 } 
					].map(this.renderCategories) }
			</ul>
		</aside>
	)
}

SideBar.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	openConfirm: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = {
	fetchCategories,
	removeCategory,
	openConfirm
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar); 


