import React from 'react';
import './SingleActivity.css'
const SingleActivity = (props) => {
     const {addToList} = props
     
    const {id,name,img,time} =   props.props;
    return (
        <div className='single-cart'> 
           <div className="cart-main">
           <div className='image-div'>
                <img src={img} alt="" />
           </div>
           <div className='cart-info'>
                <h4>{name}</h4>
                <p>Time: {time}s</p>
                <button onClick={()=>addToList(id)} className="cart-btn">Add To List</button>
            </div>
            </div>
        </div>
    );
};

export default SingleActivity;