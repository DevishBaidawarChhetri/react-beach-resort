import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Banner/Hero';
import Banner from '../../Banner/Banner';
import RoomsContainer from '../../Room/RoomContainer';
function Rooms () {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms"
        >
          <Link to="/" className="btn-primary">Retutn home</Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  )
}

export default Rooms
