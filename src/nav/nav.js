import React from 'react';
import {NavLink} from 'react-router-dom';


export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>

        <nav>
          <ul>
            <li>
              <NavLink to='/home'>home</NavLink>
            </li>
            <li>
              <NavLink to='/notes'>notes</NavLink>
            </li>
          </ul>
        </nav>
  
      </React.Fragment>
    );
  }
}


