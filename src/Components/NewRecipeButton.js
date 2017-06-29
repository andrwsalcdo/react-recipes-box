import React from 'react';
import { Button } from 'react-bootstrap'

const NewRecipeButton = (props) => (
     /*<div className="panel text-center">
        <button className="btn-primary" onClick={props.onClickOpen}>New Recipe</button>
    </div> */
    <div className="panel text-center">
        <Button bsStyle="success" onClick={props.onClickOpen}>New Recipe</Button>
    </div>
)

export default NewRecipeButton; 