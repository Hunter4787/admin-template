import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categoryID:""
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

    {(this.props.categories.filter(el=>(el._id===this.props._id))[0])?
    this.setState({
           ...this.props.categories.filter(el=>(el._id===this.props._id))[0],
           categoryID:""
        }):this.setState({
            ...(this.props.categories.map((el,i)=>
            (el.souscategory.filter(el=>el._id===this.props._id)))
            .filter(el=>el.length!==0)[0])[0],
            categoryID:this.props.categories.filter(el=>el.souscategory.filter(el=>el._id.indexOf(this.props._id)> -1)[0])[0]._id
         })
    }
    edit=()=>{
        (this.props.categories.filter(el=>(el._id===this.props._id))[0]!=={})?
        this.props.editCategoryReducer(this.state):
        this.props.editSousCategoryReducer(this.state)
    }
    render() { 
        console.log(this.state)
        console.log(this.props.categories.map(el=>el.souscategory.filter(el=>el._id!=="5d6f8c7ef71060653c98cab9")))
        return ( 
        <div className='add-category-container'>
            <h1>Edit Contact</h1>
            <div>
                <h5>Title :</h5>
                <input
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChangeTitle}/>
             </div>
             <div>
             <h5>picture :</h5>
             <input  type='file' name='picture' onChange={this.handleChangeImg}/>
             </div>
             <Link to={(this.props.categories.map(el=>(el._id===this.props._id))[0])?'/categories':`/sousCategory/${this.state.categoryID}`}>
             <button onClick={()=>{this.edit()}}>Edit Category </button>
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
        },
        editSousCategoryReducer:editsouscategory=>
        {
            dispatch({
                type:'EDIT_SOUSCATEGORY',
                editsouscategory
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(EditCategory);