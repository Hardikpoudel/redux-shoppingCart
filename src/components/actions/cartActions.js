import * as actions from "./action-types/cart-actions";

//add cart action
export const addToCart = (id) => {
  return {
    type: actions.ADD_TO_CART,
    id,
  };
};

//remove item action
export const removeItem = (id) => {
  return {
    type: actions.REMOVE_ITEM,
    id,
  };
};

//addQuantity action
export const addQuantity = (id) => {
  return {
    type: actions.ADD_QUANTITY,
    id,
  };
};

//subtract quantity action
export const subQuantity = (id) => {
  return {
    type: actions.SUB_QUANTITY,
    id,
  };
};
