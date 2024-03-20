import React, { useCallback, useState } from 'react';
import LanguageContext from './LanguageContext';
import en from '../../locales/en.json';
import ru from '../../locales/ru.json';
import { get } from 'lodash';
import { EN, RU } from '../../constants';
import { LanguageMenuTypes, LanguagesTypes } from '../../types/language';
import { MenuProps } from 'antd';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentLanguage, setCurrentLanguage] = useState<string>(RU);
	const dictionaries: LanguagesTypes = { [RU]: ru, [EN]: en };

	const translate = useCallback(
		(path: string) => {
			const dictionary = dictionaries[currentLanguage as keyof LanguagesTypes] ?? ru;
			return get(dictionary, path, '');
		},
		[currentLanguage]
	);

	const languageMenuItems: MenuProps['items'] = [
		{ key: RU, label: translate && translate('languages.ru') },
		{ key: EN, label: translate && translate('languages.en') }
	];

	const handleLanguageMenuClick: MenuProps['onClick'] = (e) => {
		setCurrentLanguage && setCurrentLanguage(e.key);
	};

	const menuProps: LanguageMenuTypes = {
		items: languageMenuItems,
		onClick: handleLanguageMenuClick
	};

	const languageData = {
		currentLanguage,
		setCurrentLanguage,
		translate,
		menuProps
	};

	return <LanguageContext.Provider value={languageData}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;