import React, { Component } from 'react';
import {connect} from 'react-redux'
class InfosCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>

    {
    this.setState({
            ...this.props.categories.filter(el=>el._id===this.props._id)[0]
        })
    }

    render() { 
        console.log(this.state);
        return (  
        <div className="InfosCategory-container">
            <div className="InfosCategory">
              <h3>{this.state.title}</h3>
              <h4>Créer le : {this.state.registered}</h4>
              <h4>Nombre de dépanneurs disponibles: {this.state.workerNumb}</h4>
              <p>{this.state.about} </p>
            </div>
            <div>
         <img src={this.state.picture} alt="category" />
            </div>
        </div> 
        );
    }
}
 
const mapStateToProps = state => {
	return {
		categories: state.categoryReducer,
	};
};
export default connect(mapStateToProps)(InfosCategory);