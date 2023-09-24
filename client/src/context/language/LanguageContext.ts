import { createContext } from 'react';
import { LanguageDataType } from '../../types/language';

const LanguageContext = createContext<Partial<LanguageDataType>>({});

export default LanguageContext;
