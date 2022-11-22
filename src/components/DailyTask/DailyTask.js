import React, { useEffect, useState } from 'react';
import men from '../../Image/men.png';
import './DailyTask.css';
const DailyTask = (props) => {
    const [number, setNumber] = useState(0)
    const {items} =props;

    let second = 0;
    for(const oneItem of items){
         second = second + parseInt(oneItem.time);
    }

    const getNumber =(id) =>{
   const number =     document.getElementById(id).innerText;
   setNumber(number)
   localStorage.setItem(1,number)
    }

useEffect(()=>{
    const storage = localStorage.getItem(1);
    setNumber(storage)
},[])

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
                    <p> {second} seconds</p>
                </div>
            </div>
            <div className="break-time">
                <h5>Break Time</h5>
                <p><span id='break'>{number}</span> seconds</p>
            </div>
            <button className='cart-btn'>Activity Complete</button>
        </div>
    );
};

export default DailyTask;<h1>Daily Task</h1>