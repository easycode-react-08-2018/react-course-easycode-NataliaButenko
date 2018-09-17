import React, {Component} from 'react';

export class MainVideoComponent extends React.Component {

  render() {
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="random" src="https://www.youtube.com/embed/XbxZargtXug"></iframe>
        </div>

        <div className="details">
          <div>TITLE</div>
          <div>DESCRIPTION</div>
        </div>
      </div>
    )
  }
}