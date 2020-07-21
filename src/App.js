import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
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

    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App" >

        <input type="search" placeholder="Search Monster" onChange={e => this.setState({
          searchField: e.target.value
        })} />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;

// setState is a asynchronous function call
