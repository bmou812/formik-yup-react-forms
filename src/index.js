import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import configureStore, { history } from "./store/configureStore";
import Root from "./Root";
import './styles/index.css';

const initialState = {};
const store = configureStore(initialState);

export const start = () => {
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById("app")
  );

  if (module.hot) {
    module.hot.accept("./Root", () => {
      const NewRoot = require("./Root").default;
      render(
        <AppContainer>
          <NewRoot store={store} history={history} />
        </AppContainer>,
        document.getElementById("app")
      );
    });
  }
};

start();
