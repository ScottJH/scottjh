import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';

class Resume extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="My Links" />
                <div className="main-container" role="main">
                <Columns
                    columns = {
                        [
                            `<p class="text-center"><a href="https://my.indeed.com/p/scotth-k1oj6u4" target="_blank" rel="noopener noreferrer" class="btn">View Resume on Indeed</a></p>`,
                            `<p class="text-center"><a href="https://www.linkedin.com/in/scott-haselwood/" target="_blank" rel="noopener noreferrer" class="btn">View My LinkedIn Profile</a></p>`,
                            `<p class="text-center"><a href="https://www.etsy.com/shop/SJHPress" target="_blank" rel="noopener noreferrer" class="btn">My Etsy Store</a></p>`
                        ]
                    }
                />
                <Columns
                    columns = {
                        [
                            `<p class="text-center"><a href="https://www.instagram.com/scottjhpdx/" target="_blank" rel="noopener noreferrer" class="btn">My Instagram</a></p>`,
                            `<p class="text-center"><a href="https://twitter.com/Scott_H_PDX" target="_blank" rel="noopener noreferrer" class="btn">My Twitter</a></p>`,
                            `<p class="text-center"><a href="https://github.com/scottjh" target="_blank" rel="noopener noreferrer" class="btn">My Github</a></p>`,
                        ]
                    }
                />
                <Columns
                    columns = {
                        [
                            `<p class="text-center"><a href="https://www.youtube.com/channel/UCndNgBYsFPGsqk27qe1EALQ/videos" target="_blank" rel="noopener noreferrer" class="btn">My YouTube</a></p>`,
                        ]
                    }
                />
                </div>
            </div>
        )
    }
}

export default Resume;
