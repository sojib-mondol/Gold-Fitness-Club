import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import './ProfileContainer.css'

const ProfileContainer = () => {
    return (
        <div className='profile-box'>
            {/* <p>This is profile section</p> */}
            <Personal></Personal>
            <Break></Break>
        </div>
    );
};

export default ProfileContainer;