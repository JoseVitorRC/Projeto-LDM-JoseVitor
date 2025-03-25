import React from 'react';

export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      <h2>{country.name}</h2>
      <div className="food-list">
        {country.foods.map((food, index) => (
          <div key={index} className="food-item">
            <h3>{food.name}</h3>
            <p>{food.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
