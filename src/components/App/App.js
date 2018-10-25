import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Favorites from '../Favorites/Favorites.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import { showAllChars } from '../../actions';

class App extends Component {
  
  async componentDidMount() {
    const url = 'https://api.got.show/api/characters/'
    const response = await fetch(url)
    const charData = await response.json()
    this.props.getChars(charData)
  }
  
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

const mapDispatchToProps = (dispatch) => ({
  getChars: (array) => dispatch(showAllChars(array))
})

export default connect(null, mapDispatchToProps)(App);


