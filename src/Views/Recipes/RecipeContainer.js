import React, { Component } from 'react';

//child presentational component
import Recipe from './Recipe'; 

class RecipeContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = { recipeIsHidden: false, alertIsOpen: false  }
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
    showAlert = () => { this.setState({ alertIsOpen: true }) }
    closeAlert = () => { this.setState({ alertIsOpen: false }) }

    render() {
        return (
            <Recipe 
                recipeIsHidden={this.state.recipeIsHidden}
                recipe={this.props.recipe}
                onClickToggle={this.toggle}
                onClickEdit={this.edit}
                onClickDelete={this.deleteRecipe}
                alertIsOpen={this.state.alertIsOpen}
                onClickShowAlert={this.showAlert}
                onClickCloseAlert={this.closeAlert}
            />
        )
    }
}


export default RecipeContainer;