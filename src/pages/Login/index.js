import React, { useState, useEffect } from "react";
import history from "../../services/history";

import logo from "../../assets/images/logo.png";

import { Wrapper, Content } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const user = localStorage.getItem("@rocketMusic/token");

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  function login() {
    localStorage.setItem("@rocketMusic/token", username);
    history.push("/");
  }
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="" />
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite seu nome"
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={login}>Entrar</button>
        </form>
      </Content>
    </Wrapper>
  );
}
