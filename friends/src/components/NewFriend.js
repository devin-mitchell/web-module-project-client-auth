import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    id: Date.now(),
    name: '',
    age: 0,
    email: ''
}

export default function NewFriend(props) {
    const [ formValues, setFormValues ] = useState(initialValues)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'/>Name
                    <input 
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                <label htmlFor='age'/>Age
                    <input 
                        type='number'
                        name='age'
                        value={formValues.age}
                        onChange={handleChange}
                    />
                <label htmlFor='email'/>Email
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                <button>Add Friend!</button>
            </form>
        </div>
    )
}
