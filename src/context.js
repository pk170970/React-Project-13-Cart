import React, { useEffect, useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();
const initialState = {
  loading: false,
  totalPrice: 0,
  totalProducts: 0,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);


  const fetchData = async () => {
    dispatch({type:"LOADING"});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "GET_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  },[]);

  // const [count, setCount] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState(data);

  // function addProduct() {
  //   setCount(count + 1);
  // }

  // function reduceProduct() {
  //   setCount(count - 1);
  // }

  // function startLoading() {
  //   setLoading(true);
  // }

  // function stopLoading() {
  //   setLoading(false);
  // }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
