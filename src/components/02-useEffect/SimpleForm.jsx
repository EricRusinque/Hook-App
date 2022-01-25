import { useEffect, useState } from 'react';
import './effects.css'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('formState cambio');
    }, [formState]);
    
    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }

    return (
        <>

            <h1>useEffect</h1>
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
                <input
                    type="text"
                    name="email"
                    className='form-control'
                    autoComplete='off'
                    placeholder='@gmail.com'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}