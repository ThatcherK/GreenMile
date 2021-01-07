import React, { useEffect } from 'react';
import instance from '../config/axiosConfig';
import ReactModal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function UserForm(props) {

	const formik = useFormik({
		initialValues: {
			email: '',
			role_id: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Wrong email format').required('Required'),
			role_id: Yup.string().required('Required!'),
		}),
		onSubmit: (values, onSubmitProps) => {
			handleInvite();
			onSubmitProps.resetForm()
		}
	});

	const payload = { email: formik.values.email, role_id: Number(formik.values.role_id) }

	const handleInvite = () => {
		instance.post('http://127.0.0.1:5000/invited_user', payload)
			.then((response) => {
				return response.data
			})
			.catch((err) => {
				return err
			});
	}

	useEffect(() => {
		ReactModal.setAppElement('body')
	})

	return (
		<ReactModal
			isOpen={props.isOpen}
			contentLabel="Invite user"
			onRequestClose={props.modalClose}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.6)'
				},
				content: {
					position: 'fixed',
					background: 'white',
					width: '400px',
					height: '400px',
					padding: '20px',
					borderRadius: '6px',
					top: '50%',
					left: '50%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					transform: 'translate(-50%, -50%)'
				}
			}}
		>
			<div >
				<form className=" modal-main" onSubmit={formik.handleSubmit}>
					<input type="text" name="email" value={formik.values.email} placeholder="Email" onChange={formik.handleChange} /><br />
					<select id="roleDropdown" name="role_id" value={formik.values.role_id} onChange={formik.handleChange} >
						<option value={1} >Admin</option>
						<option value={2}>Supplier</option>
						<option value={3}>Hub manager</option>
						<option value={4}>Loader</option>
					</select>
					<br />
					<button className="authBtn" type="submit">Save</button>
					<button onClick={props.modalClose}>Close</button><br />
				</form>
			</div>
		</ReactModal>

	);
}
