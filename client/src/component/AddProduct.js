import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_ID: 0,
            price: '',
            quantity: 0,
        };
    }
    //update based on form
    updateID = (e) => {
        this.setState({product_ID:e.target.value})
    };
    updatePrice = (e) => {
        this.setState({price:e.target.value})
    };
    updateQuantity = (e) => {
        this.setState({quantity:e.target.value})
    };
    //submission action
    submission = (e) => {
        e.preventDefault();
        let data = {
            product_ID: this.state.product_ID,
            price: this.state.price,
            quantity: this.state.quantity,
        };
        return fetch('/product',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(
                this.setState({
                    product_ID: 0,
                    price: '',
                    quantity: 0,
                })
            )

    };
    //form
    render() {
        return (
            <form onSubmit={this.submission}>

                <div>
                    <label>Product ID</label>
                    <input type="text" value={this.state.product_ID} onChange={this.updateID}/>
                </div>

                <br/>

                <div>
                    <label>Price</label>
                    <input type="text" value={this.state.price} onChange={this.updatePrice}/>
                </div>

                <br/>

                <div>
                    <label>Quantity</label>
                    <input type="text" value={this.state.quantity} onChange={this.updateQuantity}/>
                </div>

                <br/>

                <div>
                    <input type="submit" value='Add Product'/>
                </div>
            </form>
        );
    }
}

export default AddProduct;