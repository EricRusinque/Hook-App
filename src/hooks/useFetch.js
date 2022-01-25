import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        error: null
    });

    useEffect(() => {
        setState({
            ...state,
            data:null,
            loading: true
        })

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                setTimeout(() => {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }, 2000);
            });
    }, [url]);

    return state;


};
