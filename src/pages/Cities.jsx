
import Card from '../components/header.jsx/Card'
import { Link } from 'react-router-dom'
import axios from 'axios' //libreria para peticiones HTTP
import { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
 

const Cities = ()=> {

  const [cities, setCities] = useState();
  const [error, setError] = useState(null);

  useEffect(()=> {
   //transforma la response en formato JSON
    axios.get("http://localhost:7000/api/cities?name=")
     .then(response => setCities(response.data.cities))
     .catch(err=> console.log(err))
  },[]);

  const handleInputChange = async(city)=>{

  
    try{
      const response = await axios.get(
        `http://localhost:7000/api/cities?name=${city.target.value}` 
      );
        setCities(response.data.cities);
        setError(null);
      
      
    }catch(error){
      console.log(error)
      setCities([]);
      setError("City not found");
    }
  }


  return (
    <div className="bodyCities">
      <div className="title">
        <h2>CITIES</h2>
        <p>Collection of the most beatiful places and experience</p>
      </div>

      <div className="input">
        <span>
          <BiSearch />
        </span>
        <input
          onChange={handleInputChange}
          className=""
          type="text"
          placeholder="Search your city"
        />
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
}

export default Cities
