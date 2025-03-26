import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

import feijoada from "../../assets/images/feijoada.jpg"
import moqueca from "../../assets/images/moqueca.jpg"
import acaraje from "../../assets/images/acaraje.jpg"
import sushi from "../../assets/images/sushi.jpg"
import ramen from "../../assets/images/ramen.jpg"
import tempura from "../../assets/images/tempura.jpg"
import coqauvin from "../../assets/images/coqauvin.jpg"
import chatea from "../../assets/images/chatea.jpg"
import ratatouille from "../../assets/images/ratatouille.jpg"
import pizza from "../../assets/images/pizza.jpg"
import carbonara from "../../assets/images/carbonara.jpg"
import tiramisu from "../../assets/images/tiramisu.jpg"

import "./CountryMenu.css";

const countries = [
  {
    name: "Brasil",
    backgroundImage: "/assets/images/brasil.jpg",
    foods: [
      { name: "Feijoada", image: feijoada },
      { name: "Moqueca", image: moqueca },
      { name: "Acarajé", image: acaraje },
    ],
  },
  {
    name: "Japão",
    backgroundImage: "/assets/images/japao.jpg",
    foods: [
      { name: "Sushi", image: sushi },
      { name: "Ramen", image: ramen },
      { name: "Tempurá", image: tempura },
    ],
  },
  {
    name: "França",
    backgroundImage: "/assets/images/franca.jpg",
    foods: [
      { name: "Coq au Vin", image: coqauvin },
      { name: "Chateaubriand", image: chatea },
      { name: "Ratatouille", image: ratatouille },
    ],
  },
  {
    name: "Itália",
    backgroundImage: "/assets/images/franca.jpg",
    foods: [
      { name: "Pizza Margherita", image: pizza },
      { name: "Pasta Carbonara", image: carbonara },
      { name: "Tiramisu", image: tiramisu },
    ],
  },
];

export default function CountryMenu() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const nextCountry = () => setIndex((index + 1) % countries.length);
  const prevCountry = () => setIndex((index - 1 + countries.length) % countries.length);

  return (
    <div className="country-menu" style={{ backgroundImage: `url(${countries[index].backgroundImage})` }}>
      <LogoutButton logout={logout} />
      <h1>{countries[index].name}</h1>
      <div className="foods">
        {countries[index].foods.map((food, i) => (
          <div key={i} className="food-item">
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>
      <button onClick={prevCountry}>⬅️ Anterior</button>
      <button onClick={nextCountry}>Próximo ➡️</button>
    </div>
  );
}
