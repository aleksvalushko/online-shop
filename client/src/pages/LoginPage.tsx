import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Login } from '../types/login';
import useLanguage from '../context/language/useLanguage';
import styles from './styles.module.scss';
import { login } from '../http/userAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const { translate } = useLanguage();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const onFinish = async (values: Login) => {
		//TODO доделать валидацию
		try {
			const response = await login(values.email, values.password);
			if (!response) return;
			dispatch(setUser({ ...response, isAuth: true }));
			navigate(location.state?.from);
		} catch (error: any) {
			console.error('Login failed: ', error);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className={styles.loginPage}>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				className={styles.form}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Form.Item<Login>
					label='email'
					name='email'
					rules={[{ required: true, message: translate && translate('login.emailValidationMessage') }]}>
					<Input />
				</Form.Item>

				<Form.Item<Login>
					label='Password'
					name='password'
					rules={[{ required: true, message: translate && translate('login.passwordValidationMessage') }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item<Login>
					name='remember'
					className={styles.rememberMe}
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;