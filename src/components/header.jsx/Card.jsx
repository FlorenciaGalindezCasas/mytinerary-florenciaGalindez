import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Card = ({title,description,image,country})=> {
   const backgroundImageStyle = {
     backgroundImage: `url(${image})`, 
   };

  return (
    <div className='cardCity'>      
        <div className="card-body"style={backgroundImageStyle}>
          <div className='container'>
           <h3 className="card-title">{title}</h3>
           <h6 className="card-country d-flex"><CiLocationOn/>
            {country}
           </h6>
          <p className="card-text">{description}</p> 
          </div>
          
        </div>
    </div>
  );
}

export default Card