import React, {Component} from "react";
import Price from 'format-price';
import LinesEllipsis from 'react-lines-ellipsis'

class Meal extends Component {
    render() {
        let image = null;
        if (this.props.meal.picture) {
            image = <img
                src={`${this.props.meal.picture}?width=96&height=96&auto=webp&format=jpg&fit=crop`}
                alt={this.props.meal.title}/>;
        }
        let inTheCart = this.props.quantity
            ? "inTheCart"
            : "";
        return (
            <li
                className={`item ${inTheCart}`}
                onClick={() => this.props.addMeal(this.props.meal)}>
                <div>
                    <div className="title">
                        {inTheCart
                            ? <div className="quantity">{this.props.quantity} {" "}x
                                </div>
                            : null}
                        <LinesEllipsis
                            className="mealTitle"
                            text={this.props.meal.title}
                            maxLine='1'
                            ellipsis="..."
                            trimRight
                            basedOn='letters'/>
                    </div>
                    <LinesEllipsis
                        className="description"
                        text={this.props.meal.description}
                        maxLine='2'
                        ellipsis="..."
                        trimRight
                        basedOn='words'/>
                    <span>{Price.format('fr-FR', 'EUR', this.props.meal.price)}</span>
                </div>
                {image}
            </li>
        );
    }
}

export default Meal;