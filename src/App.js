import React from 'react'
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

function App () {
	return (
		<React.Fragment>
			<h1>Welcome to Beach Resort.</h1>
			<Home />
			<Rooms />
			<SingleRoom />
			<Error />

		</React.Fragment>
	);
}

export default App;
