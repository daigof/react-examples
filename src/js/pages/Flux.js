import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../flux/TodoActions";
import TodoStore from "../flux/TodoStore";

var Flux = React.createClass({
  getInitialState: function() {
    return {todos: TodoStore.getAll()};
  },
  componentWillMount: function() {
    // console.log(TodoStore);
    TodoStore.on("change", this.getTodos);
  },
  componentWillUnmount: function() {
    TodoStore.removeListener("change", this.getTodos);
  },
  getTodos: function() {
    this.setState({todos: TodoStore.getAll()});
  },
  reloadTodos: function() {
    TodoActions.reloadTodos();
  },
  render: function() {
    const {todos} = this.state;
    const Todos = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });
    return (
      <div>
        <button onClick={this.reloadTodos}>Reload</button>
        <h2>Todos List</h2>
        <ul>{Todos}</ul>
      </div>
    );
  }

});

module.exports = Flux;
