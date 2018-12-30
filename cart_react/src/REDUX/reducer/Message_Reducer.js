
import * as types from '../action/type';
const initialState = '';

const Message_Reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.deleteMsg:
            const msg = 'Đã xoá sản phẩm khỏi giỏ hàng';
            state = msg;
            return state;

        case types.addToCartMsg:
            return 'Đã thêm sản phẩm vào giỏ hàng';
           
        default:
            return state
    }
}

export default  Message_Reducer;
