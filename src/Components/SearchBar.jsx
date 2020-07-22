import React from "react";
import './componentStyles.scss';

const SearchBar = props => {
    return (
        <div className='search-bar-container'>
            <div className='search-icon'>
                <img src={require('./../Assets/img/search.svg')} alt=""/>
            </div>
            <input type="text" placeholder='search movie, actor, genre & etc' onChange={e => props.searchMovieProp(e.target.value)}/>
        </div>
    )
}

export default SearchBar;