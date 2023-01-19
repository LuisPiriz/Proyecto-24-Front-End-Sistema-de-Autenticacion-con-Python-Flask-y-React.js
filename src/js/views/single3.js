import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import VehiclesInfo from "/workspace/Proyecto-19-StarwarsBlogReadingList/src/js/component/vehicles.json"

export const Single3 = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
	actions.getInfoVehicles(params.theid);
  }, []);

  let posicionator = actions.cambiadorIndex(params.theid);

  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
          height={"300"}
          width={"auto"}
          alt=""
          className="border border-warning rounded"
        />
        <div className="text-center ms-3 text-light">
          <h1 className="text-center text-warning">
			{store.vehiculos2.properties?.name}
          </h1>
          <hr className="my-4 text-warning" />
          <p>
          {VehiclesInfo[posicionator].description}
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="my-4 text-warning" />
        <div className="d-flex mt-2 text-warning">
          <div className="col-2 text-center">
            <p><strong>Name</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Cargo Capacity</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.cargo_capacity}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Crew</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.crew}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Length</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.length}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Model</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.model}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Passengers</strong></p>
			<p className="text-light">{store.vehiculos2.properties?.passengers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single3.propTypes = {
  match: PropTypes.object,
};
