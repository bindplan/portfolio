import React, { Component } from 'react';
import Header from './Header';
import TemplateList from './TemplateList';

class Templates extends Component {
    render() {
        return (
            <div>
                <Header title="Website Templates" subtitle="Various templates made in HTML & CSS. Some are Bootstrap and some are Foundation templates." buttonTxt="view templates" />
                <TemplateList />
            </div>
        );
    }
}

export default Templates;