import React from 'react';
import "../style/home/Cards.css"
import Card from './Card';

const Cards = (props) => {

    return (
        <div className='cards'>
            
            {props.data.map((el)=> (
                <Card key={el.id} titre={el.title} cover={el.cover} id={el.id}/>
            ))}
            
        </div>
    );
};

export default Cards;