import React, { Component } from 'react';

//import child components
    import RecipeBoxTitle from '../Components/RecipeBoxTitle.js'
    import RecipeContainer from './RecipeContainer';
    import Editor from '../Components/Editor';
    import NewRecipeButton from '../Components/NewRecipeButton';

//important data methods and recipes for local storage 
let data = require('../data/localdata'); 
data.initialize(window.localStorage); 


class RecipeBoxContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalIsOpen: false, 
            currentRecipe: {}, 
            recipes: data.getRecipes(),
        }
    }
    //close modal
    close = () => {
        this.setState({ modalIsOpen: false }); 
    }
    //open modal 
    open = () => {this.setState({ modalIsOpen: true, currentRecipe: {} }); }
    //save recipe
    save = (recipe) => {
        data.saveRecipe(recipe); 
        this.setState({recipes: data.getRecipes() })
    }
    //delete recipe
    deleteRecipe = (recipe) => {
        data.deleteRecipe(recipe); 
        this.setState({ recipes: data.getRecipes() })
    }
    //edit recipe 
    edit = (recipe) => {
        this.setState({ currentRecipe: recipe}, () => {this.setState({ modalIsOpen: true })} )
    }
    render() {
        let recipes = this.state.recipes.map((recipe,i) => {
            return (<RecipeContainer key={i} recipe={recipe} delete={this.deleteRecipe} edit={this.edit} />)
        })
        return (
            <div className="container">
                <RecipeBoxTitle />
                <NewRecipeButton onClickOpen={this.open} />
                <Editor save={this.save} show={this.state.modalIsOpen} onHide={this.close} 
                recipe={this.state.currentRecipe} />
                {recipes}
            </div>
        )
    }
}



export default RecipeBoxContainer; 