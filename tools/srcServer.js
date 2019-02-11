import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../webpack.config";
import express from "express";
const app = express();
const addMiddlewares = app => {
  const bundler = webpack(config);
  const middleware = webpackDevMiddleware(bundler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    silent: true,
    stats: "errors-only"
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(bundler));
};

addMiddlewares(app);

function startServer() {
  app.set("view engine", "ejs");
  app.listen(3000, "localhost", err => {
    if (err) {
      return console.log.error(err.message);
    }
    return console.log("started !");
  });
  app.get("*", (req, res) => {
    res.render("../src/index");
  });
}

startServer();
