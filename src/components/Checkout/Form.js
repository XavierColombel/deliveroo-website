import React, {Component, Fragment} from "react";
import {Button, Checkbox, Form} from "semantic-ui-react"

class CheckoutForm extends Component {

    state = {
        apt: "",
        digicode: "",
        codePostal: "",
        ville: "",
        telephone: "",
        instructions: ""
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const newState = {};
        newState[name] = value;
        this.setState(newState)
    }

    render() {
        return (
            <div className="checkoutForm">
                <Form>
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
                    <Button fluid type="submit">Confirmer et payer</Button>
                </Form>
            </div>
        );
    }
}

export default CheckoutForm;