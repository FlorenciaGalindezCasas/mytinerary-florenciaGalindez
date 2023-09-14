import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import CardItineray from "../components/CardItineray";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowCircleLeft } from "react-icons/md";

const CitiesDetails = () => {
  const {id} = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/cities/${id}`)
      .then((response) => {
        console.log(response.data);
        setCity(response.data), console.log(id);
      })
      .catch((err) => console.log(err));
  }, [id]);

const itineraries = city?.oneCity.itinerary || [];

  return (
    <div>
      {city ? (
        <div
          className="city"
          style={{
            backgroundImage: `url(${city.oneCity.image})`,
            opacity: 0.8,
          }}
        >
          <div className="back">
            <a href="./">
              <MdArrowCircleLeft />
            </a>
          </div>

          <div className="details d-flex flex-column">
            <h1>{city.oneCity.name}</h1>
            <p className="d-flex flex-row">
              <CiLocationOn /> {city.oneCity.country}
            </p>
          </div>
          <div className="container itinerary">
            {itineraries.length === 0 ? (
              <div className="itin itiEmpty d-flex">               
                  <h1>WE DON'T HAVE ANY ITINERARIES YET FOR THIS CITY</h1>
              </div>
                          
            ) : (
              itineraries.map((itinerary) => (
                <CardItineray
                  key={itinerary._id}
                  title={itinerary.name}
                  price={itinerary.price}
                  duration={itinerary.duration}
                  likes={itinerary.likes}
                  hashtags={itinerary.hashtags}
                  user={itinerary.user.user}
                  imagenUser={itinerary.user.image}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CitiesDetails;
