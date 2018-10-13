import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="section" id="contact">
                <h2 className="section-title">Contact Me</h2>
                <form method="post" className="container">
                    <div className="container-row">
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <textarea placeholder="Message" rows="5"></textarea>
                    <br/>
                    <button type="submit" className="primary-btn">Send Message</button>
                </form>
                <ul className="social-icons">
                    <li title="Twitter"><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
                    <li title="Discord"><a href="javascript:void(0);"><i className="fab fa-discord"></i></a></li>
                </ul>
            </section>
        );
    }
}

export default Contact;