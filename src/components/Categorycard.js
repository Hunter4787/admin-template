import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  var FontAwesome = require('react-fontawesome');
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item, deleteCategoryReducer} = this.props
        return ( <div className="col-lg-3 col-md-6 col-sm-12 card-container">
      <Card>
        <button onClick={()=>deleteCategoryReducer(item._id)} className="">
          <FontAwesome
        className='super-crazy-colors'
        name='times-circle'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></button>
        {/* <CardImg top width="100%" src={item.picture} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle><h4>{item.name}</h4></CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>{item.about}</CardText>
          <Button>more details</Button>
          <div>
          <button><FontAwesome
        className='super-crazy-colors'
        name='edit'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></button>
          <button><FontAwesome
        className='super-crazy-colors'
        name='info-circle'
        size='2x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></button>
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
                type:'REMOVE_CONTACT',
                _id
            })
        }
    }
  }
export default connect(null,mapDispatchToProps)(CategoryCard);