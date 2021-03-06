import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
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

    function RenderComments({comments}){
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
    
    const DishDetail = (props) => {
        if (props.dish != null) {
            return(
                <div class='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
                </div>
            );
        }      
        else
            return (
                <div></div>
            );
            
}



export default DishDetail;

