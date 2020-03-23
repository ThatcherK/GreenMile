import React from 'react';

const HubManDashboard =()=>{
    return (
        <div className="adminDashboard">
			<div className="side">
				<button className="newPackage">Receive package</button>
				<div>
					<h1>100</h1>
					<p>PACKAGES</p>
				</div>
				<div>
					<h1>50</h1>
					<p>DELIVERED</p>
				</div>
				<div>
					<h1>50</h1>
					<p>IN TRANSIT</p>
				</div>
			</div>
			<div className="main">
				<h2>Graph on deliveries</h2>
			</div>
		</div>
    )
}

export default HubManDashboard;