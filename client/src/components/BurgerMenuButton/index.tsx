import React from 'react';
import { burgerMenuButtonsPropsType } from '../../types/menu';

const BurgerMenuButton = ({ className, clickCallback, icon, translations }: burgerMenuButtonsPropsType) => {
	return (
		<button className={className} onClick={clickCallback}>
			{icon || ''}
			{translations}
		</button>
	);
};

export default BurgerMenuButton;