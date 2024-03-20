import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/user';

type UserState = {
	user: User;
};

const initialState: UserState = {
	user: {
		isAuth: false,
		role: '',
		email: '',
		exp: null,
		iat: null,
		id: null
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		}
	}
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;