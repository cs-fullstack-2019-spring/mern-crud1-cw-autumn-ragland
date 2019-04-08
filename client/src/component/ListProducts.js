import React, { Component } from 'react';

class ListProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
        this.passData();
    }
    //grab data
    passData(){
        fetch('/product')
            .then(data => data.json())
            .then(returnedData => this.setState({products:returnedData}))
    }
    //structure and render data
    render() {

        let mapData = this.state.products.map((eachEl) => {
            return(
                <div>
                    <p>product_ID: {eachEl.product_ID}</p>
                    <p>price: {eachEl.price}</p>
                    <p>quantity: {eachEl.quantity}</p>
                    <hr/>
                </div>
            )
        });

        return (
            <div>
                {mapData}
            </div>
        );
    }
}

export default ListProducts;