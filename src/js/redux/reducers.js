import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

const appReducer = combineReducers({
  visibilityFilter,
  todos
})

export default appReducer
