import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Nav from "./Nav";
import FAQ from "./FAQ";
import ChatBox from "./ChatBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/ChatBox" component={ChatBox} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div class="container">
    <img src="https://www.pocket-lint.com/r/s/660x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image1-keant0hfcg-jpg.webp" />
    <img src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg" />
    <img src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg" />
    <img src="https://www.pocket-lint.com/r/s/660x/assets/images/149324-phones-review-review-iphone-11-pro-max-review-product-shots-image1-keant0hfcg-jpg.webp" />
  </div>
);

export default App;
