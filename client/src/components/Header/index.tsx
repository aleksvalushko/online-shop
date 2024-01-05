import React, { useState } from 'react';
import styles from './styles.module.scss';
import useLanguage from '../../context/language/useLanguage';
import { Button, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import {
	CATALOG_ROUTE,
	EN,
	FAVORITES_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	PROFILE_ROUTE,
	RU,
	SHOPPING_CART_ROUTE,
	STOCKS_ROUTE
} from '../../constants';
import { MenuOutlined } from '@ant-design/icons';
import Menu from '../Menu';
import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/images/logo.png';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
	{ key: RU, label: 'Русский' },
	{ key: EN, label: 'Английский' }
];

const Header = () => {
	const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);
	const { currentLanguage, setCurrentLanguage, translate } = useLanguage();
	const { user } = useAppSelector((state) => state.userReducer);
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		switch (path) {
			case CATALOG_ROUTE: {
				navigate(CATALOG_ROUTE);
				return;
			}
			case STOCKS_ROUTE: {
				navigate(STOCKS_ROUTE);
				return;
			}
			case FAVORITES_ROUTE: {
				!user.isAuth ? navigate(LOGIN_ROUTE) : navigate(FAVORITES_ROUTE);
				return;
			}
			case PROFILE_ROUTE: {
				!user.isAuth ? navigate(LOGIN_ROUTE) : navigate(PROFILE_ROUTE);
				return;
			}
			case SHOPPING_CART_ROUTE: {
				!user.isAuth ? navigate(LOGIN_ROUTE) : navigate(SHOPPING_CART_ROUTE);
				return;
			}
			default: {
				navigate(MAIN_ROUTE);
			}
		}
	};

	const handleLanguageMenuClick: MenuProps['onClick'] = (e) => {
		setCurrentLanguage && setCurrentLanguage(e.key);
	};
	const handleBurgerMenuClick = () => {
		setIsBurgerMenuShown(!isBurgerMenuShown);
	};

	const menuProps = {
		items,
		onClick: handleLanguageMenuClick
	};

	return (
		<div className={styles.header}>
			<div className={styles.burgerMenuButtonWrapper}>
				<Button
					icon={<MenuOutlined />}
					size='large'
					className={styles.burgerMenuButton}
					onClick={handleBurgerMenuClick}></Button>
			</div>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>
			<Dropdown menu={menuProps} className={styles.languageMenu} placement={'bottomRight'}>
				<Button>
					<Space>{currentLanguage}</Space>
				</Button>
			</Dropdown>

			{isBurgerMenuShown && (
				<div className={styles.burgerMenuWrapper}>
					<BurgerMenu
						translate={translate}
						handleBurgerMenuClick={handleBurgerMenuClick}
						handleNavigate={handleNavigate}
					/>
				</div>
			)}

			<div className={styles.info}>
				<Menu
					menuProps={menuProps}
					currentLanguage={currentLanguage}
					translate={translate}
					handleNavigate={handleNavigate}
				/>
			</div>
		</div>
	);
};

export default Header;
