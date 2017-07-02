import React from 'react';
import { Collapse } from 'react-bootstrap';
import Button from '../../Components/Button'; 
 
const Recipe= (props) => (
         <div className="text-center">
                <Button recipe_btn onClick={props.onClickToggle}>{props.recipe.name}</Button>
                <Collapse className="recipe_collapse" in={props.recipeIsHidden}>
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
                                    <Button edit_btn onClick={props.onClickEdit}>Edit</Button>
                                    <Button delete_btn onClick={props.onClickDelete}>Delete</Button>                                                                        
                                </div>
                            </div>
                     </div>
                 </Collapse>
          </div>
)

export default Recipe; 