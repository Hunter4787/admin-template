import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Profile from './profile';
import Notification from './notification';
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Route exact path='/Dashboard' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/notification' component={Notification}/>
        </div> );
    }
}
 
export default Routes;