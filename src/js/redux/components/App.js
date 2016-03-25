import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DevTools from '../containers/DevTools'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
    <DevTools />
  </div>
)

export default App
