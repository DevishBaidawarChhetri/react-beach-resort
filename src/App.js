import React from 'react';
import './css/App.css';
import ScrollToTop from './ScrollToTop';
import Home from './components/Pages/Index/Home';
import Rooms from './components/Pages/Rooms/Rooms';
import SingleRoom from './components/Pages/Rooms/SingleRoom';
import Error from './components/Pages/Error/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App () {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/rooms/' component={ Rooms } />
          <Route exact path='/rooms/:slug' component={ SingleRoom } />
          <Route component={ Error } />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
