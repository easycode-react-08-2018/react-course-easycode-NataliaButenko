import React from 'react';
import {connect} from 'react-redux';
import {ServerComponent} from "./components/server/server";
import './servers.css';
import {addServer} from "../../store/action/server-action/add-server";
import {removeServer} from "../../store/action/server-action/remove-server";

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4();
}

export class ServersComponent extends React.Component {

  addNewServer = () => {
    const {addServer, servers} = this.props;
    const uid = guid();
    addServer({
      name: `Server #${uid}`,
      id: uid
    })
  };


  render() {
    const {
      servers,
      history,
      removeServer
    } = this.props;

    console.log('servers', servers);

    return(
      <React.Fragment>
        <ul className='server-list'>
          {servers.map((server) => {
            return(
              <li className='server-list-item' key={server.id}>
                <ServerComponent server={server} removeServer={removeServer}/>
              </li>
            )
          })}
        </ul>
        <button onClick={this.addNewServer}>ADD SERVER</button>
        <div className='history'>
          {history.map((item, index) => <p key={index}>{item.actionType} {item.name}</p>)}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return{
    servers: state.servers,
    history: state.history
  }
};

const mapDispatchToProps = {
  addServer,
  removeServer
};

export const Server = connect(mapStateToProps, mapDispatchToProps)(ServersComponent);
