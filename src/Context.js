import React, { Component } from 'react';
// import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    // For filtering the rooms
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // Getting data from Contentful
  getData = async () => {
    try
    {
      let response = await Client.getEntries( {
        content_type: 'beachResortRoom'
      } );
      let rooms = this.formatData( response.items );
      // console.log( rooms );
      let featuredRooms = rooms.filter( room => room.featured === true );
      let maxPrice = Math.max( ...rooms.map( item => item.price ) );
      let maxSize = Math.max( ...rooms.map( item => item.size ) );

      this.setState( {
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      } );
    } catch ( error )
    {
      console.log( error );
    }
  }

  formatData ( items ) {
    let tempItems = items.map( item => {
      let id = item.sys.id;
      let images = item.fields.images.map( image => image.fields.file.url );
      let room = { ...item.fields, images, id };
      return room;
    } );
    return tempItems;
  }

  componentDidMount () {
    this.getData();
  }

  getRoom = ( slug ) => {
    let tempRooms = [ ...this.state.rooms ];
    const room = tempRooms.find( ( room ) => room.slug === slug );
    return room;
  }

  handleChange = ( event ) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState( {
      [ name ]: value
    }, this.filterRooms );
  }

  filterRooms = () => {
    // console.log( 'Hello World!' );
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [ ...rooms ];

    // Transforming value into int
    capacity = parseInt( capacity );
    price = parseInt( price );
    minSize = parseInt( minSize );
    maxSize = parseInt( maxSize );


    // Filter by type
    if ( type !== 'all' )
    {
      tempRooms = tempRooms.filter( ( room ) => room.type === type );
    }
    // console.log( tempRooms );

    // Filter by capacity
    if ( capacity !== 1 )
    {
      tempRooms = tempRooms.filter( ( room ) => room.capacity >= capacity );
    }

    // Filter by price
    tempRooms = tempRooms.filter( ( room ) => room.price <= price );

    // Filtering by room size
    tempRooms = tempRooms.filter( ( room ) => room.size >= minSize && room.size <= maxSize );

    // Filtering by breakfast
    if ( breakfast )
    {
      tempRooms = tempRooms.filter( ( room ) => room.breakfast === true );
    }

    // Filtering by pets
    if ( pets )
    {
      tempRooms = tempRooms.filter( ( room ) => room.pets === true );
    }

    // Setting sorted rooms to state
    this.setState( {
      sortedRooms: tempRooms
    } );

  }

  render () {
    return (
      <RoomContext.Provider value={
        {
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }
      }>
        { this.props.children }
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

// Higher Order Component
export function withRoomConsumer ( Component ) {
  return function ConsumerWrapper ( props ) {
    return (
      <RoomConsumer>
        {
          value => <Component { ...props } context={ value } />
        }
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext };