
import React, {useState, useEffect} from 'react';
import axios from './axios';
import classes from './Row.module.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const BASE_URL = "https://image.tmdb.org/t/p/original/";


const Row = (props) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    console.log(movies);

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => {console.log(error)});
        }
    }
    return ( 
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.row_posters}>
                {movies.map(movie => {
                    return <img key={movie.id} onClick={() => handleClick(movie)} className= {props.isLargeRow ? `${classes.row_poster} ${classes.row_posterLarge}` : classes.row_poster} src={`${BASE_URL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
     );
}
 
export default Row;