import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Card = ({title,description,image,country})=> {
  

  return (
    <div className="cardCity">
      <div className="card-body" style={{ backgroundImage: `url(${image})` }}>
        <div className="container" style={{ opacity: 1 }}>
          <h3 className="card-title">{title}</h3>
          <h6 className="card-country">
            <CiLocationOn />
            {country}
          </h6>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card