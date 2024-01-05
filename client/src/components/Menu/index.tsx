import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import { OutlinedHeartIcon, LocationIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { Badge, Button, Dropdown, Popover, Space } from 'antd';
import { CATALOG_ROUTE, FAVORITES_ROUTE, PROFILE_ROUTE, SHOPPING_CART_ROUTE, STOCKS_ROUTE } from '../../constants';
import { NavLink } from 'react-router-dom';
import { menuPropsType } from '../../types/menu';

const Menu = ({ menuProps, currentLanguage, translate }: menuPropsType) => {
	return (
		<>
			<NavLink className={styles.catalog} to={CATALOG_ROUTE}>
				{translate && translate('header.catalog')}
			</NavLink>
			<NavLink className={styles.stocks} to={STOCKS_ROUTE}>
				{translate && translate('header.stocks')}
			</NavLink>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>
			<NavLink className={styles.address} to={'/'}>
				<Popover content={translate && translate('header.address_tooltip')}>
					<LocationIcon style={{ fontSize: '30px' }} />
					{translate ? translate('header.address') : ''}
				</Popover>
			</NavLink>
			<div className={styles.userButtons}>
				<Dropdown menu={menuProps} className={styles.languageMenu}>
					<Button>
						<Space>{currentLanguage}</Space>
					</Button>
				</Dropdown>
				<NavLink className={styles.favorites} to={FAVORITES_ROUTE}>
					<OutlinedHeartIcon />
				</NavLink>
				<NavLink className={styles.profile} to={PROFILE_ROUTE}>
					<ProfileIcon />
				</NavLink>
				<NavLink className={styles.shoppingCart} to={SHOPPING_CART_ROUTE}>
					<Badge count={1} overflowCount={10}>
						<ShoppingCartIcon />
					</Badge>
				</NavLink>
			</div>
		</>
	);
};

export default Menu;
