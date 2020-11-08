import React from 'react'

function Hero ( { children, hero } ) {
	return (
		<section className={ hero }>
			{ children }
		</section>
	)
}

export default Hero

Hero.defaultProps = {
	hero: 'defaultHero'
}
