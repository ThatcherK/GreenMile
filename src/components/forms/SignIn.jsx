import React, { useContext } from 'react';
import { authContext } from '../context/Authenticate';
import instance from '../config/axiosConfig';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignIn(props) {
	const { setLogIn, setToken } = useContext(authContext);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Wrong email format').required('Required'),
			password: Yup.string().min(8, 'Minimum 8 characters').required('Required!'),
		}),
		onSubmit: (values, onSubmitProps) => {
			handleLogin();
			onSubmitProps.resetForm()
		}
	});

	const payload = { 'email': formik.values.email, 'password': formik.values.password }

	const handleLogin = () => {
		instance.post('http://127.0.0.1:5000/login', payload)
			.then((response) => {
				setLogIn(true)
				setToken(response.data.auth_token)
				localStorage.setItem('token', response.data.auth_token)
				localStorage.setItem('role', response.data.user.role)
			})
			.catch((err) => {
				return err
			});
	};
	return (
		<div className="signInContainer">
			<form className="signInForm" onSubmit={formik.handleSubmit}>
				<input type="text" name="email" value={formik.values.email} placeholder="Email" onChange={formik.handleChange} />

				<input type="password" name="password" value={formik.values.password} placeholder="Password" onChange={formik.handleChange} />

				<br />
				<button className="authBtn" type="submit" onClick={handleLogin}>
					Log In
				</button>
				<br />
				<label>Not yet a user?</label>
				<br />
				<button className="signUpBtn" onClick={props.showSignUp}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
