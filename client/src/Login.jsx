import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to import axios

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
            navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to='/home' type="submit" className="btn btn-success w-100 rounded-0">
          Login
        </Link>
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="btn btn-default border bg-light rounded-0 text-decoration-none"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );

}

export default Login;