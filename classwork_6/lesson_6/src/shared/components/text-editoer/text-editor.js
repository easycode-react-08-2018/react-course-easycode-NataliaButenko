import React, {Component} from 'react';

export class TextEditor extends Component {
  render() {
    const {
      value,
      onChange,
      isInEditMode,
      className
    } = this.props;

    if(isInEditMode) {
      return(
        <input
          value={value}
          onChange={onChange}
          className={className}/>
      )
    }

    return <span className={className}>{value}</span>
  }
}