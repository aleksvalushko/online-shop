import React from 'react';
import { authRoutes, publicRoutes } from '../routes/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MAIN_ROUTE } from '../constants';
import { User } from '../types/user';

type Props = {
	user: User;
};

const AppRouter = ({ user }: Props) => {
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => {
					return <Route key={path} path={path} Component={Component} />;
				})}
			{publicRoutes.map(({ path, Component }) => {
				return <Route key={path} path={path} Component={Component} />;
			})}
			<Route path='*' element={<Navigate to={MAIN_ROUTE} replace />} />
		</Routes>
	);
};

export default AppRouter;
