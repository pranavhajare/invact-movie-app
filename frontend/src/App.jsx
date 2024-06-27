import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import WatchedMovies from './components/WatchedMovies';
import UnwatchedMovies from './components/UnwatchedMovies';
import './App.css'

const App = () => {
  
  
  return (
    <Router>
      <Navbar />
      <div style={{  backgroundColor:"black", minHeight: '100vh',marginTop: '60px', padding: '30px'}}> {/* Adjust the margin and padding as needed */}
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/watched" component={MovieList} />
          <Route path="/edit/:id" component={EditMovie} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/watched-movies" component={WatchedMovies} />
          <Route path="/unwatched-movies" component={UnwatchedMovies} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
