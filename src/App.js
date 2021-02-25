import React, { Component } from "react";
import Person from './Person'
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <Person />
    </div>
  );    
  }
}

export default App;


// react - has one method, the render method
//         react will call this method to render something to the screen 
//         every react component has to render some html code which can be rendered to the dom to the screen, can do other things but the basic is to return some html code

// using React.createElement