import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Home"/>
                <div className="main-container" role="main">
                    <div className="row">
                        <div className="col full">
                            <p>Hello! My name is Scott J Haselwood.</p>
                            <p>I am a web developer living in Portland, OR. Contact me if you like what you see.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
