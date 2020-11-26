const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_ CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// State->>
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

// Action->
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Reducers->
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// Acton describes what happens.
//--> An action is an object with type
// property having value (string constant)
//--> An action creator is a function that
// returns an action

//--> Reducers specify h ow the app's state
// change in response to actions sent to
// the store.
// Function that accepts state and action as
// arguments, & returns the next state of the app.
//  (previousState, action) => newState

//--> Store
// One store for entire app
// 1 Holds app state,
// 2 Alows access to state via getState(),
// 3 Allows state to be updated via dispatch(action)
// 4 Registers listeners via subscribe(listener)
// 5 Handles unregistering of listeners via the func returned
// by subscribe(listener)
