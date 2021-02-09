import React, { useState, useEffect} from 'react'
import instance from '../config/axiosConfig';
import ReactModal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AssignLoaderForm(props) {
	const [loaders, setLoaders] = useState([])
	const formik = useFormik({
		initialValues: {
			loader_id: ''
		},
		validationSchema: Yup.object({
			loader_id: Yup.string().required('Required!'),
		}),
		onSubmit: (values, onSubmitProps) => {
			handleAssignment();
			onSubmitProps.resetForm()
		}
	});

	const payload = { loader_id: Number(formik.values.loader_id) }

	const handleAssignment = () => {
		instance.post(`/packages/hub/${props.id}`, payload)
			.then((response) => {
				console.log(response.data)
			})
			.catch((err) => {
				return err
			});
	}

	useEffect(() => {
		ReactModal.setAppElement('body')
		instance.get('/users').then((response) => {
			const users = response.data.users
			setLoaders(users.filter((user) => user.role === 'packager'))
		},[])
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
					<select id="roleDropdown" name="loader_id" value={formik.values.loader_id} onChange={formik.handleChange} >
						{loaders.map((loader) => (
							<option value={loader.id} >{loader.name}</option>
						)
						)}
					</select>
					<br />
					<button className="authBtn" type="submit">Save</button>
					<button onClick={props.modalClose}>Close</button><br />
				</form>
			</div>
		</ReactModal>

	)
}