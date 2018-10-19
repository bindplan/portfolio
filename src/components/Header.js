import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    componentDidMount() {
        const windowHeight = window.innerHeight;
        document.querySelector(".hero-btn").addEventListener('click', () => {
            window.scrollBy(0, windowHeight);
        });
    }

    render() {
        const { title, subtitle, buttonTxt } = this.props;
        return (
            <header className="hero" id="header">
                <div className="hero-cover"></div>
                <Navbar />
                <div className="hero-mid">
                    <h1>{ title }</h1>
                    <p>{ subtitle }</p>
                    <button className="hero-btn">{ buttonTxt.toUpperCase() }</button>
                </div>
            </header>
        );
    }
}

export default Header;