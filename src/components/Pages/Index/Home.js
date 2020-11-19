import React from 'react';
import Hero from '../../Banner/Hero';
import Banner from '../../Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import FeaturedRooms from '../../Room/FeaturedRooms';

function Home () {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Delux rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
				</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  )
}

export default Home
