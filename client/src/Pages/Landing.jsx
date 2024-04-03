import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from 'react-router-dom';
// import logo from "../assets/images/logo.svg";
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        < Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Find the <span>job</span> that suits you best
          </h1>
          <p>
            Jobify is a platform that connects job seekers with employers. We
            help you find the job that suits you best.
          </p>
          <Link to='/register' className='btn register-link' >
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
