import React, { Component } from 'react';
import projects from '../projects';


class Portfolio extends Component {
    render() {
        const projectArray = projects.map(proj => {

            return (
                <div className="card" key={proj.key}>
                    <div className="cover" style={{ background: `url(${proj.imageLink})` }}></div>
                    <div className="card-hidden">
                        <p className="card-title">{proj.title}</p>
                        <p className="card-text">{proj.content}</p>
                        <a href={proj.link} className="card-btn">View</a>
                    </div>
                </div>
            );
        });

        return (
            <section className="section-alt" id="portfolio">
                <h2 className="section-title" style={{ color: '#69DCE8' }}>Portfolio</h2>
                <div className="cards">
                    {projectArray}
                </div>
            </section>
        );
    }
}

export default Portfolio;