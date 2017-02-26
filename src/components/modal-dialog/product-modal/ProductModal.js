import React, { PropTypes, PureComponent } from 'react';
import $class from 'classnames';
import './ProductModal.css';

import ModalHeader from '../modal-header/ModalHeader';
import ModalFooter from '../modal-footer/ModalFooter';

class ProductModal extends PureComponent {
	state = {
		category: this.props.category || '',
		name: this.props.name || '',
		purchasePrice: this.props.purchasePrice || '',
		sellPrice: this.props.sellPrice || ''
	}

	clickHandler = action => {
		this.props.actionHandler(action, this.state);
	}

	changeHandler = ({ target: { dataset, value } }) => {
		this.setState({
			[dataset.paramKey]: value
		});
	}

	renderDropDown = ({ name, _id }, index) => (
		<option value={_id} key={index}>{name}</option>
	)

	render = () => (
		<div className="product-modal">
			<ModalHeader text={this.props.header} clickHandler={this.clickHandler}/>
			<main className="product-modal-add">
				<select
					name="select"
					value={this.state.category}
					data-param-key="category"
					onChange={this.changeHandler}>
					{this.props.categories.map(this.renderDropDown)}
				</select>
				<span className={$class('drop-down-error err', { visible: this.props.err.categories })}>
					{this.props.err.categories}
				</span>
				<input
					type="text"
					value={this.state.name}
					data-param-key="name"
					placeholder={this.props.namePlaceholder}
					onChange={this.changeHandler}/>
				<span className={$class('name-error err', { visible: this.props.err.name })}>
					{this.props.err.name}
				</span>
				<input
					type="number"
					value={this.state.purchasePrice}
					data-param-key="purchasePrice"
					placeholder={this.props.purchasePlaceholder}
					min="0"
					onChange={this.changeHandler}/>
				<span className={$class('purchase-error err', { visible: this.props.err.purchase })}>
					{this.props.err.purchase}
				</span>
				<input
					type="number"
					value={this.state.sellPrice}
					data-param-key="sellPrice"
					placeholder={this.props.sellPlaceholder}
					min="0"
					onChange={this.changeHandler}/>
				<span className={$class('sell-error err', { visible: this.props.err.sell })}>
					{this.props.err.sell}
				</span>
			</main>
			<ModalFooter buttons={this.props.buttons} clickHandler={this.clickHandler}/>
		</div>
	)
}

ProductModal.propTypes = {
	header: PropTypes.string.isRequired,
	actionHandler: PropTypes.func.isRequired,
	buttons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired).isRequired,
    categories: PropTypes.array.isRequired,
    err: PropTypes.object.isRequired,
    namePlaceholder: PropTypes.string.isRequired,
    purchasePlaceholder: PropTypes.string.isRequired,
    sellPlaceholder: PropTypes.string.isRequired,
    category: PropTypes.string,
    name: PropTypes.string,
    purchasePrice: PropTypes.number,
    sellPrice: PropTypes.number
};

export default ProductModal;
