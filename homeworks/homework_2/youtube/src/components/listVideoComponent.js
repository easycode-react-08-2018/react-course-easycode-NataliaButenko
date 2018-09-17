import React, {Component} from 'react';

export class ListVideoComponent extends React.Component {
  render() {
    const {
      arrUrlImg
    } = this.props;
    console.log('--arrUrlImg', arrUrlImg);
    return (
      <ul className="col-md-4 list-group">
      {arrUrlImg.map(url => {
        return (
          <li className="list-group-item">
            <div className="video-list media">
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={url}/>
                </div>
              </div>
              <div className="media-body">
                <div className="media-heading">SOME VIDEO</div>
              </div>
            </div>
          </li>
        )
      })}
        </ul>
      // {/*<ul className="col-md-4 list-group">*/}
      //   {/*<li className="list-group-item">*/}
      //     {/*<div className="video-list media">*/}
      //       {/*<div className="video-list media">*/}
      //         {/*<div className="media-left">*/}
      //           {/*<img className="media-object" src="https://i.ytimg.com/vi/XbxZargtXug/default.jpg"/>*/}
      //         {/*</div>*/}
      //       {/*</div>*/}
      //       {/*<div className="media-body">*/}
      //         {/*<div className="media-heading">SOME VIDEO</div>*/}
      //       {/*</div>*/}
      //     {/*</div>*/}
      //   {/*</li>*/}
      //   {/*<li className="list-group-item">*/}
      //     {/*<div className="video-list media">*/}
      //       {/*<div className="video-list media">*/}
      //         {/*<div className="media-left">*/}
      //           {/*<img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg"/>*/}
      //         {/*</div>*/}
      //       {/*</div>*/}
      //       {/*<div className="media-body">*/}
      //         {/*<div className="media-heading">SOME VIDEO</div>*/}
      //       {/*</div>*/}
      //     {/*</div>*/}
      //   {/*</li>*/}
      //   {/*<li className="list-group-item">*/}
      //     {/*<div className="video-list media">*/}
      //       {/*<div className="video-list media">*/}
      //         {/*<div className="media-left">*/}
      //           {/*<img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg"/>*/}
      //         {/*</div>*/}
      //       {/*</div>*/}
      //       {/*<div className="media-body">*/}
      //         {/*<div className="media-heading">SOME VIDEO</div>*/}
      //       {/*</div>*/}
      //     {/*</div>*/}
      //   {/*</li>*/}
      // {/*</ul>*/}
    )
  }
}