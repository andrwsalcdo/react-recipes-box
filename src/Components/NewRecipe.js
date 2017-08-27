import React from 'react';
import Button from './Button';
import Container from './Container';  

const NewRecipe = (props) => (
    <Container newRecipe className="panel text-center">
        <Button add_btn onClick={props.onClickOpen}>New Recipe</Button>
    </Container> 
)

export default NewRecipe; 