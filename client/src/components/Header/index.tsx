import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import useLanguage from '../../context/language/useLanguage';
import { OutlinedHeartIcon, LocationIcon, ProfileIcon, ShoppingCartIcon } from '../../assets/icons/Icons';
import { Button, Dropdown, Space } from 'antd';
import type {MenuProps} from 'antd';
import { EN, RU } from '../../constants';

const items: MenuProps['items'] = [
	{ key: RU, label: 'Русский' },
	{ key: EN, label: 'Английский' }
];

function Header() {

	const { currentLanguage, setCurrentLanguage, translate } = useLanguage();

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		setCurrentLanguage && setCurrentLanguage(e.key);
	};

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<div className={styles.header}>
			<div className={styles.info}>
				<div className={styles.stocks}>{translate && translate('header.stocks')}</div>
				<div className={styles.paymentAndDelivery}>{translate && translate('header.paymentAndDelivery')}</div>
				<div className={styles.logo}><img src={logo} alt='logo' /></div>
				<div className={styles.address}>
					<LocationIcon style={{fontSize: '30px'}} />
					{translate && translate('header.address')}
				</div>
				<div className={styles.userButtons}>
					<Dropdown menu={menuProps} className={styles.languageMenu}>
						<Button>
							<Space>
								{currentLanguage}
							</Space>
						</Button>
					</Dropdown>
					<div className={styles.liked}><OutlinedHeartIcon /></div>
					<div className={styles.profile}><ProfileIcon /></div>
					<div className={styles.shoppingCart}><ShoppingCartIcon /></div>
				</div>
			</div>
			<div className={styles.menu}></div>
		</div>
	);
}

export default Header;
