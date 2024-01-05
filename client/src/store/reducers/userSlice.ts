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
	reducers: {}
});

export default userSlice.reducer;
