import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const initialValues = {
    username: 'Lambda School',
    password: 'i<3Lambd4' 
}

export default function LoginForm(props) {
    const [formValues, setFormValues] = useState(initialValues)
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
console.log('PROPS', props)
    const handleChange = (e) => {
        setFormValues({
         ...formValues,
        [e.target.name]: e.target.value   
        })
        console.log(formValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        axios.post('http://localhost:5000/api/login', formValues)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            history.push('/friends-list')
            setIsLoading(false)       
        })
        .catch(err => {
            console.log(err)
        })
    }
    if(isLoading){
        return(
            <div>I'M LOADING...</div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='userName' />User userName
                    <input 
                        name='userName'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                <label htmlFor='password' />User userName
                    <input 
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                <button>enter</button>
            </form>    
        </div>
    )
}
