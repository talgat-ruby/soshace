import React, { PropTypes } from 'react';
import $class from 'classnames';
import './TableRow.css';

import { locale } from '../../../../utils';
import { BUTTON_TYPES } from '../../../../environment/app_environment';

import Button from '../../../share/button/Button';

const TableRow = ({ name, purchasePrice, sellPrice, index }) => {
	return (
		<section className={ $class('row', `row-${index}`) }>
			<div className="id-column cell">{ index + 1 }</div>
			<div className="name-column cell">{ name }</div>
			<div className="purchase-price-column cell">{ purchasePrice }</div>
			<div className="sell-price-column cell">{ sellPrice }</div>
			<div className="controller-part">
				<Button name={locale('buttons.delete')} type={BUTTON_TYPES.RED}/>
				<Button name={locale('buttons.modify')} type={BUTTON_TYPES.BLUE}/>
			</div>
		</section>
	);
};

TableRow.propTypes = {
	name: PropTypes.string.isRequired,
	purchasePrice: PropTypes.number.isRequired,
	sellPrice: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired
}

export default TableRow;