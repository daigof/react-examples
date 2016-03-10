import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../flux/TodoActions";
import TodoStore from "../flux/TodoStore";

var Flux = React.createClass({
  getInitialState: function() {
    return {todos: TodoStore.getAll(), addInputValue: ''};
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
  handleAddClick: function(e) {
    const {addInputValue}=this.state;
    TodoActions.createTodo(addInputValue);
    this.setState({addInputValue: ''});
  },
  handleAddTodoChange: function(event) {
    this.setState({addInputValue: event.target.value});
  },
  handleCompleteTodo: function(id) {
    TodoActions.completeTodo(id);
  },
  render: function() {
    const {todos, addInputValue} = this.state;
    const Todos = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} handleCompleteTodo={this.handleCompleteTodo}/>;
    });
    return (
      <div>
        <h2>Todos List</h2>
        <ul style={{
          marginBottom: 50
        }}>{Todos}</ul>
        <div class="row">
          <div class="col col-sm-4">
            <div class="form-group">
              <label class="control-label">Add Todo</label>
              <div class="input-group">
                <input type="text" class="form-control" onChange={this.handleAddTodoChange} value={addInputValue}></input>
                <span class="input-group-btn">
                  <button class="btn btn-success" type="button" onClick={this.handleAddClick}>Add</button>
                </span>
              </div>
            </div>
            <button class="btn btn-info btn-block" onClick={this.reloadTodos}>Fetch from server</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Flux;
