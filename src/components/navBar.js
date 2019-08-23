import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div id="wrapper">
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="adjust-nav">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/"><i className="fa fa-square-o "></i>&nbsp;Admin Page</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li ><img id='profile-img' src="assets/img/find_user.png" className="img-responsive" alt="user img"/><span>MyAdmin</span></li>
                        <li>{/*<a href="#"><!--<i className="bg-primary fas fa-envelope-open-text"></i></a>*/}hi</li>
                        <li>{/*<a href="#">Report Bug</a>*/}</li>
                    </ul>
                </div>

            </div>
        </div>
     </div>
 );
    }
}
 
export default NavBar;