/* Using Higher Order Component */

import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from '../components/Loading';

function RoomContainer ( { context } ) {
	const { loading, sortedRooms, rooms } = context;
	if ( loading )
	{
		return <Loading />;
	}
	return (
		<React.Fragment>
			<RoomFilter rooms={ rooms } />
			<RoomList rooms={ sortedRooms } />
		</React.Fragment>
	)
}

export default withRoomConsumer( RoomContainer );






/* Without using Higher Order Component */

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from '../components/Loading';

// export default function RoomsContainer () {
// 	return (
// 		<RoomConsumer>
// 			{
// 				( value ) => {
// 					console.log( value );
// 					const { loading, sortedRooms, rooms } = value;
// 					if ( loading )
// 					{
// 						return <Loading />;
// 					}
// 					return (
// 						<div>
// 							hello from RoomsContainer.js
// 							<RoomFilter rooms={rooms} />
// 							<RoomList rooms={sortedRooms} />
// 						</div>
// 					)
// 				}
// 			}
// 		</RoomConsumer>
// 	)
// }
