import React, { Component } from 'react';
import {Banner, ImageContent } from '../blocks';

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
                        content= {
                            [
                                `<p>My name is Scott J Haselwood. I am a web developer living in Portland, OR. I work for <a href="https://thedaylightstudio.com/" target="_blank">Daylight</a>. Contact me if you like what you see.</p>`
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Home;
