import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import './MainContainer.css'; 

const MainContainer = () => {
    return (
        <div className='main-container row'>
            <div className='col-8'>
                <CardsContainer></CardsContainer>
            </div>
            <div className='col-4'>
                <ProfileContainer></ProfileContainer>
            </div>
            
        </div>
    );
};

export default MainContainer;