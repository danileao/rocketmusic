import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MdMusicNote, MdShoppingBasket } from "react-icons/md";
import { Container, Cart } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const total = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <MdMusicNote size={45} color="#FFF" />
        <img src={logo} alt="Rocket Music" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{total} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
