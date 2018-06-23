

import React, {Component} from 'react';
import '../styles/Blog.css';

//Block Title Box is container for the 
//Blog title / picture / description 
class BlogTitleBox extends Component{


    render(){

        const {content} = this.props;

        return(
            <div className = "blogTitleContainer">

                <h1>
                Content Coming Soon !
                </h1>
            </div>
        );
    }


}

export default BlogTitleBox;