import React from 'react';
import './CardsContainer.css'

const CardsContainer = (props) => {
    const {handleAddToCart, exercise} = props;
    const { name, img, time} =  exercise;
    
    
    return (
        <div className=''>
            <div className='card'>
                <img src={img} alt="card-img" />
                <div className='card-info'>
                    <p className='card-name'>{name}</p>
                    <p><small>Time: {time}s</small></p>
                </div>
                <button onClick={() => handleAddToCart(exercise)} className='button-cart'>
                    <p className='btn-text'>Add to list</p>
                </button>
            </div>       
        </div>
    );
};

export default CardsContainer;