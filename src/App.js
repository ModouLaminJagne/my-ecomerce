import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/homepage/Shop/shop.component";
import Header from "./Components/Header/header.component";
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
