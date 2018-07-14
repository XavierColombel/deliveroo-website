import React, {Component, Fragment} from "react";
import {injectStripe, CardElement, CardNumberElement} from 'react-stripe-elements';
import {Button, Checkbox, Form} from "semantic-ui-react"
import axios from "axios"

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

    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh
        // the page.
        ev.preventDefault();

        // Within the context of `Elements`, this call to createToken knows which
        // Element to tokenize, since there's only one in this group.
        this
            .props
            .stripe
            .createToken({name: 'Jenny Rosen'})
            .then(({token}) => {
                console.log('Received Stripe token:', token);
                axios.post("https://2e3da082.ngrok.io/api", {
                    order: {
                        ...this.state
                    },
                    token: token
                }).then(response => {
                    console.log("response", response.data);
                }).catch(err => {
                    console.log(err);
                })
            });

        /*  */

        // However, this line of code will do the same thing:
        //
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'}); You can
        // also use createSource to create Sources. See our Sources documentation for
        // more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
        //
        // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
    };

    render() {
        this
            .props
            .stripe
            .elements({
                fonts: [
                    {
                        cssSrc: "https://fonts.googleapis.com/css?family=Open+Sans"
                    }
                ]
            });
        return (
            <div className="checkoutForm">
                <Form onSubmit={this.handleSubmit}>
                    <h2>{this.props.restaurant.name}</h2>
                    <h3 className="text-strong text-center">Adresse de livraison</h3>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label="Étage et numéro d'appartement"
                            name="apt"
                            value={this.state.apt}
                            onChange={this.handleChange}
                            placeholder="Ex: Appartement n°15"/>
                        <Form.Input
                            fluid
                            label="Digicode"
                            placeholder="Ex: B123"
                            name="digicode"
                            value={this.state.digicode}
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Input
                        fluid
                        label="Adresse"
                        name="adresse"
                        value={this.state.adresse}
                        onChange={this.handleChange}
                        placeholder="Ex: 42, rue des Orteaux"/>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label="Code Postal"
                            name="codePostal"
                            value={this.state.codePostal}
                            onChange={this.handleChange}
                            placeholder="Ex: 75020"/>
                        <Form.Input
                            fluid
                            label="Ville"
                            name="ville"
                            value={this.state.ville}
                            onChange={this.handleChange}
                            placeholder="Ex: Paris"/>
                    </Form.Group>
                    <Form.Input
                        fluid
                        label="Numéro de téléphone"
                        name="telephone"
                        value={this.state.telephone}
                        onChange={this.handleChange}
                        placeholder="Ex: 01 79 738 728"/>
                    <Form.TextArea
                        fluid
                        label="Instructions pour votre livreur"
                        name="instructions"
                        value={this.state.instructions}
                        onChange={this.handleChange}
                        placeholder="Ex: C'est le local avec la façade noire, côté rue. Frappez à la porte vitrée."/>
                    <CardNumberElement
                        style={{/* base: { color: '#32325d', lineHeight: '18px', fontFamily: '"Stratos Deliveroo Web", Helvetica, sans-serif', fontSmoothing: 'antialiased', fontSize: '16px', '::placeholder': { color: '#aab7c4' } }, invalid: { color: '#fa755a', iconColor: '#fa755a' } */
                    }}/>
                    <Button fluid type="submit">Confirmer et payer</Button>
                </Form>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);
