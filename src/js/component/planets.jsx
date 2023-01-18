import React from 'react'
import { Link } from "react-router-dom";

export const Planets = (props) => {
  
  return (
<div className="col">
<div className="card mx-3" style={{height: "auto", width: 350}}>
        <img src={props.id === "1" ? `https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg` :`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} style={{height: 348, width: 348}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Population:</li>
            <li className="list-group-item">Terrain:</li>
          </ul>
          <Link to={"/single2/"+props.id} type="button" className="btn btn-outline-primary">Learn more</Link>
          <button type="button" className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
