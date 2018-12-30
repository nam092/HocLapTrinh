import React, { Component } from 'react'

import {actDeleteToCart,actDeleteMsg,actEditCart} from '../REDUX/action/index'

import {connect} from 'react-redux'
import CartItem from './CartItem';
class Cart extends Component {

  constructor(){
    super();
    this.state={
      summary:'',
    }
  }

  
  deleteItem=(item)=>{
    this.props.onDeleteItem(item);
    this.props.onDeleteMsg();
  }

  update_cart=()=>{

  }



  render() {
    let arr_items = this.props.list_cart;
    var sum = 0;
    arr_items.forEach(item => {
      sum = sum + (item.product.price * item.quantity);
    });
    const renderCart = this.props.list_cart.map((obj,index)=>{
      return(
        // <tr key={index}>
        //   <td>{obj.product.id}</td>
        //   <td>{obj.product.name}</td>
        //   <td>{obj.product.price}</td>
        //   <td>
        //       <button>+</button>
        //       <input type="text" name=""  value={obj.quantity} id=""/>
        //       <button>-</button>
        //   </td>
        //   <td><button type="button" class="btn btn-danger" onClick={()=>this.deleteItem(obj.product)}>Delete</button></td>
        // </tr>
        <CartItem key={index} item={obj} onDeleteItem = {this.props.onDeleteItem} onDeleteMsg={this.props.onDeleteMsg} onEditCart={this.props.onEditCart}/>
      );
    })
    return (
      <div>
        <table className="table">
          <thead>
            <th>#</th>
            <th>tênsp</th>
            <th>gía</th>
            <th>quantity</th>
            <th>options</th>
          </thead>
          <tbody>
          {renderCart}
          </tbody>
        </table>
        <div className="message">
          <h4>{this.props.message}</h4>
        </div>
        <form>
          <label htmlFor="">Tổng tiền</label>
          <input type="text" name="summary" value={sum} disabled id=""/>
          <button type="submit" class="btn btn-primary">Thanh toán</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
    list_cart : state.cartReducer,
    message: state.Message_Reducer
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteItem:(item)=>{
    dispatch(actDeleteToCart(item));
  },
  onDeleteMsg:()=>{
    dispatch(actDeleteMsg());
  },
  onEditCart:(product,quantity)=>{
    dispatch(actEditCart(product,quantity));
  }

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
