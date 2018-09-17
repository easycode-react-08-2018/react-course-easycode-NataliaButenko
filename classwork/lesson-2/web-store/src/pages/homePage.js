import React from "react";

export class HomePage extends React.Component {
  render() {
    const {
      changeActivePageToAdminPage,
      changeActivePageToUserPage
    } = this.props;

    return(
      <div className="container">
        <h1>Main Page</h1>
        <div className="row">
          <button className="btn btn-primary"
          onClick={changeActivePageToAdminPage}
          >Login as Admin</button>
          <button className="btn btn-outline-primary"
          onClick={changeActivePageToUserPage}
          >Login as User</button>
        </div>
      </div>
    )
  };
};
