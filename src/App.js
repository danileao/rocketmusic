import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";

import history from "./services/history";

import store from "./store";

import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyle from "./styles/global";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
