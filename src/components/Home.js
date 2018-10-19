import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                <Header title="Brandon Gonzales" subtitle="Web Designer & Graphic Designer" buttonTxt="learn more" buttonLink="/#home" />
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default Home;