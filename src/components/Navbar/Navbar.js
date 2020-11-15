import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index)=> {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}

export default Navbar