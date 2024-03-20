// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Menu, MenuProps } from 'antd';
import React from 'react';

// type MenuItem = Required<MenuProps>['items'][number];
//
// function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, type?: 'group'): MenuItem {
// 	return {
// 		key,
// 		icon,
// 		label,
// 		type
// 	} as MenuItem;
// }
//
// const items: MenuProps['items'] = [
// 	getItem('Navigation One', 'sub1', <MailOutlined />),
//
// 	getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
//
// 	getItem('Navigation Three', 'sub4', <SettingOutlined />)
// ];

const ProfilePage = () => {
	// const onClick: MenuProps['onClick'] = (e) => {
	// 	console.log('click ', e);
	// };

	return (
		<div>
			Profile Page
			{/*<Menu*/}
			{/*	onClick={onClick}*/}
			{/*	style={{ width: 256 }}*/}
			{/*	defaultSelectedKeys={['1']}*/}
			{/*	defaultOpenKeys={['sub1']}*/}
			{/*	mode='inline'*/}
			{/*	items={items}*/}
			{/*/>*/}
		</div>
	);
};

export default ProfilePage;