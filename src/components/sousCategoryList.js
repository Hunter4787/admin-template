import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import CategoryCard from './Categorycard';
var FontAwesome = require('react-fontawesome');
class SousCategoryList extends Component {
    state = {
        searchTitle:"",
        modalIsOpen: false
     }
    //handlechange search inputs 
	handlechangeSearchTitle = (event) => {
		this.setState({ searchTitle:event.target.value})

	}
    componentWillMount=()=>

    {
    this.setState({
        ...this.props.categories.filter(el=>el._id===this.props._id)[0]
      });
    }
    	//modal methods
	openModal=()=> {
		this.setState({modalIsOpen: true});
	  }
	 
afterOpenModal=()=> {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	  }

toggle=() =>{
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
closeModal=()=> {
		this.setState({modalIsOpen: false});
      }
          //new category modal inputs
	handleChangeNewcategory=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleChangeImg=(e)=>{
        this.setState({picture: URL.createObjectURL(e.target.files[0])})
    }
    render() { 
        const customStyles = {
			content : {
			  top                   : '50%',
			  left                  : '50%',
			  right                 : 'auto',
			  bottom                : 'auto',
			  marginRight           : '-50%',
			  transform             : 'translate(-50%, -50%)'
			}
		  };
        console.log(this.state);
        return ( 
        <div className="container category-list-container">
            <h1 className="col-lg-12 col-md-12 col-sm-12 category-title">{this.state.title}: sous-categories</h1>
				<input
					type="text"
					onChange={(event)=>this.handlechangeSearchTitle(event)}
					name="categorySearch"
					className="col-lg-9 col-md-12 col-sm-12 align-self-center search-category"
					placeholder="Lancer votre recherche"
				/>
              {
               this.state.souscategory.filter(el => {
                return (el.title.toLowerCase().indexOf(this.state.searchTitle.toLowerCase()) > -1)
              }).map((el, index) => (
					<CategoryCard key={index} item={el} />
                ))
                } 
                <div className="card-container col-lg-3 col-md-6 col-sm-12 add-card-icon">
				<button onClick={this.openModal}>
					<FontAwesome
						className="super-crazy-colors"
						name="plus-circle"
						size="3x"
						style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>{' '}
				</button>
				<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Add new category</div>
          <form className="modal-container">
			  <label for="workerNumb">Nombre de dépanneurs</label>
            <input type="text" name="workerNumb" id="workerNumb" onChange={this.handleChangeNewcategory}/>
			<label for="newtitle">New Title</label>
            <input type="text" name="newtitle" id="newtitle" onChange={this.handleChangeNewcategory}/>
			<label for="about">Description</label>
            <input type="text" name="about" id="about" onChange={this.handleChangeNewcategory}/>
			<label for="registered">Date d'ajout</label>
            <input type="text" name="registered" id="registered" onChange={this.handleChangeNewcategory}/>
			<label for="souscategorie">Ajouter des sous categories</label>
            <input type="text" name="souscategorie" id="souscategorie"onChange={this.handleChangeNewcategory}/>
            <input type="file" id="picture" onChange={this.handleChangeImg}/>

            <button onClick={this.add}>Add category</button>
            
          </form>
        </Modal>

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
const mapDispatchToProps=(dispatch)=>
{
    return {
        addCategoryReducer:newcategory=>
        {
            dispatch({
                type:'ADD_CATEGORY',
                newcategory
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SousCategoryList);