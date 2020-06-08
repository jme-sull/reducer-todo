import React, { useReducer } from 'react';
import ToDoList from './components/ToDoList'
import { initalState, reducer } from './reducers/reducer.js'
import './App.css';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initalState)

  return (
    <div>
      <h2>My Tasks</h2>
      <ToDoList ToDoItems={state}/>
    </div>

  )
}

export default App;
