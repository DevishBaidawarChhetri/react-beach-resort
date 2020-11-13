import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBG from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
	constructor ( props ) {
		super( props );
		// console.log( this.props );
		this.state = {
			slug: this.props.match.params.slug,
			defaultBG
		}
	}
	static contextType = RoomContext;
	render () {
		const { getRoom } = this.context;
		const room = getRoom( this.state.slug );
		// console.log( room );
		if ( !room )
		{
			return (
				<div className="error">
					<h3>No such room could be found!</h3>
					<Link to="/rooms" className="btn-primary">
						Back to rooms
					</Link>
				</div>
			)
		}

		const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
		return (
			<StyledHero img={ images[ 0 ] || this.state.defaultBG }>
				<Banner
					title={ `${ name } room` }
				>
					<Link to="/rooms/" className="btn-primary">
						Back to room
					</Link>
				</Banner>
			</StyledHero>
		)
	}
}
