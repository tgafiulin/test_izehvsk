import './MovieItem.css'
import CommentList from './CommentList'
import { useSelector } from 'react-redux'
import { useParams, Link } from "react-router-dom";

function MovieItem () {
    let { id } = useParams();
    const movieId = parseInt(id);
    const movies = useSelector(state => state.movie.movies);
    const movie = movies.filter((movie) => movieId === movie.id)[0];

    return (
        <div>
            <div className="movie-container">
                <div className="back-btn">
                    <Link to="/"></Link>
                </div>
                <div className="movie-item">
                    <div className="movie-item__img">
                        <img src={movie.imgSrc} alt={movie.name}/>
                    </div>
                    <div className="movie-item__info">
                        <div className="movie-item__text"><span>Название:</span> <b>{movie.name}</b></div>
                        <div className="movie-item__text"><span>Старана:</span> {movie.country}</div>
                        <div className="movie-item__text"><span>Жанр:</span> {movie.genres}</div>
                        <div className="movie-item__desc">{movie.desc}s</div>
                    </div>
                </div>
            </div>
            <CommentList 
                movie={movie}
                comments={movie.comments}
            />
        </div>
    )
}

export default MovieItem;