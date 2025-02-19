import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext(); //store create thay, data share kare ane provider return kare jethi data che e child component access kari shake

const ContextProvider = ({ children }) => {

  const storeData = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, dispatch] = useReducer(CartReducer, [], storeData); // dispatch -> CartReducer ne action send kare,  [] -> initial value che cart ni, storeData -> ani value CartReducer mathi avshe ane store thase

  return (
    
    // {/* store create karelo che eni value badha page ne mali re e mate Provider ni help thi store pass karavi didho */}
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;