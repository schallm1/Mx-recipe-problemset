import React from 'react';
import { useSelector } from 'react-redux';
import ServingSize from './ServingSize/ServingSize';
import { selectMultiplier } from './ServingSize/ServingSizeSlice'


function RecipeMeta(props) {
    var multiplier = useSelector(selectMultiplier);
    return (
        <div className="recipe-meta">
            <h1>{props.title}</h1>
            <div>
                <p>Time: {multiplier * (props.time)} hours</p>
                <p>Servings: <ServingSize /></p>
            </div>
        </div>
    )
}

export default RecipeMeta