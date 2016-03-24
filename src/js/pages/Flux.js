import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../flux/TodoActions";
import * as NotifActions from "../flux/NotifActions";
import TodoStore from "../flux/TodoStore";
import NotifStore from "../flux/NotifStore";

var Flux = React.createClass({
  getInitialState: function() {
    return {todos: TodoStore.getState(), addInputValue: '', notif: NotifStore.getState()};
  },
  componentWillMount: function() {
    // console.log(TodoStore);
    TodoStore.on("change", this.getTodos);
    NotifStore.on("change", this.getNotif);
  },
  componentWillUnmount: function() {
    TodoStore.removeListener("change", this.getTodos);
    NotifStore.removeListener("change", this.getNotif);
  },
  getTodos: function() {
    this.setState({todos: TodoStore.getState()});
  },
  getNotif: function() {
    this.setState({notif: NotifStore.getState()});
  },
  reloadTodos: function() {
    TodoActions.reloadTodos();
  },
  handleAddClick: function(e) {
    const {addInputValue} = this.state;
    TodoActions.createTodo(addInputValue);
    this.setState({addInputValue: ''});
    NotifActions.createNotif(addInputValue);
  },
  handleAddTodoChange: function(event) {
    this.setState({addInputValue: event.target.value});
  },
  handleCompleteTodo: function(id) {
    TodoActions.completeTodo(id);
  },
  render: function() {
    const {todos, addInputValue, notif} = this.state;
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
          <div class="col col-sm-4">
            <div class="alert alert-success" style={{
              marginTop: 24
            }}>
              {notif.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Flux;
