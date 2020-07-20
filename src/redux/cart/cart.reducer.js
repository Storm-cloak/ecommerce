import { CartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        // dont need payload
      };
    default:
      return state;
  }
};

export default cartReducer;
