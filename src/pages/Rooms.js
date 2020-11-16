import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomContainer';
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
