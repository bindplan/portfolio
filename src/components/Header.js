import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <header className="hero" id="header">
                <div className="hero-cover"></div>
                <Navbar />
                <div className="hero-mid">
                    <h1>Brandon Gonzales</h1>
                    <p>Web Design &amp; Graphic Design</p>
                    <a href="#about" className="hero-btn">LEARN MORE</a>
                </div>
            </header>
        );
    }
}

export default Header;