import React, { useState } from 'react'
import Loader from './Loader';


export const WithLoading = (WrappedComponent, loadingMessage) => {
    const HOC = props => {
        const [isLoading, setLoading] = useState(false);
        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading)
        }
        return (
            <>
                {isLoading && <Loader message={loadingMessage}/>}
                <WrappedComponent {...props} setLoading={setLoadingState}/>
            </>
        )
    }
    return HOC;
};

export default WithLoading;