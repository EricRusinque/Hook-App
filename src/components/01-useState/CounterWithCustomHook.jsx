import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'
export const CounterWithCustomHook = () => {

    const { state, handleIncrement, handleDecrement , handleReset  } = useCounter(100)

    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr/>

            <button onClick={() => handleIncrement(1) } className='btn'> +1 </button>
            <button onClick={ handleReset  } className='btn'> Reset </button>
            <button onClick={() =>  handleDecrement(1)} className='btn'> -1 </button>
        </>
    )
};
