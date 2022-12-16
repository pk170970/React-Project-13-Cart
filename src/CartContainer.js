import React from "react";
import CartItem from "./CartItem";

import { useGlobalContext } from "./context";

const CartContainer = () => {
  const {cart,totalPrice, clearItems}= useGlobalContext();

  

  if(cart.length ===0){
    return (
      <section className="cart">
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cart.map((item ,index)=>{
          return(
            <CartItem key={index}  {...item} />
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span> $ {totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearItems}>Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
