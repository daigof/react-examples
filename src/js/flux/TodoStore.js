import {EventEmitter} from "events";

import dispatcher from "./Dispatcher";

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

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
    case "CREATE_TODO":
      {
        this.createTodo(action.text);
      }
    case "RECEIVE_TODOS":
      {
        this.todos = action.todos;
        this.emit("change");
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
