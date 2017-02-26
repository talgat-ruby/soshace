import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './Table.css';

import { locale } from '../../../utils/';
import { fetchProducts, removeProduct, modifyProduct } from '../../../redux/actions/products/products_actions';
import { openModal } from '../../../redux/actions/modal-dialog/modal-dialog_actions';
import { TEMPLATES } from '../../../environment/modal-dialog_environment';

import TableRow from './table-row/TableRow';

class Table extends PureComponent {
	componentDidMount = () => {
		this.props.fetchProducts();
	}

	removeProduct = (id, name) => {
		const { header, message } = locale('modal.remove_product');
		this.props.openModal({
			template: TEMPLATES.CONFIRM,
			header,
			message: message + name,
			buttons: [
				{ name: locale('buttons.yes'), action: 'yes', type: 'red' },
				{ name: locale('buttons.no'), action: 'no', type: 'green' }
			]
		}).then(action => {
			if(action === 'yes') {
				this.props.removeProduct(id);
			}
		});
	}

	addProductValidator = (action, { name, purchasePrice, sellPrice }) => {
		const isCorrectAction = action === 'save';
		const err = {};
		if(isCorrectAction) {
			if(!name) {
				Object.assign(err, {
					name: `${locale(
						'modal.add-modify_product.name_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			}

			if(!purchasePrice) {
				Object.assign(err, {
					purchase: `${locale(
						'modal.add-modify_product.purchase_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			}

			if(!sellPrice) {
				Object.assign(err, {
					sell: `${locale(
						'modal.add-modify_product.sell_placeholder'
					)} ${locale(
						'modal.add-modify_product.err_empty'
					)}`
				});
			}

			return (Object.keys(err).length > 0 ? { err } : null);
		}
	};

	modifyProduct = _id => {
		const data = this.props.products.find(product => product._id === _id);
		const {
			header,
			name_placeholder: namePlaceholder,
			purchase_placeholder: purchasePlaceholder,
			sell_placeholder: sellPlaceholder
		} = locale('modal.add-modify_product');
		this.props.openModal({
			...data,
			template: TEMPLATES.ADD_PRODUCT,
			header,
			categories: [{ name: locale('categories.default') }, ...this.props.categories],
			namePlaceholder,
			purchasePlaceholder,
			sellPlaceholder,
			err: {
				categories: '',
				name: '',
				purchase: '',
				sell: ''
			},
			buttons: [
				{ name: locale('buttons.save'), action: 'save', type: 'green' }
			]
		}, this.addProductValidator).then(({ action, data }) => {
			if(action === 'save') {
				this.props.modifyProduct(Object.assign({}, data, { _id }));
			}
		});
	}

	renderRows = (product, index) => (
		<TableRow
			{...product}
			index={index}
			removeProduct={this.removeProduct}
			modifyProduct={this.modifyProduct}
			key={product._id} />
	)

	render = () => {
		const { category: categoryFilter='' } = this.props.filterParams;
		return (
			<article className="table">
				<section className="table-header">
					<section className="row">
						<div className="id-column cell">{locale('table.id')}</div>
						<div className="name-column cell">{locale('table.product\'s_name')}</div>
						<div className="purchase-price-column cell">{locale('table.purchase_price')}</div>
						<div className="sell-price-column cell">{locale('table.sell_price')}</div>
						<div className="controller-part" />
					</section>
				</section>
				<section className="table-main">
					{
						this.props.products
							.filter(({ category }) => categoryFilter === category)
							.map(this.renderRows)
					}
				</section>
			</article>
		);
	}
}

Table.propTypes = {
	fetchProducts: PropTypes.func.isRequired,
	removeProduct: PropTypes.func.isRequired,
	modifyProduct: PropTypes.func.isRequired,
	openModal: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	filterParams: PropTypes.object.isRequired
};

const mapStateToProps = ({ products, categories }) => ({ products, categories });

const mapDispatchToProps = {
	fetchProducts,
	removeProduct,
	modifyProduct,
	openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
