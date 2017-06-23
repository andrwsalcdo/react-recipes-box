import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap'

class Recipe extends Component {
    constructor(props) {
        super(props); 
        this.state = { recipeIsHidden: false }
    } 
    deleteRecipe = () => {
        this.props.delete(this.props.recipe) 
    }
    edit = () => {
        this.props.edit(this.props.recipe)
    }
    toggle = (e) => {
        e.preventDefault();
        this.setState({ recipeIsHidden: !this.state.recipeIsHidden }); 
    }

    render () {
        return (
            <div>
                <button onClick={this.toggle}>{this.props.recipe.name}</button>
                 <Collapse in={this.state.recipeIsHidden}>
                    {/*wrap contents of Collapse inside the 
                        .container, so you can add as many .row without error
                    */}
                    <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>Ingredients</h4>
                                    <p>{this.props.recipe.ingredients}</p>
                                </div>
                                <div className="col-sm-6">
                                    <h4>Instructions</h4>
                                    <p>{this.props.recipe.instructions}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <button className="btn btn-default" 
                                        onClick={this.edit}>Edit</button>
                                    <button className="btn btn-danger"
                                        onClick={this.deleteRecipe}>Delete</button>  
                                </div>
                            </div>
                     </div>
                 </Collapse>
            </div>
        )
    }
}

export default Recipe;

