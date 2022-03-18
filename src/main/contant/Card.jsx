import React from 'react';
import CardButton from './CardButton';

const Card = (props) => {
    return (
        <div className='cardDiv'>
            <div className='imgBlock'>
                <img className='cardImg' src={props.img} alt="err" />
            </div>
           <div className='itemAbout'>
            <h3 className='price'>{props.price}</h3>
            <p className='itemName'>{props.name}</p>
            <CardButton />
           </div>
            
        </div>
    );
};

export default Card;