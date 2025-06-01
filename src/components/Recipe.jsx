import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Trending from "./Trending";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const { idMeal } = useParams();
  const [data, setdata] = useState([]);
  const [active, setActive] = useState("ingredient")

  const handleRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty('--ripple-x', `${x}px`);
    button.style.setProperty('--ripple-y', `${y}px`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      setdata(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar />
      <div className="recipe-container">
        <h1>{data.strMeal}</h1>
        <div className="part">
          <div className="img">
            <img src={data.strMealThumb} alt={data.strMeal} />
          </div>
          <div className="details">
            <button className="btn ripple" onClick={()=>setActive("ingredient")} >
              <img src="/icons/Ingredients.png" alt="Ingredients" className="btn-icon" />
              ingredient 
            </button>
            <button className="btn ripple" onClick={() => setActive("instructions")}>
              <img src="/icons/Instructions.png" alt="Instructions" className="btn-icon" />
              Instructions
            </button>

           {active === "ingredient" ? (
  <div>
    {Object.keys(data)
      .filter((key) => key.startsWith("strIngredient") && data[key])
      .map((ingredientKey, index) => {
        const measureKey = `strMeasure${ingredientKey.replace("strIngredient", "")}`;
        const ingredient = data[ingredientKey];
        const measure = data[measureKey];

        return (
          <div key={index} className="ingredient">
            {ingredient} - {measure}
          </div>
        );
      })}
  </div>
) : (
  <p>{data.strInstructions}</p>
)}


           
          </div>
        </div>
      </div>
      <div className="trend">
      <Trending />
      </div>
    </>
  );
};

export default Recipe;
