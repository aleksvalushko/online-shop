import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';

type UserState = {
	user: IUser;
};

const initialState: UserState = {
	user: {
		isAuth: true
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {}
});

export default userSlice.reducer;
