import styles from './App.module.scss';
import AppRouter from './AppRouter';
import { useAppSelector } from './hooks/redux';
import { ADMIN_ROUTE } from './constants';
import Header from './components/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
	const { user } = useAppSelector((state) => state.userReducer);
	const location = useLocation();

	return (
		<div className={styles.app}>
			{location.pathname === ADMIN_ROUTE ? '' : <Header />}
			<AppRouter user={user} />
		</div>
	);
};

export default App;
