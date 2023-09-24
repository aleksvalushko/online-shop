import styles from './App.module.scss';
import AppRouter from './components/AppRouter';
import Header from './components/Header';

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<AppRouter />
		</div>
	);
};

export default App;
