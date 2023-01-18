import React from 'react'
import { Link } from "react-router-dom";

export const Vehicles = (props) => {
  return (
    <div className="">
    <div className="card mx-3" style={{height: "auto", width: 350}}>
      {/* <img src={props.imageUrl} className="card-img-top" alt="..." /> */}
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Model:</li>
          <li className="list-group-item">Passengers:</li>
          <li className="list-group-item">Capacity:</li>
        </ul>
        <Link to={"/single3/"+props.id} type="button" className="btn btn-outline-primary">Learn more</Link>
        <button type="button" className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
      </div>
    </div>
  </div>
  )
}
