import react from 'react';
import {useParams} from "react-router-dom"
import Logement from "../data/Logement.json"
import Slide from "./Slide"
import "../style/home/Slide.css"
import DropDown from './DropDown';
import Stars from './Stars';
import Error from "../pages/404"

const Property = () => {

    const params = useParams()
    const id = params.id
    const data = Logement.find((logement) => logement.id === id)
    if(data){
      return (
        
        <div>
         {
          (<div className="logements">
             <Slide slides={data.pictures}>
 
             </Slide>
 
             <div className='content'>
 
               <div className='title text-color'>
                 <div className='loc'>
                   <h1>{data.title}</h1>
                   <p>{data.location}</p>
                 </div>
 
                 <div className='tag'>
                 {(Array.isArray(data.tags) ? (
                     <ul>
                         {data.tags.map((el) => (
                             <li key={el} className="background-color">{el}</li>
                         ))}
                     </ul>
                 ) : (<p>{data.tags}</p>))}
                 </div>
                 
               </div>
 
               <div className='identity'>
                  <div className='host '>
                    <p className='text-color'>{data.host.name}</p>
                    <img src={data.host.picture} alt="photo de profil" />
                  </div>
                  <div className='stars'>
                  <Stars rate={data.rating}/>
                  </div>
               </div>
             </div>  
 
             <div className='dropDownProp'>
 
             <div className='pro'>
             <DropDown  titre={data.title} texte={data.description}/>
             </div>
 
             <div className='pro'>
             <DropDown  titre="Equipements" texte={data.equipments}/>
             </div>
 
             </div>
           
         </div>)
         }
        </div>
     );
    }else{
      return(<Error/>)
    }
    
};

export default Property;