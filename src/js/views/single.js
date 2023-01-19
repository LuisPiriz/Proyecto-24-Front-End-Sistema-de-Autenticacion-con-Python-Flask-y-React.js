import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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
          className="border border-warning rounded"
        />
        <div className="text-center ms-3 text-light">
          <h1 className="text-center text-warning">{store.personajes2.properties?.name}</h1>
          <hr className="my-4 text-warning" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dolorem quos quo soluta saepe quaerat molestias placeat deleniti.
            Tempore sunt vel animi eveniet, nesciunt officia ullam nemo ipsum
            dignissimos fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos fugiat at nam necessitatibus corrupti est odio, debitis cumque, possimus hic placeat sed, excepturi beatae! Sed facilis possimus alias a.
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="my-4 text-warning" />
        <div className="d-flex mt-2 text-warning">
          <div className="col-2 text-center">
            <p>
              <strong>Name</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.name}</p>
          </div>
          <div className="col-2 text-center">
            <p>
              <strong>Birth Year</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.birth_year}</p>
          </div>
          <div className="col-2 text-center">
            <p>
              <strong>Gender</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.gender}</p>
          </div>
          <div className="col-2 text-center">
            <p>
              <strong>Height</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.height}</p>
          </div>
          <div className="col-2 text-center">
            <p>
              <strong>Skin color</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.skin_color}</p>
          </div>
          <div className="col-2 text-center">
            <p>
              <strong>Eye color</strong>
            </p>
            <p className="text-light">{store.personajes2.properties?.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
