import React, { Component } from 'react';
import {Banner, ImageFull, Columns } from '../blocks';

class Illustration extends Component {
    render() {
        return (
            <div class="wrapper">
                <Banner title="Cartoonist and Illustrator"/>
                <Columns
                    columns = {
                        [
                            `<h2>Editorail Cartoons for Linkage Mag</h2>`,
                            `<p>Since January, 2021, I have been creating humorous cartoons for Jay Leno's "Funny That You Ask" column in <a href="https://linkagemag.com/" target="_blank">Linkage Mag</a>. Below are a selection of my favorites.</p>`
                        ]
                    }
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/tim-jay-race-linkage-011.jpg')}
                    imageAlt="Jay Leno and Tim Allen drag race"
                />
                                <ImageFull
                    image={require('../assets/images/portfolio/illustration/linkage-008.jpg')}
                    imageAlt="Jay Leno discovers car under trash"
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/linkage-006-knowledge.jpg')}
                    imageAlt="Jay Leno and the knowledge of automotive history"
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/jay-and-dale.jpg')}
                    imageAlt="Jay Leno and Dale Earnhardt racing"
                />
                {/* <ImageFull
                    image={require('../assets/images/portfolio/illustration/jay-chrysler-imperial.jpg')}
                    imageAlt="Jay Leno discovering a Chrysler Imperial in a garage"
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/linkage-009.jpg')}
                    imageAlt="Jay Leno give a kid a ride in a Lamborghini"
                /> */}
                
            </div>
        )
    }
}

export default Illustration;