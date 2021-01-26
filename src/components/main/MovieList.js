import Movie from './Movie'
import { useSelector } from 'react-redux'

function MovieList () {
    const movies = useSelector(state => state.movie.movies)
    const searchValue = useSelector(state => state.movie.searchValue)
    let filterMovies = [];
    if (searchValue) {
        filterMovies = movies.filter((movie) => movie.name.indexOf(searchValue) !== -1)
    }

    if (!filterMovies.length) {
        filterMovies = movies
    }

    return (
        <div className="movies">
            {filterMovies.map((movie) =>
                <Movie 
                    key={movie.id}
                    value={movie} />
            )}
        </div>
    )
}

export default MovieList;