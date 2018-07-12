import React, {Component} from "react";
import Price from 'format-price';

class Subtotal extends Component {
    render() {
        let subtotal = 0;
        this
            .props
            .cart
            .forEach(item => {
                subtotal += item.price * item.quantity;
            });
        subtotal += this.props.shippingFees;
        return (
            <div className="subtotal">
                <hr/>
                <div className="subtotalInfos">
                    <div className="description">Frais de livraison</div>
                    <div className="price">{Price.format('fr-FR', 'EUR', this.props.shippingFees)}</div>
                </div>
                <div className="subtotalInfos">
                    <div className="description">Sous-total</div>
                    <div className="price">{Price.format('fr-FR', 'EUR', subtotal)}</div>
                </div>
            </div>
        );
    }
}

export default Subtotal;