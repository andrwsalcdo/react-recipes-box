import React from 'react';

import RecipeContainer from './RecipeContainer'; 

const RecipeList = (props) => (
    <div>
        {props.recipes.map((recipe,i) => 
            <RecipeContainer 
                key={i} 
                recipe={recipe} 
                delete={props.deleteRecipe} 
                edit={props.edit} 
            />
        )}
     </div>
)
 

export default RecipeList; 