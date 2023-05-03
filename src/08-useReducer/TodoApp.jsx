import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
    // {
    // id: new Date().getTime(),
    // description: 'Recolectar piedra alma',
    // done: false,
    // },
];

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || []
}


export const TodoApp = () => {

const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify( todos ))
}, [todos])


const handleNewTodo = ( todo ) =>{
  const action = {
    type: 'Add todo',
    payload: todo
  }
  dispatch( action )
}

  return (
    <>
        <h1>TodoApp: 10, <small>pendientes:2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
              {/*TodoList*/}
             <TodoList todos={todos}/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/*TodoAdd onNewTodo*/}
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>
    </>
  )
}
