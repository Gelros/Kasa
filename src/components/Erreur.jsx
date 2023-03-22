import React from 'react';
import { Link } from "react-router-dom";
import "../style/erreur/erreur.css"


const Erreur = () => {
    return (
        <div className='erreur'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='link' to="/"> 
             <p >Retourner sur la page d’accueil</p>
            </Link>
        </div>
    );
};

export default Erreur;