import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const Home = () => {

  const { store } = useContext(Context);



  return (
    <>
      <div className="mt-3">
        <div className="text-center text-warning">
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
        <div className="text-center text-warning">
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
        <div className="text-center text-warning">
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
