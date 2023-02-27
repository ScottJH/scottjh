import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {navOpen: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
          navOpen: !prevState.navOpen
        }));
      }
    render() {
        return (
            <header className="site-header bg-grey-dark">
                <div className="site-header__inner pt-6 pb-6 pr-3 pl-3 flex mx-auto my-0 max-w-lg items-center justify-between flex-wrap">
                    <Link to="/" className="logo"><h3>ScottJH</h3></Link>
                    <button className='md:hidden' onClick={this.handleClick}>
                        Menu
                    </button>
                    <nav 
                        className={this.state.navOpen ? 'block main-nav w-full md:w-auto md:block' : 'main-nav hidden w-full md:w-auto md:block'}>
                        <ul className='p-0 md:flex'>
                            <li className='w-full inline-block md:w-auto'>
                                <Link to="/resume">Web Dev Resume</Link>
                            </li>
                            <li className='w-full inline-block md:w-auto'>
                                <Link to="/illustration">Illustration Portfolio</Link>
                            </li>
                            <li className='w-full inline-block md:w-auto'>
                                <Link to="/my-links">My Links</Link>
                            </li>
                            {/* <li>
                                <Link to="/styleguide">Styleguide</Link>
                            </li> */}
                            {/* <li>
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
