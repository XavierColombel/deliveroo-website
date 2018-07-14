import React, {Component, Fragment} from "react";

class CheckoutForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apt: "",
            digicode: "",
            adresse: "",
            codePostal: "",
            ville: "",
            telephone: "",
            instructions: "",
            cart: props.cart,
            shippingFees: props.shippingFees,
            tip: props.tip
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const updatedState = {};
        updatedState[name] = value;
        this.setState(updatedState)
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.restaurant.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3 className="text-strong text-center">Adresse de livraison</h3>
                    <div className="form-group">
                        <div className="input-group">
                            <label htmlFor="apt">Étage et numéro d'appartement</label>
                            <input
                                id="apt"
                                name="apt"
                                value={this.state.apt}
                                onChange={this.handleChange}
                                placeholder="Ex: Appartement n°15"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="digicode">Digicode</label>
                            <input
                                id="digicode"
                                name="digicode"
                                placeholder="Ex: B123"
                                value={this.state.digicode}
                                onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="adresse">Adresse</label>
                        <input
                            id="adresse"
                            name="adresse"
                            value={this.state.adresse}
                            onChange={this.handleChange}
                            placeholder="Ex: 42, rue des Orteaux"/>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <label htmlFor="codePostal">Code postal</label>
                            <input
                                id="codePostal"
                                name="codePostal"
                                value={this.state.codePostal}
                                onChange={this.handleChange}
                                placeholder="Ex: 75020"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="ville">Ville</label>
                            <input
                                id="ville"
                                name="ville"
                                value={this.state.ville}
                                onChange={this.handleChange}
                                placeholder="Ex: Paris"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="telephone">Numéro de téléphone</label>
                        <input
                            id="telephone"
                            name="telephone"
                            value={this.state.telephone}
                            onChange={this.handleChange}
                            placeholder="Ex: 01 79 738 728"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="telephone">Numéro de téléphone</label>
                        <textarea
                            label="Instructions pour votre livreur"
                            name="instructions"
                            value={this.state.instructions}
                            onChange={this.handleChange}
                            placeholder="Ex: C'est le local avec la façade noire, côté rue. Frappez à la porte vitrée."/>
                    </div>
                    <button className="btn-deliveroo w-100" type="submit">Confirmer et payer</button>
                </form>
            </Fragment>
        );
    }

}

export default CheckoutForm;