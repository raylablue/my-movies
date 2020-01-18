import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/Pages/PageGallery';
import Search from './components/Pages/PageSearch';
import Fav from './components/Pages/PageFav';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/fav">
            <Fav />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Gallery />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
