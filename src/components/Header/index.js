import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { MdMusicNote, MdShoppingBasket, MdExitToApp } from "react-icons/md";
import { Container, Cart, Logout, Right } from "./styles";
import * as CartActions from "../../store/modules/cart/actions";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const total = useSelector(state => state.cart.length);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("@rocketMusic/token"));
  }, []);

  function logout() {
    dispatch(CartActions.logoutRequest());
  }

  return (
    <Container>
      <Link to="/">
        <MdMusicNote size={45} color="#FFF" />
        <img src={logo} alt="Rocket Music" />
      </Link>

      <Right>
        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{total} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
        <span>Seja bem vindo(a) {username} </span>
        <Logout>
          <button onClick={logout}>
            <MdExitToApp alt="Logout" size={26} color="#fff" />
          </button>
        </Logout>
      </Right>
    </Container>
  );
}
