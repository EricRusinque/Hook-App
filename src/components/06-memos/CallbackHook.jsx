import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );
   
    // const handleIncrement = () => {
    //     setCounter( counter + 1 );

    // }

    const handleIncrement = useCallback((num) => {
        setCounter( prev => prev + num );
    }, [ setCounter ]);
    
    return (
        <div>
            <h1>useCallback Hook: { counter } </h1>
            <hr/>


            <ShowIncrement handleIncrement={ handleIncrement }/>
        </div>
    );
};
