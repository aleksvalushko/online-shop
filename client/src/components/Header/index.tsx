import React, { useState } from 'react';
import styles from './styles.module.scss';
import useLanguage from '../../context/language/useLanguage';
import { Button, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { EN, RU } from '../../constants';
import { MenuOutlined } from '@ant-design/icons';
import Menu from '../Menu';
import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/images/logo.png';

const items: MenuProps['items'] = [
	{ key: RU, label: 'Русский' },
	{ key: EN, label: 'Английский' }
];

const Header = () => {
	const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);
	const { currentLanguage, setCurrentLanguage, translate } = useLanguage();

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
					<BurgerMenu translate={translate} handleBurgerMenuClick={handleBurgerMenuClick} />
				</div>
			)}

			<div className={styles.info}>
				<Menu menuProps={menuProps} currentLanguage={currentLanguage} translate={translate} />
			</div>
		</div>
	);
};

export default Header;
