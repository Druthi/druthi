import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import AboutMe from './components/AboutMe';
import Music from './components/Music';
import Coding from './components/Coding';
import Contact from './components/Contact';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/home' component={App} />
                <Route path='/aboutMe' component={AboutMe} />
                <Route path='/coding' component={Coding} />
                <Route path='/music' component={Music} />
                <Route path='/contact' component={Contact} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();