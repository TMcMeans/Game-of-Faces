import React, { Component } from 'react';

import './App.css';
import Favorites from '../Favorites/Favorites.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Game of Faces</h1>
        <SearchForm />
        <Favorites /> 
        <Sidebar /> 
        <CardContainer /> 
        <footer>I am a footer element</footer>
      </div>
    );
  }
}

export default App;

