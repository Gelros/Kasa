import React, {useState} from 'react';
import Logo from "../assets/images/arrowDown.png";

const DropDown = (props) => {

    const [anim, setAnime] = useState(false)

    const classToggle = () => {
        setAnime(!anim)
    }

    return (
        <div className='all drop'>
            <div className="info" onClick={classToggle}>
                <h4>{props.titre}</h4>
                <div className={`icon ${anim ? "iconSwitch":""}`}>
                <img src={Logo} alt="Flèche descendante" />
                </div>
                
            </div>
            <div className={`desc ${anim ? "switch":""}`}>
                    {(Array.isArray(props.texte) ? (
                        <ul>
                            {props.texte.map((value) => (
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    ) : (<p>{props.texte}</p>))}
            </div>
        </div>
    );
};

export default DropDown;