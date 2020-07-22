import React from 'react';
import './componentStyles.scss';


const Loader = ({message}) => {
    return (
        <div className='container-animation'>
            <img src={require('./../Assets/img/loading.gif')} alt="" />
            <strong>{message}</strong>
        </div>
    )
}

export default Loader;
