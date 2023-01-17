import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single2 = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [planetas2, setPlanetas2] = useState({});

  function getInfoPlanets() {
    fetch("https://www.swapi.tech/api/planets/"+params.theid)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
	getInfoPlanets();
  }, []);

  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/header-starwars-mobile-01_2b709a38.jpeg?region=0,0,640,400"
          height={"300"}
          width={"auto"}
          alt=""
        />
        <div className="text-center ms-3">
          <h1 className="text-center">
			{planetas2.name}
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
			<p>{planetas2.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Birth Year</strong></p>
			<p>{planetas2.birth_year}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Gender</strong></p>
			<p>{planetas2.gender}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Height</strong></p>
			<p>{planetas2.height}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Skin color</strong></p>
			<p>{planetas2.skin_color}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Eye color</strong></p>
			<p>{planetas2.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single2.propTypes = {
  match: PropTypes.object,
};
