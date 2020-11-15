import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button"
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
//change group name where it says group name
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Group Name<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }

}

export default Navbar