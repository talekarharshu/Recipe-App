import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
      const data = await (await api).json();

      // console.log(data.meals);
      setdata(data.meals);
    };
    fetchData();
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container" style={{
       height: "26vh",
        width: "99%",
        margin: "auto",
        overflow: "hidden",
      }}>
        <Slider {...settings} 
        style={{margin: "1rem"}}
        >
          {data.map((item) => {
            return (
              <Link to={`/${item.idMeal}`} key={item.idMeal}>
              <div className="slider2">
                <img
                  src={item.strMealThumb}
                  alt=""
                  style={{ width: "9rem", height: "7rem" }}
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

export default Trending;
