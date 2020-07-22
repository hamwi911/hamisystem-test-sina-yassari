import React, {useState} from "react";
import './style.scss';
import SearchBar from "../../Components/SearchBar";
import {getMoviesList} from "../../Services/movieServices";
import MovieItem from "../../Components/MovieItem";
import {Pagination} from "semantic-ui-react";
import Loader from "../../Components/Loader";

const MainPage = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchQueryState, setSearchQueryState] = useState('');
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    let timeout = 0;
    const searchMovieByPage = (e, { activePage }) => {
        setPageIndex(activePage);
        setLoading(true);
        getMoviesList(searchQueryState, activePage).then(res => {
            setMovieList(res.data.Search);
            setLoading(false);
        })
    }
    const searchMovieItem = searchQuery => {
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            setPageIndex(0);
            setSearchQueryState(searchQuery);
            setLoading(true);
            getMoviesList(searchQuery, 1).then(res => {
                if(res.data.Response === 'True'){
                    setMovieList(res.data.Search);
                    setPageCount(parseInt(res.data.totalResults / 10 + 1 ));
                    setNoData(false);
                    setLoading(false)
                }else {
                    setNoData(true);
                    setLoading(false);
                    setPageCount(0)
                }
            })
        }, 500)
    }
    return (
        <div className='container'>
            <SearchBar searchMovieProp={searchMovieItem}/>
            {
                loading ? (
                    <div className='search-loading'>
                        <img src={require('./../../Assets/img/loading.gif')} alt=""/>
                        <strong>Searching Movies...</strong>
                    </div>
                ) : (
                    <>
                        <div className='movie-item-parent'>
                            {
                                !noData && movieList.map((item, index) => {
                                    console.log(pageCount);
                                    return (
                                        <MovieItem key={index} data={item}/>
                                    )
                                })
                            }
                            {
                                noData ? <div className='no-data'><strong>No Movies Found ...</strong></div> : <div></div>
                            }
                        </div>
                        <div className='pagination'>
                            <Pagination defaultActivePage={pageIndex + 1} activePage={pageIndex} totalPages={pageCount} onPageChange={searchMovieByPage}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MainPage;