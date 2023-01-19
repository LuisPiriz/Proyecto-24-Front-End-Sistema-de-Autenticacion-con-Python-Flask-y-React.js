import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planets = (props) => {
  
  const { store, actions } = useContext(Context);
  return (
<div className="">
<div className="card me-4  text-warning border border-warning" style={{height: "auto", width: 250}}>
        <img src={props.id === "1" ? `https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/DesertPlanet.jpg/200px-DesertPlanet.jpg` :`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} style={{height: 248.77, width: 248.77}} className="card-img-top border-bottom border-warning" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  text-light border-light">Population:</li>
            <li className="list-group-item  text-light border-light">Terrain:</li>
          </ul>
          <div className="mt-2">
          <Link to={"/single2/"+props.id} type="button" className="btn btn-outline-warning">Learn more</Link>
          <button type="button" onClick={() => store.favoritos.indexOf(props.nombre) !== -1 ? alert("Ya le diste like") : actions.agregarFavorito(props.nombre)} className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
        </div>
        </div>
      </div>
    </div>
  )
}
