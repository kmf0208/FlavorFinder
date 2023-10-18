import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './styling/register.css'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))

    }


  return (
      <div className="inner_background" >
        <div className="text_color">
          <h1 id="registration">Register</h1>
          <form className="register_form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label id="name_title" htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
              id="name_input"
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"

                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label id="email_title" htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
              id="email_input"
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label id="password_title" htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
              id="password_input"
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="register_button">
              Register
            </button>
          </form>
            <p>Already Have an Account?</p>
            <Link to="/login" className="login_button">
              Login
            </Link>
          
        </div>
      </div>
    
  );
}

export default Signup;