import React, { Component } from 'react';

class InstagramFeed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data,limit } = this.props;        
        
        return (
            <section className="block-insatgram-feed pb-6">
                <div className="row">
                    {data.slice(0,limit).map((post, key) => (
                        <div key={key} className="md:w-1/3 col">
                            <a href={post.permalink} target="_blank">
                            <div className="imageWrapper">
                                {post.media_url.includes('video') 
                                    ? <video src={post.media_url} className="max-w-full block"/>
                                    : <img src={post.media_url} className="max-w-full w-full block" />}
                            </div>
                            <div className="caption p-1 pb-3 border-b-2 border-red"><p>{post.caption}</p></div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default InstagramFeed;
