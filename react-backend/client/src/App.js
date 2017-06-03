import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myInit = {
  method: 'GET',
  Authorization: 'Bearer sk_live_210eb57e6b95e5143c492a219091c4e5'
}

class App extends Component {
  state = {
    json: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/event?page[limit]=12&page[offset]=12')
    .then(res => res.json())
    .then(json => this.setState({ json }));
  }
  render() {
    console.log(this.state.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
