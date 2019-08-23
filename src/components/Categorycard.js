import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item} = this.props
        return ( <div className="col-lg-3 col-md-6 col-sm-12 card-container">
      <Card>
        {/* <CardImg top width="100%" src={item.picture} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>{item.about}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </div> );
    }
}
 
export default CategoryCard;