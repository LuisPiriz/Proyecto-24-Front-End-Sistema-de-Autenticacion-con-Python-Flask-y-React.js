import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { store, actions } = useContext(Context);

    function enviarDatos(e) {
        e.preventDefault();
        actions.signup(email, password, username, firstName, lastName);
        actions.login(email, password, username, firstName, lastName);
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
      }

    return (
        <>
        {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <form className="w-50 mx-auto m-5" onSubmit={enviarDatos}>
          <h1 className="mb-3 text-warning ">Sign Up</h1>
          <div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-warning"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-warning"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-warning"
              >
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword3"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-warning"
              >
                Lastname
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-warning">
              Submit
            </button>
          </div>
        </form>
        )}
        </>
    )

}