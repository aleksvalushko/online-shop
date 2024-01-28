import React from 'react';
import styles from './styles.module.scss';
import { OutlinedHeartIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { CATALOG_ROUTE, FAVORITES_ROUTE, PROFILE_ROUTE, SHOPPING_CART_ROUTE, STOCKS_ROUTE } from '../../constants';
import { burgerMenuPropsType } from '../../types/menu';

const BurgerMenu = ({ translate, handleBurgerMenuClick, handleNavigate }: burgerMenuPropsType) => {
	return (
		<div className={styles.burgerMenu}>
			<div>
				<button
					className={styles.profile}
					onClick={() => {
						handleNavigate(PROFILE_ROUTE);
						handleBurgerMenuClick();
					}}>
					<ProfileIcon />
					{translate && translate('header.profile')}
				</button>
			</div>
			<div>
				<button
					className={styles.favorites}
					onClick={() => {
						handleNavigate(FAVORITES_ROUTE);
						handleBurgerMenuClick();
					}}>
					<OutlinedHeartIcon />
					{translate && translate('header.favorites')}
				</button>
			</div>
			<div>
				<button
					className={styles.shoppingCart}
					onClick={() => {
						handleNavigate(SHOPPING_CART_ROUTE);
						handleBurgerMenuClick();
					}}>
					<ShoppingCartIcon />
					{translate && translate('header.shoppingCart')}
				</button>
			</div>
			<div>
				<button
					className={styles.catalog}
					onClick={() => {
						handleNavigate(CATALOG_ROUTE);
						handleBurgerMenuClick();
					}}>
					{translate && translate('header.catalog')}
				</button>
			</div>
			<div>
				<button
					className={styles.stocks}
					onClick={() => {
						handleNavigate(STOCKS_ROUTE);
						handleBurgerMenuClick();
					}}>
					{translate && translate('header.stocks')}
				</button>
			</div>
		</div>
	);
};

export default BurgerMenu;
