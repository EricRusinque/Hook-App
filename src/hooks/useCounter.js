import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState( initialState );

    const handleIncrement = (value) => {
        setState( state + value);
    }


    const handleDecrement = (value) => {
        setState( state - value);
    }

    const handleReset = () => {
        setState( initialState )
    }

    return {
        state,
        handleIncrement,
        handleDecrement,
        handleReset
    }
};
