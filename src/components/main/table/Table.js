import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import $class from 'classnames';
import './Table.css';

import { locale } from '../../../utils/';
import { fetchProducts } from '../../../redux/actions/products/products_actions';

import Button from '../../share/button/Button';

class Table extends PureComponent {
	componentDidMount = () => {
		this.props.fetchProducts();
	}

	renderRows = ({ _id, name, purchasePrice, sellPrice }, index) => (
		<section className={ $class('row', `row-${index}`) } key={ _id }>
			<div className="id-column cell">{ index + 1 }</div>
			<div className="name-column cell">{ name }</div>
			<div className="purchase-price-column cell">{ purchasePrice }</div>
			<div className="sell-price-column cell">{ sellPrice }</div>
			<div className="controller-part">
				<Button name={locale('buttons.delete')} type="red"/>
				<Button name={locale('buttons.modify')} type="blue"/>
			</div>
		</section>
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
	fetchProducts: PropTypes.func.isRequired
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { fetchProducts })(Table);