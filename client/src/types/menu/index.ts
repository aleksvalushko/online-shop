import { MenuProps } from 'antd';

type menuProps = {
	items: MenuProps['items'];
	onClick: MenuProps['onClick'];
};

export type menuPropsType = {
	menuProps: menuProps;
	currentLanguage: string | undefined;
	translate: ((path: string) => string) | undefined;
};

export type burgerMenuPropsType = {
	translate: ((path: string) => string) | undefined;
	handleBurgerMenuClick: (() => void) | undefined;
};
