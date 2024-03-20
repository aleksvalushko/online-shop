import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentLanguageType } from '../../../types/language';

const initialState: CurrentLanguageType = {
	currentLanguage: ''
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setCurrentLanguage: (state, action: PayloadAction<string>) => {
			state.currentLanguage = action.payload;
		}
	}
});

export default languageSlice.reducer;

export const { setCurrentLanguage } = languageSlice.actions;