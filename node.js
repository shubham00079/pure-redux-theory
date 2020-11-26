const redux = require("redux");
const createStore = redux.createStore;

const NUM_REDUCE = "NUM_REDUCE";
const NUM_INCREASE = "NUM_INCREASE";

const initialState = {
  number: 10,
  num: 5,
};

// const numDecreaseState = {
//   num: 5,
// };

function decreaseNum() {
  return {
    type: NUM_REDUCE,
  };
}

function updateNum() {
  return {
    type: NUM_INCREASE,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NUM_REDUCE:
      return {
        ...state,
        number: state.number - 1,
      };
    case NUM_INCREASE:
      return {
        ...state,
        num: num + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("Updated State", store.getState()));
store.dispatch(decreaseNum());
store.dispatch(decreaseNum());
store.dispatch(updateNum());
store.dispatch(updateNum());
