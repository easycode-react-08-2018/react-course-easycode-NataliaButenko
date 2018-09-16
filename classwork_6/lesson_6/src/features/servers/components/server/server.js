import React, {Component} from 'react';
import './server.css'
import {TextEditor} from "../../../../shared/components/text-editoer/text-editor";

export class ServerComponent extends Component {
  state = {
    isInEditMode: false
  };

  toggleEditMode = () => {
    this.setState(({isInEditMode}) => ({
      isInEditMode: !isInEditMode
    }));
  };

  removeServer = () => {
    const {removeServer, server} = this.props;
    removeServer(server);
  };

  render() {
    const {isInEditMode} = this.state;

    const {server} = this.props;
    return(
      <div className='server__item'>
        <TextEditor
          isInEditMode={isInEditMode} className ='server__item-title' value={server.name}/>
        <button className='server__item-edit'
                onClick={this.toggleEditMode}>Edit server</button>
        <button onClick={this.removeServer}>Remove server</button>
      </div>
    );
  }
};
