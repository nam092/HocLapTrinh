import React, { Component } from 'react';

import '../App.css';
import { connect } from 'react-redux'
import Item from './itemProduct'
import { actAddToCart, actAddToCartMsg } from '../REDUX/action'
import { withRouter } from 'react-router-dom'




class ListProduct extends Component {
  render() {

    const list = this.props.datalist;
    console.log(list);
    var renderList = list.map((obj, key) => {
      return (
        <Item key={key} item={obj.product} add={this.props.addToCart} msg={this.props.actAddToCartMsg} />
      );
    })
    return (

      <div>
        <div className="header">
          <div className="row">
            <div className="col">
              <div className="header_left">
                <p>Demo Giỏ hàng</p>
              </div>
            </div>
            <div className="col">
              <form>
                <div className="form-group">
                  <input type="text"
                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  <h4>{this.props.message}</h4>
                </div>
              </form>
            </div>
            <div className="col">
              <i className="fa fa-shopping-cart"></i>Giỏ hàng
              </div>
          </div>
        </div>
        <div className="container_cart">
          <div className="wrapper">
            {renderList}
          </div>
        </div>


        <div className="giohang">
          <div className="container_giohang">
            <div className="title_giohang">
              <h4>Giỏ hàng</h4>
            </div>
          </div>
        </div>





      </div>





    );
  }
}

const mapStateToProps = (state) => ({
  datalist: state.product,
  message: state.Message_Reducer
})


const mapDispatchToProps = (dispatch, props) => ({
  addToCart: (product) => {
    dispatch(actAddToCart(product, 1));
  },
  addMsg: (product) => {
    dispatch(actAddToCartMsg);
  }
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListProduct));