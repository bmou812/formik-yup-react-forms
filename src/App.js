import 'regenerator-runtime/runtime';
import { Route, Switch } from "react-router-dom";
import Main from "./containers/Main";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import styles from './App.css';
import { buildIconSprite } from "../src/utils/svg";
// Prepare the SVG icon sprite map
buildIconSprite(/\.svg$/);
class App extends React.Component {
  render() {
    return (
        <div className={styles.app}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);