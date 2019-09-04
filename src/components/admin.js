import React, { Component } from 'react';
import NavBar from './navBar';
import SideBar from './sideBar';
import Routes from './routes'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="admin-container">
        <NavBar />
        <div className="admin">
        <SideBar/>
         <Routes />
         </div>
        </div> );
    }
}
 
export default Admin;