import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Blog from './Pages/Blog';
import Works from './Pages/Works';
import Arts from './Pages/Arts';
import Itsme from './Pages/Itsme';
import './Styles/CSS/default.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/blog' component={Blog} />
            <Route path='/works' component={Works} />
            <Route path='/arts' component={Arts} />
            <Route path='/me' component={Itsme} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
