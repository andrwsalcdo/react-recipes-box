import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

const Recipe= (props) => (
         <div>
                <Button bsStyle="primary" onClick={props.onClickToggle}>{props.recipe.name}</Button>
                 <Collapse in={props.recipeIsHidden}>
                    <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>Ingredients</h4>
                                    <p>{props.recipe.ingredients}</p>
                                </div>
                                <div className="col-sm-6">
                                    <h4>Instructions</h4>
                                    <p>{props.recipe.instructions}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Button bsStyle="info" onClick={props.onClickEdit}>Edit</Button>
                                    <Button bsStyle="danger" onClick={props.onClickDelete}>Delete</Button>                                    
                                </div>
                            </div>
                     </div>
                 </Collapse>
            </div>
)

export default Recipe; 