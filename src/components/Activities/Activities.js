import React, { useEffect, useState } from 'react';
import SingleActivity from '../../components/SingleActivity/SingleActivity';
import DailyTask from '../DailyTask/DailyTask';
import Header from '../Header/Header';
import './Activities.css'
const Activities = () => {
    const [activites, setActivites] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivites(data))
    },[])

    const addToList =(id)=>{
        console.log(id);
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
                <DailyTask></DailyTask>
           </div>
        </div>
    );
};

export default Activities;