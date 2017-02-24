import React from 'react';
import $class from 'classnames';
import './Table.css';

import { locale } from '../../../utils/';

import Button from '../../share/button/Button';

const testData = [{
	id: 1,
	name: 'Product1ewwwwwwww',
	purchasePrice: 2000,
	sellPrice: 2500,
	category: 'Category 1'
}, {
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700,
	category: 'Category 2'
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 1'
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 3'
},{
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700,
	category: 'Category 4'
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 1'
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 2'
},{
	id: 2,
	name: 'Product2',
	purchasePrice: 2200,
	sellPrice: 2700,
	category: 'Category 3'
},{
	id: 3,
	name: 'Product3',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 4'
},{
	id: 1,
	name: 'Product1',
	purchasePrice: 2200,
	sellPrice: 3000,
	category: 'Category 3'
}];

const Table = () => {
	const renderRows = ({ id, name, purchasePrice, sellPrice }, index) => (
		<section className={ $class('row', `row-${index}`) } key={ index }>
			<div className="id-column cell">{ id }</div>
			<div className="name-column cell">{ name }</div>
			<div className="purchase-price-column cell">{ purchasePrice }</div>
			<div className="sell-price-column cell">{ sellPrice }</div>
			<div className="controller-part">
				<Button name={locale('buttons.delete')} type="red"/>
				<Button name={locale('buttons.modify')} type="blue"/>
			</div>
		</section>
	);

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
				{ testData.map(renderRows) }
			</section>
		</article>
	);
};

export default Table;