import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {SearchComponent} from './components/searchComponent';
import {MainVideoComponent} from './components/mainVideoComponent';
import {ListVideoComponent} from './components/listVideoComponent';

import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI';

class App extends Component {


  render() {
    let arrUrlImg = [];
    YTSearch({key: API_KEY, term: 'matrix'}, data => {
      //console.log('1', data);
      //console.log('2', data[0].snippet.thumbnails.default.url);
      data.map(elem => {
        arrUrlImg.push(elem.snippet.thumbnails.default.url);
        //console.log('3', arrUrlImg);
      })
    });
    return (
      <main className="container">
        <SearchComponent />
        <div className="row">
          <MainVideoComponent />
          <ListVideoComponent arrUrlImg={arrUrlImg}/>
        </div>
      </main>

    );
  }
}

export default App;
