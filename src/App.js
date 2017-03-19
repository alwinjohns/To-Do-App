import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import {createStore} from 'redux'
import HelloWorld from './containers/HelloWorld.js'
import combReducer from './reducers/reducer.js'

var store = createStore(combReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Simple TO DO App</h2>
                <AddTodo />
              </div>


        </div>
      </Provider>
    );
  }
}

export default App;
