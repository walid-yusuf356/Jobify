import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          defaultValue="Walid"
        />
        <FormRow
          type="text"
          name="LastName"
          defaultValue="Walid"
        />
        <FormRow
          type="text"
          name="name"
          defaultValue="Lavon, Texas"
        />
        <FormRow
          type="email"
          name="email"
          labelText="Email"
        />
        <FormRow 
        type="password" 
        name="password" 
        defaultValue={123456}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
