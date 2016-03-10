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
        <h2>Todos List</h2>
        <ul>{Todos}</ul>
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <button class="btn btn-info" onClick={this.reloadTodos}>Fetch from server</button>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = Flux;
