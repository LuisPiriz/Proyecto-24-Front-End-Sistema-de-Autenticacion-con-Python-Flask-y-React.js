import React, { useEffect, useState } from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [planetas, setPlanetas] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

//   const [numero, setNumero] = useState([])

//   function getNumero() {
// 	fetch("https://www.swapi.tech/api/people/")
//       .then((res) => res.json())
//       .then((data) => setNumero(data.results))
//       .catch((err) => console.error(err));
//   }
//   console.log(numero);

  function getCharacters() {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));
  }

  function getPlanets() {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results))
      .catch((err) => console.error(err));
  }
  function getVehicles() {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then((data) => setVehiculos(data.results))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getCharacters();
    getPlanets();
    getVehicles();
	// getNumero()
  }, []);

  return (
    <>
      <div className="row">
        <div className="text-center">
          <h1>Characters</h1>
        </div>
        <div className="scroll mb-4">
          {personajes.map((item) => (
            <Characters
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
          {planetas.map((item) => (
            <Planets nombre={item.name} />
          ))}
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <h1>Vehicles</h1>
        </div>
        <div className="scroll mb-4">
          {vehiculos.map((item) => (
            <Vehicles nombre={item.name} />
          ))}
        </div>
      </div>

      {/* <Characters/>
		<Planets/>
		<Vehicles/> */}
    </>
  );
};
