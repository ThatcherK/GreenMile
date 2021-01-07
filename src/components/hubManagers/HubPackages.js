import React, { useEffect, useState } from 'react'
import instance from '../config/axiosConfig'

export default function HubPackages() {
    const [items, setItems] = useState([])
    useEffect(() => {
        instance
            .get('/packages/hub').then((response) => {
                console.log(response.data.packages)
                setItems(response.data.packages)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    
    return (
        <div>
            {items ? (
                <ul>
                    {items.map((item) => (
                        <div>
                            <li key={item.id}>{item.name}(<p>{item.description}</p>)</li>
                            <p>Recipient: {item.recipient.name}</p>
                            <p>Address: {item.recipient.address}</p>
                            <button key={item.id}>Assign</button>
                        </div>
                    ))}
                </ul>
            ) : <p>These are no packages</p>}

        </div>
    )
}