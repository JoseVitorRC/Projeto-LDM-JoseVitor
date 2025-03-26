import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import "./CountryMenu.css";

const countries = [
  {
    name: "Brasil",
    backgroundImage: "/assets/images/brasil.jpg",
    foods: [
      { name: "Feijoada", image: "/assets/images/feijoada.jpg" },
      { name: "Moqueca", image: "/assets/images/moqueca.jpg" },
      { name: "Acarajé", image: "/assets/images/acaraje.jpg" },
    ],
  },
  {
    name: "Japão",
    backgroundImage: "/assets/images/japao.jpg",
    foods: [
      { name: "Sushi", image: "/assets/images/sushi.jpg" },
      { name: "Ramen", image: "/assets/images/ramen.jpg" },
      { name: "Tempurá", image: "/assets/images/tempura.jpg" },
    ],
  },
  {
    name: "França",
    backgroundImage: "/assets/images/franca.jpg",
    foods: [
      { name: "Coq au Vin", image: "/assets/images/coqauvin.jpg" },
      { name: "Chateaubriand", image: "/assets/images/chatea.jpg" },
      { name: "Ratatouille", image: "/assets/images/ratatouille.jpg" },
    ],
  },
  {
    name: "Itália",
    backgroundImage: "/assets/images/franca.jpg",
    foods: [
      { name: "Pizza Margherita", image: "/assets/images/pizza.jpg" },
      { name: "Pasta Carbonara", image: "/assets/images/carbonara.jpg" },
      { name: "Tiramisu", image: "/assets/images/tiramisu.jpg" },
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
