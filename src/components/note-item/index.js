import React from 'react';

export default class noteItem extends React.Component {

  removeOne = (e) => {
    e.preventDefault();
    this.props.remove(e.target.parentNode.id);
    console.log(e.target.parentNode.id);
  }

  render() {
    return (
      <React.Fragment>

        <button onClick={this.removeOne} >X</button>

      </React.Fragment>
    );
  }

}