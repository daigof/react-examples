import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
  <div className='panel panel-default'>
    <div className='panel-heading'>Todo App</div>
    <div className='panel-body'>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  </div>
)

export default TodoApp
