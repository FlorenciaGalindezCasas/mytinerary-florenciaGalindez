import React from 'react'
import { useState } from "react";
import { FcLike } from "react-icons/fc";


const CardItineray=({title, price, duration, likes, hashtags, user, imagenUser})=> {

  let [vmore, setVmore] = useState(true)

  let dollarImg = [];
   for (let i = 0; i < price; i++) {
     dollarImg.push(
       <img
         key={i}
         src="/dollar.png"
         alt="Dollar"
         className="dollar-image"
       />
     );
   }

  const handleShowVmore = () => {
    setVmore(false)
  }

  const handleShowVless= ()=>{
    setVmore(true)
  }

  return (
    <div className="itin ">
      <h2 className="titleIt">{title}</h2>
      <div className="iti d-flex">
        <div className="col-4 d-flex flex-column">
            <h4 className='price d-flex'>
              Price: {dollarImg}
            </h4>
            <h4>Duration: {duration}</h4>
        </div>
        <div className="col-4 d-flex">
          <div className="imagenUser d-flex flex-column">
            <img src={imagenUser} alt={imagenUser} />
            <h4 className='userName'>{user}</h4>
          </div>
        </div>
        <div className="col-4 d-flex flex-column">
            <h4 className='likes d-flex'><FcLike/>{likes}</h4>
            <h4>{hashtags}</h4>     
        </div>
      </div>
      <h2 className="vmore">
        {vmore ? (
          <button onClick={handleShowVmore}>View More</button>
        ) : (
          <div className="container ">
            <div className="activities d-flex flex-column">
              <h2>UNDER CONSTRUCTION</h2>
              <button className="vLess" onClick={handleShowVless}>
                View Less
              </button>
            </div>
          </div>
        )}
      </h2>
    </div>
  );
}

export default CardItineray