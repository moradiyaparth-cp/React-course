const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.data]
    

       case "Remove":

       case "Increase":

       default:
        
    }
}

export default CartReducer