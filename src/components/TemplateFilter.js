import React, { Component } from 'react';

class TemplateFilter extends Component {
    randomColor() {
        let randNum = Math.floor(Math.random() * 5);
        switch(randNum) {
            case 1;
                let something;
                break;
        }
    }

    render() {
        return (
            <div className="container-space-evenly">
                <div className="filter-box">Free</div>
                <div className="filter-box">Paid</div>
                <div className="filter-box">Bootstrap</div>
                <div className="filter-box">Foundation</div>
                <div className="filter-box">HTML & CSS</div>
            </div>
        );
    }
}

export default TemplateFilter;