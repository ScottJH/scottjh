import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';

class Auth extends Component {
    render() {
        
        const search = window.location.search.substring(1);
        
        return (
            <div className="wrapper">
                <Banner title="Auth Page" />
                <div className="main-container" role="main">
                <Columns
                        columns = {
                            [
                                `<p>Copy params below</p>
                                <code>${search}</code>`
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Auth;
