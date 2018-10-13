import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <nav class="navbar-top">

            <a href="#main-menu" class="menu-toggle">
                <i class="fas fa-bars"></i>
            </a>

            <div id="main-menu" class="main-menu">
                <a href="#main-menu-toggle" class="menu-close">
                    <i class="fas fa-times"></i>
                </a>
                <ul>
                    <li><a href="./" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <a href="#main-menu-toggle" class="backdrop" hidden></a>
        </nav>
        );
    }
}

export default Navbar;