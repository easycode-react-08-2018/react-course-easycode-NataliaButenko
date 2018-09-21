import React, {Component} from 'react';

export class ButtonRemoveComponent extends Component {
  removeRecept = () => {
    const {removeRecept, recept} = this.props;
    removeRecept(recept);
  };

  render() {
    return (
      <button className="button-remove"
              onClick={this.removeRecept}>Remove</button>
    )
  }
}
