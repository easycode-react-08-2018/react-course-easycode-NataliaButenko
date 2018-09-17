import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import {AdminPage} from './pages/adminPage.js';
import {UserPage} from "./pages/userPage";
import {ShoppingCart} from "./pages/shoppingCart";
import {HomePage} from "./pages/homePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'homePage',
      shoppingList: ['MacBook pro 2018', 'Dell xs', 'Microsoft Surface'],
      selectedCards: []
    };
  };

  changeActivePageToAdminPage = () => {
    this.setState({
      activePage: 'adminPage'
    });
  };

  changeActivePageToUserPage = () => {
    this.setState({
      activePage: 'userPage'
    });
  };

  changeActivePageToShoppingCartPage = () => {
    this.setState({
      activePage: 'shoppingCart'
    });
  };

  changeActivePageToHomePage = () => {
    this.setState({
      activePage: 'homePage',
      selectedCards: []
    });
  };

  addShopingItem = (item) => {
    let tmp = this.state.shoppingList.slice();
    tmp.push(item);
    this.setState({
      shoppingList: tmp,
      inputValue: ''
    });
  };

  addSelectedItem = (item) => {
    let tmp = this.state.selectedCards.slice();
    tmp.push(item);
    this.setState({
      selectedCards: tmp,
    });
  };

  render() {
    const {
      activePage,
      shoppingList,
      selectedCards
    } = this.state;

    if(activePage === 'homePage') {
      return <HomePage
        changeActivePageToAdminPage = {this.changeActivePageToAdminPage}
        changeActivePageToUserPage = {this.changeActivePageToUserPage}/>
    };

    if(activePage === 'adminPage') {
      return <AdminPage
        changeActivePageToHomePage = {this.changeActivePageToHomePage}
        changeActivePageToShoppingCartPage = {this.changeActivePageToShoppingCartPage}
        shoppingList={shoppingList}
        addSelectedItem={this.addSelectedItem}
        addShopingItem={this.addShopingItem}
      />
    };

    if(activePage === 'userPage') {
      return <UserPage
        changeActivePageToHomePage = {this.changeActivePageToHomePage}
        changeActivePageToShoppingCartPage = {this.changeActivePageToShoppingCartPage}
        shoppingList={shoppingList}
        selectedCards={selectedCards}
        addSelectedItem={this.addSelectedItem}/>
    };

    if(activePage === 'shoppingCart') {
      return <ShoppingCart
        changeActivePageToHomePage = {this.changeActivePageToHomePage}
        selectedCards={selectedCards} />
    };
  };
};

export default App;
