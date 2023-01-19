import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import PlanetasInfo from "/workspace/Proyecto-19-StarwarsBlogReadingList/src/js/component/planetas.json";

export const Single2 = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
	actions.getInfoPlanets(params.theid);
  }, []);

  let posicionador = params.theid-1; 
  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src={params.theid === "1" ? `https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg` :`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
          height={"300"}
          width={"auto"}
          alt=""
          className="border border-warning rounded"
        />
        <div className="text-center ms-3 text-light">
          <h1 className="text-center text-warning">
			{store.planetas2.properties?.name}
          </h1>
          <hr className="my-4 text-warning" />
          <p>
          {PlanetasInfo[posicionador].description}
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="my-4 text-warning" />
        <div className="d-flex mt-2 text-warning">
          <div className="col-2 text-center">
            <p><strong>Name</strong></p>
			<p className="text-light">{store.planetas2.properties?.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Climate</strong></p>
			<p className="text-light">{store.planetas2.properties?.climate}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Population</strong></p>
			<p className="text-light">{store.planetas2.properties?.population}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Orbital Period</strong></p>
			<p className="text-light">{store.planetas2.properties?.orbital_period}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Rotation Period</strong></p>
			<p className="text-light">{store.planetas2.properties?.rotation_period}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Diameter</strong></p>
			<p className="text-light">{store.planetas2.properties?.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single2.propTypes = {
  match: PropTypes.object,
};
