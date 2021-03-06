import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../Banner/Title';

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

  // Maping room types to jsx
  types = types.map( ( item, index ) => {
    return <option value={ item } key={ index }>{ item }</option>
  } );

  // Getting and Mapping Capacity
  let peopleCapacity = getUnique( rooms, 'capacity' );
  peopleCapacity = peopleCapacity.map( ( item, index ) => {
    return <option key={ index } value={ item }>{ item }</option>
  } );

  //

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select Type Begins */ }
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={ type }
            onChange={ handleChange }>
            { types }
          </select>
        </div>
        {/* Select Type Ends */ }

        {/* Guest Begins */ }
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={ capacity }
            onChange={ handleChange }>
            { peopleCapacity }
          </select>
        </div>
        {/* Guest Ends */ }

        {/* Room Price Begins */ }
        <div className="form-group">
          <label htmlFor="price"></label>
          room price ${ price }
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={ minPrice }
            max={ maxPrice }
            value={ price }
            onChange={ handleChange }
          />
        </div>
        {/* Room Price Ends */ }

        {/* Room size Begins */ }
        <div className="form-group">
          <label htmlFor="size">Room size in sqft.</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              value={ minSize }
              onChange={ handleChange }
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              className="size-input"
              value={ maxSize }
              onChange={ handleChange }
            />
          </div>
        </div>
        {/* Room size ends */ }

        {/* Extras Begins */ }
        <div className="form-grpup">
          <label htmlFor="extras">Extras</label>
          <div className="single-extra" id="extras">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={ breakfast }
              onChange={ handleChange }
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={ pets }
              onChange={ handleChange }
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* Extras Ends */ }
      </form>
    </section>
  )
}
