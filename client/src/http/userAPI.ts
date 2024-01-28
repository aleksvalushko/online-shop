import { $authHost, $host } from './index';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export const registration = async (username?: string, password?: string) => {
	try {
		const { data } = await $host.post('api/user/registration', { username, password });
		if (!data?.token) return;
		localStorage.setItem('token', data.token);
		return jwtDecode<JwtPayload>(data.token);
	} catch (error: any) {
		console.error('Registration failed: ', error.message);
	}
};

export const login = async (email: string, password: string) => {
	try {
		const { data } = await $host.post('api/user/login', { email, password });
		if (!data) return;
		localStorage.setItem('token', data.token);
		return jwtDecode<JwtPayload>(data.token);
	} catch (error: any) {
		console.error('Login failed: ', error.message);
	}
};

export const check = async () => {
	try {
		const { data } = await $authHost.get('api/user/auth');
		if (!data) return;
		localStorage.setItem('token', data.token);
		return jwtDecode<JwtPayload>(data.token);
	} catch (error: any) {
		console.error('Check authorization failed: ', error.message);
	}
};
