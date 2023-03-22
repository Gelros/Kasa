import React from 'react';
import StarsActive from "../assets/images/star_active.png"
import StarsInactive from "../assets/images/star_inactive.png"

const Stars = (props) => {

    console.log(props);
    
    let content = []

    for (let i = 0; i < 5; i++) {
        content.push(<img key={i} src={(i < props.rate) ? StarsActive : StarsInactive} alt="Rating"/>)
    }

    return (
        <div className='star'>
            {content}
        </div>
    );
};

export default Stars;