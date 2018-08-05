// app component

// App Component
// The App component should manage the frontend routes and have a navbar
// the / route should display the Landing component
// the /dashboard route should display the Dashboard component

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Nav from './../../nav/nav';
import Landing from './../landing/index';
import Dashboard from './../dashboard/index';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>

          <Nav/>

          <main>
            <Route exact path='/' component={Landing} />

            {/* <Route path ='/dashboard' component={Dashboard} /> */}


          </main>


        </React.Fragment>
      </BrowserRouter>
      
    );
  }

}