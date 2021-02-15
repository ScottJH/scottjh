import React, { Component } from 'react';
import Icon from './Icon'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer bg-grey-dark">
                <div className="site-footer__inner pt-12 pb-12 pr-3 pl-3">
                    <div className="row">
                        <div className="w-full p-4 text-center md:text-left md:w-1/2">
                            <h5 className="mb-4">Contact me:</h5>
                            <a href='&#109;ai&#108;&#116;o&#58;s%63o%&#55;4t&#46;j&#46;h%&#54;1s&#101;%6Cwood&#64;gmail&#46;&#99;%6Fm'>s&#99;&#111;tt&#46;j&#46;h&#97;selw&#111;od&#64;g&#109;ail&#46;c&#111;&#109;</a>
                        </div>
                        <div className="w-full p-4 text-center md:w-1/2 md:text-right">
                            <a href="https://www.instagram.com/scottjhpdx/" className="px-2 py-0" target="_balnk" rel="noopener noreferrer"><Icon icon="instagram" /></a>
                            <a href="https://github.com/scottjh" className="px-2 py-0" target="_balnk" rel="noopener noreferrer"><Icon icon="github" /></a>
                            <a href="https://twitter.com/Scott_H_PDX" className="px-2 py-0" target="_balnk" rel="noopener noreferrer"><Icon icon="twitter" /></a>
                            <a href="https://www.linkedin.com/in/scott-haselwood-29b79231/" className="px-2 py-0" target="_balnk" rel="noopener noreferrer"><Icon icon="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
