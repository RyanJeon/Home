import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BlockBox from '../components/BlogBox';
import "../styles/Blog.css"
import Construction from './Construction';




class Blog extends Component{
    render(){
        return(
            <div className = "blogContainer"> 
                <NavBar pagetype = "Blog" {...this.props}/>
                
                <BlockBox />


            </div>

        )
    }
}

export default Blog; 