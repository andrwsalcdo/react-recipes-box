import React, { Component } from 'react';
//import child components
    import Container from '../../Components/Container.js'
    import RecipeBoxTitle from '../../Components/RecipeBoxTitle.js'
    import NewRecipeButton from '../../Components/NewRecipeButton.js'
    import ModalContainer from '../Modal/ModalContainer'
    import RecipeList from '../Recipes/RecipeList.js'
    import SocialLink from '../../Components/SocialLink.js'
//important data methods and recipes for local storage 
    let data = require('../../data/localdata')
    data.initialize(window.localStorage)


class RecipeBox extends Component {
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
    //edit recipe 
    edit = (recipe) => {
        this.setState({ currentRecipe: recipe}, () => {this.setState({ modalIsOpen: true })} )
    }
    //delete recipe
    deleteRecipe = (recipe) => {
        data.deleteRecipe(recipe); 
        this.setState({ recipes: data.getRecipes() })
    }
    render() {
        return (
            <Container big_box>
                <Container className="container">
                    <RecipeBoxTitle />
                    <NewRecipeButton onClickOpen={this.open} />
                    <ModalContainer save={this.save} show={this.state.modalIsOpen} onHide={this.close} 
                    recipe={this.state.currentRecipe} />
                    <RecipeList 
                        recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} edit={this.edit}
                    />
                    <SocialLink />
                </Container>
            </Container>
        )
    }
}


export default RecipeBox; 