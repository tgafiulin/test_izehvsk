import Movie from './Movie'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFirestoreConnect } from 'react-redux-firebase'

function MovieList () {
    useFirestoreConnect([
        { collection: 'movies' } 
    ])
    const movies = useSelector((state) => state.firestore.ordered.movies)
    const searchValue = useSelector(state => state.movie.searchValue)
    let filterMovies = [];

    if (searchValue) {
        filterMovies = movies.filter((movie) => movie.name.indexOf(searchValue) !== -1)
    } 

    if (!filterMovies.length) {
        filterMovies = movies
    }

    const params = {
        slidesPerView: 4,
        spaceBetween: 20
    };

    if (!movies) {
        return 'Минуточку'
    }

    return (
        <div className="movies">
            <Swiper {...params} >
            {filterMovies.map((movie) =>
                <SwiperSlide key={movie.id}>
                    <Movie 
                        value={movie} />
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default MovieList;