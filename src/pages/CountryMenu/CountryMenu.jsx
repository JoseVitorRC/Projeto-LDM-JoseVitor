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
      { name: "Pão de Queijo", image: "/assets/images/paodequeijo.jpg" },
      { name: "Brigadeiro", image: "/assets/images/brigadeiro.jpg" },
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
