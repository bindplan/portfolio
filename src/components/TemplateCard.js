import React, { Component } from 'react';

class TemplateCard extends Component {
    render() {
        const { title, description, viewLink, buttonTxt, imageLink } = this.props;

        return (
            <div className="tem-card">
                <img src={ imageLink } alt="Screenshot of template" className="tem-image" />
                <div className="tem-content">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                    <a href={ viewLink }>VIEW</a>
                    <button>{ buttonTxt.toUpperCase() }</button>
                </div>
            </div>
        );
    }
}

export default TemplateCard;