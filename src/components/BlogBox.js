import React, {Component} from 'react';
import BlogTitleBox from './BlogTitleBox';
import '../styles/Blog.css';


class BlogBox extends Component{

    renderPost(){
        let nums = [1];
        
        const r = nums.map((number) => 
            <BlogTitleBox content = {number} />
        );

        return r;

    }

    render(){
        return(
            <div className = "blogbox">

                {this.renderPost()}

            </div>


        )
    }


}

export default BlogBox;

