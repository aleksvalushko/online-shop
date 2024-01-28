import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';

type UserState = {
	user: User;
};

const initialState: UserState = {
	user: {
		isAuth: false
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		}
	}
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;