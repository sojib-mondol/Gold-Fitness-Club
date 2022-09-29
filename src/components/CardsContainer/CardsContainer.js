import React from 'react';
import './CardsContainer.css'

const CardsContainer = (props) => {
   const {exercise} = props;


   const { name, img, time} =  exercise;
    
    console.log(name);
    return (
        <div className=''>
            <div className='card'>
                <img src={img} alt="card-img" />
                <div className='card-info'>
                    <p className='card-name'>{name}</p>
                    <p><small>Seller: {time}s</small></p>
                </div>
                <button className='button-cart'>
                    <p className='btn-text'>Add to list</p>
                
                </button>
            </div>       
        </div>
    );
};

export default CardsContainer;