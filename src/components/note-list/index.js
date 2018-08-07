import React from 'react';

import Item from './../note-item/index';

export default class NoteList extends React.Component {


  render() {
    return (
      <React.Fragment>
        <ul>

          {this.props.notes.map(item => (
            <li id={item.id} key={item.id}>
              {item.title}
              <p>
                {item.content}
              </p>
              <Item remove={this.props.remove}/>
            </li>
          ))}
        </ul>

      </React.Fragment>
    );
  }
}