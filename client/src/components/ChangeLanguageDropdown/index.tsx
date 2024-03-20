import React from 'react';
import styles from './styles.module.scss';
import { Dropdown, Space } from 'antd';
import { ChangeLanguageDropdownTypes } from '../../types/language';

const ChangeLanguageDropdown = ({ menuProps, currentLanguage }: ChangeLanguageDropdownTypes) => {
	return (
		<Dropdown menu={menuProps} className={styles.languageMenu} placement={'bottomRight'}>
			<Space>{currentLanguage}</Space>
		</Dropdown>
	);
};

export default ChangeLanguageDropdown;