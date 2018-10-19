import React, { Component } from 'react';

class About extends Component {
    componentDidMount() {
        const windowHeight = window.innerHeight;
        document.querySelector('#portfolio-btn').addEventListener('click', () => {
            window.scrollBy(0, windowHeight);
        });
    }

    render() {
        return (
            <section className="section" id="home">
                <h2 className="section-title">About Me</h2>
                <div className="container-row">
                    <div className="info-image"></div>
                    <div className="info-text">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu quam scelerisque, varius leo eu, vulputate enim. In et est quis mauris vestibulum interdum dictum eu ante. Praesent interdum lobortis orci et imperdiet. Fusce tempor, arcu id convallis blandit, sem velit molestie risus, non commodo risus felis id tellus. Ut porta lectus arcu, vel commodo neque pellentesque accumsan. Suspendisse urna enim, sagittis quis finibus lacinia, hendrerit vel odio.
                        </p>
                        <p>
                        Nullam tristique purus non arcu hendrerit porta. Nunc id tellus suscipit, posuere augue at, eleifend massa. Quisque tempus, purus quis interdum laoreet, erat nisl ornare lectus, in eleifend leo odio fringilla lorem. Mauris id posuere purus. Suspendisse elementum lacus at quam laoreet hendrerit. Etiam leo leo, hendrerit ac molestie eget, tempor eget velit.
                        </p>
                        <button className="primary-btn" id="portfolio-btn">MY PORTFOLIO</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;