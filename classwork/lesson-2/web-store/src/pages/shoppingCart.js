import React from "react";
import {AdminPage} from './adminPage.js';

const ShopingItem = ({product}) => {
  return (
    <li className="list-group-item">
      <img src="#" alt=""/>
      <a href="#" className="admin-orders__link">
        {product}
      </a>
      <h2 className="float-right btn-link">✎</h2>
    </li>
  );
};

export class ShoppingCart extends React.Component {
  render() {
    const {
      changeActivePageToHomePage,
      selectedCards
    } = this.props;

    return(
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Shopping Cart</h1>
            <ul className="list-group">
              {
                selectedCards.map(product => <ShopingItem key={product} product={product} />)
              }
            </ul>
          </div>
          <div className="col-4">
            <div>
              User
            </div>
            <button
            onClick={changeActivePageToHomePage}>User Logout</button>
          </div>
        </div>
        <div className="row">
          <pre>price:</pre>
        </div>
        <div className="row">
          <button className="btn btn-primary">Ship it</button>
        </div>
      </div>
    );
  };
};
