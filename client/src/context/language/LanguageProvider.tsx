import React, { useCallback, useState } from 'react';
import LanguageContext from './LanguageContext';
import en from '../../locales/en.json';
import ru from '../../locales/ru.json';
import { get } from 'lodash';
import { EN, RU } from '../../constants';
import { LanguagesTypes } from '../../types/language';

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

	const languageData = {
		currentLanguage,
		setCurrentLanguage,
		translate
	};

	return <LanguageContext.Provider value={languageData}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
