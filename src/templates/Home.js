import React, { Component } from 'react';
import {Banner, ImageContent, Columns} from '../blocks';

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Scott J Haselwood"/>
                <div className="main-container" role="main">
                <ImageContent
                        imageSide="left"
                        image={require('../assets/images/headshot@2x.jpg')}
                        heading="Hello!"
                        content="My name is Scott J Haselwood. I am a web developer living in Portland, OR. Contact me if you like what you see."
                    />
                </div>
            </div>
        )
    }
}

export default Home;
