import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(comments){
        const comment = comments.map((commentDish) => {
            return(
                <div>
                    <ul className = "list-unstyled">
                        <li key={commentDish.id}>
                            <p>{commentDish.comment}</p> 
                            <p>-- {commentDish.author} , {new Intl.DateTimeFormat("en-US", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(commentDish.date))}</p>
                        </li>   
                    </ul>
                </div>
            );
            });

        return(
            comment
        );
    }
    
    render(){
        const dish = this.props.dish;
        if (dish == null) {
            return (
                <div></div>
            )
        }      
        else
            return(
                <div class='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                </div>
            );
}
}



export default DishDetail;

