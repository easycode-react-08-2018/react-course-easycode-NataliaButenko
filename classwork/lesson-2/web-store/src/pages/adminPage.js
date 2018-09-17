import React from "react";
import App from "../App";

const ShopingItem = ({product, addSelectedItem}) => {
  return (
    <li className="list-group-item">
      <img src="#" alt=""/>
      <a href="#" className="admin-orders__link">
        {product}
      </a>
      <h2 className="float-right btn-link add"
      onClick={() => addSelectedItem(product)}>add</h2>
      <h2 className="float-right btn-link">✎</h2>
    </li>
  );
};

export class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  buttonChange = () => {
    const { addShopingItem } = this.props;
    const { inputValue } = this.state;

    addShopingItem(inputValue);
    this.setState({inputValue: ''});
  };


  render() {
    const {
      changeActivePageToHomePage,
      changeActivePageToShoppingCartPage,
      shoppingList,
      addSelectedItem,
      addShopingItem
    } = this.props;

    return (
      <div className="container flex-grow-1">
        <div className="row">
          <div className="col-8">
            <div className="admin-orders">
              <h1>ADMIN PAGE</h1>
              <ul className="list-group">
                {
                  shoppingList.map(product => <ShopingItem key={product} product={product}
                    addSelectedItem={addSelectedItem} addShopingItem={addShopingItem}/>)
                }
              </ul>
              <br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text"
                       className="form-control"
                       placeholder="enter new name"
                       value={this.state.inputValue}
                       onChange={this.inputChange} />
                <button className="btn btn-primary"
                onClick={this.buttonChange}>Add</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              Admin
            </div>
            <button className='orders'
            onClick={changeActivePageToShoppingCartPage}>Orders</button>
            <button
            onClick={changeActivePageToHomePage}>Admin Logout</button>
          </div>
        </div>
      </div>
    );
  };
};
