import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

    const isMounted  = useRef(true);
    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        error: null
    });

    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, []);
    

    useEffect(() => {
        setState({
            ...state,
            data:null,
            loading: true
        })

        fetch( url )
            .then( resp => resp.json())
            .then( data => {

                if( isMounted.current ){
                    setTimeout(() => {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }, 2000);
                }
                    
            });
    }, [url]);

    return state;


};
