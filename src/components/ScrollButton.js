import React, { Component } from 'react';

class ScrollButton extends Component {
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        window.addEventListener('scroll', event => {
            if (window.pageYOffset > 100) {
                document.querySelector('.scroll-top-btn').style.display = 'block';
            } else if (window.pageYOffset < 100) {
                document.querySelector('.scroll-top-btn').style.display = 'none';
            }
        });
    }

    render() {
        return (
            <button className="scroll-top-btn" onClick={this.scrollToTop} title="Scroll to top">
                <i className="fas fa-angle-up"></i>
            </button>
        );
    }
}

export default ScrollButton;