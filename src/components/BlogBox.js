import React, {Component} from 'react';
import BlogTitleBox from './BlogTitleBox';
import {gettest} from '../Utility/api';
import '../styles/Blog.css';


class BlogBox extends Component{

    state = {
        data: []
    }
    renderPost(){

        const r = this.state.data.map((number) => 
            <BlogTitleBox content = {number.data} />
        );

        return r;

    }

    componentDidMount(){
        
        var num = gettest("test8").then(result =>{
            this.setState({data: result.data})
        })

        console.log();
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

