import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const { name, email, password } = formValues;
    
    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    
    
    return (
        <form onSubmit={ handleSubmit }> 

            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className='form-control mb-2'
                    autoComplete='off'
                    placeholder='Su nombre'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
            <input
                    type="text"
                    name="email"
                    className='form-control mb-2'
                    autoComplete='off'
                    placeholder='@gmail.com'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    className='form-control'
                    placeholder='******'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    )
}