import React, {Component, Fragment} from "react";
import Form from "./Form";
import Cart from "../Restaurant/Cart";
import "./styles.css";

class Checkout extends Component {

    render() {
        /* console.log(this.props.location.state); */
        return (
            <main>
                <div className="container checkout">
                    <div className="form"><Form
                        restaurant={this.props.location.state.restaurant}
                        cart={this.props.location.state.cart}
                        shippingFees={this.props.location.state.shippingFees}
                        tip={this.props.location.state.tip}
                        updateForm={this.updateForm}/></div>
                    <div className="cart">
                        <Cart
                            light
                            cart={this.props.location.state.cart}
                            shippingFees={this.props.location.state.shippingFees}
                            tip={this.props.location.state.tip}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default Checkout;