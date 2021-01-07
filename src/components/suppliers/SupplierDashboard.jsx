import React,{useState,useContext,useEffect} from 'react';
import PackageInfo from '../forms/PackageInfo';
import axios from 'axios';
import { authContext } from '../context/Authenticate';


export default function SupplierDashboard() {
	const { authToken } = useContext(authContext);
	const [modalOpen,setIsOpen] = useState(false)
	const [packages,setPackages] = useState([])

	const handleAddPackage =()=>{
		setIsOpen(true)
	}

	const closeModal = () => {
        setIsOpen(false)
	}

	useEffect(() => {
		const getPackages = async()=>{
			let results = await axios.get('http://127.0.0.1:5000/packages',{ headers: { Authorization: `Bearer ${authToken}` }})
			setPackages(results.data.packages)
		}
		getPackages()
	},[authToken])
	
	return (
		<div className="adminDashboard">
			<div className="side">
				<button className="newPackage" onClick={handleAddPackage}>Add package</button>
				<PackageInfo isOpen={modalOpen} modalClose={closeModal}/>
				<div>
	<h1>{packages.length}</h1>
					<p>PACKAGES</p>
				</div>
				<div>
					<h1>500</h1>
					<p>DELIVERED</p>
				</div>
				<div>
					<h1>500</h1>
					<p>IN TRANSIT</p>
				</div>
			</div>
			<div className="main">
				<input type="text"placeholder="Enter number"/><button className="newPackage">Track</button>
				<h2>Graph on packages</h2>
			</div>
		</div>
	);
}
