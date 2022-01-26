import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const Layout = () => {

    const { counter, handleIncrement } = useCounter(1);
    
    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {  quote } = !!data && data[0];

    const pTag = useRef();    
    const [boxSize, setBoxSize] = useState({});
    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    
    return (
        <div>
            <h1>BreackingBad Quotes </h1>
            <hr/>
                    <blockquote className='blockquoute'>
                        <p ref={pTag} className='mb-3'>{quote}</p>
                    </blockquote>

                    <pre>
                        {
                            JSON.stringify( boxSize, null, 3)
                        }
                    </pre>

            <button 
                onClick={() => handleIncrement(1)}
                className='btn btn-primary'>Next Quote</button>

        </div>
    );
};
