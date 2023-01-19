import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = (props) => {

  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <div className="card me-4 text-warning border border-warning" style={{height: "auto", width: 250}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top border-bottom border-warning" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-light border-light">Gender:</li>
            <li className="list-group-item text-light border-light">Hair color:</li>
            <li className="list-group-item text-light border-light">Eye-color:</li>
          </ul>
          <div className="mt-2">
          <Link to={"/single/"+props.id} type="button" className="btn btn-outline-warning">Learn more</Link>
          <button type="button" onClick={() => store.favoritos.indexOf(props.nombre) !== -1 ? alert("Ya le diste like") : actions.agregarFavorito(props.nombre)} className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
