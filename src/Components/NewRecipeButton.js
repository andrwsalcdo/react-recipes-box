import React from 'react';
import Button from './Button';
import Container from './Container';  

const NewRecipeButton = (props) => (
    <Container normal className="panel text-center">
        <Button add_btn onClick={props.onClickOpen}>New Recipe</Button>
    </Container>
)

export default NewRecipeButton; 