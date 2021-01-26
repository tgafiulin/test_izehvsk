import './App.css';
import { Component } from 'react';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Modal from './components/common/Modal'
import Tabs from './components/main/Tabs'
import MovieItem from './components/movie/MovieItem'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {

  render () {
    return (
      <div className="App">
        <Router>
          <Header />
          <main className="main">
                <div className="container">
                  <Switch>
                    <Route exact path="/">
                      <Tabs />
                    </Route>
                    <Route path="/movie/:id">
                      <MovieItem />
                    </Route>
                    <Redirect to="/" />
                  </Switch>
                </div>
            </main>
          <Footer />
          <Modal />
        </Router>
      </div>
    );
  }
}

export default App;
