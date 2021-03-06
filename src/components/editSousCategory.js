import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class EditSousCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            picture:""
         }
    }
    handleChangeTitle=(e)=>
    {
       this.setState({
           title:e.target.value
       })
    }
    handleChangeImg=(e)=>{
        this.setState({picture: URL.createObjectURL(e.target.files[0])})
    }
    componentWillMount=()=>

    {
    this.setState({
            ...this.props.souscategories.filter(el=>el._id===this.props._id)[0]
        })
    }
    edit=()=>{
        this.props.editSousCategoryReducer(this.state)
    }
    render() { 
        console.log(this.state)
        return ( 
        <div className='add-category-container'>
            <h1>Edit Contact</h1>
            <div>
            <h5>Title :</h5>
             <input  type='text' name='title' value={this.state.title} onChange={this.handleChangeTitle}/>
             </div>
             <div>
             <h5>picture :</h5>
             <input  type='file' name='picture' onChange={this.handleChangeImg}/>
             </div>
             <Link to='/categories'>
             <button onClick={()=>{this.edit()}}>Edit Category </button>
             </Link>
        </div>
        );
    }
}

const mapStateToProps=(state)=>
{
    return {
        souscategories:state.categoryReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editSousCategoryReducer:editsouscategory=>
        {
            dispatch({
                type:'EDIT_SOUSCATEGORY',
                editsouscategory
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(EditSousCategory);