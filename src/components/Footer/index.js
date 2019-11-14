import React from "react";
import { FaGithub } from "react-icons/fa";

import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <a
        alt="Github"
        href="https://github.com/danileao/rocketmusic"
        target="_blank"
      >
        <FaGithub size={24} />
        Desenvolvido por - Daniele Leão Evangelista{" "}
      </a>
    </Container>
  );
}
