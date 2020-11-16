import React from 'react'
import Room from './Room'

export default function RoomList ( { rooms } ) {
	if ( rooms.length === 0 )
	{
		return (
			<div className="empty-search">
				<h3>Unfortunately no rooms matched your search parameters</h3>
			</div>
		)
	}
	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{
					rooms.map( items => {
						return <Room key={ items.id } room={ items } />;
					} )
				}
			</div>
		</section>
	)
}
