import React, {Component} from 'react';

export class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-bar navbar">
        <input type="text" placeholder="Search"/>
      </div>
    )
  }
}