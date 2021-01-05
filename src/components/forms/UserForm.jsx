import React,{useState} from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

export default function UserForm(props) {

	const [email,setEmail] = useState(null)
	const [role_id,setRole] = useState(null)
	// const [invite_code,setCode] = useState(null)

	const getEmail = (e)=>{
		setEmail(e.target.value)
	}
	const getRole = (e)=>{
		setRole(e.target.value)
	}
	console.log(role_id)
	const addUser = (e)=>{
		e.preventDefault()
		const data= {'email':email,'role_id':Number(role_id)}
		axios.post('http://127.0.0.1:5000/invited_user',data)
									 .then((response) =>{
										 return response.data
									 })
									 .catch((err) => {
										 return err
										});
	}

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
					flexDirection:'column',
					justifyContent: 'center',
					transform: 'translate(-50%, -50%)'
				}
			}}
		>
			<div >
			<form className=" modal-main">
				<input type="text" name="email" placeholder="Email" onChange={getEmail}/><br/>
				<select id="roleDropdown" onChange={getRole} >
					<option value=""></option>
					<option value={1} >Admin</option>
					<option value={2}>Supplier</option>
					<option value={3}>Hub manager</option>
					<option value={4}>Loader</option>
				</select>
				<br />
				<button className="authBtn" onClick={addUser}>Save</button>
				<button onClick={props.modalClose}>Close</button><br/>
			</form>
		</div>
		</ReactModal>
		
	);
}
