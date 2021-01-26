import { Component } from 'react';
import Genre from './Genre'

class GenreList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [
                {
                    id: 1,
                    icon: '😁',
                    name: 'Комедии',
                    classGenre: '-comedy'
                },
                {
                    id: 2,
                    icon: '😭',
                    name: 'Драмы',
                    classGenre: '-drama'
                },
                {
                    id: 3,
                    icon: '👽',
                    name: 'Фантастика',
                    classGenre: '-fantasy'
                },
                {
                    id: 4,
                    icon: '👻',
                    name: 'Ужасы',
                    classGenre: '-horror'
                }
            ]
        };
    }

    render() {
        const movies = this.state.movies;
        return (
            <div className="genres">
                {movies.map((movie) =>
                    <Genre 
                        key={movie.id}
                        value={movie} />
                )}
            </div>
        )
    }
}

export default GenreList;