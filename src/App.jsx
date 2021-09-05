import React from "react";
import Header from "./components/partials/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//componets
import Find from "./components/Find.jsx";
import History from "./components/History.jsx";
import Principal from "./components/Principal.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/history" component={History} />
          <Route path="/find" component={Find} />
          <Route path="/" component={Find} />
        </Switch>
      </Router>
    </div>
  );
}
