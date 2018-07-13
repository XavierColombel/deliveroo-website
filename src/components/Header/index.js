import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <img
                        src="https://cwa.roocdn.com/_next/static/logo-teal.64a39561.svg"
                        className="logo"
                        alt="Logo Deliveroo"/>
                </div>
            </header>
        );
    }
}

export default Header;