import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single3 = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [vehiculos2, setVehiculos2] = useState({});

  function getInfoVehicles() {
    fetch("https://www.swapi.tech/api/vehicles/"+params.theid)
      .then((res) => res.json())
      .then((data) => setVehiculos2(data.result.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
	getInfoVehicles();
  }, []);

  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
          height={"300"}
          width={"auto"}
          alt=""
        />
        <div className="text-center ms-3">
          <h1 className="text-center">
			{vehiculos2.name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dolorem quos quo soluta saepe quaerat molestias placeat deleniti.
            Tempore sunt vel animi eveniet, nesciunt officia ullam nemo ipsum
            dignissimos fugiat?
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="my-4 text-danger" />
        <div className="d-flex mt-2 text-danger">
          <div className="col-2 text-center">
            <p><strong>Name</strong></p>
			<p>{vehiculos2.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Cargo Capacity</strong></p>
			<p>{vehiculos2.cargo_capacity}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Crew</strong></p>
			<p>{vehiculos2.crew}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Length</strong></p>
			<p>{vehiculos2.length}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Model</strong></p>
			<p>{vehiculos2.model}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Passengers</strong></p>
			<p>{vehiculos2.passengers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single3.propTypes = {
  match: PropTypes.object,
};
