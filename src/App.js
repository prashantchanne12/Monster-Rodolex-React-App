import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  // When React put our component on page ( this method lives in Component )
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // render() comes built in with React Component
  render() {
    return (
      <div className="App" >
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
