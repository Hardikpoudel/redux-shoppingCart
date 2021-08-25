import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import * as actions from "../actions/action-types/cart-actions";

const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Vans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_TO_CART) {
    //getting the item from the state with the dispatched ID
    let addedItem = state.items.find((item) => item.id === action.id);
    //checking if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        totalQuantity: state.totalQuantity + 1,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        totalQuantity: state.totalQuantity + 1,
      };
    }
  }

  if (action.type === actions.REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,

      totalQuantity: state.totalQuantity - 1,
    };
  }
  if (action.type === actions.ADD_QUANTITY) {
    let addItems = state.items.find((item) => action.id === item.id);
    addItems.quantity += 1;
    //for calculating the new grand total
    let newTotal = state.total + addItems.price;
    return {
      ...state,
      total: newTotal,

      totalQuantity: state.totalQuantity + 1,
    };
  }
  if (action.type === actions.SUB_QUANTITY) {
    let subtractItem = state.items.find((item) => item.id === action.id);
    //we need to remove the item if the quantity is 1
    if (subtractItem.quantity === 1) {
      let newItems = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - subtractItem.price;
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
        totalQuantity: state.totalQuantity - 1,
      };
    } else {
      subtractItem.quantity -= 1;
      let newTotal = state.total - subtractItem.price;
      return {
        ...state,
        total: newTotal,
        totalQuantity: state.totalQuantity - 1,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
