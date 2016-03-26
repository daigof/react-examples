import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
  let input

  return (
    <div className='row'>
      <div className='col col-md-4'>
        <div className='form-group'>
          <div className='input-group'>
            <input type='text' className='form-control' ref={node => {
              input = node
            }}/>
            <span className='input-group-btn'>
              <button className='btn btn-success' type='button' onClick={() => {
                dispatch(addTodo(input.value))
                input.value = ''
              }}>Add Todo</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
