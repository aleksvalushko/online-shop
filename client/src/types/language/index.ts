import { Dispatch } from 'react';
import { MenuProps } from 'antd';

type HeaderType = {
	stocks: string;
	catalog: string;
	address: string;
};

type LanguageType = {
	header: HeaderType;
};

export type LanguageMenuTypes = {
	items: MenuProps['items'];
	onClick: MenuProps['onClick'];
};

export type LanguageDataType = {
	currentLanguage: string;
	setCurrentLanguage: Dispatch<string>;
	translate: (path: string) => string;
	menuProps: LanguageMenuTypes | undefined;
};

export type LanguagesTypes = {
	ru: LanguageType;
	en: LanguageType;
};

export type ChangeLanguageDropdownTypes = {
	menuProps: LanguageMenuTypes | undefined;
	currentLanguage: string | undefined;
};

export type CurrentLanguageType = {
	currentLanguage: string;
};