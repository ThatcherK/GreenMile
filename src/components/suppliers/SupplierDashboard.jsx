import React from 'react'


export default function SupplierDashboard() {
    return (
		<div className="adminDashboard">
		<div className ="side" >
			<button className="newPackage">Add package</button>
			<div>
				<h1>1000</h1>
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
		<div className= "main" >
			<h2>Graph on packages
			</h2>
		</div>
	</div>
    )
}
