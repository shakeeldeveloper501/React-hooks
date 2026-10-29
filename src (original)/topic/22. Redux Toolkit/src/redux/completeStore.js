import { createStore } from "redux";

const initialState = {
  products: {
    items: [],
    loading: false,
    error: null,
  },
};

// Reducer
const productReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          items: [...state.products.items, action.payload],
        },
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: {
          ...state.products,
          items: [...state.products.items, action.payload],
        },
      };

    default:
      return state;
  }
};

// Store
const store = createStore(productReducer);
export default store;

// Step 1: Products set karo
store.dispatch({
  type: "SET_PRODUCTS",
  payload: [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
  ],
});

// Step 2: Naya product add karo
// store.dispatch({
//   type: "ADD_PRODUCT",
//   payload: { id: 6, name: "Usman" },
// });

// Updated state
// console.log(store.getState());
