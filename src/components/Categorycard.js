import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
  var FontAwesome = require('react-fontawesome');
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item, deleteCategoryReducer} = this.props
        return ( <div className="col-lg-3 col-md-6 col-sm-12 card-container">
        <button onClick={()=>deleteCategoryReducer(item._id)}>
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
          <Button>more details</Button>
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
         <Link to={`/card-infos/${item._id}`}> <button><FontAwesome
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
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteCategoryReducer:_id=>
        {
            dispatch({
                type:'REMOVE_CATEGORY',
                _id //es6
            })
        }
    }
  }
  
export default connect(null,mapDispatchToProps)(CategoryCard);