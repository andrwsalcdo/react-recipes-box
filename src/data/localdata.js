let seed = require('./seed'); 
let storage; 

const INDEX_KEY = '_indx_key'; 

function initialize(storageType) {
    storage = storageType; 
    if (storage.getItem(INDEX_KEY) === null) {
        seedStorage(); 
    }
}

function seedStorage() {
    seed.forEach(function(recipe) {
        newRecipe(recipe)
    })
}

function newRecipe(recipe) {
    let counter = storage.getItem(INDEX_KEY) || 0; 
    counter = counter + 1; 
    reciipe._id = counter; 
    let key = 'recipe' + counter; 
    storage.setItem(key, JSON.stringify(recipe)); 
    storage.setItem(INDEX_KEY, counter); 
}

function getRecipes() {
    let recipes = []; 
    storage.map((index) => {
        let key = storage.key(index); 
        if(key.includes('recipe')) {
            let recipe = storage.getItem(key); 
            recipes.push(JSON.parse(recipe)); 
        }
    })
    recipes = recipes.sort((a,b) => {
        return a._id - b._id; 
    })
    return recipes; 
}

function deleteRecipe(recipe) {
    storage.removeItem('recipe' + recipe._id)
}

function saveRecipe(recipe) {
    if (recipe._id) {
         storage.setItem('recipe' + recipe._id, JSON.stringify(recipe)); 
    } else {
        newRecipe(recipe); 
    }
}

module.exports = {
    initialize, 
    getRecipes, 
    saveRecipe, 
    deleteRecipe
}