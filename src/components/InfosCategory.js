import React, { Component } from 'react';
import {connect} from 'react-redux'
class InfosCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    componentWillMount=()=>

    {if (this.props.souscategories.filter(el=>el.id_sous_categorie.indexOf(this.props._id)> -1).length===1)
        this.setState({
            ...this.props.souscategories.filter(el=>el.id_sous_categorie===this.props._id)[0]
        });if (this.props.categories.filter(el=>el.id_categorie.indexOf(this.props._id)> -1).length===1)
    this.setState({
            ...this.props.categories.filter(el=>el.id_categorie===this.props._id)[0]
        })
    }

    render() { 

        return (  
        <div className="InfosCategory-container">
            <div className="InfosCategory">
              <h3>{this.state.titre}</h3>
              <p>{this.state.description} </p>
            </div>
            <div>
         <img src={this.state.image} alt="category" />
            </div>
        </div> 
        );
    }
}
 
const mapStateToProps=(state)=>
{
    return {
        categories:state.categoryReducer,
        souscategories: state.sousCategoryReducer
    }
} 
export default connect(mapStateToProps)(InfosCategory);