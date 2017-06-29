import React from 'react';
import { Collapse } from 'react-bootstrap';

const Recipe= (props) => (
         <div>
                <button onClick={props.onClickToggle}>{props.recipe.name}</button>
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
                                    <button className="btn btn-default" 
                                        onClick={props.onClickEdit}>Edit</button>
                                    <button className="btn btn-danger"
                                        onClick={props.onClickDelete}>Delete</button>  
                                </div>
                            </div>
                     </div>
                 </Collapse>
            </div>
)

export default Recipe; 