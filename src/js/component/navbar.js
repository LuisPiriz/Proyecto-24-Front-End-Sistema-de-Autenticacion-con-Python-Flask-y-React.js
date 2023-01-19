import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Characters } from "./characters";
import { Context } from "../store/appContext";

export const Navbar = (props) => {

  const { store, actions } = useContext(Context);
  const params = useParams();
  // console.log(store.favoritos);

  // const [favoritos, setFavoritos] = useState([])
  // const [añadir, setAñadir] = useState("")

  // function addFavoritos(e) {
	// 	e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
	
	// 	setFavoritos(Favoritos.concat(añadir));
	// 	setAñadir("");
	// 	console.log(favoritos);
	// }

  return (
    <nav className="navbar bg-dark bg-gradient">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.pinimg.com/originals/b4/b5/fd/b4b5fdf7bf06601ad4bd1cc6f73acff3.png"
            alt="Bootstrap"
            width="80"
            height="80"
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
           
              {store.favoritos.map((item, index) => (
                 <li className="d-flex" key={index}>
              <Link className="dropdown-item" to={"/single/"+props.id}>
                {item}
              </Link>
              <button className="btn-close m-2" onClick={() => actions.borrarFavorito(item)}>
              </button>
              </li>
              ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
