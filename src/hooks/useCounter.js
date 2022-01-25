import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState( initialState );

    const handleIncrement = (value) => {
        setCounter( counter + value);
    }


    const handleDecrement = (value) => {
        setCounter( counter - value);
    }

    const handleReset = () => {
        setCounter( initialState )
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    }
};
