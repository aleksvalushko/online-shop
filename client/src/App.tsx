import styles from './App.module.scss';
import AppRouter from './AppRouter';
import { useAppSelector } from './hooks/redux';
import { ADMIN_ROUTE } from './constants';
import Header from './components/Header';
import React from 'react';

const App = () => {
	const { user } = useAppSelector((state) => state.userReducer);
	const currentEndpoint = window.location.href.split('/').at(-1);

	return (
		<div className={styles.app}>
			{`/${currentEndpoint}` === ADMIN_ROUTE ? '' : <Header />}
			<AppRouter user={user} />
		</div>
	);
};

export default App;
