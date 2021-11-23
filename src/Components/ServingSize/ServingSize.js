import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { increase, decrease, selectServings } from './ServingSizeSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ServingSize() {
    const dispatch = useDispatch()
    const servings = useSelector(selectServings)
    return (
        <div classname="Servings">
            <button onClick={() => dispatch(decrease())}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span> {servings} </span>
            <button onClick={() => dispatch(increase())}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>

    )



}

export default ServingSize