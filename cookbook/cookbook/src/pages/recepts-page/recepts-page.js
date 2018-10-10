import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReceptListComponent} from "./components-recepts-page/recepts-list-component";
import './recepts-page.css';
import {selectFilterText} from "../../selectors/select-filter-text";
import {selectFilteredRecepts} from "../../selectors/select-filtered-recepts";
import {addRecept} from "../../store/actions/recepts-actions/add-recept";
import {removeRecept} from "../../store/actions/recepts-actions/remove-recept";
import {createId} from "../../utils/createId";
import {filterRecept} from "../../store/actions/recepts-actions/filter-recept";

const newRecept = {
  name: "Paste",
  id: createId(),
  ingredients: [
    {
      name: "egg",
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
    addRecept(newRecept);
  };

  onInputChange = (e) => {
    const{filterRecept} = this.props;
    filterRecept(e.target.value)
  };

  render() {
    const {
      removeRecept,
      filteredRecepts,
      filterText
    } = this.props;

    return(
      <div className="Recepts">
        <main className="main-recepts">
          <div className="dashboard">
            <input className="entry-field"
                   type="text"
                   placeholder="Fragment of name or ingredient"
                   value={filterText}
                   onChange={this.onInputChange} />
            <button className="add-recipe"
                    onClick={this.addNewRecept}>
              Add recipe
            </button>
          </div>
          <div className="recepts-list">
            <ReceptListComponent recepts={filteredRecepts} removeRecept={removeRecept}/>
          </div>
        </main>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    recepts: state.recepts,
    filterText: selectFilterText(state),
    filteredRecepts: selectFilteredRecepts(state)
  };
};

const mapDispatchToProps = {
  addRecept,
  removeRecept,
  filterRecept
};

export const Recepts = connect(mapStateToProps, mapDispatchToProps)(ReceptsComponent);
