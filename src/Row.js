
import React, {useState, useEffect} from 'react';
import axios from './axios';
import classes from './Row.module.css';
const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        //if [] run once when row loads and don't run again
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    console.log(movies);
    return ( 
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.row_posters}>
                {movies.map(movie => {
                    return <img key={movie.id} className= {props.isLargeRow ? `${classes.row_poster} ${classes.row_posterLarge}` : classes.row_poster} src={`${BASE_URL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
        </div>
     );
}
 
export default Row;