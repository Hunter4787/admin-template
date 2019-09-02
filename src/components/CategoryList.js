import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import CategoryCard from './Categorycard';
var FontAwesome = require('react-fontawesome');
class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"",
			modalIsOpen: false
		};
	}
	handelchange = (event) => {
		this.setState({ title:event.target.value})

	}

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
		return (
			<div className=" container category-list-container">
				<h1 className="col-lg-12 col-md-12 col-sm-12 category-title">Hello categories</h1>
				<input
					type="text"
					onChange={(event)=>this.handelchange(event)}
					name="categorySearch"
					className="col-lg-9 col-md-12 col-sm-12 align-self-center search-category"
					placeholder="Lancer votre recherche"
				/>
				{	
					this.props.categories.filter(el => {
						return (el.title.toLowerCase().indexOf(this.state.title.toLowerCase()) > -1)
					  }).map((el, index) => (
					<CategoryCard key={index} item={el} />
				))}
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
          <form>
            <input type="text"/>
            <input type="file"/>
            <button>tab navigation</button>
            
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
        updateCategoryReducer:categories=>
        {
            dispatch({
                type:'UPDATE_CONTACTS',
                categories
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
