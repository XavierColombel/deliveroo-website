import React, {Component} from "react";
import Price from 'format-price';

class Total extends Component {
    render() {
        let total = 0;
        this
            .props
            .cart
            .forEach(item => {
                total += item.price * item.quantity;
            });
        total += this.props.shippingFees;
        total += this.props.tip;
        return (
            <div className="total">
                <hr/>
                <div className="totalInfos">
                    <div className="description">Pourboire au livreur</div>
                    <div className="pourboire">
                        <div className="decrement" onClick={() => this.props.updateTip(-1)}>
                            <i className="fas fa-minus-circle"></i>
                        </div>
                        <div className="increment" onClick={() => this.props.updateTip(1)}>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </div>
                    <div className="price">{Price.format('fr-FR', 'EUR', this.props.tip)}</div>
                </div>
                <div className="totalInfos">
                    <div className="description text-strong">Total</div>
                    <div className="price text-strong">{Price.format('fr-FR', 'EUR', total)}</div>
                </div>
            </div>
        );
    }
}

export default Total;