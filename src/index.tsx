import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import { StoreProvider } from "./store";
import { Router, RouteComponentProps } from "@reach/router";
import App from "./App";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/favorites' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
