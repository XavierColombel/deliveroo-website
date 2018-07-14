import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import Total from "./Total";

class Cart extends Component {

    render() {
        /* console.log("Cart", this.props); */
        let cart = <Fragment>
            <button className="btn-deliveroo w-100 inactive">Valider mon panier</button>
            <div className="listEmpty">Votre panier est vide</div>
        </Fragment>;
        if (this.props.cart.length > 0) {
            cart = [];
            !this.props.light
                ? cart.push(
                    <Link
                        key="validateButton"
                        to={{
                        pathname: '/checkout',
                        state: {
                            cart: this.props.cart,
                            shippingFees: this.props.shippingFees,
                            tip: this.props.tip,
                            restaurant: this.props.restaurant
                        }
                    }}>
                        <div className="btn-deliveroo w-100">Valider mon panier</div>
                    </Link>
                )
                : null;
            this
                .props
                .cart
                .forEach(item => {
                    cart.push(<CartItem
                        key={item.id}
                        item={item}
                        updateQuantity={this.props.updateQuantity}
                        light={this.props.light}/>)
                });
            cart.push(<Subtotal
                key="subtotal"
                cart={this.props.cart}
                shippingFees={this.props.shippingFees}/>);
            cart.push(<Total
                key="total"
                cart={this.props.cart}
                shippingFees={this.props.shippingFees}
                tip={this.props.tip}
                updateTip={this.props.updateTip}
                light={this.props.light}/>);
        }
        return (
            <div className="cart">
                <div className="box">
                    {cart}
                </div>
            </div>
        );
    }
}

export default Cart;