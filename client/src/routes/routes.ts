import {
	ADMIN_ROUTE,
	CATALOG_ROUTE,
	FAVORITES_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	PRODUCT_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
	SHOPPING_CART_ROUTE,
	STOCKS_ROUTE
} from '../constants';
import AdminPage from '../pages/AdminPage';
import ProductPage from '../pages/ProductPage';
import { RouteType } from '../types/routes';
import MainPage from '../pages/MainPage';
import StocksPage from '../pages/StocksPage';
import CatalogPage from '../pages/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage';
import ProfilePage from '../pages/ProfilePage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import LogInSignUpPage from '../pages/LogInSignUpPage';

export const authRoutes: RouteType[] = [
	{
		path: ADMIN_ROUTE,
		Component: AdminPage
	},
	{
		path: SHOPPING_CART_ROUTE,
		Component: ShoppingCartPage
	},
	{
		path: FAVORITES_ROUTE,
		Component: FavoritesPage
	},
	{
		path: PROFILE_ROUTE,
		Component: ProfilePage
	}
];

export const publicRoutes: RouteType[] = [
	{
		path: LOGIN_ROUTE,
		Component: LogInSignUpPage
	},
	{
		path: REGISTRATION_ROUTE,
		Component: LogInSignUpPage
	},
	{
		path: MAIN_ROUTE,
		Component: MainPage
	},
	{
		path: STOCKS_ROUTE,
		Component: StocksPage
	},
	{
		path: CATALOG_ROUTE,
		Component: CatalogPage
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: ProductPage
	}
];