import dispatcher from "./Dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}
export function completeTodo(id) {
  dispatcher.dispatch({
    type: "COMPLETE_TODO",
    id
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  // dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "New todo2",
        complete: false
      },
      {
        id: 6262627272,
        text: "Completed Todo",
        complete: true
      }
    ]});
  }, 1000);
}
