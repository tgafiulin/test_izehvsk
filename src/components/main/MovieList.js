import Movie from './Movie'
import { useSelector } from 'react-redux'

function MovieList () {
    const movies = useSelector(state => state.movie.movies)

    return (
        <div className="movies">
            {movies.map((movie) =>
                <Movie 
                    key={movie.id}
                    value={movie} />
            )}
        </div>
    )
    // }
}

export default MovieList;