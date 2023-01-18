import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // const [personajes2, setPersonajes2] = useState({});
  // function getInfoCharacters() {
  //   fetch("https://www.swapi.tech/api/people/"+params.theid)
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes2(data.result.properties))
  //     .catch((err) => console.error(err));
  // }

  useEffect(() => {
    actions.getInfoCharacters(params.theid);
  }, []);

  return (
    <div className="container mt-4">
		<div className="d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
          height={"300"}
          width={"auto"}
          alt=""
        />
        <div className="text-center ms-3">
          <h1 className="text-center">
			{store.personajes2.properties?.name}
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
			<p>{store.personajes2.properties?.name}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Birth Year</strong></p>
			<p>{store.personajes2.properties?.birth_year}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Gender</strong></p>
			<p>{store.personajes2.properties?.gender}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Height</strong></p>
			<p>{store.personajes2.properties?.height}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Skin color</strong></p>
			<p>{store.personajes2.properties?.skin_color}</p>
          </div>
          <div className="col-2 text-center">
            <p><strong>Eye color</strong></p>
			<p>{store.personajes2.properties?.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
