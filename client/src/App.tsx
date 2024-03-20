import styles from './App.module.scss';
import AppRouter from './AppRouter';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { ADMIN_ROUTE } from './constants';
import Header from './ui/Header';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { check } from './http/userAPI';
import { setUser } from './store/reducers/User/UserSlice';
import { User } from './types/user';

const App = () => {
	const { user } = useAppSelector((state) => state.userReducer);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		check().then((response: User | undefined) => {
			if (response) {
				dispatch(setUser({ ...response, isAuth: true }));
				navigate(location.pathname);
			}
		});
	}, []);

	return (
		<div className={styles.app}>
			{location.pathname === ADMIN_ROUTE ? '' : <Header />}
			<div className={styles.content}>
				<AppRouter user={user} />
			</div>
		</div>
	);
};

export default App;