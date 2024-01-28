import styles from './App.module.scss';
import AppRouter from './AppRouter';
import { useAppSelector } from './hooks/redux';
import { ADMIN_ROUTE } from './constants';
import Header from './components/Header';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { check } from './http/userAPI';
import { setUser } from './store/reducers/userSlice';
import { useDispatch } from 'react-redux';

const App = () => {
	const { user } = useAppSelector((state) => state.userReducer);
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		check().then((response) => {
			if (response) dispatch(setUser({ ...response, isAuth: true }));
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