import { Dispatch } from 'react';

type headerType = {
	stocks: string;
	catalog: string;
	address: string;
};

type languageType = {
	header: headerType;
};

export type LanguageDataType = {
	currentLanguage: string;
	setCurrentLanguage: Dispatch<string>;
	translate: (path: string) => string;
};

export type LanguagesTypes = {
	ru: languageType;
	en: languageType;
};
