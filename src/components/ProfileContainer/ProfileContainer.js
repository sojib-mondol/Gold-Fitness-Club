import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import './ProfileContainer.css'

const ProfileContainer = (props) => {

    const { cart, totalExerciseTime } = props;
    console.log(cart);
    let time;
   
    

    return (
        <div className='profile-box'>
            <Personal></Personal>
            <Break time={time}
                totalExerciseTime={totalExerciseTime}>
            </Break>
        </div>
    );
};

export default ProfileContainer;