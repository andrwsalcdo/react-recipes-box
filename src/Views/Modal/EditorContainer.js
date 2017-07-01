import React, { Component } from 'react';

import Editor from './Editor';

class EditorContainer extends Component {
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
            <Editor
                show={this.props.show}
                onHide={this.props.onHide}
                handleName={this.handleName}
                handleIngredients={this.handleIngredients}
                handleInstructions={this.handleInstructions}
                onClickSave={this.save}
                recipe={this.state}
            />
        )
    }

} 

export default EditorContainer; 