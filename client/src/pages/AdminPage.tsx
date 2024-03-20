import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Layout, Menu, MenuProps } from 'antd';
import { ArrowLeftOutlined, LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import useLanguage from '../context/language/useLanguage';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../constants';
import ChangeLanguageDropdown from '../components/ChangeLanguageDropdown';

type MenuItemType = {
	key: string;
	icon: ReactNode;
	label: ReactNode;
};

const { Header, Sider, Content } = Layout;

const AdminPage = () => {
	const navigate = useNavigate();
	const [chosenItem, setChosenItem] = useState<MenuItemType>({
		key: '',
		icon: '',
		label: ''
	});
	const { currentLanguage, translate, menuProps } = useLanguage();
	const MENU_ITEMS: Array<MenuItemType> = [
		{
			key: '1',
			icon: <PlusCircleOutlined />,
			label: translate ? translate('admin.createTypeButton') : 'Create Type'
		},
		{
			key: '2',
			icon: <PlusCircleOutlined />,
			label: translate ? translate('admin.createBrandButton') : 'Create Brand'
		},
		{
			key: '3',
			icon: <PlusCircleOutlined />,
			label: translate ? translate('admin.createProductButton') : 'Create Product'
		}
	];

	const chooseItem: MenuProps['onClick'] = (value) => {
		const item = MENU_ITEMS.find((elem) => elem.key === value.key);
		if (!item) return;
		setChosenItem(item);
	};

	const backToMainPage = () => navigate(MAIN_ROUTE);
	const logOut = () => {
		navigate(MAIN_ROUTE);
	};

	useEffect(() => {
		setChosenItem(MENU_ITEMS[0]);
	}, []);

	return (
		<Layout className={styles.adminPage}>
			<Header className={styles.headerWrapper}>
				<div className={styles.header}>{translate ? translate('admin.shopName') : ''}</div>
				<ChangeLanguageDropdown menuProps={menuProps} currentLanguage={currentLanguage} />
			</Header>
			<Layout className={styles.siderAndContentWrapper}>
				<Sider trigger={null} className={styles.sider} width='15%'>
					<Menu theme='light' mode='inline' defaultSelectedKeys={['1']} onClick={chooseItem} items={MENU_ITEMS} />
					<div>
						<Button type='text' onClick={backToMainPage} icon={<ArrowLeftOutlined />}>
							{translate ? translate('admin.backToMainPageButton') : ''}
						</Button>
						<Button type='text' onClick={logOut} icon={<LogoutOutlined />}>
							{translate ? translate('admin.logOutButton') : ''}
						</Button>
					</div>
				</Sider>
				<Layout className={styles.content}>
					<Content
						style={{
							padding: 24,
							minHeight: 280,
							background: 'white'
						}}>
						<div>{chosenItem.label}</div>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AdminPage;