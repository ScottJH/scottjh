import React, { Component } from 'react';

class ImageFull extends Component {
    render() {
        const bg = this.props.bg;
        const image = this.props.image;
        const imageAlt = this.props.imageAlt;

        let sectionClasses = "block-image-full left";
        if (this.props.imageSide === 'right') {
            sectionClasses = "block-image-full right";
        }

        if (bg) {
            sectionClasses += ` bg-${bg}`
        }

        return (
            <section className={sectionClasses}>
                <div className="block-image-full__inner pt-8 pb-8">
                    <div className="row">
                        <div className="col w-full image">
                            <img src={image} alt={imageAlt} class="w-full block"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImageFull;
