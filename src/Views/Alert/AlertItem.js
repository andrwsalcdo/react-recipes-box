import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../../Components/Button'; 


const AlertItem = (props) => (
    <Modal show={props.alertIsOpen} onHide={props.closeAlert} className="text-center">
        <Modal.Body className="alert-modal">
            <p>Are you sure you want to delete this?</p>
            <Button yes_btn onClick={props.delete}>Yes</Button>
            <Button no_btn onClick={props.closeAlert}>No</Button>            
        </Modal.Body>
    </Modal>
)

export default AlertItem; 