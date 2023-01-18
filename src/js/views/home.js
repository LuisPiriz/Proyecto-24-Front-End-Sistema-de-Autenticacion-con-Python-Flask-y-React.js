import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";
import { Context } from "../store/appContext";

export const Home = () => {

  const { store } = useContext(Context);

  // const [personajes, setPersonajes] = useState([]);
  // const [planetas, setPlanetas] = useState([]);
  // const [vehiculos, setVehiculos] = useState([]);

  // function getCharacters() {
  //   fetch("https://www.swapi.tech/api/people/")
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes(data.results))
  //     .catch((err) => console.error(err));
  // }

  // function getPlanets() {
  //   fetch("https://www.swapi.tech/api/planets")
  //     .then((res) => res.json())
  //     .then((data) => setPlanetas(data.results))
  //     .catch((err) => console.error(err));
  // }
  // function getVehicles() {
  //   fetch("https://www.swapi.tech/api/vehicles")
  //     .then((res) => res.json())
  //     .then((data) => setVehiculos(data.results))
  //     .catch((err) => console.error(err));
  // }
  useEffect(() => {
    // getCharacters();
    // getPlanets();
    // getVehicles();
  }, []);

  return (
    <>
      <div className="mt-3">
        <div className="text-center">
          <h1>Characters</h1>
        </div>
        <div className="scroll mb-4">
          {store.personajes.map((item, index) => (
            <Characters
            key={index}
              nombre={item.name}
			  id={item.uid}
              genero={item.gender}
              pelo={item.hair_color}
              ojos={item.eye_color}
            />
          ))}
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <h1>Planets</h1>
        </div>
        <div className="scroll mb-4">
          {store.planetas.map((item, index) => (
            <Planets
            key={index}
            nombre={item.name}
            id={item.uid} />
          ))}
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <h1>Vehicles</h1>
        </div>
        <div className="scroll mb-4">
          {store.vehiculos.map((item, index) => (
            <Vehicles 
            key={index}
            nombre={item.name}
            id={item.uid} />
          ))}
        </div>
      </div>
    </>
  );
};
