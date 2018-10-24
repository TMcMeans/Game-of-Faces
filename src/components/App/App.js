import React, { Component } from 'react';

import './App.css';
import Favorites from '../Favorites/Favorites.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Sidebar from '../Sidebar/Sidebar.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Game of Faces</h1>
        <SearchForm />
        <Favorites /> 
        <Sidebar /> 
      </div>
    );
  }
}

export default App;

