import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const bgImage = this.props.bgImage;
        const projectName = this.props.projectName;
        const projectLink = this.props.projectLink;
        const projectSummary = this.props.projectSummary;

        return (
            <section className="block-project" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="block-project__inner">
                    <div className="row">
                        <div className="col full">
                            {
                                projectName && <h2>{projectName}</h2>
                            }
                            {
                                projectLink && <h5><a href={projectLink} target="_blank">View Site</a></h5>
                            }
                            {
                                projectSummary && <p className="text-4xl">{projectSummary}</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Project;
