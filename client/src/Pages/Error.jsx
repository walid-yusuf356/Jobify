import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError()
    console.log(error);
    if (error.status === 404) {
      return (
        <Wrapper>
          <div>
            <img src={img} alt='not found' />
            <h3>Ohh! page not found</h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to='/dashboard'>back home</Link>
          </div>
        </Wrapper>
      );
    }
  return (
    <div>
        Hey🤔🤔 this is the error page
        <Link to='/'> Go back to home page</Link>
    </div>
  )
}

export default Error
