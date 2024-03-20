export type User = {
	isAuth: boolean;
	role: string;
	email: string;
	exp: number | null;
	iat: number | null;
	id: number | null;
};