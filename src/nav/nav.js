import React from 'react';
import {NavLink} from 'react-router-dom';


export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>

        <nav>
          <ul>
            <li>
              <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard'>DASHBOARD</NavLink>
            </li>
          </ul>
        </nav>
  
      </React.Fragment>
    );
  }
}


