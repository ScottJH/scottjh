import React, { Component } from 'react';

class ImageContent extends Component {
    render() {
        const bg = this.props.bg;
        const image = this.props.image;
        const heading = this.props.heading;
        const content = this.props.content;

        let sectionClasses = "block-image-content left";
        if (this.props.imageSide === 'right') {
            sectionClasses = "block-image-content right";
        }

        if (bg) {
            sectionClasses += ` bg-${bg}`
        }

        return (
            <section className={sectionClasses}>
                <div className="block-image-content__inner pt-8 pb-8">
                    <div className="row">
                        <div className="col w-full md:w-1/2 image">
                            <img src={image} alt="Place Cage"/>
                        </div>
                        <div className="col w-full md:w-1/2 text">
                            <h2>{heading}</h2>
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImageContent;
