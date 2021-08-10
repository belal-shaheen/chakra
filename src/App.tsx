import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import SuspenseWithChunkError from "./components/SuspenseWithChuckError";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <Router>
      <Menu>
        <SuspenseWithChunkError fallback={<div></div>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
    </Router>
  );
}

export default App;
