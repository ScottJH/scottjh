import React, { Component } from 'react';

class InstagramFeed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        console.log(data);
        
        return (
            <div className="block-insatgram-feed row">
                {data.map((post, key) => (
                    <div key={key} className="md:w-1/3 col">
                        <a href={post.permalink} target="_blank">
                        <div className="imageWrapper">
                            
                            <img src={post.media_url} />
                        </div>
                        <div className="caption p-1 border-b-2 border-grey-dark"><p>{post.caption}</p></div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default InstagramFeed;
