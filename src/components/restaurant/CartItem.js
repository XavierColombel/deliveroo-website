import React, {Component} from "react";
import Price from 'format-price';

class CartItem extends Component {
    render() {
        /* console.log(this.props.item); */
        return (
            <div className="cartItem">
                <div className="cartItemButtons">
                    <div
                        className="decrement"
                        onClick={() => this.props.updateQuantity(this.props.item.id, -1)}>
                        <i className="fas fa-minus-circle"></i>
                    </div>
                    <div>{this.props.item.quantity}</div>
                    <div
                        className="increment"
                        onClick={() => this.props.updateQuantity(this.props.item.id, 1)}>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
                <div className="cartItemInfos">
                    <div className="description">{this.props.item.title}</div>
                    <div className="price">{Price.format('fr-FR', 'EUR', this.props.item.price * this.props.item.quantity)}</div>
                </div>
            </div>
        );
    }
}

export default CartItem;