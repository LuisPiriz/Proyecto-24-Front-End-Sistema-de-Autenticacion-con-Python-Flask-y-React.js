import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Characters } from "./characters";
import { Context } from "../store/appContext";

export const Navbar = (props) => {

  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <nav className="navbar p-0">
      <div className="container">
        <Link className="navbar-brand p-0" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg"
            alt="Bootstrap"
            width="80"
            height="80"
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-outline-warning border-2 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-dark p-0">
           
              {store.favoritos.map((item, index) => (
                 <li className="d-flex" key={index}>
              <a className="lh-lg text-warning dropdown-item" type="button">
                {item}
              </a>
              <button className="closebutton m-2 text-warning" onClick={() => actions.borrarFavorito(item)}>x
              </button>
              </li>
              ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
