import React from 'react';

const NewRecipeButton = (props) => (
     <div className="panel text-center">
        <button className="btn-primary" onClick={props.onClickOpen}>New Recipe</button>
    </div> 
)

export default NewRecipeButton; 