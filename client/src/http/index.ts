import axios from 'axios';

const $host = axios.create({
	baseURL: process.env.PUBLIC_URL
});

const $authHost = axios.create({
	baseURL: process.env.PUBLIC_URL
});
