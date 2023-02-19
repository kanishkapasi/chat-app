import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/Register"}>
        <button type="button" className="btn btn-dark">
          Register
        </button>
      </Link>
      <Link to={"/Login"}>
        <button type="button" className="btn btn-dark">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Home;
