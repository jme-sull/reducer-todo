import React, { useReducer, useState } from 'react';
import { initalState, reducer } from './reducers/reducer.js'


import ToDoList from './components/ToDoList'


import './App.css';


function App() {

  const [ state, dispatch ] = useReducer(reducer, initalState)

  const [ formInput, setFormInput] = useState('')

    const handleInputChange = e => {
        setFormInput(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch( {
        type: 'ADD',
        payload: formInput
      } )
    }

    const toggleCompleted = (e, item) => {
      e.preventDefault()
      dispatch({
        type: 'TOGGLE',
        payload: item.id
      })
      console.log(item)
    }

    const clearCompleted = () => {
      dispatch({
        type: 'CLEAR_COMPLETED'
      })
    }

  return (
    <div className='App'>
      <h2>My Tasks</h2>
      <ToDoList toggleCompleted={toggleCompleted} ToDoItems={state}/>

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
        <button onClick={() => clearCompleted()}>Clear Completed</button>
    </div>

  )
}

export default App;


