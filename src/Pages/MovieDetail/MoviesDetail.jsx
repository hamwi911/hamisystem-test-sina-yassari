import React, {useEffect, useState} from "react";
import './style.scss';
import WithLoader from "../../Components/WithLoader";
import {getMovieDetail} from "../../Services/movieServices";
import MovieRating from "../../Components/MovieRating";


const MovieDetail = props =>{
    const [movieDetail, setMovieDetail] = useState({});
    const { setLoading } = props;
    useEffect(() => {
        setLoading(true);
        getMovieDetail(props.match.params.id).then(res => {
            setMovieDetail(res.data);
            setLoading(false);
        })
    }, [props.id])
    return (
        <>
            <div className='movie-detail-container'>
                <div className="movie-img">
                    <img src={movieDetail?.Poster} alt=""/>
                </div>
                <div className="detail">
                    <strong className='title'>{movieDetail?.Title}</strong>
                    <span className="title-detail">Year: {movieDetail?.Year}</span>
                    <span className="title-detail">Released: {movieDetail?.Released}</span>
                    <span className="title-detail">Direction: {movieDetail?.Director}</span>
                    <span className="title-detail">Genre: {movieDetail?.Genre}</span>
                    <strong className='other-title'>Actors</strong>
                    <span>{movieDetail?.Actors}</span>
                    <strong className='other-title'>Plot</strong>
                    <span>{movieDetail?.Plot}</span>
                    <strong className='other-title'>Rating</strong>
                    {
                        movieDetail.Ratings && movieDetail?.Ratings.map((item, index) => {
                            return (
                                <MovieRating rating={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default WithLoader(MovieDetail, 'Get Movies Detail...');