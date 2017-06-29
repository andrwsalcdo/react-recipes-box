import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'; 


class Editor extends Component {
    constructor(props) {
        super(props)
        let recipe = props.recipe; 
        this.state = {
            name: recipe.name, 
            ingredients: recipe.ingredients, 
            instructions: recipe.instructions,  
        }
    }
    save = (props) => {
        this.props.save({ 
            name: this.state.name, 
            ingredients: this.state.ingredients, 
            instructions: this.state.instructions, 
            _id: this.props.recipe._id
        })
        this.props.onHide()
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleIngredients = (e) => {
        this.setState({ingredients: e.target.value})
    }
    handleInstructions = (e) => {
        this.setState({instructions: e.target.value })
    }
    componentWillReceiveProps(props) {
        this.setState({
            name: props.recipe.name, 
            ingredients: props.recipe.ingredients, 
            instructions: props.recipe.instructions, 
            _id: props.recipe._id
        })
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Recipe Editor</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-group">
                        <label className="control-label">Name</label>
                        <input type="text" className="form-control"
                        value={this.state.name} onChange={this.handleName}
                        placeholder="What do you call it?"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Ingredients</label>
                        <input type="text" className="form-control"
                        value={this.state.ingredients} onChange={this.handleIngredients}
                        placeholder="What do you need?"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Instructions</label>
                        <input type="text" className="form-control"
                        value={this.state.instructions} onChange={this.handleInstructions}
                        placeholder="How do you do it?"/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.save}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }

} 

export default Editor; 