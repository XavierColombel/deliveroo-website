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
        return (
            <li className="item" onClick={() => this.props.addMeal(this.props.meal)}>
                <div>
                    <h3>{this.props.meal.title}</h3>
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