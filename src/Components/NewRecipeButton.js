import React from 'react';
import Button from './Button'; 

const NewRecipeButton = (props) => (
    <div className="panel text-center">
        <Button add_btn onClick={props.onClickOpen}>New Recipe</Button>
    </div>
)

export default NewRecipeButton; 