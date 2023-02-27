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
                        imageAlt="Portrait of me, Scott Haselwood"
                        content= {
                            [
                                `<p>My name is Scott J Haselwood. I am a web developer, cartoonist and illustrator living in Portland, OR. I work at <a href="https://www.wearefine.com/" target="_blank">FINE</a>. Contact me if you want to connect about web development or illustration projects.</p>
                                <p>You can also check out <a href="/my-links">my links</a>.</p>`
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Home;
