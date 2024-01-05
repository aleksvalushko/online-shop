import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import { OutlinedHeartIcon, LocationIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { Badge, Dropdown, Popover, Space } from 'antd';
import {
	CATALOG_ROUTE,
	FAVORITES_ROUTE,
	MAIN_ROUTE,
	PROFILE_ROUTE,
	SHOPPING_CART_ROUTE,
	STOCKS_ROUTE
} from '../../constants';
import { menuPropsType } from '../../types/menu';

const Menu = ({ menuProps, currentLanguage, translate, handleNavigate }: menuPropsType) => {
	return (
		<>
			<button className={styles.catalog} onClick={() => handleNavigate(CATALOG_ROUTE)}>
				{translate && translate('header.catalog')}
			</button>
			<button className={styles.stocks} onClick={() => handleNavigate(STOCKS_ROUTE)}>
				{translate && translate('header.stocks')}
			</button>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>
			<button className={styles.address} onClick={() => handleNavigate(MAIN_ROUTE)}>
				<Popover
					content={
						<button className={styles.addressPopover}>{translate && translate('header.address_tooltip')}</button>
					}>
					<LocationIcon style={{ fontSize: '25px', marginRight: '5px' }} />
					{translate ? translate('header.address') : ''}
				</Popover>
			</button>
			<div className={styles.userButtons}>
				<Dropdown menu={menuProps} className={styles.languageMenu}>
					<button>
						<Space>{currentLanguage}</Space>
					</button>
				</Dropdown>
				<button className={styles.favorites} onClick={() => handleNavigate(FAVORITES_ROUTE)}>
					<OutlinedHeartIcon />
				</button>
				<button className={styles.profile} onClick={() => handleNavigate(PROFILE_ROUTE)}>
					<ProfileIcon />
				</button>
				<button className={styles.shoppingCart} onClick={() => handleNavigate(SHOPPING_CART_ROUTE)}>
					<Badge count={1} overflowCount={10}>
						<ShoppingCartIcon />
					</Badge>
				</button>
			</div>
		</>
	);
};

export default Menu;
