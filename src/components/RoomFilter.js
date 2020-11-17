import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

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

  // Get Unique Values
  const getUnique = ( items, value ) => {
    return [ ...new Set( items.map( item => item[ value ] ) ) ]
  }

  // Get Unique Room Types
  let types = getUnique( rooms, 'type' );

  // Add type "all" in types array
  types = [ 'all', ...types ];

  // Maping to jsx
  types = types.map( ( item, index ) => {
    return <option value={ item } key={ index }>{ item }</option>
  } );

  // Getting and Mapping Capacity
  let peopleCapacity = getUnique( rooms, 'capacity' );
  peopleCapacity = peopleCapacity.map( ( item, index ) => {
    return <option key={ index } value={ item }>{ item }</option>
  } )

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

        {/* Guest Begins */ }
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" value={ capacity } className="form-control" onChange={ handleChange }>
            { peopleCapacity }
          </select>
        </div>
        {/* Guest Ends */ }

      </form>
    </section>
  )
}
