import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [password, setPassword] = useState("");

  const handle = (e) => {
    e.preventDefault();

    const data = { email, fName, lName, password };
    console.log(data);
  };

  return (
    <div
      className="container"
      style={{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          borderBottom: "2px solid white",
        }}
      >
        Register
      </h1>
      <form
        style={{
          marginTop: "40px",
        }}
        onSubmit={handle}
      >
        <div className="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <br />
          <input
            type="email"
            className="inp form-control"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="slide mb-3 d-flex flex-row justify-content-between">
          <div
            style={{
              width: "46%",
            }}
          >
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              className="inp form-control"
              id="fName"
              placeholder="First Name"
              value={fName}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              width: "46%",
            }}
          >
            <label for="lastname" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="inp form-control"
              id="lastName"
              placeholder="Last Name"
              value={lName}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="inp form-control"
            id="pw"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div className="login d-flex flex-row align-items-center mt-4">
        <p style={{}}>Already have an account?</p>
        <Link to={"/Login"}>
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
