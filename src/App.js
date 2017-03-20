import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import {createStore} from 'redux'
import AddTodoContainer from './containers/addTodoContainer.js'
import FooterContainer from './containers/footerContainer.js'
import TodoListContainer from './containers/todoListContainer.js'
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
                <AddTodoContainer />
                <TodoListContainer/>
                <FooterContainer/>
              </div>


        </div>
      </Provider>
    );
  }
}

export default App;
