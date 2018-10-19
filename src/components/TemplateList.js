import React, { Component } from 'react';
import TemplateCard from './TemplateCard';
import TemplateFilter from './TemplateFilter';
import templates from '../templates';

class TemplateList extends Component {
    render() {
        const templateArray = templates.map(template => <TemplateCard title={template.title} description={template.description} buttonTxt={template.buttonTxt} viewLink={template.viewLink} imageLink={template.imageLink} />);
        return (
            <div>
                <TemplateFilter />
                <div className="container-row" id="templates">
                    
                </div>
            </div>
        );
    }
}

export default TemplateList;