import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function enviarDatos(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
    
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <form className="w-50 mx-auto m-5" onSubmit={enviarDatos}>
          <h1 className="mb-3 text-warning ">Login</h1>
          <div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-warning">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-warning"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-warning">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};
