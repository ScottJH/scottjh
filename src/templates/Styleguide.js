import React, { Component } from 'react';
import StyledElements from '../components/StyledElements.js';
import Banner from '../blocks/Banner'

class Styleguide extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Styleguide" />
                <div className="main-container" role="main">
                    <div className="inner">
                        <div className="row">
                            <div className="bg-grey p-4 w-full md:w-1/2">
                                <StyledElements />
                            </div>
                            <div className="bg-grey-dark p-4 w-full md:w-1/2">
                                <StyledElements />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Styleguide;
