import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReceptListComponent} from "./components-recepts-page/recepts-list-component";
import './recepts-page.css';

export class ReceptsComponent extends Component {

  render() {
    const {
      recepts
    } = this.props;
    console.log(recepts);

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
            <ReceptListComponent recepts={recepts}/>
          </div>
        </main>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recepts: state,
  };
};

export const Recepts = connect(mapStateToProps)(ReceptsComponent);
