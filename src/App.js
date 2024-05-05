import './App.css';
import TodoTable from './components/TodoTable';
import React, { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState(
    [
      { rowNumber: 1, rowDescription: 'Get haircut', rowAssigned: 'Diyan' },
      { rowNumber: 2, rowDescription: 'Make dinner', rowAssigned: 'Ivan' },
      { rowNumber: 3, rowDescription: 'Charge battery', rowAssigned: 'Gosho' },
    ]
  )

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1
    } else {
      rowNumber = 1;
    }
      const newTodo = { rowNumber: rowNumber, rowDescription: description, rowAssigned: assigned }
      setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    // let filtered = todos.filter((value) => {
    //   return value.rowNumber !== deleteTodoRowNumber
    // })
    let filtered = todos.filter(todo => {return todo.rowNumber !== deleteTodoRowNumber})
    setTodos(filtered)
  }

  const [showAddTodoFrom,setShowAddTodoForm] = useState(false);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Todo list
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => {
            setShowAddTodoForm(!showAddTodoFrom)
          }} className='btn btn-primary'>
            {showAddTodoFrom ? 'Close add todo' : 'New todo'}
          </button>
          {showAddTodoFrom && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
