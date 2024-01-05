import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import useLanguage from '../context/language/useLanguage';

const { Header, Sider, Content } = Layout;

const Admin = () => {
	const { translate } = useLanguage();

	return (
		<Layout className={styles.adminPanelPage}>
			<Header className={styles.header}>{translate ? translate('admin.shopName') : ''}</Header>
			<Layout>
				<Sider trigger={null} className={styles.sider}>
					<Menu
						theme='light'
						mode='inline'
						defaultSelectedKeys={['1']}
						items={[
							{
								key: '1',
								icon: <UserOutlined />,
								label: 'nav 1111111111111111111111111111'
							},
							{
								key: '2',
								icon: <VideoCameraOutlined />,
								label: 'nav 2'
							},
							{
								key: '3',
								icon: <UploadOutlined />,
								label: 'nav 3'
							}
						]}
					/>
				</Sider>
				<Layout className={styles.content}>
					<Content
						style={{
							padding: 24,
							minHeight: 280,
							background: 'white'
						}}>
						Content
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default Admin;
