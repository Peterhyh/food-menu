
import './css/itemCard.css';
import FilledInCircle from '../app/img/filledInCircle.svg';
import EmptyCircle from '../app/img/emptyCircle.svg';
import { useState } from 'react';

const ItemCard = ({ foodImg, foodTitle }) => {

    return (
        <div className='itemContainer'>
            <div className='imageContent'>
                <img src={foodImg} alt='' />
            </div>
            <div className='recipeContent'>
                <h2>Ingredients</h2>
                <div className='ingredientsContent'>
                    <ul>
                        <li>Pasta noodles</li>
                        <li>Cooking oil</li>
                        <li>Garlic</li>
                        <li>Onions half</li>
                        <li>Meat</li>
                        <li>Vegetable</li>
                        <li>Ketchup a lot</li>
                        <li>Soy sauce 2tsp</li>
                        <li>Fish sauce 3 tsp</li>
                        <li>Salt</li>
                        <li>Pepper</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;