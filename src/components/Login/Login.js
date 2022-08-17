import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css"
const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const { token, setToken } = useAuth();
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      })
      .then(function (response) {
        if (response.data) {
          setToken(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleSubmitForm}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          ref={inputEmail}
          type="text"
          placeholder="Email or Phone"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          ref={inputPassword}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
