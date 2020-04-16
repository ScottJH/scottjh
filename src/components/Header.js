import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="site-header bg-grey-dark">
                <div className="site-header__inner pt-6 pb-6 pr-3 pl-3 flex mx-auto my-0 max-w-lg items-center justify-between">
                    <Link to="/" className="logo"><h3>ScottJH</h3></Link>
                    <nav className="main-nav">
                        <ul>
                            <li>
                                <Link to="/privacy">Privacy</Link>
                            </li>
                            {/* <li>
                                <Link to="/styleguide">Styleguide</Link>
                            </li>
                            <li>
                                <Link to="/blocks">Blocks</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
