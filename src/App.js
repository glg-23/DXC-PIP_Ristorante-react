import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Router from './component/router/Router';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router></Router>
      </div>
    );
  }
}

export default App;
