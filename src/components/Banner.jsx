import React from 'react';
import "../style/home/Banner.css"

const Banner = (props) => {
    return (
        <div className={props.classBanner}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Banner;