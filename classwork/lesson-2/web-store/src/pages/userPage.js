import React from "react";

const Mark = () => {
  return (<h3 className="text-success">✓✓✓✓✓</h3>)
};

const ShopingItem = ({product, addSelectedItem, selectedCards, key}) => {
  return (
    <div className="card" key={key}>
      <div className="card-body">
        <h5 className="card-title">{ product }</h5>
        <p className="card-text">{ product }</p>
        <button className="btn btn-light"
        onClick={() => addSelectedItem(product)}>Buy</button>
        {
          selectedCards.filter(card => card === product).length > 0 && <Mark />
        }
      </div>
    </div>
  );
};

export class  UserPage extends React.Component {
  render() {
    const {
      changeActivePageToHomePage,
      changeActivePageToShoppingCartPage,
      shoppingList,
      selectedCards,
      addSelectedItem
    } = this.props;

    return (
      <div className="container">
        <h1>USER PAGE</h1>
        <div className="row">
          <div className="col-8">
            <div className="row">
              {
                shoppingList.map(product => <ShopingItem key={ product } product={ product }
                  addSelectedItem={addSelectedItem} selectedCards={selectedCards}/>)
              }
            </div>
          </div>
          <div className="col-4">
            <div>
              User
            </div>
            <button className='orders'
            onClick={changeActivePageToShoppingCartPage}>Orders</button>
            <button
            onClick={changeActivePageToHomePage}>User Logout</button>
          </div>
        </div>
      </div>
    );
  };
};
