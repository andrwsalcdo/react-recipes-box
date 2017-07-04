import React from 'react';
import {  Modal } from 'react-bootstrap';
import Button from '../../Components/Button';  
import Form from '../../Components/Form'; 

const ModalItem = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton className="modal-header">
            <Modal.Title>Recipe Editor</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
            <Form 
                label="Name"
                value={props.recipe.name}
                onChange={props.handleName}
                placeholderText="What do you call it?"
            />
            <Form 
                label="Ingredients"
                value={props.recipe.ingredients}
                onChange={props.handleIngredients}
                placeholderText="What do you need?"
            />
            <Form 
                label="Instructions"
                value={props.recipe.instructions}
                onChange={props.handleInstructions}
                placeholderText="How do you do it?"
            />
            <Button save_btn className="center-block" onClick={props.onClickSave}>Save</Button>  
        </Modal.Body>
    </Modal>
)

export default ModalItem; 