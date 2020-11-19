import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBG from '../../../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../../Banner/Banner';
import { RoomContext } from '../../../Context';
import StyledHero from '../../Banner/StyledHero';
import Error from '../Error/Error';

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
        <Error />
      )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

    // Destructuring Array of an Image
    const [ mainImg, ...defaultImg ] = images;

    return (
      <React.Fragment>
        <StyledHero img={ mainImg || this.state.defaultBG }>
          <Banner
            title={ `${ name } room` }
          >
            <Link to="/rooms/" className="btn-primary">
              Back to rooms
					</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            { defaultImg.map( ( item, index ) => {
              return <img key={ index } src={ item } alt={ name } />
            } ) }
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{ description }</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price: ${ price }</h6>
              <h6>size: { size } Sqft.</h6>
              <h6>
                max capacity: {
                  capacity > 1 ? `${ capacity } people` : `${ capacity } person`
                }
              </h6>
              <h6>
                {
                  pets ? "pets allowed" : "pets not allowed"
                }
              </h6>
              <h6>
                {
                  breakfast ? "free breakfast included" : "free breakfast not included"
                }
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {
              extras.map( ( item, index ) => {
                return (
                  <li key={ index }>• { item }</li>
                )
              } )
            }
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
