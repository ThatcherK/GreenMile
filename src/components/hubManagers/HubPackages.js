import React, { useEffect, useState } from 'react'
import instance from '../config/axiosConfig'
import AssignLoaderForm from '../forms/AssignLoaderForm'

export default function HubPackages() {
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        instance
            .get('/packages/hub').then((response) => {
                setItems(response.data.packages)
            })
            .catch((error) => {
                console.log(error)
            })
            
    }, [items])
    
    const handleModalOpen = ()=>{
        setIsOpen(true)
    }
    const handleModalClose = ()=>{
        setIsOpen(false)
    }
    return (
        <div>
            {items ? (
                <ul>
                    {items.map((item) => (
                        <div>
                            <li key={item.id}>{item.name}(<p>{item.description}</p>)</li>
                            <p>Supplier: {item.supplier.name}</p>
                            <p>Recipient: {item.recipient.name}</p>
                            <p>Address: {item.recipient.address}</p>
                            <p>{item.id}</p>
                            <button onClick={handleModalOpen}>Assign</button>
                            <AssignLoaderForm isOpen={isOpen} modalClose={handleModalClose} id={item.id}/>
                        </div>
                    ))}
                </ul>
            ) : <p>These are no packages</p>}

        </div>
    )
}