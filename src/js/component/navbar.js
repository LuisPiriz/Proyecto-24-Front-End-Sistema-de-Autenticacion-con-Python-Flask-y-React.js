import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Characters } from "./characters";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion

export const Navbar = (props) => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate() //activamos useNavigate
  const params = useParams();

  function handleLogout() {
		actions.logout()//cerrar la sesion
		navigate("/login")//usamos navigate para redireccionar

	}
  function handleLogin() {
		actions.login()//cerrar la sesion
		navigate("/login")//usamos navigate para redireccionar

	}
  function handleSignup() {
		navigate("/signup")//usamos navigate para redireccionar

	}

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
        {store.auth === true? <button className="btn btn-outline-warning mx-2 border-2" onClick={handleLogout}>Logout</button> : <><button className="btn btn-outline-warning me-2 border-2" onClick={handleLogin}>Login</button><button className="btn btn-outline-warning me-2 border-2" onClick={handleSignup}>Sign Up</button></>}
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
