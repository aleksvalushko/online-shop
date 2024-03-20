import React from 'react';
import styles from './styles.module.scss';
import { OutlinedHeartIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { CATALOG_ROUTE, FAVORITES_ROUTE, PROFILE_ROUTE, SHOPPING_CART_ROUTE, STOCKS_ROUTE } from '../../constants';
import { burgerMenuButtonsPropsType, burgerMenuPropsType } from '../../types/menu';
import BurgerMenuButton from '../../components/BurgerMenuButton';

const BurgerMenu = ({ translate, handleBurgerMenuClick, handleNavigate }: burgerMenuPropsType) => {
	const BUTTONS: burgerMenuButtonsPropsType[] = [
		{
			className: '',
			clickCallback: () => {
				handleNavigate(PROFILE_ROUTE);
				handleBurgerMenuClick();
			},
			icon: <ProfileIcon />,
			translations: translate && translate('header.profile')
		},
		{
			className: '',
			clickCallback: () => {
				handleNavigate(FAVORITES_ROUTE);
				handleBurgerMenuClick();
			},
			icon: <OutlinedHeartIcon />,
			translations: translate && translate('header.favorites')
		},
		{
			className: '',
			clickCallback: () => {
				handleNavigate(SHOPPING_CART_ROUTE);
				handleBurgerMenuClick();
			},
			icon: <ShoppingCartIcon />,
			translations: translate && translate('header.shoppingCart')
		},
		{
			className: styles.catalog,
			clickCallback: () => {
				handleNavigate(CATALOG_ROUTE);
				handleBurgerMenuClick();
			},
			icon: '',
			translations: translate && translate('header.catalog')
		},
		{
			className: styles.stocks,
			clickCallback: () => {
				handleNavigate(STOCKS_ROUTE);
				handleBurgerMenuClick();
			},
			icon: '',
			translations: translate && translate('header.stocks')
		}
	];

	return (
		<div className={styles.burgerMenu}>
			{BUTTONS.map((button, index) => {
				return (
					<div key={`${button.translations}_${index}`}>
						<BurgerMenuButton
							className={button.className}
							clickCallback={button.clickCallback}
							icon={button.icon}
							translations={button.translations}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default BurgerMenu;