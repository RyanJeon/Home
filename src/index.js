import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Construction from './Pages/Construction';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import Updates from './Pages/Updates'
import Demo from './Pages/Demo'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path = '/blog' component = {Blog}/>  
            <Route path = '/Home/Blog' component = {Blog} />

            <Route path = '/updates' component = {Updates}/>
            <Route path = '/Home/updates' component = {Updates}/>

            <Route path = '/more' component = {Construction}/>
            <Route path = '/Demos' component = {Demo}/>
            <Route path = '/Home/Demos' component = {Demo}/>
            
            <Route path = '/' component = {App}/>
            <Route path = '/Home' component = {App}/>
        </Switch>
    </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
