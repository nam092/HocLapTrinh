
import * as types from '../action/type'

var data = [];

const initialState = data;

const cartReducer = (state = initialState, action) => {
    var { product, quantity } = action;
    switch (action.type) {
        case types.AddToCart:
            var index = findProductInCart(state, action.product);
            if (index !== -1) {
                state[index].quantity += action.quantity;
            } else {
                state.push({ product, quantity });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.DeleteToCart:
            // let pos = findProductInCart(state, action.product);
            // console.log(pos);
            // state.splice(pos, 1);
            state = state.filter((product)=>product.product.id !== action.product.id)
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.EditCart:
            console.log(action.quantity)
            var i_edit = findProductInCart(state,action.product);
     
            state[i_edit].quantity = action.quantity;
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];



        default:
            return [...state];
    }
}


var findProductInCart = (cart, product) => {
    var i = -1;
    if (cart.length > 0) {
        for (let t = 0; t < cart.length; t++) {
            if (cart[t].product.id === product.id) {
                i = t;
                break;
            }
        }
    }
    return i;
}

export default cartReducer;
