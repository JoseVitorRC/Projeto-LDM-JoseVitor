import { useState } from 'react';
import { countries } from './data/countries';
import CountryCard from './components/CountryCard';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCountry = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
  };

  const prevCountry = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length);
  };

  return (
    <div className="container">
      <h1>Menu de Comidas Típicas</h1>
      <CountryCard country={countries[currentIndex]} />
      <div className="button-container">
        <button onClick={prevCountry}>Anterior</button>
        <button onClick={nextCountry}>Próximo</button>
      </div>
    </div>
  );
}
