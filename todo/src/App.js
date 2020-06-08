import React, { useReducer, useState } from 'react';
import { initalState, reducer } from './reducers/reducer.js'

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'


import './App.css';


function App() {

  const [ state, dispatch ] = useReducer(reducer, initalState)

  const [ formInput, setFormInput] = useState('')

    const handleInputChange = e => {
        setFormInput(e.target.value)
    }

    const handleSubmit = e => {
      dispatch({
        type: 'ADD',
        payload: e.target.value
      })
    }

  return (
    <div className='App'>
      <h2>My Tasks</h2>
      <ToDoList ToDoItems={state} />

      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='item'
                value={formInput}
                onChange={handleInputChange}
                />
                <button style={{width:'5rem'}}>Submit</button>
        </form>
    </div>

  )
}

export default App;
