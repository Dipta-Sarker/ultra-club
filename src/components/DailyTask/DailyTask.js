import React from 'react';
import men from '../../Image/men.png';
import './DailyTask.css'
const DailyTask = () => {
    return (
        <div className='men'>
            <div className='men-info'>
            <img src={men} alt="" />
            <div className="info">
                <h5>Alex Gomes</h5>
                <p>Sydney, australia</p>
            </div>
            </div>
            
            <div className='men-health'>
                <div>
                <h6>75Kg</h6>
                <p>Weight</p>
                </div>
                <div>
                    <h6>6.5</h6>
                    <p>Height</p>
                </div>
                <div>
                    <h6>25 Years</h6>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default DailyTask;<h1>Daily Task</h1>