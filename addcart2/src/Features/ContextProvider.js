import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext(); // data share kare ane provider return kare jethi data che e child component access kari shake, store create thay

const ContextProvider = ({ children }) => {

  const storeData = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, dispatch] = useReducer(CartReducer, [], storeData); // dispatch -> CartReducer ne action send kare,  [] -> initial value che cart ni, storeData -> ani value CartReducer mathi avshe ane store thase

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;