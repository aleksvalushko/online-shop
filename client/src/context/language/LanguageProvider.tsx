import React, { useCallback, useState, PropsWithChildren } from 'react';
import LanguageContext from './LanguageContext';
import en from '../../locales/en.json';
import ru from '../../locales/ru.json';
import { get } from 'lodash';
import { EN, RU } from '../../constants';

export interface ILanguageData {
	ru: string;
	en: string;
}

const LanguageProvider: React.FC = ({ children }: PropsWithChildren) => {
	const [currentLanguage, setCurrentLanguage] = useState(EN);
	const dictionaries: ILanguageData = { [EN]: en, [RU]: ru };

	const translate = useCallback(
		(path: string) => {
			const dictionary = dictionaries[currentLanguage] ?? ru;
			return get(dictionary, path, '');
		},
		[currentLanguage]
	);

	const languageData = {
		currentLanguage,
		setCurrentLanguage,
		translate
	};

	return <LanguageContext.Provider value={languageData}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
