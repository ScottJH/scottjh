import React, { Component } from 'react';
import {Banner, Project, ImageContent, Columns} from '../blocks';

class Blocks extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Blocks"/>
                <div className="main-container" role="main">
                    <Project
                        bgImage={require('../assets/images/portfolio/bigals.jpg')}
                        projectName="Big Al's"
                        projectLink="https://www.ilovebigals.com/beaverton/"
                        projectSummary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, veniam maiores repellat! Vel accusantium repellendus commodi minus ad et asperiores nulla, possimus nam nemo deleniti nihil! Cum, fugit modi aspernatur!"
                    />
                    <ImageContent
                        imageSide="left"
                        image={require('../assets/images/portfolio/bigals-location.jpg')}
                        heading="Geo Location"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo mollitia, magnam numquam ipsa porro commodi iure sit, quaerat accusantium id quasi ducimus inventore dolorem veniam libero qui atque in!"
                    />
                    <ImageContent
                        bg="grey-dark"
                        imageSide="right"
                        image={require('../assets/images/portfolio/bigals-filtering.jpg')}
                        heading="Events Filtering"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo mollitia, magnam numquam ipsa porro commodi iure sit, quaerat accusantium id quasi ducimus inventore dolorem veniam libero qui atque in!"
                    />

                    <Columns
                        columns = {
                            [
                                `<h2>Content Block</h2>`,
                                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>`
                            ]
                        }
                    />
                    <Columns
                        bg="grey-dark"
                        columns = {
                            [
                                `<h2>Content Block</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>`
                            ]
                        }
                    />
                    <Columns
                        columns = {
                            [
                                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>`,
                                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>`,
                                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>`
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Blocks;
