import React from 'react';

//import child components 
    // import RecipeBoxTitle from './RecipeBoxTitle';
    // import Recipe from './Recipe';
    // import Editor from './Editor';
    // import NewRecipeButton from './NewRecipeButton';

//important data methods and recipes for local storage 
let data = require('../data/localdata'); 
data.initialize(window.localStorage); 



class RecipeBoxContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalIsOpen: false, 
            currentRecipe: {}, 
            recipes: data.getRecipes(); 
        }
    }
    //close modal
    close = () => {
        this.setState({ modalIsOpen: false }); 
    }
    //open modal 
    open = () => { this.setState({ modalIsOpen: true, currentRecipe: {} }); }
    // reset data 
    reset = () => {
        localStorage.clear(); 
        location.reload(); 
    }
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
        console.log(recipe);
        this.setState({ 
            currentRecipe: recipe
        }, () => {this.setState({ modalIsOpen: true })} )
    }
    render () {
        let recipes = this.state.recipes.map((recipe) => {
            return (<Recipe recipe={recipe} delete={this.deleteRecipe} edit={this.edit} />)
        })
        return (
            <div className="container">
                {/*<RecipeBoxTitle />*/}
                <div className="panel text-center">
                    <button className="btn-primary" onClick={this.open}>New Recipe</button>
                </div>  {/* make into NewRecipeButton comp*/}
                <Editor save={this.save} modalisOpen={this.state.modalIsOpen} close={this.close} 
                    currentRecipe={this.state.currentRecipe} />
                {recipes}
            </div>
        )
    }
}



export default RecipeBoxContainer; 