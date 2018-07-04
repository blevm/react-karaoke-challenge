import React, { Component } from 'react';

class Filter extends Component {
  // state = {
  //   searchTerm: ''
  // }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.props.searchTerm} onChange={this.props.setSearchTerm}/>
      </div>
    );
  }
}

export default Filter;
