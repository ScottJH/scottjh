import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';
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

        const decodedToken = window.atob("SUdRVkpYUVVodGVUVlhhMkpwVmtKdGRIWkF3VTJOTWVqWXdjSGhFWVVSU1gyMU9iMDF5UjIxNFFVZFhaQTNoVlgySjJWMGh6UkVoUVV6RlZTMk5QVmpVM2JsVnBXR3B2TW5CeWIyTnhkVTFZVEV4dWJFcHhVekI0Y0d4VWIzQlpBVW5jeGFsaHFNbVJC");

        fetch("https://graph.instagram.com/me/media?fields=media_url,caption,permalink&access_token=" + decodedToken)
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
            <Banner title="Instagram Feed Page" />
            <Columns 
              columns={
                [
                  `<p>This is just a little experiment to create a simple Instagram feed for my personal Instagram and learn about the verification process for new Instagram apps.</p>`
                ]
              } />
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
