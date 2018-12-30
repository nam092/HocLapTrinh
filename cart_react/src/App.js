import React, { Component } from 'react';

import './App.css';

import { Switch, Route,Link } from 'react-router-dom'
import ListProduct from './component/listProduct';
import Cart from './component/Cart';





class App extends Component {
  render() {
    return (
      <div>
     <ul>
          <li><Link to="/list">Danh sách sản phẩm</Link></li>
          <li><Link to="/giohang">Giỏ hàng</Link></li>
       
        </ul>
        <Switch>
          <Route  exact path="/list" component={ListProduct} />
          <Route  path="/giohang" component={Cart} />
        </Switch>
      </div>
    );
  }
}



export default App;