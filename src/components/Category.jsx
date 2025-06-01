import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Trending from "./Trending";

const Category = () => {
  const { name } = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();

      //   console.log(data);
      setdata(data.meals);
    };
    fetchData();
  }, [name]);

  return (
    <>
    <Navbar />

      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {data.map((item) => {
          return (
            <Link to={`/${item.idMeal}`} key={item.idMeal} className="link">
            <div style={{ textAlign: "center" }}>
              <div className="img">
                <img src={item.strMealThumb} alt="" />
              </div>
              <h3 style={{ marginTop: "2rem" }}>{item.strMeal}</h3>
            </div>
            </Link>
          );
        })}
      </div>

      <Trending />
    </>
  );
};

export default Category;
