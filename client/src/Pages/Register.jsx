import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            defaultValue="Walid"
            required
          />

          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="last-name"
            className="form-input"
            defaultValue="Yusuf"
            required
          />

          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-input"
            defaultValue="Lavon, TX"
            required
          />

          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            defaultValue="Email"
            required
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
        </div>
      </form>
    </Wrapper>
  );
};
export default Register;
