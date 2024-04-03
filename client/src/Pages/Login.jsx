import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="email"
        />
        <FormRow 
        type="password" 
        name="password"
        labelText="Password"
        defaultValue={123456}
        />
        <button type="button" className="btn btn-block">
          Login
        </button>
        <button type="button" className="btn btn-block">
          explore the app as a guest
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
