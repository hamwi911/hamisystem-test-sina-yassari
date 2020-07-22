import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import MovieDetail from "./Pages/MovieDetail/MoviesDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/movie/detail/:id' component={MovieDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
