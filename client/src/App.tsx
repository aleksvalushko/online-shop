import styles from './App.module.scss';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { useAppSelector } from './hooks/redux';

const App = () => {
	const { user } = useAppSelector((state) => state.userReducer);
	return (
		<div className={styles.app}>
			{user.isAuth ? '' : <Header />}
			<AppRouter user={user} />
		</div>
	);
};

export default App;
