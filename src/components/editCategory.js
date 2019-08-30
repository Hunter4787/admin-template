import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
            picture:""
         }
    }
    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>

    {
    this.setState({
            ...this.props.categories.filter(el=>el._id===this.props._id)[0]
        })
    }
    render() { 
        return ( 
        <div className='add-category-container'>
            <h1>Edit Contact</h1>
            {this.state.title}
            <div>
            <h5>Title :</h5>
             <input  type='text' name='title' value={this.props.categories.title} onChange={this.handleChange}/>
             </div>
             <div>
             <h5>picture :</h5>
             <input  type='file' name='picture' value={this.props.categories.picture} onChange={this.handleChange}/>
             </div>
             <Link to='/categories'>
             <button onClick={()=>this.props.editCategoryReducer({...this.state})}>Edit Category </button>
             </Link>
        </div>
        );
    }
}

const mapStateToProps=(state)=>
{
    return {
        categories:state.categoryReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editCategoryReducer:editcategory=>
        {
            dispatch({
                type:'EDIT_CATEGORY',
                editcategory
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(EditCategory);