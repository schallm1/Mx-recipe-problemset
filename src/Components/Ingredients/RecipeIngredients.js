import React from 'react';
import { useSelector } from 'react-redux';
import Comments from '../Comments'
import { selectMultiplier } from '../ServingSize/ServingSizeSlice'

function RecipeIngredients(props) {
    var multiplier = useSelector(selectMultiplier);
    const ingredients = props.ingredients.map((ingredient, index) => {
        return (
            <li className="ingredient">
                <strong>{ingredient.name}</strong>: {multiplier * (ingredient.amount)} {ingredient.measure}
                <Comments />
            </li>
        )
    })
    return (
        <div className="recipe-ingredients">
            <h1>Ingredients</h1>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default RecipeIngredients