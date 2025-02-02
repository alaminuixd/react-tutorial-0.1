import { DECREMENT, INCREMENT, RESET } from "../constants/counter.constants";

// initial count
const iniCount = { count: 0 };
// reducer
const counterReducer = (state = iniCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count < 20 ? state.count + 1 : state.count,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
export default counterReducer;
