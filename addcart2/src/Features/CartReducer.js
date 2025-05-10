 export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
  };
  
  export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  const CartReducer = (state, action) => { // state che e old value leshe and action through e update thase
    switch (action.type) {

      case "Add":
        const newState = [...state, { ...action.data, quantity: 1 }]; // ...state juno data ama hashe ama action.data add thase

        localStorage.setItem('cart', JSON.stringify(newState)); // localStorage ma store thase data
        return newState;
  
      case "Remove":
        const removedItem = state.filter(p => p.id !== action.id); // state na data filter thase ama product ni id gotshe ane jo new state action.id ma product ni id match no thay to e data remove thay jashe

        localStorage.setItem('cart', JSON.stringify(removedItem));
        return removedItem;
  
      case "Increase":
        const addItem = state.map(p => p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p); // state na data ma map chalshe pachi product ni id sathe match thay tyare old data ...p and product na new data p.quantity + 1 add thata jashe

        // console.log("aaa", action.id)
        localStorage.setItem('cart', JSON.stringify(addItem));
        // console.log("aa", addItem)
        return addItem;
  
      case "Decrease":
        const minusItem = state.map(p => p.id === action.id ? { ...p, quantity: Math.max(p.quantity - 1, 1) } : p); // state na data ma map chalshe ane product ni id sathe match thay tyare old data ...p ane new data p.quantity - 1 mathi minus thay jashe
        
        localStorage.setItem('cart', JSON.stringify(minusItem));
        // console.log(minusItem)
        return minusItem;
  
      default:
        return state;
    }
  };
  
  export default CartReducer;