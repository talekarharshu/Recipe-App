import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
      const data = await (await api).json();

      // console.log(data.meals);
      setdata(data.meals);
    };
    fetchData();
  }, []);

  var settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <>
      <div className="slider-container" style={{
        height: "56vh",
        width: "90%",
        margin: "auto",
      }}>
        <Slider {...settings} 
        style={{margin: "1rem"}}
        >
          {data.map((item) => {
            return (
                <Link to={`/${item.idMeal}`} key={item.idMeal}>
              <div className="slider">
                <img
                  src={item.strMealThumb}
                  alt=""
                  style={{ width: "18rem", height: "17rem" }}
                />
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Popular;
