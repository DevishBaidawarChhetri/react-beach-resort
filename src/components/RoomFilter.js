import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';
// Get Unique Values
const getUnique = ( items, value ) => {
	return [ ...new Set( items.map( item => item[ value ] ) ) ]
}
export default function RoomsFilter ( { rooms } ) {
	const context = useContext( RoomContext );
	// console.log( context );
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets
	} = context;

	// Get Unique Room Types
	let types = getUnique( rooms, 'type' );

	// Add All in types
	types = [ 'all', ...types ];

	// Maping to jsx
	types = types.map( ( item, index ) => {
		return <option value={ item } key={ index }>{ item }</option>
	} );

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* Select Type Begins */ }
				<div className="form-group">
					<label htmlFor="type">Room Type</label>
					<select name="type" id="type" value={ type } className="form-control" onChange={ handleChange }>
						{ types }
					</select>
				</div>
				{/* Select Type Ends */ }
			</form>
		</section>
	)
}
