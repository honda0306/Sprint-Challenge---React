import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Nav from './Nav.js';
import PreviousButton from './PreviousButton.js';
import NextButton from './NextButton.js';
import CardComponent from './CardComponent.js';
import InBetween from './InBetween.js';
// import Character from './components/Character';

// Style Files

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      info: {}
    };
  }
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

    getCharacters = URL => {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ starwarsChars: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    };

    goNext = () => {
      if (this.state.info.goPrevious !== null) {
        return this.getCharacters(this.state.info.goNext)
      }
    }

    goPrevious = () => {
      if (this.state.info.goPrevious !== null) {
        return this.getCharacters(this.state.info.next)
      }
    }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <InBetween />
        <div className="allcards">
          <CardComponent starwarsChars={this.state.starwarsChars}/>
          <div className="buttons">
            <PreviousButton onClick={this.goPrevious} />
            <NextButton onClick={this.goNext} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
