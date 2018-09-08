import React from "react";

export const LoadingHOC = WrappedConponent => {
  return class LoadingHOCClass extends  React.Component {
    render() {
      return (
        <div>
          <div>Hello HOC</div>
          <button>+</button>
          <WrappedConponent {...this.props}/>
          <button>-</button>
        </div>
      )
    }
  }
 };