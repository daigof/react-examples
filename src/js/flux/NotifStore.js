/*
STORES:
  Hold app data state and logic for a particular domain within the application.
  Register callbacks with dispatcher.
  Respond to action type using Switch statement.
  After computation stores emit change event so views can catch the new state
  Stores may depend on each other
  So main difference with Redux is taht Flux can have multiple Stores and state may mutable
*/

import {EventEmitter} from "events";

import dispatcher from "./Dispatcher";

// import {findIndex} from "lodash";

class NotifStore extends EventEmitter {
  constructor() {
    super();
    const id = Date.now();
    this.notif = {
      id: id,
      text: "Welcome to your todos list"
    };
  }

  getState() {
    return this.notif;
  }

  createNotif(textArg) {
    const id = Date.now();
    const text = `New Todo Created: \' ${textArg} \'`;
    this.notif = {
      id,
      text
    };
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_NOTIF":
        {
          this.createNotif(action.text);
          this.emit("change");
          break;
        }
      default:
    }
  }

}

const notifStore = new NotifStore;
dispatcher.register(notifStore.handleActions.bind(notifStore));

export default notifStore;
