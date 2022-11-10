import {
    ADD_ORDER,
    ADD_TO_CART,
    CLEAR_CART,
 GET_PRODUCTS,
 UPDATE_QUANTITY,
}from "./actionTypes"

const productState = [];


export const productReducer = (state=productState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:{
            return action.payload
        }
        default :{
            return state
        }
    }
}

const cartState = []

export const cartReducer = (state = cartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const ns = state.filter((e) => e.id !== action.payload.id);
        return [...ns, { ...action.payload, quantity: 1 }];
      case UPDATE_QUANTITY:
        const newState = [...state];
        newState.forEach((product) => {
          if (product.id == action.payload.id) {
            product.quantity = action.payload.quantity;
          }
  
          return newState;
        });
      case CLEAR_CART:
        return [];
      default:
        return state;
    }
  };

  const orderState = [];

export const orderReducer = (state = orderState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
}