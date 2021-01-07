import React, { useState,} from 'react';
import instance from '../config/axiosConfig';
import ReactModal from 'react-modal';

export default function PackageInfo(props) {
	const [ productName, setName ] = useState(null);
	const [ description, setDescription ] = useState(null);
	const [ email, setEmail ] = useState(null);
	const [ address, setAddress ] = useState(null);
	const [ recipientName, setRecipientName ] = useState(null);
	const [ weight, setWeight ] = useState(null);

	const getName = (event) => {
		setName(event.target.value);
	};
	const getDescription = (event) => {
		setDescription(event.target.value);
	};
	const getWeight = (event) => {
		setWeight(event.target.value);
	};
	const getEmail = (event) => {
		setEmail(event.target.value);
	};
	const getAddress = (event) => {
		setAddress(event.target.value);
	};
	const getRecipientName = (event) => {
		setRecipientName(event.target.value);
	};

	const recipientData = { name: recipientName, address: address, email: email };
	const addPackage = async (e) => {
		e.preventDefault();
		const results = await instance.post('http://127.0.0.1:5000/recipients', recipientData);

		const packageData = {
			name: productName,
			description: description,
			weight: weight,
			recipient_id: results.data.recipient.id
		};

		return instance
			.post('http://127.0.0.1:5000/packages/supplier', packageData)
			.then((response) => response);
	};

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
			<div>
				<form className=" modal-main">
					<input type="text" name="name" placeholder="Name" onChange={getName} />
					<br />
					<textarea placeholder="Description" onChange={getDescription} />
					<input type="text" placeholder="weight" onChange={getWeight} />
					<input type="text" name="email" placeholder="Recipient's email" onChange={getEmail} />
					<br />
					<input type="text" placeholder="Recipient's name" onChange={getRecipientName} />
					<input type="text" placeholder="Recipient's address" onChange={getAddress} />
					<button className="authBtn" onClick={addPackage}>
						Save
					</button>
					<button onClick={props.modalClose}>Close</button>
					<br />
				</form>
			</div>
		</ReactModal>
	);
}
