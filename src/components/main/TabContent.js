import MovieList from './MovieList'
import GenresList from './GenreList'
import ChannelList from './ChannelList'

function TabContent(props) {
    if (props.showMovies) {
        return (
            <div>
                <h2>🔥 Новинки</h2>
                <MovieList />
                <h2>Жанры</h2>
                <GenresList />
            </div>
        );
    }
    return <ChannelList />;
}

export default TabContent;