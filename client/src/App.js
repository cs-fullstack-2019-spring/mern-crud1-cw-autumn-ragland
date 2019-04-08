import React, {Component} from 'react';
import './App.css';
import ListProducts from "./component/ListProducts";
import AddProduct from "./component/AddProduct";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Products</h1>
                <Router>
                    {/*Link to add product or back to home*/}
                    <div>
                        <p><Link to={'/'}>All Products</Link></p>
                        <p><Link to={'/add'}>Add a Product</Link></p>
                        <hr/>
                    </div>

                    <Route path={'/'} exact component={ListProducts}/>
                    <Route path={'/add'} exact component={AddProduct} />
                </Router>
            </div>
        );
    }
}

export default App;
