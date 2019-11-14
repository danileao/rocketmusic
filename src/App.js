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
import Login from "./pages/Login";

import GlobalStyle from "./styles/global";

import "./App.css";

function App() {
  const isLogged =
    localStorage.getItem("@rocketMusic/token") != null ? true : false;

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        {isLogged ? (
          <>
            <Header />
            <Routes />
            <ToastContainer autoClose={3000} />
            <Footer />
          </>
        ) : (
          <Login />
        )}
      </Router>
    </Provider>
  );
}

export default App;
