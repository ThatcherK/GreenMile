import React from 'react'
import SupplierSideBar from './SupplierSideBar'
import SupplierNav from '../routes/SupplierNav'

export default function Supplier() {
    return (
        <div className="dashboard">
			<SupplierSideBar />
			<div className="otherPage">
				<div className="topBar">
					<button className="logOutBtn">Log Out</button>
				</div>
				<div className="shopFloor">
					<SupplierNav />
				</div>
			</div>
		</div>
    )
}
