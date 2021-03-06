import React, { Component } from 'react';
//import child components
    import Container from '../../Components/Container.js'
    import Title from '../../Components/Title.js'
    import NewRecipe from '../../Components/NewRecipe.js'
    import ModalContainer from '../Modal/ModalContainer'
    import RecipeList from '../Recipes/RecipeList.js'
    import StyledLink from '../../Components/SocialLink.js'
// import Social Link Icon ~ github to pass as props
    import FaGithub from 'react-icons/lib/fa/github';
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
                    <Title textValue="Recipe Box" />
                    <NewRecipe onClickOpen={this.open} />
                    <ModalContainer save={this.save} show={this.state.modalIsOpen} onHide={this.close} 
                    recipe={this.state.currentRecipe} />
                    <RecipeList 
                        recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} edit={this.edit}
                    />
                    <StyledLink pull_to_right link="https://github.com/andrwsalcdo/react-recipes-box"
                            icon={<FaGithub size={25} color="black" />}
                        />
                </Container>
            </Container>
        )
    }
}


export default RecipeBox; 