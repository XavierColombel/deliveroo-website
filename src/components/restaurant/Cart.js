import React, {Component} from "react";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import Total from "./Total";

class Cart extends Component {

    render() {
        /* console.log(this.props.cart); */
        let list = <div className="listEmpty">Votre panier est vide</div>;
        let activeClass = "";
        if (this.props.cart.length > 0) {
            list = [];
            this
                .props
                .cart
                .forEach(item => {
                    list.push(<CartItem key={item.id} item={item} updateQuantity={this.props.updateQuantity}/>)
                });
            list.push(<Subtotal
                key="subtotal"
                cart={this.props.cart}
                shippingFees={this.props.shippingFees}/>);
            list.push(<Total
                key="total"
                cart={this.props.cart}
                shippingFees={this.props.shippingFees}
                tip={this.props.tip}
                updateTip={this.props.updateTip}/>);
            activeClass = "active";
        }
        return (
            <div className="cart">
                <div className="box">
                    <div className={`buttonCart ${activeClass}`}>Valider mon panier</div>
                    {list}
                </div>
            </div>
        );
    }
}

export default Cart;