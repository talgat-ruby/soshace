import React from 'react';
import $class from 'classnames';
import './Table.css';

import Button from '../../share/button/Button';

const testData = [{
	id: 1,
	name: 'Product1ewwwwwwww',
	purchasePrice: 2000,
	sellPrice: 2500
}, {
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000
},{
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000
},{
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000
}];

const Table = () => {
	const renderRows = ({ id, name, purchasePrice, sellPrice }, index) => (
		<section className={ $class('row', `row-${index}`) } key={ index }>
			<div className="id-column cell">{ id }</div>
			<div className="name-column cell">{ name }</div>
			<div className="purchase-price-column cell">{ purchasePrice }</div>
			<div className="sell-price-column cell">{ sellPrice }</div>
			<div className="controller-part">
				<Button name="Delete" type="red"/>
				<Button name="Change" type="blue"/>
			</div>
		</section>
	);

	return (
		<article className="table">
			<section className="table-header">
				<section className="row">
					<div className="id-column cell">ID</div>
					<div className="name-column cell">products name</div>
					<div className="purchase-price-column cell">Purchase price</div>
					<div className="sell-price-column cell">Sell price</div>
					<div className="controller-part" />
				</section>
			</section>
			<section className="table-main">
				{ testData.map(renderRows) }
			</section>
		</article>
	);
};

export default Table;