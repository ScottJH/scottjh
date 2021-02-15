import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';

class Resume extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Resume for Scott J Haselwood" />
                <div className="main-container" role="main">
                <Columns
                    columns = {
                        [
                            `<p><a href="https://my.indeed.com/p/scotth-k1oj6u4" target="_blank" rel="noopener noreferrer" class="btn">View Resume on Indeed</a></p>`,
                            `<p><a href="https://my.indeed.com/p/scotth-k1oj6u4" target="_blank" rel="noopener noreferrer" class="btn">View Resume on Indeed</a></p>`,
                            `<p><a href="https://my.indeed.com/p/scotth-k1oj6u4" target="_blank" rel="noopener noreferrer" class="btn">View Resume on Indeed</a></p>`
                        ]
                    }
                />
                </div>
            </div>
        )
    }
}

export default Resume;
