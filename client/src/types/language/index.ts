import {Dispatch} from 'react';

type headerType = {
	address: string
}

type languageType = {
	header: headerType
}

export type onlyOneLanguageType = 'ru' | 'en';

export type LanguageDataType = {
	currentLanguage: onlyOneLanguageType;
	setCurrentLanguage: Dispatch<onlyOneLanguageType>;
	translate: (path: string) => void;
}

export type LanguagesTypes = {
	ru: languageType;
	en: languageType;
}