import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SecondPage } from "./pages/secondPage";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second-page">Second Page</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/second-page" component={SecondPage} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
