import React, { Component } from 'react';

import '../App.css';

class Item extends Component {


    onAddToCart=(product)=>{
        this.props.add(product);

    }

    render() {
        const {id,image,name,description,price} = this.props.item;
        return (
                <div className="item">
                    <img src={require('../images/aothun.jpeg')} alt="" />
                    <h6>{name}</h6>
                    <p className="description">{description}</p>
                    <p className="price">{price}</p>
                    <div className="wrap_btn_add">
                        <button type="button" onClick={()=>this.onAddToCart(this.props.item)}  className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
        );
    }
}

export default Item;
