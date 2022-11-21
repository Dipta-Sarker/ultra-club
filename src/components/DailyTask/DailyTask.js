import React from 'react';
import men from '../../Image/men.png';
import './DailyTask.css'
const DailyTask = () => {
    const getNumber =(id) =>{
   const number =     document.getElementById(id).innerText;
   console.log(number)
   
    }
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
            <h5>Add A Break</h5>
            <div className="men-time">
                <button onClick={()=>getNumber('ten')}><h6 id='ten'>10s</h6></button>
                <button onClick={()=>getNumber('twenty')}><h6 id='twenty'>20s</h6></button>
                <button onClick={()=>getNumber('thirty')}><h6 id='thirty'>30s</h6></button>
                <button onClick={()=>getNumber('forty')}><h6 id='forty'>40s</h6></button>
            </div>
            <div className='excrcise'>
                <h5>Exercise</h5>
            </div>
        </div>
    );
};

export default DailyTask;<h1>Daily Task</h1>