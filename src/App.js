import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <HashRouter basename="/">
        <Switch>
          <Route path="/" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
