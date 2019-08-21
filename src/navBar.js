import React, { Component } from 'react';

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
                    <a className="navbar-brand" href="#"><i className="fa fa-square-o "></i>&nbsp;Admin Page</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li ><img id='profile-img' src="assets/img/find_user.png" className="img-responsive" /><span>MyAdmin</span></li>
                        <li><a href="#"><i className="bg-primary fas fa-envelope-open-text"></i></a></li>
                        <li><a href="#">Report Bug</a></li>
                    </ul>
                </div>

            </div>
        </div>
     </div>
 );
    }
}
 
export default NavBar;