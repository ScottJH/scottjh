import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="bg-grey-dark">
                <div className="header__inner pt-6 pb-6 pr-3 pl-3">
                    <div className="row">
                        <div className="full">
                            <h5>ScottJH</h5>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
