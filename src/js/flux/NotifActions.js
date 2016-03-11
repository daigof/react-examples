/*
ACTIONS:
  Simple object dispatch to a dispatcher an action.type and action.data
  May fetch new data before disptaching the action but not good place to do calculations
*/

import dispatcher from "./Dispatcher";

export function createNotif(text) {
  dispatcher.dispatch({
    type: "CREATE_NOTIF",
    text
  });
}
