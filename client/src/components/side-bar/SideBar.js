import React, { PropTypes, PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './SideBar.css';

import { locale } from '../../utils';
import { fetchCategories, removeCategory } from '../../redux/actions/categories/categories_actions';
import { openModal } from '../../redux/actions/modal-dialog/modal-dialog_actions';
import { TEMPLATES } from '../../environment/modal-dialog_environment';

import Logo from './logo/Logo';
import Category from './category/Category';

class SideBar extends PureComponent {
	state = {
		redirect: false
	}

	componentDidMount = () => {
		this.props.fetchCategories();
	}

	removeCategory = ({ target: { dataset } }) => {
		const { message, header } = locale('modal.remove_category');
		this.props.openModal({
			template: TEMPLATES.CONFIRM,
			header,
			message,
			buttons: [
				{ name: locale('buttons.yes'), action: 'yes', type: 'red' },
				{ name: locale('buttons.no'), action: 'no', type: 'green' }
			]
		}).then(action => {
			if(action === 'yes') {
				this.props.removeCategory(dataset.id);
				this.setState({ redirect: true });
			}
		});
	}

	renderCategories = ({ name, _id }) => (
		<Category
			name={name}
			id={_id}
			removeCategory={this.removeCategory}
			key={_id} />
	)

	render = () => (
			this.state.redirect ? <Redirect push to="/"/>
			: (<aside>
				<Logo />
				<ul className="categories-container">
					{  	[
							...this.props.categories,
							{ name: '', _id: '' }
						].map(this.renderCategories) }
				</ul>
			</aside>)
	)
}

SideBar.propTypes = {
	fetchCategories: PropTypes.func.isRequired,
	removeCategory: PropTypes.func.isRequired,
	openModal: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = {
	fetchCategories,
	removeCategory,
	openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);


