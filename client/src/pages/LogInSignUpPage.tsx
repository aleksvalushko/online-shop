import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Login } from '../types/login';
import useLanguage from '../context/language/useLanguage';
import styles from './styles.module.scss';
import { login, registration } from '../http/userAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { setUser } from '../store/reducers/User/UserSlice';
import { User } from '../types/user';
import { ADMIN, ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../constants';
import { ArrowLeftOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const LogInSignUpPage = () => {
	const { translate } = useLanguage();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [isSignUp, setIsSignUp] = useState<boolean>(true);

	const onFinish = async ({ email, password }: Login) => {
		try {
			const response: User | undefined = await (isSignUp ? registration(email, password) : login(email, password));
			if (!response) return;
			dispatch(setUser({ ...response, isAuth: true }));
			response.role === ADMIN && location.state?.from === PROFILE_ROUTE
				? navigate(ADMIN_ROUTE)
				: navigate(location.state?.from);
		} catch (error: any) {
			message.error({
				content: error?.response?.data?.message
			});
		}
	};

	const goToLoginForm = () => {
		navigate(LOGIN_ROUTE, { state: { from: location.state?.from } });
		setIsSignUp(false);
	};

	const goToSignUpForm = () => {
		navigate(REGISTRATION_ROUTE, { state: { from: location.state?.from } });
		setIsSignUp(true);
	};

	return (
		<div className={styles.logInSignUpPage}>
			<Form
				name='basic'
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 16 }}
				className={styles.form}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete='off'>
				<h1>{translate && translate(isSignUp ? 'login.signUp' : 'login.logIn')}</h1>

				<Form.Item<Login>
					label={translate && translate('login.email')}
					name='email'
					rules={[{ required: true, message: translate && translate('login.emailValidationMessage') }]}>
					<Input prefix={<UserOutlined className='site-form-item-icon' />} />
				</Form.Item>

				<Form.Item<Login>
					label={translate && translate('login.password')}
					name='password'
					rules={[{ required: true, message: translate && translate('login.passwordValidationMessage') }]}>
					<Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
				</Form.Item>

				{isSignUp ? (
					<div className={styles.isAccountExistBlock}>
						{translate && translate('login.doYouHaveAccountQuestion')}
						<Button type='link' onClick={goToLoginForm}>
							{translate && translate('login.logIn')}
						</Button>
					</div>
				) : (
					<div className={styles.rememberMeAndGoBackBlock}>
						<Form.Item<Login> name='remember' className={styles.rememberMe} valuePropName='checked'>
							<Checkbox>{translate && translate('login.rememberMe')}</Checkbox>
						</Form.Item>

						<Button type='link' icon={<ArrowLeftOutlined />} onClick={goToSignUpForm}>
							{translate && translate('login.goBack')}
						</Button>
					</div>
				)}

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						{translate && translate(isSignUp ? 'login.signUp' : 'login.logIn')}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LogInSignUpPage;