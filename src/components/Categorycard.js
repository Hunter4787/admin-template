import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
  var FontAwesome = require('react-fontawesome');
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    remove=()=>{
    if  (this.props.categories.filter(el=>el.id_categorie.indexOf(this.props.item.id_categorie)> -1).length===1)
      this.props.deleteCategoryReducer(this.props.item.id_categorie);

    if (this.props.souscategories.filter(el=>el.id_sous_categorie.indexOf(this.props.item.id_sous_categorie)> -1).length===1)
      this.props.deleteSousCategoryReducer(this.props.item.id_sous_categorie)
    }
    render() { 
      console.log("hello "+ this.props.item.id_categorie)
        const {item} = this.props
        return ( <div className="col-lg-3 col-md-6 col-sm-12 card-container">
        <div className="row">
              <button onClick={()=>this.remove()}>
              <FontAwesome
            className='super-crazy-colors'
            name='times-circle'
            size='2x'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          /></button>
          <div>
            <span className="text-right">N° Annonce:{this.props.annonces.filter(el=>el.id_categorie===this.props.item.id_categorie).length}</span>
          </div>
      </div>
      <Card>
        <CardBody>
          <CardTitle><h4>{item.titre}</h4></CardTitle>
          <CardImg top width="100%" src={item.image} alt="Card image cap" />
          <Link to={`/categories/${item.id_categorie}`}>
            <Button>plus de details</Button>
            </Link>
          <div>
         <Link to={(this.props.souscategories.filter(el=>el.id_sous_categorie.indexOf(item.id_sous_categorie)> -1).length===1)?`/editCategory/${item.id_sous_categorie}`:`/editCategory/${item.id_categorie}`}>
           <button><FontAwesome
        className='super-crazy-colors'
        name='edit'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      </button>
      </Link>
         <Link to={(this.props.souscategories.filter(el=>el.id_sous_categorie.indexOf(item.id_sous_categorie)> -1).length===1)?`/cardInfos/${item.id_sous_categorie}`:`/cardInfos/${item.id_categorie}`}> <button><FontAwesome
        className='super-crazy-colors'
        name='info-circle'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      </button>
      </Link>
          </div>
        </CardBody>
      </Card>
        </div> );
    }
}
const mapStateToProps=(state)=>
{
    return {
        categories:state.categoryReducer,
        souscategories: state.sousCategoryReducer,
        annonces: state.annonceReducer
    }
} 
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteCategoryReducer:_id=>
        {
            dispatch({
                type:'REMOVE_CATEGORY',
               _id //es6
            })
        },
        deleteSousCategoryReducer:_id=>
        {
            dispatch({
                type:'REMOVE_SOUSCATEGORY',
               _id, //es6
            })
        }
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(CategoryCard);