import { Component } from 'react';
import TabContent from './TabContent'
import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMovies: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (movie) {
        this.setState({showMovies: movie});
    }

    render () {
        let classNameMovies = "tab tab-movies";
        let classNameTv = "tab tab-tv";
        let showMovies = this.state.showMovies;

        if (showMovies) {
            classNameMovies += ' -active';
        } else {
            classNameTv += ' -active';
        }

        return (
            <div>
                <div className="tabs">
                    <div className={classNameMovies} onClick={(e) => this.handleClick(true, e)}>Фильмы</div>
                    <div className={classNameTv} onClick={(e) => this.handleClick(false, e)}>Телеканалы</div>
                </div>
                <TabContent showMovies={this.state.showMovies} />
            </div>
        )
    }
}

export default Tabs;