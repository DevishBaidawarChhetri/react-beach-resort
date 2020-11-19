import React from 'react';
import Hero from '../../Banner/Hero';
import Banner from '../../Banner/Banner';
import { Link } from 'react-router-dom';

function Error () {
  return (
    <Hero>
      <Banner
        title="404"
        subtitle={ 'Sorry, Page not found.' }
      >
        <Link to="/" className="btn-primary">Return home</Link>
      </Banner >
    </Hero >
  )
}

export default Error
