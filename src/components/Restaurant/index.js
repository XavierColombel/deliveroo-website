import React, {Component} from "react";
import axios from "axios";

import Banner from "./Banner";
import Menu from "./Menu";

class Restaurant extends Component {

    state = {
        isLoading: true,
        restaurant: {},
        menu: {},
        cart: [],
        shippingFees: 2.5,
        tip: 0
    }

    /* FONCTION POUR RECUPERER LES DATAS DU RESTAURANT */
    getInfos = () => {
        axios
            .get("https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart." +
                "json", {crossdomain: true})
            .then(response => {
                this.setState({isLoading: false, restaurant: response.data.restaurant, menu: response.data.menu});
            })
            .catch(error => {
                console.log(error);
            });
    }

    /* ADD MEAL TO CART */
    addMeal = (meal) => {
        /* console.log(meal); */
        const newCart = [...this.state.cart];
        let isInCart = false;
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === meal.id) {
                isInCart = true;
                newCart[i].quantity++;
                break;
            }
        }
        if (!isInCart) {
            newCart.push({id: meal.id, price: meal.price, title: meal.title, description: meal.description, quantity: 1})
        }
        this.setState({cart: newCart})
    }

    /* UPDATE TIP */
    updateTip = (value) => {
        if (this.state.tip + value >= 0) {
            this.setState({
                tip: this.state.tip + value
            });
        }
    }

    /* UPDATE QUANTITY */
    updateQuantity = (id, value) => {
        const newCart = [...this.state.cart];
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].id === id) {
                if (newCart[i].quantity + value > 0) {
                    newCart[i].quantity += value;
                } else {
                    newCart.splice(i, 1);
                }
            }
        }
        let tip = this.state.tip;
        if (!newCart.length) {
            tip = 0;
        }
        this.setState({cart: newCart, tip})
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <div>
                    <Banner
                        restaurant={this.state.restaurant}
                        categories={Object.keys(this.state.menu)}/>
                    <Menu
                        addMeal={this.addMeal}
                        menu={this.state.menu}
                        restaurant={this.state.restaurant}
                        cart={this.state.cart}
                        shippingFees={this.state.shippingFees}
                        tip={this.state.tip}
                        updateQuantity={this.updateQuantity}
                        updateTip={this.updateTip}/>
                </div>
            );
        }
        return <div></div>;
    }

    componentDidMount() {
        this.getInfos();
    }
}

export default Restaurant;