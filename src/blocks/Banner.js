import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner" role="banner">
                <div className="banner__inner mr-auto ml-auto pt-16 pb-16">
                    <div className="row">
                        <div className="col full">
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
