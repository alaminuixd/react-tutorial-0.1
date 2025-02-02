import { createStore } from "redux";
import counterReducer from "./services/reducers/counter.reducers";

// create store
const store = createStore(counterReducer);
export default store;
