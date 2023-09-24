import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from './constants';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Product from './pages/Product';
import { RouteType } from './types/routes';
import MainPage from './pages/MainPage';

export const authRoutes: RouteType[] = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
];

export const publicRoutes: RouteType[] = [
	{
		path: LOGIN_ROUTE,
		Component: Login
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration
	},
	{
		path: MAIN_ROUTE,
		Component: MainPage
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: Product
	}
];

