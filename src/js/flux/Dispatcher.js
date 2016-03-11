/*
DISPATCHER:
  Registry of callbacks, from stores.
  It pass the action obj. to store callback to execute the real logic in teh form of action.type and action.data.
  Manage stores dependencies by invoking callback in specific order and using waitFor()
  They send the action object to all Stores. Each Store evaulates the action.type to see if it needs to handle it.
*/
import { Dispatcher } from "flux";

export default new Dispatcher;
