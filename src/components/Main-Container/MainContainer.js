import React, { useEffect, useState } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import './MainContainer.css'; 

const MainContainer = () => {

    const [esercises, setExecrises] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (exerciseItem) =>{
        setCart(exerciseItem);
    }


    useEffect(() => {
         fetch('products.json')
         .then(res => res.json())
         .then(data =>  setExecrises(data))
    },[])

    return (
        <div className='main-container '>
            <div className=''>
                <h4>Select what you wnat to do today</h4>
                <div className="card-container">
                    {
                        esercises.map(exercise => <CardsContainer
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToCart = {handleAddToCart}
                        ></CardsContainer>)
                    }
                </div>
            </div>
            <div className=''>
                <ProfileContainer cart={cart}></ProfileContainer>
            </div>
            
        </div>
    );
};

export default MainContainer;