import React, { Component } from 'react';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
 <div id="page-wrapper">
        <div id="page-inner">
          <div classname="row">
            <div classname="col-md-12">
              <h2>Admin Dashboard</h2>
            </div>
          </div>
          <hr />
          <div classname="row">
            <div classname="col-md-3 col-sm-3 col-xs-6">
              <h5>Widget Box One</h5>
              <div classname="panel panel-primary text-center no-boder bg-color-blue">
                <div classname="panel-body">
                  <i classname="fa fa-bar-chart-o fa-5x" />
                  <h3>120 GB </h3>
                </div>
                <div classname="panel-footer back-footer-blue">
                  Disk Space Available
                </div>
              </div>
            </div>
            <div classname="col-md-3 col-sm-3 col-xs-6">
              <h5>Widget Box Two</h5>
              <div classname="alert alert-info text-center">
                <i classname="fa fa-desktop fa-5x" />
                <h3>100$ </h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
            <div classname="col-md-6">
              <h5>Buttons Samples</h5>
              <a href="#" classname="btn btn-default">default</a>
              <a href="#" classname="btn btn-primary">primary</a>
              <a href="#" classname="btn btn-danger">danger</a>
              <a href="#" classname="btn btn-success">success</a>
              <a href="#" classname="btn btn-info">info</a>
              <a href="#" classname="btn btn-warning">warning</a>
              <br />
              <br />
              <h5>Progressbar Samples</h5>
              <div classname="progress progress-striped">
                <div classname="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  <span classname="sr-only">40% Complete (success)</span>
                </div>
              </div>
              <div classname="progress progress-striped active">
                <div classname="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                  <span classname="sr-only">20% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 );
    }
}
 
export default Dashboard;