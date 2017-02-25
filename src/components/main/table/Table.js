import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import './Table.css';

import { locale } from '../../../utils/';
import { fetchProducts, removeProduct } from '../../../redux/actions/products/products_actions';
import { openConfirm } from '../../../redux/actions/modal-dialog/modal-dialog_actions';

import TableRow from './table-row/TableRow';

class Table extends PureComponent {
	componentDidMount = () => {
		this.props.fetchProducts();
	}

	removeProduct = (id, name) => {
		const { header, message } = locale('confirm.remove_product');
		this.props.openConfirm({
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

	renderRows = (product, index) => (
		<TableRow 
			{ ...product } 
			index={ index }
			removeProduct={this.removeProduct}
			key={ product._id } />
	)

	render = () => (
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
				{ this.props.products.map(this.renderRows) }
			</section>
		</article>
	)
}

Table.propTypes = {
	fetchProducts: PropTypes.func.isRequired,
	removeProduct: PropTypes.func.isRequired,
	openConfirm: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired
}

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = {
	fetchProducts,
	removeProduct,
	openConfirm
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);