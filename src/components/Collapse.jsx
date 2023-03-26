import React from 'react';
import "../style/about/collapse.css"
import DropDown from './DropDown';

const Collapse = (props) => {

    return (
    <div className="infos">
       {props.collapse.map((el) => (
        <DropDown key={el.id} titre={el.title} texte={el.description}/>
       ))} 
    </div>
    );
};

export default Collapse;