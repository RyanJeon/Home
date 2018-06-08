
import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import "../styles/Demo.css"
import Construction from './Construction';



class Demo extends Component{
    render(){
        return(
            <div className = "demoContainer"> 
                <NavBar pagetype = "Demos" {...this.props}/>
                <Construction {...this.props} />

            </div>

        )
    }

}

export default Demo; 