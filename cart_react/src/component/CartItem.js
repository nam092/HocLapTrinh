import React, { Component } from 'react'

export default class CartItem extends Component {

    constructor(){
        super();
        this.state={
            quantity:1
        }
    }

    deleteItem=async(item)=>{
        await this.props.onDeleteItem(item);
        await this.props.onDeleteMsg();
    }
   
    componentDidMount(){
        this.setState({
            quantity: this.props.item.quantity
        })
    }


    cong=async(quantity)=>{
        quantity += 1;
        await this.props.onEditCart(this.props.item.product,quantity);
    }

    tru=async(quantity)=>{
        quantity -= 1;
        if(quantity < 1){
            await window.alert('số lượng sản phẩm ko đc bé hơn 1');
            quantity = 1;
        }
        await this.props.onEditCart(this.props.item.product,quantity);
    }

    render() {
        const {item} = this.props;
        const quantity = this.props.item.quantity;
        
   
        return (
                <tr>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td>
                        <button onClick={()=>this.cong(quantity)}>+</button>
                        <input type="text" name="txtQuantity" value={quantity} id="quantity" />
                        <button onClick={()=>this.tru(quantity)}>-</button>
                    </td>
                    <td><button type="button" class="btn btn-danger" onClick={() => this.deleteItem(item.product)}>Delete</button></td>
                </tr>
            
        )
    }
}
