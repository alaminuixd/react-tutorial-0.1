import { INCREMENT, DECREMENT, RESET } from "./../constants/counter.constants";
export const incCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
