import React from 'react';
import styles from './styles.module.scss';
import { OutlinedHeartIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { CATALOG_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, SHOPPING_CART_ROUTE, STOCKS_ROUTE } from '../../constants';
import { NavLink } from 'react-router-dom';
import { burgerMenuPropsType } from '../../types/menu';

const BurgerMenu = ({ translate, handleBurgerMenuClick }: burgerMenuPropsType) => {
	return (
		<div className={styles.burgerMenu}>
			<div>
				<NavLink className={styles.profile} to={LOGIN_ROUTE} onClick={handleBurgerMenuClick}>
					<ProfileIcon />
					{translate && translate('header.logIn')}
				</NavLink>
			</div>
			<div>
				<NavLink className={styles.favorites} to={FAVORITES_ROUTE} onClick={handleBurgerMenuClick}>
					<OutlinedHeartIcon />
					{translate ? translate('header.favorites') : ''}
				</NavLink>
			</div>
			<div>
				<NavLink className={styles.shoppingCart} to={SHOPPING_CART_ROUTE} onClick={handleBurgerMenuClick}>
					<ShoppingCartIcon />
					{translate ? translate('header.shoppingCart') : ''}
				</NavLink>
			</div>
			<div>
				<NavLink className={styles.catalog} to={CATALOG_ROUTE} onClick={handleBurgerMenuClick}>
					{translate && translate('header.catalog')}
				</NavLink>
			</div>
			<div>
				<NavLink className={styles.stocks} to={STOCKS_ROUTE} onClick={handleBurgerMenuClick}>
					{translate && translate('header.stocks')}
				</NavLink>
			</div>
		</div>
	);
};

export default BurgerMenu;
