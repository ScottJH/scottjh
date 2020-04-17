import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';

class InstagramFeed extends Component {
    render() {
        
        const search = window.location.search.substring(1);
        
        return (
            <div className="wrapper">
                <Banner title="InstagramFeed Page" />
                <div className="main-container" role="main">
                <Columns
                        columns = {
                            [
                                `<p>This is my Instagram feed page</p>`
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}

export default InstagramFeed;
