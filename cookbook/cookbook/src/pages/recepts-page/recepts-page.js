import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReceptListComponent} from "./components-recepts-page/recepts-list-component";
import './recepts-page.css';
import {addRecept} from "../../store/actions/recepts-actions/add-recept";
import {removeRecept} from "../../store/actions/recepts-actions/remove-recept";
import {createId} from "../../utils/createId";

const newRecept = {
  name: "Recept 3",
  id: createId(),
  ingredients: [
    {
      name: "Ingridient 01",
      id: createId(),
      quantity: 1
    },
    {
      name: "Ingridient 02",
      id: createId(),
      quantity: 1
    },
    {
      name: "Ingridient 03",
      id: createId(),
      quantity: 1
    },
    {
      name: "Ingridient 04",
      id: createId(),
      quantity: 1
    },
    {
      name: "Ingridient 05",
      id: createId(),
      quantity: 1
    },
    {
      name: "Ingridient 06",
      id: createId(),
      quantity: 1
    },
  ]
};

export class ReceptsComponent extends Component {

  addNewRecept = () => {
    const {addRecept} = this.props;
    //console.log(newRecept);
    addRecept(newRecept);
  };

  render() {
    const {
      recepts,
      removeRecept
    } = this.props;

    return(
      <div className="Recepts">
        <main className="main-recepts">
          <div className="dashboard">
            <input className="entry-field" type="text" placeholder="Fragment of name or ingredient"/>
            <button className="find">
              To find
            </button>
            <button className="add-recipe"
                    onClick={this.addNewRecept}>
              Add recipe
            </button>
          </div>
          <div className="recepts-list">
            <ReceptListComponent recepts={recepts} removeRecept={removeRecept}/>
          </div>
        </main>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    recepts: state.recepts
  };
};

const mapDispatchToProps = {
  addRecept,
  removeRecept
};

export const Recepts = connect(mapStateToProps, mapDispatchToProps)(ReceptsComponent);
