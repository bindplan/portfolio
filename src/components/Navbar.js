import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar-top">

            <a href="#main-menu" className="menu-toggle">
                <i className="fas fa-bars"></i>
            </a>

            <div id="main-menu" className="main-menu">
                <a href="#main-menu-toggle" className="menu-close">
                    <i className="fas fa-times"></i>
                </a>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/templates">Templates</a></li>
                </ul>
            </div>
            <a href="#main-menu-toggle" className="backdrop" hidden></a>
        </nav>
        );
    }
}

export default Navbar;