import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Profile from './profile';
import Notification from './notification';
import CategoryList from './CategoryList';
import EditCategory  from './editCategory';
import InfosCategory from './InfosCategory';
import SousCategoryList from './sousCategoryList'
// import AddCategory from './addCategory'
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
            <Route exact path='/categories' component={CategoryList}/>
            <Route exact path='/editCategory/:_id' render={(props)=><EditCategory _id={props.match.params._id}/>}/>
            <Route exact path='/cardInfos/:_id' render={(props)=><InfosCategory _id={props.match.params._id}/>}/>
            <Route exact path='/sousCategory/:_id' render={(props)=><SousCategoryList _id={props.match.params._id}/>}/>
        </div> );
    }
}
 
export default Routes;