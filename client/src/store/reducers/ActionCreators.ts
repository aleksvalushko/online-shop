import axios from 'axios';

export const fetchUsers = () => async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.log('response: ', response);
	} catch (error: any) {
		console.error('Error: ', error);
	}
};