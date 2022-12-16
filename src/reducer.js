const reducer = (state, action) => {

    if(action.type==="LOADING"){
        return{...state, loading:true}
    }

    if(action.type=== "GET_ITEMS"){
        return {...state, loading:false, cart: action.payload}
    }


  if (action.type === "GET_TOTALS") {
    let dataTotal = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        console.log(cartTotal);
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    dataTotal.total = parseFloat(dataTotal.total).toFixed(2);
    return {
      ...state,
      totalPrice: dataTotal.total,
      totalProducts: dataTotal.amount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE") {
    const newItems = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      } else {
        return cartItem;
      }
    });
    return { ...state, cart: newItems };
  }

  if (action.type === "DECREASE") {
    const newItems = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          // checking when button clicked with id is same as cartitem id

          if (cartItem.amount < 1) {
            // before decreasing, we are checking that amount in cart doesn't need to be less than 1
            return { ...cartItem, amount: 0 };
          }
          return { ...cartItem, amount: cartItem.amount - 1 };
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.amount >= 1);

    return { ...state, cart: newItems };
  }

  return state;
};

export default reducer;
