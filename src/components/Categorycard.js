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
      this.props.deleteCategoryReducer(this.props.item._id,null) || this.props.deleteCategoryReducer(this.props.item._id, this.props.categoryID)
    }
    render() { 
      // console.log(this.props.item._id)
      // console.log(this.props.categoryID)
        const {item} = this.props
        return ( <div className="col-lg-3 col-md-6 col-sm-12 card-container">
        <button onClick={this.remove}>
          <FontAwesome
        className='super-crazy-colors'
        name='times-circle'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></button>
      <Card>
        <CardBody>
          <CardTitle><h4>{item.title}</h4></CardTitle>
          <CardImg top width="100%" src={item.picture} alt="Card image cap" />
          <Link to={`/sousCategory/${item._id}`}>
            <Button>plus de details</Button>
            </Link>
          <div>
         <Link to={`/editCategory/${item._id}`}>
           <button><FontAwesome
        className='super-crazy-colors'
        name='edit'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      </button>
      </Link>
         <Link to={`/cardInfos/${item._id}`}> <button><FontAwesome
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
const mapStateToProps = state => {
	return {
		categories: state.categoryReducer,
	};
};
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteCategoryReducer:(_id, categoryID)=>
        {
            dispatch({
                type:'REMOVE_CATEGORY',
               _id, //es6
               categoryID
            })
        }
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(CategoryCard);