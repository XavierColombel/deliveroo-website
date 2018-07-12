import React, {Component} from "react";
import Meal from "./Meal";
import Cart from "./Cart";

class Menu extends Component {

    render() {
        const keys = Object.keys(this.props.menu);
        const meals = [];
        keys.forEach(key => {
            if (this.props.menu[key].length > 0) {
                meals.push(
                    <h2 key={`title-${key}`}>{key}</h2>
                );
                const items = [];
                this
                    .props
                    .menu[key]
                    .forEach(meal => {
                        items.push(<Meal key={meal.id} meal={meal} addMeal={this.props.addMeal}/>)
                    });
                meals.push(
                    <ul key={`list-${key}`} className="items">{items}</ul>
                )
            }
        });
        return (
            <main>
                <div className="container menu">
                    <div className="meals">{meals}</div>
                    <Cart
                        cart={this.props.cart}
                        shippingFees={this.props.shippingFees}
                        tip={this.props.tip}
                        updateQuantity={this.props.updateQuantity}
                        updateTip={this.props.updateTip}/>
                </div>
            </main>
        );
    }

}

export default Menu;