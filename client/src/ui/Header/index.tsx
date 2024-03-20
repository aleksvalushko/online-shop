import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';
import {
	ADMIN,
	ADMIN_ROUTE,
	CATALOG_ROUTE,
	FAVORITES_ROUTE,
	MAIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
	SHOPPING_CART_ROUTE,
	STOCKS_ROUTE
} from '../../constants';
import { MenuOutlined } from '@ant-design/icons';
import Menu from '../Menu';
import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/images/logo.png';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import useLanguage from '../../context/language/useLanguage';

const Header = () => {
	const [isBurgerMenuShown, setIsBurgerMenuShown] = useState<boolean>(false);
	const { currentLanguage, translate, menuProps } = useLanguage();
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
				!user.isAuth ? navigate(REGISTRATION_ROUTE, { state: { from: FAVORITES_ROUTE } }) : navigate(FAVORITES_ROUTE);
				return;
			}
			case PROFILE_ROUTE: {
				!user.isAuth
					? navigate(REGISTRATION_ROUTE, { state: { from: PROFILE_ROUTE } })
					: user.role === ADMIN
					? navigate(ADMIN_ROUTE, { state: { from: ADMIN_ROUTE } })
					: navigate(PROFILE_ROUTE, { state: { from: PROFILE_ROUTE } });
				return;
			}
			case SHOPPING_CART_ROUTE: {
				!user.isAuth
					? navigate(REGISTRATION_ROUTE, { state: { from: SHOPPING_CART_ROUTE } })
					: navigate(SHOPPING_CART_ROUTE);
				return;
			}
			default: {
				navigate(MAIN_ROUTE);
			}
		}
	};

	const handleBurgerMenuClick = () => {
		setIsBurgerMenuShown(!isBurgerMenuShown);
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