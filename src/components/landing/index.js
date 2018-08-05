// landing component

// Landing Component
// The Landing component should display a brief description of the notes app

import React from 'react';

// import Nav from './../../nav/nav';

export default class Landing extends React.Component {

  render() {
    return (
      <React.Fragment>
        {/* <Nav /> */}

        <h2>Welcome to the Notes</h2>

        <p>Add notes to this app! delete them if you get sick of them! its fun!</p>

      </React.Fragment>
    );
  }
}