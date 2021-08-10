import React, { lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import history from "./routerHistory";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import SuspenseWithChunkError from "./components/SuspenseWithChuckError";
import Menu from "./components/Menu";

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
