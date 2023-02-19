import React from "react";
import "./Login.css";

function Login() {
  return (
    <div
      className="container"
      style={{
        width: "50%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          borderBottom: "1px solid white",
        }}
      >
        Login to your account
      </h1>
      <form
        action=""
        style={{
          marginTop: "50px",
        }}
      >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="inp form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            password
          </label>
          <input
            type="password"
            class="inp form-control"
            id="pw"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
