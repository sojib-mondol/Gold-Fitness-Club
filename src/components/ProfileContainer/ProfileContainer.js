import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import './ProfileContainer.css'

const ProfileContainer = (props) => {

    const {cart} = props;
    console.log(cart);
    let time;
   
    for (const product of cart) {
        time = time + product.time;
    }

    return (
        <div className='profile-box'>
            {/* <p>This is profile section</p> */}
            <Personal></Personal>
            <Break props={time}></Break>
        </div>
    );
};

export default ProfileContainer;