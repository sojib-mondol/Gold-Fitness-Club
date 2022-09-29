
import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    //console.log(props)
    //const {Time} = props.time
    const [second, setSecond]= useState("");


    return (
        <div className='shadow-lg p-2 mt-5 rounded'>
            <h5 className='break-title'>Add a break</h5>
            <div className='btn-box '>
                <button onClick={(e)=> setSecond(e.target.name)} name='10s' className=''>10s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='20s' className=''>20s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='30s' className=''>30s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='40s' className=''>40s</button>
                <button onClick={(e)=> setSecond(e.target.name)} name='50s' className=''>50s</button>
            </div>
            <div>
            <h5 className='exercise-detail-field shadow-lg p-2'>Exercise Details</h5>
            <div className='exercise-detail-field rounded shadow-lg p-2'>
                <h5 className=''>Exercise time: s</h5>
                <h5 className=''>Break time: {second}</h5>
            </div>
            <div className=''>
            <button className='btn-activity rounded mt-3'>Activity Completed</button>
            </div>
        </div>
        </div>
    );
};

export default Break;