import React, { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ value: "" });

  const credentials = {
    uname: "foo",
    pass: "bar",
  };

  const handleChange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.username === "" || userData.password === "") {
      setError(() => ({
        value: "Empty username/password field",
      }));
    } else if (
      userData.username.toLowerCase() === credentials.uname &&
      userData.password.toLowerCase() === credentials.pass
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.pathname = "/home";
    } else {
      setError(() => ({ value: "Invlaid username/Password" }));
      return;
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <form className="col-md-5">
        <h2 className="text-center text-dark">Log In</h2>
        <div className="form-outline mb-4">
          <input
            type="text"
            name="username"
            placeholder="foo"
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            placeholder="bar"
            className="form-control"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="form-label">Password</label>
        </div>
        <div className="text-danger">{error.value}</div>
        <div className="row mb-4">
          <div className="col">
            <Link to="/meme">login without credentials</Link>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Auth;
