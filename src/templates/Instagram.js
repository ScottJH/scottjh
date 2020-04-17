import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import InstagramFeed from '../blocks/InstagramFeed.js';

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          igPosts: []
        };
      }
    
      componentDidMount() {
        fetch("https://graph.instagram.com/me/media?fields=media_url,caption,permalink&access_token=IGQVJXQUhteTVXa2JpVkJtdHZAwU2NMejYwcHhEYURSX21Ob01yR214QUdXZA3hVX2J2V0hzREhQUzFVS2NPVjU3blVpWGpvMnByb2NxdU1YTExubEpxUzB4cGxUb3BZAUncxalhqMmRB")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                igPosts: result.data
              });

              console.log(this.state.igPosts);
              
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


    render() {
      
      const {igPosts, isLoaded} = this.state;

      return (
        <div className="wrapper">
            <Banner title="InstagramFeed Page" />
            <div className="main-container" role="main">
                {isLoaded 
                  ?<InstagramFeed data={igPosts} limit={9} /> 
                  : <p>Loading feed</p> }
            </div>
        </div>
      )
    
    }
}

export default Instagram;
