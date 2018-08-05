// Dashboard Component
// The Dashboard component should manage the entire application state
// The state should contain a notes array
// It should have a bound addNote(note) method that adds a note to state.notes
// each note that gets added should have the following data
// id: always should contain the result of uuid.v1()
// editing: false by default
// completed: false by default
// content: user provided content
// title: user provided title
// It should have a bound removeNote(note) method that removes a note from state.notes based on its id

import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid/v4';

export default class Notes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: '',
      editing: false,
      completed: false,
      content: '',
      title: '',
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    let words = {};
    words[note.id] = note.text;
    this.setState(Object.assign(this.state.notes, words));
  }


  removeNote(note) {

  }



  render() {
    return (
      <React.Fragment>




      </React.Fragment>
    );
  }

}