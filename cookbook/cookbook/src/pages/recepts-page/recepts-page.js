import React, {Component} from 'react';
import {ReceptListComponent} from "./components-recepts-page/recepts-list-component";

export class Recepts extends Component {
  render() {
    return(
      <div className="Recepts">
        <main className="main-recepts">
          <div className="dashboard">
            <input className="entry-field" type="text" placeholder="Fragment of name or ingredient"/>
            <button className="find">
              To find
            </button>
            <button className="add-recipe">
              Add recipe
            </button>
          </div>
          <div className="recepts-list">
            <ReceptListComponent/>
            <ReceptListComponent/>
            <ReceptListComponent/>
            <ReceptListComponent/>
            <ReceptListComponent/>
          </div>
        </main>
      </div>
    )
  }
}