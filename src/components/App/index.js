// == Import npm
import React from 'react';
import {Route} from 'react-router-dom';

// == Import
import Recipe from 'src/containers/Recipe';
import Navigation from 'src/containers/Navigation';
import Home from 'src/containers/Home';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">

    <Navigation />
    <main className="main">
    <header className="header">oRecipe</header>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/recipe/:slug" component={Recipe} />

    </main>
  </div>
);

// == Export
export default App;
