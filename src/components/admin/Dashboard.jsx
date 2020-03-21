import React from 'react'

export default function Dashboard() {
    console.log("I am running")
    return (
        <div className="adminDashboard">
            <div className ="side" >
                <div>
                    <h1>1000</h1>
                    <p>SUPPLIERS</p>
                </div>
                <div>
                    <h1>10000</h1>
                    <p>PACKAGES</p>
                </div>
                <div>
                    <h1>20</h1>
                    <p>HUBS</p>
                </div>
            </div>
            <div className= "main" >
                <h2>Graph on packages
                </h2>
            </div>
        </div>
    )
}
