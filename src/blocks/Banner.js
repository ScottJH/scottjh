import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner" role="banner">
                <div className="banner__inner mr-auto ml-auto max-w-lg pt-16 pb-16 pl-3 pr-3">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Banner;
