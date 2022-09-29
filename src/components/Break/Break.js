import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <div>
                <h4 className='break-title'>Add a Break</h4>
            </div>
            <div className='btn-box'>
                <div><small>10</small>s</div>
                <div><small>20</small>s</div>
                <div><small>30</small>s</div>
                <div><small>40</small>s</div>
                <div><small>50</small>s</div>
            </div>
            <div className='exercise-detail-field'>
                <h4>Exercise Detailes</h4>
                <div className='times-box'>
                    <h6>Exerice time: </h6>
                    <h6 className='times-box'>Break time: </h6>
                </div>
            </div>
        </div>
    );
};

export default Break;