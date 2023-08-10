import React, { useEffect, useState } from "react";
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Carousel() {
  let [index, setIndex] = useState(0); //desestructuro el array
  let imagesPerSlide = 4;

  const images = [
    {
      title: "Bariloche, Argentina",
      url: "./public/bariloche.jpg",
    },
    {
      title: "Cataratas del Iguazu, Argentina",
      url: "./public/cataratasDelIguazu.jpg",
    },
    {
      title: "Firenze, Italy",
      url: "./public/firenze.jpg",
    },
    {
      title: "La Habana, Cuba",
      url: "./public/laHabana.jpg",
    },

    {
      title: "London, England",
      url: "./public/london.jpg",
    },
    {
      title: "Los Angeles, USA",
      url: "./public/losAngeles.jpg ",
    },
    {
      title: "Machu Picchu, Peru",
      url: "./public/machuPicchu.jpg",
    },
    {
      title: "Paris, France",
      url: "./public/paris.jpg",
    },

    {
      title: "Roma, Italy",
      url: "./public/roma.jpg",
    },
    {
      title: "San Francisco, USA",
      url: "./public/sanFrancisco.jpg ",
    },
    {
      title: "Tokyo, Japan",
      url: "./public/tokyo.jpg",
    },
    {
      title: "Venecia, Italy",
      url: "./public/venecia.jpg",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const handlePrev = () => {
    if (images.length / imagesPerSlide > index - 1) {
      if (index === 0) {
        setIndex(images.length / imagesPerSlide - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      setIndex(images.length / imagesPerSlide);
    }
  };

  const handleNext = () => {
    if (images.length / imagesPerSlide > index + 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const renderSingleImage = () => {
    if (windowWidth < 1024) {
      imagesPerSlide = 1;
      return (
        <div className="flexcontainer d-flex flex-row">
          <div className="arrow-container">
            <button className="arrow" onClick={handlePrev}>
              <MdArrowCircleLeft />
            </button>
          </div>
          <div className="imgCointainer">
            <div>
              <img src={images[index].url} alt="" />
              <p>
                <span>
                  <CiLocationOn />
                </span>

                {images[index].title}
              </p>
            </div>
          </div>
          <div className="arrow-container">
            <button className="arrow" onClick={handleNext}>
              <MdArrowCircleRight />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flexcontainer d-flex flex-row">
          <div className="arrow-container">
            <button className="arrow" onClick={handlePrev}>
              <MdArrowCircleLeft />
            </button>
          </div>
          <div className="imgCities">
            {images
              .slice(index * imagesPerSlide, (index + 1) * imagesPerSlide)
              .map((image) => (
                <div className="imgCointainer">
                  <div>
                    <img src={image.url} alt="" />
                    <p>
                      <span>
                        <CiLocationOn />
                      </span>
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="arrow-container">
            <button className="arrow" onClick={handleNext}>
              <MdArrowCircleRight />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flexcontainer">
      <div className="popularCities">
        <h2>Popular Mytineraries</h2>
        <div className="flexcontainer d-flex flex-row">
          <div className="imgCities">{renderSingleImage()}</div>
        </div>
      </div>
      
    </div>
  );
}

export default Carousel;
