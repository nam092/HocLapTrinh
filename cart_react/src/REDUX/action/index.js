
import * as types from './type';

export const actAddToCart = (product,quantity) => ({
  type: types.AddToCart,
  product,
  quantity
});
export const actDeleteToCart = (product,quantity) => ({
    type: types.DeleteToCart,
    product,
    quantity,
  });

  export const actEditCart = (product,quantity) => ({
    type: types.EditCart,
    product,
    quantity,
  });

  export const actDeleteMsg = () => ({
    type: types.deleteMsg,
  });

  export const actAddToCartMsg = () => ({
    type: types.addToCartMsg,
  });
  
