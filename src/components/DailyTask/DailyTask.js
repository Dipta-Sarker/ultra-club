import React from 'react';
import men from '../../Image/men.png';
import './DailyTask.css'
const DailyTask = () => {
    const getNumber =(id) =>{
   const number =     document.getElementById(id).innerText;
   const breakTime = document.getElementById('break')
   breakTime.innerHTML = number;
   
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
            <h5 className='title'>Add A Break</h5>
            <div className="men-time">
                <button onClick={()=>getNumber('ten')}><h6><span id='ten'>10</span>s</h6></button>
                <button onClick={()=>getNumber('twenty')}><h6><span id='twenty'>20</span>s</h6></button>
                <button onClick={()=>getNumber('thirty')}><h6><span id='thirty'>30</span>s</h6></button>
                <button onClick={()=>getNumber('forty')}><h6><span id='forty'>40</span>s</h6></button>
            </div>
            <div className='exercise'>
                <h5 className='title'>Exercise</h5>
                <div className="exercise-time">
                    <h5>Exercise Details:</h5>
                    <h5>00</h5>
                </div>
            </div>
            <div className="break-time">
                <h5>Break Time</h5>
                <p><span id='break'>00</span> seconds</p>
            </div>
        </div>
    );
};

export default DailyTask;<h1>Daily Task</h1>