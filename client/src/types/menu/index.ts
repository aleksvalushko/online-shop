import { MenuProps } from 'antd';
import { ReactNode } from 'react';

type menuProps = {
	items: MenuProps['items'];
	onClick: MenuProps['onClick'];
};

export type menuPropsType = {
	menuProps: menuProps | undefined;
	currentLanguage: string | undefined;
	translate: ((path: string) => string) | undefined;
	handleNavigate: (path: string) => void;
};

export type burgerMenuButtonsPropsType = {
	className: string;
	clickCallback: () => void;
	icon: ReactNode;
	translations: string | undefined;
};

export type burgerMenuPropsType = {
	translate: ((path: string) => string) | undefined;
	handleBurgerMenuClick: () => void;
	handleNavigate: (path: string) => void;
};