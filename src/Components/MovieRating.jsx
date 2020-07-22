import React, {useEffect} from "react";
import {Progress} from "semantic-ui-react";

const MovieRating = props => {
    const calcRating = (rating) => {
        if (rating.Value.includes('/')) {
            // let percent = 0;
            // percent = (parseFloat(rating.Value.split('/')[0]) / parseFloat(rating.Value.split('/')[1])) * 100;
            return (
                <>
                    <div className='rating-title-container'><span className='rating-title'>{rating.Source}</span> <span
                        className='rating-title'>{rating.Value}</span></div>
                    <Progress value={rating.Value.split('/')[0]} total={rating.Value.split('/')[1]} progress={'ratio'}/>
                </>
            )
        }
        if (rating.Value.includes('%')) {
            return (
                <>
                    <div className='rating-title-container'><span className='rating-title'>{rating.Source}</span> <span
                        className='rating-title'>{rating.Value}</span></div>
                    <Progress percent={parseInt(rating.Value)} progress/>
                </>
            )
        }
    }
    useEffect(() => {
    })
    return (
        <div>
            {
                calcRating(props.rating)
            }
        </div>
    )
}

export default MovieRating;