import React, { Component } from 'react';

class ImageContent extends Component {
    render() {
        const bg = this.props.bg;
        const image = this.props.image;
        const imageAlt = this.props.imageAlt;
        const heading = this.props.heading;
        const content = this.props.content;
        let id = heading.toLowerCase().replace('.', '-').replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace( /\//g, '' )
        let sectionClasses = "block-image-content left";
        if (this.props.imageSide === 'right') {
            sectionClasses = "block-image-content right";
        }

        if (bg) {
            sectionClasses += ` bg-${bg}`
        }

        return (
            <section id={id} className={sectionClasses}>
                <div className="block-image-content__inner pt-8 pb-8">
                    <div className="row">
                        <div className="col w-full md:w-1/2 image">
                            <img src={image} alt={imageAlt} />
                        </div>
                        <div className="col w-full md:w-1/2 text">
                            <h2>{heading}</h2>
                            {content &&
                                <div dangerouslySetInnerHTML={{__html: content}} />
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImageContent;
