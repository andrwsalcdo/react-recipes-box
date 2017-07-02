import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../../Components/Button'; 

const AlertItem = (props) => (
    <Modal show={props.alertIsOpen} onHide={props.closeAlert}>
        <p>Are you sure you want to delete this?</p>
        <Button onClick={props.delete}>Yes</Button>
        <Button onClick={props.closeAlert}>No</Button>
    </Modal>
)

export default AlertItem; 