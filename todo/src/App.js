import React, { useReducer } from 'react';
import { initalState, reducer } from './reducers/reducer.js'

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'


import './App.css';


function App() {

  const [ state, dispatch ] = useReducer(reducer, initalState)

  return (
    <div>
      <h2>My Tasks</h2>
      <h3>Add New Task</h3>
      <ToDoForm />
      <h3>Current Tasks</h3>
      <ToDoList ToDoItems={state}/>
    </div>

  )
}

export default App;
