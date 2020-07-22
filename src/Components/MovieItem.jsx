import React from "react";
import './componentStyles.scss';
import {Link} from "react-router-dom";

const MovieItem = ({data}) => {
    return (
        <Link to={`/movie/detail/${data.imdbID}`} className='movie-item-container'>
            <img src={data.Poster} alt=""/>
            <strong>{data.Title}</strong>
            <span>{data.Year}</span>
            <span>{data.Type}</span>
        </Link>
    )
}

export default MovieItem;