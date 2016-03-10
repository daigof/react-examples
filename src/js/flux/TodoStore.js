import {EventEmitter} from "events";

import dispatcher from "./Dispatcher";

import {findIndex} from "lodash";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Original todo",
        complete: false
      }, {
        id: 235684679,
        text: "Original 2",
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({id, text, complete: false});
  }
  completeTodo(id) {
    const todoIndex = findIndex(this.todos, (i) => i.id === id);
    this.todos[todoIndex].complete = true;
  }

  getAll() {
    return this.todos;
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
