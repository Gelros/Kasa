import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/property/${props.id}`} className="card">
            <img src={props.cover} alt="Background" />
           <h4>{props.titre}</h4>
       </Link>
    );
};

export default Card;