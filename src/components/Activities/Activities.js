import React, { useEffect, useState } from 'react';
import SingleActivity from '../../components/SingleActivity/SingleActivity';
import Header from '../Header/Header';
import './Activities.css'
const Activities = () => {
    const [activites, setActivites] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivites(data))
    },[])

    const addToList =()=>{
        console.log("go Ahead Boss");
    }
    return (
        <div className='activites'>
           <div className="daily-activites">
            <Header></Header>
                <div className="cart">
                {
                    activites.map(activity => <SingleActivity 
                        key={activity.id}
                        addToList={addToList}
                        props={activity}></SingleActivity>)
                }
                </div>
           </div>
           <div className="daily-task">
                <h1>Daily Task</h1>
           </div>
        </div>
    );
};

export default Activities;