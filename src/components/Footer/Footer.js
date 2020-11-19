import React from 'react';

export default function Footer () {

	return (
		<React.Fragment>
			<section className="footer">
				<p>&copy; <a href="https://www.devish.com.np">Beach Resort</a> { new Date().getFullYear() }. All Rights Reserved. </p>
			</section>
		</React.Fragment>
	)
}
