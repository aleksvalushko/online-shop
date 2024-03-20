import { $authHost, $host } from './index';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/user';

export const registration = async (email?: string, password?: string) => {
	const { data } = await $host.post('api/user/registration', { email, password });
	if (!data?.token) return;
	localStorage.setItem('token', data.token);
	return jwtDecode<User>(data.token);
};

export const login = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/login', { email, password });
	if (!data) return;
	localStorage.setItem('token', data.token);
	return jwtDecode<User>(data.token);
};

export const check = async () => {
	try {
		const { data } = await $authHost.get('api/user/auth');
		if (!data) return;
		localStorage.setItem('token', data.token);
		return jwtDecode<User>(data.token);
	} catch (error: any) {
		console.error('Check authorization failed: ', error.message);
	}
};