import React from 'react';
import {  Modal } from 'react-bootstrap';
import Button from '../../Components/Button';  

const ModalItem = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton className="modal-header">
            <Modal.Title>Recipe Editor</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
            <div className="form-group">
                <label className="control-label">Name</label>
                <input type="text" className="form-control"
                value={props.recipe.name} onChange={props.handleName}
                placeholder="What do you call it?"/>
            </div>
            <div className="form-group">
                <label className="control-label">Ingredients</label>
                <input type="text" className="form-control"
                value={props.recipe.ingredients} onChange={props.handleIngredients}
                placeholder="What do you need?"/>
            </div>
            <div className="form-group">
                <label className="control-label">Instructions</label>
                <input type="text" className="form-control"
                value={props.recipe.instructions} onChange={props.handleInstructions}
                placeholder="How do you do it?"/>
            </div>
            <Button save_btn className="center-block" onClick={props.onClickSave}>Save</Button>  
        </Modal.Body>
    </Modal>
)

export default ModalItem; 