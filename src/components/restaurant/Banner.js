import React, {Component} from "react";

class Banner extends Component {
    render() {
        /* console.log(this.props.categories); */
        return (
            <div className="banner container">
                <div className="restaurantInfos">
                    <h2>{this.props.restaurant.name}</h2>
                    <p>{this.props.restaurant.description}</p>
                </div>
                <div className="restaurantImage">
                    <img src={this.props.restaurant.picture} alt={this.props.restaurant.name}/>
                </div>
            </div>
        );
    }
}

export default Banner;