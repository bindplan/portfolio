import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const date = new Date();
        return (
            <footer className="section-alt">
                <p>&copy;{date.getFullYear} Brandon Gonzales. All rights Reserved.</p>
            </footer>
        );
    }
}

export default Footer;