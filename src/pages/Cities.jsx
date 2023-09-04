import Card from "../components/header.jsx/Card";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import filterActions from "../store/actions/filterActions";


const Cities = () => {
  
  let inputRef = useRef();

  const dispatch = useDispatch();

  const cities = useSelector((store) => store.filterReducer.cities);

  const error = useSelector((store) => store.filterReducer.error);

  useEffect(() => {
    dispatch(filterActions.getCities())
  }, [dispatch]);

      function handleSearch() {
       dispatch(filterActions.filterCities({
        name: inputRef.current.value
       }));
        
      }

  return (
    <div className="bodyCities">
      <div className="title">
        <h2>CITIES</h2>
        <p>Collection of the most beatiful places and experience</p>
      </div>

      <div className="input">
        <input
          ref={inputRef}
          className=""
          type="text"
          placeholder="Search your city"
        />
        <button onClick={handleSearch}>
          <BiSearch />
        </button>
      </div>
      <div className="cityCards d-flex flex-wrap">
        {
          //concatenación opcional
          cities?.map((city) => {
            return (
              <Link key={city._id} to={`/cities/${city._id}`}>
                <Card
                  title={city.name}
                  description={city.description}
                  image={city.image}
                  country={city.country}
                  itinerary={city.itinerary}
                />
              </Link>
            );
          })
        }
      </div>
      {error && (
        <div className="error">
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Cities;
