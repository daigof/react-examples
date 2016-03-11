/*
STORES:
  Hold app data state and logic for a particular domain within the application.
  Register callbacks with dispatcher.
  Respond to action type using Switch statement.
  After computation stores emit change event so views can catch the new state
  Stores may depend on each other
*/

import {EventEmitter} from "events";

import dispatcher from "./Dispatcher";

import {findIndex} from "lodash";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Todo number 1",
        complete: false
      }, {
        id: 235684679,
        text: "Refactor me with Redux :)",
        complete: false
      }
    ];
  }

  getState() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({id, text, complete: false});

  }

  completeTodo(id) {
    const todoIndex = findIndex(this.todos, (i) => i.id === id);
    this.todos[todoIndex].complete = true;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO":
        {
          this.createTodo(action.text);
          this.emit("change");
          break;
        }
      case "RECEIVE_TODOS":
        {
          this.todos = action.todos;
          this.emit("change");
          break;
        }
      case "COMPLETE_TODO":
        {
          this.completeTodo(action.id);
          this.emit("change");
          break;
        }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
